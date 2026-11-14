"""Cores do tema claro, geradas com QSSBuilder."""

from src.builders.qss import QSSBuilder
from src.models.qss.rule import QSSRule, QSSRuleProperty, QSSSelector, QSSStrResult
from src.ui import styles as tokens
from src.ui.themes import account

Colors = tokens.LightColors


def build_stylesheet() -> QSSStrResult:
    global_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QWidget"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.Text.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QMainWindow"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Surface.to_hex()),
            ],
        ),
    ]

    title_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageTitle"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextHeading.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageBreadcrumb"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
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
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
            ],
        ),
    ]

    account_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountSubtitle"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
            ],
        ),
    ]

    primary_button_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Primary.to_hex()),
                QSSRuleProperty("color", Colors.TextOnPrimary.to_hex()),
                QSSRuleProperty("border-color", Colors.Primary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.PrimaryHover.to_hex()),
                QSSRuleProperty("border-color", Colors.PrimaryHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.PrimaryPressed.to_hex()),
                QSSRuleProperty("border-color", Colors.PrimaryPressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.PrimaryFocus.to_hex()),
            ],
        ),
    ]

    navigation_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceSidebar.to_hex()),
                QSSRuleProperty("border-right-color", Colors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", tokens.QSS_TRANSPARENT),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.NavigationHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:checked"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Selection.to_hex()),
                QSSRuleProperty("color", Colors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#NavigationIndicator"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Accent.to_hex()),
            ],
        ),
    ]

    table_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Surface.to_hex()),
                QSSRuleProperty("color", Colors.Text.to_hex()),
                QSSRuleProperty("selection-background-color", Colors.Selection.to_hex()),
                QSSRuleProperty("selection-color", Colors.SelectionText.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable::item"),
            ],
            rules=[
                QSSRuleProperty("border-bottom-color", Colors.BorderTableRow.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Surface.to_hex()),
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
                QSSRuleProperty("border-bottom-color", Colors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#ResultsSummary"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
            ],
        ),
    ]

    title_bar_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#TitleBar"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceSidebar.to_hex()),
                QSSRuleProperty("border-bottom-color", Colors.Border.to_hex()),
            ],
        ),
    ]

    search_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceInput.to_hex()),
                QSSRuleProperty("color", Colors.Text.to_hex()),
                QSSRuleProperty("border-color", Colors.BorderInput.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.Accent.to_hex()),
            ],
        ),
    ]

    empty_state_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateDescription"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
            ],
        ),
    ]

    sync_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceButton.to_hex()),
                QSSRuleProperty("color", Colors.Accent.to_hex()),
                QSSRuleProperty("border-color", Colors.BorderButton.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceButtonHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceButtonPressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusText"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.Text.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusTime"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#SyncStatusDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.DividerSyncStatus.to_hex()),
            ],
        ),
    ]

    view_mode_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]'),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceButton.to_hex()),
                QSSRuleProperty("border-color", Colors.BorderViewMode.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:hover'),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceButtonHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:checked'),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Selection.to_hex()),
                QSSRuleProperty("border-color", Colors.BorderViewModeChecked.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:focus'),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:disabled'),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceDisabled.to_hex()),
                QSSRuleProperty("border-color", Colors.Border.to_hex()),
            ],
        ),
    ]

    details_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#FolderDetails"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceDetails.to_hex()),
                QSSRuleProperty("border-left-color", Colors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsSubtitle"),
                QSSSelector('QLabel[role="details-field-label"]'),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceCloseHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceClosePressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", Colors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#DetailsDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Border.to_hex()),
            ],
        ),
    ]

    local_storage_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#LocalStorageDescription"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceButton.to_hex()),
                QSSRuleProperty("color", Colors.Accent.to_hex()),
                QSSRuleProperty("border-color", Colors.BorderButton.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton:disabled"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextDisabled.to_hex()),
                QSSRuleProperty("border-color", Colors.Border.to_hex()),
            ],
        ),
    ]

    storage_progress_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#StorageDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#StorageUsage"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.ProgressTrack.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress::chunk"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.ProgressFill.to_hex()),
            ],
        ),
    ]

    footer_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QStatusBar#AppFooter"),
            ],
            rules=[
                QSSRuleProperty("background-color", Colors.SurfaceDetails.to_hex()),
                QSSRuleProperty("border-top-color", Colors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#FooterCount"),
                QSSSelector("QLabel#FooterConnection"),
            ],
            rules=[
                QSSRuleProperty("color", Colors.Text.to_hex()),
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
        *account.color_rules(Colors),
    ]
    return QSSBuilder(rules).build()


if __name__ == "__main__":
    build_stylesheet().print_color_full()
