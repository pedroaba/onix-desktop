from PySide6.QtWidgets import QHBoxLayout, QLabel, QPushButton, QVBoxLayout, QWidget


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
        page_layout.addStretch()
