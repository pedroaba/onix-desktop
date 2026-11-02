import sys

from PySide6.QtWidgets import QApplication

from src.platforms.macos import configure_macos_title_bar
from src.services.app_settings import AppSettings
from src.ui.main_window import MainWindow
from src.ui.themes.theme_manager import AvailableTheme, apply_theme


def main() -> int:
    app = QApplication()
    app.setApplicationName("Onix Desktop")
    settings = AppSettings()

    current_theme = AvailableTheme.LIGHT
    try:
        current_theme = AvailableTheme(settings.load_theme())
    except ValueError:
        current_theme = AvailableTheme.LIGHT

    apply_theme(app, current_theme)
    window = MainWindow()

    def toggle_theme(app: QApplication) -> None:
        nonlocal current_theme
        match current_theme:
            case AvailableTheme.DARK:
                current_theme = AvailableTheme.LIGHT
            case _:
                current_theme = AvailableTheme.DARK
        apply_theme(app, current_theme)
        window.set_theme(current_theme)
        settings.save_theme(current_theme.value)

    window.set_theme(current_theme)
    window.theme_toggle_requested.connect(lambda: toggle_theme(app))

    window.show()
    configure_macos_title_bar(window)

    return app.exec()


if __name__ == "__main__":
    sys.exit(main())
