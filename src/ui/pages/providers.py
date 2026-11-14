from queue import Empty, Queue
from threading import Thread

from PySide6.QtCore import QTimer, Signal
from PySide6.QtWidgets import QHBoxLayout, QMessageBox, QVBoxLayout, QWidget

from src.services.onedrive_service import OneDriveLoginError, OneDriveSession, sign_in_to_onedrive
from src.ui.components.title_bar import workspace_bar
from src.ui.components.workspace_controls import WorkspaceButton, frame, label
from src.ui.themes.theme_manager import AvailableTheme, theme_colors
from src.utils.get_default_layout import get_default_layout


class ProvidersPage(QWidget):
    theme_toggle_requested = Signal()

    def __init__(self) -> None:
        super().__init__()

        self._session: OneDriveSession | None = None
        self._login_results: Queue[OneDriveSession | str] = Queue()

        self._login_timer = QTimer(self, interval=100)
        self._login_timer.timeout.connect(self._finish_login)

        body = get_default_layout(QVBoxLayout, parent=self)

        header, bar = workspace_bar(draggable=True)
        location = label("Provedores", "section")
        bar.addWidget(location, 1)
        body.addWidget(header)

        settings = QWidget()
        body.addWidget(settings, 1)
        outer = QHBoxLayout(settings)
        outer.setContentsMargins(24, 32, 24, 16)
        outer.addStretch()

        panel = QWidget()
        panel.setMaximumWidth(766)
        content = QVBoxLayout(panel)
        content.setContentsMargins(0, 0, 0, 0)
        content.setSpacing(12)

        heading = QHBoxLayout()
        heading.addWidget(label("Provedores", "title"), 1)

        self.theme_button = WorkspaceButton("Modo escuro")
        self.theme_button.clicked.connect(self.theme_toggle_requested.emit)
        heading.addWidget(self.theme_button)
        content.addLayout(heading)

        content.addWidget(
            label("Gerencie as contas de armazenamento conectadas ao Onix.", "secondary")
        )

        content.addSpacing(15)
        content.addWidget(label("OneDrive", "section"))

        self.connect_button = WorkspaceButton("Conectar", "cloud")
        self.connect_button.clicked.connect(self._toggle_connection)
        self.connection_status = label("Conta Microsoft pessoal", "secondary")

        content.addWidget(
            self._provider_card("OneDrive", self.connection_status, self.connect_button)
        )

        content.addSpacing(12)
        content.addWidget(label("Próximos provedores", "section"))

        for name, description in (
            ("Google Drive", "Armazenamento do Google"),
            ("Dropbox", "Armazenamento do Dropbox"),
        ):
            content.addWidget(
                self._provider_card(
                    name, label(description, "secondary"), label("Em breve", "secondary")
                )
            )

        content.addStretch()
        outer.addWidget(panel, 8)
        outer.addStretch()

    @staticmethod
    def _provider_card(name: str, description: QWidget, action: QWidget) -> QWidget:
        card = frame("")
        card.setProperty("onixCard", True)

        row = QHBoxLayout(card)
        row.setContentsMargins(14, 9, 14, 9)

        texts = QVBoxLayout()
        texts.setSpacing(3)
        texts.addWidget(label(name, "section"))
        texts.addWidget(description)

        row.addLayout(texts, 1)
        row.addWidget(action)
        return card

    def set_theme(self, theme: AvailableTheme) -> None:
        colors = theme_colors(theme)
        for button in self.findChildren(WorkspaceButton):
            button.set_colors(colors)

        self.theme_button.setText("Modo claro" if theme == AvailableTheme.DARK else "Modo escuro")

    def _toggle_connection(self) -> None:
        if self._session:
            self._session = None
            self.connection_status.setText("Conta Microsoft pessoal")
            self.connect_button.setText("Conectar")
            return

        def authenticate() -> None:
            try:
                self._login_results.put(sign_in_to_onedrive())
            except OneDriveLoginError as error:
                self._login_results.put(str(error))
            except Exception:
                self._login_results.put("Não foi possível iniciar o login no OneDrive.")

        self.connect_button.setEnabled(False)
        self.connect_button.setText("Conectando…")
        Thread(target=authenticate, name="onedrive-login", daemon=True).start()
        self._login_timer.start()

    def _finish_login(self) -> None:
        try:
            result = self._login_results.get_nowait()
        except Empty:
            return

        self._login_timer.stop()
        self.connect_button.setEnabled(True)

        if isinstance(result, str):
            self.connect_button.setText("Conectar")
            QMessageBox.warning(self, "Conectar OneDrive", result)
        else:
            self._session = result
            self.connection_status.setText(f"{result.account_name} · Conectado")
            self.connect_button.setText("Desconectar")
