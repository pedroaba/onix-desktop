from PySide6.QtCore import Qt
from PySide6.QtWidgets import QFrame, QWidget

from src.ui.components.primitive.button import IconButton


class NavigationButton(IconButton):
    def __init__(self, text: str, icon_name: str, parent: QWidget | None = None) -> None:
        super().__init__(icon_name, text, parent)
        self.setAttribute(Qt.WidgetAttribute.WA_LayoutUsesWidgetRect, True)
        self.setCheckable(True)
        self.setFixedHeight(44)
        self.setProperty("role", "navigation")

        self.indicator = QFrame(self)
        self.indicator.setObjectName("NavigationIndicator")
        self.indicator.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents, True)
        self.indicator.setGeometry(0, 0, 4, self.height())
        self.indicator.hide()
        self.toggled.connect(self.indicator.setVisible)
