"""Tipografia, medidas e estrutura, geradas com QSSBuilder."""

from PySide6.QtGui import QFontDatabase, QGuiApplication

from src.builders.qss import QSSBuilder
from src.models.qss.rule import QSSRule, QSSRuleProperty, QSSSelector, QSSStrResult
from src.ui import styles as tokens
from src.ui.themes import account


def build_stylesheet() -> QSSStrResult:
    font_family = tokens.FontFamily.Default
    if QGuiApplication.instance() is not None and QFontDatabase.hasFamily("Inter"):
        font_family = tokens.FontFamily.Preferred

    global_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QWidget"),
            ],
            rules=[
                QSSRuleProperty("font-family", font_family),
                QSSRuleProperty("font-size", tokens.FontSize.Body),
            ],
        ),
    ]

    title_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageBreadcrumb"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AppTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Heading),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.PageTitle),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
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
                QSSRuleProperty("font-size", tokens.FontSize.Heading),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
            ],
        ),
    ]

    description_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#PageDescription"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Body),
            ],
        ),
    ]

    account_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountName"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Heading),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#AccountSubtitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
            ],
        ),
    ]

    primary_button_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#PrimaryButton"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Heading),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Small),
                QSSRuleProperty("padding", f"{tokens.Space.Px10} {tokens.Space.Px16}"),
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
                QSSRuleProperty("border-right", tokens.Border.Transparent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton"),
            ],
            rules=[
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Small),
                QSSRuleProperty("padding", f"{tokens.Space.Px10} {tokens.Space.Px12}"),
                QSSRuleProperty("text-align", "left"),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#Sidebar QPushButton:checked"),
            ],
            rules=[
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QFrame#NavigationIndicator"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-radius", tokens.Radius.Small),
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
                QSSRuleProperty("padding", tokens.Space.Px8),
                QSSRuleProperty("border-bottom", tokens.Border.Transparent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
                QSSRuleProperty("padding", tokens.Space.Px12),
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-bottom", tokens.Border.Transparent),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#ResultsSummary"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
                QSSRuleProperty("padding-top", tokens.Space.Px8),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QTableView#FolderTable QHeaderView::section"),
            ],
            rules=[
                QSSRuleProperty("font-weight", tokens.FontWeight.Regular),
                QSSRuleProperty("padding", tokens.Space.Px12),
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-bottom", tokens.Border.Transparent),
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
                QSSRuleProperty("border-bottom", tokens.Border.Transparent),
            ],
        ),
    ]

    search_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLineEdit#SearchInput"),
            ],
            rules=[
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Small),
                QSSRuleProperty("padding", f"{tokens.Space.Px6} {tokens.Space.Px12}"),
            ],
        ),
    ]

    empty_state_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateTitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Heading),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#EmptyStateDescription"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
            ],
        ),
    ]

    sync_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#SyncButton"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Heading),
                QSSRuleProperty("font-weight", tokens.FontWeight.Regular),
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Small),
                QSSRuleProperty("padding", f"{tokens.Space.Px10} {tokens.Space.Px16}"),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusText"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Body),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#SyncStatusTime"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
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
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Small),
                QSSRuleProperty("padding", tokens.Space.Zero),
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
                QSSRuleProperty("border-left", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Zero),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsFolderName"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.DetailsTitle),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#DetailsSubtitle"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Body),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector('QLabel[role="details-field-label"]'),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Body),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#CloseDetailsButton"),
            ],
            rules=[
                QSSRuleProperty("background-color", tokens.QSS_TRANSPARENT),
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Small),
                QSSRuleProperty("padding", tokens.Space.Zero),
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
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QPushButton#FreeSpaceButton"),
            ],
            rules=[
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Small),
                QSSRuleProperty("padding", f"{tokens.Space.Px8} {tokens.Space.Px16}"),
            ],
        ),
    ]

    storage_progress_rules: list[QSSRule] = [
        QSSRule(
            selectors=[
                QSSSelector("QLabel#LocalStorageHeading"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Heading),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
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
                QSSRuleProperty("font-size", tokens.FontSize.Body),
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QLabel#StorageUsage"),
            ],
            rules=[
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
                QSSRuleProperty("font-weight", tokens.FontWeight.Regular),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress"),
            ],
            rules=[
                QSSRuleProperty("border", "none"),
                QSSRuleProperty("border-radius", tokens.Radius.Medium),
            ],
        ),
        QSSRule(
            selectors=[
                QSSSelector("QProgressBar#StorageProgress::chunk"),
            ],
            rules=[
                QSSRuleProperty("border-radius", tokens.Radius.Medium),
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
                QSSRuleProperty("border-top", tokens.Border.Transparent),
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
                QSSRuleProperty("font-size", tokens.FontSize.Caption),
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
        *account.base_rules(),
    ]
    return QSSBuilder(rules).build()


if __name__ == "__main__":
    build_stylesheet().print_color_full()
