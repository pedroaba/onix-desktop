from PySide6.QtCore import Qt
from PySide6.QtWidgets import QVBoxLayout, QWidget

from src.ui.components.primitive.label import StyledLabel
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class EmptyState(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        layout = get_default_layout(
            QVBoxLayout,
            GetDefaultLayoutOptions(margins=create_qmargins(24), spacing=8),
            parent=self,
        )

        title = StyledLabel(
            "Nenhuma pasta encontrada",
            object_name="EmptyStateTitle",
            alignment=Qt.AlignmentFlag.AlignCenter,
            word_wrap=True,
        )

        description = StyledLabel(
            "Tente outro nome ou limpe o campo de pesquisa.",
            object_name="EmptyStateDescription",
            alignment=Qt.AlignmentFlag.AlignCenter,
            word_wrap=True,
        )

        layout.addStretch()
        layout.addWidget(title)
        layout.addWidget(description)
        layout.addStretch()
