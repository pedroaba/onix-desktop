from PySide6.QtCore import Qt
from PySide6.QtWidgets import QLabel, QVBoxLayout, QWidget


class EmptyState(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(24, 24, 24, 24)
        layout.setSpacing(8)

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
