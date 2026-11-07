"""Botões nativos com configuração compartilhada de ícones e acessibilidade."""

from PySide6.QtGui import QIcon
from PySide6.QtWidgets import QPushButton, QWidget

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.utils.add_spacing_string import add_spacing_string
from src.utils.create_size import create_qsize


class IconButton(QPushButton):
    def __init__(
        self,
        icon_name: str,
        text: str = "",
        parent: QWidget | None = None,
        *,
        object_name: str = "",
        description: str | None = None,
        size: int | None = None,
        icon_size: int = 20,
    ) -> None:
        super().__init__(text, parent)
        self.setObjectName(object_name)
        self.setProperty("icon_name", icon_name)
        self.setIconSize(create_qsize(icon_size))
        if size is not None:
            self.setFixedSize(create_qsize(size))
        if description is not None:
            self.setToolTip(description)
            self.setAccessibleName(description)

    def set_icon_color(self, color: str) -> None:
        options = IconLoaderOptions(folder_name="fluent/20/regular", color=color)
        self.setIcon(IconLoader(self.property("icon_name"), options=options).load(self.iconSize()))

    def set_icon_colors(self, normal: str, selected: str) -> None:
        icon = QIcon()
        for state, color in ((QIcon.State.Off, normal), (QIcon.State.On, selected)):
            options = IconLoaderOptions(folder_name="fluent/20/regular", color=color)
            pixmap = IconLoader(self.property("icon_name"), options=options).load_as_pixmap(
                self.iconSize()
            )
            for mode in (QIcon.Mode.Normal, QIcon.Mode.Active, QIcon.Mode.Selected):
                icon.addPixmap(pixmap, mode, state)
        self.setIcon(icon)


class ActionButton(IconButton):
    def __init__(
        self,
        text: str,
        icon_name: str,
        parent: QWidget | None = None,
        *,
        object_name: str,
        height: int = 36,
    ) -> None:
        super().__init__(icon_name, add_spacing_string(text), parent, object_name=object_name)
        self.setFixedHeight(height)
