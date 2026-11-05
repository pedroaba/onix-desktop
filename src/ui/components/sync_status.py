from PySide6.QtWidgets import QFrame, QHBoxLayout, QLabel, QWidget

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.utils.create_size import create_qsize


class SyncStatus(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("SyncStatus")

        icon_label = QLabel()
        icon_label.setFixedSize(create_qsize(20))
        icon_label.setPixmap(
            IconLoader(
                "checkmark_circle",
                options=IconLoaderOptions(folder_name="fluent/20/color"),
            ).load_as_pixmap(20)
        )

        # dados demostrativos para a composição da interface
        self.status_label = QLabel("Tudo atualizado")
        self.status_label.setObjectName("SyncStatusText")

        self.last_sync_label = QLabel("Última sincronização há 2min")
        self.last_sync_label.setObjectName("SyncStatusTime")

        divider = QFrame()
        divider.setObjectName("SyncStatusDivider")
        divider.setFixedSize(create_qsize(1, 18))

        layout = QHBoxLayout(self)
        layout.setContentsMargins(0, 0, 0, 0)
        layout.setSpacing(0)

        layout.addWidget(icon_label)
        layout.addSpacing(8)
        layout.addWidget(self.status_label)
        layout.addSpacing(16)
        layout.addWidget(divider)
        layout.addSpacing(16)
        layout.addWidget(self.last_sync_label)
        layout.addStretch()
