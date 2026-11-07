from PySide6.QtWidgets import QHBoxLayout, QWidget

from src.ui.components.primitive.divider import Divider
from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.primitive.label import StyledLabel
from src.utils.get_default_layout import get_default_layout


class SyncStatus(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("SyncStatus")

        icon_label = IconLabel("checkmark_circle", 20, folder_name="fluent/20/color")

        # dados demostrativos para a composição da interface
        self.status_label = StyledLabel("Tudo atualizado", object_name="SyncStatusText")

        self.last_sync_label = StyledLabel(
            "Última sincronização há 2min", object_name="SyncStatusTime"
        )

        divider = Divider("SyncStatusDivider", vertical_height=18)

        layout = get_default_layout(QHBoxLayout, parent=self)

        layout.addWidget(icon_label)
        layout.addSpacing(8)
        layout.addWidget(self.status_label)
        layout.addSpacing(16)
        layout.addWidget(divider)
        layout.addSpacing(16)
        layout.addWidget(self.last_sync_label)
        layout.addStretch()
