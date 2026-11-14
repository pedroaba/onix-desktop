from PySide6.QtCore import Qt, Signal
from PySide6.QtWidgets import (
    QAbstractItemView,
    QGridLayout,
    QHeaderView,
    QScrollArea,
    QStackedWidget,
    QTableWidget,
    QTableWidgetItem,
    QVBoxLayout,
    QWidget,
)

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.models.folder import Folder
from src.ui.components.file_card import FileCard
from src.ui.components.workspace_controls import frame, label
from src.ui.styles import ComponentSize, ThemeColors
from src.utils.file_metadata import modified_text, size_text


class FilesView(QStackedWidget):
    selected = Signal(object)
    opened = Signal(object)

    def __init__(self) -> None:
        super().__init__()

        self.items: list[Folder] = []
        self._rows: dict[int, Folder] = {}
        self.selected_id: str | None = None
        self._cards: list[tuple[Folder, QWidget]] = []

        self.table = QTableWidget(0, 4)
        self.table.setObjectName("OnixResults")
        self.table.setHorizontalHeaderLabels(["Nome", "Modificado", "Tamanho", "Provedor"])
        self.table.verticalHeader().hide()
        self.table.verticalHeader().setDefaultSectionSize(int(ComponentSize.FileRowHeight))

        self.table.setShowGrid(False)
        self.table.setMouseTracking(True)
        self.table.setSelectionMode(QAbstractItemView.SelectionMode.SingleSelection)
        self.table.setSelectionBehavior(QAbstractItemView.SelectionBehavior.SelectRows)
        self.table.setEditTriggers(QAbstractItemView.EditTrigger.NoEditTriggers)

        header = self.table.horizontalHeader()
        header.setSectionResizeMode(QHeaderView.ResizeMode.ResizeToContents)
        header.setSectionResizeMode(0, QHeaderView.ResizeMode.Stretch)

        self.table.currentCellChanged.connect(self._select_row)
        self.table.cellDoubleClicked.connect(self._open_row)

        self.card_scroll = QScrollArea()
        self.card_scroll.setObjectName("OnixScroll")
        self.card_scroll.setWidgetResizable(True)

        self.addWidget(self.table)
        self.addWidget(self.card_scroll)

        empty = QWidget()
        layout = QVBoxLayout(empty)
        layout.addStretch()

        self.empty_title = label(role="details")
        self.empty_description = label(role="secondary")

        layout.addWidget(self.empty_title, alignment=Qt.AlignmentFlag.AlignHCenter)
        layout.addWidget(self.empty_description, alignment=Qt.AlignmentFlag.AlignHCenter)
        layout.addStretch()

        self.addWidget(empty)

    def set_items(
        self,
        items: list[Folder],
        cards: bool,
        colors: ThemeColors,
        *,
        trash: bool,
    ) -> None:
        self.items = items
        self._cards.clear()

        self.table.blockSignals(True)
        self.table.clearContents()
        self._rows.clear()

        groups = {
            directory: [item for item in items if item.is_directory == directory]
            for directory in (True, False)
        }
        self.table.clearSpans()
        self.table.setRowCount(len(items) + sum(bool(group) for group in groups.values()))

        icons = {
            name: IconLoader(
                name,
                IconLoaderOptions(
                    folder_name="fluent/16/regular", color=colors.TextSecondary.to_hex()
                ),
            ).load(16)
            for name in ("folder", "document")
        }

        row = 0
        for directory, group in groups.items():
            if not group:
                continue

            title = "Pastas" if directory else "Arquivos"
            heading = QTableWidgetItem(f"    {title}   {len(group)}")
            heading.setFlags(Qt.ItemFlag.ItemIsEnabled)
            heading.setBackground(colors.SurfaceRaised.to_rgb())
            heading.setForeground(colors.TextMuted.to_rgb())
            self.table.setSpan(row, 0, 1, 4)
            self.table.setItem(row, 0, heading)
            row += 1

            for item in group:
                self._rows[row] = item

                values = (
                    item.name,
                    modified_text(item),
                    "—" if item.is_directory else size_text(item.size_bytes),
                    item.provider,
                )

                for column, value in enumerate(values):
                    cell = QTableWidgetItem(value)
                    if column == 0:
                        cell.setIcon(icons["folder" if item.is_directory else "document"])
                    elif column == 3:
                        cell.setForeground(
                            {
                                "OneDrive": colors.OneDrive,
                                "Google Drive": colors.GoogleDrive,
                                "Dropbox": colors.Dropbox,
                            }.get(item.provider, colors.TextSecondary).to_rgb()
                        )
                    else:
                        cell.setForeground(colors.TextSecondary.to_rgb())
                    self.table.setItem(row, column, cell)

                if item.id == self.selected_id:
                    self.table.selectRow(row)
                row += 1

        self.table.blockSignals(False)

        if not items:
            self.empty_title.setText("Lixeira vazia" if trash else "Nenhum item encontrado")
            self.empty_description.setText(
                "Os itens excluídos aparecem aqui."
                if trash
                else "Tente outro termo ou ajuste os filtros."
            )
            self.setCurrentIndex(2)
            return

        if cards:
            content = frame("OnixScrollContent")
            grid = QGridLayout(content)
            grid.setContentsMargins(24, 16, 24, 16)
            grid.setSpacing(12)
            grid.setAlignment(Qt.AlignmentFlag.AlignTop)

            row = 0

            columns = 4 if self.width() >= 880 else 3 if self.width() >= 610 else 2

            for directories, title in ((True, "Pastas"), (False, "Arquivos")):
                group = [item for item in items if item.is_directory == directories]
                if not group:
                    continue
                grid.addWidget(label(title, "section"), row, 0, 1, columns)
                for index, item in enumerate(group):
                    grid.addWidget(
                        self._card(item, colors), row + 1 + index // columns, index % columns
                    )
                row += 2 + (len(group) - 1) // columns

            for column in range(columns):
                grid.setColumnStretch(column, 1)
            self.card_scroll.setWidget(content)

        self.setCurrentIndex(int(cards))

    def select_item(self, item: Folder | None, *, emit=False) -> None:
        self.selected_id = item.id if item else None

        for file, card in self._cards:
            selected = file.id == self.selected_id
            if card.property("selected") != selected:
                card.setProperty("selected", selected)
                card.style().unpolish(card)
                card.style().polish(card)

        if not item:
            self.table.clearSelection()
            self.table.setCurrentCell(-1, -1)

        if emit:
            self.selected.emit(item)

    def _select_row(self, row: int, *_: int) -> None:
        self.select_item(self._rows.get(row), emit=True)

    def _open_row(self, row: int, _column: int) -> None:
        if row in self._rows:
            self.opened.emit(self._rows[row])

    def _card(self, item: Folder, colors: ThemeColors) -> QWidget:
        card = FileCard(item, colors, selected=item.id == self.selected_id)

        card.clicked.connect(
            lambda: (
                self.opened.emit(item) if item.is_directory else self.select_item(item, emit=True)
            )
        )

        self._cards.append((item, card))
        return card
