from PySide6.QtCore import Signal
from PySide6.QtWidgets import QFrame, QHBoxLayout, QLabel, QLineEdit, QWidget


class TitleBar(QFrame):
    search_text_changed = Signal(str)

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("TitleBar")
        self.setFixedHeight(54)

        layout = QHBoxLayout(self)
        layout.setContentsMargins(16, 8, 16, 8)
        layout.setSpacing(24)

        self.app_title = QLabel("Onix Desktop")
        self.app_title.setObjectName("AppTitle")

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
