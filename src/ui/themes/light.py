"""Cores do tema claro, geradas com QSSBuilder."""

from typing import Final

from src.builders.qss import QSSBuilder
from src.models.qss.rule import QSSRule, QSSRuleProperty, QSSSelector, QSSStrResult
from src.ui.themes import account, tokens
from src.ui.themes.palette import ThemeColors
from src.ui.themes.utils.color import Color

LightColors: Final = ThemeColors(
    Text=Color("#202128"),
    TextHeading=Color("#202128"),
    TextSecondary=Color("#5f6572"),
    TextDisabled=Color("#747986"),
    TextOnPrimary=Color("#ffffff"),
    TextMuted=Color("#3c404c"),
    Surface=Color("#ffffff"),
    SurfaceSidebar=Color("#f3f4f6"),
    SurfaceDetails=Color("#f3f4f6"),
    SurfaceInput=Color("#f3f4f6"),
    SurfaceDialogButton=Color("#f7f8fa"),
    Primary=Color("#515bc0"),
    PrimaryHover=Color("#4852b2"),
    PrimaryPressed=Color("#40499f"),
    PrimaryFocus=Color("#545ec5"),
    Accent=Color("#515bc0"),
    NavigationHover=Color("#e6e8ef"),
    Selection=Color("#ebedff"),
    SelectionText=Color("#202128"),
    Border=Color("#e4e6eb"),
    BorderTableRow=Color("#e4e6eb"),
    BorderInput=Color("#d5d8e0"),
    SurfaceButton=Color("#f7f8fa"),
    SurfaceButtonHover=Color("#e6e8ef"),
    SurfaceButtonPressed=Color("#d5d8e0"),
    BorderButton=Color("#d5d8e0"),
    BorderViewMode=Color("#d5d8e0"),
    BorderViewModeChecked=Color("#545ec5"),
    SurfaceDisabled=Color("#f3f4f6"),
    SurfaceCloseHover=Color("#e6e8ef"),
    SurfaceClosePressed=Color("#d5d8e0"),
    DividerSyncStatus=Color("#e4e6eb"),
    ProgressTrack=Color("#e4e6eb"),
    ProgressFill=Color("#515bc0"),
    Success=Color("#26804b"),
    SwitchTrack=Color("#747986"),
    SwitchThumb=Color("#ffffff"),
    SurfaceRaised=Color("#f7f8fa"),
    SurfacePreview=Color("#eceef3"),
    BrandBackground=Color("#e7e9fc"),
    BrandForeground=Color("#515bc0"),
    OneDrive=Color("#535ec5"),
    GoogleDrive=Color("#55703f"),
    Dropbox=Color("#496581"),
)


def build_stylesheet() -> QSSStrResult:
    global_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QWidget"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.Text.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QMainWindow"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Surface.to_hex()),
            ],
        ),
    ]

    title_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageTitle"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextHeading.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageBreadcrumb"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
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
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
            ],
        ),
    ]

    account_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountSubtitle"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
            ],
        ),
    ]

    primary_button_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Primary.to_hex()),
                QSSRuleProperty("color", LightColors.TextOnPrimary.to_hex()),
                QSSRuleProperty("border-color", LightColors.Primary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.PrimaryHover.to_hex()),
                QSSRuleProperty("border-color", LightColors.PrimaryHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.PrimaryPressed.to_hex()),
                QSSRuleProperty("border-color", LightColors.PrimaryPressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", LightColors.PrimaryFocus.to_hex()),
            ],
        ),
    ]

    navigation_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceSidebar.to_hex()),
                QSSRuleProperty("border-right-color", LightColors.Border.to_hex()),
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
                QSSRuleProperty("background-color", LightColors.NavigationHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:checked"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Selection.to_hex()),
                QSSRuleProperty("color", LightColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", LightColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#NavigationIndicator"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Accent.to_hex()),
            ],
        ),
    ]

    table_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Surface.to_hex()),
                QSSRuleProperty("color", LightColors.Text.to_hex()),
                QSSRuleProperty("selection-background-color", LightColors.Selection.to_hex()),
                QSSRuleProperty("selection-color", LightColors.SelectionText.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable::item"),
            ],
            rules=[
                QSSRuleProperty("border-bottom-color", LightColors.BorderTableRow.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Surface.to_hex()),
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
                QSSRuleProperty("border-bottom-color", LightColors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#ResultsSummary"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
            ],
        ),
    ]

    title_bar_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#TitleBar"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceSidebar.to_hex()),
                QSSRuleProperty("border-bottom-color", LightColors.Border.to_hex()),
            ],
        ),
    ]

    search_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceInput.to_hex()),
                QSSRuleProperty("color", LightColors.Text.to_hex()),
                QSSRuleProperty("border-color", LightColors.BorderInput.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", LightColors.Accent.to_hex()),
            ],
        ),
    ]

    empty_state_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateDescription"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
            ],
        ),
    ]

    sync_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceButton.to_hex()),
                QSSRuleProperty("color", LightColors.Accent.to_hex()),
                QSSRuleProperty("border-color", LightColors.BorderButton.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceButtonHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceButtonPressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", LightColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusText"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.Text.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusTime"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#SyncStatusDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.DividerSyncStatus.to_hex()),
            ],
        ),
    ]

    view_mode_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]'),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceButton.to_hex()),
                QSSRuleProperty("border-color", LightColors.BorderViewMode.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:hover'),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceButtonHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:checked'),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Selection.to_hex()),
                QSSRuleProperty("border-color", LightColors.BorderViewModeChecked.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:focus'),
            ],
            rules=[
                QSSRuleProperty("border-color", LightColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]:disabled'),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceDisabled.to_hex()),
                QSSRuleProperty("border-color", LightColors.Border.to_hex()),
            ],
        ),
    ]

    details_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#FolderDetails"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceDetails.to_hex()),
                QSSRuleProperty("border-left-color", LightColors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsSubtitle"),
                QSSSelector('QLabel[role="details-field-label"]'),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:hover"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceCloseHover.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:pressed"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceClosePressed.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton:focus"),
            ],
            rules=[
                QSSRuleProperty("border-color", LightColors.Accent.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#DetailsDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Border.to_hex()),
            ],
        ),
    ]

    local_storage_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#LocalStorageDescription"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceButton.to_hex()),
                QSSRuleProperty("color", LightColors.Accent.to_hex()),
                QSSRuleProperty("border-color", LightColors.BorderButton.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton:disabled"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextDisabled.to_hex()),
                QSSRuleProperty("border-color", LightColors.Border.to_hex()),
            ],
        ),
    ]

    storage_progress_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#StorageDivider"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#StorageUsage"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.TextSecondary.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.ProgressTrack.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress::chunk"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.ProgressFill.to_hex()),
            ],
        ),
    ]

    footer_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QStatusBar#AppFooter"),
            ],
            rules=[
                QSSRuleProperty("background-color", LightColors.SurfaceDetails.to_hex()),
                QSSRuleProperty("border-top-color", LightColors.Border.to_hex()),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#FooterCount"),
                QSSSelector("QLabel#FooterConnection"),
            ],
            rules=[
                QSSRuleProperty("color", LightColors.Text.to_hex()),
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
        *account.color_rules(LightColors),
    ]
    return QSSBuilder(rules).build()


if __name__ == "__main__":
    build_stylesheet().print_color_full()
