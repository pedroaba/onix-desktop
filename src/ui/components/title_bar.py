from PySide6.QtCore import QPoint, Qt
from PySide6.QtGui import QMouseEvent
from PySide6.QtWidgets import QFrame, QHBoxLayout

from src.ui.styles import ComponentSize
from src.utils.get_default_layout import get_default_layout


class TitleBar(QFrame):
    def __init__(self) -> None:
        super().__init__()
        self._drag_offset: QPoint | None = None

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


def workspace_bar(name: str = "OnixBar", *, draggable: bool = False):
    bar = TitleBar() if draggable else QFrame()
    bar.setObjectName(name)
    bar.setFixedHeight(int(ComponentSize.ToolbarHeight))

    layout = get_default_layout(QHBoxLayout, parent=bar)
    layout.setContentsMargins(16, 0, 12, 0)
    layout.setSpacing(8)

    return bar, layout
