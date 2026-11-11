import sys

from PySide6.QtCore import Qt, Signal, Slot
from PySide6.QtWidgets import QHBoxLayout, QMainWindow, QStackedWidget, QWidget

from src.models.folder import Folder
from src.services.app_settings import AppSettings
from src.services.folder_store import FolderStore, get_folder_store
from src.ui.components.app_footer import AppFooter
from src.ui.components.folder_details import FolderDetails
from src.ui.components.sidebar import Sidebar
from src.ui.components.title_bar import TitleBar
from src.ui.pages.favorite import FavoritesPage
from src.ui.pages.folder_list import FolderListPage
from src.ui.pages.home import HomePage
from src.ui.pages.recent import RecentPage
from src.ui.pages.section import SectionPage
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.get_default_layout import get_default_layout


class MainWindow(QMainWindow):
    theme_toggle_requested = Signal()

    def __init__(self, *, store: FolderStore | None = None) -> None:
        super().__init__()

        self.__settings = AppSettings()
        self.__store = store if store is not None else get_folder_store()

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

        layout = get_default_layout(QHBoxLayout, parent=central_widget)

        self.__home_page = HomePage(store=self.__store)
        self.__recent_page = RecentPage()
        self.__favorite_page = FavoritesPage()

        self.__page_stack = QStackedWidget()
        self.__page_stack.addWidget(self.__home_page)

        self.__sections_pages = [
            self.__recent_page,
            self.__favorite_page,
            SectionPage("Sincronização"),
            SectionPage("Lixeira"),
        ]

        for section in self.__sections_pages:
            self.__page_stack.addWidget(section)

        self.__sidebar = Sidebar()
        self.__folder_details = FolderDetails()
        self.__app_footer = AppFooter()

        self.setStatusBar(self.__app_footer)

        self.__sidebar.theme_toggle_requested.connect(self.theme_toggle_requested.emit)
        self.__title_bar.search_text_changed.connect(self._search_current_page)
        self.__home_page.folder_selected.connect(self._show_folder_details)
        self.__folder_details.close_requested.connect(self._close_folder_details)
        self.__home_page.summary_changed.connect(self._update_summary)
        self.__recent_page.summary_changed.connect(self._update_summary)
        self.__sidebar.page_requested.connect(self._change_page)
        self.__recent_page.folder_selected.connect(self._show_folder_details)
        self.__favorite_page.folder_selected.connect(self._show_folder_details)
        self.__favorite_page.summary_changed.connect(self._update_summary)
        self.__folder_details.favorite_changed.connect(self._on_favorite_changed)

        self.__app_footer.set_summary(self.__home_page.results_summary)

        layout.addWidget(self.__sidebar)
        layout.addWidget(self.__page_stack, stretch=1)
        layout.addWidget(self.__folder_details)

    def set_theme(self, theme: AvailableTheme) -> None:
        self.__sidebar.set_theme(theme)
        self.__home_page.set_theme(theme)
        self.__folder_details.set_theme(theme)

        for page in self.__sections_pages:
            page.set_theme(theme)

    @Slot()
    def _update_summary(self) -> None:
        page = self.__page_stack.currentWidget()

        if isinstance(page, (HomePage, FolderListPage)):
            summary = page.results_summary
        else:
            summary = ""
        self.__app_footer.set_summary(summary)

    @Slot(str)
    def _search_current_page(self, text: str) -> None:
        page = self.__page_stack.currentWidget()
        if isinstance(page, (HomePage, FolderListPage)):
            page.set_search_text(text)

    @Slot(int)
    def _change_page(self, page_id: int) -> None:
        if not 0 <= page_id < self.__page_stack.count():
            return

        self._close_folder_details()
        self.__page_stack.setCurrentIndex(page_id)

        page = self.__page_stack.currentWidget()
        if isinstance(page, FolderListPage):
            page.set_folders(self.__store.folders)

        searchable = isinstance(page, (HomePage, FolderListPage))
        self.__title_bar.search_input.setEnabled(searchable)

        if searchable:
            self._search_current_page(self.__title_bar.search_input.text())
        self._update_summary()

    @Slot(object)
    def _show_folder_details(self, folder: Folder | None) -> None:
        self.__folder_details.show_folder(folder)

        if folder is not None:
            self.__folder_details.show()

    @Slot(object)
    def _on_favorite_changed(self, folder: Folder) -> None:
        self.__store.save_favorites()

        if self.__page_stack.currentWidget() is self.__favorite_page:
            self.__favorite_page.set_folders(self.__store.folders)
            self.__folder_details.hide()

    @Slot()
    def _close_folder_details(self) -> None:
        self.__home_page.clear_folder_selection()
        self.__recent_page.clear_folder_selection()
        self.__favorite_page.clear_folder_selection()
        self.__folder_details.hide()
