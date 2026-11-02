from PySide6.QtWidgets import (
    QFrame,
    QLabel,
    QVBoxLayout,
    QWidget,
    QGridLayout,
    QHBoxLayout,
    QPushButton,
)
from PySide6.QtCore import Slot, Qt, Signal, QSize

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.models.folder import Folder
from src.ui.themes.theme_manager import AvailableTheme


class FolderDetails(QFrame):
    close_requested = Signal()

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("FolderDetails")
        self.setFixedWidth(360)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(24, 24, 24, 24)
        layout.setSpacing(16)

        heading = QLabel("Detalhes")
        heading.setObjectName("DetailsHeading")

        self.close_button = QPushButton()
        self.close_button.setObjectName("CloseDetailsButton")
        self.close_button.setFixedSize(28, 28)
        self.close_button.setIconSize(QSize(20, 20))
        self.close_button.setToolTip("Fechar painel de detalhes")
        self.close_button.setAccessibleName("Fechar painel de detalhes")
        self.close_button.setAttribute(Qt.WidgetAttribute.WA_LayoutUsesWidgetRect, True)
        self.close_button.clicked.connect(self._request_close)

        heading_layout = QHBoxLayout()
        heading_layout.setContentsMargins(0, 0, 0, 0)
        heading_layout.setSpacing(8)
        heading_layout.addWidget(heading)
        heading_layout.addStretch()
        heading_layout.addWidget(self.close_button)

        self.empty_label = QLabel("Selecione uma pasta")
        self.empty_label.setWordWrap(True)

        self.content = QWidget()

        content_layout = QVBoxLayout(self.content)
        content_layout.setContentsMargins(0, 0, 0, 0)
        content_layout.setSpacing(8)

        icon_label = QLabel()
        icon_label.setFixedSize(144, 144)
        icon_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        icon_label.setPixmap(
            IconLoader(
                "folder",
                options=IconLoaderOptions(
                    folder_name="fluent/files/96/color",
                ),
            ).load_as_pixmap(144)
        )

        self.name_label = QLabel("Selecione uma pasta")
        self.name_label.setObjectName("DetailsFolderName")
        self.name_label.setWordWrap(True)

        self.subtitle_label = QLabel()
        self.subtitle_label.setObjectName("DetailsSubtitle")
        self.subtitle_label.setWordWrap(True)

        self.size_label = QLabel()
        self.location_label = QLabel()
        self.status_label = QLabel()

        fields_layout = QGridLayout()
        fields_layout.setContentsMargins(0, 0, 0, 0)
        fields_layout.setHorizontalSpacing(16)
        fields_layout.setVerticalSpacing(16)
        fields_layout.setColumnStretch(1, 1)

        fields = [
            ("Tamanho", self.size_label),
            ("Local", self.location_label),
            ("Disponibilidade", self.status_label),
        ]

        for row, (text, value_label) in enumerate(fields):
            field_label = QLabel(text)
            field_label.setProperty("role", "details-field-label")

            value_label.setWordWrap(True)
            fields_layout.addWidget(field_label, row, 0, Qt.AlignmentFlag.AlignTop)
            fields_layout.addWidget(value_label, row, 1)

        content_layout.addSpacing(24)
        content_layout.addWidget(icon_label, alignment=Qt.AlignmentFlag.AlignHCenter)
        content_layout.addSpacing(8)
        content_layout.addWidget(self.name_label)
        content_layout.addWidget(self.subtitle_label)
        content_layout.addSpacing(16)
        content_layout.addLayout(fields_layout)

        layout.addLayout(heading_layout)
        layout.addWidget(self.empty_label)
        layout.addWidget(self.content)
        layout.addStretch()

        self.show_folder(None)

    def set_theme(self, theme: AvailableTheme) -> None:
        color = "#b7b7b7" if theme == AvailableTheme.DARK else "#616161"

        self.close_button.setIcon(
            IconLoader(
                "dismiss",
                options=IconLoaderOptions(
                    folder_name="fluent/20/regular",
                    color=color,
                ),
            ).load(20)
        )

    @Slot()
    def _request_close(self) -> None:
        self.close_requested.emit()

    @Slot(object)
    def show_folder(self, folder: Folder | None) -> None:
        if folder is None:
            self.content.hide()
            self.empty_label.show()
            return

        self.name_label.setText(folder.name)
        if folder.file_count is None:
            subtitle = "Pasta"
        else:
            noun = "arquivo" if folder.file_count == 1 else "arquivos"
            subtitle = f"Pasta • {folder.file_count} {noun}"

        self.subtitle_label.setText(subtitle)

        size_gb = folder.size_bytes / 1_000_000_000
        size_text = f"{size_gb:.1f} GB".replace(".", ",")

        self.size_label.setText(size_text)
        self.location_label.setText(folder.location)
        self.status_label.setText(folder.status)

        self.empty_label.hide()
        self.content.show()
