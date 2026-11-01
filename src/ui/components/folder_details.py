from PySide6.QtWidgets import QFrame, QLabel, QVBoxLayout, QWidget
from PySide6.QtCore import Slot

from src.models.folder import Folder


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

    @Slot(object)
    def show_folder(self, folder: Folder | None) -> None:
        if folder is None:
            self.name_label.setText("Selecione uma pasta")
            self.status_label.clear()
            self.size_label.clear()
            return

        size_gb = folder.size_bytes / 1_000_000_000
        size_text = f"{size_gb:.1f} GB".replace(".", ",")

        self.name_label.setText(folder.name)
        self.status_label.setText(f"Status: {folder.status}")
        self.size_label.setText(f"Tamanho: {size_text}")
