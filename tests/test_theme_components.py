import os
import unittest

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtWidgets import QApplication

from src.ui.components.folder_details import FolderDetails
from src.ui.components.folder_table import FolderTable
from src.ui.components.toggle_switch import ToggleSwitch
from src.ui.pages.home import HomePage
from src.ui.themes.theme_manager import AvailableTheme


class ComponentThemeTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        app = QApplication.instance() or QApplication([])
        assert isinstance(app, QApplication)
        cls.app = app

    def assert_tinted(self, image, expected):
        channels = [int(expected[index : index + 2], 16) for index in (1, 3, 5)]
        pixels = [
            image.pixelColor(x, y)
            for x in range(image.width())
            for y in range(image.height())
            if image.pixelColor(x, y).alpha() > 100
        ]
        self.assertTrue(pixels)
        for pixel in pixels:
            for actual, target in zip(pixel.getRgb()[:3], channels):
                self.assertLessEqual(abs(actual - target), 3)

    def test_status_icon_colors(self):
        for theme, success, accent in (
            (AvailableTheme.LIGHT, "#107c10", "#0067b8"),
            (AvailableTheme.DARK, "#54b054", "#80c6ff"),
        ):
            icons = FolderTable._build_status_icon(theme)
            for status, color in (
                ("Neste dispositivo", success),
                ("Sincronizando", accent),
                ("Somente na nuvem", accent),
            ):
                with self.subTest(theme=theme, status=status):
                    self.assert_tinted(icons[status].pixmap(20, 20).toImage(), color)

    def test_home_icons_follow_theme(self):
        page = HomePage()
        self.addCleanup(page.deleteLater)
        for theme, accent, secondary in (
            (AvailableTheme.LIGHT, "#0067b8", "#616161"),
            (AvailableTheme.DARK, "#80c6ff", "#b7b7b7"),
            (AvailableTheme.LIGHT, "#0067b8", "#616161"),
        ):
            with self.subTest(theme=theme):
                page.set_theme(theme)
                self.assert_tinted(
                    page.new_folder_button.icon().pixmap(20, 20).toImage(), "#ffffff"
                )
                self.assert_tinted(page.sync_button.icon().pixmap(20, 20).toImage(), accent)
                self.assert_tinted(page.chevron_label.pixmap().toImage(), secondary)

    def test_details_icons_follow_theme(self):
        details = FolderDetails()
        self.addCleanup(details.deleteLater)
        for theme, accent, secondary in (
            (AvailableTheme.LIGHT, "#0067b8", "#616161"),
            (AvailableTheme.DARK, "#80c6ff", "#b7b7b7"),
        ):
            for enabled in (False, True):
                with self.subTest(theme=theme, enabled=enabled):
                    details.free_space_button.setEnabled(enabled)
                    details.set_theme(theme)
                    self.assert_tinted(
                        details.close_button.icon().pixmap(20, 20).toImage(), secondary
                    )
                    self.assert_tinted(
                        details.free_space_button.icon().pixmap(20, 20).toImage(),
                        accent if enabled else secondary,
                    )

    def test_switch_track_and_thumb_colors(self):
        switch = ToggleSwitch()
        self.addCleanup(switch.deleteLater)
        for theme, unchecked in (
            (AvailableTheme.LIGHT, "#8a8a8a"),
            (AvailableTheme.DARK, "#666666"),
        ):
            switch.set_theme(theme)
            for checked in (False, True):
                with self.subTest(theme=theme, checked=checked):
                    switch.setChecked(checked)
                    image = switch.grab().toImage()
                    image.setDevicePixelRatio(1)
                    scale = switch.devicePixelRatioF()
                    track_x, thumb_x = (10, 31) if checked else (32, 13)
                    self.assertEqual(
                        image.pixelColor(int(track_x * scale), int(14 * scale)).name(),
                        "#0067b8" if checked else unchecked,
                    )
                    self.assertEqual(
                        image.pixelColor(int(thumb_x * scale), int(14 * scale)).name(), "#ffffff"
                    )


if __name__ == "__main__":
    unittest.main()
