from pathlib import Path
from shutil import copyfile

from PySide6.QtCore import Qt, Signal
from PySide6.QtWidgets import (
    QFileDialog,
    QFrame,
    QHBoxLayout,
    QMessageBox,
    QVBoxLayout,
)

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.models.folder import Folder
from src.ui.components.title_bar import workspace_bar
from src.ui.components.workspace_controls import WorkspaceButton, label
from src.ui.styles import ComponentSize
from src.ui.themes.theme_manager import AvailableTheme, theme_colors
from src.utils.file_metadata import modified_text, size_text


class FolderDetails(QFrame):
    close_requested = Signal()
    favorite_requested = Signal()

    def __init__(self) -> None:
        super().__init__()
        self.setObjectName("OnixInspector")

        self._item: Folder | None = None
        self._theme = AvailableTheme.LIGHT

        self.setFixedWidth(int(ComponentSize.DetailsWidth))

        outer = QVBoxLayout(self)
        outer.setContentsMargins(0, 0, 0, 0)
        outer.setSpacing(0)

        header, heading = workspace_bar()
        heading.addWidget(label("Detalhes", "section"), 1)

        self.close_details = WorkspaceButton(icon="dismiss", quiet=True)
        self.close_details.setToolTip("Fechar detalhes")
        self.close_details.clicked.connect(self.close_requested.emit)
        heading.addWidget(self.close_details)
        outer.addWidget(header)

        details = QVBoxLayout()
        details.setContentsMargins(16, 20, 16, 16)
        details.setSpacing(14)

        self.detail_icon = label()
        details.addWidget(self.detail_icon)

        self.detail_title = label(role="details")
        self.detail_title.setWordWrap(True)
        details.addWidget(self.detail_title)

        self.detail_type = label(role="secondary")
        details.addWidget(self.detail_type)

        self.download_button = WorkspaceButton("Baixar", "arrow_download")
        self.download_button.clicked.connect(self._download)
        details.addWidget(self.download_button, alignment=Qt.AlignmentFlag.AlignLeft)

        self.favorite_button = WorkspaceButton("Adicionar aos favoritos", "star")
        self.favorite_button.clicked.connect(self.favorite_requested.emit)
        details.addWidget(self.favorite_button, alignment=Qt.AlignmentFlag.AlignLeft)

        details.addSpacing(8)
        details.addWidget(label("Propriedades", "section"))
        self.detail_values = {}

        for name in ("Provedor", "Localização", "Modificado", "Tamanho"):
            row = QHBoxLayout()
            row.addWidget(label(name, "secondary"), 1)
            value = label()
            row.addWidget(value, 1)
            details.addLayout(row)
            self.detail_values[name] = value

        details.addStretch()
        outer.addLayout(details, 1)

        self.hide()

    def set_theme(self, theme: AvailableTheme) -> None:
        self._theme = theme
        self.show_item(self._item)

    def show_item(self, item: Folder | None) -> None:
        self._item = item
        self.setVisible(item is not None)

        if item is None:
            return

        color = theme_colors(self._theme).Accent.to_hex()
        self.detail_icon.setPixmap(
            IconLoader(
                "folder" if item.is_directory else "document",
                IconLoaderOptions(folder_name="fluent/16/regular", color=color),
            ).load_as_pixmap(24)
        )

        self.detail_title.setText(item.name)
        self.detail_type.setText(
            "Pasta" if item.is_directory else Path(item.name).suffix[1:].upper()
        )

        self.favorite_button.setText(
            "Remover dos favoritos" if item.is_favorite else "Adicionar aos favoritos"
        )

        self.download_button.setVisible(not item.is_directory)
        self.download_button.setEnabled(item.local_path is not None)
        self.download_button.setToolTip(
            "" if item.local_path else "Download indisponível para este exemplo"
        )

        values = (item.provider, item.location, modified_text(item), size_text(item.size_bytes))
        for value, text in zip(self.detail_values.values(), values, strict=True):
            value.setText(text)

    def _download(self) -> None:
        item = self._item
        if item is None or item.local_path is None:
            return

        target, _ = QFileDialog.getSaveFileName(self, "Salvar cópia", item.name)
        if target:
            try:
                copyfile(item.local_path, target)
            except OSError as error:
                QMessageBox.warning(self, "Salvar cópia", str(error))
