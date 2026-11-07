from PySide6.QtCore import Signal
from PySide6.QtWidgets import QButtonGroup, QVBoxLayout, QWidget

from src.ui.components.primitive.navigation_button import NavigationButton
from src.ui.themes.constants import DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class SidebarNavigation(QWidget):
    page_requested = Signal(int)

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        layout = get_default_layout(QVBoxLayout, GetDefaultLayoutOptions(spacing=8), parent=self)

        self.button_group = QButtonGroup(self)
        self.button_group.setExclusive(True)

        navigation_items = [
            ("Minhas pastas", "folder"),
            ("Recentes", "clock"),
            ("Favoritos", "star"),
            ("Sincronização", "arrow_sync"),
            ("Lixeira", "delete"),
        ]

        for index, (text, icon_name) in enumerate(navigation_items):
            button = NavigationButton(text, icon_name)

            self.button_group.addButton(button, index)
            layout.addWidget(button)

            if index == 0:
                button.setChecked(True)

        self.button_group.idClicked.connect(self.page_requested.emit)

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = DarkColors if theme == AvailableTheme.DARK else LightColors
        for button in self.button_group.buttons():
            assert isinstance(button, NavigationButton)
            button.set_icon_colors(colors.TextSecondary, colors.Accent)
