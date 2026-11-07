from PySide6.QtWidgets import QProgressBar, QVBoxLayout, QWidget

from src.ui.components.primitive.divider import Divider
from src.ui.components.primitive.label import StyledLabel
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class StorageUsage(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)
        storage_layout = get_default_layout(
            QVBoxLayout, GetDefaultLayoutOptions(spacing=8), parent=self
        )

        storage_divider = Divider("StorageDivider")

        storage_heading = StyledLabel("Armazenamento", object_name="StorageHeading")

        self.storage_usage_label = StyledLabel("128 GB de 1TB", object_name="StorageUsage")

        self.storage_bar = QProgressBar()
        self.storage_bar.setObjectName("StorageProgress")
        self.storage_bar.setRange(0, 1000)
        self.storage_bar.setValue(128)
        self.storage_bar.setTextVisible(False)
        self.storage_bar.setFixedHeight(8)
        self.storage_bar.setAccessibleName("Armazenamento utilizado")
        self.storage_bar.setAccessibleDescription("128 GB utilizados de 1 TB")

        storage_layout.addWidget(storage_divider)
        storage_layout.addSpacing(8)
        storage_layout.addWidget(storage_heading)
        storage_layout.addWidget(self.storage_usage_label)
        storage_layout.addWidget(self.storage_bar)
