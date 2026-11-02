import os
import hashlib
import json
import tempfile
import unittest
from pathlib import Path

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtCore import QSize
from PySide6.QtGui import QIcon
from PySide6.QtWidgets import QApplication

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.ui.components.sidebar import Sidebar
from src.ui.themes.theme_manager import AvailableTheme


class IconTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.app = QApplication.instance() or QApplication([])

    def test_brand_keeps_original_colors(self):
        image = IconLoader("onedrive").load_as_pixmap(40).toImage()
        colors = {
            image.pixelColor(x, y).name()
            for x in range(image.width())
            for y in range(image.height())
            if image.pixelColor(x, y).alpha() == 255
        }
        self.assertGreater(len(colors), 1)

    def test_pixmap_uses_requested_resolution_and_preserves_transparency(self):
        with tempfile.TemporaryDirectory() as directory:
            folder = Path(directory) / "fixture"
            folder.mkdir()
            (folder / "shape.svg").write_text(
                '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">'
                '<rect x="8" y="8" width="48" height="48" fill="black"/></svg>'
            )
            options = IconLoaderOptions(
                folder_path=Path(directory), folder_name="fixture", color="#0067b8"
            )
            loader = IconLoader("shape", options=options)
            for arguments in [(64,), (QSize(64, 64),), (64, 64)]:
                pixmap = loader.load_as_pixmap(*arguments)
                self.assertEqual(pixmap.size(), QSize(64, 64))
                image = pixmap.toImage()
                self.assertEqual(image.pixelColor(32, 32).name(), "#0067b8")
                self.assertEqual(image.pixelColor(0, 0).alpha(), 0)

    def test_missing_icon_has_actionable_error(self):
        with self.assertRaisesRegex(FileNotFoundError, "missing_icon"):
            IconLoader("missing_icon").load()

    def test_invalid_svg_has_actionable_error(self):
        with tempfile.TemporaryDirectory() as directory:
            (Path(directory) / "broken.svg").write_text("not an SVG")
            options = IconLoaderOptions(folder_path=Path(directory), folder_name="")
            with self.assertRaisesRegex(ValueError, "broken.svg"):
                IconLoader("broken", options=options).load()

    def test_every_bundled_fluent_icon_loads(self):
        names = ["folder", "clock", "star", "arrow_sync", "delete", "settings", "dark_theme"]
        options = IconLoaderOptions(folder_name="fluent/20/regular")
        for name in names:
            with self.subTest(name=name):
                pixmap = IconLoader(name, options=options).load_as_pixmap(20)
                self.assertFalse(pixmap.isNull())
                self.assertEqual(pixmap.size(), QSize(20, 20))

    def test_fluent_inventory_matches_files_and_checksums(self):
        root = Path(IconLoaderOptions().folder_path) / "fluent"
        manifest = json.loads((root / "manifest.json").read_text())
        files = {
            str(path.relative_to(root))
            for path in root.rglob("*")
            if path.suffix in {".svg", ".png", ".webp"}
        }
        self.assertEqual(files, {entry["path"] for entry in manifest["icons"]})
        for entry in manifest["icons"]:
            self.assertEqual(
                hashlib.sha256((root / entry["path"]).read_bytes()).hexdigest(),
                entry["sha256"],
            )

    def test_complete_system_catalog_is_present(self):
        root = Path(IconLoaderOptions().folder_path) / "fluent"
        expected = json.loads((root / "catalogs/system-svg-paths.json").read_text())
        manifest = json.loads((root / "manifest.json").read_text())
        system_icons = [entry for entry in manifest["icons"] if entry["collection"] == "system"]
        self.assertEqual(len(system_icons), len(expected))
        self.assertEqual({entry["upstream_path"] for entry in system_icons}, set(expected))

    def test_cdn_catalog_is_fully_accounted_for(self):
        root = Path(IconLoaderOptions().folder_path) / "fluent"
        catalog = json.loads((root / "catalogs/cdn-requests.json").read_text())
        unavailable = json.loads((root / "catalogs/cdn-unavailable.json").read_text())
        manifest = json.loads((root / "manifest.json").read_text())
        expected = {entry["source"] for entry in catalog["requests"]}
        downloaded = {
            entry["source"] for entry in manifest["icons"]
            if entry["collection"] in {"files", "launch"}
        }
        absent = {entry["source"] for entry in unavailable}
        self.assertEqual(downloaded | absent, expected)
        self.assertFalse(downloaded & absent)
        self.assertTrue(all(entry["status"] == "404" for entry in unavailable))
        for collection in ("files", "launch"):
            names = {
                entry["name"] for entry in manifest["icons"]
                if entry["collection"] == collection
            }
            self.assertEqual(names, set(manifest["collections"][collection]["catalog_names"]))

    def test_sidebar_states_and_theme_switching(self):
        sidebar = Sidebar()
        self.addCleanup(sidebar.deleteLater)
        for theme, normal, selected in [
            (AvailableTheme.LIGHT, "#616161", "#0067b8"),
            (AvailableTheme.DARK, "#b7b7b7", "#80c6ff"),
            (AvailableTheme.LIGHT, "#616161", "#0067b8"),
        ]:
            sidebar.set_theme(theme)
            for button in sidebar._navigation_group.buttons():
                self.assertEqual(button.iconSize(), QSize(20, 20))
                for state, color in [(QIcon.State.Off, normal), (QIcon.State.On, selected)]:
                    image = button.icon().pixmap(20, 20, QIcon.Mode.Normal, state).toImage()
                    self._assert_tinted(image, color)
            for button in [sidebar.settings_button, sidebar.theme_button]:
                self.assertEqual(button.iconSize(), QSize(20, 20))
                image = button.icon().pixmap(20, 20).toImage()
                self._assert_tinted(image, normal)
        buttons = sidebar._navigation_group.buttons()
        buttons[1].click()
        self.assertTrue(buttons[1].isChecked())
        self.assertFalse(buttons[0].isChecked())
        toggles = []
        sidebar.theme_toggle_requested.connect(lambda: toggles.append(True))
        sidebar.theme_button.click()
        self.assertEqual(toggles, [True])

    def _assert_tinted(self, image, expected):
        channels = [int(expected[index:index + 2], 16) for index in (1, 3, 5)]
        pixels = [
            image.pixelColor(x, y)
            for x in range(image.width())
            for y in range(image.height())
            if image.pixelColor(x, y).alpha() > 200
        ]
        self.assertTrue(pixels, "O ícone deve conter traços visíveis")
        # Traços finos podem ser inteiramente suavizados; a conversão de alpha
        # pré-multiplicado pode arredondar os canais RGB em até dois níveis.
        for pixel in pixels:
            for actual, target in zip(pixel.getRgb()[:3], channels):
                self.assertLessEqual(abs(actual - target), 2)


if __name__ == "__main__":
    unittest.main()
