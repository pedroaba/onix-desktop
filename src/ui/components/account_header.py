from PySide6.QtCore import Qt, Signal
from PySide6.QtWidgets import QFrame, QHBoxLayout, QPushButton, QVBoxLayout, QWidget

from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.primitive.label import StyledLabel
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class AccountHeader(QFrame):
    connection_requested = Signal()

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("AccountHeader")
        layout = get_default_layout(
            QVBoxLayout,
            GetDefaultLayoutOptions(margins=create_qmargins(12), spacing=10),
            parent=self,
        )

        cloud_label = IconLabel("onedrive", 32)

        self.title_label = StyledLabel(object_name="AccountTitle", word_wrap=True)
        self.title_label.setTextFormat(Qt.TextFormat.PlainText)

        self.subtitle_label = StyledLabel(object_name="AccountSubtitle", word_wrap=True)
        self.connection_button = QPushButton()
        self.connection_button.setObjectName("AccountConnectionButton")
        self.connection_button.setMinimumHeight(34)
        self.connection_button.clicked.connect(self.connection_requested.emit)

        text_layout = get_default_layout(QVBoxLayout, GetDefaultLayoutOptions(spacing=2))
        text_layout.addWidget(self.title_label)
        text_layout.addWidget(self.subtitle_label)

        identity_layout = get_default_layout(QHBoxLayout, GetDefaultLayoutOptions(spacing=10))
        identity_layout.addWidget(cloud_label, alignment=Qt.AlignmentFlag.AlignVCenter)
        identity_layout.addLayout(text_layout, stretch=1)
        layout.addLayout(identity_layout)
        layout.addWidget(self.connection_button)
        self.set_login_state()

    def set_login_state(self, account_name: str | None = None, *, pending: bool = False) -> None:
        self.title_label.setText(account_name or "OneDrive pessoal")
        self.connection_button.setEnabled(not pending)
        if pending:
            self.subtitle_label.setText("Entre pelo navegador")
            self.connection_button.setText("Conectando…")
        elif account_name:
            self.subtitle_label.setText("OneDrive conectado")
            self.connection_button.setText("Desconectar")
        else:
            self.subtitle_label.setText("Conta não conectada")
            self.connection_button.setText("Conectar OneDrive")

        connected = bool(account_name)
        for widget in (self.subtitle_label, self.connection_button):
            if widget.property("connected") != connected:
                widget.setProperty("connected", connected)
                widget.style().unpolish(widget)
                widget.style().polish(widget)
                widget.update()
