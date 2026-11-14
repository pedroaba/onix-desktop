from PySide6.QtGui import QColor


class Color:
    def __init__(self, color: str | QColor) -> None:
        self._value = QColor(color)

    @property
    def raw(self) -> QColor:
        return self._value

    def to_hex(self, name_format: QColor.NameFormat = QColor.NameFormat.HexRgb) -> str:
        return self._value.name(name_format)

    def to_rgb(self):
        return self._value.toRgb()

    def to_hsl(self):
        return self._value.toHsl()

    def to_hsv(self):
        return self._value.toHsv()

    def to_cmyk(self):
        return self._value.toCmyk()

    def to_extended_rgb(self):
        return self._value.toExtendedRgb()

    def to_tuple(self):
        return self._value.toTuple()
