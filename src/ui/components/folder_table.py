from PySide6.QtGui import QStandardItem, QStandardItemModel, Qt
from PySide6.QtWidgets import QAbstractItemView, QHeaderView, QTableView, QWidget

from src.models.folder import Folder


class FolderTable(QTableView):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("FolderTable")

        self._items_model = QStandardItemModel(0, 3, self)
        self._items_model.setHorizontalHeaderLabels(["Nome", "Status", "Tamanho"])
        self.setModel(self._items_model)

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

            row = [
                QStandardItem(folder.name),
                QStandardItem(folder.status),
                QStandardItem(size_text),
            ]

            self._items_model.appendRow(row)
