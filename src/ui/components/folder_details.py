from PySide6.QtWidgets import QFrame, QLabel, QVBoxLayout, QWidget


class FolderDetails(QFrame):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("FolderDetails")
        self.setFixedWidth(240)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(20, 20, 20, 20)
        layout.setSpacing(16)

        heading = QLabel("Detalhes")
        heading.setObjectName("DetailsHeading")

        self.name_label = QLabel("Selecione uma pasta")
        self.name_label.setWordWrap(True)

        self.status_label = QLabel()
        self.status_label.setWordWrap(True)

        self.size_label = QLabel()

        layout.addWidget(heading)
        layout.addWidget(self.name_label)
        layout.addWidget(self.status_label)
        layout.addWidget(self.size_label)

        layout.addStretch()
