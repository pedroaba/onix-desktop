from PySide6.QtWidgets import QDialog, QLineEdit, QListWidget, QVBoxLayout, QWidget

from src.models.folder import Folder
from src.ui.components.workspace_controls import label


def quick_search(parent: QWidget, query: str, items: list[Folder]) -> str | Folder | None:
    dialog = QDialog(parent)
    dialog.setProperty("onixDialog", True)
    dialog.setWindowTitle("Busca rápida")
    dialog.setMinimumWidth(500)

    layout = QVBoxLayout(dialog)

    search = QLineEdit(query)
    search.setProperty("onixSearch", True)
    search.setPlaceholderText("Buscar arquivos e pastas…")
    search.selectAll()
    search.returnPressed.connect(dialog.accept)
    layout.addWidget(search)

    results = QListWidget()
    results.setObjectName("OnixSearchResults")
    layout.addWidget(results)

    matches: list[Folder] = []
    chosen: list[Folder] = []

    def update_results(text: str) -> None:
        matches[:] = [item for item in items if text.strip().casefold() in item.name.casefold()][:6]
        results.clear()

        for item in matches:
            results.addItem(f"{item.name}    ·    {item.provider}")

    def open_result() -> None:
        row = results.currentRow()
        if row >= 0:
            chosen.append(matches[row])
            dialog.accept()

    results.itemActivated.connect(open_result)
    search.textChanged.connect(update_results)
    update_results(search.text())

    layout.addWidget(label("Enter para buscar  ·  Esc para fechar", "caption"))

    if dialog.exec() == QDialog.DialogCode.Accepted:
        return chosen[0] if chosen else search.text()
    return None
