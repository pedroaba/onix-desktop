from dataclasses import dataclass
from pathlib import Path
from typing import overload

from PySide6.QtCore import QSize
from PySide6.QtGui import QIcon, QPixmap, QPainter, QColor


@dataclass(frozen=True)
class IconLoaderOptions:
    icon_ext: str = "svg"

    folder_path: Path = Path(__file__).resolve().parents[2] / "assets" / "icons"
    folder_name: str = "brands"
    color: str | None = None


class IconLoader:
    __DEFAULT_SIZE = QSize(40, 40)

    def __init__(
        self,
        icon_name: str,
        /,
        options: IconLoaderOptions = IconLoaderOptions(),
    ) -> None:
        self._icon_name = icon_name
        self._options = options

    @overload
    def load(self) -> QIcon: ...

    @overload
    def load(self, size: int | QSize) -> QIcon: ...

    @overload
    def load(self, size: int, height: int) -> QIcon: ...

    def load(
        self,
        size: int | QSize | None = None,
        height: int | None = None,
    ) -> QIcon:
        return QIcon(self._render_pixmap(self._resolve_dimensions(size, height)))

    @overload
    def load_as_pixmap(self) -> QPixmap: ...

    @overload
    def load_as_pixmap(self, size: int | QSize) -> QPixmap: ...

    @overload
    def load_as_pixmap(self, size: int, height: int) -> QPixmap: ...

    def load_as_pixmap(
        self,
        size: int | QSize | None = None,
        height: int | None = None,
    ) -> QPixmap:
        return self._render_pixmap(self._resolve_dimensions(size, height))

    def _render_pixmap(self, dimensions: QSize) -> QPixmap:
        path = self._resolve_icon_path()
        if not Path(path).is_file():
            raise FileNotFoundError(f"Ícone não encontrado: {path}")

        icon = QIcon(path)
        pixmap = icon.pixmap(dimensions)
        if pixmap.isNull():
            raise ValueError(f"Não foi possível renderizar o ícone: {path}")

        color = self._options.color
        if color is not None:
            painter = QPainter(pixmap)
            painter.setCompositionMode(
                QPainter.CompositionMode.CompositionMode_SourceIn
            )
            painter.fillRect(pixmap.rect(), QColor(color))
            painter.end()

        return pixmap

    def _resolve_dimensions(
        self, size: int | QSize | None = None, height: int | None = None
    ) -> QSize:
        dimensions = IconLoader.__DEFAULT_SIZE
        if isinstance(size, int) and height is not None:
            dimensions = QSize(size, height)
        elif isinstance(size, int):
            dimensions = QSize(size, size)
        elif isinstance(size, QSize):
            dimensions = QSize(size)

        return dimensions

    def _resolve_icon_path(self) -> str:
        return str(
            (
                self._options.folder_path
                / self._options.folder_name
                / f"{self._icon_name}.{self._options.icon_ext}"
            )
            .resolve()
            .absolute()
        )
