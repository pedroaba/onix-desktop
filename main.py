import sys

from PySide6.QtWidgets import QApplication

from src.ui.main_window import MainWindow
from src.ui.themes.theme_manager import AvailableTheme, apply_theme


def main() -> int:
    app = QApplication()
    apply_theme(app, AvailableTheme.DARK)

    window = MainWindow()
    window.show()

    return app.exec()


if __name__ == "__main__":
    sys.exit(main())
