from PySide6.QtGui import QIcon
from PySide6.QtCore import Signal, Slot, Qt, QSize
from PySide6.QtWidgets import (
    QButtonGroup,
    QFrame,
    QLabel,
    QPushButton,
    QVBoxLayout,
    QWidget,
    QHBoxLayout,
)

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.ui.themes.theme_manager import AvailableTheme


class Sidebar(QFrame):
    theme_toggle_requested = Signal()

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("Sidebar")
        self.setFixedWidth(256)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(16, 24, 16, 24)
        layout.setSpacing(8)

        icon_loader = IconLoader("onedrive")
        cloud_icon_pixmap = icon_loader.load_as_pixmap(40)

        cloud_label = QLabel()
        cloud_label.setFixedSize(40, 40)
        cloud_label.setPixmap(cloud_icon_pixmap)

        account_title = QLabel("Pedro")
        account_title.setObjectName("AccountTitle")

        account_subtitle = QLabel("OneDrive pessoal")
        account_subtitle.setObjectName("AccountSubtitle")

        account_text_layout = QVBoxLayout()
        account_text_layout.setContentsMargins(0, 0, 0, 0)
        account_text_layout.setSpacing(0)
        account_text_layout.addWidget(account_title)
        account_text_layout.addWidget(account_subtitle)

        account_layout = QHBoxLayout()
        account_layout.setSpacing(12)
        account_layout.addWidget(cloud_label)
        account_layout.addLayout(account_text_layout)

        layout.addLayout(account_layout)
        layout.addSpacing(24)

        self._navigation_group = QButtonGroup(self)
        self._navigation_group.setExclusive(True)

        navigation_items = [
            ("Minhas pastas", "folder"),
            ("Recentes", "clock"),
            ("Favoritos", "star"),
            ("Sincronização", "arrow_sync"),
            ("Lixeira", "delete"),
        ]

        for index, (text, icon_name) in enumerate(navigation_items):
            button = QPushButton(text)
            button.setProperty("icon_name", icon_name)

            button.setAttribute(Qt.WidgetAttribute.WA_LayoutUsesWidgetRect, True)

            button.setCheckable(True)
            button.setFixedHeight(44)
            button.setProperty("role", "navigation")

            indicator = QFrame(button)
            indicator.setObjectName("NavigationIndicator")

            indicator.setAttribute(
                Qt.WidgetAttribute.WA_TransparentForMouseEvents, True
            )
            indicator.setGeometry(0, 0, 4, button.height())

            indicator.hide()
            button.toggled.connect(indicator.setVisible)

            self._navigation_group.addButton(button)
            layout.addWidget(button)

            if index == 0:
                button.setChecked(True)

        layout.addStretch()

        self.theme_button = QPushButton("Alternar tema")
        self.theme_button.clicked.connect(self._request_theme_toggle)

        layout.addWidget(self.theme_button)

        self.settings_button = QPushButton("Configurações")
        layout.addWidget(self.settings_button)

    def set_theme(self, theme: AvailableTheme) -> None:
        match theme:
            case AvailableTheme.DARK:
                normal_color = "#b7b7b7"
                selected_color = "#80c6ff"
            case _:
                normal_color = "#616161"
                selected_color = "#0067b8"

        for button in self._navigation_group.buttons():
            icon_name = button.property("icon_name")
            icon = QIcon()

            states = [(QIcon.State.Off, normal_color), (QIcon.State.On, selected_color)]

            for state, color in states:
                options = IconLoaderOptions(folder_name="fluent", color=color)

                pixmap = IconLoader(icon_name, options=options).load_as_pixmap(
                    QSize(20, 20)
                )

                for mode in (QIcon.Mode.Normal, QIcon.Mode.Active, QIcon.Mode.Selected):
                    icon.addPixmap(pixmap, mode, state)
            button.setIcon(icon)

    @Slot()
    def _request_theme_toggle(self) -> None:
        self.theme_toggle_requested.emit()
