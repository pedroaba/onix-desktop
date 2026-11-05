from typing import overload

from PySide6.QtCore import QMargins


@overload
def create_qmargins() -> QMargins: ...


@overload
def create_qmargins(horizontal: QMargins | int) -> QMargins: ...


@overload
def create_qmargins(horizontal: int, vertical: int) -> QMargins: ...


def create_qmargins(horizontal: int | QMargins = 0, vertical: int | None = None) -> QMargins:
    if isinstance(horizontal, QMargins):
        return horizontal

    if vertical is None:
        vertical = horizontal

    return QMargins(horizontal, vertical, horizontal, vertical)
