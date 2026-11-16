"""Tokens de tipografia, espaçamento, bordas e dimensões do Onix."""

import sys
from enum import IntEnum, StrEnum
from typing import Final


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
    FileTableHeaderHeight = 33
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
