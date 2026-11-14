from PySide6.QtCore import QMargins, QPoint, Qt
from PySide6.QtWidgets import QFrame, QHBoxLayout, QVBoxLayout, QWidget

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.ui.components.primitive.divider import Divider
from src.ui.components.workspace_controls import WorkspaceButton, label
from src.ui.themes.theme_manager import AvailableTheme, theme_colors
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class FileFilterPopup(QFrame):
    def __init__(self, parent: QWidget, theme: AvailableTheme) -> None:
        super().__init__(
            parent,
            Qt.WindowType.Popup
            | Qt.WindowType.FramelessWindowHint
            | Qt.WindowType.NoDropShadowWindowHint,
        )

        self.setObjectName("FileFilterPopup")

        self.setAttribute(Qt.WidgetAttribute.WA_TranslucentBackground)
        self.setFixedWidth(250)

        outer_layout = get_default_layout(QVBoxLayout, parent=self)

        panel = QFrame(self)
        panel.setObjectName("FileFilterPopup")
        outer_layout.addWidget(panel)

        layout = get_default_layout(
            QVBoxLayout,
            parent=panel,
            options=GetDefaultLayoutOptions(margins=create_qmargins(8), spacing=4),
        )
        heading = label("Filtrar por", "section")
        heading.setContentsMargins(8, 4, 8, 6)
        layout.addWidget(heading)

        divider = Divider("FileFilterDivider")
        layout.addWidget(divider)

        colors = theme_colors(theme)

        chevron_pixmap = IconLoader(
            "chevron_right",
            IconLoaderOptions(
                folder_name="fluent/16/regular",
                color=colors.TextSecondary.to_hex(),
            ),
        ).load_as_pixmap(16)

        for text, icon in (
            ("Tipo de item", "document"),
            ("Provedor", "cloud"),
            ("Modificado em", "clock"),
        ):
            button = WorkspaceButton(text, icon, quiet=True)
            button.setProperty("navigation", True)
            button.setFixedHeight(36)
            button.set_colors(colors)

            chevron = label()
            chevron.setPixmap(chevron_pixmap)
            chevron.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents)

            button_layout = get_default_layout(
                QHBoxLayout,
                GetDefaultLayoutOptions(margins=create_qmargins(QMargins(0, 0, 8, 0))),
                parent=button,
            )
            button_layout.addStretch()
            button_layout.addWidget(chevron)
            button.setFixedHeight(36)
            button.setAttribute(Qt.WidgetAttribute.WA_LayoutUsesWidgetRect)

            layout.addWidget(button)

    def show_below(self, anchor: QWidget) -> None:
        self.adjustSize()

        position = anchor.mapToGlobal(QPoint(anchor.width() - self.width(), anchor.height() + 4))

        self.move(position)
        self.show()
