import os
import re
from dataclasses import dataclass, field

from msal import BrowserInteractionTimeoutError, PublicClientApplication


class OneDriveLoginError(Exception):
    pass


@dataclass(frozen=True)
class OneDriveSession:
    account_name: str
    access_token: str = field(repr=False)


def _required_env(name: str) -> str:
    value = os.getenv(name, "").strip()

    if not value:
        raise OneDriveLoginError(f"Preencha {name} no arquivo .env.")
    return value


def sign_in_to_onedrive() -> OneDriveSession:
    client_id = _required_env("ONEDRIVE_CLIENT_ID")
    authority = _required_env("ONEDRIVE_AUTHORITY")

    try:
        client = PublicClientApplication(client_id, authority=authority, timeout=15)
        result = client.acquire_token_interactive(
            scopes=["https://graph.microsoft.com/Files.Read"],
            prompt="select_account",
            timeout=180,
        )
    except BrowserInteractionTimeoutError as error:
        raise OneDriveLoginError(
            "O tempo para concluir o login expirou. Tente novamente."
        ) from error
    except OSError as error:
        raise OneDriveLoginError(
            "Verifique a conexão com a Microsoft e tente novamente."
        ) from error
    except ValueError as error:
        raise OneDriveLoginError(
            "Confira ONEDRIVE_CLIENT_ID e ONEDRIVE_AUTHORITY no .env."
        ) from error

    access_token = result.get("access_token")

    if not isinstance(access_token, str) or not access_token:
        error_code = result.get("error")
        if error_code in ("access_denied", "abort"):
            raise OneDriveLoginError("A autorização foi recusada. Você pode tentar novamente.")

        description = str(result.get("error_description", ""))
        diagnostic_code = re.search(r"\bAADSTS\d+\b", description)
        message = "A Microsoft não concluiu o login. Tente novamente."

        if diagnostic_code:
            message = f"{message} Código da Microsoft: {diagnostic_code.group()}"
        raise OneDriveLoginError(message)

    claims = result.get("id_token_claims")
    name = claims.get("name") if isinstance(claims, dict) else None
    account_name = name.strip() if isinstance(name, str) and name.strip() else "Conta Microsoft"

    return OneDriveSession(account_name=account_name, access_token=access_token)
