import sys

from PySide6.QtWidgets import QHBoxLayout, QMainWindow, QWidget
from PySide6.QtCore import Signal, Qt

from src.ui.components.sidebar import Sidebar
from src.ui.components.title_bar import TitleBar
from src.ui.pages.home import HomePage
from src.ui.components.folder_details import FolderDetails
from src.ui.themes.theme_manager import AvailableTheme


class MainWindow(QMainWindow):
    theme_toggle_requested = Signal()

    def __init__(self) -> None:
        super().__init__()

        self.setWindowTitle("Onix Desktop")
        self.setWindowFlag(Qt.WindowType.ExpandedClientAreaHint, True)
        self.setWindowFlag(Qt.WindowType.NoTitleBarBackgroundHint, True)
        self.setAttribute(Qt.WidgetAttribute.WA_ContentsMarginsRespectsSafeArea, False)

        if sys.platform == "darwin":
            self.setWindowTitle("")

        self.resize(1440, 900)
        self.setMinimumSize(1100, 700)

        self.__title_bar = TitleBar(self)
        self.setMenuWidget(self.__title_bar)

        central_widget = QWidget()
        self.setCentralWidget(central_widget)

        layout = QHBoxLayout(central_widget)
        layout.setContentsMargins(0, 0, 0, 0)
        layout.setSpacing(0)

        self.__home_page = HomePage()
        self.__sidebar = Sidebar()
        self.__folder_details = FolderDetails()

        self.__sidebar.theme_toggle_requested.connect(self.theme_toggle_requested.emit)
        self.__title_bar.search_text_changed.connect(self.__home_page.set_search_text)
        self.__home_page.folder_selected.connect(self.__folder_details.show_folder)

        layout.addWidget(self.__sidebar)
        layout.addWidget(self.__home_page, stretch=1)
        layout.addWidget(self.__folder_details)

    def set_theme(self, theme: AvailableTheme) -> None:
        self.__sidebar.set_theme(theme)
        self.__home_page.set_theme(theme)
