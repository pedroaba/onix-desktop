from PySide6.QtWidgets import QHBoxLayout, QMainWindow, QWidget
from PySide6.QtCore import Signal

from src.ui.components.sidebar import Sidebar
from src.ui.pages.home import HomePage


class MainWindow(QMainWindow):
    theme_toggle_requested = Signal()

    def __init__(self) -> None:
        super().__init__()

        self.setWindowTitle("Onix Desktop")
        self.resize(1100, 720)
        self.setMinimumSize(800, 500)

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
