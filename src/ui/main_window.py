import sys

from PySide6.QtCore import Qt, Signal
from PySide6.QtGui import QKeySequence, QShortcut
from PySide6.QtWidgets import QHBoxLayout, QMainWindow, QStackedWidget

from src.services.folder_store import FolderStore
from src.ui.components.sidebar import Sidebar
from src.ui.components.workspace_controls import frame
from src.ui.pages.files import FilesPage
from src.ui.pages.providers import ProvidersPage
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.get_default_layout import get_default_layout


class MainWindow(QMainWindow):
    theme_toggle_requested = Signal()

    def __init__(self, *, store: FolderStore | None = None) -> None:
        super().__init__()

        self.setWindowTitle("")

        if sys.platform == "darwin":
            self.setWindowFlag(Qt.WindowType.ExpandedClientAreaHint, True)
            self.setWindowFlag(Qt.WindowType.NoTitleBarBackgroundHint, True)
            self.setAttribute(Qt.WidgetAttribute.WA_ContentsMarginsRespectsSafeArea, False)

        self.resize(1280, 760)
        self.setMinimumSize(900, 600)

        root = frame("OnixWorkspace")
        self.setCentralWidget(root)
        layout = get_default_layout(QHBoxLayout, parent=root)

        self.sidebar = Sidebar()
        self.pages = QStackedWidget()
        self.files_page = FilesPage(store=store)
        self.providers_page = ProvidersPage()

        self.pages.addWidget(self.files_page)
        self.pages.addWidget(self.providers_page)

        layout.addWidget(self.sidebar)
        layout.addWidget(self.pages, 1)

        self.sidebar.page_requested.connect(self._navigate)
        self.sidebar.search_requested.connect(self._open_search)
        self.files_page.section_requested.connect(self._navigate)
        self.providers_page.theme_toggle_requested.connect(self.theme_toggle_requested.emit)

        for key in (QKeySequence(QKeySequence.StandardKey.Find), QKeySequence("Ctrl+K")):
            QShortcut(key, self).activated.connect(self._open_search)

        self.set_theme(AvailableTheme.LIGHT)
        self._navigate("Todos os arquivos")

    def set_theme(self, theme: AvailableTheme) -> None:
        self.sidebar.set_theme(theme)
        self.files_page.set_theme(theme)
        self.providers_page.set_theme(theme)

    def _navigate(self, section: str) -> None:
        self.sidebar.set_current_page(section)

        if section == "Configurações":
            self.pages.setCurrentWidget(self.providers_page)
        else:
            self.pages.setCurrentWidget(self.files_page)
            self.files_page.navigate(section)

    def _open_search(self) -> None:
        if self.pages.currentWidget() is self.providers_page:
            self._navigate("Todos os arquivos")

        self.files_page.open_search()
