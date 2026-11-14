from PySide6.QtWidgets import QButtonGroup, QHBoxLayout, QWidget

from src.ui.components.primitive.button import IconButton
from src.ui.components.workspace_controls import WorkspaceButton
from src.ui.styles import ComponentSize, DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.create_size import create_qsize
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class ViewModeSelector(QWidget):
    def __init__(self, parent: QWidget | None = None, *, cards_enabled: bool = False) -> None:
        super().__init__(parent)

        layout = get_default_layout(QHBoxLayout, GetDefaultLayoutOptions(spacing=8), parent=self)

        self.list_button = (
            WorkspaceButton(icon="list")
            if cards_enabled
            else IconButton("text_align_left", description="Visualização em lista", size=36)
        )

        self.grid_button = (
            WorkspaceButton(icon="grid")
            if cards_enabled
            else IconButton("grid", description="Visualização em grade", size=36)
        )

        self.button_group = QButtonGroup(self)
        self.button_group.setExclusive(True)

        for button in (self.list_button, self.grid_button):
            if not cards_enabled:
                button.setProperty("role", "view-mode")

            button.setCheckable(True)

            if cards_enabled:
                size = int(ComponentSize.ControlHeight)
                button.setFixedSize(create_qsize(size))

            self.button_group.addButton(button)
            layout.addWidget(button)

        self.list_button.setChecked(True)
        self.grid_button.setEnabled(cards_enabled)
        self.list_button.setAccessibleName("Lista")
        self.grid_button.setAccessibleName("Cards")
        if cards_enabled:
            self.list_button.setToolTip("Lista")
            self.grid_button.setToolTip("Cards")
        else:
            self.grid_button.setToolTip("Visualização em grade indisponível")

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = DarkColors if theme == AvailableTheme.DARK else LightColors

        for button in (self.list_button, self.grid_button):
            button.set_icon_colors(colors.TextSecondary.to_hex(), colors.Accent.to_hex())
