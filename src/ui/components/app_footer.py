from PySide6.QtCore import Slot
from PySide6.QtWidgets import QHBoxLayout, QLabel, QStatusBar, QWidget

from src.loaders.icon import IconLoader, IconLoaderOptions


class AppFooter(QStatusBar):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("AppFooter")
        self.setSizeGripEnabled(False)
        self.setFixedHeight(44)

        self.count_label = QLabel()
        self.count_label.setObjectName("FooterCount")

        self.connection_icon = QLabel()
        self.connection_icon.setFixedSize(20, 20)
        self.connection_icon.setPixmap(
            IconLoader(
                "checkmark_circle",
                options=IconLoaderOptions(
                    folder_name="fluent/20/color",
                ),
            ).load_as_pixmap(20)
        )

        self.connection_label = QLabel()
        self.connection_label.setObjectName("FooterConnection")

        content = QWidget()

        layout = QHBoxLayout(content)
        layout.setContentsMargins(20, 0, 20, 0)
        layout.setSpacing(8)

        layout.addWidget(self.count_label)
        layout.addStretch()
        layout.addWidget(self.connection_icon)
        layout.addWidget(self.connection_label)

        self.addPermanentWidget(content, 1)

        self.set_connection(False)

    @Slot(str)
    def set_summary(self, text: str) -> None:
        self.count_label.setText(text)

    @Slot(bool)
    def set_connection(self, connected: bool) -> None:
        self.connection_icon.setVisible(connected)

        text = "Conta OneDrive não conectada"
        if connected:
            text = "Conectado ao OneDrive pessoal"

        self.connection_label.setText(text)
