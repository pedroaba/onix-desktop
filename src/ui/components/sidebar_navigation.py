from PySide6.QtCore import Signal
from PySide6.QtWidgets import QButtonGroup, QVBoxLayout, QWidget

from src.loaders.icons import Icons
from src.ui.components.primitive.navigation_button import NavigationButton
from src.ui.themes.dark import DarkColors
from src.ui.themes.light import LightColors
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
            ("Minhas pastas", Icons.Folder.Fluent.Size20.Regular),
            ("Recentes", Icons.Clock.Fluent.Size20.Regular),
            ("Favoritos", Icons.Star.Fluent.Size20.Regular),
            ("Sincronização", Icons.ArrowSync.Fluent.Size20.Regular),
            ("Lixeira", Icons.Delete.Fluent.Size20.Regular),
        ]

        for index, (text, icon) in enumerate(navigation_items):
            button = NavigationButton(text, icon)

            self.button_group.addButton(button, index)
            layout.addWidget(button)

            if index == 0:
                button.setChecked(True)

        self.button_group.idClicked.connect(self.page_requested.emit)

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = DarkColors if theme == AvailableTheme.DARK else LightColors
        for button in self.button_group.buttons():
            assert isinstance(button, NavigationButton)
            button.set_icon_colors(colors.TextSecondary.to_hex(), colors.Accent.to_hex())
