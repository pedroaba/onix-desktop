from threading import Lock
from typing import Callable

from PySide6.QtCore import QPoint, Qt
from PySide6.QtGui import QMouseEvent, QPixmap
from PySide6.QtWidgets import QFrame, QHBoxLayout, QLabel, QWidget

from src.loaders.icons import Icons
from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.workspace_controls import WorkspaceButton, label
from src.ui.styles import ComponentSize
from src.ui.themes.theme_manager import AvailableTheme, theme_colors
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class TitleBar(QFrame):
    def __init__(self, title: str = "", theme: AvailableTheme = AvailableTheme.DARK) -> None:
        super().__init__()
        self._drag_offset: QPoint | None = None

        self.setObjectName("OnixBar")
        self.setFixedHeight(int(ComponentSize.ToolbarHeight))
        self._theme = theme

        self._layout = get_default_layout(
            QHBoxLayout, GetDefaultLayoutOptions(spacing=8), parent=self
        )
        self._layout.setContentsMargins(16, 0, 12, 0)

        self._title = label(title, "section")
        self._title.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents)

        self._title_icon = QLabel()
        self._title_icon.setVisible(False)

        self._title_layout = get_default_layout(
            QHBoxLayout, GetDefaultLayoutOptions(margins=create_qmargins(0), spacing=8)
        )
        self._title_layout.addWidget(self._title_icon, 0)
        self._title_layout.addWidget(self._title, 1)

        self._breadcrumb_layout = get_default_layout(
            QHBoxLayout, GetDefaultLayoutOptions(margins=create_qmargins(0), spacing=0)
        )

        self._title_layout.addLayout(self._breadcrumb_layout)
        self._title_layout.addStretch()

        self._layout.addLayout(self._title_layout, 1)

    def set_theme(self, theme: AvailableTheme):
        self._theme = theme

    def set_title_icon(self, pixmap: QPixmap):
        self._title_icon.setPixmap(pixmap)
        self._title_icon.setVisible(True)

    def reset_title_icon(self):
        """Remove o icone da title_bar"""
        self._title_icon.setPixmap(QPixmap())
        self._title_icon.setVisible(False)

    def set_title(self, title: str):
        while (item := self._breadcrumb_layout.takeAt(0)) is not None:
            widget = item.widget()
            if widget is not None:
                widget.hide()
                widget.deleteLater()

        self._title.setText(title)
        self._title.show()

    def set_breadcrumb(self, parts: list[tuple[str, Callable[[], None] | None]]) -> None:
        self.set_title(" > ".join(text for text, _ in parts))
        self._title.hide()

        colors = theme_colors(self._theme)

        for index, (text, action) in enumerate(parts):
            if index:
                chevron = IconLabel(
                    Icons.ChevronRight.Fluent.Size16.Regular,
                    16,
                    color=colors.TextOnPrimary.to_hex(),
                )
                chevron.setContentsMargins(0, 6, 0, 0)
                chevron.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents)
                self._breadcrumb_layout.addWidget(chevron)

            button = WorkspaceButton(text, quiet=True)
            button.setProperty("breadcrumb", True)

            if action is None:
                button.setFocusPolicy(Qt.FocusPolicy.NoFocus)
                button.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents)
            else:
                button.clicked.connect(action)

            self._breadcrumb_layout.addWidget(button, 0, Qt.AlignmentFlag.AlignVCenter)

    def title(self):
        return self._title.text()

    def add_leading_widget(self, widget: QWidget) -> None:
        self._layout.insertWidget(0, widget)

    def add_action(self, widget: QWidget) -> None:
        self._layout.addWidget(widget)

    def mousePressEvent(self, event: QMouseEvent, /) -> None:
        window = self.window()

        if event.button() == Qt.MouseButton.LeftButton and not window.isFullScreen():
            handle = window.windowHandle()
            if handle is not None and handle.startSystemMove():
                event.accept()
                return

            if not window.isMaximized():
                self._drag_offset = (
                    event.globalPosition().toPoint() - window.frameGeometry().topLeft()
                )
                event.accept()
                return

        super().mousePressEvent(event)

    def mouseMoveEvent(self, event: QMouseEvent, /) -> None:
        if self._drag_offset is not None and event.buttons() & Qt.MouseButton.LeftButton:
            self.window().move(event.globalPosition().toPoint() - self._drag_offset)
            event.accept()
            return

        super().mouseMoveEvent(event)

    def mouseReleaseEvent(self, event: QMouseEvent, /) -> None:
        if event.button() == Qt.MouseButton.LeftButton and self._drag_offset is not None:
            self._drag_offset = None
            event.accept()
            return

        super().mouseReleaseEvent(event)


__root_title_bar = None
__get_title_bar_lock = Lock()


def get_title_bar(theme: AvailableTheme = AvailableTheme.DARK) -> TitleBar:
    global __root_title_bar

    with __get_title_bar_lock:
        if __root_title_bar is None:
            __root_title_bar = TitleBar(theme=theme)

        return __root_title_bar


def workspace_bar(name: str = "OnixBar", *, draggable: bool = False):
    bar = TitleBar() if draggable else QFrame()
    bar.setObjectName(name)
    bar.setFixedHeight(int(ComponentSize.ToolbarHeight))

    layout = get_default_layout(QHBoxLayout, parent=bar)
    layout.setContentsMargins(16, 0, 12, 0)
    layout.setSpacing(8)

    return bar, layout
