from PySide6.QtCore import Signal, Slot, Qt
from PySide6.QtWidgets import (
    QButtonGroup,
    QFrame,
    QLabel,
    QPushButton,
    QVBoxLayout,
    QWidget,
    QHBoxLayout,
)

from src.loaders.icon import IconLoader


class Sidebar(QFrame):
    theme_toggle_requested = Signal()

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("Sidebar")
        self.setFixedWidth(256)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(16, 24, 16, 24)
        layout.setSpacing(8)

        icon_loader = IconLoader("onedrive")
        cloud_icon_pixmap = icon_loader.load_as_pixmap(40)

        cloud_label = QLabel()
        cloud_label.setFixedSize(40, 40)
        cloud_label.setPixmap(cloud_icon_pixmap)

        account_title = QLabel("Pedro")
        account_title.setObjectName("AccountTitle")

        account_subtitle = QLabel("OneDrive pessoal")
        account_subtitle.setObjectName("AccountSubtitle")

        account_text_layout = QVBoxLayout()
        account_text_layout.setContentsMargins(0, 0, 0, 0)
        account_text_layout.setSpacing(0)
        account_text_layout.addWidget(account_title)
        account_text_layout.addWidget(account_subtitle)

        account_layout = QHBoxLayout()
        account_layout.setSpacing(12)
        account_layout.addWidget(cloud_label)
        account_layout.addLayout(account_text_layout)

        layout.addLayout(account_layout)
        layout.addSpacing(24)

        self._navigation_group = QButtonGroup(self)
        self._navigation_group.setExclusive(True)

        navigation_items = [
            "Minhas pastas",
            "Recentes",
            "Favoritos",
            "Sincronização",
            "Lixeira",
        ]

        for index, text in enumerate(navigation_items):
            button = QPushButton(text)

            button.setAttribute(Qt.WidgetAttribute.WA_LayoutUsesWidgetRect, True)

            button.setCheckable(True)
            button.setFixedHeight(44)
            button.setProperty("role", "navigation")

            indicator = QFrame(button)
            indicator.setObjectName("NavigationIndicator")

            indicator.setAttribute(
                Qt.WidgetAttribute.WA_TransparentForMouseEvents, True
            )
            indicator.setGeometry(0, 0, 4, button.height())

            indicator.hide()
            button.toggled.connect(indicator.setVisible)

            self._navigation_group.addButton(button)
            layout.addWidget(button)

            if index == 0:
                button.setChecked(True)

        layout.addStretch()

        self.theme_button = QPushButton("Alternar tema")
        self.theme_button.clicked.connect(self._request_theme_toggle)

        layout.addWidget(self.theme_button)

        self.settings_button = QPushButton("Configurações")
        layout.addWidget(self.settings_button)

    @Slot()
    def _request_theme_toggle(self) -> None:
        self.theme_toggle_requested.emit()
