use base64::{Engine, engine::general_purpose::URL_SAFE_NO_PAD};
use sha2::{Digest, Sha256};
use tauri::AppHandle;
use tauri_plugin_opener::OpenerExt;
use url::Url;

use super::{LOGIN_ERROR, Session, loopback::Loopback, microsoft};
use microsoft::{AUTHORITY, SCOPES};

pub(super) async fn sign_in(app: &AppHandle) -> Result<Session, String> {
    let client_id = microsoft::client_id()?;
    let client_id = client_id.as_str();

    let verifier = random_token();
    let challenge = URL_SAFE_NO_PAD.encode(Sha256::digest(verifier.as_bytes()));
    let state = random_token();
    let nonce = random_token();

    let listener = Loopback::bind().await?;
    let redirect_uri = listener.redirect_uri().to_owned();

    let mut authorize =
        Url::parse(&format!("{AUTHORITY}/oauth2/v2.0/authorize")).map_err(|_| LOGIN_ERROR)?;
    authorize.query_pairs_mut().extend_pairs([
        ("client_id", client_id),
        ("response_type", "code"),
        ("response_mode", "query"),
        ("redirect_uri", &redirect_uri),
        ("scope", SCOPES),
        ("prompt", "select_account"),
        ("state", &state),
        ("nonce", &nonce),
        ("code_challenge", &challenge),
        ("code_challenge_method", "S256"),
    ]);

    let callback = listener
        .wait(state, || {
            app.opener()
                .open_url(authorize.as_str(), None::<&str>)
                .is_ok()
        })
        .await?;
    if let Some(error) = callback.error {
        return Err(microsoft::error_message(
            &error,
            callback.error_description.as_deref(),
        ));
    }
    let code = callback.code.ok_or(LOGIN_ERROR)?;

    microsoft::exchange_code(client_id, &code, &redirect_uri, &verifier, &nonce).await
}

fn random_token() -> String {
    URL_SAFE_NO_PAD.encode(rand::random::<[u8; 32]>())
}
