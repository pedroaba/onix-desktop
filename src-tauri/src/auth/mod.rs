mod identity;
mod loopback;
mod microsoft;
mod oauth;

use serde::Serialize;
use tauri::{AppHandle, State};

const LOGIN_ERROR: &str = "A Microsoft não concluiu o login. Tente novamente.";
const TIMEOUT_ERROR: &str = "O tempo para concluir o login expirou. Tente novamente.";

#[derive(Default)]
pub struct Authentication {
    session: tokio::sync::Mutex<Option<Session>>,
}

struct Session {
    account_name: String,
    _access_token: String,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ConnectedAccount {
    account_name: String,
}

#[tauri::command]
pub async fn connect_onedrive(
    app: AppHandle,
    auth: State<'_, Authentication>,
) -> Result<ConnectedAccount, String> {
    let mut session = auth
        .session
        .try_lock()
        .map_err(|_| "Já há um login em andamento.")?;
    if session.is_none() {
        *session = Some(oauth::sign_in(&app).await?);
    }

    Ok(ConnectedAccount {
        account_name: session
            .as_ref()
            .expect("sessão iniciada")
            .account_name
            .clone(),
    })
}

#[tauri::command]
pub async fn disconnect_onedrive(auth: State<'_, Authentication>) -> Result<(), String> {
    let mut session = auth
        .session
        .try_lock()
        .map_err(|_| "Já há um login em andamento.")?;
    *session = None;
    Ok(())
}
