import os
import sys
import unittest
from unittest.mock import patch

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtCore import QMargins
from PySide6.QtWidgets import QApplication, QGridLayout, QHBoxLayout, QVBoxLayout, QWidget

from src.ui.components.empty_state import EmptyState
from src.ui.components.folder_details import FolderDetails
from src.ui.components.sidebar import Sidebar
from src.ui.components.sync_status import SyncStatus
from src.ui.components.title_bar import TitleBar
from src.ui.main_window import MainWindow
from src.ui.pages.home import HomePage
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class LayoutTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.app = QApplication.instance() or QApplication([])

    def test_margin_values(self):
        self.assertEqual(create_qmargins(), QMargins())
        self.assertEqual(create_qmargins(8), QMargins(8, 8, 8, 8))
        self.assertEqual(create_qmargins(12, 0), QMargins(12, 0, 12, 0))
        margins = QMargins(1, 2, 3, 4)
        self.assertIs(create_qmargins(margins), margins)

    def test_layout_defaults_and_parent(self):
        for layout_class in (QHBoxLayout, QVBoxLayout, QGridLayout):
            with self.subTest(layout_class=layout_class):
                parent = QWidget()
                self.addCleanup(parent.deleteLater)
                layout = get_default_layout(layout_class, parent=parent)
                self.assertIsInstance(layout, layout_class)
                self.assertIs(parent.layout(), layout)
                self.assertEqual(layout.contentsMargins(), QMargins())
                self.assertEqual(layout.spacing(), 0)

    def test_custom_options_and_independent_defaults(self):
        options = GetDefaultLayoutOptions(margins=create_qmargins(12, 6), spacing=8)
        layout = get_default_layout(QHBoxLayout, options)
        self.assertEqual(layout.contentsMargins(), QMargins(12, 6, 12, 6))
        self.assertEqual(layout.spacing(), 8)
        first = GetDefaultLayoutOptions()
        first.margins.setLeft(99)
        self.assertEqual(GetDefaultLayoutOptions().margins, QMargins())
        self.assertEqual(get_default_layout(QVBoxLayout).contentsMargins(), QMargins())

    def test_component_layout_settings(self):
        for component, margins, spacing in (
            (HomePage, QMargins(24, 24, 24, 24), 16),
            (FolderDetails, QMargins(24, 24, 24, 24), 16),
            (EmptyState, QMargins(24, 24, 24, 24), 8),
            (Sidebar, QMargins(16, 24, 16, 24), 8),
            (SyncStatus, QMargins(), 0),
        ):
            with self.subTest(component=component):
                widget = component()
                self.addCleanup(widget.deleteLater)
                layout = widget.layout()
                assert layout is not None
                self.assertEqual(layout.contentsMargins(), margins)
                self.assertEqual(layout.spacing(), spacing)

    def test_title_bar_platform_margins(self):
        for platform, left, right in (("darwin", 92, 16), ("win32", 16, 156), ("linux", 16, 16)):
            with self.subTest(platform=platform), patch.object(sys, "platform", platform):
                title_bar = TitleBar()
                self.addCleanup(title_bar.deleteLater)
                layout = title_bar.layout()
                assert layout is not None
                self.assertEqual(layout.contentsMargins(), QMargins(left, 8, right, 8))
                self.assertEqual(layout.spacing(), 24)

    def test_main_window_layout(self):
        window = MainWindow()
        self.addCleanup(window.deleteLater)
        central_widget = window.centralWidget()
        assert central_widget is not None
        layout = central_widget.layout()
        assert layout is not None
        self.assertEqual(layout.contentsMargins(), QMargins())
        self.assertEqual(layout.spacing(), 0)
        self.assertEqual(layout.count(), 3)
