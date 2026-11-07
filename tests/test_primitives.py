import os
import unittest

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")

from PySide6.QtCore import QSize, Qt
from PySide6.QtGui import QIcon
from PySide6.QtWidgets import QApplication, QButtonGroup

from src.ui.components.primitive.button import ActionButton, IconButton
from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.primitive.label import StyledLabel
from src.ui.components.primitive.navigation_button import NavigationButton
from src.ui.components.primitive.toggle_switch import ToggleSwitch


class PrimitiveTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.app = QApplication.instance() or QApplication([])

    def test_labels_keep_qss_hooks_and_wrapping(self):
        label = StyledLabel("Descrição", object_name="PageDescription", word_wrap=True)
        self.addCleanup(label.deleteLater)
        self.assertEqual(label.text(), "Descrição")
        self.assertEqual(label.objectName(), "PageDescription")
        self.assertTrue(label.wordWrap())
        field = StyledLabel("Local", role="details-field-label")
        self.addCleanup(field.deleteLater)
        self.assertEqual(field.property("role"), "details-field-label")

    def test_icon_label_recolors_without_changing_size(self):
        label = IconLabel("cloud", 20, folder_name="fluent/20/regular")
        self.addCleanup(label.deleteLater)
        for color in ("#ff0000", "#00ff00"):
            label.set_color(color)
            self.assertEqual(label.size(), QSize(20, 20))
            self.assertFalse(label.pixmap().isNull())
        with self.assertRaises(FileNotFoundError):
            IconLabel("missing_icon", 20)

    def test_buttons_preserve_native_click_and_disabled_behavior(self):
        button = ActionButton("Nova Pasta", "add", object_name="PrimaryButton")
        self.addCleanup(button.deleteLater)
        self.assertEqual(button.text(), "\u2003Nova Pasta")
        self.assertEqual(button.height(), 36)
        self.assertEqual(button.objectName(), "PrimaryButton")
        self.assertEqual(button.iconSize(), QSize(20, 20))
        clicks = []
        button.clicked.connect(lambda checked: clicks.append(checked))
        button.click()
        button.setEnabled(False)
        button.click()
        self.assertEqual(clicks, [False])
        icon_button = IconButton("dismiss", description="Fechar", size=28)
        self.addCleanup(icon_button.deleteLater)
        self.assertEqual(icon_button.accessibleName(), "Fechar")
        self.assertEqual(icon_button.toolTip(), "Fechar")
        self.assertEqual(icon_button.size(), QSize(28, 28))

    def test_navigation_exclusivity_indicator_and_icon_states(self):
        group = QButtonGroup()
        first = NavigationButton("Pastas", "folder")
        second = NavigationButton("Recentes", "clock")
        self.addCleanup(first.deleteLater)
        self.addCleanup(second.deleteLater)
        group.addButton(first)
        group.addButton(second)
        first.setChecked(True)
        second.click()
        self.assertFalse(first.isChecked())
        self.assertTrue(first.indicator.isHidden())
        self.assertFalse(second.indicator.isHidden())
        second.set_icon_colors("#ff0000", "#00ff00")
        for state, expected_channel in ((QIcon.State.Off, 0), (QIcon.State.On, 1)):
            image = second.icon().pixmap(20, 20, QIcon.Mode.Normal, state).toImage()
            pixels = [image.pixelColor(x, y) for x in range(20) for y in range(20)]
            pixels = [pixel for pixel in pixels if pixel.alpha() > 200]
            self.assertTrue(pixels)
            for pixel in pixels:
                self.assertGreater((pixel.red(), pixel.green())[expected_channel], 250)
        self.assertEqual(second.property("role"), "navigation")
        self.assertTrue(second.testAttribute(Qt.WidgetAttribute.WA_LayoutUsesWidgetRect))

    def test_toggle_uses_native_checkable_button_signals(self):
        switch = ToggleSwitch()
        self.addCleanup(switch.deleteLater)
        changes = []
        switch.toggled.connect(changes.append)
        switch.click()
        switch.click()
        self.assertEqual(changes, [True, False])


if __name__ == "__main__":
    unittest.main()
