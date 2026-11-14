from threading import Lock

from PySide6.QtCore import QPoint, Qt
from PySide6.QtGui import QMouseEvent, QPixmap
from PySide6.QtWidgets import QFrame, QHBoxLayout, QLabel, QWidget

from src.ui.components.workspace_controls import label
from src.ui.styles import ComponentSize
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class TitleBar(QFrame):
    def __init__(self, title: str = "") -> None:
        super().__init__()
        self._drag_offset: QPoint | None = None

        self.setObjectName("OnixBar")
        self.setFixedHeight(int(ComponentSize.ToolbarHeight))

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

        self._layout.addLayout(self._title_layout, 1)

    def set_title_icon(self, pixmap: QPixmap):
        self._title_icon.setPixmap(pixmap)
        self._title_icon.setVisible(True)

    def reset_title_icon(self):
        """Remove o icone da title_bar"""
        self._title_icon.setPixmap(QPixmap())
        self._title_icon.setVisible(False)

    def set_title(self, title: str):
        self._title.setText(title)

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


def get_title_bar() -> TitleBar:
    global __root_title_bar

    with __get_title_bar_lock:
        if __root_title_bar is None:
            __root_title_bar = TitleBar()

        return __root_title_bar


def workspace_bar(name: str = "OnixBar", *, draggable: bool = False):
    bar = TitleBar() if draggable else QFrame()
    bar.setObjectName(name)
    bar.setFixedHeight(int(ComponentSize.ToolbarHeight))

    layout = get_default_layout(QHBoxLayout, parent=bar)
    layout.setContentsMargins(16, 0, 12, 0)
    layout.setSpacing(8)

    return bar, layout
