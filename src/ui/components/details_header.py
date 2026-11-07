from PySide6.QtCore import Qt, Signal
from PySide6.QtWidgets import QHBoxLayout, QWidget

from src.ui.components.primitive.button import IconButton
from src.ui.components.primitive.label import StyledLabel
from src.ui.themes.constants import DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class DetailsHeader(QWidget):
    close_requested = Signal()

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)
        layout = get_default_layout(QHBoxLayout, GetDefaultLayoutOptions(spacing=8), parent=self)
        heading = StyledLabel("Detalhes", object_name="DetailsHeading")
        self.close_button = IconButton(
            "dismiss",
            object_name="CloseDetailsButton",
            size=28,
            description="Fechar painel de detalhes",
        )
        self.close_button.setAttribute(Qt.WidgetAttribute.WA_LayoutUsesWidgetRect, True)
        self.close_button.clicked.connect(self.close_requested.emit)
        layout.addWidget(heading)
        layout.addStretch()
        layout.addWidget(self.close_button)

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = DarkColors if theme == AvailableTheme.DARK else LightColors
        self.close_button.set_icon_color(colors.TextSecondary)
