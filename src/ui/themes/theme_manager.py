from pathlib import Path
from PySide6.QtWidgets import QApplication


def apply_light_theme(app: QApplication) -> None:
    theme_directory = Path(__file__).parent
    base_stylesheet_dir = theme_directory / "base.qss"
    color_stylesheet_dir = theme_directory / "light.qss"

    base_stylesheet = base_stylesheet_dir.read_text(encoding="utf-8")
    color_stylesheet = color_stylesheet_dir.read_text(encoding="utf-8")

    stylesheet = base_stylesheet + "\n" + color_stylesheet

    app.setStyleSheet(stylesheet)
