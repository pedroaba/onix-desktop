from dataclasses import dataclass, field

from PySide6.QtCore import QMargins
from PySide6.QtWidgets import QLayout, QWidget

from src.utils.create_margins import create_qmargins


@dataclass
class GetDefaultLayoutOptions:
    margins: QMargins = field(default_factory=create_qmargins)
    spacing: int = 0


def get_default_layout[TLayout: QLayout](
    layout: type[TLayout],
    options: GetDefaultLayoutOptions | None = None,
    *,
    parent: QWidget | None = None,
) -> TLayout:
    if options is None:
        options = GetDefaultLayoutOptions()

    _layout = layout()
    _layout.setContentsMargins(options.margins)
    _layout.setSpacing(options.spacing)

    if parent is not None:
        parent.setLayout(_layout)

    return _layout
