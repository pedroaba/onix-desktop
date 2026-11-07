import sys

from PySide6.QtCore import Qt, Signal, Slot
from PySide6.QtWidgets import QHBoxLayout, QMainWindow, QStackedWidget, QWidget

from src.models.folder import Folder
from src.ui.components.app_footer import AppFooter
from src.ui.components.folder_details import FolderDetails
from src.ui.components.sidebar import Sidebar
from src.ui.components.title_bar import TitleBar
from src.ui.pages.home import HomePage
from src.ui.pages.recent import RecentPage
from src.ui.pages.section import SectionPage
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.get_default_layout import get_default_layout


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

        layout = get_default_layout(QHBoxLayout, parent=central_widget)

        self.__home_page = HomePage()
        self.__recent_page = RecentPage()

        self.__page_stack = QStackedWidget()
        self.__page_stack.addWidget(self.__home_page)
        self.__sections_pages = [
            self.__recent_page,
            SectionPage("Favoritos"),
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

        if isinstance(page, (HomePage, RecentPage)):
            summary = page.results_summary
        else:
            summary = ""
        self.__app_footer.set_summary(summary)

    @Slot(str)
    def _search_current_page(self, text: str) -> None:
        page = self.__page_stack.currentWidget()
        if isinstance(page, (HomePage, RecentPage)):
            page.set_search_text(text)

    @Slot(int)
    def _change_page(self, page_id: int) -> None:
        if not 0 <= page_id < self.__page_stack.count():
            return

        self.__home_page.clear_folder_selection()
        self.__recent_page.clear_folder_selection()
        self.__folder_details.hide()

        if page_id == 1:
            self.__recent_page.set_folders(self.__home_page.folders)

        self.__page_stack.setCurrentIndex(page_id)
        self.__title_bar.search_input.setEnabled(page_id == 0)

        SEARCHABLE_PAGES = (0, 1)
        searchable = page_id in SEARCHABLE_PAGES
        self.__title_bar.search_input.setEnabled(searchable)

        if searchable:
            self._search_current_page(self.__title_bar.search_input.text())
        self._update_summary()

    @Slot(object)
    def _show_folder_details(self, folder: Folder | None) -> None:
        self.__folder_details.show_folder(folder)

        if folder is not None:
            self.__folder_details.show()

    @Slot()
    def _close_folder_details(self) -> None:
        self.__home_page.clear_folder_selection()
        self.__recent_page.clear_folder_selection()
        self.__folder_details.hide()
