from PySide6.QtCore import Signal, Slot
from PySide6.QtWidgets import (
    QFrame,
    QVBoxLayout,
    QWidget,
)

from src.ui.components.account_header import AccountHeader
from src.ui.components.primitive.button import IconButton
from src.ui.components.sidebar_navigation import SidebarNavigation
from src.ui.components.storage_usage import StorageUsage
from src.ui.styles import DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class Sidebar(QFrame):
    theme_toggle_requested = Signal()
    page_requested = Signal(int)

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("Sidebar")
        self.setFixedWidth(256)

        layout = get_default_layout(
            QVBoxLayout,
            GetDefaultLayoutOptions(margins=create_qmargins(16, 24), spacing=8),
            parent=self,
        )

        self.account_header_widget = AccountHeader()

        layout.addWidget(self.account_header_widget)
        layout.addSpacing(24)

        self.navigation = SidebarNavigation()
        self._navigation_group = self.navigation.button_group

        self.navigation.page_requested.connect(self.page_requested.emit)
        layout.addWidget(self.navigation)

        layout.addStretch()

        self.theme_button = IconButton("dark_theme", "Alternar tema")
        self.theme_button.clicked.connect(self._request_theme_toggle)

        # layout.addWidget(self.theme_button)

        self.settings_button = IconButton("settings", "Configurações")
        layout.addWidget(self.settings_button)

        self.storage = StorageUsage()
        self.storage_usage_label = self.storage.storage_usage_label
        self.storage_bar = self.storage.storage_bar

        layout.addSpacing(8)
        layout.addWidget(self.storage)

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = DarkColors if theme == AvailableTheme.DARK else LightColors
        self.navigation.set_theme(theme)
        self.settings_button.set_icon_color(colors.TextSecondary.to_hex())
        self.theme_button.set_icon_color(colors.TextSecondary.to_hex())

    @Slot()
    def _request_theme_toggle(self) -> None:
        self.theme_toggle_requested.emit()
