from PySide6.QtCore import QSettings


class AppSettings:
    def __init__(self) -> None:
        self._settings = QSettings("Pedro", "OnixDesktop")

    def load_theme(self):
        return self._settings.value("appearance/theme", "light", type=str)

    def save_theme(self, theme_name: str) -> None:
        self._settings.setValue("appearance/theme", theme_name)
        self._settings.sync()
