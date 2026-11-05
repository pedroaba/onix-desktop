import sys

from PySide6.QtCore import QMargins, Qt, Signal
from PySide6.QtGui import QMouseEvent
from PySide6.QtWidgets import QFrame, QHBoxLayout, QLabel, QLineEdit, QWidget

from src.loaders.icon import IconLoader
from src.utils.create_size import create_qsize
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class TitleBar(QFrame):
    search_text_changed = Signal(str)

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("TitleBar")
        self.setAttribute(Qt.WidgetAttribute.WA_ContentsMarginsRespectsSafeArea, False)

        self.setFixedHeight(54)

        left_margin = 92 if sys.platform == "darwin" else 16
        right_margin = 156 if sys.platform == "win32" else 16

        layout = get_default_layout(
            QHBoxLayout,
            GetDefaultLayoutOptions(
                margins=QMargins(left_margin, 8, right_margin, 8),
                spacing=24,
            ),
            parent=self,
        )

        icon_loader = IconLoader("onedrive")
        cloud_icon_pixmap = icon_loader.load_as_pixmap(32)

        cloud_label = QLabel()
        cloud_label.setFixedSize(create_qsize(32))
        cloud_label.setPixmap(cloud_icon_pixmap)

        self.app_title = QLabel("Onix Desktop")
        self.app_title.setObjectName("AppTitle")
        self.app_title.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents, True)

        title_layout = get_default_layout(QHBoxLayout)
        title_layout.addWidget(cloud_label)
        title_layout.addSpacing(8)
        title_layout.addWidget(self.app_title)

        self.search_input = QLineEdit()
        self.search_input.setObjectName("SearchInput")
        self.search_input.setPlaceholderText("Pesquisar no OneDrive")
        self.search_input.setAccessibleName("Pesquisar no OneDrive")
        self.search_input.setClearButtonEnabled(True)
        self.search_input.setMaximumWidth(640)

        layout.addLayout(title_layout)
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
