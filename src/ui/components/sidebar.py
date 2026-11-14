import sys

from PySide6.QtCore import Qt, QTimer, Signal
from PySide6.QtWidgets import QButtonGroup, QFrame, QHBoxLayout, QSizePolicy, QVBoxLayout

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.ui.components.workspace_controls import WorkspaceButton, label
from src.ui.styles import ComponentSize
from src.ui.themes.theme_manager import AvailableTheme, theme_colors
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class Sidebar(QFrame):
    page_requested = Signal(str)
    search_requested = Signal()

    def __init__(self) -> None:
        super().__init__()
        self.setObjectName("OnixSidebar")

        self.buttons: list[WorkspaceButton] = []
        self.setFixedWidth(int(ComponentSize.SidebarWidth))

        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 44 if sys.platform == "darwin" else 16, 12, 14)
        layout.setSpacing(2)

        brand = QHBoxLayout()
        brand.setContentsMargins(4, 0, 0, 0)
        brand.setSpacing(8)

        self.mark = label()
        self.mark.setObjectName("OnixMark")
        self.mark.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.mark.setFixedSize(26, 26)
        brand.addWidget(self.mark)

        identity = QVBoxLayout()
        identity.setSpacing(0)
        identity.addWidget(label("Onix", "brand"))
        identity.addWidget(label("Espaço pessoal", "caption"))
        brand.addLayout(identity, 1)

        self.search_button = WorkspaceButton(icon="search", quiet=True)
        self.search_button.setToolTip("Busca rápida")
        self.search_button.setAccessibleName("Busca rápida")
        self.search_button.clicked.connect(self.search_requested.emit)
        brand.addWidget(self.search_button)

        layout.addLayout(brand)
        layout.addSpacing(16)

        self._navigation = QButtonGroup(self)

        navigation_layout = get_default_layout(QVBoxLayout, GetDefaultLayoutOptions(spacing=8))

        for name, icon in (
            ("Todos os arquivos", "grid"),
            ("Recentes", "clock"),
            ("Favoritos", "star"),
        ):
            navigation_layout.addWidget(self._nav_button(name, icon))

        layout.addLayout(navigation_layout)
        layout.addSpacing(16)

        providers = QHBoxLayout()
        providers.setContentsMargins(8, 0, 0, 0)
        providers.addWidget(label("Provedores", "caption"), 1)

        self.providers_button = WorkspaceButton(icon="add", quiet=True)
        self.providers_button.setToolTip("Gerenciar provedores")
        self.providers_button.clicked.connect(lambda: self.page_requested.emit("Configurações"))

        providers.addWidget(self.providers_button)

        layout.addLayout(providers)
        layout.addWidget(self._nav_button("OneDrive", "cloud"))
        layout.addStretch()
        layout.addWidget(self._nav_button("Lixeira", "delete"))
        layout.addWidget(self._nav_button("Configurações", "settings"))

    def _nav_button(self, name: str, icon: str) -> WorkspaceButton:
        button = WorkspaceButton(name, icon, quiet=True)
        button.setProperty("navigation", True)
        button.setCheckable(True)
        button.setFixedHeight(int(ComponentSize.ControlHeight))
        button.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Fixed)
        button.setAttribute(Qt.WidgetAttribute.WA_LayoutUsesWidgetRect)

        self._navigation.addButton(button)
        self.buttons.append(button)

        button.clicked.connect(lambda: self.page_requested.emit(name))
        return button

    def set_current_page(self, section: str) -> None:
        for button in self.buttons:
            button.setChecked(button.text() == section)

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = theme_colors(theme)
        for button in self.findChildren(WorkspaceButton):
            button.set_colors(colors)

        self.mark.setPixmap(
            IconLoader(
                "stack",
                IconLoaderOptions(
                    folder_name="fluent/16/regular", color=colors.BrandForeground.to_hex()
                ),
            ).load_as_pixmap(16)
        )

        def show_navigation_geometry() -> None:
            buttons = self.buttons[:3]
            print(
                theme.value,
                [(button.text(), button.y(), button.height()) for button in buttons],
                "intervalos:",
                [
                    second.y() - first.y() - first.height()
                    for first, second in zip(buttons, buttons[1:])
                ],
            )

        QTimer.singleShot(0, show_navigation_geometry)
