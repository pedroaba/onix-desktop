from collections.abc import Callable

from PySide6.QtCore import Qt, Signal, Slot
from PySide6.QtWidgets import QStackedWidget, QVBoxLayout, QWidget

from src.models.folder import Folder
from src.ui.components.folder_table import FolderTable
from src.ui.components.page_header import PageHeader
from src.ui.components.primitive.label import StyledLabel
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import (
    GetDefaultLayoutOptions,
    get_default_layout,
)


class FolderListPage(QWidget):
    folder_selected = Signal(object)
    summary_changed = Signal(str)

    def __init__(
        self,
        parent: QWidget | None = None,
        *,
        title: str,
        description: str,
        empty_message: str,
        singular: str,
        plural: str,
        filter_folders: Callable[[list[Folder]], list[Folder]],
    ) -> None:
        super().__init__(parent)

        self._total_count = 0
        self._empty_message = empty_message
        self._singular = singular
        self._plural = plural
        self._filter_folders = filter_folders

        layout = get_default_layout(
            QVBoxLayout,
            GetDefaultLayoutOptions(
                margins=create_qmargins(24),
                spacing=16,
            ),
            parent=self,
        )

        self.header = PageHeader(
            title=title,
            breadcrumb="OneDrive pessoal",
            description=description,
        )

        self.folder_table = FolderTable()
        self.folder_table.folder_selected.connect(self.folder_selected.emit)

        self.empty_label = StyledLabel(
            self._empty_message,
            object_name="EmptyStateDescription",
            alignment=Qt.AlignmentFlag.AlignCenter,
            word_wrap=True,
        )

        self.result_stack = QStackedWidget()
        self.result_stack.addWidget(self.folder_table)
        self.result_stack.addWidget(self.empty_label)

        layout.addWidget(self.header)
        layout.addWidget(self.result_stack, stretch=1)

        self.folder_table.result_count_changed.connect(self._update_results)

        self.set_folders([])

    def set_folders(self, folders: list[Folder]) -> None:
        filtered_folders = self._filter_folders(folders)
        self._total_count = len(filtered_folders)
        self.folder_table.set_folders(filtered_folders)

    @property
    def results_summary(self) -> str:
        count = self.folder_table.visible_count
        total = self._total_count
        noun = self._singular if count == 1 else self._plural

        if count == total:
            return f"{count} {noun}"
        return f"{count} de {total} {noun}"

    def clear_folder_selection(self) -> None:
        self.folder_table.selectionModel().clear()

    def set_theme(self, theme: AvailableTheme) -> None:
        self.header.set_theme(theme)
        self.folder_table.set_theme(theme)

    @Slot(str)
    def set_search_text(self, text: str) -> None:
        self.folder_table.set_search_text(text)

    @Slot(int)
    def _update_results(self, count: int) -> None:
        if count > 0:
            self.result_stack.setCurrentWidget(self.folder_table)
        else:
            if self._total_count == 0:
                message = self._empty_message
            else:
                message = "Nenhuma pasta corresponde à pesquisa."

            self.empty_label.setText(message)
            self.result_stack.setCurrentWidget(self.empty_label)
        self.summary_changed.emit(self.results_summary)
