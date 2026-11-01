import sys

from PySide6.QtCore import QTimer
from PySide6.QtWidgets import QMainWindow


def configure_macos_title_bar(window: QMainWindow) -> None:
    if sys.platform != "darwin":
        return

    import AppKit
    import objc

    native_view = objc.objc_object(c_void_p=int(window.winId()))
    native_window = native_view.window()

    toolbar = AppKit.NSToolbar.alloc().initWithIdentifier_("OnixTitleBar")
    toolbar.setShowsBaselineSeparator_(False)

    native_window.setToolbar_(toolbar)
    native_window.setToolbarStyle_(AppKit.NSWindowToolbarStyleUnified)
    native_window.setTitleVisibility_(AppKit.NSWindowTitleHidden)

    def fit_title_bar() -> None:
        title_bar = window.menuWidget()
        if title_bar is None:
            return

        content_height = native_view.bounds().size.height
        layout_height = native_window.contentLayoutRect().size.height

        title_height = round(content_height - layout_height)
        if title_height > 0:
            title_bar.setFixedHeight(title_height)

    QTimer.singleShot(0, fit_title_bar)
