import os
import unittest
from unittest.mock import patch

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtWidgets import QApplication, QFrame, QLabel

from src.data.sample_folders import create_sample_folders
from src.models.folder import Folder
from src.services.folder_store import FolderStore
from src.ui.components.app_footer import AppFooter
from src.ui.components.folder_details import FolderDetails
from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.sidebar import Sidebar
from src.ui.components.title_bar import TitleBar
from src.ui.main_window import MainWindow
from src.ui.pages.home import HomePage
from src.ui.themes.theme_manager import AvailableTheme, apply_theme


class ComponentFlowTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        app = QApplication.instance() or QApplication([])
        assert isinstance(app, QApplication)
        cls.app = app

    def setUp(self):
        self.store = FolderStore(create_sample_folders())

    def test_window_search_selection_details_and_footer(self):
        window = MainWindow(store=self.store)
        self.addCleanup(window.deleteLater)
        page = window.findChild(HomePage)
        details = window.findChild(FolderDetails)
        footer = window.findChild(AppFooter)
        title = window.findChild(TitleBar)
        assert page and details and footer and title
        for theme in (AvailableTheme.LIGHT, AvailableTheme.DARK, AvailableTheme.LIGHT):
            with self.subTest(theme=theme):
                apply_theme(self.app, theme)
                window.set_theme(theme)
                title.search_input.setText("")
                page.folder_table.select_folder(page.folders[0])
                self.assertEqual(details.name_label.text(), "Documentos")
                details.close_button.click()
                self.assertTrue(details.isHidden())
                self.assertFalse(page.folder_table.selectionModel().selectedRows())
                page.folder_table.select_folder(page.folders[0])
                self.assertFalse(details.isHidden())
                title.search_input.setText("doc")
                self.assertEqual(footer.count_label.text(), "1 de 6 pastas")
                self.assertTrue(details.content.isHidden())
                title.search_input.setText("no-such-folder")
                self.assertIs(page.result_stack.currentWidget(), page.empty_state)
                self.assertEqual(footer.count_label.text(), "0 de 6 pastas")
                title.search_input.clear()
                self.assertIs(page.result_stack.currentWidget(), page.folder_table)
                self.assertEqual(footer.count_label.text(), "6 pastas")

    def test_create_folder_validation_cancel_and_success(self):
        page = HomePage(store=self.store)
        self.addCleanup(page.deleteLater)
        selected = []
        summaries = []
        page.folder_selected.connect(selected.append)
        page.summary_changed.connect(summaries.append)
        for name, accepted, warning_title in (
            ("Cancelada", False, None),
            ("   ", True, "Nome inválido"),
            (" DOCUMENTOS ", True, "Pasta existente"),
        ):
            with (
                self.subTest(name=name),
                patch("src.ui.pages.home.QInputDialog.getText", return_value=(name, accepted)),
                patch("src.ui.pages.home.QMessageBox.warning") as warning,
            ):
                page.new_folder_button.click()
                self.assertEqual(page.folder_table.visible_count, 6)
                if warning_title:
                    self.assertEqual(warning.call_args.args[1], warning_title)
                else:
                    warning.assert_not_called()
        with patch("src.ui.pages.home.QInputDialog.getText", return_value=(" Nova ", True)):
            page.new_folder_button.click()
        self.assertEqual(page.folder_table.visible_count, 7)
        self.assertEqual(selected[-1].name, "Nova")
        self.assertEqual(summaries[-1], "7 pastas")
        self.assertTrue(page.list_view_button.isChecked())
        self.assertFalse(page.grid_view_button.isEnabled())

    def test_details_reset_switch_does_not_mutate_other_folder(self):
        details = FolderDetails()
        self.addCleanup(details.deleteLater)
        first = Folder("Primeira", "Neste dispositivo", 0, file_count=1, keep_on_device=True)
        second = Folder("Segunda", "Somente na nuvem", 0)
        details.show_folder(first)
        self.assertEqual(details.subtitle_label.text(), "Pasta • 1 arquivo")
        details.show_folder(second)
        self.assertTrue(first.keep_on_device)
        self.assertFalse(details.keep_switch.isChecked())
        details.keep_switch.click()
        self.assertTrue(second.keep_on_device)
        details.show_folder(None)
        self.assertTrue(details.content.isHidden())
        self.assertFalse(details.empty_label.isHidden())
        details.keep_switch.click()
        self.assertTrue(second.keep_on_device)
        self.assertFalse(details.free_space_button.isEnabled())

    def test_sidebar_account_storage_and_indicator(self):
        sidebar = Sidebar()
        self.addCleanup(sidebar.deleteLater)
        account_title = sidebar.account_header_widget.findChild(QLabel, "AccountTitle")
        assert account_title
        self.assertEqual(account_title.text(), "OneDrive pessoal")
        self.assertEqual(sidebar.storage_bar.maximum(), 1000)
        self.assertEqual(sidebar.storage_bar.value(), 128)
        buttons = sidebar._navigation_group.buttons()
        buttons[2].click()
        for index, button in enumerate(buttons):
            indicator = button.findChild(QFrame, "NavigationIndicator")
            assert indicator
            self.assertEqual(indicator.isHidden(), index != 2)

    def test_long_name_layout_settles_after_resize_and_theme_switch(self):
        window = MainWindow(store=self.store)
        self.addCleanup(window.close)
        self.addCleanup(window.deleteLater)
        page = window.findChild(HomePage)
        details = window.findChild(FolderDetails)
        assert page and details
        folder = Folder(
            "Pasta com nome bastante longo para verificar quebra de linha no painel de detalhes",
            "Neste dispositivo",
            1_000_000_000,
        )
        page.folder_table.set_folders([folder])
        window.show()
        for theme in (AvailableTheme.LIGHT, AvailableTheme.DARK):
            apply_theme(self.app, theme)
            window.set_theme(theme)
            for width, height in ((1100, 700), (1440, 900)):
                with self.subTest(theme=theme, width=width):
                    window.resize(width, height)
                    page.folder_table.select_folder(folder)
                    # Nested layouts settle across queued LayoutRequest events.
                    for _ in range(5):
                        self.app.processEvents()
                    self.assertEqual(details.name_label.text(), folder.name)
                    self.assertTrue(details.name_label.wordWrap())
                    self.assertLessEqual(
                        details.availability.geometry().bottom(), details.content.height()
                    )
                    if height == 900:
                        icon = details.summary.findChild(IconLabel)
                        assert icon
                        self.assertGreater(details.name_label.y(), icon.geometry().bottom())


if __name__ == "__main__":
    unittest.main()
