"""Ícone em um label, com tamanho e recoloração independentes do layout."""

from dataclasses import replace

from PySide6.QtWidgets import QLabel, QWidget

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.utils.create_size import create_qsize


class IconLabel(QLabel):
    def __init__(
        self,
        icon_name: str,
        size: int,
        parent: QWidget | None = None,
        *,
        folder_name: str = "brands",
        color: str | None = None,
        fixed_size: bool = True,
    ) -> None:
        super().__init__(parent)
        self._icon_name = icon_name
        self._icon_size = size
        self._options = IconLoaderOptions(folder_name=folder_name, color=color)
        if fixed_size:
            self.setFixedSize(create_qsize(size))
        self.set_color(color)

    def set_color(self, color: str | None) -> None:
        options = replace(self._options, color=color)
        pixmap = IconLoader(self._icon_name, options=options).load_as_pixmap(self._icon_size)
        self._options = options
        self.setPixmap(pixmap)
