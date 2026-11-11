from typing import cast

from PySide6.QtCore import QSettings


class AppSettings:
    def __init__(self, *, settings: QSettings | None = None) -> None:
        self._settings = settings if settings is not None else QSettings("Pedro", "OnixDesktop")

    def load_theme(self):
        return self._settings.value("appearance/theme", "light", type=str)

    def save_theme(self, theme_name: str) -> None:
        self._settings.setValue("appearance/theme", theme_name)
        self._settings.sync()

    def load_favorite_ids(self) -> set[str]:
        values = cast(list[str], self._settings.value("folders/favorites", [], type=list))
        return set(values)

    def save_favorite_ids(self, favorite_ids: set[str]) -> None:
        self._settings.setValue("folders/favorites", sorted(favorite_ids))
        self._settings.sync()
