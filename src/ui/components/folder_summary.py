from PySide6.QtCore import Qt
from PySide6.QtWidgets import QGridLayout, QLabel, QVBoxLayout, QWidget

from src.models.folder import Folder
from src.ui.components.primitive.icon_label import IconLabel
from src.ui.components.primitive.label import StyledLabel
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class FolderSummary(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)
        layout = get_default_layout(QVBoxLayout, GetDefaultLayoutOptions(spacing=8), parent=self)
        icon_label = IconLabel("folder", 144, folder_name="fluent/files/96/color")
        icon_label.setAlignment(Qt.AlignmentFlag.AlignCenter)

        self.name_label = StyledLabel(
            "Selecione uma pasta", object_name="DetailsFolderName", word_wrap=True
        )

        self.subtitle_label = StyledLabel(object_name="DetailsSubtitle", word_wrap=True)

        self.size_label = QLabel()
        self.location_label = QLabel()
        self.status_label = QLabel()

        fields_layout = get_default_layout(QGridLayout)
        fields_layout.setHorizontalSpacing(16)
        fields_layout.setVerticalSpacing(16)
        fields_layout.setColumnStretch(1, 1)

        fields = [
            ("Tamanho", self.size_label),
            ("Local", self.location_label),
            ("Disponibilidade", self.status_label),
        ]

        for row, (text, value_label) in enumerate(fields):
            field_label = StyledLabel(text, role="details-field-label")

            value_label.setWordWrap(True)
            fields_layout.addWidget(field_label, row, 0, Qt.AlignmentFlag.AlignTop)
            fields_layout.addWidget(value_label, row, 1)

        layout.addSpacing(24)
        layout.addWidget(icon_label, alignment=Qt.AlignmentFlag.AlignHCenter)
        layout.addSpacing(8)
        layout.addWidget(self.name_label)
        layout.addWidget(self.subtitle_label)
        layout.addSpacing(16)
        layout.addLayout(fields_layout)

    def show_folder(self, folder: Folder) -> None:
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
