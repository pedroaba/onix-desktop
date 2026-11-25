use std::time::Duration;

use serde::Deserialize;

use super::{LOGIN_ERROR, Session, identity::validate_identity};

pub(super) const AUTHORITY: &str = "https://login.microsoftonline.com/consumers";
pub(super) const SCOPES: &str = "openid profile https://graph.microsoft.com/Files.Read";
pub(super) const CONNECTION_ERROR: &str = "Verifique a conexão com a Microsoft e tente novamente.";

#[derive(Deserialize)]
struct Tokens {
    access_token: Option<String>,
    id_token: Option<String>,
    error: Option<String>,
    error_description: Option<String>,
}

pub(super) fn client_id() -> Result<String, String> {
    let client_id = std::env::var("ONEDRIVE_CLIENT_ID")
        .ok()
        .or_else(|| option_env!("ONIX_BUILD_ONEDRIVE_CLIENT_ID").map(str::to_owned));
    let client_id = client_id
        .as_deref()
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .ok_or("Preencha ONEDRIVE_CLIENT_ID no arquivo .env e execute o app novamente.")?;
    if uuid::Uuid::parse_str(client_id).is_err() {
        return Err("Confira o valor de ONEDRIVE_CLIENT_ID.".into());
    }

    let authority = std::env::var("ONEDRIVE_AUTHORITY")
        .ok()
        .or_else(|| option_env!("ONIX_BUILD_ONEDRIVE_AUTHORITY").map(str::to_owned));
    let authority = authority
        .as_deref()
        .unwrap_or(AUTHORITY)
        .trim()
        .trim_end_matches('/');
    if authority != AUTHORITY {
        return Err(format!(
            "Use {AUTHORITY} em ONEDRIVE_AUTHORITY para contas pessoais."
        ));
    }
    Ok(client_id.to_owned())
}

pub(super) async fn exchange_code(
    client_id: &str,
    code: &str,
    redirect_uri: &str,
    verifier: &str,
    nonce: &str,
) -> Result<Session, String> {
    let http = reqwest::Client::builder()
        .timeout(Duration::from_secs(15))
        .redirect(reqwest::redirect::Policy::none())
        .build()
        .map_err(|_| CONNECTION_ERROR)?;
    let tokens: Tokens = http
        .post(format!("{AUTHORITY}/oauth2/v2.0/token"))
        .form(&[
            ("client_id", client_id),
            ("grant_type", "authorization_code"),
            ("code", code),
            ("redirect_uri", redirect_uri),
            ("code_verifier", verifier),
            ("scope", SCOPES),
        ])
        .send()
        .await
        .map_err(|_| CONNECTION_ERROR)?
        .json()
        .await
        .map_err(|_| LOGIN_ERROR)?;

    if let Some(error) = tokens.error {
        return Err(error_message(&error, tokens.error_description.as_deref()));
    }

    let token = tokens.id_token.ok_or(LOGIN_ERROR)?;
    let access_token = tokens
        .access_token
        .filter(|token| !token.is_empty())
        .ok_or(LOGIN_ERROR)?;
    let identity = validate_identity(&http, &token, client_id, nonce).await?;
    let account_name = identity
        .name
        .as_deref()
        .map(str::trim)
        .filter(|name| !name.is_empty())
        .unwrap_or("Conta Microsoft")
        .to_owned();
    Ok(Session {
        account_name,
        _access_token: access_token,
    })
}

pub(super) fn error_message(error: &str, description: Option<&str>) -> String {
    if matches!(error, "access_denied" | "abort" | "user_cancelled") {
        return "A autorização foi recusada. Você pode tentar novamente.".into();
    }

    if let Some((_, rest)) = description.and_then(|message| message.split_once("AADSTS")) {
        let digits: String = rest
            .chars()
            .take_while(char::is_ascii_digit)
            .take(12)
            .collect();
        if !digits.is_empty() {
            return format!("{LOGIN_ERROR} Código da Microsoft: AADSTS{digits}.");
        }
    }
    LOGIN_ERROR.into()
}
