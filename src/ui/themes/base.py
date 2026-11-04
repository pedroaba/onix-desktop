"""Tipografia, medidas e estrutura, geradas com QSSBuilder."""

from src.builders.qss import QSSBuilder
from src.models.qss.rule import QSSRule, QSSRuleProperty, QSSSelector, QSSStrResult
from src.ui.themes import constants as tokens


def build_stylesheet() -> QSSStrResult:
    global_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QWidget"),
            ],
            rules=[
                QSSRuleProperty("font-family", tokens.FONT_FAMILY),
                QSSRuleProperty("font-size", tokens.FONT_SIZE_BODY),
            ],
        ),
    ]

    title_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_PAGE_TITLE_COMPACT),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageBreadcrumb"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AppTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_HEADING),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_PAGE_TITLE),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
    ]

    heading_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SidebarTitle"),
                QSSSelector("QLabel#DetailsHeading"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_HEADING),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
    ]

    description_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageDescription"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_BODY),
            ],
        ),
    ]

    account_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountName"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_HEADING),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountSubtitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
            ],
        ),
    ]

    primary_button_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_HEADING),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
                QSSRuleProperty("border", tokens.BORDER_TRANSPARENT),
                QSSRuleProperty("border-radius", tokens.RADIUS_SMALL),
                QSSRuleProperty("padding", f"{tokens.SPACE_10} {tokens.SPACE_16}"),
            ],
        ),
    ]

    navigation_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-right", tokens.BORDER_TRANSPARENT),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton"),
            ],
            rules=[
                QSSRuleProperty("border", tokens.BORDER_TRANSPARENT),
                QSSRuleProperty("border-radius", tokens.RADIUS_SMALL),
                QSSRuleProperty("padding", f"{tokens.SPACE_10} {tokens.SPACE_12}"),
                QSSRuleProperty("text-align", "left"),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:checked"),
            ],
            rules=[
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#NavigationIndicator"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-radius", tokens.RADIUS_SMALL),
            ],
        ),
    ]

    table_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable::item"),
            ],
            rules=[
                QSSRuleProperty("padding", tokens.SPACE_8),
                QSSRuleProperty("border-bottom", tokens.BORDER_TRANSPARENT),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
                QSSRuleProperty("padding", tokens.SPACE_12),
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-bottom", tokens.BORDER_TRANSPARENT),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#ResultsSummary"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
                QSSRuleProperty("padding-top", tokens.SPACE_8),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_REGULAR),
                QSSRuleProperty("padding", tokens.SPACE_12),
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-bottom", tokens.BORDER_TRANSPARENT),
            ],
        ),
    ]

    title_bar_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#TitleBar"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-bottom", tokens.BORDER_TRANSPARENT),
            ],
        ),
    ]

    search_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput"),
            ],
            rules=[
                QSSRuleProperty("border", tokens.BORDER_TRANSPARENT),
                QSSRuleProperty("border-radius", tokens.RADIUS_SMALL),
                QSSRuleProperty("padding", f"{tokens.SPACE_6} {tokens.SPACE_12}"),
            ],
        ),
    ]

    empty_state_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_HEADING),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateDescription"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
            ],
        ),
    ]

    sync_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_HEADING),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_REGULAR),
                QSSRuleProperty("border", tokens.BORDER_TRANSPARENT),
                QSSRuleProperty("border-radius", tokens.RADIUS_SMALL),
                QSSRuleProperty("padding", f"{tokens.SPACE_10} {tokens.SPACE_16}"),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusText"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_BODY),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusTime"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#SyncStatusDivider"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
            ],
        ),
    ]

    view_mode_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector('QPushButton[role="view-mode"]'),
            ],
            rules=[
                QSSRuleProperty("border", tokens.BORDER_TRANSPARENT),
                QSSRuleProperty("border-radius", tokens.RADIUS_SMALL),
                QSSRuleProperty("padding", tokens.SPACE_NONE),
            ],
        ),
    ]

    details_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QFrame#FolderDetails"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-left", tokens.BORDER_TRANSPARENT),
                QSSRuleProperty("border-radius", tokens.RADIUS_NONE),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsFolderName"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_DETAILS_TITLE),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsSubtitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_BODY),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QLabel[role="details-field-label"]'),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_BODY),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", tokens.TRANSPARENT),
                QSSRuleProperty("border", tokens.BORDER_TRANSPARENT),
                QSSRuleProperty("border-radius", tokens.RADIUS_SMALL),
                QSSRuleProperty("padding", tokens.SPACE_NONE),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#DetailsDivider"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
            ],
        ),
    ]

    local_storage_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#LocalStorageDescription"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton"),
            ],
            rules=[
                QSSRuleProperty("border", tokens.BORDER_TRANSPARENT),
                QSSRuleProperty("border-radius", tokens.RADIUS_SMALL),
                QSSRuleProperty("padding", f"{tokens.SPACE_8} {tokens.SPACE_16}"),
            ],
        ),
    ]

    storage_progress_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#LocalStorageHeading"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_HEADING),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#StorageDivider"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#StorageHeading"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_BODY),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_SEMIBOLD),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#StorageUsage"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
                QSSRuleProperty("font-weight", tokens.FONT_WEIGHT_REGULAR),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-radius", tokens.RADIUS_MEDIUM),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress::chunk"),
            ],
            rules=[
                QSSRuleProperty("border-radius", tokens.RADIUS_MEDIUM),
            ],
        ),
    ]

    footer_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QStatusBar#AppFooter"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-top", tokens.BORDER_TRANSPARENT),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QStatusBar#AppFooter::item"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#FooterCount"),
                QSSSelector("QLabel#FooterConnection"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FONT_SIZE_CAPTION),
            ],
        ),
    ]

    rules: list[QSSRule] = [
        *global_rules,
        *title_rules,
        *heading_rules,
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
