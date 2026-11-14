from functools import cache

from PySide6.QtCore import QObject, Signal

from src.data.sample_folders import create_sample_folders
from src.exceptions.duplicate_folder_name import DuplicateFolderNameError
from src.exceptions.invalid_folder_name import InvalidFolderNameError
from src.models.folder import Folder
from src.services.app_settings import AppSettings


class FolderStore(QObject):
    folders_changed = Signal()

    def __init__(
        self, folders: list[Folder] | None = None, *, settings: AppSettings | None = None
    ) -> None:
        super().__init__()

        self._folders = list(folders) if folders is not None else []
        self._settings = settings

        if self._settings is not None:
            favorite_ids = self._settings.load_favorite_ids()
            self._update_favorite_folders(favorite_ids)

    @property
    def folders(self) -> list[Folder]:
        return self._folders.copy()

    def add_folder(self, folder: Folder) -> None:
        name = folder.name.strip()

        if not name:
            raise InvalidFolderNameError("Digite um nome para a pasta")

        already_exists = any(
            item.name.casefold() == name.casefold()
            and item.provider == folder.provider
            and item.parent_id == folder.parent_id
            for item in self._folders
        )

        if already_exists:
            raise DuplicateFolderNameError("Já existe uma pasta com esse nome")

        folder.name = name
        self._folders.append(folder)
        self.folders_changed.emit()

    def _update_favorite_folders(self, favorite_ids: set[str]) -> None:
        for folder in self._folders:
            folder.is_favorite = folder.id in favorite_ids

    def save_favorites(self) -> None:
        if self._settings is None:
            return

        favorites_ids = {folder.id for folder in self._folders if folder.is_favorite}
        self._settings.save_favorite_ids(favorites_ids)


@cache
def get_folder_store() -> FolderStore:
    return FolderStore(create_sample_folders(), settings=AppSettings())
