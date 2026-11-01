from pathlib import Path
from PySide6.QtWidgets import QApplication


def apply_light_theme(app: QApplication) -> None:
    theme_path = Path(__file__).with_name("light.qss")
    stylesheet = theme_path.read_text(encoding="utf-8")

    app.setStyleSheet(stylesheet)
