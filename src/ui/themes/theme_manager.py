from enum import Enum
from pathlib import Path
from PySide6.QtWidgets import QApplication


class AvailableTheme(Enum):
    LIGHT = "light"
    DARK = "dark"


def apply_theme(
    app: QApplication, theme: AvailableTheme = AvailableTheme.LIGHT
) -> None:
    if not isinstance(theme, AvailableTheme):
        raise ValueError(f"Tema desconhecido: {theme}")

    theme_directory = Path(__file__).parent
    base_stylesheet_dir = theme_directory / "base.qss"
    color_stylesheet_dir = theme_directory / f"{theme.value}.qss"

    base_stylesheet = base_stylesheet_dir.read_text(encoding="utf-8")
    color_stylesheet = color_stylesheet_dir.read_text(encoding="utf-8")

    stylesheet = base_stylesheet + "\n" + color_stylesheet

    app.setStyleSheet(stylesheet)
