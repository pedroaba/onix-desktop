from pathlib import Path

from PySide6.QtCore import QRectF, QSize, Qt
from PySide6.QtGui import QImageReader, QPainter, QPixmap
from PySide6.QtWidgets import (
    QFrame,
    QGridLayout,
    QVBoxLayout,
    QWidget,
)

from src.models.folder import Folder
from src.ui.components.workspace_controls import WorkspaceButton, label
from src.ui.styles import ComponentSize, ThemeColors
from src.utils.file_metadata import size_text


class FileCard(QFrame):
    def __init__(self, item: Folder, colors: ThemeColors, *, selected: bool) -> None:
        super().__init__()

        self.setProperty("onixCard", True)
        self.setProperty("selected", selected)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(9, 9, 9, 9)
        layout.setSpacing(6)

        if not item.is_directory:
            layout.addWidget(_preview(item, colors))

        title = WorkspaceButton(
            item.name, "folder" if item.is_directory else "document", quiet=True
        )
        title.set_colors(colors)
        title.setProperty("fileTitle", True)
        title.setToolTip(item.name)

        self.clicked = title.clicked
        layout.addWidget(title)

        extension = Path(item.name).suffix.lstrip(".").upper()
        metadata = label(item.provider, "caption")
        provider_color = {
            "OneDrive": colors.OneDrive,
            "Google Drive": colors.GoogleDrive,
            "Dropbox": colors.Dropbox,
        }.get(item.provider, colors.TextSecondary)
        metadata.setStyleSheet(f"color: {provider_color.to_hex()}")

        row = QGridLayout()
        row.addWidget(metadata, 0, 0)
        row.setColumnStretch(0, 1)

        if not item.is_directory:
            row.addWidget(
                label(f"{extension or 'Arquivo'} · {size_text(item.size_bytes)}", "caption"), 0, 1
            )

        layout.addLayout(row)


def _preview(item: Folder, colors: ThemeColors) -> QWidget:
    preview = label("Prévia indisponível", "secondary")
    preview.setObjectName("OnixPreview")
    preview.setAlignment(Qt.AlignmentFlag.AlignCenter)
    preview.setFixedHeight(int(ComponentSize.PreviewHeight))

    if item.local_path:
        reader = QImageReader(str(item.local_path))
        reader.setAutoTransform(True)

        if reader.canRead():
            reader.setScaledSize(
                reader.size().scaled(QSize(202, 127), Qt.AspectRatioMode.KeepAspectRatio)
            )
            image = reader.read()
            if not image.isNull():
                preview.setPixmap(QPixmap.fromImage(image))
    elif item.id in {"sample-briefing", "sample-planilha"}:
        preview.setPixmap(_sample_preview(item, colors))
        preview.setToolTip("Prévia ilustrativa")

    return preview


def _sample_preview(item: Folder, colors: ThemeColors) -> QPixmap:
    pixmap = QPixmap(184, 120)
    pixmap.fill(Qt.GlobalColor.transparent)

    painter = QPainter(pixmap)
    painter.setRenderHint(QPainter.RenderHint.Antialiasing)

    paper = colors.Surface.to_rgb()
    line = colors.BorderInput.to_rgb()
    accent = colors.Primary.to_rgb()

    painter.setPen(Qt.PenStyle.NoPen)
    painter.setBrush(paper)

    if item.id == "sample-briefing":
        painter.drawRoundedRect(QRectF(46, 0, 92, 120), 4, 4)
        painter.setPen(colors.Text.to_rgb())
        painter.drawText(56, 23, "Onix")
        painter.drawText(56, 40, "Briefing")
        painter.fillRect(56, 48, 72, 29, accent)

        for index, width in enumerate((58, 44, 63, 50, 65)):
            painter.fillRect(56, 84 + index * 5, width, 2, line)
    else:
        painter.drawRoundedRect(QRectF(0, 0, 184, 120), 4, 4)
        painter.fillRect(0, 0, 184, 24, accent)
        painter.setPen(colors.TextOnPrimary.to_rgb())
        painter.drawText(8, 17, "Planejamento Q4")

        for index in range(6):
            painter.fillRect(0, 26 + index * 15, 184, 1, line)
            painter.fillRect(
                12 + (index % 3) * 46, 30 + index * 15, 30, 7, colors.Selection.to_rgb()
            )
        for x in (46, 92, 138):
            painter.fillRect(x, 24, 1, 96, line)

    painter.end()
    return pixmap
