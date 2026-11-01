from PySide6.QtCore import Qt, Signal, Slot, QSortFilterProxyModel
from PySide6.QtGui import QStandardItem, QStandardItemModel
from PySide6.QtWidgets import QAbstractItemView, QHeaderView, QTableView, QWidget

from src.models.folder import Folder


class FolderTable(QTableView):
    folder_selected = Signal(object)
    result_count_changed = Signal(int)

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("FolderTable")

        self._items_model = QStandardItemModel(0, 3, self)
        self._items_model.setHorizontalHeaderLabels(["Nome", "Status", "Tamanho"])

        self._filter_model = QSortFilterProxyModel(self)
        self._filter_model.setSourceModel(self._items_model)

        self._filter_model.setFilterKeyColumn(0)
        self._filter_model.setFilterCaseSensitivity(Qt.CaseSensitivity.CaseInsensitive)

        self.setModel(self._filter_model)

        self.selectionModel().selectionChanged.connect(self._on_selection_changed)

        self.setSelectionBehavior(QAbstractItemView.SelectionBehavior.SelectRows)
        self.setSelectionMode(QAbstractItemView.SelectionMode.SingleSelection)
        self.setEditTriggers(QAbstractItemView.EditTrigger.NoEditTriggers)

        self.setShowGrid(False)
        self.verticalHeader().hide()
        self.verticalHeader().setDefaultSectionSize(52)

        header = self.horizontalHeader()
        header.setSectionResizeMode(0, QHeaderView.ResizeMode.Stretch)
        header.setSectionResizeMode(1, QHeaderView.ResizeMode.ResizeToContents)
        header.setSectionResizeMode(2, QHeaderView.ResizeMode.ResizeToContents)

        header.setDefaultAlignment(
            Qt.AlignmentFlag.AlignVCenter | Qt.AlignmentFlag.AlignLeft
        )

    def set_folders(self, folders: list[Folder]) -> None:
        self._items_model.removeRows(0, self._items_model.rowCount())

        for folder in folders:
            size_gb = folder.size_bytes / 1_000_000_000
            size_text = f"{size_gb:.1f} GB".replace(".", ",")

            name_item = QStandardItem(folder.name)
            name_item.setData(folder, Qt.ItemDataRole.UserRole)

            row = [
                name_item,
                QStandardItem(folder.status),
                QStandardItem(size_text),
            ]

            self._items_model.appendRow(row)
        self.result_count_changed.emit(self.visible_count)

    def select_folder(self, folder: Folder) -> None:
        for row in range(self._items_model.rowCount()):
            item = self._items_model.item(row, 0)
            if item is None:
                continue

            if item.data(Qt.ItemDataRole.UserRole) is folder:
                visible_index = self._filter_model.mapFromSource(item.index())

                if visible_index.isValid():
                    self.selectRow(visible_index.row())
                    return

    @property
    def visible_count(self) -> int:
        return self._filter_model.rowCount()

    @Slot()
    def _on_selection_changed(self) -> None:
        selected_rows = self.selectionModel().selectedRows()
        if not selected_rows:
            self.folder_selected.emit(None)
            return

        index = selected_rows[0]
        folder = index.data(Qt.ItemDataRole.UserRole)

        self.folder_selected.emit(folder)

    @Slot(str)
    def set_search_text(self, text: str) -> None:
        self.clearSelection()
        self.selectionModel().clear()

        self._filter_model.setFilterFixedString(text.strip())
        self.folder_selected.emit(None)
        self.result_count_changed.emit(self.visible_count)
