from PySide6.QtWidgets import (
    QButtonGroup,
    QFrame,
    QLabel,
    QPushButton,
    QVBoxLayout,
    QWidget,
)


class Sidebar(QFrame):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)

        self.setObjectName("Sidebar")
        self.setFixedWidth(220)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(16, 24, 16, 24)
        layout.setSpacing(8)

        account_title = QLabel("OneDrive Pessoal")
        account_title.setObjectName("SidebarTitle")

        account_name = QLabel("Pedro")
        account_name.setObjectName("AccountName")

        layout.addWidget(account_title)
        layout.addWidget(account_name)
        layout.addSpacing(24)

        self._navigation_group = QButtonGroup(self)
        self._navigation_group.setExclusive(True)

        navigation_items = ["Minhas Pastas", "Recentes", "Favoritos"]

        for index, text in enumerate(navigation_items):
            button = QPushButton(text)
            button.setCheckable(True)

            self._navigation_group.addButton(button)
            layout.addWidget(button)

            if index == 0:
                button.setChecked(True)

        layout.addStretch()

        self.settings_button = QPushButton("Configurações")
        layout.addWidget(self.settings_button)
