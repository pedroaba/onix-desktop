from PySide6.QtCore import QSignalBlocker, Slot
from PySide6.QtWidgets import QHBoxLayout, QVBoxLayout, QWidget

from src.models.folder import Folder
from src.ui.components.primitive.button import IconButton
from src.ui.components.primitive.divider import Divider
from src.ui.components.primitive.label import StyledLabel
from src.ui.components.primitive.toggle_switch import ToggleSwitch
from src.ui.styles import DarkColors, LightColors
from src.ui.themes.theme_manager import AvailableTheme
from src.utils.add_spacing_string import add_spacing_string
from src.utils.get_default_layout import GetDefaultLayoutOptions, get_default_layout


class FolderAvailability(QWidget):
    def __init__(self, parent: QWidget | None = None) -> None:
        super().__init__(parent)
        self._folder: Folder | None = None
        layout = get_default_layout(QVBoxLayout, GetDefaultLayoutOptions(spacing=8), parent=self)
        divider = Divider("DetailsDivider")

        local_heading = StyledLabel("Neste computador", object_name="LocalStorageHeading")

        self.keep_switch = ToggleSwitch()
        self.keep_switch.setAccessibleName("Sempre manter neste dispositivo")

        keep_label = StyledLabel("Sempre manter neste dispositivo", word_wrap=True)

        keep_layout = get_default_layout(QHBoxLayout, GetDefaultLayoutOptions(spacing=10))
        keep_layout.addWidget(self.keep_switch)
        keep_layout.addWidget(keep_label, stretch=1)

        local_description = StyledLabel(
            "Acesse esta pasta mesmo sem internet.",
            object_name="LocalDescriptionLabel",
            word_wrap=True,
        )

        self.free_space_button = IconButton(
            "cloud", add_spacing_string("Liberar espaço"), object_name="FreeSpaceButton"
        )
        self.free_space_button.setMinimumHeight(40)
        self.free_space_button.setEnabled(False)
        self.free_space_button.setToolTip("Liberação de espaço indisponível")

        layout.addWidget(divider)
        layout.addSpacing(16)
        layout.addWidget(local_heading)
        layout.addLayout(keep_layout)
        layout.addWidget(local_description)
        layout.addSpacing(16)
        layout.addWidget(self.free_space_button)

        self.keep_switch.toggled.connect(self._on_keep_changed)

    def set_theme(self, theme: AvailableTheme) -> None:
        match theme:
            case AvailableTheme.DARK:
                blue = DarkColors.Accent.to_hex()
                color = DarkColors.TextSecondary.to_hex()
            case _:
                blue = LightColors.Accent.to_hex()
                color = LightColors.TextSecondary.to_hex()

        self.free_space_button.set_icon_color(blue if self.free_space_button.isEnabled() else color)

        self.keep_switch.set_theme(theme)

    @Slot(bool)
    def _on_keep_changed(self, checked: bool) -> None:
        if self._folder is None:
            return

        self._folder.keep_on_device = checked

    def show_folder(self, folder: Folder | None) -> None:
        self._folder = folder
        if folder is not None:
            with QSignalBlocker(self.keep_switch):
                self.keep_switch.setChecked(folder.keep_on_device)
