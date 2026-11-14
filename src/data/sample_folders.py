from datetime import date, timedelta

from src.models.folder import Folder


def create_sample_folders() -> list[Folder]:
    today = date.today()

    sample_folders = [
        Folder(
            "Documentos",
            "Neste dispositivo",
            8_400_000_000,
            modified_on=today,
            file_count=248,
            keep_on_device=True,
            id="sample-documentos",
        ),
        Folder(
            "Projetos",
            "Sincronizando",
            12_800_000_000,
            modified_on=today,
            id="sample-projetos",
        ),
        Folder(
            "Fotos",
            "Somente na nuvem",
            64_200_000_000,
            modified_on=today - timedelta(days=1),
            id="sample-fotos",
        ),
        Folder(
            "Estudos",
            "Neste dispositivo",
            3_100_000_000,
            modified_on=today - timedelta(days=5),
            id="sample-estudos",
        ),
        Folder(
            "Pessoal",
            "Somente na nuvem",
            2_600_000_000,
            modified_on=today - timedelta(days=7),
            id="sample-pessoal",
        ),
        Folder(
            "Arquivo",
            "Somente na nuvem",
            36_900_000_000,
            modified_on=today - timedelta(days=12),
            id="sample-arquivo",
        ),
    ]

    sample_folders.extend(
        [
            Folder("Design", "Exemplo", 0, modified_on=today, id="sample-design"),
            Folder(
                "Financeiro",
                "Exemplo",
                0,
                modified_on=today,
                provider="Google Drive",
                id="sample-financeiro",
            ),
            Folder(
                "Briefing — Onix.pdf",
                "Exemplo",
                1_800_000,
                modified_on=today,
                is_directory=False,
                id="sample-briefing",
            ),
            Folder(
                "Planejamento Q4.xlsx",
                "Exemplo",
                284_000,
                modified_on=today - timedelta(days=1),
                provider="Google Drive",
                is_directory=False,
                id="sample-planilha",
            ),
            Folder(
                "Roadmap 2027.docx",
                "Exemplo",
                96_000,
                modified_on=today - timedelta(days=3),
                provider="Dropbox",
                is_directory=False,
                id="sample-roadmap",
            ),
            Folder(
                "Notas da reunião.docx",
                "Exemplo",
                32_000,
                modified_on=today - timedelta(days=4),
                is_directory=False,
                parent_id="sample-design",
                id="sample-notas",
            ),
        ]
    )
    return sample_folders
