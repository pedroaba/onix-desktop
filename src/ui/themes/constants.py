"""Tokens de estilo compartilhados. Medidas incluem a unidade usada pelo QSS."""

import sys
from dataclasses import dataclass
from enum import StrEnum
from typing import Final


class FontFamily(StrEnum):
    Windows = '"Segoe UI"'
    Macos = '"Helvetica Neue"'
    Default = Windows if sys.platform == "win32" else Macos


class FontSize(StrEnum):
    Caption = "13px"
    Body = "14px"
    Heading = "16px"
    DetailsTitle = "22px"
    PageTitleCompact = "29px"
    PageTitle = "32px"


class FontWeight(StrEnum):
    Regular = "400"
    Semibold = "600"


class Space(StrEnum):
    Zero = "0"
    Px6 = "6px"
    Px8 = "8px"
    Px10 = "10px"
    Px12 = "12px"
    Px16 = "16px"


class BorderWidth(StrEnum):
    Thin = "1px"


class Radius(StrEnum):
    Zero = "0"
    Small = "2px"
    Medium = "4px"


class Color(StrEnum):
    Transparent = "transparent"


class Border(StrEnum):
    Transparent = f"{BorderWidth.Thin} solid {Color.Transparent}"


@dataclass(frozen=True)
class ThemeColors:
    """Cores por função, permitindo ajustar cada estado independentemente."""

    Text: str
    TextHeading: str
    TextSecondary: str
    TextDisabled: str
    TextOnPrimary: str
    Surface: str
    SurfaceSidebar: str
    SurfaceDetails: str
    SurfaceInput: str
    SurfaceDialogButton: str
    Primary: str
    PrimaryHover: str
    PrimaryPressed: str
    PrimaryFocus: str
    Accent: str
    NavigationHover: str
    Selection: str
    SelectionText: str
    Border: str
    BorderTableRow: str
    BorderInput: str
    SurfaceButton: str
    SurfaceButtonHover: str
    SurfaceButtonPressed: str
    BorderButton: str
    BorderViewMode: str
    BorderViewModeChecked: str
    SurfaceDisabled: str
    SurfaceCloseHover: str
    SurfaceClosePressed: str
    DividerSyncStatus: str
    ProgressTrack: str
    ProgressFill: str
    Success: str
    SwitchTrack: str
    SwitchThumb: str


LightColors: Final = ThemeColors(
    Text="#262626",
    TextHeading="#000000",
    TextSecondary="#616161",
    TextDisabled="#969696",
    TextOnPrimary="#ffffff",
    Surface="#ffffff",
    SurfaceSidebar="#f2f2f2",
    SurfaceDetails="#ffffff",
    SurfaceInput="#ffffff",
    SurfaceDialogButton="#ffffff",
    Primary="#0067b8",
    PrimaryHover="#004a7f",
    PrimaryPressed="#00385f",
    PrimaryFocus="#262626",
    Accent="#0067b8",
    NavigationHover="#e5e5e5",
    Selection="#dceaf7",
    SelectionText="#262626",
    Border="#dddddd",
    BorderTableRow="#eeeeee",
    BorderInput="#b7b7b7",
    SurfaceButton="#ffffff",
    SurfaceButtonHover="#f2f2f2",
    SurfaceButtonPressed="#e5e5e5",
    BorderButton="#b7b7b7",
    BorderViewMode="#dddddd",
    BorderViewModeChecked="#99caff",
    SurfaceDisabled="#f5f5f5",
    SurfaceCloseHover="#eeeeee",
    SurfaceClosePressed="#dddddd",
    DividerSyncStatus="#dddddd",
    ProgressTrack="#d7d7d7",
    ProgressFill="#0067b8",
    Success="#107c10",
    SwitchTrack="#8a8a8a",
    SwitchThumb="#ffffff",
)

DarkColors: Final = ThemeColors(
    Text="#f5f5f5",
    TextHeading="#ffffff",
    TextSecondary="#b7b7b7",
    TextDisabled="#808080",
    TextOnPrimary="#ffffff",
    Surface="#1b1b1b",
    SurfaceSidebar="#202020",
    SurfaceDetails="#202020",
    SurfaceInput="#292929",
    SurfaceDialogButton="#333333",
    Primary="#0067b8",
    PrimaryHover="#0078d4",
    PrimaryPressed="#004a7f",
    PrimaryFocus="#ffffff",
    Accent="#80c6ff",
    NavigationHover="#2d2d2d",
    Selection="#17364f",
    SelectionText="#ffffff",
    Border="#383838",
    BorderTableRow="#333333",
    BorderInput="#616161",
    SurfaceButton="#262626",
    SurfaceButtonHover="#303030",
    SurfaceButtonPressed="#383838",
    BorderButton="#484848",
    BorderViewMode="#484848",
    BorderViewModeChecked="#0067b8",
    SurfaceDisabled="#262626",
    SurfaceCloseHover="#303030",
    SurfaceClosePressed="#383838",
    DividerSyncStatus="#484848",
    ProgressTrack="#3a3a3a",
    ProgressFill="#0098ff",
    Success="#54b054",
    SwitchTrack="#666666",
    SwitchThumb="#ffffff",
)
