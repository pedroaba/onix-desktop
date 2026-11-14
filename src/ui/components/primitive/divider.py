from PySide6.QtWidgets import QFrame, QWidget

from src.utils.create_size import create_qsize


class Divider(QFrame):
    def __init__(
        self,
        object_name: str,
        parent: QWidget | None = None,
        *,
        vertical_height: int | None = None,
    ) -> None:
        super().__init__(parent)
        self.setObjectName(object_name)

        if vertical_height is None:
            self.setFixedHeight(1)
        else:
            self.setFixedSize(create_qsize(1, vertical_height))
