from datetime import date, timedelta

from PySide6.QtCore import Signal, Slot
from PySide6.QtWidgets import (
    QInputDialog,
    QMessageBox,
    QStackedWidget,
    QVBoxLayout,
    QWidget,
)

from src.models.folder import Folder
from src.ui.components.empty_state import EmptyState
from src.ui.components.folder_table import FolderTable
from src.ui.components.folder_toolbar import FolderToolbar
from src.ui.components.page_header import PageHeader
from src.ui.components.sync_status import SyncStatus
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.create_margins import create_qmargins
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout

today = date.today()

sample_folders = [
    Folder(
        "Documentos",
        "Neste dispositivo",
        8_400_000_000,
        modified_on=today,
        file_count=248,
        keep_on_device=True,
    ),
    Folder("Projetos", "Sincronizando", 12_800_000_000, modified_on=today),
    Folder(
        "Fotos",
        "Somente na nuvem",
        64_200_000_000,
        modified_on=today - timedelta(days=1),
    ),
    Folder(
        "Estudos",
        "Neste dispositivo",
        3_100_000_000,
        modified_on=today - timedelta(days=5),
    ),
    Folder(
        "Pessoal",
        "Somente na nuvem",
        2_600_000_000,
        modified_on=today - timedelta(days=7),
    ),
    Folder(
        "Arquivo",
        "Somente na nuvem",
        36_900_000_000,
        modified_on=today - timedelta(days=12),
    ),
]


class HomePage(QWidget):
    folder_selected = Signal(object)
    summary_changed = Signal(str)

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self._folders = list(sample_folders)

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
        self.folder_table.set_folders(self._folders)

        self.folder_table.folder_selected.connect(self.folder_selected.emit)

        self.empty_state = EmptyState()
        self.result_stack = QStackedWidget()
        self.result_stack.addWidget(self.folder_table)
        self.result_stack.addWidget(self.empty_state)

        self.folder_table.result_count_changed.connect(self._update_results)
        self._update_results(self.folder_table.visible_count)

        page_layout.addWidget(self.result_stack, stretch=1)
        self.toolbar.new_folder_requested.connect(self._create_folder)

    @property
    def results_summary(self) -> str:
        count = self.folder_table.visible_count
        total = len(self._folders)
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

        name = name.strip()

        if not name:
            QMessageBox.warning(self, "Nome inválido", "Digite um nome para a pasta.")
            return

        already_exists = any(folder.name.casefold() == name.casefold() for folder in self._folders)

        if already_exists:
            QMessageBox.warning(self, "Pasta existente", "Já existe uma pasta com esse nome.")
            return

        folder = Folder(name=name, status="Exemplo local", size_bytes=0, modified_on=date.today())

        self._folders.append(folder)
        self.folder_table.set_folders(self._folders)

        # seleciona a pasta recentemente adicionada
        self.folder_table.select_folder(folder)

    @Slot(str)
    def set_search_text(self, text: str) -> None:
        self.folder_table.set_search_text(text)
