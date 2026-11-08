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
        ),
        Folder("Projetos", "Sincronizando", 12_800_000_000, modified_on=today),
        Folder(
            "Fotos",
            "Somente na nuvem",
            64_200_000_000,
            modified_on=today - timedelta(days=1),
        ),
        Folder(
            "Estudos",
            "Neste dispositivo",
            3_100_000_000,
            modified_on=today - timedelta(days=5),
        ),
        Folder(
            "Pessoal",
            "Somente na nuvem",
            2_600_000_000,
            modified_on=today - timedelta(days=7),
        ),
        Folder(
            "Arquivo",
            "Somente na nuvem",
            36_900_000_000,
            modified_on=today - timedelta(days=12),
        ),
    ]

    return sample_folders
