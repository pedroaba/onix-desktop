from PySide6.QtWidgets import QVBoxLayout, QWidget

from src.ui.components.page_header import PageHeader
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class SectionPage(QWidget):
    def __init__(self, title: str, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        layout = get_default_layout(
            QVBoxLayout,
            GetDefaultLayoutOptions(margins=create_qmargins(24), spacing=16),
            parent=self,
        )

        self.header = PageHeader(
            title=title,
            breadcrumb="OneDrive pessoal",
            description="Esta seção será implementada nas próximas aulas.",
        )

        layout.addWidget(self.header)
        layout.addStretch()

    def set_theme(self, theme: AvailableTheme) -> None:
        self.header.set_theme(theme)
