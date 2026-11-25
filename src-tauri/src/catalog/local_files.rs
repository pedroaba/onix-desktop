use std::{
    fs::{self, File},
    io::{self, Cursor},
    path::Path,
};

use image::{DynamicImage, ImageDecoder, ImageFormat, ImageReader, Limits};
use serde::Serialize;
use tauri::{AppHandle, State, ipc::Response};
use tauri_plugin_dialog::{DialogExt, FilePath};

use super::{FILE_UNAVAILABLE, Item, Workspace};

#[derive(Serialize, Default)]
pub struct AddedFiles {
    items: Vec<Item>,
    failures: Vec<String>,
}

#[tauri::command]
pub async fn add_local_files(
    app: AppHandle,
    workspace: State<'_, Workspace>,
    parent_id: Option<String>,
) -> Result<AddedFiles, String> {
    workspace.with_catalog(|catalog| catalog.location_for(parent_id.as_deref()))?;

    let Some(paths) = app
        .dialog()
        .file()
        .set_title("Adicionar arquivos locais")
        .blocking_pick_files()
    else {
        return Ok(AddedFiles::default());
    };

    let mut result = AddedFiles::default();
    for selection in paths {
        let FilePath::Path(path) = selection else {
            result
                .failures
                .push("Não foi possível ler um dos arquivos escolhidos.".into());
            continue;
        };
        let name = path
            .file_name()
            .unwrap_or_default()
            .to_string_lossy()
            .into_owned();
        let added = (|| {
            let metadata = path.metadata().map_err(|_| FILE_UNAVAILABLE)?;
            if !metadata.is_file() {
                return Err(FILE_UNAVAILABLE.into());
            }
            workspace.with_catalog(|catalog| {
                catalog.add(&name, parent_id.clone(), Some((path, metadata.len())))
            })
        })();
        match added {
            Ok(item) => result.items.push(item),
            Err(error) => result.failures.push(format!("{name} · {error}")),
        }
    }
    Ok(result)
}

#[tauri::command]
pub async fn get_thumbnail(
    workspace: State<'_, Workspace>,
    id: String,
) -> Result<Response, String> {
    let (path, _) = workspace.with_catalog(|catalog| catalog.local_item(&id))?;
    tauri::async_runtime::spawn_blocking(move || thumbnail(&path))
        .await
        .map_err(|_| "Prévia indisponível.")?
        .map(Response::new)
        .map_err(|_| "Prévia indisponível.".into())
}

fn thumbnail(path: &Path) -> image::ImageResult<Vec<u8>> {
    let mut reader = ImageReader::open(path)?.with_guessed_format()?;
    let mut limits = Limits::default();
    limits.max_image_width = Some(16_384);
    limits.max_image_height = Some(16_384);
    reader.limits(limits);

    let mut decoder = reader.into_decoder()?;
    let orientation = decoder.orientation()?;
    let mut image = DynamicImage::from_decoder(decoder)?;
    image.apply_orientation(orientation);

    let mut png = Cursor::new(Vec::new());
    image
        .thumbnail(404, 254)
        .write_to(&mut png, ImageFormat::Png)?;
    Ok(png.into_inner())
}

#[tauri::command]
pub async fn save_copy(
    app: AppHandle,
    workspace: State<'_, Workspace>,
    id: String,
) -> Result<(), String> {
    let (source, name) = workspace.with_catalog(|catalog| catalog.local_item(&id))?;
    if let Some(FilePath::Path(target)) = app
        .dialog()
        .file()
        .set_title("Salvar cópia")
        .set_file_name(name)
        .blocking_save_file()
    {
        if fs::canonicalize(&source)
            .ok()
            .zip(fs::canonicalize(&target).ok())
            .is_some_and(|(source, target)| source == target)
        {
            return Err("Escolha um destino diferente do arquivo original.".into());
        }
        tauri::async_runtime::spawn_blocking(move || copy_atomically(&source, &target))
            .await
            .map_err(|_| "Não foi possível salvar a cópia.")?
            .map_err(|_| "Não foi possível salvar a cópia. Confira o arquivo e o destino.")?;
    }
    Ok(())
}

fn copy_atomically(source: &Path, target: &Path) -> io::Result<()> {
    let parent = target.parent().ok_or(io::ErrorKind::InvalidInput)?;
    let mut source = File::open(source)?;
    let mut destination = tempfile::NamedTempFile::new_in(parent)?;
    io::copy(&mut source, &mut destination)?;
    destination.as_file().sync_all()?;
    destination.persist(target)?;
    Ok(())
}
