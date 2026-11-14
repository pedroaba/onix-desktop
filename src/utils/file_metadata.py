from datetime import date

from src.models.folder import Folder


def size_text(size: int) -> str:
    if size >= 1_000_000_000:
        return f"{size / 1_000_000_000:.1f} GB".replace(".", ",")
    if size >= 1_000_000:
        return f"{size / 1_000_000:.1f} MB".replace(".", ",")
    if size >= 1_000:
        return f"{size / 1_000:.0f} KB"
    return f"{size} B"


def modified_text(item: Folder) -> str:
    if item.modified_on is None:
        return "—"
    if item.modified_on == date.today():
        return "Hoje"
    return item.modified_on.strftime("%d/%m/%Y")
