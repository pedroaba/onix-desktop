import sys

from PySide6.QtWidgets import QApplication

from src.services.app_settings import AppSettings
from src.ui.main_window import MainWindow
from src.ui.themes.theme_manager import AvailableTheme, apply_theme


def main() -> int:
    app = QApplication()
    settings = AppSettings()

    current_theme = AvailableTheme.LIGHT
    try:
        current_theme = AvailableTheme(settings.load_theme())
    except ValueError:
        current_theme = AvailableTheme.LIGHT

    apply_theme(app, current_theme)

    def toggle_theme(app: QApplication) -> None:
        nonlocal current_theme
        match current_theme:
            case AvailableTheme.DARK:
                current_theme = AvailableTheme.LIGHT
            case _:
                current_theme = AvailableTheme.DARK
        apply_theme(app, current_theme)
        settings.save_theme(current_theme.value)

    window = MainWindow()
    window.theme_toggle_requested.connect(lambda: toggle_theme(app))

    window.show()

    return app.exec()


if __name__ == "__main__":
    sys.exit(main())
