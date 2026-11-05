from PySide6.QtCore import Qt
from PySide6.QtWidgets import QLabel, QVBoxLayout, QWidget

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

        title = QLabel("Nenhuma pasta encontrada")
        title.setObjectName("EmptyStateTitle")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        title.setWordWrap(True)

        description = QLabel("Tente outro nome ou limpe o campo de pesquisa.")
        description.setObjectName("EmptyStateDescription")
        description.setAlignment(Qt.AlignmentFlag.AlignCenter)
        description.setWordWrap(True)

        layout.addStretch()
        layout.addWidget(title)
        layout.addWidget(description)
        layout.addStretch()
