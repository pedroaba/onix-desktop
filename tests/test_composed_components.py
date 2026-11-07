import os
import unittest

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtWidgets import QApplication, QWidget

from src.ui.components.details_header import DetailsHeader
from src.ui.components.folder_toolbar import FolderToolbar
from src.ui.components.page_header import PageHeader
from src.ui.components.sidebar_navigation import SidebarNavigation
from src.ui.components.storage_usage import StorageUsage
from src.ui.components.view_mode_selector import ViewModeSelector
from src.ui.themes.theme_manager import AvailableTheme


class ComposedComponentTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.app = QApplication.instance() or QApplication([])

    def test_toolbar_emits_one_creation_request_and_keeps_unavailable_grid(self):
        toolbar = FolderToolbar()
        self.addCleanup(toolbar.deleteLater)
        requests = []
        toolbar.new_folder_requested.connect(lambda: requests.append(True))
        toolbar.new_folder_button.click()
        toolbar.sync_button.click()
        toolbar.view_selector.grid_button.click()
        self.assertEqual(requests, [True])
        self.assertTrue(toolbar.view_selector.list_button.isChecked())
        self.assertFalse(toolbar.view_selector.grid_button.isChecked())
        self.assertFalse(toolbar.view_selector.grid_button.isEnabled())

    def test_details_header_forwards_close_once(self):
        header = DetailsHeader()
        self.addCleanup(header.deleteLater)
        closed = []
        header.close_requested.connect(lambda: closed.append(True))
        header.close_button.click()
        self.assertEqual(closed, [True])
        self.assertEqual(header.close_button.accessibleName(), "Fechar painel de detalhes")

    def test_headers_accept_other_page_content(self):
        header = PageHeader("Recentes", "OneDrive pessoal", "Pastas abertas recentemente.")
        self.addCleanup(header.deleteLater)
        self.assertEqual(header.title_label.text(), "Recentes")
        self.assertEqual(header.description_label.text(), "Pastas abertas recentemente.")
        self.assertTrue(header.description_label.wordWrap())

    def test_components_support_parent_ownership_and_independent_instances(self):
        parent = QWidget()
        self.addCleanup(parent.deleteLater)
        for component in (
            FolderToolbar,
            DetailsHeader,
            SidebarNavigation,
            StorageUsage,
            ViewModeSelector,
        ):
            with self.subTest(component=component):
                first = component(parent)
                second = component(parent)
                self.assertIs(first.parent(), parent)
                self.assertIs(second.parent(), parent)
                self.assertIsNot(first.layout(), second.layout())
                if isinstance(first, SidebarNavigation) and isinstance(second, SidebarNavigation):
                    first.button_group.buttons()[1].click()
                    self.assertTrue(second.button_group.buttons()[0].isChecked())
                if isinstance(
                    first, (FolderToolbar, DetailsHeader, SidebarNavigation, ViewModeSelector)
                ):
                    for theme in (AvailableTheme.LIGHT, AvailableTheme.DARK, AvailableTheme.LIGHT):
                        first.set_theme(theme)


if __name__ == "__main__":
    unittest.main()
