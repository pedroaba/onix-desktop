from functools import cache

from PySide6.QtCore import QObject, Signal

from src.data.sample_folders import create_sample_folders
from src.exceptions.duplicate_folder_name import DuplicateFolderNameError
from src.exceptions.invalid_folder_name import InvalidFolderNameError
from src.models.folder import Folder


class FolderStore(QObject):
    folders_changed = Signal()

    def __init__(self, folders: list[Folder] | None = None) -> None:
        super().__init__()

        self._folders = list(folders) if folders is not None else []

    @property
    def folders(self) -> list[Folder]:
        return self._folders.copy()

    def add_folder(self, folder: Folder) -> None:
        name = folder.name.strip()

        if not name:
            raise InvalidFolderNameError("Digite um nome para a pasta")

        already_exists = any(item.name.casefold() == name.casefold() for item in self._folders)

        if already_exists:
            raise DuplicateFolderNameError("Já existe uma pasta com esse nome")

        folder.name = name
        self._folders.append(folder)
        self.folders_changed.emit()


@cache
def get_folder_store() -> FolderStore:
    return FolderStore(create_sample_folders())
