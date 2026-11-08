from PySide6.QtWidgets import QWidget

from src.services.folder_queries import get_favorite_folders
from src.ui.pages.folder_list import FolderListPage


class FavoritesPage(FolderListPage):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(
            parent,
            title="Favoritos",
            description="Suas pastas marcadas como favoritas.",
            empty_message="Você ainda não marcou nenhuma pasta como favorita.",
            singular="pasta favorita",
            plural="pastas favoritas",
            filter_folders=get_favorite_folders,
        )
