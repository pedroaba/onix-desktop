from datetime import date, timedelta

from PySide6.QtGui import QIcon
from PySide6.QtCore import Slot, Signal, QSize
from PySide6.QtWidgets import (
    QHBoxLayout,
    QLabel,
    QPushButton,
    QStackedWidget,
    QVBoxLayout,
    QWidget,
    QInputDialog,
    QMessageBox,
    QButtonGroup,
)

from src.loaders.icon import IconLoader, IconLoaderOptions
from src.models.folder import Folder
from src.ui.components.folder_table import FolderTable
from src.ui.components.empty_state import EmptyState
from src.ui.components.sync_status import SyncStatus
from src.ui.themes.theme_manager import AvailableTheme


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

    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self._folders = list(sample_folders)

        # organizando o conteudo da página de cima para baixo
        page_layout = QVBoxLayout(self)
        page_layout.setContentsMargins(24, 24, 24, 24)
        page_layout.setSpacing(16)

        self.title_label = QLabel("Minhas pastas")
        self.title_label.setObjectName("PageTitle")

        self.breadcrumb_label = QLabel("OneDrive pessoal")
        self.breadcrumb_label.setObjectName("PageBreadcrumb")

        self.description_label = QLabel(
            "Organize suas pastas e escolha o que manter neste computador."
        )

        self.description_label.setObjectName("PageDescription")
        self.description_label.setWordWrap(True)

        self.chevron_label = QLabel(
            pixmap=IconLoader(
                "chevron-right",
                options=IconLoaderOptions(
                    folder_name="fluent/20/regular",
                ),
            ).load_as_pixmap(20)
        )

        self.new_folder_button = QPushButton("Nova Pasta")
        self.new_folder_button.setObjectName("PrimaryButton")
        self.new_folder_button.setIconSize(QSize(20, 20))
        self.new_folder_button.setFixedHeight(36)

        self.sync_button = QPushButton("Sincronizar agora")
        self.sync_button.setObjectName("SyncButton")
        self.sync_button.setIconSize(QSize(20, 20))
        self.sync_button.setFixedHeight(36)

        self.list_view_button = QPushButton()
        self.grid_view_button = QPushButton()

        view_buttons = [
            (self.list_view_button, "Visualização em lista"),
            (self.grid_view_button, "Visualização em grade"),
        ]

        self._view_group = QButtonGroup(self)
        self._view_group.setExclusive(True)

        for button, description in view_buttons:
            button.setProperty("role", "view-mode")
            button.setCheckable(True)
            button.setFixedSize(36, 36)
            button.setIconSize(QSize(20, 20))
            button.setToolTip(description)
            button.setAccessibleName(description)

            self._view_group.addButton(button)

        self.list_view_button.setChecked(True)
        self.grid_view_button.setEnabled(False)
        self.grid_view_button.setToolTip("Visualização em grade indisponível")

        # organizando elementos da barra de ações lado a lado
        actions_layout = QHBoxLayout()
        actions_layout.setContentsMargins(0, 0, 0, 0)
        actions_layout.setSpacing(12)

        actions_layout.addWidget(self.new_folder_button)
        actions_layout.addWidget(self.sync_button)
        actions_layout.addStretch()

        view_layout = QHBoxLayout()
        view_layout.setContentsMargins(0, 0, 0, 0)
        view_layout.setSpacing(8)

        view_layout.addWidget(self.list_view_button)
        view_layout.addWidget(self.grid_view_button)

        actions_layout.addLayout(view_layout)

        header_layout = QVBoxLayout()
        header_layout.setContentsMargins(0, 0, 0, 0)
        header_layout.setSpacing(0)

        breadcrumb_layout = QHBoxLayout()
        breadcrumb_layout.setContentsMargins(0, 0, 0, 0)
        breadcrumb_layout.setSpacing(0)

        breadcrumb_layout.addWidget(self.breadcrumb_label)
        breadcrumb_layout.addSpacing(4)
        breadcrumb_layout.addWidget(self.chevron_label)
        breadcrumb_layout.addStretch()

        header_layout.addLayout(breadcrumb_layout)
        header_layout.addSpacing(12)

        header_layout.addWidget(self.title_label)
        header_layout.addSpacing(4)

        header_layout.addWidget(self.description_label)

        page_layout.addLayout(header_layout)
        page_layout.addLayout(actions_layout)

        self.sync_status = SyncStatus()
        page_layout.addWidget(self.sync_status)

        # Mantém o conteúdo agrupado no topo.
        self.folder_table = FolderTable()
        self.folder_table.set_folders(self._folders)

        self.results_label = QLabel()
        self.results_label.setObjectName("ResultsSummary")

        self.folder_table.folder_selected.connect(self.folder_selected.emit)

        self.empty_state = EmptyState()
        self.result_stack = QStackedWidget()
        self.result_stack.addWidget(self.folder_table)
        self.result_stack.addWidget(self.empty_state)

        self.folder_table.result_count_changed.connect(self._update_results)
        self._update_results(self.folder_table.visible_count)

        page_layout.addWidget(self.result_stack, stretch=1)
        page_layout.addWidget(self.results_label)
        self.new_folder_button.clicked.connect(self._create_folder)

    def clear_folder_selection(self) -> None:
        self.folder_table.selectionModel().clear()

    def _update_view_icons(self, normal_color: str, selected_color: str) -> None:
        buttons = [
            (self.list_view_button, "text_align_left"),
            (self.grid_view_button, "grid"),
        ]

        for button, icon_name in buttons:
            icon = QIcon()
            states = [(QIcon.State.Off, normal_color), (QIcon.State.On, selected_color)]

            for state, color in states:
                pixmap = IconLoader(
                    icon_name,
                    options=IconLoaderOptions(
                        color=color, folder_name="fluent/20/regular"
                    ),
                ).load_as_pixmap(20)

                for mode in (QIcon.Mode.Normal, QIcon.Mode.Active, QIcon.Mode.Selected):
                    icon.addPixmap(pixmap, mode, state)
            button.setIcon(icon)

    def set_theme(self, theme: AvailableTheme) -> None:
        match theme:
            case AvailableTheme.DARK:
                chevron_color = "#b7b7b7"
                action_color = "#80c6ff"
            case _:
                chevron_color = "#616161"
                action_color = "#0067b8"

        self.folder_table.set_theme(theme)
        self._update_view_icons(chevron_color, action_color)
        self.new_folder_button.setIcon(
            IconLoader(
                "add",
                options=IconLoaderOptions(
                    folder_name="fluent/20/regular",
                    color="#ffffff",
                ),
            ).load(20)
        )

        self.sync_button.setIcon(
            IconLoader(
                "arrow_sync",
                options=IconLoaderOptions(
                    folder_name="fluent/20/regular",
                    color=action_color,
                ),
            ).load(20)
        )

        self.chevron_label.setPixmap(
            IconLoader(
                "chevron-right",
                options=IconLoaderOptions(
                    folder_name="fluent/20/regular", color=chevron_color
                ),
            ).load_as_pixmap(20)
        )

    @Slot(int)
    def _update_results(self, count: int) -> None:
        total = len(self._folders)
        noun = "pasta"
        if total > 1:
            noun = "pastas"

        text = f"{count} de {total} {noun}"
        if count == total:
            text = f"{total} {noun}"

        self.results_label.setText(text)

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

        already_exists = any(
            folder.name.casefold() == name.casefold() for folder in self._folders
        )

        if already_exists:
            QMessageBox.warning(
                self, "Pasta existente", "Já existe uma pasta com esse nome."
            )
            return

        folder = Folder(
            name=name, status="Exemplo local", size_bytes=0, modified_on=date.today()
        )

        self._folders.append(folder)
        self.folder_table.set_folders(self._folders)

        # seleciona a pasta recentemente adicionada
        self.folder_table.select_folder(folder)

    @Slot(str)
    def set_search_text(self, text: str) -> None:
        self.folder_table.set_search_text(text)
