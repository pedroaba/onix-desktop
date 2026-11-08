from datetime import date

from PySide6.QtCore import Signal, Slot
from PySide6.QtWidgets import (
    QInputDialog,
    QMessageBox,
    QStackedWidget,
    QVBoxLayout,
    QWidget,
)

from src.exceptions.duplicate_folder_name import DuplicateFolderNameError
from src.exceptions.invalid_folder_name import InvalidFolderNameError
from src.models.folder import Folder
from src.services.folder_store import FolderStore, get_folder_store
from src.ui.components.empty_state import EmptyState
from src.ui.components.folder_table import FolderTable
from src.ui.components.folder_toolbar import FolderToolbar
from src.ui.components.page_header import PageHeader
from src.ui.components.sync_status import SyncStatus
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class HomePage(QWidget):
    folder_selected = Signal(object)
    summary_changed = Signal(str)

    def __init__(self, parent: QWidget | None = None, *, store: FolderStore | None = None) -> None:
        super().__init__(parent)

        self._store = store if store is not None else get_folder_store()

        # organizando o conteudo da página de cima para baixo
        page_layout = get_default_layout(
            QVBoxLayout,
            GetDefaultLayoutOptions(margins=create_qmargins(24), spacing=16),
            parent=self,
        )

        self.header = PageHeader(
            title="Minhas pastas",
            breadcrumb="OneDrive pessoal",
            description="Organize suas pastas e escolha o que manter neste computador.",
        )
        self.toolbar = FolderToolbar()
        page_layout.addWidget(self.header)
        page_layout.addWidget(self.toolbar)

        # Preserve the page's existing child-widget API.
        self.title_label = self.header.title_label
        self.breadcrumb_label = self.header.breadcrumb_label
        self.description_label = self.header.description_label
        self.chevron_label = self.header.chevron_label
        self.new_folder_button = self.toolbar.new_folder_button
        self.sync_button = self.toolbar.sync_button
        self.list_view_button = self.toolbar.view_selector.list_button
        self.grid_view_button = self.toolbar.view_selector.grid_button
        self._view_group = self.toolbar.view_selector.button_group

        self.sync_status = SyncStatus()
        page_layout.addWidget(self.sync_status)

        # Mantém o conteúdo agrupado no topo.
        self.folder_table = FolderTable()
        self.folder_table.set_folders(self._store.folders)

        self.folder_table.folder_selected.connect(self.folder_selected.emit)

        self.empty_state = EmptyState()
        self.result_stack = QStackedWidget()
        self.result_stack.addWidget(self.folder_table)
        self.result_stack.addWidget(self.empty_state)

        self.folder_table.result_count_changed.connect(self._update_results)
        self._update_results(self.folder_table.visible_count)

        page_layout.addWidget(self.result_stack, stretch=1)
        self.toolbar.new_folder_requested.connect(self._create_folder)

        self._store.folders_changed.connect(self._refresh_folders)

    @property
    def folders(self) -> list[Folder]:
        return self._store.folders.copy()

    @property
    def results_summary(self) -> str:
        count = self.folder_table.visible_count
        total = len(self._store.folders)
        noun = "pasta" if total == 1 else "pastas"

        if count == total:
            return f"{total} {noun}"

        return f"{count} de {total} {noun}"

    def clear_folder_selection(self) -> None:
        self.folder_table.selectionModel().clear()

    def set_theme(self, theme: AvailableTheme) -> None:
        self.header.set_theme(theme)
        self.toolbar.set_theme(theme)
        self.folder_table.set_theme(theme)

    @Slot()
    def _refresh_folders(self) -> None:
        self.folder_table.set_folders(self._store.folders)

    @Slot(int)
    def _update_results(self, count: int) -> None:
        self.summary_changed.emit(self.results_summary)
        if count > 0:
            self.result_stack.setCurrentWidget(self.folder_table)
            return

        self.result_stack.setCurrentWidget(self.empty_state)

    @Slot()
    def _create_folder(self) -> None:
        name, accepted = QInputDialog.getText(self, "Nova pasta", "Nome da pasta:")

        if not accepted:
            return

        folder = Folder(
            name=name,
            status="Exemplo local",
            size_bytes=0,
            modified_on=date.today(),
            is_favorite=False,
        )

        try:
            self._store.add_folder(folder)
        except InvalidFolderNameError as error:
            QMessageBox.warning(self, "Nome inválido", str(error))
            return
        except DuplicateFolderNameError as error:
            QMessageBox.warning(self, "Pasta existente", str(error))
            return

        # seleciona a pasta recentemente adicionada
        self.folder_table.select_folder(folder)

    @Slot(str)
    def set_search_text(self, text: str) -> None:
        self.folder_table.set_search_text(text)
