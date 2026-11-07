"""Labels com os mesmos seletores QSS usados pelos temas compartilhados."""

from PySide6.QtCore import Qt
from PySide6.QtWidgets import QLabel, QWidget


class StyledLabel(QLabel):
    def __init__(
        self,
        text: str = "",
        parent: QWidget | None = None,
        *,
        object_name: str = "",
        role: str | None = None,
        word_wrap: bool = False,
        alignment: Qt.AlignmentFlag | None = None,
    ) -> None:
        super().__init__(text, parent)
        self.setObjectName(object_name)
        self.setWordWrap(word_wrap)
        if role is not None:
            self.setProperty("role", role)
        if alignment is not None:
            self.setAlignment(alignment)
