import sys

from PySide6.QtWidgets import QApplication

from src.ui.main_window import MainWindow
from src.ui.themes.theme_manager import apply_light_theme


def main() -> int:
    app = QApplication()
    apply_light_theme(app)

    window = MainWindow()
    window.show()

    return app.exec()


if __name__ == "__main__":
    sys.exit(main())
