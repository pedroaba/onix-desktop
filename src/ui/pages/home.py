from PySide6.QtWidgets import QHBoxLayout, QLabel, QPushButton, QVBoxLayout, QWidget

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
        self.folder_table.set_folders(sample_folders)

        self.folder_details = FolderDetails()

        folders_layout = QHBoxLayout()
        folders_layout.setSpacing(16)
        folders_layout.addWidget(self.folder_table, stretch=1)
        folders_layout.addWidget(self.folder_details)

        page_layout.addLayout(folders_layout, stretch=1)
