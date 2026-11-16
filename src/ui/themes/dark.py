"""Cores do tema escuro, geradas com QSSBuilder."""

from typing import Final

from src.builders.qss import QSSBuilder
from src.models.qss.rule import QSSRule, QSSRuleProperty, QSSSelector, QSSStrResult
from src.ui.themes import account, tokens
from src.ui.themes.palette import ThemeColors
from src.ui.themes.utils.color import Color

DarkColors: Final = ThemeColors(
    Text=Color("#f7f8f8"),
    TextHeading=Color("#f7f8f8"),
    TextSecondary=Color("#8a8f98"),
    TextDisabled=Color("#8a8f98"),
    TextOnPrimary=Color("#ffffff"),
    TextMuted=Color("#d0d6e0"),
    Surface=Color("#141516"),
    SurfaceSidebar=Color("#0f1011"),
    SurfaceDetails=Color("#0f1011"),
    SurfaceInput=Color("#0f1011"),
    SurfaceDialogButton=Color("#191a1b"),
    Primary=Color("#5e6ad2"),
    PrimaryHover=Color("#5762c3"),
    PrimaryPressed=Color("#4e58b5"),
    PrimaryFocus=Color("#828fff"),
    Accent=Color("#a8aef6"),
    NavigationHover=Color("#202126"),
    Selection=Color("#222437"),
    SelectionText=Color("#f7f8f8"),
    Border=Color("#25262a"),
    BorderTableRow=Color("#25262a"),
    BorderInput=Color("#34343a"),
    SurfaceButton=Color("#191a1b"),
    SurfaceButtonHover=Color("#202126"),
    SurfaceButtonPressed=Color("#25262a"),
    BorderButton=Color("#34343a"),
    BorderViewMode=Color("#34343a"),
    BorderViewModeChecked=Color("#828fff"),
    SurfaceDisabled=Color("#141516"),
    SurfaceCloseHover=Color("#202126"),
    SurfaceClosePressed=Color("#25262a"),
    DividerSyncStatus=Color("#25262a"),
    ProgressTrack=Color("#34343a"),
    ProgressFill=Color("#828fff"),
    Success=Color("#65ba85"),
    SwitchTrack=Color("#5f6572"),
    SwitchThumb=Color("#ffffff"),
    SurfaceRaised=Color("#191a1b"),
    SurfacePreview=Color("#111214"),
    BrandBackground=Color("#24263a"),
    BrandForeground=Color("#a8aef6"),
    OneDrive=Color("#98a4ef"),
    GoogleDrive=Color("#b4bca2"),
    Dropbox=Color("#a3b5cc"),
)


def build_stylesheet() -> QSSStrResult:
    global_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QWidget"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.Text.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QMainWindow"),
                QSSSelector("QDialog"),
                QSSSelector("QMessageBox"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Surface.to_hex()),
            ],
        ),
    ]

    title_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageTitle"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextHeading.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageBreadcrumb"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
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
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
            ],
        ),
    ]

    account_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountSubtitle"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
            ],
        ),
    ]

    primary_button_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Primary.to_hex()),
                QSSRuleProperty("color", DarkColors.TextOnPrimary.to_hex()),
                QSSRuleProperty("border-color", DarkColors.Primary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.PrimaryHover.to_hex()),
                QSSRuleProperty("border-color", DarkColors.PrimaryHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.PrimaryPressed.to_hex()),
                QSSRuleProperty("border-color", DarkColors.PrimaryPressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", DarkColors.PrimaryFocus.to_hex()),
            ],
        ),
    ]

    navigation_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceSidebar.to_hex()),
                QSSRuleProperty("border-right-color", DarkColors.Border.to_hex()),
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
                QSSRuleProperty("background-color", DarkColors.NavigationHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:checked"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Selection.to_hex()),
                QSSRuleProperty("color", DarkColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", DarkColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#NavigationIndicator"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Accent.to_hex()),
            ],
        ),
    ]

    table_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Surface.to_hex()),
                QSSRuleProperty("color", DarkColors.Text.to_hex()),
                QSSRuleProperty("selection-background-color", DarkColors.Selection.to_hex()),
                QSSRuleProperty("selection-color", DarkColors.SelectionText.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable::item"),
            ],
            rules=[
                QSSRuleProperty("border-bottom-color", DarkColors.BorderTableRow.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Surface.to_hex()),
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
                QSSRuleProperty("border-bottom-color", DarkColors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#ResultsSummary"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
            ],
        ),
    ]

    title_bar_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#TitleBar"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceSidebar.to_hex()),
                QSSRuleProperty("border-bottom-color", DarkColors.Border.to_hex()),
            ],
        ),
    ]

    search_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceInput.to_hex()),
                QSSRuleProperty("color", DarkColors.Text.to_hex()),
                QSSRuleProperty("border-color", DarkColors.BorderInput.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", DarkColors.Accent.to_hex()),
            ],
        ),
    ]

    empty_state_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateDescription"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
            ],
        ),
    ]

    sync_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceButton.to_hex()),
                QSSRuleProperty("color", DarkColors.Accent.to_hex()),
                QSSRuleProperty("border-color", DarkColors.BorderButton.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceButtonHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceButtonPressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", DarkColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusText"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.Text.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusTime"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#SyncStatusDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.DividerSyncStatus.to_hex()),
            ],
        ),
    ]

    view_mode_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]'),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceButton.to_hex()),
                QSSRuleProperty("border-color", DarkColors.BorderViewMode.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:hover'),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceButtonHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:checked'),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Selection.to_hex()),
                QSSRuleProperty("border-color", DarkColors.BorderViewModeChecked.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:focus'),
            ],
            rules=[
                QSSRuleProperty("border-color", DarkColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:disabled'),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceDisabled.to_hex()),
                QSSRuleProperty("border-color", DarkColors.Border.to_hex()),
            ],
        ),
    ]

    details_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#FolderDetails"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceDetails.to_hex()),
                QSSRuleProperty("border-left-color", DarkColors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsSubtitle"),
                QSSSelector('QLabel[role="details-field-label"]'),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceCloseHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceClosePressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", DarkColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#DetailsDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Border.to_hex()),
            ],
        ),
    ]

    local_storage_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#LocalStorageDescription"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceButton.to_hex()),
                QSSRuleProperty("color", DarkColors.Accent.to_hex()),
                QSSRuleProperty("border-color", DarkColors.BorderButton.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton:disabled"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextDisabled.to_hex()),
                QSSRuleProperty("border-color", DarkColors.Border.to_hex()),
            ],
        ),
    ]

    storage_progress_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#StorageDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#StorageUsage"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.ProgressTrack.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress::chunk"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.ProgressFill.to_hex()),
            ],
        ),
    ]

    footer_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QStatusBar#AppFooter"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceDetails.to_hex()),
                QSSRuleProperty("border-top-color", DarkColors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#FooterCount"),
                QSSSelector("QLabel#FooterConnection"),
            ],
            rules=[
                QSSRuleProperty("color", DarkColors.Text.to_hex()),
            ],
        ),
    ]

    dialog_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceInput.to_hex()),
                QSSRuleProperty("color", DarkColors.Text.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QDialog QPushButton"),
                QSSSelector("QMessageBox QPushButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", DarkColors.SurfaceDialogButton.to_hex()),
                QSSRuleProperty("color", DarkColors.Text.to_hex()),
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
        *account.color_rules(DarkColors),
    ]
    return QSSBuilder(rules).build()


if __name__ == "__main__":
    build_stylesheet().print_color_full()
