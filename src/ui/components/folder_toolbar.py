from PySide6.QtCore import Signal
from PySide6.QtWidgets import QHBoxLayout, QWidget

from src.ui.components.primitive.button import ActionButton
from src.ui.components.view_mode_selector import ViewModeSelector
from src.ui.themes.constants import DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class FolderToolbar(QWidget):
    new_folder_requested = Signal()

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)
        layout = get_default_layout(QHBoxLayout, GetDefaultLayoutOptions(spacing=12), parent=self)
        self.new_folder_button = ActionButton("Nova Pasta", "add", object_name="PrimaryButton")
        self.sync_button = ActionButton("Sincronizar agora", "arrow_sync", object_name="SyncButton")
        self.view_selector = ViewModeSelector()
        layout.addWidget(self.new_folder_button)
        layout.addWidget(self.sync_button)
        layout.addStretch()
        layout.addWidget(self.view_selector)
        self.new_folder_button.clicked.connect(self.new_folder_requested.emit)

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = DarkColors if theme == AvailableTheme.DARK else LightColors
        self.new_folder_button.set_icon_color(colors.TextOnPrimary)
        self.sync_button.set_icon_color(colors.Accent)
        self.view_selector.set_theme(theme)
