from PySide6.QtWidgets import QHBoxLayout, QMainWindow, QWidget

from src.ui.components.sidebar import Sidebar
from src.ui.pages.home import HomePage


class MainWindow(QMainWindow):
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

        layout.addWidget(self.__sidebar)
        layout.addWidget(self.__home_page, stretch=1)
