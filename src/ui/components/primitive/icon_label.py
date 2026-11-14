"""Ícone em um label, com tamanho e recoloração independentes do layout."""

from PySide6.QtWidgets import QLabel, QWidget

from src.loaders.icons import Icon
from src.utils.create_size import create_qsize


class IconLabel(QLabel):
    def __init__(
        self,
        icon: Icon,
        size: int,
        parent: QWidget | None = None,
        *,
        color: str | None = None,
        fixed_size: bool = True,
    ) -> None:
        super().__init__(parent)
        self._icon = icon
        self._icon_size = size
        if fixed_size:
            self.setFixedSize(create_qsize(size))
        self.set_color(color)

    def set_color(self, color: str | None) -> None:
        self.setPixmap(self._icon.get_pixmap(self._icon_size, color=color))
