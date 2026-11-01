from PySide6.QtCore import Slot
from PySide6.QtWidgets import (
    QHBoxLayout,
    QLabel,
    QPushButton,
    QVBoxLayout,
    QWidget,
    QInputDialog,
    QMessageBox,
)

from src.models.folder import Folder
from src.ui.components.folder_details import FolderDetails
from src.ui.components.folder_table import FolderTable


sample_folders = [
    Folder("Documentos", "Neste dispositivo", 8_400_000_000),
    Folder("Projetos", "Sincronizando", 12_800_000_000),
    Folder("Fotos", "Somente na nuvem", 64_200_000_000),
    Folder("Estudos", "Neste dispositivo", 3_100_000_000),
]


class HomePage(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self._folders = list(sample_folders)

        # organizando o conteudo da página de cima para baixo
        page_layout = QVBoxLayout(self)
        page_layout.setContentsMargins(24, 24, 24, 24)
        page_layout.setSpacing(16)

        self.title_label = QLabel("Minhas pastas")
        self.title_label.setObjectName("PageTitle")

        self.description_label = QLabel(
            "Organize suas pastas e escolha o que manter neste computador"
        )
        self.description_label.setObjectName("PageDescription")

        self.new_folder_button = QPushButton("Nova Pasta")
        self.new_folder_button.setObjectName("PrimaryButton")

        # organizando elementos da barra de ações lado a lado
        actions_layout = QHBoxLayout()
        actions_layout.addWidget(self.new_folder_button)
        actions_layout.addStretch()

        page_layout.addWidget(self.title_label)
        page_layout.addWidget(self.description_label)
        page_layout.addLayout(actions_layout)

        # Mantém o conteúdo agrupado no topo.
        self.folder_table = FolderTable()
        self.folder_table.set_folders(self._folders)

        self.folder_details = FolderDetails()

        self.folder_table.folder_selected.connect(self.folder_details.show_folder)

        folders_layout = QHBoxLayout()
        folders_layout.setSpacing(16)
        folders_layout.addWidget(self.folder_table, stretch=1)
        folders_layout.addWidget(self.folder_details)

        page_layout.addLayout(folders_layout, stretch=1)

        self.new_folder_button.clicked.connect(self._create_folder)

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

        folder = Folder(name=name, status="Exemplo local", size_bytes=0)

        self._folders.append(folder)
        self.folder_table.set_folders(self._folders)

        # seleciona a pasta recentemente adicionada
        self.folder_table.select_folder(folder)

    @Slot(str)
    def set_search_text(self, text: str) -> None:
        self.folder_table.set_search_text(text)
