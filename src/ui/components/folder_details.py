from PySide6.QtCore import Signal, Slot
from PySide6.QtWidgets import QFrame, QVBoxLayout, QWidget

from src.models.folder import Folder
from src.ui.components.details_header import DetailsHeader
from src.ui.components.folder_availability import FolderAvailability
from src.ui.components.folder_summary import FolderSummary
from src.ui.components.primitive.label import StyledLabel
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class FolderDetails(QFrame):
    close_requested = Signal()

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)
        self.setObjectName("FolderDetails")
        self.setFixedWidth(360)
        self._folder: Folder | None = None
        layout = get_default_layout(
            QVBoxLayout,
            GetDefaultLayoutOptions(margins=create_qmargins(24), spacing=16),
            parent=self,
        )
        self.header = DetailsHeader()
        self.header.close_requested.connect(self.close_requested.emit)
        self.empty_label = StyledLabel("Selecione uma pasta", word_wrap=True)
        self.content = QWidget()
        content_layout = get_default_layout(
            QVBoxLayout, GetDefaultLayoutOptions(spacing=8), parent=self.content
        )
        self.summary = FolderSummary()
        self.availability = FolderAvailability()
        content_layout.addWidget(self.summary)
        content_layout.addSpacing(16)
        content_layout.addWidget(self.availability)

        # Keep existing callers working with the same child widgets.
        self.close_button = self.header.close_button
        self.name_label = self.summary.name_label
        self.subtitle_label = self.summary.subtitle_label
        self.size_label = self.summary.size_label
        self.location_label = self.summary.location_label
        self.status_label = self.summary.status_label
        self.keep_switch = self.availability.keep_switch
        self.free_space_button = self.availability.free_space_button

        layout.addWidget(self.header)
        layout.addWidget(self.empty_label)
        layout.addWidget(self.content)
        layout.addStretch()
        self.show_folder(None)

    def set_theme(self, theme: AvailableTheme) -> None:
        self.header.set_theme(theme)
        self.availability.set_theme(theme)

    @Slot(object)
    def show_folder(self, folder: Folder | None) -> None:
        self._folder = folder
        self.availability.show_folder(folder)
        if folder is None:
            self.content.hide()
            self.empty_label.show()
            return
        self.summary.show_folder(folder)
        self.empty_label.hide()
        self.content.show()
