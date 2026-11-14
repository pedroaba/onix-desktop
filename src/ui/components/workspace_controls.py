from PySide6.QtWidgets import QFrame, QLabel

from src.ui.components.primitive.button import IconButton
from src.ui.components.primitive.label import StyledLabel
from src.ui.styles import ThemeColors


class WorkspaceButton(IconButton):
    def __init__(self, text: str = "", icon: str = "", *, quiet=False, primary=False) -> None:
        super().__init__(icon, text, icon_size=16, icon_folder="fluent/16/regular")

        self.icon_name = icon
        self.primary = primary

        self.setProperty("onixControl", True)
        self.setProperty("quiet", quiet)
        self.setProperty("primary", primary)

    def _on_check_state_changes(self):
        pass

    def set_colors(self, colors: ThemeColors) -> None:
        if self.icon_name:
            if self.isCheckable() and self.property("navigation"):
                self.set_icon_colors(colors.TextSecondary.to_hex(), colors.Text.to_hex())
            else:
                color = colors.TextOnPrimary if self.primary else colors.TextSecondary
                self.set_icon_color(color.to_hex())


def label(text: str = "", role: str = "") -> QLabel:
    return StyledLabel(text, role=role)


def frame(name: str) -> QFrame:
    widget = QFrame()

    widget.setObjectName(name)
    return widget
