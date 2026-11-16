"""Estrutura compartilhada pelas paletas do Onix."""

from dataclasses import dataclass

from src.ui.themes.utils.color import Color


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
