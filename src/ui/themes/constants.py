"""Tokens de estilo compartilhados. Medidas incluem a unidade usada pelo QSS."""

from dataclasses import dataclass
from typing import Final

FONT_FAMILY: Final = '"Segoe UI", "Helvetica Neue", Arial'
FONT_SIZE_CAPTION: Final = "13px"
FONT_SIZE_BODY: Final = "14px"
FONT_SIZE_HEADING: Final = "16px"
FONT_SIZE_DETAILS_TITLE: Final = "22px"
FONT_SIZE_PAGE_TITLE_COMPACT: Final = "29px"
FONT_SIZE_PAGE_TITLE: Final = "32px"
FONT_WEIGHT_REGULAR: Final = "400"
FONT_WEIGHT_SEMIBOLD: Final = "600"

SPACE_NONE: Final = "0"
SPACE_6: Final = "6px"
SPACE_8: Final = "8px"
SPACE_10: Final = "10px"
SPACE_12: Final = "12px"
SPACE_16: Final = "16px"

BORDER_WIDTH: Final = "1px"
RADIUS_NONE: Final = "0"
RADIUS_SMALL: Final = "2px"
RADIUS_MEDIUM: Final = "4px"
TRANSPARENT: Final = "transparent"
BORDER_TRANSPARENT: Final = f"{BORDER_WIDTH} solid {TRANSPARENT}"


@dataclass(frozen=True)
class ThemeColors:
    """Cores por função, permitindo ajustar cada estado independentemente."""

    text: str
    text_heading: str
    text_secondary: str
    text_disabled: str
    text_on_primary: str
    surface: str
    surface_sidebar: str
    surface_details: str
    surface_input: str
    surface_dialog_button: str
    primary: str
    primary_hover: str
    primary_pressed: str
    primary_focus: str
    accent: str
    navigation_hover: str
    selection: str
    selection_text: str
    border: str
    border_table_row: str
    border_input: str
    surface_button: str
    surface_button_hover: str
    surface_button_pressed: str
    border_button: str
    border_view_mode: str
    border_view_mode_checked: str
    surface_disabled: str
    surface_close_hover: str
    surface_close_pressed: str
    divider_sync_status: str
    progress_track: str
    progress_fill: str


LIGHT_COLORS: Final = ThemeColors(
    text="#262626",
    text_heading="#000000",
    text_secondary="#616161",
    text_disabled="#969696",
    text_on_primary="#ffffff",
    surface="#ffffff",
    surface_sidebar="#f2f2f2",
    surface_details="#ffffff",
    surface_input="#ffffff",
    surface_dialog_button="#ffffff",
    primary="#0067b8",
    primary_hover="#004a7f",
    primary_pressed="#00385f",
    primary_focus="#262626",
    accent="#0067b8",
    navigation_hover="#e5e5e5",
    selection="#dceaf7",
    selection_text="#262626",
    border="#dddddd",
    border_table_row="#eeeeee",
    border_input="#b7b7b7",
    surface_button="#ffffff",
    surface_button_hover="#f2f2f2",
    surface_button_pressed="#e5e5e5",
    border_button="#b7b7b7",
    border_view_mode="#dddddd",
    border_view_mode_checked="#99caff",
    surface_disabled="#f5f5f5",
    surface_close_hover="#eeeeee",
    surface_close_pressed="#dddddd",
    divider_sync_status="#dddddd",
    progress_track="#d7d7d7",
    progress_fill="#0067b8",
)

DARK_COLORS: Final = ThemeColors(
    text="#f5f5f5",
    text_heading="#ffffff",
    text_secondary="#b7b7b7",
    text_disabled="#808080",
    text_on_primary="#ffffff",
    surface="#1b1b1b",
    surface_sidebar="#202020",
    surface_details="#202020",
    surface_input="#292929",
    surface_dialog_button="#333333",
    primary="#0067b8",
    primary_hover="#0078d4",
    primary_pressed="#004a7f",
    primary_focus="#ffffff",
    accent="#80c6ff",
    navigation_hover="#2d2d2d",
    selection="#17364f",
    selection_text="#ffffff",
    border="#383838",
    border_table_row="#333333",
    border_input="#616161",
    surface_button="#262626",
    surface_button_hover="#303030",
    surface_button_pressed="#383838",
    border_button="#484848",
    border_view_mode="#484848",
    border_view_mode_checked="#0067b8",
    surface_disabled="#262626",
    surface_close_hover="#303030",
    surface_close_pressed="#383838",
    divider_sync_status="#484848",
    progress_track="#3a3a3a",
    progress_fill="#0098ff",
)
