from enum import Enum

from PySide6.QtWidgets import QApplication

from src.ui.styles import DarkColors, LightColors, ThemeColors
from src.ui.themes import base, dark, light, workspace


class AvailableTheme(Enum):
    LIGHT = "light"
    DARK = "dark"


def theme_colors(theme: AvailableTheme) -> ThemeColors:
    return DarkColors if theme == AvailableTheme.DARK else LightColors


def apply_theme(app: QApplication, theme: AvailableTheme = AvailableTheme.LIGHT) -> None:
    if not isinstance(theme, AvailableTheme):
        raise ValueError(f"Tema desconhecido: {theme}")

    color_theme = {AvailableTheme.LIGHT: light, AvailableTheme.DARK: dark}[theme]

    base_stylesheet = base.build_stylesheet().value
    color_stylesheet = color_theme.build_stylesheet().value

    stylesheet = base_stylesheet + "\n" + color_stylesheet

    app.setStyleSheet(stylesheet + workspace.build_stylesheet(theme_colors(theme)))
