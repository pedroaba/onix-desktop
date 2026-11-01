import sys

from PySide6.QtWidgets import QHBoxLayout, QMainWindow, QWidget
from PySide6.QtCore import Signal, Qt

from src.ui.components.sidebar import Sidebar
from src.ui.components.title_bar import TitleBar
from src.ui.pages.home import HomePage


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

        self.resize(1100, 720)
        self.setMinimumSize(800, 500)

        self.__title_bar = TitleBar(self)
        self.setMenuWidget(self.__title_bar)

        central_widget = QWidget()
        self.setCentralWidget(central_widget)

        layout = QHBoxLayout(central_widget)
        layout.setContentsMargins(0, 0, 0, 0)
        layout.setSpacing(0)

        self.__home_page = HomePage()
        self.__sidebar = Sidebar()

        self.__sidebar.theme_toggle_requested.connect(self.theme_toggle_requested.emit)

        layout.addWidget(self.__sidebar)
        layout.addWidget(self.__home_page, stretch=1)
