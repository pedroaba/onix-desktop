"""Cores do tema claro, geradas com QSSBuilder."""

from src.builders.qss import QSSBuilder
from src.models.qss.rule import QSSRule, QSSRuleProperty, QSSSelector, QSSStrResult
from src.ui.themes import constants as tokens

Colors = tokens.LIGHT_COLORS


def build_stylesheet() -> QSSStrResult:
    global_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QWidget"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QMainWindow"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface),
            ],
        ),
    ]

    title_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageTitle"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_heading),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageBreadcrumb"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_secondary),
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
                QSSRuleProperty("color", Colors.text_secondary),
            ],
        ),
    ]

    account_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountSubtitle"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_secondary),
            ],
        ),
    ]

    primary_button_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.primary),
                QSSRuleProperty("color", Colors.text_on_primary),
                QSSRuleProperty("border-color", Colors.primary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.primary_hover),
                QSSRuleProperty("border-color", Colors.primary_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.primary_pressed),
                QSSRuleProperty("border-color", Colors.primary_pressed),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.primary_focus),
            ],
        ),
    ]

    navigation_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_sidebar),
                QSSRuleProperty("border-right-color", Colors.border),
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
                QSSRuleProperty("background-color", Colors.navigation_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:checked"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.selection),
                QSSRuleProperty("color", Colors.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#NavigationIndicator"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.accent),
            ],
        ),
    ]

    table_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface),
                QSSRuleProperty("color", Colors.text),
                QSSRuleProperty("selection-background-color", Colors.selection),
                QSSRuleProperty("selection-color", Colors.selection_text),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable::item"),
            ],
            rules=[
                QSSRuleProperty("border-bottom-color", Colors.border_table_row),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface),
                QSSRuleProperty("color", Colors.text_secondary),
                QSSRuleProperty("border-bottom-color", Colors.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#ResultsSummary"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_secondary),
            ],
        ),
    ]

    title_bar_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#TitleBar"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_sidebar),
                QSSRuleProperty("border-bottom-color", Colors.border),
            ],
        ),
    ]

    search_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_input),
                QSSRuleProperty("color", Colors.text),
                QSSRuleProperty("border-color", Colors.border_input),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.accent),
            ],
        ),
    ]

    empty_state_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateDescription"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_secondary),
            ],
        ),
    ]

    sync_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_button),
                QSSRuleProperty("color", Colors.accent),
                QSSRuleProperty("border-color", Colors.border_button),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_button_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_button_pressed),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusText"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusTime"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_secondary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#SyncStatusDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.divider_sync_status),
            ],
        ),
    ]

    view_mode_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]'),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_button),
                QSSRuleProperty("border-color", Colors.border_view_mode),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:hover'),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_button_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:checked'),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.selection),
                QSSRuleProperty("border-color", Colors.border_view_mode_checked),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:focus'),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:disabled'),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_disabled),
                QSSRuleProperty("border-color", Colors.border),
            ],
        ),
    ]

    details_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#FolderDetails"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_details),
                QSSRuleProperty("border-left-color", Colors.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsSubtitle"),
                QSSSelector('QLabel[role="details-field-label"]'),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_secondary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_close_hover),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_close_pressed),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.accent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#DetailsDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.border),
            ],
        ),
    ]

    local_storage_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#LocalStorageDescription"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_secondary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_button),
                QSSRuleProperty("color", Colors.accent),
                QSSRuleProperty("border-color", Colors.border_button),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton:disabled"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_disabled),
                QSSRuleProperty("border-color", Colors.border),
            ],
        ),
    ]

    storage_progress_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#StorageDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#StorageUsage"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text_secondary),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.progress_track),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress::chunk"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.progress_fill),
            ],
        ),
    ]

    footer_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QStatusBar#AppFooter"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.surface_details),
                QSSRuleProperty("border-top-color", Colors.border),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#FooterCount"),
                QSSSelector("QLabel#FooterConnection"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.text),
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
    ]
    return QSSBuilder(rules).build()


if __name__ == "__main__":
    build_stylesheet().print_color_full()
