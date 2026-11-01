from PySide6.QtWidgets import QMainWindow

from src.ui.pages.home import HomePage


class MainWindow(QMainWindow):
    def __init__(self) -> None:
        super().__init__()

        self.setWindowTitle("Onix Desktop")
        self.resize(1100, 720)
        self.setMinimumSize(800, 500)

        self.__home_page = HomePage(self)
        self.setCentralWidget(self.__home_page)
