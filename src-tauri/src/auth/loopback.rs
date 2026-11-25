use std::{
    sync::{Arc, Mutex},
    time::Duration,
};

use axum::{
    Router,
    extract::{Query, State as AxumState},
    http::{HeaderName, HeaderValue, StatusCode},
    response::{Html, IntoResponse},
    routing::get,
};
use serde::Deserialize;
use tokio::{net::TcpListener, sync::oneshot};

use super::{LOGIN_ERROR, TIMEOUT_ERROR};

#[derive(Deserialize)]
pub(super) struct Callback {
    state: Option<String>,
    pub(super) code: Option<String>,
    pub(super) error: Option<String>,
    pub(super) error_description: Option<String>,
}

struct PendingCallback {
    expected_state: String,
    sender: Mutex<Option<oneshot::Sender<Callback>>>,
}

pub(super) struct Loopback {
    listener: TcpListener,
    redirect_uri: String,
}

impl Loopback {
    pub(super) async fn bind() -> Result<Self, String> {
        let listener = TcpListener::bind((std::net::Ipv4Addr::LOCALHOST, 0))
            .await
            .map_err(|_| "Não foi possível iniciar o retorno local do login.")?;
        let port = listener.local_addr().map_err(|_| LOGIN_ERROR)?.port();
        let redirect_uri = format!("http://localhost:{port}");
        Ok(Self {
            listener,
            redirect_uri,
        })
    }

    pub(super) fn redirect_uri(&self) -> &str {
        &self.redirect_uri
    }

    pub(super) async fn wait(
        self,
        state: String,
        open_browser: impl FnOnce() -> bool,
    ) -> Result<Callback, String> {
        let Self { listener, .. } = self;
        let (sender, receiver) = oneshot::channel();
        let callback = Arc::new(PendingCallback {
            expected_state: state,
            sender: Mutex::new(Some(sender)),
        });
        let router = Router::new()
            .route("/", get(receive_callback))
            .with_state(callback);

        let (shutdown, keep_serving) = oneshot::channel();
        let server = tokio::spawn(async move {
            axum::serve(listener, router)
                .with_graceful_shutdown(async move {
                    let _ = keep_serving.await;
                })
                .await
        });
        let opened = open_browser();
        let result = match opened {
            true => tokio::time::timeout(Duration::from_secs(180), receiver)
                .await
                .map_err(|_| TIMEOUT_ERROR)
                .and_then(|result| result.map_err(|_| LOGIN_ERROR)),
            false => Err("Não foi possível abrir o navegador para o login."),
        };
        let _ = shutdown.send(());
        let mut server = server;
        if tokio::time::timeout(Duration::from_secs(1), &mut server)
            .await
            .is_err()
        {
            server.abort();
        }
        result.map_err(str::to_owned)
    }
}

async fn receive_callback(
    AxumState(pending): AxumState<Arc<PendingCallback>>,
    Query(callback): Query<Callback>,
) -> impl IntoResponse {
    let valid = callback.state.as_deref() == Some(pending.expected_state.as_str())
        && (callback.code.is_some() != callback.error.is_some());
    let sender = if valid {
        pending
            .sender
            .lock()
            .ok()
            .and_then(|mut sender| sender.take())
    } else {
        None
    };

    let (status, message) = if let Some(sender) = sender {
        let _ = sender.send(callback);
        (
            StatusCode::OK,
            "Resposta recebida. Volte ao Onix Desktop para conferir o resultado.",
        )
    } else {
        (
            StatusCode::BAD_REQUEST,
            "Esta resposta não pertence a uma tentativa de login ativa.",
        )
    };
    (
        status,
        [
            (
                HeaderName::from_static("cache-control"),
                HeaderValue::from_static("no-store"),
            ),
            (
                HeaderName::from_static("referrer-policy"),
                HeaderValue::from_static("no-referrer"),
            ),
            (
                HeaderName::from_static("content-security-policy"),
                HeaderValue::from_static("default-src 'none'"),
            ),
        ],
        Html(format!(
            "<!doctype html><html lang=\"pt-BR\"><meta charset=\"utf-8\"><title>Onix Desktop</title><p>{message}</p></html>"
        )),
    )
}
