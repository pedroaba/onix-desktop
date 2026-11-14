"""Botões nativos com configuração compartilhada de ícones e acessibilidade."""

from PySide6.QtGui import QIcon
from PySide6.QtWidgets import QPushButton, QWidget

from src.loaders.icons import Icon
from src.utils.add_spacing_string import add_spacing_string
from src.utils.create_size import create_qsize


class IconButton(QPushButton):
    def __init__(
        self,
        icon: Icon | None,
        text: str = "",
        parent: QWidget | None = None,
        *,
        object_name: str = "",
        description: str | None = None,
        size: int | None = None,
        icon_size: int = 20,
    ) -> None:
        super().__init__(text, parent)
        self._icon = icon
        self.setObjectName(object_name)
        self.setIconSize(create_qsize(icon_size))
        if size is not None:
            self.setFixedSize(create_qsize(size))
        if description is not None:
            self.setToolTip(description)
            self.setAccessibleName(description)

    def set_icon_color(self, color: str) -> None:
        if self._icon is not None:
            self.setIcon(self._icon.get_icon(self.iconSize(), color=color))

    def set_icon_colors(self, normal: str, selected: str) -> None:
        if self._icon is None:
            return

        icon = QIcon()
        for state, color in ((QIcon.State.Off, normal), (QIcon.State.On, selected)):
            pixmap = self._icon.get_pixmap(self.iconSize(), color=color)
            for mode in (QIcon.Mode.Normal, QIcon.Mode.Active, QIcon.Mode.Selected):
                icon.addPixmap(pixmap, mode, state)
        self.setIcon(icon)


class ActionButton(IconButton):
    def __init__(
        self,
        text: str,
        icon: Icon,
        parent: QWidget | None = None,
        *,
        object_name: str,
        height: int = 36,
    ) -> None:
        super().__init__(icon, add_spacing_string(text), parent, object_name=object_name)
        self.setFixedHeight(height)
