use chrono::{Duration, Local};

use super::{Item, ONEDRIVE};
use crate::settings::Settings;

pub(super) fn sample_items(settings: &Settings) -> Vec<Item> {
    let today = Local::now().date_naive();

    [
        (
            "documentos",
            "Documentos",
            ONEDRIVE,
            None,
            0,
            8_400_000_000,
            true,
        ),
        (
            "projetos",
            "Projetos",
            ONEDRIVE,
            None,
            0,
            12_800_000_000,
            true,
        ),
        ("fotos", "Fotos", ONEDRIVE, None, 1, 64_200_000_000, true),
        ("estudos", "Estudos", ONEDRIVE, None, 5, 3_100_000_000, true),
        ("pessoal", "Pessoal", ONEDRIVE, None, 7, 2_600_000_000, true),
        (
            "arquivo",
            "Arquivo",
            ONEDRIVE,
            None,
            12,
            36_900_000_000,
            true,
        ),
        ("design", "Design", ONEDRIVE, None, 0, 0, true),
        ("financeiro", "Financeiro", "Google Drive", None, 0, 0, true),
        (
            "briefing",
            "Briefing — Onix.pdf",
            ONEDRIVE,
            None,
            0,
            1_800_000,
            false,
        ),
        (
            "planilha",
            "Planejamento Q4.xlsx",
            "Google Drive",
            None,
            1,
            284_000,
            false,
        ),
        (
            "roadmap",
            "Roadmap 2027.docx",
            "Dropbox",
            None,
            3,
            96_000,
            false,
        ),
        (
            "notas",
            "Notas da reunião.docx",
            ONEDRIVE,
            Some("sample-design"),
            4,
            32_000,
            false,
        ),
    ]
    .into_iter()
    .map(
        |(key, name, provider, parent_id, days_ago, size_bytes, is_directory)| {
            let id = format!("sample-{key}");
            let is_favorite = settings.favorite_ids.contains(&id);
            Item {
                id,
                name: name.into(),
                provider,
                parent_id: parent_id.map(str::to_owned),
                modified_on: (today - Duration::days(days_ago)).to_string(),
                size_bytes,
                is_directory,
                is_favorite,
                is_local: false,
                location: "OneDrive Pessoal".into(),
                local_path: None,
            }
        },
    )
    .collect()
}
