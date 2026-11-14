from PySide6.QtWidgets import QHBoxLayout, QVBoxLayout, QWidget

from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.primitive.label import StyledLabel
from src.ui.styles import DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.get_default_layout import get_default_layout


class PageHeader(QWidget):
    def __init__(
        self,
        title: str,
        breadcrumb: str,
        description: str,
        parent: QWidget | None = None,
    ) -> None:
        super().__init__(parent)

        self.title_label = StyledLabel(title, object_name="PageTitle")

        self.breadcrumb_label = StyledLabel(breadcrumb, object_name="PageBreadcrumb")

        self.description_label = StyledLabel(
            description,
            object_name="PageDescription",
            word_wrap=True,
        )

        self.chevron_label = IconLabel(
            "chevron-right", 20, folder_name="fluent/20/regular", fixed_size=False
        )

        header_layout = get_default_layout(QVBoxLayout, parent=self)

        breadcrumb_layout = get_default_layout(QHBoxLayout)

        breadcrumb_layout.addWidget(self.breadcrumb_label)
        breadcrumb_layout.addSpacing(4)
        breadcrumb_layout.addWidget(self.chevron_label)
        breadcrumb_layout.addStretch()

        header_layout.addLayout(breadcrumb_layout)
        header_layout.addSpacing(12)

        header_layout.addWidget(self.title_label)
        header_layout.addSpacing(4)

        header_layout.addWidget(self.description_label)

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = DarkColors if theme == AvailableTheme.DARK else LightColors
        self.chevron_label.set_color(colors.TextSecondary.to_hex())
