pub mod commands;
pub mod local_files;
mod sample_items;

use std::{path::PathBuf, sync::Mutex};

use chrono::Local;
use serde::Serialize;
use unicode_casefold::UnicodeCaseFold;

use crate::settings::{Settings, Theme};

use sample_items::sample_items;

const ONEDRIVE: &str = "OneDrive";
const INVALID_NAME: &str = "Digite um nome para a pasta";
const DUPLICATE_NAME: &str = "Já existe um item com esse nome nesta pasta";
const FILE_UNAVAILABLE: &str = "O arquivo local está indisponível.";

#[derive(Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    id: String,
    name: String,
    provider: &'static str,
    parent_id: Option<String>,
    modified_on: String,
    size_bytes: u64,
    is_directory: bool,
    is_favorite: bool,
    is_local: bool,
    location: String,
    #[serde(skip)]
    local_path: Option<PathBuf>,
}

#[derive(Serialize)]
pub struct Snapshot {
    theme: Theme,
    items: Vec<Item>,
}

struct Catalog {
    settings: Settings,
    items: Vec<Item>,
}

pub struct Workspace {
    settings_path: PathBuf,
    catalog: Mutex<Option<Catalog>>,
}

impl Workspace {
    pub fn new(settings_path: PathBuf) -> Self {
        Self {
            settings_path,
            catalog: Mutex::default(),
        }
    }

    fn with_catalog<T>(
        &self,
        operation: impl FnOnce(&mut Catalog) -> Result<T, String>,
    ) -> Result<T, String> {
        let mut slot = self
            .catalog
            .lock()
            .map_err(|_| "O catálogo está indisponível.")?;
        if slot.is_none() {
            let settings = Settings::load(&self.settings_path)?;
            let items = sample_items(&settings);
            *slot = Some(Catalog { settings, items });
        }
        operation(slot.as_mut().expect("catálogo inicializado"))
    }
}

impl Catalog {
    fn location_for(&self, parent_id: Option<&str>) -> Result<String, String> {
        match parent_id {
            None => Ok("Meus arquivos".into()),
            Some(parent_id) => self
                .items
                .iter()
                .find(|item| item.id == parent_id && item.is_directory && item.provider == ONEDRIVE)
                .map(|item| item.name.clone())
                .ok_or_else(|| "A pasta de destino está indisponível.".into()),
        }
    }

    fn add(
        &mut self,
        name: &str,
        parent_id: Option<String>,
        file: Option<(PathBuf, u64)>,
    ) -> Result<Item, String> {
        let name = name.trim();
        if name.is_empty() {
            return Err(INVALID_NAME.into());
        }

        let location = self.location_for(parent_id.as_deref())?;
        if self.items.iter().any(|item| {
            item.provider == ONEDRIVE
                && item.parent_id == parent_id
                && item.name.as_str().case_fold().eq(name.case_fold())
        }) {
            return Err(DUPLICATE_NAME.into());
        }

        let (local_path, size_bytes) = match file {
            Some((path, size)) => (Some(path), size),
            None => (None, 0),
        };
        let item = Item {
            id: uuid::Uuid::new_v4().simple().to_string(),
            name: name.into(),
            provider: ONEDRIVE,
            parent_id,
            modified_on: Local::now().date_naive().to_string(),
            size_bytes,
            is_directory: local_path.is_none(),
            is_favorite: false,
            is_local: local_path.is_some(),
            location,
            local_path,
        };
        self.items.push(item.clone());
        Ok(item)
    }

    fn local_item(&self, id: &str) -> Result<(PathBuf, String), String> {
        self.items
            .iter()
            .find(|item| item.id == id)
            .and_then(|item| Some((item.local_path.clone()?, item.name.clone())))
            .ok_or_else(|| FILE_UNAVAILABLE.into())
    }
}
