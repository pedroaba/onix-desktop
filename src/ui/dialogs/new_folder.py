from collections.abc import Callable

from PySide6.QtWidgets import QDialog, QHBoxLayout, QLineEdit, QMessageBox, QVBoxLayout, QWidget

from src.exceptions.duplicate_folder_name import DuplicateFolderNameError
from src.exceptions.invalid_folder_name import InvalidFolderNameError
from src.ui.components.workspace_controls import WorkspaceButton, label


def new_folder(parent: QWidget, location: str, add_folder: Callable[[str], None]) -> None:
    dialog = QDialog(parent)
    dialog.setProperty("onixDialog", True)
    dialog.setWindowTitle("Nova pasta")
    dialog.setMinimumWidth(400)

    layout = QVBoxLayout(dialog)
    layout.addWidget(label("Nova pasta", "details"))
    layout.addWidget(label(location, "secondary"))

    name = QLineEdit()
    name.setProperty("onixSearch", True)
    name.setPlaceholderText("Nome da pasta")
    layout.addWidget(name)

    actions = QHBoxLayout()
    actions.addStretch()

    cancel = WorkspaceButton("Cancelar")
    cancel.clicked.connect(dialog.reject)
    actions.addWidget(cancel)

    create = WorkspaceButton("Criar pasta", primary=True)
    create.setDefault(True)
    create.setEnabled(False)
    name.textChanged.connect(lambda text: create.setEnabled(bool(text.strip())))

    def save() -> None:
        try:
            add_folder(name.text())
        except (DuplicateFolderNameError, InvalidFolderNameError) as error:
            QMessageBox.warning(dialog, "Nova pasta", str(error))
        else:
            dialog.accept()

    create.clicked.connect(save)
    actions.addWidget(create)
    layout.addLayout(actions)

    name.setFocus()
    dialog.exec()
