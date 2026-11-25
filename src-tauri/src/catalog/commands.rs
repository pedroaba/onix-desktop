use tauri::State;

use crate::settings::Theme;

use super::{Item, Snapshot, Workspace};

#[tauri::command]
pub fn initialize_workspace(workspace: State<'_, Workspace>) -> Result<Snapshot, String> {
    workspace.with_catalog(|catalog| {
        Ok(Snapshot {
            theme: catalog.settings.theme,
            items: catalog.items.clone(),
        })
    })
}

#[tauri::command]
pub fn create_folder(
    workspace: State<'_, Workspace>,
    parent_id: Option<String>,
    name: String,
) -> Result<Item, String> {
    workspace.with_catalog(|catalog| catalog.add(&name, parent_id, None))
}

#[tauri::command]
pub fn set_theme(workspace: State<'_, Workspace>, theme: Theme) -> Result<(), String> {
    workspace.with_catalog(|catalog| {
        let mut settings = catalog.settings.clone();
        settings.theme = theme;
        settings.save(&workspace.settings_path)?;
        catalog.settings = settings;
        Ok(())
    })
}

#[tauri::command]
pub fn set_favorite(
    workspace: State<'_, Workspace>,
    id: String,
    favorite: bool,
) -> Result<(), String> {
    workspace.with_catalog(|catalog| {
        let item = catalog
            .items
            .iter_mut()
            .find(|item| item.id == id)
            .ok_or("O item selecionado está indisponível.")?;
        let mut settings = catalog.settings.clone();
        if favorite {
            settings.favorite_ids.insert(id);
        } else {
            settings.favorite_ids.remove(&id);
        }
        settings.save(&workspace.settings_path)?;
        catalog.settings = settings;
        item.is_favorite = favorite;
        Ok(())
    })
}
