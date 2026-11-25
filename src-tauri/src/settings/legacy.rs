use super::Settings;

#[cfg(any(target_os = "macos", windows))]
use super::Theme;

#[cfg(target_os = "macos")]
use std::path::Path;

#[cfg(any(target_os = "macos", windows))]
fn legacy_theme(value: Option<&str>) -> Theme {
    match value {
        Some("dark") => Theme::Dark,
        _ => Theme::Light,
    }
}

#[cfg(target_os = "macos")]
pub(super) fn load() -> Settings {
    let Some(home) = std::env::var_os("HOME") else {
        return Settings::default();
    };
    let path = Path::new(&home).join("Library/Preferences/com.pedro.OnixDesktop.plist");
    let Ok(plist::Value::Dictionary(values)) = plist::Value::from_file(path) else {
        return Settings::default();
    };

    Settings {
        theme: legacy_theme(
            values
                .get("appearance.theme")
                .and_then(plist::Value::as_string),
        ),
        favorite_ids: values
            .get("folders.favorites")
            .and_then(plist::Value::as_array)
            .into_iter()
            .flatten()
            .filter_map(plist::Value::as_string)
            .map(str::to_owned)
            .collect(),
    }
}

#[cfg(windows)]
pub(super) fn load() -> Settings {
    use winreg::{
        RegKey,
        enums::{HKEY_CURRENT_USER, KEY_READ, KEY_WOW64_32KEY, KEY_WOW64_64KEY},
    };

    let hive = RegKey::predef(HKEY_CURRENT_USER);
    let key = [KEY_READ | KEY_WOW64_64KEY, KEY_READ | KEY_WOW64_32KEY]
        .into_iter()
        .find_map(|flags| {
            hive.open_subkey_with_flags(r"Software\Pedro\OnixDesktop", flags)
                .ok()
        });
    let Some(key) = key else {
        return Settings::default();
    };

    let theme = key
        .open_subkey("appearance")
        .and_then(|key| key.get_value::<String, _>("theme"));
    let favorites = key.open_subkey("folders").ok().map(|key| {
        key.get_value::<Vec<String>, _>("favorites")
            .unwrap_or_else(|_| {
                key.get_value::<String, _>("favorites")
                    .ok()
                    .filter(|value| !value.is_empty() && !value.starts_with('@'))
                    .into_iter()
                    .collect()
            })
    });

    Settings {
        theme: legacy_theme(theme.ok().as_deref()),
        favorite_ids: favorites.into_iter().flatten().collect(),
    }
}

#[cfg(not(any(target_os = "macos", windows)))]
pub(super) fn load() -> Settings {
    Settings::default()
}
