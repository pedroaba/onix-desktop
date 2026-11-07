from PySide6.QtCore import Slot
from PySide6.QtWidgets import QHBoxLayout, QStatusBar, QWidget

from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.primitive.label import StyledLabel
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class AppFooter(QStatusBar):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("AppFooter")
        self.setSizeGripEnabled(False)
        self.setFixedHeight(44)

        self.count_label = StyledLabel(object_name="FooterCount")

        self.connection_icon = IconLabel("checkmark_circle", 20, folder_name="fluent/20/color")

        self.connection_label = StyledLabel(object_name="FooterConnection")

        content = QWidget()

        layout = get_default_layout(
            QHBoxLayout,
            GetDefaultLayoutOptions(margins=create_qmargins(20, 0), spacing=8),
            parent=content,
        )

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
