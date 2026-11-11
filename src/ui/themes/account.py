"""Estilos do bloco de conta do OneDrive."""

from src.models.qss.rule import QSSRule, QSSRuleProperty, QSSSelector
from src.ui.themes import constants as tokens

_BUTTON = "QFrame#Sidebar QPushButton#AccountConnectionButton"


def base_rules() -> list[QSSRule]:
    return [
        QSSRule(
            selectors=[QSSSelector("QFrame#AccountHeader")],
            rules=[
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Medium),
            ],
        ),
        QSSRule(
            selectors=[QSSSelector(_BUTTON)],
            rules=[
                QSSRuleProperty("font-weight", tokens.FontWeight.Semibold),
                QSSRuleProperty("border", tokens.Border.Transparent),
                QSSRuleProperty("border-radius", tokens.Radius.Medium),
                QSSRuleProperty("padding", f"{tokens.Space.Px6} {tokens.Space.Px12}"),
                QSSRuleProperty("text-align", "center"),
            ],
        ),
    ]


def color_rules(colors: tokens.ThemeColors) -> list[QSSRule]:
    connected = f'{_BUTTON}[connected="true"]'
    return [
        QSSRule(
            selectors=[QSSSelector("QFrame#AccountHeader")],
            rules=[
                QSSRuleProperty("background-color", colors.SurfaceInput),
                QSSRuleProperty("border-color", colors.Border),
            ],
        ),
        QSSRule(
            selectors=[QSSSelector('QLabel#AccountSubtitle[connected="true"]')],
            rules=[QSSRuleProperty("color", colors.Success)],
        ),
        QSSRule(
            selectors=[QSSSelector(_BUTTON)],
            rules=[
                QSSRuleProperty("background-color", colors.Primary),
                QSSRuleProperty("color", colors.TextOnPrimary),
            ],
        ),
        QSSRule(
            selectors=[QSSSelector(f"{_BUTTON}:hover")],
            rules=[QSSRuleProperty("background-color", colors.PrimaryHover)],
        ),
        QSSRule(
            selectors=[QSSSelector(f"{_BUTTON}:pressed")],
            rules=[QSSRuleProperty("background-color", colors.PrimaryPressed)],
        ),
        QSSRule(
            selectors=[QSSSelector(connected)],
            rules=[
                QSSRuleProperty("background-color", colors.SurfaceButton),
                QSSRuleProperty("color", colors.TextSecondary),
                QSSRuleProperty("border-color", colors.BorderButton),
            ],
        ),
        QSSRule(
            selectors=[QSSSelector(f"{connected}:hover")],
            rules=[
                QSSRuleProperty("background-color", colors.SurfaceButtonHover),
                QSSRuleProperty("color", colors.Text),
            ],
        ),
        QSSRule(
            selectors=[QSSSelector(f"{connected}:pressed")],
            rules=[QSSRuleProperty("background-color", colors.SurfaceButtonPressed)],
        ),
        QSSRule(
            selectors=[QSSSelector(f"{_BUTTON}:focus"), QSSSelector(f"{connected}:focus")],
            rules=[QSSRuleProperty("border-color", colors.PrimaryFocus)],
        ),
        QSSRule(
            selectors=[QSSSelector(f"{_BUTTON}:disabled")],
            rules=[
                QSSRuleProperty("background-color", colors.SurfaceDisabled),
                QSSRuleProperty("color", colors.TextSecondary),
                QSSRuleProperty("border-color", colors.BorderButton),
            ],
        ),
    ]
