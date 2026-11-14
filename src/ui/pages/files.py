from datetime import date
from pathlib import Path

from PySide6.QtCore import Qt, Signal
from PySide6.QtWidgets import (
    QFileDialog,
    QHBoxLayout,
    QMessageBox,
    QVBoxLayout,
    QWidget,
)

from src.exceptions.duplicate_folder_name import DuplicateFolderNameError
from src.exceptions.invalid_folder_name import InvalidFolderNameError
from src.models.folder import Folder
from src.services.folder_queries import get_favorite_folders, get_recent_folders
from src.services.folder_store import FolderStore, get_folder_store
from src.ui.components.file_filter_popup import FileFilterPopup
from src.ui.components.files_view import FilesView
from src.ui.components.folder_details import FolderDetails
from src.ui.components.title_bar import workspace_bar
from src.ui.components.view_mode_selector import ViewModeSelector
from src.ui.components.workspace_controls import WorkspaceButton, label
from src.ui.dialogs.new_folder import new_folder
from src.ui.dialogs.quick_search import quick_search
from src.ui.themes.theme_manager import AvailableTheme, theme_colors
from src.utils.get_default_layout import get_default_layout


class FilesPage(QWidget):
    section_requested = Signal(str)

    def __init__(self, *, store: FolderStore | None = None) -> None:
        super().__init__()
        self._store = store if store is not None else get_folder_store()
        self._theme = AvailableTheme.LIGHT
        self._section = "Todos os arquivos"
        self._folder: Folder | None = None
        self._selected: Folder | None = None
        self._cards = False
        self._query = ""
        self._type_filter: bool | None = None
        self._provider_filter: str | None = None
        self._sort_by_date = False

        body = get_default_layout(QVBoxLayout, parent=self)

        header, bar = workspace_bar(draggable=True)
        self.location = label(role="section")
        self.location.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents)
        self.back_button = WorkspaceButton(icon="chevron_left", quiet=True)
        self.back_button.setToolTip("Voltar à pasta anterior")
        self.back_button.clicked.connect(self._go_up)

        bar.addWidget(self.back_button)
        bar.addWidget(self.location, 1)

        self.upload_button = WorkspaceButton("Enviar arquivos", "arrow_upload")
        self.upload_button.setToolTip("Adiciona arquivos locais a esta sessão")
        self.upload_button.clicked.connect(self._add_local_files)

        self.new_button = WorkspaceButton("Nova pasta", "add", primary=True)
        self.new_button.clicked.connect(self._create_folder)

        bar.addWidget(self.upload_button)
        bar.addWidget(self.new_button)
        body.addWidget(header)

        self.content = QWidget()

        content_layout = get_default_layout(QHBoxLayout, parent=self.content)
        explorer = QWidget()
        explorer_layout = get_default_layout(QVBoxLayout, parent=explorer)

        toolbar, tools = workspace_bar()
        self.view_title = label("Arquivos", "section")
        tools.addWidget(self.view_title, 1)

        self.search_status = label(role="caption")
        tools.addWidget(self.search_status)

        self.clear_search = WorkspaceButton("Limpar busca", "dismiss", quiet=True)
        self.clear_search.clicked.connect(lambda: self._search(""))
        tools.addWidget(self.clear_search)

        self.filter_button = WorkspaceButton("Filtrar", "filter")
        self.filter_button.clicked.connect(self._show_filter)
        tools.addWidget(self.filter_button)

        views = ViewModeSelector(cards_enabled=True)
        self.list_button = views.list_button
        self.cards_button = views.grid_button
        tools.addWidget(views)

        self.list_button.clicked.connect(lambda: self._change_view(False))
        self.cards_button.clicked.connect(lambda: self._change_view(True))
        explorer_layout.addWidget(toolbar)

        self.files = FilesView()
        self.files.selected.connect(self._show_details)
        self.files.opened.connect(self._open_item)

        explorer_layout.addWidget(self.files, 1)
        footer, footer_layout = workspace_bar("OnixFooter")
        footer.setFixedHeight(36)

        self.summary = label(role="caption")
        footer_layout.addWidget(self.summary, 1)
        explorer_layout.addWidget(footer)
        content_layout.addWidget(explorer, 1)

        self.inspector = FolderDetails()
        self.inspector.close_requested.connect(lambda: self.files.select_item(None, emit=True))
        self.inspector.favorite_requested.connect(self._toggle_favorite)
        content_layout.addWidget(self.inspector)
        body.addWidget(self.content, 1)

        self._store.folders_changed.connect(self._refresh)
        self.set_theme(self._theme)
        self.navigate(self._section)

    def set_theme(self, theme: AvailableTheme) -> None:
        self._theme = theme
        self.inspector.set_theme(theme)

        for button in self.findChildren(WorkspaceButton):
            button.set_colors(theme_colors(theme))

        self._refresh()

    def navigate(self, section: str) -> None:
        self._section = section
        self._folder = None
        self._query = ""
        self._type_filter = None
        self._provider_filter = None

        self.files.select_item(None, emit=True)
        self._refresh()

    def _refresh(self) -> None:
        section = self._section
        folder = self._folder

        self.location.setText(
            f"{folder.provider}  /  {folder.name}"
            if folder
            else "OneDrive  /  Meus arquivos"
            if section == "OneDrive"
            else "Provedores"
            if section == "Configurações"
            else section
        )
        self.back_button.setVisible(folder is not None)

        editable = folder.provider == "OneDrive" if folder else section == "OneDrive"
        self.upload_button.setVisible(editable)
        self.new_button.setVisible(editable)

        if section == "Configurações":
            return

        items = self._store.folders
        if section == "Lixeira":
            items = []
        elif self._query:
            if section == "OneDrive":
                items = [item for item in items if item.provider == "OneDrive"]
        elif folder is not None:
            items = [item for item in items if item.parent_id == folder.id]
        elif section in ("Todos os arquivos", "OneDrive"):
            items = [
                item
                for item in items
                if item.parent_id is None and (section != "OneDrive" or item.provider == "OneDrive")
            ]

        if section == "Recentes":
            items = get_recent_folders(items)
        elif section == "Favoritos":
            items = get_favorite_folders(items)

        items = [
            item
            for item in items
            if self._query.casefold() in item.name.casefold()
            and (self._type_filter is None or item.is_directory == self._type_filter)
            and (self._provider_filter is None or item.provider == self._provider_filter)
        ]

        if self._sort_by_date or section == "Recentes":
            items.sort(
                key=lambda item: (
                    not item.is_directory,
                    -(item.modified_on or date.min).toordinal(),
                )
            )
        else:
            items.sort(key=lambda item: (not item.is_directory, item.name.casefold()))

        if self._selected and self._selected not in items:
            self.files.select_item(None, emit=True)

        self.view_title.setText(
            folder.name
            if folder
            else section
            if section in ("Recentes", "Favoritos", "Lixeira")
            else "Arquivos"
        )
        self.files.set_items(
            items, self._cards, theme_colors(self._theme), trash=section == "Lixeira"
        )

        providers = len({item.provider for item in items})
        self.summary.setText(
            f"{len(items)} {'item' if len(items) == 1 else 'itens'}"
            + (
                f"  ·  {providers} {'provedor' if providers == 1 else 'provedores'}"
                if section == "Todos os arquivos" and providers
                else ""
            )
        )

        self.search_status.setText(f"Busca: {self._query}")
        self.search_status.setVisible(bool(self._query))
        self.clear_search.setVisible(bool(self._query))

        self.filter_button.setText(
            "Filtrar •" if self._type_filter is not None or self._provider_filter else "Filtrar"
        )

    def _change_view(self, cards: bool) -> None:
        self._cards = cards
        self._refresh()

    def _show_filter(self) -> None:
        self._filter_popup = FileFilterPopup(self, self._theme)
        self._filter_popup.setAttribute(Qt.WidgetAttribute.WA_DeleteOnClose)
        self._filter_popup.show_below(self.filter_button)

    def _filter(self, kind: str, value: str | bool | None) -> None:
        if kind == "type":
            self._type_filter = value if isinstance(value, bool) else None
        elif kind == "provider":
            self._provider_filter = value if isinstance(value, str) else None
        else:
            self._sort_by_date = bool(value)
        self._refresh()

    def open_search(self) -> None:
        result = quick_search(self, self._query, self._store.folders)
        if result is None:
            return

        if isinstance(result, str):
            if self._section == "Lixeira":
                self.section_requested.emit("Todos os arquivos")
            self._search(result)
        else:
            self.section_requested.emit("Todos os arquivos")
            if result.is_directory:
                self._open_item(result)
            else:
                self._search(result.name)
                self.files.select_item(result, emit=True)

    def _search(self, text: str) -> None:
        self._query = text.strip()
        self._refresh()

    def _open_item(self, item: Folder) -> None:
        if not item.is_directory:
            self.files.select_item(item, emit=True)
            return

        self._folder = item
        self._query = ""
        self._type_filter = None
        self._provider_filter = None

        if self._section in {"Recentes", "Favoritos"}:
            self.section_requested.emit("Todos os arquivos")
            self._folder = item
        self.files.select_item(None, emit=True)
        self._refresh()

    def _go_up(self) -> None:
        parent_id = self._folder.parent_id if self._folder else None
        self._folder = next((item for item in self._store.folders if item.id == parent_id), None)
        self.files.select_item(None, emit=True)
        self._refresh()

    def _show_details(self, item: Folder | None) -> None:
        self._selected = item
        self.inspector.show_item(item)

    def _toggle_favorite(self) -> None:
        if self._selected is not None:
            self._selected.is_favorite = not self._selected.is_favorite
            self._store.save_favorites()
            self._refresh()
            self._show_details(self._selected)

    def _add_item(self, name: str, path: Path | None = None) -> None:
        item = Folder(
            name=name,
            status="Exemplo local",
            size_bytes=path.stat().st_size if path else 0,
            modified_on=date.today(),
            location=self._folder.name if self._folder else "Meus arquivos",
            parent_id=self._folder.id if self._folder else None,
            is_directory=path is None,
            local_path=path,
        )

        self._store.add_folder(item)

    def _create_folder(self) -> None:
        new_folder(self, self.location.text(), self._add_item)

    def _add_local_files(self) -> None:
        paths, _ = QFileDialog.getOpenFileNames(self, "Adicionar arquivos locais")

        failures = []
        for name in paths:
            path = Path(name)
            try:
                self._add_item(path.name, path)
            except (InvalidFolderNameError, DuplicateFolderNameError, OSError) as error:
                failures.append(f"{path.name} · {error}")

        if failures:
            QMessageBox.warning(self, "Adicionar arquivos", "\n".join(failures))
