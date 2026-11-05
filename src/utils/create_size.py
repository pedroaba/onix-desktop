from typing import overload

from PySide6.QtCore import QSize


@overload
def create_qsize(size: QSize | int) -> QSize: ...


@overload
def create_qsize(size: int, height: int) -> QSize: ...


def create_qsize(size: int | QSize | None = None, height: int | None = None) -> QSize:
    if size is None and height is None:
        return QSize(0, 0)

    if isinstance(size, QSize):
        return size

    if isinstance(size, int) and height is None:
        return QSize(size, size)

    return QSize(size or 0, height or 0)
