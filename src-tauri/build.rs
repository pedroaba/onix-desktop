fn main() {
    println!("cargo:rerun-if-changed=../.env");

    // Public OAuth configuration can be supplied at build time for installed copies.
    let local: std::collections::HashMap<_, _> = dotenvy::from_path_iter("../.env")
        .into_iter()
        .flatten()
        .filter_map(Result::ok)
        .collect();

    for name in ["ONEDRIVE_CLIENT_ID", "ONEDRIVE_AUTHORITY"] {
        println!("cargo:rerun-if-env-changed={name}");
        if let Some(value) = std::env::var(name)
            .ok()
            .or_else(|| local.get(name).cloned())
        {
            let value = value.trim();
            if !value.is_empty() && !value.contains(['\r', '\n']) {
                println!("cargo:rustc-env=ONIX_BUILD_{name}={value}");
            }
        }
    }

    tauri_build::build();
}
