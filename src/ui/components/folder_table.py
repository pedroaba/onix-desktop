from datetime import date, timedelta

from PySide6.QtCore import (
    QModelIndex,
    QPersistentModelIndex,
    QSortFilterProxyModel,
    Qt,
    Signal,
    Slot,
)
from PySide6.QtGui import QIcon, QStandardItem, QStandardItemModel
from PySide6.QtWidgets import (
    QAbstractItemView,
    QHeaderView,
    QStyledItemDelegate,
    QStyleOptionViewItem,
    QTableView,
    QWidget,
)

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.models.folder import Folder
from src.ui.themes.constants import DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.create_size import create_qsize


class StatusIconDelegate(QStyledItemDelegate):
    def initStyleOption(
        self, option: QStyleOptionViewItem, index: QModelIndex | QPersistentModelIndex, /
    ) -> None:
        super().initStyleOption(option, index)
        option.decorationSize = create_qsize(20)


class FolderTable(QTableView):
    folder_selected = Signal(object)
    result_count_changed = Signal(int)

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("FolderTable")
        self._status_icons = self._build_status_icon(AvailableTheme.LIGHT)

        self._folder_icon = IconLoader(
            "folder",
            options=IconLoaderOptions(
                folder_name="fluent/files/32/color",
            ),
        ).load(32)

        self.setIconSize(create_qsize(32))

        self._items_model = QStandardItemModel(0, 4, self)
        self._items_model.setHorizontalHeaderLabels(["Nome", "Status", "Tamanho", "Modificado"])

        self._filter_model = QSortFilterProxyModel(self)
        self._filter_model.setSourceModel(self._items_model)

        self._filter_model.setFilterKeyColumn(0)
        self._filter_model.setFilterCaseSensitivity(Qt.CaseSensitivity.CaseInsensitive)

        self.setModel(self._filter_model)
        self.setItemDelegateForColumn(1, StatusIconDelegate(self))

        self.selectionModel().selectionChanged.connect(self._on_selection_changed)

        self.setSelectionBehavior(QAbstractItemView.SelectionBehavior.SelectRows)
        self.setSelectionMode(QAbstractItemView.SelectionMode.SingleSelection)
        self.setEditTriggers(QAbstractItemView.EditTrigger.NoEditTriggers)

        self.setShowGrid(False)
        self.verticalHeader().hide()
        self.verticalHeader().setDefaultSectionSize(64)

        header = self.horizontalHeader()
        header.setSectionResizeMode(0, QHeaderView.ResizeMode.Stretch)
        header.setSectionResizeMode(1, QHeaderView.ResizeMode.ResizeToContents)
        header.setSectionResizeMode(2, QHeaderView.ResizeMode.ResizeToContents)
        header.setSectionResizeMode(3, QHeaderView.ResizeMode.ResizeToContents)

        header.setDefaultAlignment(Qt.AlignmentFlag.AlignVCenter | Qt.AlignmentFlag.AlignLeft)

    @staticmethod
    def _build_status_icon(theme: AvailableTheme) -> dict[str, QIcon]:
        match theme:
            case AvailableTheme.DARK:
                green = DarkColors.Success
                blue = DarkColors.Accent
            case _:
                green = LightColors.Success
                blue = LightColors.Accent

        definitions = {
            "Neste dispositivo": ("checkmark_circle", green),
            "Sincronizando": ("arrow_sync", blue),
            "Somente na nuvem": ("cloud", blue),
        }

        icons = {}

        for status, (icon_name, color) in definitions.items():
            pixmap = IconLoader(
                icon_name,
                options=IconLoaderOptions(
                    folder_name="fluent/20/regular",
                    color=color,
                ),
            ).load_as_pixmap(20)

            icon = QIcon()

            for mode in (
                QIcon.Mode.Normal,
                QIcon.Mode.Active,
                QIcon.Mode.Selected,
            ):
                icon.addPixmap(pixmap, mode, QIcon.State.Off)
            icons[status] = icon
        return icons

    @staticmethod
    def _format_modified_date(value: date | None) -> str:
        if value is None:
            return "-"

        today = date.today()
        if value == today:
            return "Hoje"

        if value == today - timedelta(days=1):
            return "Ontem"

        months = (
            "jan.",
            "fev.",
            "mar.",
            "abr.",
            "mai.",
            "jun.",
            "jul.",
            "ago.",
            "set.",
            "out.",
            "nov.",
            "dez.",
        )

        text = f"{value.day} {months[value.month - 1]}"
        if value.year != today.year:
            text += f" {value.year}"

        return text

    def set_folders(self, folders: list[Folder]) -> None:
        self._items_model.removeRows(0, self._items_model.rowCount())

        for folder in folders:
            size_gb = folder.size_bytes / 1_000_000_000
            size_text = f"{size_gb:.1f} GB".replace(".", ",")

            name_item = QStandardItem(folder.name)
            name_item.setData(folder, Qt.ItemDataRole.UserRole)

            name_item.setIcon(self._folder_icon)

            name_font = name_item.font()
            name_font.setBold(True)
            name_item.setFont(name_font)

            status_item = QStandardItem(folder.status)
            status_item.setIcon(self._status_icons.get(folder.status, QIcon()))

            row = [
                name_item,
                status_item,
                QStandardItem(size_text),
                QStandardItem(self._format_modified_date(folder.modified_on)),
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

    def set_theme(self, theme: AvailableTheme) -> None:
        self._status_icons = self._build_status_icon(theme)
        for row in range(self._items_model.rowCount()):
            status_item = self._items_model.item(row, 1)
            if status_item is None:
                continue

            status_item.setIcon(self._status_icons.get(status_item.text(), QIcon()))

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
