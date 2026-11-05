from PySide6.QtCore import QRectF, Qt
from PySide6.QtGui import QColor, QPainter, QPaintEvent, QPen
from PySide6.QtWidgets import QAbstractButton, QWidget

from src.ui.themes.constants import DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme


class ToggleSwitch(QAbstractButton):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setCheckable(True)
        self.setFixedSize(44, 28)
        self.setFocusPolicy(Qt.FocusPolicy.StrongFocus)
        # self.setCursor(Qt.CursorShape.PointingHandCursor)

        self._theme = AvailableTheme.LIGHT

    def set_theme(self, theme: AvailableTheme) -> None:
        self._theme = theme
        self.update()

    def paintEvent(self, _e: QPaintEvent, /) -> None:
        painter = QPainter(self)
        painter.setRenderHint(QPainter.RenderHint.Antialiasing)

        match self._theme:
            case AvailableTheme.DARK:
                colors = DarkColors
            case _:
                colors = LightColors
        if self.isChecked():
            track_color = QColor(colors.Primary)
        else:
            track_color = QColor(colors.SwitchTrack)

        painter.setPen(Qt.PenStyle.NoPen)
        painter.setBrush(track_color)
        painter.drawRoundedRect(QRectF(2, 3, 40, 22), 11, 11)

        thumb_x = 22 if self.isChecked() else 4

        painter.setBrush(QColor(colors.SwitchThumb))
        painter.drawEllipse(QRectF(thumb_x, 5, 18, 18))

        if self.hasFocus():
            focus_color = QColor(colors.Accent)

            painter.setPen(QPen(focus_color, 1, Qt.PenStyle.DashLine))
            painter.setBrush(Qt.BrushStyle.NoBrush)
            painter.drawRoundedRect(QRectF(0.5, 0.5, 43, 27), 13, 13)
