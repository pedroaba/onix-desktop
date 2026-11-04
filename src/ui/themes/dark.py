"""Cores do tema escuro, geradas com QSSBuilder."""

from src.builders.qss import QSSBuilder
from src.models.qss.rule import QSSRule, QSSRuleProperty, QSSSelector, QSSStrResult
from src.ui.themes import constants as tokens

COLORS = tokens.DARK_COLORS


def build_stylesheet() -> QSSStrResult:
    global_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QWidget"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QMainWindow"),
                QSSSelector("QDialog"),
                QSSSelector("QMessageBox"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface),
            ],
        ),
    ]

    title_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageTitle"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_heading),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageBreadcrumb"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
    ]

    description_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageDescription"),
                QSSSelector("QLabel#LocalDescriptionLabel"),
                QSSSelector("QLabel#AccountName"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
    ]

    account_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountSubtitle"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
    ]

    primary_button_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.primary),
                QSSRuleProperty("color", COLORS.text_on_primary),
                QSSRuleProperty("border-color", COLORS.primary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.primary_hover),
                QSSRuleProperty("border-color", COLORS.primary_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.primary_pressed),
                QSSRuleProperty("border-color", COLORS.primary_pressed),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", COLORS.primary_focus),
            ],
        ),
    ]

    navigation_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_sidebar),
                QSSRuleProperty("border-right-color", COLORS.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", tokens.TRANSPARENT),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.navigation_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:checked"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.selection),
                QSSRuleProperty("color", COLORS.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", COLORS.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#NavigationIndicator"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.accent),
            ],
        ),
    ]

    table_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface),
                QSSRuleProperty("color", COLORS.text),
                QSSRuleProperty("selection-background-color", COLORS.selection),
                QSSRuleProperty("selection-color", COLORS.selection_text),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable::item"),
            ],
            rules=[
                QSSRuleProperty("border-bottom-color", COLORS.border_table_row),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface),
                QSSRuleProperty("color", COLORS.text_secondary),
                QSSRuleProperty("border-bottom-color", COLORS.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#ResultsSummary"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
    ]

    title_bar_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#TitleBar"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_sidebar),
                QSSRuleProperty("border-bottom-color", COLORS.border),
            ],
        ),
    ]

    search_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_input),
                QSSRuleProperty("color", COLORS.text),
                QSSRuleProperty("border-color", COLORS.border_input),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", COLORS.accent),
            ],
        ),
    ]

    empty_state_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateDescription"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
    ]

    sync_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_button),
                QSSRuleProperty("color", COLORS.accent),
                QSSRuleProperty("border-color", COLORS.border_button),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_button_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_button_pressed),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", COLORS.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusText"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusTime"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#SyncStatusDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.divider_sync_status),
            ],
        ),
    ]

    view_mode_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]'),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_button),
                QSSRuleProperty("border-color", COLORS.border_view_mode),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:hover'),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_button_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:checked'),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.selection),
                QSSRuleProperty("border-color", COLORS.border_view_mode_checked),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:focus'),
            ],
            rules=[
                QSSRuleProperty("border-color", COLORS.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:disabled'),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_disabled),
                QSSRuleProperty("border-color", COLORS.border),
            ],
        ),
    ]

    details_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#FolderDetails"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_details),
                QSSRuleProperty("border-left-color", COLORS.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsSubtitle"),
                QSSSelector('QLabel[role="details-field-label"]'),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_close_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_close_pressed),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", COLORS.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#DetailsDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.border),
            ],
        ),
    ]

    local_storage_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#LocalStorageDescription"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_button),
                QSSRuleProperty("color", COLORS.accent),
                QSSRuleProperty("border-color", COLORS.border_button),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton:disabled"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_disabled),
                QSSRuleProperty("border-color", COLORS.border),
            ],
        ),
    ]

    storage_progress_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#StorageDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#StorageUsage"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text_secondary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.progress_track),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress::chunk"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.progress_fill),
            ],
        ),
    ]

    footer_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QStatusBar#AppFooter"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_details),
                QSSRuleProperty("border-top-color", COLORS.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#FooterCount"),
                QSSSelector("QLabel#FooterConnection"),
            ],
            rules=[
                QSSRuleProperty("color", COLORS.text),
            ],
        ),
    ]

    dialog_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_input),
                QSSRuleProperty("color", COLORS.text),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QDialog QPushButton"),
                QSSSelector("QMessageBox QPushButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", COLORS.surface_dialog_button),
                QSSRuleProperty("color", COLORS.text),
            ],
        ),
    ]

    rules: list[QSSRule] = [
        *global_rules,
        *title_rules,
        *description_rules,
        *account_rules,
        *primary_button_rules,
        *navigation_rules,
        *table_rules,
        *title_bar_rules,
        *search_rules,
        *empty_state_rules,
        *sync_rules,
        *view_mode_rules,
        *details_rules,
        *local_storage_rules,
        *storage_progress_rules,
        *footer_rules,
        *dialog_rules,
    ]
    return QSSBuilder(rules).build()


if __name__ == "__main__":
    build_stylesheet().print_color_full()
