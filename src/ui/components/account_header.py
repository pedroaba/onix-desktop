from PySide6.QtWidgets import QHBoxLayout, QVBoxLayout, QWidget

from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.primitive.label import StyledLabel
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class AccountHeader(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        layout = get_default_layout(QHBoxLayout, GetDefaultLayoutOptions(spacing=12), parent=self)

        cloud_label = IconLabel("onedrive", 40)

        title_label = StyledLabel("Pedro", object_name="AccountTitle")

        subtitle_label = StyledLabel("OneDrive pessoal", object_name="AccountSubtitle")

        text_layout = get_default_layout(QVBoxLayout)
        text_layout.addWidget(title_label)
        text_layout.addWidget(subtitle_label)

        layout.addWidget(cloud_label)
        layout.addLayout(text_layout)
