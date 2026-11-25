#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod auth;
mod catalog;
mod settings;

use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .manage(auth::Authentication::default())
        .setup(|app| {
            let path = app.path().app_config_dir()?.join("settings.json");
            app.manage(catalog::Workspace::new(path));
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            catalog::commands::initialize_workspace,
            catalog::commands::create_folder,
            catalog::local_files::add_local_files,
            catalog::local_files::get_thumbnail,
            catalog::local_files::save_copy,
            catalog::commands::set_theme,
            catalog::commands::set_favorite,
            auth::connect_onedrive,
            auth::disconnect_onedrive,
        ])
        .run(tauri::generate_context!())
        .expect("Não foi possível iniciar o Onix Desktop");
}
