"""Tokens do Onix para os temas claro e escuro do protótipo inspirado na Linear."""

import sys
from dataclasses import dataclass
from enum import IntEnum, StrEnum
from typing import Final

from src.ui.themes.utils.color import Color


class FontFamily(StrEnum):
    Preferred = '"Inter"'
    Windows = '"Segoe UI"'
    Macos = '"Helvetica Neue"'
    Default = Windows if sys.platform == "win32" else Macos


class FontSize(StrEnum):
    Label = "11px"
    Caption = "12px"
    Body = "13px"
    Heading = "14px"
    DetailsTitle = "17px"
    PageTitle = "24px"


class LineHeight(IntEnum):
    Label = 15
    Caption = 17
    Body = 18
    PageTitle = 32


class ComponentSize(IntEnum):
    SidebarWidth = 212
    DetailsWidth = 308
    ToolbarHeight = 48
    ControlHeight = 30
    FileRowHeight = 39
    PreviewHeight = 145


class FontWeight(StrEnum):
    Regular = "400"
    Medium = "500"
    Semibold = "600"


class Space(StrEnum):
    Zero = "0"
    Px4 = "4px"
    Px6 = "6px"
    Px8 = "8px"
    Px10 = "10px"
    Px12 = "12px"
    Px16 = "16px"
    Px24 = "24px"
    Px32 = "32px"
    Px48 = "48px"


class BorderWidth(StrEnum):
    Thin = "1px"


class Radius(StrEnum):
    Zero = "0"
    ExtraSmall = "4px"
    Small = "6px"
    Medium = "8px"
    Large = "12px"


QSS_TRANSPARENT: Final = "transparent"


class Border(StrEnum):
    Transparent = f"{BorderWidth.Thin} solid {QSS_TRANSPARENT}"


@dataclass(frozen=True)
class ThemeColors:
    """Cores por função, permitindo ajustar cada estado independentemente."""

    Text: Color
    TextHeading: Color
    TextSecondary: Color
    TextDisabled: Color
    TextOnPrimary: Color
    TextMuted: Color
    Surface: Color
    SurfaceSidebar: Color
    SurfaceDetails: Color
    SurfaceInput: Color
    SurfaceDialogButton: Color
    Primary: Color
    PrimaryHover: Color
    PrimaryPressed: Color
    PrimaryFocus: Color
    Accent: Color
    NavigationHover: Color
    Selection: Color
    SelectionText: Color
    Border: Color
    BorderTableRow: Color
    BorderInput: Color
    SurfaceButton: Color
    SurfaceButtonHover: Color
    SurfaceButtonPressed: Color
    BorderButton: Color
    BorderViewMode: Color
    BorderViewModeChecked: Color
    SurfaceDisabled: Color
    SurfaceCloseHover: Color
    SurfaceClosePressed: Color
    DividerSyncStatus: Color
    ProgressTrack: Color
    ProgressFill: Color
    Success: Color
    SwitchTrack: Color
    SwitchThumb: Color
    SurfaceRaised: Color
    SurfacePreview: Color
    BrandBackground: Color
    BrandForeground: Color
    OneDrive: Color
    GoogleDrive: Color
    Dropbox: Color


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
