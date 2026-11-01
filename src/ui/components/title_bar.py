import sys

from PySide6.QtCore import Signal, Qt
from PySide6.QtGui import QMouseEvent
from PySide6.QtWidgets import QFrame, QHBoxLayout, QLabel, QLineEdit, QWidget


class TitleBar(QFrame):
    search_text_changed = Signal(str)

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("TitleBar")
        self.setAttribute(Qt.WidgetAttribute.WA_ContentsMarginsRespectsSafeArea, False)

        self.setFixedHeight(54)

        layout = QHBoxLayout(self)
        left_margin = 92 if sys.platform == "darwin" else 16
        right_margin = 156 if sys.platform == "win32" else 16

        layout.setContentsMargins(left_margin, 8, right_margin, 8)
        layout.setSpacing(24)

        self.app_title = QLabel("Onix Desktop")
        self.app_title.setObjectName("AppTitle")
        self.app_title.setAttribute(
            Qt.WidgetAttribute.WA_TransparentForMouseEvents, True
        )

        self.search_input = QLineEdit()
        self.search_input.setObjectName("SearchInput")
        self.search_input.setPlaceholderText("Pesquisar no OneDrive")
        self.search_input.setAccessibleName("Pesquisar no OneDrive")
        self.search_input.setClearButtonEnabled(True)
        self.search_input.setMaximumWidth(640)

        layout.addWidget(self.app_title)
        layout.addStretch()
        layout.addWidget(self.search_input, stretch=1)
        layout.addStretch()

        self.search_input.textChanged.connect(self.search_text_changed.emit)

    def mousePressEvent(self, event: QMouseEvent, /) -> None:
        if event.button() == Qt.MouseButton.LeftButton:
            window_handle = self.window().windowHandle()

            if window_handle is not None:
                if window_handle.startSystemMove():
                    event.accept()
                    return
        super().mousePressEvent(event)
