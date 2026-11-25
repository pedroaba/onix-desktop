use jsonwebtoken::{Algorithm, DecodingKey, Validation, decode, decode_header, jwk::Jwk};
use serde::Deserialize;

use super::microsoft::{AUTHORITY, CONNECTION_ERROR};

const ISSUER: &str = "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0";

#[derive(Deserialize)]
struct KeySet {
    keys: Vec<MicrosoftKey>,
}

#[derive(Deserialize)]
struct MicrosoftKey {
    issuer: String,
    #[serde(flatten)]
    jwk: Jwk,
}

#[derive(Clone, Deserialize)]
pub(super) struct Identity {
    nonce: String,
    pub(super) name: Option<String>,
}

pub(super) async fn validate_identity(
    http: &reqwest::Client,
    token: &str,
    client_id: &str,
    nonce: &str,
) -> Result<Identity, String> {
    let invalid = "Não foi possível validar a identidade da conta Microsoft.";
    let header = decode_header(token).map_err(|_| invalid)?;
    let kid = header
        .kid
        .filter(|_| header.alg == Algorithm::RS256)
        .ok_or(invalid)?;
    let keys: KeySet = http
        .get(format!("{AUTHORITY}/discovery/v2.0/keys"))
        .send()
        .await
        .map_err(|_| CONNECTION_ERROR)?
        .error_for_status()
        .map_err(|_| CONNECTION_ERROR)?
        .json()
        .await
        .map_err(|_| invalid)?;
    let key = keys
        .keys
        .iter()
        .find(|key| {
            key.jwk.common.key_id.as_deref() == Some(kid.as_str())
                && (key.issuer == ISSUER
                    || key.issuer == "https://login.microsoftonline.com/{tenantid}/v2.0")
        })
        .ok_or(invalid)?;

    let mut validation = Validation::new(Algorithm::RS256);
    validation.set_issuer(&[ISSUER]);
    validation.set_audience(&[client_id]);
    validation.set_required_spec_claims(&["exp", "iss", "aud", "sub"]);
    validation.validate_nbf = true;
    let key = DecodingKey::from_jwk(&key.jwk).map_err(|_| invalid)?;
    let identity = decode::<Identity>(token, &key, &validation)
        .map_err(|_| invalid)?
        .claims;
    if identity.nonce != nonce {
        return Err(invalid.into());
    }
    Ok(identity)
}
