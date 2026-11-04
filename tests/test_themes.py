import os
import re
import unittest
from pathlib import Path

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtWidgets import QApplication

from src.ui.themes import base, dark, light
from src.ui.themes.theme_manager import AvailableTheme, apply_theme


def declarations(stylesheet: str) -> list[tuple[tuple[str, ...], tuple[str, ...]]]:
    """Compare rules by selector, preserving the order of repeated selectors."""
    stylesheet = re.sub(r"/\*.*?\*/", "", stylesheet, flags=re.DOTALL)
    rules = [
        (
            tuple(selector.strip() for selector in selectors.split(",")),
            tuple(item.strip() for item in properties.split(";") if item.strip()),
        )
        for selectors, properties in re.findall(r"([^{}]+)\{([^{}]*)\}", stylesheet)
    ]
    return sorted(rules, key=lambda rule: rule[0])


class ThemeTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        app = QApplication.instance() or QApplication([])
        assert isinstance(app, QApplication)
        cls.app = app

    def original(self, name: str) -> str:
        return (Path(__file__).parent / "fixtures" / "themes" / f"{name}.qss").read_text()

    def test_generated_themes_preserve_original_rules(self):
        for name, module in (("base", base), ("dark", dark), ("light", light)):
            with self.subTest(theme=name):
                self.assertEqual(
                    declarations(module.build_stylesheet().value),
                    declarations(self.original(name)),
                )

    def test_apply_theme_and_switch_back(self):
        for theme in (AvailableTheme.LIGHT, AvailableTheme.DARK, AvailableTheme.LIGHT):
            with self.subTest(theme=theme):
                apply_theme(self.app, theme)
                self.assertEqual(
                    declarations(self.app.styleSheet()),
                    declarations(self.original("base") + "\n" + self.original(theme.value)),
                )

    def test_default_theme_is_light(self):
        apply_theme(self.app)
        self.assertEqual(
            declarations(self.app.styleSheet()),
            declarations(self.original("base") + "\n" + self.original("light")),
        )

    def test_unknown_theme_does_not_change_stylesheet(self):
        apply_theme(self.app)
        previous = self.app.styleSheet()
        with self.assertRaisesRegex(ValueError, "Tema desconhecido"):
            apply_theme(self.app, "invalid")  # type: ignore[arg-type]
        self.assertEqual(self.app.styleSheet(), previous)

    def test_builds_do_not_accumulate_rules(self):
        for module in (base, dark, light):
            self.assertEqual(module.build_stylesheet(), module.build_stylesheet())


if __name__ == "__main__":
    unittest.main()
