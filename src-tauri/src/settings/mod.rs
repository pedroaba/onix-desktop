mod legacy;

use std::{collections::BTreeSet, fs, io, path::Path};

use serde::{Deserialize, Serialize};

#[derive(Clone, Copy, Default, Deserialize, Serialize)]
#[serde(rename_all = "lowercase")]
pub enum Theme {
    #[default]
    Light,
    Dark,
}

#[derive(Clone, Default, Deserialize, Serialize)]
#[serde(default, rename_all = "camelCase")]
pub struct Settings {
    pub theme: Theme,
    pub favorite_ids: BTreeSet<String>,
}

impl Settings {
    pub fn load(path: &Path) -> Result<Self, String> {
        match fs::read(path) {
            Ok(data) => serde_json::from_slice(&data)
                .map_err(|_| "O arquivo de preferências do Onix está inválido.".into()),
            Err(error) if error.kind() == io::ErrorKind::NotFound => {
                let settings = legacy::load();
                settings.save(path)?;
                Ok(settings)
            }
            Err(_) => Err("Não foi possível ler as preferências do Onix.".into()),
        }
    }

    pub fn save(&self, path: &Path) -> Result<(), String> {
        write_settings(path, self)
            .map_err(|_| "Não foi possível salvar as preferências do Onix.".into())
    }
}

fn write_settings(path: &Path, settings: &Settings) -> io::Result<()> {
    let parent = path.parent().ok_or(io::ErrorKind::InvalidInput)?;
    fs::create_dir_all(parent)?;

    let mut file = tempfile::NamedTempFile::new_in(parent)?;
    serde_json::to_writer_pretty(file.as_file_mut(), settings)?;
    file.as_file().sync_all()?;
    file.persist(path)?;
    Ok(())
}
