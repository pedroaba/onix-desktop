from datetime import date, timedelta

from src.models.folder import Folder


def get_recent_folders(
    folders: list[Folder], *, today: date | None = None, days_past: int = 6
) -> list[Folder]:
    reference_date = today if today is not None else date.today()
    start_date = reference_date - timedelta(days=days_past)

    recent_folders = [
        folder
        for folder in folders
        if folder.modified_on is not None and start_date <= folder.modified_on <= reference_date
    ]

    return sorted(recent_folders, key=lambda folder: folder.modified_on or date.min, reverse=True)


def get_favorite_folders(folders: list[Folder]) -> list[Folder]:
    return [folder for folder in folders if folder.is_favorite]
