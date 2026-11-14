from src.ui.styles import BorderWidth, ComponentSize, FontSize, FontWeight, Radius, ThemeColors


def build_stylesheet(colors: ThemeColors) -> str:
    border = f"{BorderWidth.Thin} solid {colors.Border.to_hex()}"
    strong_border = f"{BorderWidth.Thin} solid {colors.BorderButton.to_hex()}"
    return f"""
    #OnixWorkspace, #OnixResults, #OnixScrollContent {{
        background: {colors.Surface.to_hex()};
    }}
    #OnixSidebar, #OnixInspector {{
        background: {colors.SurfaceSidebar.to_hex()};
    }}
    #OnixSidebar {{ border-right: {border}; }}
    #OnixInspector {{ border-left: {border}; }}
    #OnixBar {{ border-bottom: {border}; }}
    #OnixFooter {{ border-top: {border}; }}
    QLabel[role="secondary"] {{
        color: {colors.TextSecondary.to_hex()}; font-size: {FontSize.Caption};
    }}
    QLabel[role="caption"] {{
        color: {colors.TextSecondary.to_hex()}; font-size: {FontSize.Label};
    }}
    QLabel[role="section"] {{ font-weight: {FontWeight.Semibold}; }}
    QLabel[role="brand"] {{
        font-size: {FontSize.Heading}; font-weight: {FontWeight.Semibold};
    }}
    QLabel[role="title"] {{
        font-size: {FontSize.PageTitle}; font-weight: {FontWeight.Semibold};
    }}
    QLabel[role="details"] {{
        font-size: {FontSize.DetailsTitle}; font-weight: {FontWeight.Semibold};
    }}
    #OnixMark {{
        background: {colors.BrandBackground.to_hex()}; border-radius: {Radius.Small};
    }}
    QPushButton[onixControl="true"] {{
        border: {strong_border}; border-radius: {Radius.Small};
        background: {colors.SurfaceButton.to_hex()}; padding: 0 8px;
        min-height: {int(ComponentSize.ControlHeight) - 2}px;
        text-align: center; font-size: {FontSize.Caption}; font-weight: {FontWeight.Medium};
    }}
    QPushButton[onixControl="true"]:hover {{ background: {colors.SurfaceButtonHover.to_hex()}; }}
    QPushButton[onixControl="true"]:focus {{ border-color: {colors.PrimaryFocus.to_hex()}; }}
    QPushButton[onixControl="true"]:disabled {{
        color: {colors.TextDisabled.to_hex()}; background: {colors.SurfaceDisabled.to_hex()};
    }}
    QPushButton[onixControl="true"]:checked {{ background: {colors.NavigationHover.to_hex()}; }}
    QPushButton[onixControl="true"][primary="true"] {{
        color: {colors.TextOnPrimary.to_hex()}; background: {colors.Primary.to_hex()};
        border-color: {colors.Primary.to_hex()};
    }}
    QPushButton[onixControl="true"][primary="true"]:hover {{
        background: {colors.PrimaryHover.to_hex()};
    }}
    QPushButton[onixControl="true"][primary="true"]:pressed {{
        background: {colors.PrimaryPressed.to_hex()};
    }}
    QPushButton[onixControl="true"][quiet="true"] {{
        border-color: transparent; background: transparent;
    }}
    QPushButton[onixControl="true"][quiet="true"]:hover,
    QPushButton[onixControl="true"][quiet="true"]:checked {{
        background: {colors.NavigationHover.to_hex()};
    }}
    QPushButton[onixControl="true"][quiet="true"]:focus {{
        border-color: {colors.PrimaryFocus.to_hex()};
    }}
    QPushButton[onixControl="true"][navigation="true"] {{
        text-align: left; color: {colors.TextSecondary.to_hex()}; font-size: {FontSize.Body};
    }}
    QPushButton[onixControl="true"][navigation="true"]:checked {{ color: {colors.Text.to_hex()}; }}
    QPushButton[onixControl="true"][fileTitle="true"] {{
        text-align: left; color: {colors.Text.to_hex()}; padding: 0 4px;
    }}
    #OnixResults, #OnixScroll {{ border: 0; }}
    #OnixResults::item {{
        height: {int(ComponentSize.FileRowHeight)}px; border-bottom: {border};
    }}
    #OnixResults::item:hover {{ background: {colors.SurfaceButtonHover.to_hex()}; }}
    #OnixResults::item:selected {{
        background: {colors.Selection.to_hex()}; color: {colors.SelectionText.to_hex()};
    }}
    #OnixResults QHeaderView::section {{
        background: {colors.SurfaceSidebar.to_hex()}; color: {colors.TextSecondary.to_hex()};
        padding: 8px; border: 0; border-bottom: {border};
    }}
    QFrame[onixCard="true"] {{
        border: {border}; border-radius: {Radius.Medium}; background: {colors.SurfaceRaised.to_hex()};
    }}
    QFrame[onixCard="true"]:focus, QFrame[onixCard="true"][selected="true"] {{
        border-color: {colors.PrimaryFocus.to_hex()};
    }}
    #OnixPreview {{
        background: {colors.SurfacePreview.to_hex()}; border-radius: {Radius.Small};
    }}
    QDialog[onixDialog="true"] {{ background: {colors.SurfaceRaised.to_hex()}; }}
    QLineEdit[onixSearch="true"] {{
        background: {colors.SurfaceInput.to_hex()};
        border: {strong_border}; border-radius: {Radius.Small}; padding: 8px 12px;
    }}
    QLineEdit[onixSearch="true"]:focus {{ border-color: {colors.PrimaryFocus.to_hex()}; }}
    #FileFilterPopup {{
        background: {colors.SurfaceRaised.to_hex()};
        border: {strong_border};
        border-radius: {Radius.Medium};
    }}

    #FileFilterDivider {{
        background: {colors.Border.to_hex()};
    }}
    """
