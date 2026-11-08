from PySide6.QtWidgets import QWidget

from src.services.folder_queries import get_recent_folders
from src.ui.pages.folder_list import FolderListPage


class RecentPage(FolderListPage):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(
            parent,
            title="Recentes",
            description="Pastas modificadas nos últimos sete dias.",
            empty_message="Nenhuma pasta modificada nos últimos sete dias.",
            singular="pasta recente",
            plural="pastas recentes",
            filter_folders=get_recent_folders,
        )
