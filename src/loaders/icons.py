from dataclasses import dataclass
from pathlib import Path

from PySide6.QtCore import QSize
from PySide6.QtGui import QIcon, QPixmap

from src.loaders.icon import IconLoader, IconLoaderOptions

_ICONS_PATH = IconLoaderOptions().folder_path


@dataclass
class Icon:
    """Representa um arquivo de ícone disponível no catálogo.

    `name` é o nome original do arquivo sem a extensão. O caminho é armazenado
    em relação a `assets/icons` e a propriedade `path` devolve o caminho absoluto.

    Use `get_pixmap()` em um QLabel ou ao desenhar com QPainter. Use `get_icon()`
    para botões, ações e outros controles que recebem um QIcon. Os dois métodos
    aceitam um inteiro para largura e altura iguais ou um QSize para dimensões
    separadas. Com `size=None`, usam o tamanho nominal da variante ou 40 px
    para arquivos sem tamanho nominal.

    Passe uma cor Qt, como `"#ffffff"`, para tingir o ícone preservando a
    transparência. Com `color=None`, as cores do arquivo são preservadas.
    """

    name: str
    """Nome original do arquivo de ícone, sem a extensão."""

    _file: Path
    """Caminho do arquivo relativo a assets/icons."""

    @property
    def path(self) -> Path:
        """Caminho absoluto do arquivo SVG ou PNG."""
        return _ICONS_PATH / self._file

    def get_pixmap(self, size: int | QSize | None = None, *, color: str | None = None) -> QPixmap:
        """Renderiza a variante como QPixmap, com tamanho e cor opcionais."""
        loader, dimensions = self._prepare_loader(size, color)
        return loader.load_as_pixmap() if dimensions is None else loader.load_as_pixmap(dimensions)

    def get_icon(self, size: int | QSize | None = None, *, color: str | None = None) -> QIcon:
        """Renderiza a variante como QIcon, com tamanho e cor opcionais."""
        loader, dimensions = self._prepare_loader(size, color)
        return loader.load() if dimensions is None else loader.load(dimensions)

    def _prepare_loader(
        self, size: int | QSize | None, color: str | None
    ) -> tuple[IconLoader, int | QSize | None]:
        """Configura o carregador com o caminho, o formato e a cor da variante.

        Retorna o carregador e o tamanho a solicitar. Usa `size` quando
        informado ou extrai o tamanho nominal da pasta do ícone. Se a pasta
        não indicar um tamanho, retorna `None` para usar o padrão do carregador.
        """
        path = self.path.relative_to(_ICONS_PATH)
        options = IconLoaderOptions(
            folder_name=path.parent.as_posix(),
            icon_ext=path.suffix[1:],
            color=color,
        )
        nominal_size = next((int(part) for part in path.parent.parts if part.isdecimal()), None)
        return IconLoader(path.stem, options), nominal_size if size is None else size


# Catálogo gerado por uv run python -m scripts.generate_icons


class _Variants1(Icon):
    """Agrupa variantes e usa SVG para renderizar por padrão."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Png = Icon(name, folder / f"{name}.png")
        """Imagem bitmap PNG com resolução definida pelo arquivo."""
        self.Svg = Icon(name, folder / f"{name}.svg")
        """Arquivo vetorial SVG, adequado para renderizar em diferentes tamanhos."""
        super().__init__(name, self.Svg._file)


class _Variants2(Icon):
    """Agrupa variantes e usa PNG para renderizar por padrão."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Png = Icon(name, folder / f"{name}.png")
        """Imagem bitmap PNG com resolução definida pelo arquivo."""
        super().__init__(name, self.Png._file)


class _Variants3(Icon):
    """Agrupa variantes e usa SVG para renderizar por padrão."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Png = Icon(name, folder / f"{name}.png")
        """Imagem bitmap PNG com resolução definida pelo arquivo."""
        self.Scale1_5x = _Variants1(name, folder / "1.5x")
        """Arquivos para telas com densidade de 1,5 vezes a escala base."""
        self.Scale2x = _Variants2(name, folder / "2x")
        """Arquivos para telas com densidade de 2 vezes a escala base."""
        self.Scale3x = _Variants2(name, folder / "3x")
        """Arquivos para telas com densidade de 3 vezes a escala base."""
        self.Scale4x = _Variants2(name, folder / "4x")
        """Arquivos para telas com densidade de 4 vezes a escala base."""
        self.Svg = Icon(name, folder / f"{name}.svg")
        """Arquivo vetorial SVG, adequado para renderizar em diferentes tamanhos."""
        super().__init__(name, self.Svg._file)


class _Variants4:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants3(name, folder / "color")
        """Versão com as cores originais da família do ícone."""


class _Variants5(Icon):
    """Agrupa variantes e usa SVG para renderizar por padrão."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Png = Icon(name, folder / f"{name}.png")
        """Imagem bitmap PNG com resolução definida pelo arquivo."""
        self.Scale2x = _Variants2(name, folder / "2x")
        """Arquivos para telas com densidade de 2 vezes a escala base."""
        self.Scale3x = _Variants2(name, folder / "3x")
        """Arquivos para telas com densidade de 3 vezes a escala base."""
        self.Scale4x = _Variants2(name, folder / "4x")
        """Arquivos para telas com densidade de 4 vezes a escala base."""
        self.Svg = Icon(name, folder / f"{name}.svg")
        """Arquivo vetorial SVG, adequado para renderizar em diferentes tamanhos."""
        super().__init__(name, self.Svg._file)


class _Variants6:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants5(name, folder / "color")
        """Versão com as cores originais da família do ícone."""


class _Variants7:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants4(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants6(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants4(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants4(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size40 = _Variants4(name, folder / "40")
        """Variantes desenhadas para o tamanho nominal de 40 px."""
        self.Size48 = _Variants4(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""
        self.Size64 = _Variants4(name, folder / "64")
        """Variantes desenhadas para o tamanho nominal de 64 px."""
        self.Size96 = _Variants4(name, folder / "96")
        """Variantes desenhadas para o tamanho nominal de 96 px."""


class _Variants8:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""


class _Variants9:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants8(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants10(Icon):
    """Agrupa variantes e usa SVG para renderizar por padrão."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Png = Icon(name, folder / f"{name}.png")
        """Imagem bitmap PNG com resolução definida pelo arquivo."""
        self.Scale1_5x = _Variants2(name, folder / "1.5x")
        """Arquivos para telas com densidade de 1,5 vezes a escala base."""
        self.Scale2x = _Variants2(name, folder / "2x")
        """Arquivos para telas com densidade de 2 vezes a escala base."""
        self.Scale3x = _Variants2(name, folder / "3x")
        """Arquivos para telas com densidade de 3 vezes a escala base."""
        self.Svg = Icon(name, folder / f"{name}.svg")
        """Arquivo vetorial SVG, adequado para renderizar em diferentes tamanhos."""
        super().__init__(name, self.Svg._file)


class _Variants11:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants10(name, folder / "color")
        """Versão com as cores originais da família do ícone."""


class _Variants12(Icon):
    """Agrupa variantes e usa SVG para renderizar por padrão."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Svg = Icon(name, folder / f"{name}.svg")
        """Arquivo vetorial SVG, adequado para renderizar em diferentes tamanhos."""
        super().__init__(name, self.Svg._file)


class _Variants13:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants12(name, folder / "color")
        """Versão com as cores originais da família do ícone."""


class _Variants14(Icon):
    """Agrupa variantes e usa PNG para renderizar por padrão."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Png = Icon(name, folder / f"{name}.png")
        """Imagem bitmap PNG com resolução definida pelo arquivo."""
        self.Scale1_5x = _Variants2(name, folder / "1.5x")
        """Arquivos para telas com densidade de 1,5 vezes a escala base."""
        self.Scale2x = _Variants2(name, folder / "2x")
        """Arquivos para telas com densidade de 2 vezes a escala base."""
        self.Scale3x = _Variants2(name, folder / "3x")
        """Arquivos para telas com densidade de 3 vezes a escala base."""
        super().__init__(name, self.Png._file)


class _Variants15:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants14(name, folder / "color")
        """Versão com as cores originais da família do ícone."""


class _Variants16:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants11(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants13(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants13(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants11(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants11(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""
        self.Size96 = _Variants15(name, folder / "96")
        """Variantes desenhadas para o tamanho nominal de 96 px."""


class _Variants17:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Launch = _Variants16(name, folder / "launch")
        """Ícones do Fluent para identificar aplicativos do Microsoft 365."""


class _Variants18:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants17(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants19:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Filled = _Variants12(name, folder / "filled")
        """Versão com formas preenchidas."""
        self.Regular = _Variants12(name, folder / "regular")
        """Versão em contorno com a espessura de traço padrão."""


class _Variants20:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants21:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants20(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants22:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants23:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants22(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants24:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Filled = _Variants12(name, folder / "filled")
        """Versão com formas preenchidas."""
        self.Light = _Variants12(name, folder / "light")
        """Versão em contorno com traço mais fino."""
        self.Regular = _Variants12(name, folder / "regular")
        """Versão em contorno com a espessura de traço padrão."""


class _Variants25:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants26:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants25(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants27:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants28:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants27(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants29:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants30:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants29(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants31:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants12(name, folder / "color")
        """Versão com as cores originais da família do ícone."""
        self.Filled = _Variants12(name, folder / "filled")
        """Versão com formas preenchidas."""
        self.Regular = _Variants12(name, folder / "regular")
        """Versão em contorno com a espessura de traço padrão."""


class _Variants32:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants33:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants32(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants34:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants35:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants34(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants36:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants37:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants36(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants38:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants39:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants38(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants40:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants41:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants40(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants42:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants43:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants42(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants44:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants12(name, folder / "color")
        """Versão com as cores originais da família do ícone."""
        self.Filled = _Variants12(name, folder / "filled")
        """Versão com formas preenchidas."""
        self.Light = _Variants12(name, folder / "light")
        """Versão em contorno com traço mais fino."""
        self.Regular = _Variants12(name, folder / "regular")
        """Versão em contorno com a espessura de traço padrão."""


class _Variants45:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants46:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants45(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants47:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants48:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants47(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants49:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants50:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants49(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants51:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants52:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants51(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants53:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants54:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants53(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants55:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""


class _Variants56:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants55(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants57:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""


class _Variants58:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants57(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants59:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""


class _Variants60:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants59(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants61:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants62:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants61(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants63:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants64:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants63(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants65:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants66:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants65(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants67:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants68:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants67(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants69:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants70:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants69(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants71:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants72:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants71(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants73:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants74:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants73(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants75:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants76:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants75(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants77:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants78:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants77(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants79:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants80:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants79(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants81:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants82:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants81(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants83:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants84:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants83(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants85:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants86:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants85(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants87:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants88:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants87(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants89:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants90:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants89(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants91:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants92:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants91(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants93:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants94:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants93(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants95:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants13(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants13(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants96:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants95(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants97:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants98:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants97(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants99:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants100:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants99(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants101:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""


class _Variants102:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants101(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants103:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants104:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants103(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants105:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants106:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants105(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants107:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants108:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants107(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants109:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Light = _Variants12(name, folder / "light")
        """Versão em contorno com traço mais fino."""


class _Variants110:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants111:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants110(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants112:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants113:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants112(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants114:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants115:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants114(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants116:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants117:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants116(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants118:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""


class _Variants119:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants118(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants120:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants121:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants120(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants122:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants123:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants122(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants124:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Filled = _Variants12(name, folder / "filled")
        """Versão com formas preenchidas."""


class _Variants125:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants126:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants125(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants127:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants128:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants127(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants129:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants130:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants129(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants131:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants132:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants131(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants133:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants134:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants133(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants135:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants136:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants135(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants137:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants138:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants137(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants139:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants140:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants139(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants141:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants142:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants141(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants143:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants13(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants13(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants13(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants144:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants143(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants145:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants146:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants145(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants147:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants148:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants147(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants149:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants150:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants149(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants151:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants152:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants151(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants153:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants154:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants153(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants155:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants156:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants155(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants157:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants158:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants157(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants159:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants13(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""


class _Variants160:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants159(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants161:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants162:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants161(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants163:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants164:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants163(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants165:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants166:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants165(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants167:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants168:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants167(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants169:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants170:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants169(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants171:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Regular = _Variants12(name, folder / "regular")
        """Versão em contorno com a espessura de traço padrão."""


class _Variants172:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants171(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""


class _Variants173:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants172(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants174:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants175:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants174(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants176:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size24 = _Variants124(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants177:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants176(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants178:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size24 = _Variants171(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants179:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants178(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants180:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""


class _Variants181:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants180(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants182:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants183:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants182(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants184:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants13(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants185:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants184(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants186:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants187:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants186(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants188:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants189:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants188(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants190:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants171(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants171(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants191:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants190(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants192:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Light = _Variants12(name, folder / "light")
        """Versão em contorno com traço mais fino."""
        self.Regular = _Variants12(name, folder / "regular")
        """Versão em contorno com a espessura de traço padrão."""


class _Variants193:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants171(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants171(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants171(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants171(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants192(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants194:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants193(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants195:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants171(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants171(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants171(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants171(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants171(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants196:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants195(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants197:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants198:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants197(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants199:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants200:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants199(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants201:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants202:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants201(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants203:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants204:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants203(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants205:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants206:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants205(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants207:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants44(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants44(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants44(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants208:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants207(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants209:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants24(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants24(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants24(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants210:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants209(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants211:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants212:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants211(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants213:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants214:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants213(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants215:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants216:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants215(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants217:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants218:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants217(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants219(Icon):
    """Agrupa variantes e usa SVG para renderizar por padrão."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Png = Icon(name, folder / f"{name}.png")
        """Imagem bitmap PNG com resolução definida pelo arquivo."""
        self.Scale1_5x = _Variants1(name, folder / "1.5x")
        """Arquivos para telas com densidade de 1,5 vezes a escala base."""
        self.Svg = Icon(name, folder / f"{name}.svg")
        """Arquivo vetorial SVG, adequado para renderizar em diferentes tamanhos."""
        super().__init__(name, self.Svg._file)


class _Variants220:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants219(name, folder / "color")
        """Versão com as cores originais da família do ícone."""


class _Variants221:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants4(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants6(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants4(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants4(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size40 = _Variants4(name, folder / "40")
        """Variantes desenhadas para o tamanho nominal de 40 px."""
        self.Size48 = _Variants4(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""
        self.Size64 = _Variants220(name, folder / "64")
        """Variantes desenhadas para o tamanho nominal de 64 px."""
        self.Size96 = _Variants4(name, folder / "96")
        """Variantes desenhadas para o tamanho nominal de 96 px."""


class _Variants222:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants221(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""


class _Variants223:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants222(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants224:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size24 = _Variants13(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants225:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants224(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants226:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants227:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants226(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants228:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants229:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants228(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants230:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants231:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants230(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants232:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants124(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants124(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants124(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants124(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants124(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants233:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants232(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants234:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants235:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants234(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants236:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants237:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants236(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants238:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Color = _Variants1(name, folder / "color")
        """Versão com as cores originais da família do ícone."""


class _Variants239:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants238(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants13(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants13(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants238(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants238(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants240:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Launch = _Variants239(name, folder / "launch")
        """Ícones do Fluent para identificar aplicativos do Microsoft 365."""


class _Variants241:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants240(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants242:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""


class _Variants243:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants242(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants244:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""


class _Variants245:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants244(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants246:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants247:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants246(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants248:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants249:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants248(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants250:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants251:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants250(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants252:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants253:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants252(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants254:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants124(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants124(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants255:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants254(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants256:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants257:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants256(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants258:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants259:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants258(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants260:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants261:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants260(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants262:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants263:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants262(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants264:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants11(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size32 = _Variants15(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants11(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""
        self.Size96 = _Variants15(name, folder / "96")
        """Variantes desenhadas para o tamanho nominal de 96 px."""


class _Variants265:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Launch = _Variants264(name, folder / "launch")
        """Ícones do Fluent para identificar aplicativos do Microsoft 365."""


class _Variants266:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants265(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants267:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants124(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants124(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants124(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants268:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants267(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants269:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Filled = _Variants12(name, folder / "filled")
        """Versão com formas preenchidas."""
        self.Light = _Variants12(name, folder / "light")
        """Versão em contorno com traço mais fino."""


class _Variants270:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants124(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants124(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants269(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants271:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants270(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants272:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants124(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants124(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants124(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants269(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants273:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants272(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants274:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size28 = _Variants124(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants269(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants275:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants274(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants276:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants13(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants277:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants276(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants278:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants279:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants278(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants280:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants281:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants280(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants282:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants283:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants282(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants284:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants11(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants13(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants13(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants15(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants11(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""
        self.Size96 = _Variants15(name, folder / "96")
        """Variantes desenhadas para o tamanho nominal de 96 px."""


class _Variants285:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Launch = _Variants284(name, folder / "launch")
        """Ícones do Fluent para identificar aplicativos do Microsoft 365."""


class _Variants286:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants285(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants287:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants288:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants287(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants289:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants290:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants289(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants291:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants292:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants291(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants293:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants171(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""


class _Variants294:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants293(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants295:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants124(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""


class _Variants296:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants295(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants297:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants298:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants297(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants299:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Brands = _Variants12(name, folder / "brands")
        """Versões oficiais ou de marca, como o logotipo do OneDrive."""
        self.Fluent = _Variants17(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants300:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants13(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants13(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants13(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants13(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants13(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants13(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants301:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants300(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants302:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants303:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants302(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants304:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants305:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants304(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants306:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants307:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants306(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants308:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants309:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants308(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants310:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants311:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants310(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants312:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants313:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants312(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants314:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants315:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants314(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants316:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants317:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants316(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants318:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants319:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants318(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants320:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants109(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants321:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants320(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants322:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants323:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants322(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants324:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants325:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants324(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants326:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size10 = _Variants19(name, folder / "10")
        """Variantes desenhadas para o tamanho nominal de 10 px."""
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants327:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants326(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants328:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size10 = _Variants171(name, folder / "10")
        """Variantes desenhadas para o tamanho nominal de 10 px."""
        self.Size12 = _Variants171(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants171(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants171(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants171(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants329:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants328(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants330:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size10 = _Variants124(name, folder / "10")
        """Variantes desenhadas para o tamanho nominal de 10 px."""
        self.Size12 = _Variants124(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants124(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants124(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants124(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants331:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants330(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants332:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants333:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants332(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants334:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants335:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants334(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants336:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants337:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants336(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants338:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants339:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants338(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants340:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants341:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants340(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants342:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Launch = _Variants284(name, folder / "launch")
        """Ícones do Fluent para identificar aplicativos do Microsoft 365."""


class _Variants343:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants342(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants344:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size32 = _Variants24(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants345:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants344(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants346:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants269(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants347:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants346(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants348:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size28 = _Variants19(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""


class _Variants349:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants348(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants350:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants124(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""


class _Variants351:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants350(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants352:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size16 = _Variants171(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants353:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants352(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants354:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size12 = _Variants19(name, folder / "12")
        """Variantes desenhadas para o tamanho nominal de 12 px."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size32 = _Variants19(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants355:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants354(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants356:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size16 = _Variants31(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size28 = _Variants31(name, folder / "28")
        """Variantes desenhadas para o tamanho nominal de 28 px."""
        self.Size32 = _Variants44(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants357:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants356(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants358:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size20 = _Variants19("video_360", folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19("video_360", folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants359:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants358(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants360:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants31(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants31(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size32 = _Variants31(name, folder / "32")
        """Variantes desenhadas para o tamanho nominal de 32 px."""
        self.Size48 = _Variants31(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants361:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants360(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants362:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Files = _Variants7(name, folder / "files")
        """Ícones do Fluent para tipos de arquivo e pastas."""
        self.Size16 = _Variants19(name, folder / "16")
        """Variantes desenhadas para o tamanho nominal de 16 px."""
        self.Size20 = _Variants19(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants19(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""
        self.Size48 = _Variants19(name, folder / "48")
        """Variantes desenhadas para o tamanho nominal de 48 px."""


class _Variants363:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants362(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class _Variants364:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Size20 = _Variants13(name, folder / "20")
        """Variantes desenhadas para o tamanho nominal de 20 px."""
        self.Size24 = _Variants13(name, folder / "24")
        """Variantes desenhadas para o tamanho nominal de 24 px."""


class _Variants365:
    """Agrupa as próximas variantes disponíveis deste ícone."""

    def __init__(self, name: str, folder: Path = Path()) -> None:
        self.Fluent = _Variants364(name, folder / "fluent")
        """Variantes da família Microsoft Fluent."""


class Icons:
    """Catálogo de ícones de assets/icons organizado por nome.

    Escolha um ícone e siga os atributos até a variante desejada.
    Por exemplo, Icons.Folder.Fluent.Size16.Regular seleciona a pasta
    do Fluent em contorno de 16 px.
    """

    Accdb = _Variants9("accdb")
    """Variantes do ícone `accdb`."""
    Access = _Variants18("access")
    """Variantes do ícone `access`."""
    AccessTime = _Variants21("access_time")
    """Variantes do ícone `access_time`."""
    Accessibility = _Variants23("accessibility")
    """Variantes do ícone `accessibility`."""
    AccessibilityCheckmark = _Variants26("accessibility_checkmark")
    """Variantes do ícone `accessibility_checkmark`."""
    AccessibilityError = _Variants21("accessibility_error")
    """Variantes do ícone `accessibility_error`."""
    AccessibilityMore = _Variants28("accessibility_more")
    """Variantes do ícone `accessibility_more`."""
    AccessibilityQuestionMark = _Variants21("accessibility_question_mark")
    """Variantes do ícone `accessibility_question_mark`."""
    Add = _Variants30("add")
    """Variantes do ícone `add`."""
    AddCircle = _Variants33("add_circle")
    """Variantes do ícone `add_circle`."""
    AddSquare = _Variants23("add_square")
    """Variantes do ícone `add_square`."""
    AddSquareMultiple = _Variants28("add_square_multiple")
    """Variantes do ícone `add_square_multiple`."""
    AddStarburst = _Variants35("add_starburst")
    """Variantes do ícone `add_starburst`."""
    AddSubtractCircle = _Variants37("add_subtract_circle")
    """Variantes do ícone `add_subtract_circle`."""
    Agents = _Variants39("agents")
    """Variantes do ícone `agents`."""
    AgentsAdd = _Variants28("agents_add")
    """Variantes do ícone `agents_add`."""
    AgentsPerson = _Variants28("agents_person")
    """Variantes do ícone `agents_person`."""
    AgentsSync = _Variants41("agents_sync")
    """Variantes do ícone `agents_sync`."""
    Agentwork = _Variants9("agentwork")
    """Variantes do ícone `agentwork`."""
    Aipage = _Variants9("aipage")
    """Variantes do ícone `aipage`."""
    Airplane = _Variants23("airplane")
    """Variantes do ícone `airplane`."""
    AirplaneLanding = _Variants28("airplane_landing")
    """Variantes do ícone `airplane_landing`."""
    AirplaneTakeOff = _Variants28("airplane_take_off")
    """Variantes do ícone `airplane_take_off`."""
    Album = _Variants43("album")
    """Variantes do ícone `album`."""
    AlbumAdd = _Variants21("album_add")
    """Variantes do ícone `album_add`."""
    AlbumSubtract = _Variants21("album_subtract")
    """Variantes do ícone `album_subtract`."""
    Alert = _Variants46("alert")
    """Variantes do ícone `alert`."""
    AlertBadge = _Variants48("alert_badge")
    """Variantes do ícone `alert_badge`."""
    AlertOff = _Variants50("alert_off")
    """Variantes do ícone `alert_off`."""
    AlertOn = _Variants28("alert_on")
    """Variantes do ícone `alert_on`."""
    AlertSnooze = _Variants52("alert_snooze")
    """Variantes do ícone `alert_snooze`."""
    AlertUrgent = _Variants54("alert_urgent")
    """Variantes do ícone `alert_urgent`."""
    AlignBottom = _Variants23("align_bottom")
    """Variantes do ícone `align_bottom`."""
    AlignCenterHorizontal = _Variants23("align_center_horizontal")
    """Variantes do ícone `align_center_horizontal`."""
    AlignCenterVertical = _Variants23("align_center_vertical")
    """Variantes do ícone `align_center_vertical`."""
    AlignDistributeBottom = _Variants56("align_distribute_bottom")
    """Variantes do ícone `align_distribute_bottom`."""
    AlignDistributeLeft = _Variants56("align_distribute_left")
    """Variantes do ícone `align_distribute_left`."""
    AlignDistributeRight = _Variants56("align_distribute_right")
    """Variantes do ícone `align_distribute_right`."""
    AlignDistributeTop = _Variants56("align_distribute_top")
    """Variantes do ícone `align_distribute_top`."""
    AlignEndHorizontal = _Variants58("align_end_horizontal")
    """Variantes do ícone `align_end_horizontal`."""
    AlignEndVertical = _Variants58("align_end_vertical")
    """Variantes do ícone `align_end_vertical`."""
    AlignLeft = _Variants23("align_left")
    """Variantes do ícone `align_left`."""
    AlignRight = _Variants23("align_right")
    """Variantes do ícone `align_right`."""
    AlignSpaceAroundHorizontal = _Variants58("align_space_around_horizontal")
    """Variantes do ícone `align_space_around_horizontal`."""
    AlignSpaceAroundVertical = _Variants58("align_space_around_vertical")
    """Variantes do ícone `align_space_around_vertical`."""
    AlignSpaceBetweenHorizontal = _Variants58("align_space_between_horizontal")
    """Variantes do ícone `align_space_between_horizontal`."""
    AlignSpaceBetweenVertical = _Variants58("align_space_between_vertical")
    """Variantes do ícone `align_space_between_vertical`."""
    AlignSpaceEvenlyHorizontal = _Variants21("align_space_evenly_horizontal")
    """Variantes do ícone `align_space_evenly_horizontal`."""
    AlignSpaceEvenlyVertical = _Variants21("align_space_evenly_vertical")
    """Variantes do ícone `align_space_evenly_vertical`."""
    AlignSpaceFitVertical = _Variants58("align_space_fit_vertical")
    """Variantes do ícone `align_space_fit_vertical`."""
    AlignStartHorizontal = _Variants58("align_start_horizontal")
    """Variantes do ícone `align_start_horizontal`."""
    AlignStartVertical = _Variants58("align_start_vertical")
    """Variantes do ícone `align_start_vertical`."""
    AlignStraighten = _Variants21("align_straighten")
    """Variantes do ícone `align_straighten`."""
    AlignStretchHorizontal = _Variants60("align_stretch_horizontal")
    """Variantes do ícone `align_stretch_horizontal`."""
    AlignStretchVertical = _Variants60("align_stretch_vertical")
    """Variantes do ícone `align_stretch_vertical`."""
    AlignTop = _Variants23("align_top")
    """Variantes do ícone `align_top`."""
    AnimalCat = _Variants50("animal_cat")
    """Variantes do ícone `animal_cat`."""
    AnimalDog = _Variants28("animal_dog")
    """Variantes do ícone `animal_dog`."""
    AnimalPawPrint = _Variants35("animal_paw_print")
    """Variantes do ícone `animal_paw_print`."""
    AnimalRabbit = _Variants62("animal_rabbit")
    """Variantes do ícone `animal_rabbit`."""
    AnimalRabbitOff = _Variants64("animal_rabbit_off")
    """Variantes do ícone `animal_rabbit_off`."""
    AnimalTurtle = _Variants50("animal_turtle")
    """Variantes do ícone `animal_turtle`."""
    AppFolder = _Variants66("app_folder")
    """Variantes do ícone `app_folder`."""
    AppFolderHint = _Variants58("app_folder_hint")
    """Variantes do ícone `app_folder_hint`."""
    AppGeneric = _Variants68("app_generic")
    """Variantes do ícone `app_generic`."""
    AppRecent = _Variants21("app_recent")
    """Variantes do ícone `app_recent`."""
    AppStore = _Variants70("app_store")
    """Variantes do ícone `app_store`."""
    AppTitle = _Variants21("app_title")
    """Variantes do ícone `app_title`."""
    ApprovalsApp = _Variants72("approvals_app")
    """Variantes do ícone `approvals_app`."""
    Apps = _Variants35("apps")
    """Variantes do ícone `apps`."""
    AppsAddIn = _Variants23("apps_add_in")
    """Variantes do ícone `apps_add_in`."""
    AppsAddInOff = _Variants23("apps_add_in_off")
    """Variantes do ícone `apps_add_in_off`."""
    AppsBulletList = _Variants58("apps_bullet_list")
    """Variantes do ícone `apps_bullet_list`."""
    AppsList = _Variants74("apps_list")
    """Variantes do ícone `apps_list`."""
    AppsListDetail = _Variants74("apps_list_detail")
    """Variantes do ícone `apps_list_detail`."""
    AppsSettings = _Variants60("apps_settings")
    """Variantes do ícone `apps_settings`."""
    AppsShield = _Variants60("apps_shield")
    """Variantes do ícone `apps_shield`."""
    Archive = _Variants76("archive")
    """Variantes do ícone `archive`."""
    ArchiveArrowBack = _Variants23("archive_arrow_back")
    """Variantes do ícone `archive_arrow_back`."""
    ArchiveClock = _Variants23("archive_clock")
    """Variantes do ícone `archive_clock`."""
    ArchiveMultiple = _Variants28("archive_multiple")
    """Variantes do ícone `archive_multiple`."""
    ArchiveSettings = _Variants78("archive_settings")
    """Variantes do ícone `archive_settings`."""
    ArrowAutofitContent = _Variants21("arrow_autofit_content")
    """Variantes do ícone `arrow_autofit_content`."""
    ArrowAutofitDown = _Variants21("arrow_autofit_down")
    """Variantes do ícone `arrow_autofit_down`."""
    ArrowAutofitHeight = _Variants21("arrow_autofit_height")
    """Variantes do ícone `arrow_autofit_height`."""
    ArrowAutofitHeightDotted = _Variants21("arrow_autofit_height_dotted")
    """Variantes do ícone `arrow_autofit_height_dotted`."""
    ArrowAutofitHeightIn = _Variants21("arrow_autofit_height_in")
    """Variantes do ícone `arrow_autofit_height_in`."""
    ArrowAutofitUp = _Variants21("arrow_autofit_up")
    """Variantes do ícone `arrow_autofit_up`."""
    ArrowAutofitWidth = _Variants21("arrow_autofit_width")
    """Variantes do ícone `arrow_autofit_width`."""
    ArrowAutofitWidthDotted = _Variants21("arrow_autofit_width_dotted")
    """Variantes do ícone `arrow_autofit_width_dotted`."""
    ArrowBetweenDown = _Variants21("arrow_between_down")
    """Variantes do ícone `arrow_between_down`."""
    ArrowBetweenUp = _Variants58("arrow_between_up")
    """Variantes do ícone `arrow_between_up`."""
    ArrowBidirectionalLeftRight = _Variants50("arrow_bidirectional_left_right")
    """Variantes do ícone `arrow_bidirectional_left_right`."""
    ArrowBidirectionalUpDown = _Variants52("arrow_bidirectional_up_down")
    """Variantes do ícone `arrow_bidirectional_up_down`."""
    ArrowBounce = _Variants80("arrow_bounce")
    """Variantes do ícone `arrow_bounce`."""
    ArrowCircleDown = _Variants82("arrow_circle_down")
    """Variantes do ícone `arrow_circle_down`."""
    ArrowCircleDownDouble = _Variants21("arrow_circle_down_double")
    """Variantes do ícone `arrow_circle_down_double`."""
    ArrowCircleDownRight = _Variants52("arrow_circle_down_right")
    """Variantes do ícone `arrow_circle_down_right`."""
    ArrowCircleDownSplit = _Variants21("arrow_circle_down_split")
    """Variantes do ícone `arrow_circle_down_split`."""
    ArrowCircleDownUp = _Variants58("arrow_circle_down_up")
    """Variantes do ícone `arrow_circle_down_up`."""
    ArrowCircleLeft = _Variants82("arrow_circle_left")
    """Variantes do ícone `arrow_circle_left`."""
    ArrowCircleRight = _Variants82("arrow_circle_right")
    """Variantes do ícone `arrow_circle_right`."""
    ArrowCircleUp = _Variants82("arrow_circle_up")
    """Variantes do ícone `arrow_circle_up`."""
    ArrowCircleUpLeft = _Variants28("arrow_circle_up_left")
    """Variantes do ícone `arrow_circle_up_left`."""
    ArrowCircleUpRight = _Variants28("arrow_circle_up_right")
    """Variantes do ícone `arrow_circle_up_right`."""
    ArrowCircleUpSparkle = _Variants21("arrow_circle_up_sparkle")
    """Variantes do ícone `arrow_circle_up_sparkle`."""
    ArrowClockwise = _Variants30("arrow_clockwise")
    """Variantes do ícone `arrow_clockwise`."""
    ArrowClockwiseDashes = _Variants84("arrow_clockwise_dashes")
    """Variantes do ícone `arrow_clockwise_dashes`."""
    ArrowClockwiseDashesSettings = _Variants35("arrow_clockwise_dashes_settings")
    """Variantes do ícone `arrow_clockwise_dashes_settings`."""
    ArrowCollapseAll = _Variants28("arrow_collapse_all")
    """Variantes do ícone `arrow_collapse_all`."""
    ArrowCounterclockwise = _Variants82("arrow_counterclockwise")
    """Variantes do ícone `arrow_counterclockwise`."""
    ArrowCounterclockwiseDashes = _Variants21("arrow_counterclockwise_dashes")
    """Variantes do ícone `arrow_counterclockwise_dashes`."""
    ArrowCounterclockwiseInfo = _Variants86("arrow_counterclockwise_info")
    """Variantes do ícone `arrow_counterclockwise_info`."""
    ArrowCurveDownLeft = _Variants50("arrow_curve_down_left")
    """Variantes do ícone `arrow_curve_down_left`."""
    ArrowCurveDownRight = _Variants58("arrow_curve_down_right")
    """Variantes do ícone `arrow_curve_down_right`."""
    ArrowCurveUpLeft = _Variants58("arrow_curve_up_left")
    """Variantes do ícone `arrow_curve_up_left`."""
    ArrowCurveUpRight = _Variants58("arrow_curve_up_right")
    """Variantes do ícone `arrow_curve_up_right`."""
    ArrowDown = _Variants30("arrow_down")
    """Variantes do ícone `arrow_down`."""
    ArrowDownExclamation = _Variants28("arrow_down_exclamation")
    """Variantes do ícone `arrow_down_exclamation`."""
    ArrowDownLeft = _Variants82("arrow_down_left")
    """Variantes do ícone `arrow_down_left`."""
    ArrowDownRight = _Variants88("arrow_down_right")
    """Variantes do ícone `arrow_down_right`."""
    ArrowDownload = _Variants66("arrow_download")
    """Variantes do ícone `arrow_download`."""
    ArrowDownloadOff = _Variants23("arrow_download_off")
    """Variantes do ícone `arrow_download_off`."""
    ArrowEject = _Variants58("arrow_eject")
    """Variantes do ícone `arrow_eject`."""
    ArrowEnter = _Variants60("arrow_enter")
    """Variantes do ícone `arrow_enter`."""
    ArrowEnterLeft = _Variants21("arrow_enter_left")
    """Variantes do ícone `arrow_enter_left`."""
    ArrowEnterUp = _Variants21("arrow_enter_up")
    """Variantes do ícone `arrow_enter_up`."""
    ArrowExit = _Variants82("arrow_exit")
    """Variantes do ícone `arrow_exit`."""
    ArrowExpand = _Variants50("arrow_expand")
    """Variantes do ícone `arrow_expand`."""
    ArrowExpandAll = _Variants28("arrow_expand_all")
    """Variantes do ícone `arrow_expand_all`."""
    ArrowExport = _Variants28("arrow_export")
    """Variantes do ícone `arrow_export`."""
    ArrowExportLtr = _Variants78("arrow_export_ltr")
    """Variantes do ícone `arrow_export_ltr`."""
    ArrowExportRtl = _Variants78("arrow_export_rtl")
    """Variantes do ícone `arrow_export_rtl`."""
    ArrowExportUp = _Variants78("arrow_export_up")
    """Variantes do ícone `arrow_export_up`."""
    ArrowFit = _Variants28("arrow_fit")
    """Variantes do ícone `arrow_fit`."""
    ArrowFitIn = _Variants28("arrow_fit_in")
    """Variantes do ícone `arrow_fit_in`."""
    ArrowFlowDiagonalUpRight = _Variants82("arrow_flow_diagonal_up_right")
    """Variantes do ícone `arrow_flow_diagonal_up_right`."""
    ArrowFlowSquareMultiple = _Variants23("arrow_flow_square_multiple")
    """Variantes do ícone `arrow_flow_square_multiple`."""
    ArrowFlowUpRight = _Variants90("arrow_flow_up_right")
    """Variantes do ícone `arrow_flow_up_right`."""
    ArrowFlowUpRightRectangleMultiple = _Variants21("arrow_flow_up_right_rectangle_multiple")
    """Variantes do ícone `arrow_flow_up_right_rectangle_multiple`."""
    ArrowForward = _Variants66("arrow_forward")
    """Variantes do ícone `arrow_forward`."""
    ArrowForwardDownLightning = _Variants21("arrow_forward_down_lightning")
    """Variantes do ícone `arrow_forward_down_lightning`."""
    ArrowForwardDownPerson = _Variants21("arrow_forward_down_person")
    """Variantes do ícone `arrow_forward_down_person`."""
    ArrowHookDownLeft = _Variants78("arrow_hook_down_left")
    """Variantes do ícone `arrow_hook_down_left`."""
    ArrowHookDownRight = _Variants78("arrow_hook_down_right")
    """Variantes do ícone `arrow_hook_down_right`."""
    ArrowHookUpLeft = _Variants78("arrow_hook_up_left")
    """Variantes do ícone `arrow_hook_up_left`."""
    ArrowHookUpRight = _Variants78("arrow_hook_up_right")
    """Variantes do ícone `arrow_hook_up_right`."""
    ArrowImport = _Variants78("arrow_import")
    """Variantes do ícone `arrow_import`."""
    ArrowJoin = _Variants58("arrow_join")
    """Variantes do ícone `arrow_join`."""
    ArrowLeft = _Variants82("arrow_left")
    """Variantes do ícone `arrow_left`."""
    ArrowMaximize = _Variants23("arrow_maximize")
    """Variantes do ícone `arrow_maximize`."""
    ArrowMaximizeTopLeftBottomRight = _Variants50("arrow_maximize_top_left_bottom_right")
    """Variantes do ícone `arrow_maximize_top_left_bottom_right`."""
    ArrowMaximizeVertical = _Variants92("arrow_maximize_vertical")
    """Variantes do ícone `arrow_maximize_vertical`."""
    ArrowMinimize = _Variants50("arrow_minimize")
    """Variantes do ícone `arrow_minimize`."""
    ArrowMinimizeTopLeftBottomRight = _Variants50("arrow_minimize_top_left_bottom_right")
    """Variantes do ícone `arrow_minimize_top_left_bottom_right`."""
    ArrowMinimizeVertical = _Variants21("arrow_minimize_vertical")
    """Variantes do ícone `arrow_minimize_vertical`."""
    ArrowMove = _Variants21("arrow_move")
    """Variantes do ícone `arrow_move`."""
    ArrowMoveInward = _Variants58("arrow_move_inward")
    """Variantes do ícone `arrow_move_inward`."""
    ArrowNext = _Variants52("arrow_next")
    """Variantes do ícone `arrow_next`."""
    ArrowOutlineDownLeft = _Variants23("arrow_outline_down_left")
    """Variantes do ícone `arrow_outline_down_left`."""
    ArrowOutlineUpRight = _Variants94("arrow_outline_up_right")
    """Variantes do ícone `arrow_outline_up_right`."""
    ArrowParagraph = _Variants28("arrow_paragraph")
    """Variantes do ícone `arrow_paragraph`."""
    ArrowPrevious = _Variants52("arrow_previous")
    """Variantes do ícone `arrow_previous`."""
    ArrowRedo = _Variants66("arrow_redo")
    """Variantes do ícone `arrow_redo`."""
    ArrowRepeat1 = _Variants28("arrow_repeat_1")
    """Variantes do ícone `arrow_repeat_1`."""
    ArrowRepeatAll = _Variants37("arrow_repeat_all")
    """Variantes do ícone `arrow_repeat_all`."""
    ArrowRepeatAllOff = _Variants28("arrow_repeat_all_off")
    """Variantes do ícone `arrow_repeat_all_off`."""
    ArrowReply = _Variants66("arrow_reply")
    """Variantes do ícone `arrow_reply`."""
    ArrowReplyAll = _Variants66("arrow_reply_all")
    """Variantes do ícone `arrow_reply_all`."""
    ArrowReplyDown = _Variants28("arrow_reply_down")
    """Variantes do ícone `arrow_reply_down`."""
    ArrowReset = _Variants94("arrow_reset")
    """Variantes do ícone `arrow_reset`."""
    ArrowRight = _Variants82("arrow_right")
    """Variantes do ícone `arrow_right`."""
    ArrowRotateClockwise = _Variants23("arrow_rotate_clockwise")
    """Variantes do ícone `arrow_rotate_clockwise`."""
    ArrowRotateCounterclockwise = _Variants23("arrow_rotate_counterclockwise")
    """Variantes do ícone `arrow_rotate_counterclockwise`."""
    ArrowRouting = _Variants21("arrow_routing")
    """Variantes do ícone `arrow_routing`."""
    ArrowRoutingRectangleMultiple = _Variants21("arrow_routing_rectangle_multiple")
    """Variantes do ícone `arrow_routing_rectangle_multiple`."""
    ArrowShuffle = _Variants23("arrow_shuffle")
    """Variantes do ícone `arrow_shuffle`."""
    ArrowShuffleOff = _Variants23("arrow_shuffle_off")
    """Variantes do ícone `arrow_shuffle_off`."""
    ArrowSort = _Variants50("arrow_sort")
    """Variantes do ícone `arrow_sort`."""
    ArrowSortDown = _Variants28("arrow_sort_down")
    """Variantes do ícone `arrow_sort_down`."""
    ArrowSortDownLines = _Variants28("arrow_sort_down_lines")
    """Variantes do ícone `arrow_sort_down_lines`."""
    ArrowSortUp = _Variants28("arrow_sort_up")
    """Variantes do ícone `arrow_sort_up`."""
    ArrowSortUpLines = _Variants28("arrow_sort_up_lines")
    """Variantes do ícone `arrow_sort_up_lines`."""
    ArrowSplit = _Variants28("arrow_split")
    """Variantes do ícone `arrow_split`."""
    ArrowSprint = _Variants60("arrow_sprint")
    """Variantes do ícone `arrow_sprint`."""
    ArrowSquare = _Variants96("arrow_square")
    """Variantes do ícone `arrow_square`."""
    ArrowSquareDown = _Variants74("arrow_square_down")
    """Variantes do ícone `arrow_square_down`."""
    ArrowSquareUpRight = _Variants21("arrow_square_up_right")
    """Variantes do ícone `arrow_square_up_right`."""
    ArrowStepBack = _Variants60("arrow_step_back")
    """Variantes do ícone `arrow_step_back`."""
    ArrowStepIn = _Variants98("arrow_step_in")
    """Variantes do ícone `arrow_step_in`."""
    ArrowStepInDiagonalDownLeft = _Variants50("arrow_step_in_diagonal_down_left")
    """Variantes do ícone `arrow_step_in_diagonal_down_left`."""
    ArrowStepInLeft = _Variants98("arrow_step_in_left")
    """Variantes do ícone `arrow_step_in_left`."""
    ArrowStepInRight = _Variants98("arrow_step_in_right")
    """Variantes do ícone `arrow_step_in_right`."""
    ArrowStepOut = _Variants98("arrow_step_out")
    """Variantes do ícone `arrow_step_out`."""
    ArrowStepOver = _Variants60("arrow_step_over")
    """Variantes do ícone `arrow_step_over`."""
    ArrowSwap = _Variants50("arrow_swap")
    """Variantes do ícone `arrow_swap`."""
    ArrowSync = _Variants100("arrow_sync")
    """Variantes do ícone `arrow_sync`."""
    ArrowSyncCheckmark = _Variants21("arrow_sync_checkmark")
    """Variantes do ícone `arrow_sync_checkmark`."""
    ArrowSyncCircle = _Variants23("arrow_sync_circle")
    """Variantes do ícone `arrow_sync_circle`."""
    ArrowSyncDismiss = _Variants28("arrow_sync_dismiss")
    """Variantes do ícone `arrow_sync_dismiss`."""
    ArrowSyncOff = _Variants102("arrow_sync_off")
    """Variantes do ícone `arrow_sync_off`."""
    ArrowTrending = _Variants52("arrow_trending")
    """Variantes do ícone `arrow_trending`."""
    ArrowTrendingCheckmark = _Variants21("arrow_trending_checkmark")
    """Variantes do ícone `arrow_trending_checkmark`."""
    ArrowTrendingDown = _Variants28("arrow_trending_down")
    """Variantes do ícone `arrow_trending_down`."""
    ArrowTrendingLines = _Variants104("arrow_trending_lines")
    """Variantes do ícone `arrow_trending_lines`."""
    ArrowTrendingSettings = _Variants21("arrow_trending_settings")
    """Variantes do ícone `arrow_trending_settings`."""
    ArrowTrendingSparkle = _Variants21("arrow_trending_sparkle")
    """Variantes do ícone `arrow_trending_sparkle`."""
    ArrowTrendingText = _Variants21("arrow_trending_text")
    """Variantes do ícone `arrow_trending_text`."""
    ArrowTrendingWrench = _Variants21("arrow_trending_wrench")
    """Variantes do ícone `arrow_trending_wrench`."""
    ArrowTurnBidirectionalDownRight = _Variants21("arrow_turn_bidirectional_down_right")
    """Variantes do ícone `arrow_turn_bidirectional_down_right`."""
    ArrowTurnDownLeft = _Variants106("arrow_turn_down_left")
    """Variantes do ícone `arrow_turn_down_left`."""
    ArrowTurnDownRight = _Variants106("arrow_turn_down_right")
    """Variantes do ícone `arrow_turn_down_right`."""
    ArrowTurnDownUp = _Variants106("arrow_turn_down_up")
    """Variantes do ícone `arrow_turn_down_up`."""
    ArrowTurnLeftDown = _Variants106("arrow_turn_left_down")
    """Variantes do ícone `arrow_turn_left_down`."""
    ArrowTurnLeftRight = _Variants106("arrow_turn_left_right")
    """Variantes do ícone `arrow_turn_left_right`."""
    ArrowTurnLeftUp = _Variants106("arrow_turn_left_up")
    """Variantes do ícone `arrow_turn_left_up`."""
    ArrowTurnRight = _Variants108("arrow_turn_right")
    """Variantes do ícone `arrow_turn_right`."""
    ArrowTurnRightDown = _Variants106("arrow_turn_right_down")
    """Variantes do ícone `arrow_turn_right_down`."""
    ArrowTurnRightLeft = _Variants106("arrow_turn_right_left")
    """Variantes do ícone `arrow_turn_right_left`."""
    ArrowTurnRightUp = _Variants106("arrow_turn_right_up")
    """Variantes do ícone `arrow_turn_right_up`."""
    ArrowTurnUpDown = _Variants106("arrow_turn_up_down")
    """Variantes do ícone `arrow_turn_up_down`."""
    ArrowTurnUpLeft = _Variants106("arrow_turn_up_left")
    """Variantes do ícone `arrow_turn_up_left`."""
    ArrowUndo = _Variants66("arrow_undo")
    """Variantes do ícone `arrow_undo`."""
    ArrowUp = _Variants82("arrow_up")
    """Variantes do ícone `arrow_up`."""
    ArrowUpExclamation = _Variants28("arrow_up_exclamation")
    """Variantes do ícone `arrow_up_exclamation`."""
    ArrowUpLeft = _Variants108("arrow_up_left")
    """Variantes do ícone `arrow_up_left`."""
    ArrowUpRight = _Variants82("arrow_up_right")
    """Variantes do ícone `arrow_up_right`."""
    ArrowUpRightDashes = _Variants82("arrow_up_right_dashes")
    """Variantes do ícone `arrow_up_right_dashes`."""
    ArrowUpSquareSettings = _Variants70("arrow_up_square_settings")
    """Variantes do ícone `arrow_up_square_settings`."""
    ArrowUpload = _Variants90("arrow_upload")
    """Variantes do ícone `arrow_upload`."""
    ArrowWrap = _Variants64("arrow_wrap")
    """Variantes do ícone `arrow_wrap`."""
    ArrowWrapOff = _Variants58("arrow_wrap_off")
    """Variantes do ícone `arrow_wrap_off`."""
    ArrowWrapUpToDown = _Variants64("arrow_wrap_up_to_down")
    """Variantes do ícone `arrow_wrap_up_to_down`."""
    ArrowsBidirectional = _Variants21("arrows_bidirectional")
    """Variantes do ícone `arrows_bidirectional`."""
    Attach = _Variants30("attach")
    """Variantes do ícone `attach`."""
    AttachArrowRight = _Variants21("attach_arrow_right")
    """Variantes do ícone `attach_arrow_right`."""
    AttachText = _Variants21("attach_text")
    """Variantes do ícone `attach_text`."""
    Audio = _Variants9("audio")
    """Variantes do ícone `audio`."""
    AutoFit = _Variants111("auto_fit")
    """Variantes do ícone `auto_fit`."""
    AutoFitHeight = _Variants113("auto_fit_height")
    """Variantes do ícone `auto_fit_height`."""
    AutoFitWidth = _Variants115("auto_fit_width")
    """Variantes do ícone `auto_fit_width`."""
    Autocorrect = _Variants115("autocorrect")
    """Variantes do ícone `autocorrect`."""
    Autopilot = _Variants113("autopilot")
    """Variantes do ícone `autopilot`."""
    Autosum = _Variants28("autosum")
    """Variantes do ícone `autosum`."""
    Backpack = _Variants82("backpack")
    """Variantes do ícone `backpack`."""
    BackpackAdd = _Variants117("backpack_add")
    """Variantes do ícone `backpack_add`."""
    Backspace = _Variants28("backspace")
    """Variantes do ícone `backspace`."""
    Badge = _Variants21("badge")
    """Variantes do ícone `badge`."""
    Balcony = _Variants60("balcony")
    """Variantes do ícone `balcony`."""
    Balloon = _Variants52("balloon")
    """Variantes do ícone `balloon`."""
    BarcodeScanner = _Variants23("barcode_scanner")
    """Variantes do ícone `barcode_scanner`."""
    BarcodeScannerAdd = _Variants23("barcode_scanner_add")
    """Variantes do ícone `barcode_scanner_add`."""
    BarcodeScannerDismiss = _Variants23("barcode_scanner_dismiss")
    """Variantes do ícone `barcode_scanner_dismiss`."""
    Battery0 = _Variants113("battery_0")
    """Variantes do ícone `battery_0`."""
    Battery1 = _Variants113("battery_1")
    """Variantes do ícone `battery_1`."""
    Battery10 = _Variants62("battery_10")
    """Variantes do ícone `battery_10`."""
    Battery2 = _Variants113("battery_2")
    """Variantes do ícone `battery_2`."""
    Battery3 = _Variants113("battery_3")
    """Variantes do ícone `battery_3`."""
    Battery4 = _Variants113("battery_4")
    """Variantes do ícone `battery_4`."""
    Battery5 = _Variants113("battery_5")
    """Variantes do ícone `battery_5`."""
    Battery6 = _Variants113("battery_6")
    """Variantes do ícone `battery_6`."""
    Battery7 = _Variants113("battery_7")
    """Variantes do ícone `battery_7`."""
    Battery8 = _Variants113("battery_8")
    """Variantes do ícone `battery_8`."""
    Battery9 = _Variants113("battery_9")
    """Variantes do ícone `battery_9`."""
    BatteryCharge = _Variants113("battery_charge")
    """Variantes do ícone `battery_charge`."""
    BatteryCharge0 = _Variants58("battery_charge_0")
    """Variantes do ícone `battery_charge_0`."""
    BatteryCharge1 = _Variants58("battery_charge_1")
    """Variantes do ícone `battery_charge_1`."""
    BatteryCharge10 = _Variants58("battery_charge_10")
    """Variantes do ícone `battery_charge_10`."""
    BatteryCharge2 = _Variants58("battery_charge_2")
    """Variantes do ícone `battery_charge_2`."""
    BatteryCharge3 = _Variants58("battery_charge_3")
    """Variantes do ícone `battery_charge_3`."""
    BatteryCharge4 = _Variants58("battery_charge_4")
    """Variantes do ícone `battery_charge_4`."""
    BatteryCharge5 = _Variants58("battery_charge_5")
    """Variantes do ícone `battery_charge_5`."""
    BatteryCharge6 = _Variants58("battery_charge_6")
    """Variantes do ícone `battery_charge_6`."""
    BatteryCharge7 = _Variants58("battery_charge_7")
    """Variantes do ícone `battery_charge_7`."""
    BatteryCharge8 = _Variants58("battery_charge_8")
    """Variantes do ícone `battery_charge_8`."""
    BatteryCharge9 = _Variants58("battery_charge_9")
    """Variantes do ícone `battery_charge_9`."""
    BatteryCheckmark = _Variants21("battery_checkmark")
    """Variantes do ícone `battery_checkmark`."""
    BatterySaver = _Variants21("battery_saver")
    """Variantes do ícone `battery_saver`."""
    BatteryWarning = _Variants21("battery_warning")
    """Variantes do ícone `battery_warning`."""
    Beach = _Variants35("beach")
    """Variantes do ícone `beach`."""
    Beaker = _Variants90("beaker")
    """Variantes do ícone `beaker`."""
    BeakerAdd = _Variants21("beaker_add")
    """Variantes do ícone `beaker_add`."""
    BeakerDismiss = _Variants21("beaker_dismiss")
    """Variantes do ícone `beaker_dismiss`."""
    BeakerEdit = _Variants21("beaker_edit")
    """Variantes do ícone `beaker_edit`."""
    BeakerEmpty = _Variants56("beaker_empty")
    """Variantes do ícone `beaker_empty`."""
    BeakerOff = _Variants64("beaker_off")
    """Variantes do ícone `beaker_off`."""
    BeakerSettings = _Variants60("beaker_settings")
    """Variantes do ícone `beaker_settings`."""
    Bed = _Variants28("bed")
    """Variantes do ícone `bed`."""
    Bench = _Variants21("bench")
    """Variantes do ícone `bench`."""
    BezierCurveSquare = _Variants119("bezier_curve_square")
    """Variantes do ícone `bezier_curve_square`."""
    BinFull = _Variants92("bin_full")
    """Variantes do ícone `bin_full`."""
    BinRecycle = _Variants21("bin_recycle")
    """Variantes do ícone `bin_recycle`."""
    BinRecycleFull = _Variants21("bin_recycle_full")
    """Variantes do ícone `bin_recycle_full`."""
    BinderTriangle = _Variants90("binder_triangle")
    """Variantes do ícone `binder_triangle`."""
    Bluetooth = _Variants23("bluetooth")
    """Variantes do ícone `bluetooth`."""
    BluetoothConnected = _Variants21("bluetooth_connected")
    """Variantes do ícone `bluetooth_connected`."""
    BluetoothDisabled = _Variants21("bluetooth_disabled")
    """Variantes do ícone `bluetooth_disabled`."""
    BluetoothSearching = _Variants21("bluetooth_searching")
    """Variantes do ícone `bluetooth_searching`."""
    Blur = _Variants50("blur")
    """Variantes do ícone `blur`."""
    Board = _Variants121("board")
    """Variantes do ícone `board`."""
    BoardGames = _Variants58("board_games")
    """Variantes do ícone `board_games`."""
    BoardHeart = _Variants28("board_heart")
    """Variantes do ícone `board_heart`."""
    BoardSplit = _Variants37("board_split")
    """Variantes do ícone `board_split`."""
    Book = _Variants35("book")
    """Variantes do ícone `book`."""
    BookAdd = _Variants41("book_add")
    """Variantes do ícone `book_add`."""
    BookArrowClockwise = _Variants21("book_arrow_clockwise")
    """Variantes do ícone `book_arrow_clockwise`."""
    BookClock = _Variants21("book_clock")
    """Variantes do ícone `book_clock`."""
    BookCoins = _Variants21("book_coins")
    """Variantes do ícone `book_coins`."""
    BookCompass = _Variants21("book_compass")
    """Variantes do ícone `book_compass`."""
    BookContacts = _Variants123("book_contacts")
    """Variantes do ícone `book_contacts`."""
    BookDatabase = _Variants48("book_database")
    """Variantes do ícone `book_database`."""
    BookDefault = _Variants126("book_default")
    """Variantes do ícone `book_default`."""
    BookDismiss = _Variants60("book_dismiss")
    """Variantes do ícone `book_dismiss`."""
    BookExclamationMark = _Variants21("book_exclamation_mark")
    """Variantes do ícone `book_exclamation_mark`."""
    BookGlobe = _Variants21("book_globe")
    """Variantes do ícone `book_globe`."""
    BookInformation = _Variants21("book_information")
    """Variantes do ícone `book_information`."""
    BookLetter = _Variants21("book_letter")
    """Variantes do ícone `book_letter`."""
    BookNumber = _Variants28("book_number")
    """Variantes do ícone `book_number`."""
    BookOpen = _Variants35("book_open")
    """Variantes do ícone `book_open`."""
    BookOpenGlobe = _Variants21("book_open_globe")
    """Variantes do ícone `book_open_globe`."""
    BookOpenLightbulb = _Variants128("book_open_lightbulb")
    """Variantes do ícone `book_open_lightbulb`."""
    BookOpenMicrophone = _Variants86("book_open_microphone")
    """Variantes do ícone `book_open_microphone`."""
    BookPulse = _Variants21("book_pulse")
    """Variantes do ícone `book_pulse`."""
    BookQuestionMark = _Variants21("book_question_mark")
    """Variantes do ícone `book_question_mark`."""
    BookQuestionMarkAr = _Variants70("book_question_mark__ar")
    """Variantes do ícone `book_question_mark__ar`."""
    BookQuestionMarkRtl = _Variants21("book_question_mark_rtl")
    """Variantes do ícone `book_question_mark_rtl`."""
    BookSearch = _Variants21("book_search")
    """Variantes do ícone `book_search`."""
    BookStar = _Variants130("book_star")
    """Variantes do ícone `book_star`."""
    BookTemplate = _Variants58("book_template")
    """Variantes do ícone `book_template`."""
    BookTheta = _Variants21("book_theta")
    """Variantes do ícone `book_theta`."""
    BookToolbox = _Variants28("book_toolbox")
    """Variantes do ícone `book_toolbox`."""
    Bookmark = _Variants132("bookmark")
    """Variantes do ícone `bookmark`."""
    BookmarkAdd = _Variants21("bookmark_add")
    """Variantes do ícone `bookmark_add`."""
    BookmarkMultiple = _Variants23("bookmark_multiple")
    """Variantes do ícone `bookmark_multiple`."""
    BookmarkOff = _Variants21("bookmark_off")
    """Variantes do ícone `bookmark_off`."""
    BookmarkSearch = _Variants21("bookmark_search")
    """Variantes do ícone `bookmark_search`."""
    BorderAll = _Variants28("border_all")
    """Variantes do ícone `border_all`."""
    BorderBottom = _Variants21("border_bottom")
    """Variantes do ícone `border_bottom`."""
    BorderBottomDouble = _Variants21("border_bottom_double")
    """Variantes do ícone `border_bottom_double`."""
    BorderBottomThick = _Variants21("border_bottom_thick")
    """Variantes do ícone `border_bottom_thick`."""
    BorderInside = _Variants28("border_inside")
    """Variantes do ícone `border_inside`."""
    BorderLeft = _Variants21("border_left")
    """Variantes do ícone `border_left`."""
    BorderLeftRight = _Variants21("border_left_right")
    """Variantes do ícone `border_left_right`."""
    BorderNone = _Variants28("border_none")
    """Variantes do ícone `border_none`."""
    BorderOutside = _Variants21("border_outside")
    """Variantes do ícone `border_outside`."""
    BorderOutsideThick = _Variants21("border_outside_thick")
    """Variantes do ícone `border_outside_thick`."""
    BorderRight = _Variants21("border_right")
    """Variantes do ícone `border_right`."""
    BorderTop = _Variants21("border_top")
    """Variantes do ícone `border_top`."""
    BorderTopBottom = _Variants21("border_top_bottom")
    """Variantes do ícone `border_top_bottom`."""
    BorderTopBottomDouble = _Variants21("border_top_bottom_double")
    """Variantes do ícone `border_top_bottom_double`."""
    BorderTopBottomThick = _Variants21("border_top_bottom_thick")
    """Variantes do ícone `border_top_bottom_thick`."""
    Bot = _Variants134("bot")
    """Variantes do ícone `bot`."""
    BotAdd = _Variants23("bot_add")
    """Variantes do ícone `bot_add`."""
    BotSparkle = _Variants136("bot_sparkle")
    """Variantes do ícone `bot_sparkle`."""
    BowTie = _Variants21("bow_tie")
    """Variantes do ícone `bow_tie`."""
    BowlChopsticks = _Variants50("bowl_chopsticks")
    """Variantes do ícone `bowl_chopsticks`."""
    BowlSalad = _Variants21("bowl_salad")
    """Variantes do ícone `bowl_salad`."""
    Box = _Variants23("box")
    """Variantes do ícone `box`."""
    BoxArrowLeft = _Variants21("box_arrow_left")
    """Variantes do ícone `box_arrow_left`."""
    BoxArrowUp = _Variants21("box_arrow_up")
    """Variantes do ícone `box_arrow_up`."""
    BoxCheckmark = _Variants23("box_checkmark")
    """Variantes do ícone `box_checkmark`."""
    BoxDismiss = _Variants21("box_dismiss")
    """Variantes do ícone `box_dismiss`."""
    BoxEdit = _Variants21("box_edit")
    """Variantes do ícone `box_edit`."""
    BoxMultiple = _Variants21("box_multiple")
    """Variantes do ícone `box_multiple`."""
    BoxMultipleArrowLeft = _Variants21("box_multiple_arrow_left")
    """Variantes do ícone `box_multiple_arrow_left`."""
    BoxMultipleArrowRight = _Variants21("box_multiple_arrow_right")
    """Variantes do ícone `box_multiple_arrow_right`."""
    BoxMultipleCheckmark = _Variants21("box_multiple_checkmark")
    """Variantes do ícone `box_multiple_checkmark`."""
    BoxMultipleSearch = _Variants21("box_multiple_search")
    """Variantes do ícone `box_multiple_search`."""
    BoxQuestionMark = _Variants58("box_question_mark")
    """Variantes do ícone `box_question_mark`."""
    BoxSearch = _Variants28("box_search")
    """Variantes do ícone `box_search`."""
    BoxToolbox = _Variants21("box_toolbox")
    """Variantes do ícone `box_toolbox`."""
    Braces = _Variants23("braces")
    """Variantes do ícone `braces`."""
    BracesCheckmark = _Variants56("braces_checkmark")
    """Variantes do ícone `braces_checkmark`."""
    BracesDismiss = _Variants56("braces_dismiss")
    """Variantes do ícone `braces_dismiss`."""
    BracesVariable = _Variants92("braces_variable")
    """Variantes do ícone `braces_variable`."""
    Brain = _Variants23("brain")
    """Variantes do ícone `brain`."""
    BrainCircuit = _Variants86("brain_circuit")
    """Variantes do ícone `brain_circuit`."""
    BrainSparkle = _Variants23("brain_sparkle")
    """Variantes do ícone `brain_sparkle`."""
    Branch = _Variants28("branch")
    """Variantes do ícone `branch`."""
    BranchCompare = _Variants28("branch_compare")
    """Variantes do ícone `branch_compare`."""
    BranchFork = _Variants90("branch_fork")
    """Variantes do ícone `branch_fork`."""
    BranchForkHint = _Variants21("branch_fork_hint")
    """Variantes do ícone `branch_fork_hint`."""
    BranchForkLink = _Variants21("branch_fork_link")
    """Variantes do ícone `branch_fork_link`."""
    BranchRequest = _Variants60("branch_request")
    """Variantes do ícone `branch_request`."""
    BranchRequestClosed = _Variants60("branch_request_closed")
    """Variantes do ícone `branch_request_closed`."""
    BranchRequestDraft = _Variants60("branch_request_draft")
    """Variantes do ícone `branch_request_draft`."""
    BreakoutRoom = _Variants78("breakout_room")
    """Variantes do ícone `breakout_room`."""
    Briefcase = _Variants39("briefcase")
    """Variantes do ícone `briefcase`."""
    BriefcaseMedical = _Variants90("briefcase_medical")
    """Variantes do ícone `briefcase_medical`."""
    BriefcaseOff = _Variants23("briefcase_off")
    """Variantes do ícone `briefcase_off`."""
    BriefcasePerson = _Variants70("briefcase_person")
    """Variantes do ícone `briefcase_person`."""
    BriefcaseSearch = _Variants21("briefcase_search")
    """Variantes do ícone `briefcase_search`."""
    BrightnessHigh = _Variants23("brightness_high")
    """Variantes do ícone `brightness_high`."""
    BrightnessLow = _Variants23("brightness_low")
    """Variantes do ícone `brightness_low`."""
    BroadActivityFeed = _Variants28("broad_activity_feed")
    """Variantes do ícone `broad_activity_feed`."""
    Broom = _Variants78("broom")
    """Variantes do ícone `broom`."""
    BroomSparkle = _Variants60("broom_sparkle")
    """Variantes do ícone `broom_sparkle`."""
    BubbleMultiple = _Variants58("bubble_multiple")
    """Variantes do ícone `bubble_multiple`."""
    Bug = _Variants28("bug")
    """Variantes do ícone `bug`."""
    BugArrowCounterclockwise = _Variants58("bug_arrow_counterclockwise")
    """Variantes do ícone `bug_arrow_counterclockwise`."""
    BugProhibited = _Variants58("bug_prohibited")
    """Variantes do ícone `bug_prohibited`."""
    Building = _Variants138("building")
    """Variantes do ícone `building`."""
    BuildingBank = _Variants37("building_bank")
    """Variantes do ícone `building_bank`."""
    BuildingBankLink = _Variants37("building_bank_link")
    """Variantes do ícone `building_bank_link`."""
    BuildingBankToolbox = _Variants21("building_bank_toolbox")
    """Variantes do ícone `building_bank_toolbox`."""
    BuildingCheckmark = _Variants60("building_checkmark")
    """Variantes do ícone `building_checkmark`."""
    BuildingCloud = _Variants70("building_cloud")
    """Variantes do ícone `building_cloud`."""
    BuildingDesktop = _Variants90("building_desktop")
    """Variantes do ícone `building_desktop`."""
    BuildingFactory = _Variants23("building_factory")
    """Variantes do ícone `building_factory`."""
    BuildingGovernment = _Variants48("building_government")
    """Variantes do ícone `building_government`."""
    BuildingGovernmentSearch = _Variants48("building_government_search")
    """Variantes do ícone `building_government_search`."""
    BuildingHome = _Variants48("building_home")
    """Variantes do ícone `building_home`."""
    BuildingLighthouse = _Variants23("building_lighthouse")
    """Variantes do ícone `building_lighthouse`."""
    BuildingMosque = _Variants82("building_mosque")
    """Variantes do ícone `building_mosque`."""
    BuildingMultiple = _Variants140("building_multiple")
    """Variantes do ícone `building_multiple`."""
    BuildingPeople = _Variants54("building_people")
    """Variantes do ícone `building_people`."""
    BuildingRetail = _Variants21("building_retail")
    """Variantes do ícone `building_retail`."""
    BuildingRetailMoney = _Variants21("building_retail_money")
    """Variantes do ícone `building_retail_money`."""
    BuildingRetailMore = _Variants142("building_retail_more")
    """Variantes do ícone `building_retail_more`."""
    BuildingRetailShield = _Variants21("building_retail_shield")
    """Variantes do ícone `building_retail_shield`."""
    BuildingRetailToolbox = _Variants21("building_retail_toolbox")
    """Variantes do ícone `building_retail_toolbox`."""
    BuildingShop = _Variants28("building_shop")
    """Variantes do ícone `building_shop`."""
    BuildingSkyscraper = _Variants28("building_skyscraper")
    """Variantes do ícone `building_skyscraper`."""
    BuildingStore = _Variants144("building_store")
    """Variantes do ícone `building_store`."""
    BuildingSwap = _Variants88("building_swap")
    """Variantes do ícone `building_swap`."""
    BuildingTownhouse = _Variants142("building_townhouse")
    """Variantes do ícone `building_townhouse`."""
    BuildingYurt = _Variants60("building_yurt")
    """Variantes do ícone `building_yurt`."""
    Button = _Variants60("button")
    """Variantes do ícone `button`."""
    Calculator = _Variants28("calculator")
    """Variantes do ícone `calculator`."""
    CalculatorArrowClockwise = _Variants21("calculator_arrow_clockwise")
    """Variantes do ícone `calculator_arrow_clockwise`."""
    CalculatorMultiple = _Variants28("calculator_multiple")
    """Variantes do ícone `calculator_multiple`."""
    Calendar = _Variants146("calendar")
    """Variantes do ícone `calendar`."""
    Calendar3Day = _Variants78("calendar_3_day")
    """Variantes do ícone `calendar_3_day`."""
    CalendarAdd = _Variants50("calendar_add")
    """Variantes do ícone `calendar_add`."""
    CalendarAgenda = _Variants50("calendar_agenda")
    """Variantes do ícone `calendar_agenda`."""
    CalendarAgendaClock = _Variants50("calendar_agenda_clock")
    """Variantes do ícone `calendar_agenda_clock`."""
    CalendarArrowCounterclockwise = _Variants23("calendar_arrow_counterclockwise")
    """Variantes do ícone `calendar_arrow_counterclockwise`."""
    CalendarArrowDown = _Variants21("calendar_arrow_down")
    """Variantes do ícone `calendar_arrow_down`."""
    CalendarArrowRepeatAll = _Variants23("calendar_arrow_repeat_all")
    """Variantes do ícone `calendar_arrow_repeat_all`."""
    CalendarArrowRight = _Variants28("calendar_arrow_right")
    """Variantes do ícone `calendar_arrow_right`."""
    CalendarAssistant = _Variants28("calendar_assistant")
    """Variantes do ícone `calendar_assistant`."""
    CalendarCancel = _Variants148("calendar_cancel")
    """Variantes do ícone `calendar_cancel`."""
    CalendarChat = _Variants23("calendar_chat")
    """Variantes do ícone `calendar_chat`."""
    CalendarCheckmark = _Variants150("calendar_checkmark")
    """Variantes do ícone `calendar_checkmark`."""
    CalendarCheckmarkCenter = _Variants23("calendar_checkmark_center")
    """Variantes do ícone `calendar_checkmark_center`."""
    CalendarCheckmarkSparkle = _Variants23("calendar_checkmark_sparkle")
    """Variantes do ícone `calendar_checkmark_sparkle`."""
    CalendarClock = _Variants148("calendar_clock")
    """Variantes do ícone `calendar_clock`."""
    CalendarDataBar = _Variants152("calendar_data_bar")
    """Variantes do ícone `calendar_data_bar`."""
    CalendarDate = _Variants41("calendar_date")
    """Variantes do ícone `calendar_date`."""
    CalendarDay = _Variants78("calendar_day")
    """Variantes do ícone `calendar_day`."""
    CalendarEdit = _Variants154("calendar_edit")
    """Variantes do ícone `calendar_edit`."""
    CalendarEmpty = _Variants66("calendar_empty")
    """Variantes do ícone `calendar_empty`."""
    CalendarError = _Variants28("calendar_error")
    """Variantes do ícone `calendar_error`."""
    CalendarEye = _Variants62("calendar_eye")
    """Variantes do ícone `calendar_eye`."""
    CalendarInfo = _Variants60("calendar_info")
    """Variantes do ícone `calendar_info`."""
    CalendarLink = _Variants156("calendar_link")
    """Variantes do ícone `calendar_link`."""
    CalendarLock = _Variants23("calendar_lock")
    """Variantes do ícone `calendar_lock`."""
    CalendarLtr = _Variants30("calendar_ltr")
    """Variantes do ícone `calendar_ltr`."""
    CalendarMail = _Variants60("calendar_mail")
    """Variantes do ícone `calendar_mail`."""
    CalendarMention = _Variants60("calendar_mention")
    """Variantes do ícone `calendar_mention`."""
    CalendarMonth = _Variants78("calendar_month")
    """Variantes do ícone `calendar_month`."""
    CalendarMultiple = _Variants78("calendar_multiple")
    """Variantes do ícone `calendar_multiple`."""
    CalendarNote = _Variants90("calendar_note")
    """Variantes do ícone `calendar_note`."""
    CalendarPattern = _Variants158("calendar_pattern")
    """Variantes do ícone `calendar_pattern`."""
    CalendarPeople = _Variants160("calendar_people")
    """Variantes do ícone `calendar_people`."""
    CalendarPerson = _Variants90("calendar_person")
    """Variantes do ícone `calendar_person`."""
    CalendarPhone = _Variants60("calendar_phone")
    """Variantes do ícone `calendar_phone`."""
    CalendarPlay = _Variants50("calendar_play")
    """Variantes do ícone `calendar_play`."""
    CalendarQuestionMark = _Variants28("calendar_question_mark")
    """Variantes do ícone `calendar_question_mark`."""
    CalendarRecord = _Variants23("calendar_record")
    """Variantes do ícone `calendar_record`."""
    CalendarReply = _Variants162("calendar_reply")
    """Variantes do ícone `calendar_reply`."""
    CalendarRtl = _Variants82("calendar_rtl")
    """Variantes do ícone `calendar_rtl`."""
    CalendarSearch = _Variants60("calendar_search")
    """Variantes do ícone `calendar_search`."""
    CalendarSettings = _Variants23("calendar_settings")
    """Variantes do ícone `calendar_settings`."""
    CalendarShield = _Variants23("calendar_shield")
    """Variantes do ícone `calendar_shield`."""
    CalendarSparkle = _Variants66("calendar_sparkle")
    """Variantes do ícone `calendar_sparkle`."""
    CalendarStar = _Variants28("calendar_star")
    """Variantes do ícone `calendar_star`."""
    CalendarSync = _Variants54("calendar_sync")
    """Variantes do ícone `calendar_sync`."""
    CalendarTemplate = _Variants142("calendar_template")
    """Variantes do ícone `calendar_template`."""
    CalendarToday = _Variants50("calendar_today")
    """Variantes do ícone `calendar_today`."""
    CalendarTodo = _Variants111("calendar_todo")
    """Variantes do ícone `calendar_todo`."""
    CalendarToolbox = _Variants21("calendar_toolbox")
    """Variantes do ícone `calendar_toolbox`."""
    CalendarVideo = _Variants41("calendar_video")
    """Variantes do ícone `calendar_video`."""
    CalendarWeekNumbers = _Variants21("calendar_week_numbers")
    """Variantes do ícone `calendar_week_numbers`."""
    CalendarWeekStart = _Variants41("calendar_week_start")
    """Variantes do ícone `calendar_week_start`."""
    CalendarWorkWeek = _Variants78("calendar_work_week")
    """Variantes do ícone `calendar_work_week`."""
    Call = _Variants82("call")
    """Variantes do ícone `call`."""
    CallAdd = _Variants28("call_add")
    """Variantes do ícone `call_add`."""
    CallCheckmark = _Variants21("call_checkmark")
    """Variantes do ícone `call_checkmark`."""
    CallChevronDown = _Variants23("call_chevron_down")
    """Variantes do ícone `call_chevron_down`."""
    CallConnecting = _Variants58("call_connecting")
    """Variantes do ícone `call_connecting`."""
    CallDismiss = _Variants28("call_dismiss")
    """Variantes do ícone `call_dismiss`."""
    CallEnd = _Variants82("call_end")
    """Variantes do ícone `call_end`."""
    CallExclamation = _Variants58("call_exclamation")
    """Variantes do ícone `call_exclamation`."""
    CallForward = _Variants23("call_forward")
    """Variantes do ícone `call_forward`."""
    CallInbound = _Variants37("call_inbound")
    """Variantes do ícone `call_inbound`."""
    CallMissed = _Variants80("call_missed")
    """Variantes do ícone `call_missed`."""
    CallOutbound = _Variants37("call_outbound")
    """Variantes do ícone `call_outbound`."""
    CallPark = _Variants23("call_park")
    """Variantes do ícone `call_park`."""
    CallPause = _Variants21("call_pause")
    """Variantes do ícone `call_pause`."""
    CallProhibited = _Variants37("call_prohibited")
    """Variantes do ícone `call_prohibited`."""
    CallRectangleLandscape = _Variants50("call_rectangle_landscape")
    """Variantes do ícone `call_rectangle_landscape`."""
    CallSquare = _Variants50("call_square")
    """Variantes do ícone `call_square`."""
    CallTransfer = _Variants90("call_transfer")
    """Variantes do ícone `call_transfer`."""
    CallWarning = _Variants50("call_warning")
    """Variantes do ícone `call_warning`."""
    CalligraphyPen = _Variants21("calligraphy_pen")
    """Variantes do ícone `calligraphy_pen`."""
    CalligraphyPenCheckmark = _Variants58("calligraphy_pen_checkmark")
    """Variantes do ícone `calligraphy_pen_checkmark`."""
    CalligraphyPenError = _Variants58("calligraphy_pen_error")
    """Variantes do ícone `calligraphy_pen_error`."""
    CalligraphyPenQuestionMark = _Variants58("calligraphy_pen_question_mark")
    """Variantes do ícone `calligraphy_pen_question_mark`."""
    Camera = _Variants164("camera")
    """Variantes do ícone `camera`."""
    CameraAdd = _Variants92("camera_add")
    """Variantes do ícone `camera_add`."""
    CameraArrowUp = _Variants28("camera_arrow_up")
    """Variantes do ícone `camera_arrow_up`."""
    CameraDome = _Variants37("camera_dome")
    """Variantes do ícone `camera_dome`."""
    CameraEdit = _Variants58("camera_edit")
    """Variantes do ícone `camera_edit`."""
    CameraOff = _Variants28("camera_off")
    """Variantes do ícone `camera_off`."""
    CameraSparkles = _Variants28("camera_sparkles")
    """Variantes do ícone `camera_sparkles`."""
    CameraSwitch = _Variants21("camera_switch")
    """Variantes do ícone `camera_switch`."""
    CardUi = _Variants21("card_ui")
    """Variantes do ícone `card_ui`."""
    CardUiInfo = _Variants28("card_ui_info")
    """Variantes do ícone `card_ui_info`."""
    CardUiPortraitFlip = _Variants28("card_ui_portrait_flip")
    """Variantes do ícone `card_ui_portrait_flip`."""
    CaretDown = _Variants52("caret_down")
    """Variantes do ícone `caret_down`."""
    CaretDownRight = _Variants52("caret_down_right")
    """Variantes do ícone `caret_down_right`."""
    CaretLeft = _Variants52("caret_left")
    """Variantes do ícone `caret_left`."""
    CaretRight = _Variants52("caret_right")
    """Variantes do ícone `caret_right`."""
    CaretUp = _Variants52("caret_up")
    """Variantes do ícone `caret_up`."""
    Cart = _Variants28("cart")
    """Variantes do ícone `cart`."""
    Cast = _Variants41("cast")
    """Variantes do ícone `cast`."""
    CastMultiple = _Variants41("cast_multiple")
    """Variantes do ícone `cast_multiple`."""
    CatchUp = _Variants28("catch_up")
    """Variantes do ícone `catch_up`."""
    Cd = _Variants56("cd")
    """Variantes do ícone `cd`."""
    Cellular3g = _Variants21("cellular_3g")
    """Variantes do ícone `cellular_3g`."""
    Cellular4g = _Variants21("cellular_4g")
    """Variantes do ícone `cellular_4g`."""
    Cellular5g = _Variants21("cellular_5g")
    """Variantes do ícone `cellular_5g`."""
    CellularData1 = _Variants21("cellular_data_1")
    """Variantes do ícone `cellular_data_1`."""
    CellularData2 = _Variants21("cellular_data_2")
    """Variantes do ícone `cellular_data_2`."""
    CellularData3 = _Variants21("cellular_data_3")
    """Variantes do ícone `cellular_data_3`."""
    CellularData4 = _Variants21("cellular_data_4")
    """Variantes do ícone `cellular_data_4`."""
    CellularData5 = _Variants21("cellular_data_5")
    """Variantes do ícone `cellular_data_5`."""
    CellularOff = _Variants21("cellular_off")
    """Variantes do ícone `cellular_off`."""
    CellularWarning = _Variants21("cellular_warning")
    """Variantes do ícone `cellular_warning`."""
    CenterHorizontal = _Variants21("center_horizontal")
    """Variantes do ícone `center_horizontal`."""
    CenterVertical = _Variants21("center_vertical")
    """Variantes do ícone `center_vertical`."""
    Certificate = _Variants48("certificate")
    """Variantes do ícone `certificate`."""
    CertificateOff = _Variants28("certificate_off")
    """Variantes do ícone `certificate_off`."""
    Channel = _Variants37("channel")
    """Variantes do ícone `channel`."""
    ChannelAdd = _Variants37("channel_add")
    """Variantes do ícone `channel_add`."""
    ChannelAlert = _Variants37("channel_alert")
    """Variantes do ícone `channel_alert`."""
    ChannelArrowLeft = _Variants37("channel_arrow_left")
    """Variantes do ícone `channel_arrow_left`."""
    ChannelArrowRight = _Variants50("channel_arrow_right")
    """Variantes do ícone `channel_arrow_right`."""
    ChannelDismiss = _Variants37("channel_dismiss")
    """Variantes do ícone `channel_dismiss`."""
    ChannelShare = _Variants80("channel_share")
    """Variantes do ícone `channel_share`."""
    ChannelSubtract = _Variants37("channel_subtract")
    """Variantes do ícone `channel_subtract`."""
    ChartMultiple = _Variants166("chart_multiple")
    """Variantes do ícone `chart_multiple`."""
    ChartPerson = _Variants117("chart_person")
    """Variantes do ícone `chart_person`."""
    Chat = _Variants46("chat")
    """Variantes do ícone `chat`."""
    ChatAdd = _Variants35("chat_add")
    """Variantes do ícone `chat_add`."""
    ChatArrowBack = _Variants60("chat_arrow_back")
    """Variantes do ícone `chat_arrow_back`."""
    ChatArrowBackDown = _Variants23("chat_arrow_back_down")
    """Variantes do ícone `chat_arrow_back_down`."""
    ChatArrowDoubleBack = _Variants60("chat_arrow_double_back")
    """Variantes do ícone `chat_arrow_double_back`."""
    ChatBubblesQuestion = _Variants168("chat_bubbles_question")
    """Variantes do ícone `chat_bubbles_question`."""
    ChatCheckmark = _Variants82("chat_checkmark")
    """Variantes do ícone `chat_checkmark`."""
    ChatCursor = _Variants28("chat_cursor")
    """Variantes do ícone `chat_cursor`."""
    ChatDismiss = _Variants28("chat_dismiss")
    """Variantes do ícone `chat_dismiss`."""
    ChatEmpty = _Variants82("chat_empty")
    """Variantes do ícone `chat_empty`."""
    ChatHelp = _Variants28("chat_help")
    """Variantes do ícone `chat_help`."""
    ChatHintHalf = _Variants28("chat_hint_half")
    """Variantes do ícone `chat_hint_half`."""
    ChatHistory = _Variants41("chat_history")
    """Variantes do ícone `chat_history`."""
    ChatLock = _Variants50("chat_lock")
    """Variantes do ícone `chat_lock`."""
    ChatMail = _Variants58("chat_mail")
    """Variantes do ícone `chat_mail`."""
    ChatMore = _Variants144("chat_more")
    """Variantes do ícone `chat_more`."""
    ChatMultiple = _Variants134("chat_multiple")
    """Variantes do ícone `chat_multiple`."""
    ChatMultipleCheckmark = _Variants50("chat_multiple_checkmark")
    """Variantes do ícone `chat_multiple_checkmark`."""
    ChatMultipleHeart = _Variants62("chat_multiple_heart")
    """Variantes do ícone `chat_multiple_heart`."""
    ChatMultipleMinus = _Variants50("chat_multiple_minus")
    """Variantes do ícone `chat_multiple_minus`."""
    ChatMultiplePerson = _Variants23("chat_multiple_person")
    """Variantes do ícone `chat_multiple_person`."""
    ChatOff = _Variants28("chat_off")
    """Variantes do ícone `chat_off`."""
    ChatPerson = _Variants58("chat_person")
    """Variantes do ícone `chat_person`."""
    ChatSettings = _Variants28("chat_settings")
    """Variantes do ícone `chat_settings`."""
    ChatSparkle = _Variants23("chat_sparkle")
    """Variantes do ícone `chat_sparkle`."""
    ChatVideo = _Variants21("chat_video")
    """Variantes do ícone `chat_video`."""
    ChatWarning = _Variants28("chat_warning")
    """Variantes do ícone `chat_warning`."""
    Check = _Variants21("check")
    """Variantes do ícone `check`."""
    Checkbox = _Variants144("checkbox")
    """Variantes do ícone `checkbox`."""
    Checkbox1 = _Variants21("checkbox_1")
    """Variantes do ícone `checkbox_1`."""
    Checkbox2 = _Variants21("checkbox_2")
    """Variantes do ícone `checkbox_2`."""
    CheckboxArrowRight = _Variants21("checkbox_arrow_right")
    """Variantes do ícone `checkbox_arrow_right`."""
    CheckboxChecked = _Variants28("checkbox_checked")
    """Variantes do ícone `checkbox_checked`."""
    CheckboxCheckedSync = _Variants60("checkbox_checked_sync")
    """Variantes do ícone `checkbox_checked_sync`."""
    CheckboxIndeterminate = _Variants28("checkbox_indeterminate")
    """Variantes do ícone `checkbox_indeterminate`."""
    CheckboxPerson = _Variants54("checkbox_person")
    """Variantes do ícone `checkbox_person`."""
    CheckboxUnchecked = _Variants52("checkbox_unchecked")
    """Variantes do ícone `checkbox_unchecked`."""
    CheckboxWarning = _Variants21("checkbox_warning")
    """Variantes do ícone `checkbox_warning`."""
    Checkmark = _Variants30("checkmark")
    """Variantes do ícone `checkmark`."""
    CheckmarkCircle = _Variants170("checkmark_circle")
    """Variantes do ícone `checkmark_circle`."""
    CheckmarkCircleHint = _Variants23("checkmark_circle_hint")
    """Variantes do ícone `checkmark_circle_hint`."""
    CheckmarkCircleSparkle = _Variants21("checkmark_circle_sparkle")
    """Variantes do ícone `checkmark_circle_sparkle`."""
    CheckmarkCircleSquare = _Variants28("checkmark_circle_square")
    """Variantes do ícone `checkmark_circle_square`."""
    CheckmarkCircleWarning = _Variants28("checkmark_circle_warning")
    """Variantes do ícone `checkmark_circle_warning`."""
    CheckmarkLock = _Variants28("checkmark_lock")
    """Variantes do ícone `checkmark_lock`."""
    CheckmarkNote = _Variants58("checkmark_note")
    """Variantes do ícone `checkmark_note`."""
    CheckmarkSquare = _Variants21("checkmark_square")
    """Variantes do ícone `checkmark_square`."""
    CheckmarkStarburst = _Variants23("checkmark_starburst")
    """Variantes do ícone `checkmark_starburst`."""
    CheckmarkUnderlineCircle = _Variants28("checkmark_underline_circle")
    """Variantes do ícone `checkmark_underline_circle`."""
    Chess = _Variants28("chess")
    """Variantes do ícone `chess`."""
    ChevronCircleDown = _Variants82("chevron_circle_down")
    """Variantes do ícone `chevron_circle_down`."""
    ChevronCircleLeft = _Variants82("chevron_circle_left")
    """Variantes do ícone `chevron_circle_left`."""
    ChevronCircleRight = _Variants82("chevron_circle_right")
    """Variantes do ícone `chevron_circle_right`."""
    ChevronCircleUp = _Variants82("chevron_circle_up")
    """Variantes do ícone `chevron_circle_up`."""
    ChevronDashRight = _Variants173("chevron-right")
    """Variantes do ícone `chevron-right`."""
    ChevronDoubleDown = _Variants60("chevron_double_down")
    """Variantes do ícone `chevron_double_down`."""
    ChevronDoubleLeft = _Variants60("chevron_double_left")
    """Variantes do ícone `chevron_double_left`."""
    ChevronDoubleRight = _Variants60("chevron_double_right")
    """Variantes do ícone `chevron_double_right`."""
    ChevronDoubleUp = _Variants60("chevron_double_up")
    """Variantes do ícone `chevron_double_up`."""
    ChevronDown = _Variants82("chevron_down")
    """Variantes do ícone `chevron_down`."""
    ChevronDownUp = _Variants28("chevron_down_up")
    """Variantes do ícone `chevron_down_up`."""
    ChevronLeft = _Variants82("chevron_left")
    """Variantes do ícone `chevron_left`."""
    ChevronRight = _Variants82("chevron_right")
    """Variantes do ícone `chevron_right`."""
    ChevronUp = _Variants82("chevron_up")
    """Variantes do ícone `chevron_up`."""
    ChevronUpDown = _Variants28("chevron_up_down")
    """Variantes do ícone `chevron_up_down`."""
    Circle = _Variants82("circle")
    """Variantes do ícone `circle`."""
    CircleEdit = _Variants21("circle_edit")
    """Variantes do ícone `circle_edit`."""
    CircleEraser = _Variants58("circle_eraser")
    """Variantes do ícone `circle_eraser`."""
    CircleHalfFill = _Variants52("circle_half_fill")
    """Variantes do ícone `circle_half_fill`."""
    CircleHighlight = _Variants21("circle_highlight")
    """Variantes do ícone `circle_highlight`."""
    CircleHint = _Variants82("circle_hint")
    """Variantes do ícone `circle_hint`."""
    CircleHintCursor = _Variants28("circle_hint_cursor")
    """Variantes do ícone `circle_hint_cursor`."""
    CircleHintDismiss = _Variants28("circle_hint_dismiss")
    """Variantes do ícone `circle_hint_dismiss`."""
    CircleHintHalfVertical = _Variants28("circle_hint_half_vertical")
    """Variantes do ícone `circle_hint_half_vertical`."""
    CircleImage = _Variants50("circle_image")
    """Variantes do ícone `circle_image`."""
    CircleImageOff = _Variants58("circle_image_off")
    """Variantes do ícone `circle_image_off`."""
    CircleLine = _Variants52("circle_line")
    """Variantes do ícone `circle_line`."""
    CircleMultipleConcentric = _Variants28("circle_multiple_concentric")
    """Variantes do ícone `circle_multiple_concentric`."""
    CircleMultipleConcentricDashes = _Variants23("circle_multiple_concentric_dashes")
    """Variantes do ícone `circle_multiple_concentric_dashes`."""
    CircleMultipleHintCheckmark = _Variants175("circle_multiple_hint_checkmark")
    """Variantes do ícone `circle_multiple_hint_checkmark`."""
    CircleMultipleSubtractCheckmark = _Variants58("circle_multiple_subtract_checkmark")
    """Variantes do ícone `circle_multiple_subtract_checkmark`."""
    CircleOff = _Variants23("circle_off")
    """Variantes do ícone `circle_off`."""
    CircleShadow = _Variants21("circle_shadow")
    """Variantes do ícone `circle_shadow`."""
    CircleSmall = _Variants21("circle_small")
    """Variantes do ícone `circle_small`."""
    CircleSparkle = _Variants23("circle_sparkle")
    """Variantes do ícone `circle_sparkle`."""
    City = _Variants28("city")
    """Variantes do ícone `city`."""
    Class = _Variants21("class")
    """Variantes do ícone `class`."""
    Classification = _Variants78("classification")
    """Variantes do ícone `classification`."""
    Classifier = _Variants9("classifier")
    """Variantes do ícone `classifier`."""
    ClearFormatting = _Variants28("clear_formatting")
    """Variantes do ícone `clear_formatting`."""
    Clipboard = _Variants39("clipboard")
    """Variantes do ícone `clipboard`."""
    Clipboard3Day = _Variants28("clipboard_3_day")
    """Variantes do ícone `clipboard_3_day`."""
    ClipboardArrowRight = _Variants28("clipboard_arrow_right")
    """Variantes do ícone `clipboard_arrow_right`."""
    ClipboardBrush = _Variants62("clipboard_brush")
    """Variantes do ícone `clipboard_brush`."""
    ClipboardBulletList = _Variants60("clipboard_bullet_list")
    """Variantes do ícone `clipboard_bullet_list`."""
    ClipboardBulletListLtr = _Variants60("clipboard_bullet_list_ltr")
    """Variantes do ícone `clipboard_bullet_list_ltr`."""
    ClipboardBulletListRtl = _Variants60("clipboard_bullet_list_rtl")
    """Variantes do ícone `clipboard_bullet_list_rtl`."""
    ClipboardChatEmpty = _Variants23("clipboard_chat_empty")
    """Variantes do ícone `clipboard_chat_empty`."""
    ClipboardCheckmark = _Variants28("clipboard_checkmark")
    """Variantes do ícone `clipboard_checkmark`."""
    ClipboardClock = _Variants21("clipboard_clock")
    """Variantes do ícone `clipboard_clock`."""
    ClipboardCode = _Variants28("clipboard_code")
    """Variantes do ícone `clipboard_code`."""
    ClipboardDataBar = _Variants142("clipboard_data_bar")
    """Variantes do ícone `clipboard_data_bar`."""
    ClipboardDay = _Variants28("clipboard_day")
    """Variantes do ícone `clipboard_day`."""
    ClipboardEdit = _Variants58("clipboard_edit")
    """Variantes do ícone `clipboard_edit`."""
    ClipboardError = _Variants28("clipboard_error")
    """Variantes do ícone `clipboard_error`."""
    ClipboardHeart = _Variants21("clipboard_heart")
    """Variantes do ícone `clipboard_heart`."""
    ClipboardImage = _Variants21("clipboard_image")
    """Variantes do ícone `clipboard_image`."""
    ClipboardLetter = _Variants28("clipboard_letter")
    """Variantes do ícone `clipboard_letter`."""
    ClipboardLink = _Variants28("clipboard_link")
    """Variantes do ícone `clipboard_link`."""
    ClipboardMarkdown = _Variants28("clipboard_markdown")
    """Variantes do ícone `clipboard_markdown`."""
    ClipboardMathFormula = _Variants62("clipboard_math_formula")
    """Variantes do ícone `clipboard_math_formula`."""
    ClipboardMonth = _Variants28("clipboard_month")
    """Variantes do ícone `clipboard_month`."""
    ClipboardMore = _Variants21("clipboard_more")
    """Variantes do ícone `clipboard_more`."""
    ClipboardMultiple = _Variants56("clipboard_multiple")
    """Variantes do ícone `clipboard_multiple`."""
    ClipboardNote = _Variants60("clipboard_note")
    """Variantes do ícone `clipboard_note`."""
    ClipboardNumber123 = _Variants62("clipboard_number_123")
    """Variantes do ícone `clipboard_number_123`."""
    ClipboardOff = _Variants28("clipboard_off")
    """Variantes do ícone `clipboard_off`."""
    ClipboardPaste = _Variants78("clipboard_paste")
    """Variantes do ícone `clipboard_paste`."""
    ClipboardPulse = _Variants21("clipboard_pulse")
    """Variantes do ícone `clipboard_pulse`."""
    ClipboardSearch = _Variants21("clipboard_search")
    """Variantes do ícone `clipboard_search`."""
    ClipboardSettings = _Variants21("clipboard_settings")
    """Variantes do ícone `clipboard_settings`."""
    ClipboardTask = _Variants54("clipboard_task")
    """Variantes do ícone `clipboard_task`."""
    ClipboardTaskAdd = _Variants21("clipboard_task_add")
    """Variantes do ícone `clipboard_task_add`."""
    ClipboardTaskList = _Variants56("clipboard_task_list")
    """Variantes do ícone `clipboard_task_list`."""
    ClipboardTaskListLtr = _Variants21("clipboard_task_list_ltr")
    """Variantes do ícone `clipboard_task_list_ltr`."""
    ClipboardTaskListLtrAlternate16d5c233 = _Variants177(
        "clipboard_task_list_ltr__alternate_16d5c233"
    )
    """Variantes do ícone `clipboard_task_list_ltr__alternate_16d5c233`."""
    ClipboardTaskListLtrAlternate24a75077 = _Variants179(
        "clipboard_task_list_ltr__alternate_24a75077"
    )
    """Variantes do ícone `clipboard_task_list_ltr__alternate_24a75077`."""
    ClipboardTaskListLtrAlternate54114826 = _Variants181(
        "clipboard_task_list_ltr__alternate_54114826"
    )
    """Variantes do ícone `clipboard_task_list_ltr__alternate_54114826`."""
    ClipboardTaskListLtrAlternateF3a80d77 = _Variants173(
        "clipboard_task_list_ltr__alternate_f3a80d77"
    )
    """Variantes do ícone `clipboard_task_list_ltr__alternate_f3a80d77`."""
    ClipboardTaskListRtl = _Variants21("clipboard_task_list_rtl")
    """Variantes do ícone `clipboard_task_list_rtl`."""
    ClipboardTaskListRtlAlternate2dc00829 = _Variants179(
        "clipboard_task_list_rtl__alternate_2dc00829"
    )
    """Variantes do ícone `clipboard_task_list_rtl__alternate_2dc00829`."""
    ClipboardTaskListRtlAlternate91e1f52d = _Variants177(
        "clipboard_task_list_rtl__alternate_91e1f52d"
    )
    """Variantes do ícone `clipboard_task_list_rtl__alternate_91e1f52d`."""
    ClipboardTaskListRtlAlternateB3bd7cd6 = _Variants173(
        "clipboard_task_list_rtl__alternate_b3bd7cd6"
    )
    """Variantes do ícone `clipboard_task_list_rtl__alternate_b3bd7cd6`."""
    ClipboardTaskListRtlAlternateBa6cfbb7 = _Variants181(
        "clipboard_task_list_rtl__alternate_ba6cfbb7"
    )
    """Variantes do ícone `clipboard_task_list_rtl__alternate_ba6cfbb7`."""
    ClipboardText = _Variants183("clipboard_text")
    """Variantes do ícone `clipboard_text`."""
    ClipboardTextEdit = _Variants185("clipboard_text_edit")
    """Variantes do ícone `clipboard_text_edit`."""
    ClipboardTextLtr = _Variants90("clipboard_text_ltr")
    """Variantes do ícone `clipboard_text_ltr`."""
    ClipboardTextRtl = _Variants28("clipboard_text_rtl")
    """Variantes do ícone `clipboard_text_rtl`."""
    Clipchamp = _Variants9("clipchamp")
    """Variantes do ícone `clipchamp`."""
    Cliptemplate = _Variants9("cliptemplate")
    """Variantes do ícone `cliptemplate`."""
    Clock = _Variants46("clock")
    """Variantes do ícone `clock`."""
    ClockAlarm = _Variants187("clock_alarm")
    """Variantes do ícone `clock_alarm`."""
    ClockArrowDownload = _Variants21("clock_arrow_download")
    """Variantes do ícone `clock_arrow_download`."""
    ClockBill = _Variants90("clock_bill")
    """Variantes do ícone `clock_bill`."""
    ClockDismiss = _Variants21("clock_dismiss")
    """Variantes do ícone `clock_dismiss`."""
    ClockLock = _Variants28("clock_lock")
    """Variantes do ícone `clock_lock`."""
    ClockPause = _Variants28("clock_pause")
    """Variantes do ícone `clock_pause`."""
    ClockSparkle = _Variants90("clock_sparkle")
    """Variantes do ícone `clock_sparkle`."""
    ClockToolbox = _Variants142("clock_toolbox")
    """Variantes do ícone `clock_toolbox`."""
    ClockWarning = _Variants50("clock_warning")
    """Variantes do ícone `clock_warning`."""
    ClosedCaption = _Variants23("closed_caption")
    """Variantes do ícone `closed_caption`."""
    ClosedCaptionOff = _Variants37("closed_caption_off")
    """Variantes do ícone `closed_caption_off`."""
    ClothesHanger = _Variants52("clothes_hanger")
    """Variantes do ícone `clothes_hanger`."""
    Cloud = _Variants35("cloud")
    """Variantes do ícone `cloud`."""
    CloudAdd = _Variants28("cloud_add")
    """Variantes do ícone `cloud_add`."""
    CloudArchive = _Variants23("cloud_archive")
    """Variantes do ícone `cloud_archive`."""
    CloudArrowDown = _Variants23("cloud_arrow_down")
    """Variantes do ícone `cloud_arrow_down`."""
    CloudArrowRight = _Variants28("cloud_arrow_right")
    """Variantes do ícone `cloud_arrow_right`."""
    CloudArrowUp = _Variants23("cloud_arrow_up")
    """Variantes do ícone `cloud_arrow_up`."""
    CloudBeaker = _Variants23("cloud_beaker")
    """Variantes do ícone `cloud_beaker`."""
    CloudBidirectional = _Variants21("cloud_bidirectional")
    """Variantes do ícone `cloud_bidirectional`."""
    CloudCheckmark = _Variants23("cloud_checkmark")
    """Variantes do ícone `cloud_checkmark`."""
    CloudCube = _Variants23("cloud_cube")
    """Variantes do ícone `cloud_cube`."""
    CloudDatabase = _Variants58("cloud_database")
    """Variantes do ícone `cloud_database`."""
    CloudDesktop = _Variants21("cloud_desktop")
    """Variantes do ícone `cloud_desktop`."""
    CloudDismiss = _Variants35("cloud_dismiss")
    """Variantes do ícone `cloud_dismiss`."""
    CloudEdit = _Variants28("cloud_edit")
    """Variantes do ícone `cloud_edit`."""
    CloudError = _Variants23("cloud_error")
    """Variantes do ícone `cloud_error`."""
    CloudFlow = _Variants21("cloud_flow")
    """Variantes do ícone `cloud_flow`."""
    CloudLink = _Variants28("cloud_link")
    """Variantes do ícone `cloud_link`."""
    CloudOff = _Variants23("cloud_off")
    """Variantes do ícone `cloud_off`."""
    CloudSwap = _Variants21("cloud_swap")
    """Variantes do ícone `cloud_swap`."""
    CloudSync = _Variants23("cloud_sync")
    """Variantes do ícone `cloud_sync`."""
    CloudWords = _Variants35("cloud_words")
    """Variantes do ícone `cloud_words`."""
    Clover = _Variants82("clover")
    """Variantes do ícone `clover`."""
    Code = _Variants189("code")
    """Variantes do ícone `code`."""
    CodeBlock = _Variants35("code_block")
    """Variantes do ícone `code_block`."""
    CodeBlockEdit = _Variants28("code_block_edit")
    """Variantes do ícone `code_block_edit`."""
    CodeCircle = _Variants142("code_circle")
    """Variantes do ícone `code_circle`."""
    CodeCs = _Variants56("code_cs")
    """Variantes do ícone `code_cs`."""
    CodeCsRectangle = _Variants56("code_cs_rectangle")
    """Variantes do ícone `code_cs_rectangle`."""
    CodeFs = _Variants56("code_fs")
    """Variantes do ícone `code_fs`."""
    CodeFsRectangle = _Variants56("code_fs_rectangle")
    """Variantes do ícone `code_fs_rectangle`."""
    CodeJs = _Variants56("code_js")
    """Variantes do ícone `code_js`."""
    CodeJsRectangle = _Variants56("code_js_rectangle")
    """Variantes do ícone `code_js_rectangle`."""
    CodeOff = _Variants28("code_off")
    """Variantes do ícone `code_off`."""
    CodePy = _Variants56("code_py")
    """Variantes do ícone `code_py`."""
    CodePyRectangle = _Variants56("code_py_rectangle")
    """Variantes do ícone `code_py_rectangle`."""
    CodeRb = _Variants56("code_rb")
    """Variantes do ícone `code_rb`."""
    CodeRbRectangle = _Variants56("code_rb_rectangle")
    """Variantes do ícone `code_rb_rectangle`."""
    CodeText = _Variants60("code_text")
    """Variantes do ícone `code_text`."""
    CodeTextEdit = _Variants58("code_text_edit")
    """Variantes do ícone `code_text_edit`."""
    CodeTextOff = _Variants56("code_text_off")
    """Variantes do ícone `code_text_off`."""
    CodeTs = _Variants56("code_ts")
    """Variantes do ícone `code_ts`."""
    CodeTsRectangle = _Variants56("code_ts_rectangle")
    """Variantes do ícone `code_ts_rectangle`."""
    CodeVb = _Variants56("code_vb")
    """Variantes do ícone `code_vb`."""
    CodeVbRectangle = _Variants56("code_vb_rectangle")
    """Variantes do ícone `code_vb_rectangle`."""
    CoinMultiple = _Variants35("coin_multiple")
    """Variantes do ícone `coin_multiple`."""
    CoinStack = _Variants28("coin_stack")
    """Variantes do ícone `coin_stack`."""
    Collections = _Variants28("collections")
    """Variantes do ícone `collections`."""
    CollectionsAdd = _Variants21("collections_add")
    """Variantes do ícone `collections_add`."""
    CollectionsEmpty = _Variants28("collections_empty")
    """Variantes do ícone `collections_empty`."""
    Color = _Variants78("color")
    """Variantes do ícone `color`."""
    ColorBackground = _Variants21("color_background")
    """Variantes do ícone `color_background`."""
    ColorBackgroundAccent = _Variants191("color_background_accent")
    """Variantes do ícone `color_background_accent`."""
    ColorFill = _Variants78("color_fill")
    """Variantes do ícone `color_fill`."""
    ColorFillAccent = _Variants194("color_fill_accent")
    """Variantes do ícone `color_fill_accent`."""
    ColorLine = _Variants78("color_line")
    """Variantes do ícone `color_line`."""
    ColorLineAccent = _Variants196("color_line_accent")
    """Variantes do ícone `color_line_accent`."""
    ColorOff = _Variants41("color_off")
    """Variantes do ícone `color_off`."""
    Column = _Variants23("column")
    """Variantes do ícone `column`."""
    ColumnArrowRight = _Variants58("column_arrow_right")
    """Variantes do ícone `column_arrow_right`."""
    ColumnDoubleCompare = _Variants58("column_double_compare")
    """Variantes do ícone `column_double_compare`."""
    ColumnEdit = _Variants21("column_edit")
    """Variantes do ícone `column_edit`."""
    ColumnSingle = _Variants56("column_single")
    """Variantes do ícone `column_single`."""
    ColumnSingleCompare = _Variants60("column_single_compare")
    """Variantes do ícone `column_single_compare`."""
    ColumnTriple = _Variants21("column_triple")
    """Variantes do ícone `column_triple`."""
    ColumnTripleEdit = _Variants21("column_triple_edit")
    """Variantes do ícone `column_triple_edit`."""
    Comma = _Variants21("comma")
    """Variantes do ícone `comma`."""
    Comment = _Variants46("comment")
    """Variantes do ícone `comment`."""
    CommentAdd = _Variants30("comment_add")
    """Variantes do ícone `comment_add`."""
    CommentArrowLeft = _Variants80("comment_arrow_left")
    """Variantes do ícone `comment_arrow_left`."""
    CommentArrowRight = _Variants80("comment_arrow_right")
    """Variantes do ícone `comment_arrow_right`."""
    CommentBadge = _Variants23("comment_badge")
    """Variantes do ícone `comment_badge`."""
    CommentCheckmark = _Variants80("comment_checkmark")
    """Variantes do ícone `comment_checkmark`."""
    CommentDismiss = _Variants21("comment_dismiss")
    """Variantes do ícone `comment_dismiss`."""
    CommentEdit = _Variants28("comment_edit")
    """Variantes do ícone `comment_edit`."""
    CommentError = _Variants28("comment_error")
    """Variantes do ícone `comment_error`."""
    CommentLightning = _Variants21("comment_lightning")
    """Variantes do ícone `comment_lightning`."""
    CommentLink = _Variants37("comment_link")
    """Variantes do ícone `comment_link`."""
    CommentMention = _Variants28("comment_mention")
    """Variantes do ícone `comment_mention`."""
    CommentMultiple = _Variants198("comment_multiple")
    """Variantes do ícone `comment_multiple`."""
    CommentMultipleCheckmark = _Variants50("comment_multiple_checkmark")
    """Variantes do ícone `comment_multiple_checkmark`."""
    CommentMultipleLink = _Variants62("comment_multiple_link")
    """Variantes do ícone `comment_multiple_link`."""
    CommentMultipleMention = _Variants60("comment_multiple_mention")
    """Variantes do ícone `comment_multiple_mention`."""
    CommentNote = _Variants21("comment_note")
    """Variantes do ícone `comment_note`."""
    CommentNoteAr = _Variants70("comment_note__ar")
    """Variantes do ícone `comment_note__ar`."""
    CommentNoteHe = _Variants70("comment_note__he")
    """Variantes do ícone `comment_note__he`."""
    CommentOff = _Variants37("comment_off")
    """Variantes do ícone `comment_off`."""
    CommentQuote = _Variants50("comment_quote")
    """Variantes do ícone `comment_quote`."""
    CommentText = _Variants23("comment_text")
    """Variantes do ícone `comment_text`."""
    Communication = _Variants28("communication")
    """Variantes do ícone `communication`."""
    CommunicationPerson = _Variants21("communication_person")
    """Variantes do ícone `communication_person`."""
    CommunicationShield = _Variants28("communication_shield")
    """Variantes do ícone `communication_shield`."""
    Companyfolder = _Variants9("companyfolder")
    """Variantes do ícone `companyfolder`."""
    CompassNorthwest = _Variants50("compass_northwest")
    """Variantes do ícone `compass_northwest`."""
    CompassTrueNorth = _Variants28("compass_true_north")
    """Variantes do ícone `compass_true_north`."""
    Component2DoubleTapSwipeDown = _Variants70("component_2_double_tap_swipe_down")
    """Variantes do ícone `component_2_double_tap_swipe_down`."""
    Component2DoubleTapSwipeUp = _Variants70("component_2_double_tap_swipe_up")
    """Variantes do ícone `component_2_double_tap_swipe_up`."""
    Compose = _Variants30("compose")
    """Variantes do ícone `compose`."""
    Cone = _Variants56("cone")
    """Variantes do ícone `cone`."""
    ConferenceRoom = _Variants37("conference_room")
    """Variantes do ícone `conference_room`."""
    ConferenceRoomSparkle = _Variants50("conference_room_sparkle")
    """Variantes do ícone `conference_room_sparkle`."""
    Connected = _Variants23("connected")
    """Variantes do ícone `connected`."""
    Connector = _Variants28("connector")
    """Variantes do ícone `connector`."""
    Contact = _Variants9("contact")
    """Variantes do ícone `contact`."""
    ContactCard = _Variants35("contact_card")
    """Variantes do ícone `contact_card`."""
    ContactCardGeneric = _Variants23("contact_card_generic")
    """Variantes do ícone `contact_card_generic`."""
    ContactCardGroup = _Variants37("contact_card_group")
    """Variantes do ícone `contact_card_group`."""
    ContactCardLink = _Variants60("contact_card_link")
    """Variantes do ícone `contact_card_link`."""
    ContactCardRibbon = _Variants23("contact_card_ribbon")
    """Variantes do ícone `contact_card_ribbon`."""
    ContentSettings = _Variants90("content_settings")
    """Variantes do ícone `content_settings`."""
    ContentView = _Variants198("content_view")
    """Variantes do ícone `content_view`."""
    ContentViewGallery = _Variants50("content_view_gallery")
    """Variantes do ícone `content_view_gallery`."""
    ContentViewGalleryLightning = _Variants50("content_view_gallery_lightning")
    """Variantes do ícone `content_view_gallery_lightning`."""
    ContractDownLeft = _Variants23("contract_down_left")
    """Variantes do ícone `contract_down_left`."""
    ContractUpRight = _Variants23("contract_up_right")
    """Variantes do ícone `contract_up_right`."""
    ControlButton = _Variants21("control_button")
    """Variantes do ícone `control_button`."""
    ConvertRange = _Variants21("convert_range")
    """Variantes do ícone `convert_range`."""
    Cookies = _Variants23("cookies")
    """Variantes do ícone `cookies`."""
    Copilot = _Variants9("copilot")
    """Variantes do ícone `copilot`."""
    Copy = _Variants66("copy")
    """Variantes do ícone `copy`."""
    CopyAdd = _Variants21("copy_add")
    """Variantes do ícone `copy_add`."""
    CopyArrowRight = _Variants28("copy_arrow_right")
    """Variantes do ícone `copy_arrow_right`."""
    CopySelect = _Variants21("copy_select")
    """Variantes do ícone `copy_select`."""
    Couch = _Variants200("couch")
    """Variantes do ícone `couch`."""
    Counter = _Variants21("counter")
    """Variantes do ícone `counter`."""
    Cowork = _Variants23("cowork")
    """Variantes do ícone `cowork`."""
    CreditCardClock = _Variants113("credit_card_clock")
    """Variantes do ícone `credit_card_clock`."""
    CreditCardPerson = _Variants21("credit_card_person")
    """Variantes do ícone `credit_card_person`."""
    CreditCardToolbox = _Variants21("credit_card_toolbox")
    """Variantes do ícone `credit_card_toolbox`."""
    Crop = _Variants66("crop")
    """Variantes do ícone `crop`."""
    CropArrowRotate = _Variants28("crop_arrow_rotate")
    """Variantes do ícone `crop_arrow_rotate`."""
    CropInterim = _Variants21("crop_interim")
    """Variantes do ícone `crop_interim`."""
    CropInterimOff = _Variants21("crop_interim_off")
    """Variantes do ícone `crop_interim_off`."""
    CropSparkle = _Variants70("crop_sparkle")
    """Variantes do ícone `crop_sparkle`."""
    Crown = _Variants28("crown")
    """Variantes do ícone `crown`."""
    CrownSubtract = _Variants21("crown_subtract")
    """Variantes do ícone `crown_subtract`."""
    Csv = _Variants9("csv")
    """Variantes do ícone `csv`."""
    Cube = _Variants82("cube")
    """Variantes do ícone `cube`."""
    CubeAdd = _Variants58("cube_add")
    """Variantes do ícone `cube_add`."""
    CubeArrowCurveDown = _Variants58("cube_arrow_curve_down")
    """Variantes do ícone `cube_arrow_curve_down`."""
    CubeCheckmark = _Variants23("cube_checkmark")
    """Variantes do ícone `cube_checkmark`."""
    CubeLink = _Variants58("cube_link")
    """Variantes do ícone `cube_link`."""
    CubeMultiple = _Variants21("cube_multiple")
    """Variantes do ícone `cube_multiple`."""
    CubeQuick = _Variants50("cube_quick")
    """Variantes do ícone `cube_quick`."""
    CubeRotate = _Variants58("cube_rotate")
    """Variantes do ícone `cube_rotate`."""
    CubeSync = _Variants21("cube_sync")
    """Variantes do ícone `cube_sync`."""
    CubeTree = _Variants21("cube_tree")
    """Variantes do ícone `cube_tree`."""
    CurrencyDollarEuro = _Variants28("currency_dollar_euro")
    """Variantes do ícone `currency_dollar_euro`."""
    CurrencyDollarRupee = _Variants28("currency_dollar_rupee")
    """Variantes do ícone `currency_dollar_rupee`."""
    Cursor = _Variants78("cursor")
    """Variantes do ícone `cursor`."""
    CursorClick = _Variants21("cursor_click")
    """Variantes do ícone `cursor_click`."""
    CursorHover = _Variants23("cursor_hover")
    """Variantes do ícone `cursor_hover`."""
    CursorHoverOff = _Variants37("cursor_hover_off")
    """Variantes do ícone `cursor_hover_off`."""
    CursorProhibited = _Variants60("cursor_prohibited")
    """Variantes do ícone `cursor_prohibited`."""
    Cut = _Variants66("cut")
    """Variantes do ícone `cut`."""
    DarkTheme = _Variants21("dark_theme")
    """Variantes do ícone `dark_theme`."""
    Dashboard = _Variants58("dashboard")
    """Variantes do ícone `dashboard`."""
    DataArea = _Variants74("data_area")
    """Variantes do ícone `data_area`."""
    DataBarHorizontal = _Variants21("data_bar_horizontal")
    """Variantes do ícone `data_bar_horizontal`."""
    DataBarHorizontalDescending = _Variants56("data_bar_horizontal_descending")
    """Variantes do ícone `data_bar_horizontal_descending`."""
    DataBarVertical = _Variants62("data_bar_vertical")
    """Variantes do ícone `data_bar_vertical`."""
    DataBarVerticalAdd = _Variants41("data_bar_vertical_add")
    """Variantes do ícone `data_bar_vertical_add`."""
    DataBarVerticalArrowDown = _Variants28("data_bar_vertical_arrow_down")
    """Variantes do ícone `data_bar_vertical_arrow_down`."""
    DataBarVerticalAscending = _Variants164("data_bar_vertical_ascending")
    """Variantes do ícone `data_bar_vertical_ascending`."""
    DataBarVerticalEdit = _Variants28("data_bar_vertical_edit")
    """Variantes do ícone `data_bar_vertical_edit`."""
    DataBarVerticalStar = _Variants90("data_bar_vertical_star")
    """Variantes do ícone `data_bar_vertical_star`."""
    DataFunnel = _Variants21("data_funnel")
    """Variantes do ícone `data_funnel`."""
    DataHistogram = _Variants50("data_histogram")
    """Variantes do ícone `data_histogram`."""
    DataLine = _Variants48("data_line")
    """Variantes do ícone `data_line`."""
    DataPie = _Variants202("data_pie")
    """Variantes do ícone `data_pie`."""
    DataScatter = _Variants74("data_scatter")
    """Variantes do ícone `data_scatter`."""
    DataSunburst = _Variants86("data_sunburst")
    """Variantes do ícone `data_sunburst`."""
    DataTreemap = _Variants21("data_treemap")
    """Variantes do ícone `data_treemap`."""
    DataTrending = _Variants35("data_trending")
    """Variantes do ícone `data_trending`."""
    DataUsage = _Variants23("data_usage")
    """Variantes do ícone `data_usage`."""
    DataUsageCheckmark = _Variants23("data_usage_checkmark")
    """Variantes do ícone `data_usage_checkmark`."""
    DataUsageEdit = _Variants21("data_usage_edit")
    """Variantes do ícone `data_usage_edit`."""
    DataUsageSettings = _Variants28("data_usage_settings")
    """Variantes do ícone `data_usage_settings`."""
    DataUsageSparkle = _Variants21("data_usage_sparkle")
    """Variantes do ícone `data_usage_sparkle`."""
    DataUsageToolbox = _Variants21("data_usage_toolbox")
    """Variantes do ícone `data_usage_toolbox`."""
    DataWaterfall = _Variants21("data_waterfall")
    """Variantes do ícone `data_waterfall`."""
    DataWhisker = _Variants21("data_whisker")
    """Variantes do ícone `data_whisker`."""
    Database = _Variants138("database")
    """Variantes do ícone `database`."""
    DatabaseArrowDown = _Variants58("database_arrow_down")
    """Variantes do ícone `database_arrow_down`."""
    DatabaseArrowRight = _Variants90("database_arrow_right")
    """Variantes do ícone `database_arrow_right`."""
    DatabaseArrowUp = _Variants60("database_arrow_up")
    """Variantes do ícone `database_arrow_up`."""
    DatabaseCheckmark = _Variants28("database_checkmark")
    """Variantes do ícone `database_checkmark`."""
    DatabaseLightning = _Variants58("database_lightning")
    """Variantes do ícone `database_lightning`."""
    DatabaseLink = _Variants21("database_link")
    """Variantes do ícone `database_link`."""
    DatabaseMultiple = _Variants64("database_multiple")
    """Variantes do ícone `database_multiple`."""
    DatabasePerson = _Variants21("database_person")
    """Variantes do ícone `database_person`."""
    DatabasePlugConnected = _Variants58("database_plug_connected")
    """Variantes do ícone `database_plug_connected`."""
    DatabaseSearch = _Variants142("database_search")
    """Variantes do ícone `database_search`."""
    DatabaseSettings = _Variants28("database_settings")
    """Variantes do ícone `database_settings`."""
    DatabaseStack = _Variants56("database_stack")
    """Variantes do ícone `database_stack`."""
    DatabaseSwitch = _Variants21("database_switch")
    """Variantes do ícone `database_switch`."""
    DatabaseWarning = _Variants58("database_warning")
    """Variantes do ícone `database_warning`."""
    DatabaseWindow = _Variants58("database_window")
    """Variantes do ícone `database_window`."""
    DecimalArrowLeft = _Variants21("decimal_arrow_left")
    """Variantes do ícone `decimal_arrow_left`."""
    DecimalArrowRight = _Variants21("decimal_arrow_right")
    """Variantes do ícone `decimal_arrow_right`."""
    Delete = _Variants30("delete")
    """Variantes do ícone `delete`."""
    DeleteArrowBack = _Variants60("delete_arrow_back")
    """Variantes do ícone `delete_arrow_back`."""
    DeleteDismiss = _Variants41("delete_dismiss")
    """Variantes do ícone `delete_dismiss`."""
    DeleteLines = _Variants58("delete_lines")
    """Variantes do ícone `delete_lines`."""
    DeleteOff = _Variants21("delete_off")
    """Variantes do ícone `delete_off`."""
    Delve = _Variants18("delve")
    """Variantes do ícone `delve`."""
    Dentist = _Variants80("dentist")
    """Variantes do ícone `dentist`."""
    DesignIdeas = _Variants35("design_ideas")
    """Variantes do ícone `design_ideas`."""
    Designer = _Variants9("designer")
    """Variantes do ícone `designer`."""
    Desk = _Variants23("desk")
    """Variantes do ícone `desk`."""
    DeskCheckmark = _Variants50("desk_checkmark")
    """Variantes do ícone `desk_checkmark`."""
    DeskMultiple = _Variants50("desk_multiple")
    """Variantes do ícone `desk_multiple`."""
    DeskMultipleCheckmark = _Variants41("desk_multiple_checkmark")
    """Variantes do ícone `desk_multiple_checkmark`."""
    DeskSparkle = _Variants28("desk_sparkle")
    """Variantes do ícone `desk_sparkle`."""
    Desktop = _Variants23("desktop")
    """Variantes do ícone `desktop`."""
    DesktopArrowDown = _Variants23("desktop_arrow_down")
    """Variantes do ícone `desktop_arrow_down`."""
    DesktopArrowDownOff = _Variants86("desktop_arrow_down_off")
    """Variantes do ícone `desktop_arrow_down_off`."""
    DesktopArrowRight = _Variants28("desktop_arrow_right")
    """Variantes do ícone `desktop_arrow_right`."""
    DesktopCheckmark = _Variants28("desktop_checkmark")
    """Variantes do ícone `desktop_checkmark`."""
    DesktopCursor = _Variants50("desktop_cursor")
    """Variantes do ícone `desktop_cursor`."""
    DesktopEdit = _Variants28("desktop_edit")
    """Variantes do ícone `desktop_edit`."""
    DesktopFlow = _Variants21("desktop_flow")
    """Variantes do ícone `desktop_flow`."""
    DesktopKeyboard = _Variants50("desktop_keyboard")
    """Variantes do ícone `desktop_keyboard`."""
    DesktopMac = _Variants90("desktop_mac")
    """Variantes do ícone `desktop_mac`."""
    DesktopOff = _Variants21("desktop_off")
    """Variantes do ícone `desktop_off`."""
    DesktopPulse = _Variants23("desktop_pulse")
    """Variantes do ícone `desktop_pulse`."""
    DesktopSignal = _Variants21("desktop_signal")
    """Variantes do ícone `desktop_signal`."""
    DesktopSpeaker = _Variants21("desktop_speaker")
    """Variantes do ícone `desktop_speaker`."""
    DesktopSpeakerOff = _Variants21("desktop_speaker_off")
    """Variantes do ícone `desktop_speaker_off`."""
    DesktopSync = _Variants28("desktop_sync")
    """Variantes do ícone `desktop_sync`."""
    DesktopTag = _Variants58("desktop_tag")
    """Variantes do ícone `desktop_tag`."""
    DesktopToolbox = _Variants21("desktop_toolbox")
    """Variantes do ícone `desktop_toolbox`."""
    DesktopTower = _Variants21("desktop_tower")
    """Variantes do ícone `desktop_tower`."""
    Desktopfolder = _Variants9("desktopfolder")
    """Variantes do ícone `desktopfolder`."""
    DeveloperBoard = _Variants28("developer_board")
    """Variantes do ícone `developer_board`."""
    DeveloperBoardLightning = _Variants58("developer_board_lightning")
    """Variantes do ícone `developer_board_lightning`."""
    DeveloperBoardLightningToolbox = _Variants58("developer_board_lightning_toolbox")
    """Variantes do ícone `developer_board_lightning_toolbox`."""
    DeveloperBoardSearch = _Variants21("developer_board_search")
    """Variantes do ícone `developer_board_search`."""
    DeviceEq = _Variants23("device_eq")
    """Variantes do ícone `device_eq`."""
    DeviceMeetingRoom = _Variants23("device_meeting_room")
    """Variantes do ícone `device_meeting_room`."""
    DeviceMeetingRoomAllInOne = _Variants204("device_meeting_room_all_in_one")
    """Variantes do ícone `device_meeting_room_all_in_one`."""
    DeviceMeetingRoomBar = _Variants204("device_meeting_room_bar")
    """Variantes do ícone `device_meeting_room_bar`."""
    DeviceMeetingRoomMicrophoneAbove = _Variants60("device_meeting_room_microphone_above")
    """Variantes do ícone `device_meeting_room_microphone_above`."""
    DeviceMeetingRoomMicrophoneBelow = _Variants60("device_meeting_room_microphone_below")
    """Variantes do ícone `device_meeting_room_microphone_below`."""
    DeviceMeetingRoomRemote = _Variants23("device_meeting_room_remote")
    """Variantes do ícone `device_meeting_room_remote`."""
    Diagram = _Variants21("diagram")
    """Variantes do ícone `diagram`."""
    Dialpad = _Variants86("dialpad")
    """Variantes do ícone `dialpad`."""
    DialpadOff = _Variants21("dialpad_off")
    """Variantes do ícone `dialpad_off`."""
    DialpadQuestionMark = _Variants21("dialpad_question_mark")
    """Variantes do ícone `dialpad_question_mark`."""
    Diamond = _Variants82("diamond")
    """Variantes do ícone `diamond`."""
    DiamondDismiss = _Variants82("diamond_dismiss")
    """Variantes do ícone `diamond_dismiss`."""
    DiamondLink = _Variants23("diamond_link")
    """Variantes do ícone `diamond_link`."""
    Directions = _Variants23("directions")
    """Variantes do ícone `directions`."""
    Dishwasher = _Variants94("dishwasher")
    """Variantes do ícone `dishwasher`."""
    Dismiss = _Variants30("dismiss")
    """Variantes do ícone `dismiss`."""
    DismissCircle = _Variants46("dismiss_circle")
    """Variantes do ícone `dismiss_circle`."""
    DismissSquare = _Variants26("dismiss_square")
    """Variantes do ícone `dismiss_square`."""
    DismissSquareMultiple = _Variants60("dismiss_square_multiple")
    """Variantes do ícone `dismiss_square_multiple`."""
    Diversity = _Variants206("diversity")
    """Variantes do ícone `diversity`."""
    DividerShort = _Variants28("divider_short")
    """Variantes do ícone `divider_short`."""
    DividerTall = _Variants28("divider_tall")
    """Variantes do ícone `divider_tall`."""
    Dock = _Variants21("dock")
    """Variantes do ícone `dock`."""
    DockRow = _Variants21("dock_row")
    """Variantes do ícone `dock_row`."""
    Docset = _Variants9("docset")
    """Variantes do ícone `docset`."""
    Doctor = _Variants80("doctor")
    """Variantes do ícone `doctor`."""
    Document = _Variants208("document")
    """Variantes do ícone `document`."""
    Document100 = _Variants28("document_100")
    """Variantes do ícone `document_100`."""
    DocumentAdd = _Variants206("document_add")
    """Variantes do ícone `document_add`."""
    DocumentArrowDown = _Variants28("document_arrow_down")
    """Variantes do ícone `document_arrow_down`."""
    DocumentArrowDownOff = _Variants21("document_arrow_down_off")
    """Variantes do ícone `document_arrow_down_off`."""
    DocumentArrowLeft = _Variants37("document_arrow_left")
    """Variantes do ícone `document_arrow_left`."""
    DocumentArrowRight = _Variants28("document_arrow_right")
    """Variantes do ícone `document_arrow_right`."""
    DocumentArrowUp = _Variants28("document_arrow_up")
    """Variantes do ícone `document_arrow_up`."""
    DocumentBorder = _Variants142("document_border")
    """Variantes do ícone `document_border`."""
    DocumentBorderPrint = _Variants142("document_border_print")
    """Variantes do ícone `document_border_print`."""
    DocumentBriefcase = _Variants90("document_briefcase")
    """Variantes do ícone `document_briefcase`."""
    DocumentBroken = _Variants58("document_broken")
    """Variantes do ícone `document_broken`."""
    DocumentBulletList = _Variants28("document_bullet_list")
    """Variantes do ícone `document_bullet_list`."""
    DocumentBulletListArrowLeft = _Variants28("document_bullet_list_arrow_left")
    """Variantes do ícone `document_bullet_list_arrow_left`."""
    DocumentBulletListClock = _Variants21("document_bullet_list_clock")
    """Variantes do ícone `document_bullet_list_clock`."""
    DocumentBulletListCube = _Variants28("document_bullet_list_cube")
    """Variantes do ícone `document_bullet_list_cube`."""
    DocumentBulletListMultiple = _Variants21("document_bullet_list_multiple")
    """Variantes do ícone `document_bullet_list_multiple`."""
    DocumentBulletListOff = _Variants21("document_bullet_list_off")
    """Variantes do ícone `document_bullet_list_off`."""
    DocumentCatchUp = _Variants28("document_catch_up")
    """Variantes do ícone `document_catch_up`."""
    DocumentCheckmark = _Variants28("document_checkmark")
    """Variantes do ícone `document_checkmark`."""
    DocumentChevronDouble = _Variants21("document_chevron_double")
    """Variantes do ícone `document_chevron_double`."""
    DocumentCode = _Variants56("document_code")
    """Variantes do ícone `document_code`."""
    DocumentContract = _Variants56("document_contract")
    """Variantes do ícone `document_contract`."""
    DocumentCopy = _Variants108("document_copy")
    """Variantes do ícone `document_copy`."""
    DocumentCs = _Variants56("document_cs")
    """Variantes do ícone `document_cs`."""
    DocumentCss = _Variants28("document_css")
    """Variantes do ícone `document_css`."""
    DocumentCsv = _Variants28("document_csv")
    """Variantes do ícone `document_csv`."""
    DocumentCube = _Variants21("document_cube")
    """Variantes do ícone `document_cube`."""
    DocumentData = _Variants90("document_data")
    """Variantes do ícone `document_data`."""
    DocumentDataLink = _Variants90("document_data_link")
    """Variantes do ícone `document_data_link`."""
    DocumentDataLock = _Variants90("document_data_lock")
    """Variantes do ícone `document_data_lock`."""
    DocumentDatabase = _Variants21("document_database")
    """Variantes do ícone `document_database`."""
    DocumentDismiss = _Variants108("document_dismiss")
    """Variantes do ícone `document_dismiss`."""
    DocumentEdit = _Variants54("document_edit")
    """Variantes do ícone `document_edit`."""
    DocumentEndnote = _Variants21("document_endnote")
    """Variantes do ícone `document_endnote`."""
    DocumentError = _Variants28("document_error")
    """Variantes do ícone `document_error`."""
    DocumentExcel = _Variants58("document_excel")
    """Variantes do ícone `document_excel`."""
    DocumentFit = _Variants28("document_fit")
    """Variantes do ícone `document_fit`."""
    DocumentFlowchart = _Variants21("document_flowchart")
    """Variantes do ícone `document_flowchart`."""
    DocumentFolder = _Variants136("document_folder")
    """Variantes do ícone `document_folder`."""
    DocumentFooter = _Variants28("document_footer")
    """Variantes do ícone `document_footer`."""
    DocumentFooterDismiss = _Variants21("document_footer_dismiss")
    """Variantes do ícone `document_footer_dismiss`."""
    DocumentFs = _Variants56("document_fs")
    """Variantes do ícone `document_fs`."""
    DocumentGlobe = _Variants28("document_globe")
    """Variantes do ícone `document_globe`."""
    DocumentHeader = _Variants78("document_header")
    """Variantes do ícone `document_header`."""
    DocumentHeaderArrowDown = _Variants28("document_header_arrow_down")
    """Variantes do ícone `document_header_arrow_down`."""
    DocumentHeaderDismiss = _Variants21("document_header_dismiss")
    """Variantes do ícone `document_header_dismiss`."""
    DocumentHeaderFooter = _Variants78("document_header_footer")
    """Variantes do ícone `document_header_footer`."""
    DocumentHeart = _Variants21("document_heart")
    """Variantes do ícone `document_heart`."""
    DocumentHeartPulse = _Variants21("document_heart_pulse")
    """Variantes do ícone `document_heart_pulse`."""
    DocumentImage = _Variants60("document_image")
    """Variantes do ícone `document_image`."""
    DocumentJava = _Variants60("document_java")
    """Variantes do ícone `document_java`."""
    DocumentJavascript = _Variants28("document_javascript")
    """Variantes do ícone `document_javascript`."""
    DocumentJs = _Variants56("document_js")
    """Variantes do ícone `document_js`."""
    DocumentKey = _Variants58("document_key")
    """Variantes do ícone `document_key`."""
    DocumentLandscape = _Variants21("document_landscape")
    """Variantes do ícone `document_landscape`."""
    DocumentLandscapeData = _Variants21("document_landscape_data")
    """Variantes do ícone `document_landscape_data`."""
    DocumentLandscapeSplit = _Variants21("document_landscape_split")
    """Variantes do ícone `document_landscape_split`."""
    DocumentLandscapeSplitHint = _Variants21("document_landscape_split_hint")
    """Variantes do ícone `document_landscape_split_hint`."""
    DocumentLightning = _Variants66("document_lightning")
    """Variantes do ícone `document_lightning`."""
    DocumentLink = _Variants28("document_link")
    """Variantes do ícone `document_link`."""
    DocumentLock = _Variants35("document_lock")
    """Variantes do ícone `document_lock`."""
    DocumentMargins = _Variants21("document_margins")
    """Variantes do ícone `document_margins`."""
    DocumentMarkdown = _Variants60("document_markdown")
    """Variantes do ícone `document_markdown`."""
    DocumentMention = _Variants37("document_mention")
    """Variantes do ícone `document_mention`."""
    DocumentMultiple = _Variants28("document_multiple")
    """Variantes do ícone `document_multiple`."""
    DocumentMultiplePercent = _Variants21("document_multiple_percent")
    """Variantes do ícone `document_multiple_percent`."""
    DocumentMultipleProhibited = _Variants21("document_multiple_prohibited")
    """Variantes do ícone `document_multiple_prohibited`."""
    DocumentMultipleSync = _Variants58("document_multiple_sync")
    """Variantes do ícone `document_multiple_sync`."""
    DocumentNumber1 = _Variants56("document_number_1")
    """Variantes do ícone `document_number_1`."""
    DocumentOnePage = _Variants23("document_one_page")
    """Variantes do ícone `document_one_page`."""
    DocumentOnePageAdd = _Variants28("document_one_page_add")
    """Variantes do ícone `document_one_page_add`."""
    DocumentOnePageBeaker = _Variants56("document_one_page_beaker")
    """Variantes do ícone `document_one_page_beaker`."""
    DocumentOnePageColumns = _Variants21("document_one_page_columns")
    """Variantes do ícone `document_one_page_columns`."""
    DocumentOnePageLink = _Variants28("document_one_page_link")
    """Variantes do ícone `document_one_page_link`."""
    DocumentOnePageMultiple = _Variants23("document_one_page_multiple")
    """Variantes do ícone `document_one_page_multiple`."""
    DocumentOnePageMultipleSparkle = _Variants23("document_one_page_multiple_sparkle")
    """Variantes do ícone `document_one_page_multiple_sparkle`."""
    DocumentOnePageSparkle = _Variants23("document_one_page_sparkle")
    """Variantes do ícone `document_one_page_sparkle`."""
    DocumentPageBottomCenter = _Variants21("document_page_bottom_center")
    """Variantes do ícone `document_page_bottom_center`."""
    DocumentPageBottomLeft = _Variants21("document_page_bottom_left")
    """Variantes do ícone `document_page_bottom_left`."""
    DocumentPageBottomRight = _Variants21("document_page_bottom_right")
    """Variantes do ícone `document_page_bottom_right`."""
    DocumentPageBreak = _Variants21("document_page_break")
    """Variantes do ícone `document_page_break`."""
    DocumentPageNumber = _Variants21("document_page_number")
    """Variantes do ícone `document_page_number`."""
    DocumentPageTopCenter = _Variants21("document_page_top_center")
    """Variantes do ícone `document_page_top_center`."""
    DocumentPageTopLeft = _Variants21("document_page_top_left")
    """Variantes do ícone `document_page_top_left`."""
    DocumentPageTopRight = _Variants21("document_page_top_right")
    """Variantes do ícone `document_page_top_right`."""
    DocumentPdf = _Variants62("document_pdf")
    """Variantes do ícone `document_pdf`."""
    DocumentPercent = _Variants21("document_percent")
    """Variantes do ícone `document_percent`."""
    DocumentPerson = _Variants60("document_person")
    """Variantes do ícone `document_person`."""
    DocumentPill = _Variants21("document_pill")
    """Variantes do ícone `document_pill`."""
    DocumentPowerpoint = _Variants58("document_powerpoint")
    """Variantes do ícone `document_powerpoint`."""
    DocumentPrint = _Variants86("document_print")
    """Variantes do ícone `document_print`."""
    DocumentProhibited = _Variants21("document_prohibited")
    """Variantes do ícone `document_prohibited`."""
    DocumentPy = _Variants56("document_py")
    """Variantes do ícone `document_py`."""
    DocumentQuestionMark = _Variants28("document_question_mark")
    """Variantes do ícone `document_question_mark`."""
    DocumentQueue = _Variants21("document_queue")
    """Variantes do ícone `document_queue`."""
    DocumentQueueAdd = _Variants21("document_queue_add")
    """Variantes do ícone `document_queue_add`."""
    DocumentQueueMultiple = _Variants21("document_queue_multiple")
    """Variantes do ícone `document_queue_multiple`."""
    DocumentRb = _Variants56("document_rb")
    """Variantes do ícone `document_rb`."""
    DocumentRibbon = _Variants23("document_ribbon")
    """Variantes do ícone `document_ribbon`."""
    DocumentSass = _Variants60("document_sass")
    """Variantes do ícone `document_sass`."""
    DocumentSave = _Variants21("document_save")
    """Variantes do ícone `document_save`."""
    DocumentSearch = _Variants90("document_search")
    """Variantes do ícone `document_search`."""
    DocumentSettings = _Variants60("document_settings")
    """Variantes do ícone `document_settings`."""
    DocumentSignature = _Variants66("document_signature")
    """Variantes do ícone `document_signature`."""
    DocumentSparkle = _Variants210("document_sparkle")
    """Variantes do ícone `document_sparkle`."""
    DocumentSplitHint = _Variants28("document_split_hint")
    """Variantes do ícone `document_split_hint`."""
    DocumentSplitHintOff = _Variants28("document_split_hint_off")
    """Variantes do ícone `document_split_hint_off`."""
    DocumentSquare = _Variants23("document_square")
    """Variantes do ícone `document_square`."""
    DocumentSync = _Variants90("document_sync")
    """Variantes do ícone `document_sync`."""
    DocumentTable = _Variants28("document_table")
    """Variantes do ícone `document_table`."""
    DocumentTableArrowRight = _Variants21("document_table_arrow_right")
    """Variantes do ícone `document_table_arrow_right`."""
    DocumentTableCheckmark = _Variants21("document_table_checkmark")
    """Variantes do ícone `document_table_checkmark`."""
    DocumentTableCube = _Variants21("document_table_cube")
    """Variantes do ícone `document_table_cube`."""
    DocumentTableSearch = _Variants21("document_table_search")
    """Variantes do ícone `document_table_search`."""
    DocumentTableTruck = _Variants21("document_table_truck")
    """Variantes do ícone `document_table_truck`."""
    DocumentTarget = _Variants90("document_target")
    """Variantes do ícone `document_target`."""
    DocumentText = _Variants35("document_text")
    """Variantes do ícone `document_text`."""
    DocumentTextClock = _Variants21("document_text_clock")
    """Variantes do ícone `document_text_clock`."""
    DocumentTextExtract = _Variants23("document_text_extract")
    """Variantes do ícone `document_text_extract`."""
    DocumentTextLink = _Variants21("document_text_link")
    """Variantes do ícone `document_text_link`."""
    DocumentTextToolbox = _Variants21("document_text_toolbox")
    """Variantes do ícone `document_text_toolbox`."""
    DocumentToolbox = _Variants21("document_toolbox")
    """Variantes do ícone `document_toolbox`."""
    DocumentTs = _Variants56("document_ts")
    """Variantes do ícone `document_ts`."""
    DocumentVb = _Variants56("document_vb")
    """Variantes do ícone `document_vb`."""
    DocumentWidth = _Variants21("document_width")
    """Variantes do ícone `document_width`."""
    DocumentWord = _Variants23("document_word")
    """Variantes do ícone `document_word`."""
    DocumentYml = _Variants60("document_yml")
    """Variantes do ícone `document_yml`."""
    Documentsfolder = _Variants9("documentsfolder")
    """Variantes do ícone `documentsfolder`."""
    Docx = _Variants9("docx")
    """Variantes do ícone `docx`."""
    Door = _Variants62("door")
    """Variantes do ícone `door`."""
    DoorAdd = _Variants28("door_add")
    """Variantes do ícone `door_add`."""
    DoorArrowLeft = _Variants28("door_arrow_left")
    """Variantes do ícone `door_arrow_left`."""
    DoorArrowRight = _Variants212("door_arrow_right")
    """Variantes do ícone `door_arrow_right`."""
    DoorTag = _Variants21("door_tag")
    """Variantes do ícone `door_tag`."""
    Dotx = _Variants9("dotx")
    """Variantes do ícone `dotx`."""
    DoubleSwipeDown = _Variants21("double_swipe_down")
    """Variantes do ícone `double_swipe_down`."""
    DoubleSwipeUp = _Variants21("double_swipe_up")
    """Variantes do ícone `double_swipe_up`."""
    DoubleTapSwipeDown = _Variants28("double_tap_swipe_down")
    """Variantes do ícone `double_tap_swipe_down`."""
    DoubleTapSwipeUp = _Variants28("double_tap_swipe_up")
    """Variantes do ícone `double_tap_swipe_up`."""
    Drafts = _Variants164("drafts")
    """Variantes do ícone `drafts`."""
    Drag = _Variants21("drag")
    """Variantes do ícone `drag`."""
    DrawImage = _Variants21("draw_image")
    """Variantes do ícone `draw_image`."""
    DrawShape = _Variants21("draw_shape")
    """Variantes do ícone `draw_shape`."""
    DrawText = _Variants21("draw_text")
    """Variantes do ícone `draw_text`."""
    Drawer = _Variants21("drawer")
    """Variantes do ícone `drawer`."""
    DrawerAdd = _Variants21("drawer_add")
    """Variantes do ícone `drawer_add`."""
    DrawerArrowDownload = _Variants21("drawer_arrow_download")
    """Variantes do ícone `drawer_arrow_download`."""
    DrawerDismiss = _Variants21("drawer_dismiss")
    """Variantes do ícone `drawer_dismiss`."""
    DrawerPlay = _Variants21("drawer_play")
    """Variantes do ícone `drawer_play`."""
    DrawerSubtract = _Variants21("drawer_subtract")
    """Variantes do ícone `drawer_subtract`."""
    DrinkBeer = _Variants28("drink_beer")
    """Variantes do ícone `drink_beer`."""
    DrinkBottle = _Variants64("drink_bottle")
    """Variantes do ícone `drink_bottle`."""
    DrinkBottleOff = _Variants64("drink_bottle_off")
    """Variantes do ícone `drink_bottle_off`."""
    DrinkCoffee = _Variants28("drink_coffee")
    """Variantes do ícone `drink_coffee`."""
    DrinkMargarita = _Variants28("drink_margarita")
    """Variantes do ícone `drink_margarita`."""
    DrinkToGo = _Variants21("drink_to_go")
    """Variantes do ícone `drink_to_go`."""
    DrinkWine = _Variants28("drink_wine")
    """Variantes do ícone `drink_wine`."""
    DriveTrain = _Variants21("drive_train")
    """Variantes do ícone `drive_train`."""
    Drop = _Variants82("drop")
    """Variantes do ícone `drop`."""
    DualScreen = _Variants21("dual_screen")
    """Variantes do ícone `dual_screen`."""
    DualScreenAdd = _Variants21("dual_screen_add")
    """Variantes do ícone `dual_screen_add`."""
    DualScreenArrowRight = _Variants21("dual_screen_arrow_right")
    """Variantes do ícone `dual_screen_arrow_right`."""
    DualScreenArrowUp = _Variants21("dual_screen_arrow_up")
    """Variantes do ícone `dual_screen_arrow_up`."""
    DualScreenClock = _Variants21("dual_screen_clock")
    """Variantes do ícone `dual_screen_clock`."""
    DualScreenClosedAlert = _Variants21("dual_screen_closed_alert")
    """Variantes do ícone `dual_screen_closed_alert`."""
    DualScreenDesktop = _Variants21("dual_screen_desktop")
    """Variantes do ícone `dual_screen_desktop`."""
    DualScreenDismiss = _Variants21("dual_screen_dismiss")
    """Variantes do ícone `dual_screen_dismiss`."""
    DualScreenGroup = _Variants21("dual_screen_group")
    """Variantes do ícone `dual_screen_group`."""
    DualScreenHeader = _Variants21("dual_screen_header")
    """Variantes do ícone `dual_screen_header`."""
    DualScreenLock = _Variants21("dual_screen_lock")
    """Variantes do ícone `dual_screen_lock`."""
    DualScreenMirror = _Variants21("dual_screen_mirror")
    """Variantes do ícone `dual_screen_mirror`."""
    DualScreenPagination = _Variants21("dual_screen_pagination")
    """Variantes do ícone `dual_screen_pagination`."""
    DualScreenSettings = _Variants21("dual_screen_settings")
    """Variantes do ícone `dual_screen_settings`."""
    DualScreenSpan = _Variants21("dual_screen_span")
    """Variantes do ícone `dual_screen_span`."""
    DualScreenSpeaker = _Variants21("dual_screen_speaker")
    """Variantes do ícone `dual_screen_speaker`."""
    DualScreenStatusBar = _Variants21("dual_screen_status_bar")
    """Variantes do ícone `dual_screen_status_bar`."""
    DualScreenTablet = _Variants21("dual_screen_tablet")
    """Variantes do ícone `dual_screen_tablet`."""
    DualScreenUpdate = _Variants21("dual_screen_update")
    """Variantes do ícone `dual_screen_update`."""
    DualScreenVerticalScroll = _Variants21("dual_screen_vertical_scroll")
    """Variantes do ícone `dual_screen_vertical_scroll`."""
    DualScreenVibrate = _Variants21("dual_screen_vibrate")
    """Variantes do ícone `dual_screen_vibrate`."""
    Dumbbell = _Variants50("dumbbell")
    """Variantes do ícone `dumbbell`."""
    Dust = _Variants41("dust")
    """Variantes do ícone `dust`."""
    Earth = _Variants88("earth")
    """Variantes do ícone `earth`."""
    EarthLeaf = _Variants88("earth_leaf")
    """Variantes do ícone `earth_leaf`."""
    Edit = _Variants214("edit")
    """Variantes do ícone `edit`."""
    EditArrowBack = _Variants28("edit_arrow_back")
    """Variantes do ícone `edit_arrow_back`."""
    EditLineHorizontal3 = _Variants41("edit_line_horizontal_3")
    """Variantes do ícone `edit_line_horizontal_3`."""
    EditLock = _Variants28("edit_lock")
    """Variantes do ícone `edit_lock`."""
    EditOff = _Variants82("edit_off")
    """Variantes do ícone `edit_off`."""
    EditPerson = _Variants28("edit_person")
    """Variantes do ícone `edit_person`."""
    EditProhibited = _Variants23("edit_prohibited")
    """Variantes do ícone `edit_prohibited`."""
    EditSettings = _Variants21("edit_settings")
    """Variantes do ícone `edit_settings`."""
    Elevator = _Variants94("elevator")
    """Variantes do ícone `elevator`."""
    Email = _Variants9("email")
    """Variantes do ícone `email`."""
    Emoji = _Variants66("emoji")
    """Variantes do ícone `emoji`."""
    EmojiAdd = _Variants28("emoji_add")
    """Variantes do ícone `emoji_add`."""
    EmojiAngry = _Variants28("emoji_angry")
    """Variantes do ícone `emoji_angry`."""
    EmojiEdit = _Variants37("emoji_edit")
    """Variantes do ícone `emoji_edit`."""
    EmojiHand = _Variants23("emoji_hand")
    """Variantes do ícone `emoji_hand`."""
    EmojiHint = _Variants23("emoji_hint")
    """Variantes do ícone `emoji_hint`."""
    EmojiLaugh = _Variants28("emoji_laugh")
    """Variantes do ícone `emoji_laugh`."""
    EmojiMeh = _Variants28("emoji_meh")
    """Variantes do ícone `emoji_meh`."""
    EmojiMeme = _Variants28("emoji_meme")
    """Variantes do ícone `emoji_meme`."""
    EmojiMultiple = _Variants21("emoji_multiple")
    """Variantes do ícone `emoji_multiple`."""
    EmojiSad = _Variants28("emoji_sad")
    """Variantes do ícone `emoji_sad`."""
    EmojiSadSlight = _Variants21("emoji_sad_slight")
    """Variantes do ícone `emoji_sad_slight`."""
    EmojiSmileSlight = _Variants21("emoji_smile_slight")
    """Variantes do ícone `emoji_smile_slight`."""
    EmojiSparkle = _Variants23("emoji_sparkle")
    """Variantes do ícone `emoji_sparkle`."""
    EmojiSurprise = _Variants21("emoji_surprise")
    """Variantes do ícone `emoji_surprise`."""
    Engine = _Variants21("engine")
    """Variantes do ícone `engine`."""
    EqualCircle = _Variants28("equal_circle")
    """Variantes do ícone `equal_circle`."""
    EqualOff = _Variants52("equal_off")
    """Variantes do ícone `equal_off`."""
    Eraser = _Variants21("eraser")
    """Variantes do ícone `eraser`."""
    EraserMedium = _Variants21("eraser_medium")
    """Variantes do ícone `eraser_medium`."""
    EraserSegment = _Variants21("eraser_segment")
    """Variantes do ícone `eraser_segment`."""
    EraserSmall = _Variants21("eraser_small")
    """Variantes do ícone `eraser_small`."""
    EraserTool = _Variants21("eraser_tool")
    """Variantes do ícone `eraser_tool`."""
    ErrorCircle = _Variants216("error_circle")
    """Variantes do ícone `error_circle`."""
    ErrorCircleHint = _Variants28("error_circle_hint")
    """Variantes do ícone `error_circle_hint`."""
    ErrorCircleSettings = _Variants60("error_circle_settings")
    """Variantes do ícone `error_circle_settings`."""
    Excel = _Variants18("excel")
    """Variantes do ícone `excel`."""
    Exe = _Variants9("exe")
    """Variantes do ícone `exe`."""
    ExpandUpLeft = _Variants23("expand_up_left")
    """Variantes do ícone `expand_up_left`."""
    ExpandUpRight = _Variants23("expand_up_right")
    """Variantes do ícone `expand_up_right`."""
    ExtendedDock = _Variants21("extended_dock")
    """Variantes do ícone `extended_dock`."""
    Eye = _Variants30("eye")
    """Variantes do ícone `eye`."""
    EyeCircle = _Variants28("eye_circle")
    """Variantes do ícone `eye_circle`."""
    EyeLines = _Variants86("eye_lines")
    """Variantes do ícone `eye_lines`."""
    EyeOff = _Variants218("eye_off")
    """Variantes do ícone `eye_off`."""
    EyeTracking = _Variants28("eye_tracking")
    """Variantes do ícone `eye_tracking`."""
    EyeTrackingOff = _Variants28("eye_tracking_off")
    """Variantes do ícone `eye_tracking_off`."""
    Eyedropper = _Variants28("eyedropper")
    """Variantes do ícone `eyedropper`."""
    EyedropperOff = _Variants21("eyedropper_off")
    """Variantes do ícone `eyedropper_off`."""
    FStop = _Variants50("f_stop")
    """Variantes do ícone `f_stop`."""
    Fabricontology = _Variants223("fabricontology")
    """Variantes do ícone `fabricontology`."""
    FastAcceleration = _Variants21("fast_acceleration")
    """Variantes do ícone `fast_acceleration`."""
    FastForward = _Variants50("fast_forward")
    """Variantes do ícone `fast_forward`."""
    FastForwardCircle = _Variants225("fast_forward_circle")
    """Variantes do ícone `fast_forward_circle`."""
    Favoritesfolder = _Variants9("favoritesfolder")
    """Variantes do ícone `favoritesfolder`."""
    Fax = _Variants60("fax")
    """Variantes do ícone `fax`."""
    Feed = _Variants23("feed")
    """Variantes do ícone `feed`."""
    Filmstrip = _Variants88("filmstrip")
    """Variantes do ícone `filmstrip`."""
    FilmstripArrowUp = _Variants90("filmstrip_arrow_up")
    """Variantes do ícone `filmstrip_arrow_up`."""
    FilmstripGlobe = _Variants90("filmstrip_globe")
    """Variantes do ícone `filmstrip_globe`."""
    FilmstripImage = _Variants21("filmstrip_image")
    """Variantes do ícone `filmstrip_image`."""
    FilmstripMusicNote2 = _Variants58("filmstrip_music_note_2")
    """Variantes do ícone `filmstrip_music_note_2`."""
    FilmstripOff = _Variants227("filmstrip_off")
    """Variantes do ícone `filmstrip_off`."""
    FilmstripPlay = _Variants90("filmstrip_play")
    """Variantes do ícone `filmstrip_play`."""
    FilmstripSplit = _Variants90("filmstrip_split")
    """Variantes do ícone `filmstrip_split`."""
    Filter = _Variants229("filter")
    """Variantes do ícone `filter`."""
    FilterAdd = _Variants28("filter_add")
    """Variantes do ícone `filter_add`."""
    FilterDismiss = _Variants28("filter_dismiss")
    """Variantes do ícone `filter_dismiss`."""
    FilterSync = _Variants28("filter_sync")
    """Variantes do ícone `filter_sync`."""
    Fingerprint = _Variants88("fingerprint")
    """Variantes do ícone `fingerprint`."""
    Fire = _Variants28("fire")
    """Variantes do ícone `fire`."""
    Fireplace = _Variants94("fireplace")
    """Variantes do ícone `fireplace`."""
    FixedWidth = _Variants21("fixed_width")
    """Variantes do ícone `fixed_width`."""
    Flag = _Variants123("flag")
    """Variantes do ícone `flag`."""
    FlagCheckered = _Variants58("flag_checkered")
    """Variantes do ícone `flag_checkered`."""
    FlagClock = _Variants23("flag_clock")
    """Variantes do ícone `flag_clock`."""
    FlagOff = _Variants231("flag_off")
    """Variantes do ícone `flag_off`."""
    FlagPride = _Variants233("flag_pride")
    """Variantes do ícone `flag_pride`."""
    FlagPrideIntersexInclusiveProgress = _Variants233("flag_pride_intersex_inclusive_progress")
    """Variantes do ícone `flag_pride_intersex_inclusive_progress`."""
    FlagPridePhiladelphia = _Variants233("flag_pride_philadelphia")
    """Variantes do ícone `flag_pride_philadelphia`."""
    FlagPrideProgress = _Variants233("flag_pride_progress")
    """Variantes do ícone `flag_pride_progress`."""
    Flash = _Variants229("flash")
    """Variantes do ícone `flash`."""
    FlashAdd = _Variants58("flash_add")
    """Variantes do ícone `flash_add`."""
    FlashAuto = _Variants21("flash_auto")
    """Variantes do ícone `flash_auto`."""
    FlashCheckmark = _Variants50("flash_checkmark")
    """Variantes do ícone `flash_checkmark`."""
    FlashFlow = _Variants28("flash_flow")
    """Variantes do ícone `flash_flow`."""
    FlashOff = _Variants21("flash_off")
    """Variantes do ícone `flash_off`."""
    FlashPlay = _Variants64("flash_play")
    """Variantes do ícone `flash_play`."""
    FlashSettings = _Variants21("flash_settings")
    """Variantes do ícone `flash_settings`."""
    FlashSparkle = _Variants28("flash_sparkle")
    """Variantes do ícone `flash_sparkle`."""
    Flashlight = _Variants28("flashlight")
    """Variantes do ícone `flashlight`."""
    FlashlightOff = _Variants21("flashlight_off")
    """Variantes do ícone `flashlight_off`."""
    FlipHorizontal = _Variants23("flip_horizontal")
    """Variantes do ícone `flip_horizontal`."""
    FlipVertical = _Variants23("flip_vertical")
    """Variantes do ícone `flip_vertical`."""
    Flow = _Variants90("flow")
    """Variantes do ícone `flow`."""
    FlowArrow = _Variants23("flow_arrow")
    """Variantes do ícone `flow_arrow`."""
    FlowDot = _Variants28("flow_dot")
    """Variantes do ícone `flow_dot`."""
    FlowSparkle = _Variants28("flow_sparkle")
    """Variantes do ícone `flow_sparkle`."""
    Flowchart = _Variants90("flowchart")
    """Variantes do ícone `flowchart`."""
    FlowchartCircle = _Variants21("flowchart_circle")
    """Variantes do ícone `flowchart_circle`."""
    Fluent = _Variants94("fluent")
    """Variantes do ícone `fluent`."""
    Fluid = _Variants28("fluid")
    """Variantes do ícone `fluid`."""
    Folder = _Variants235("folder")
    """Variantes do ícone `folder`."""
    FolderAdd = _Variants23("folder_add")
    """Variantes do ícone `folder_add`."""
    FolderArrowLeft = _Variants23("folder_arrow_left")
    """Variantes do ícone `folder_arrow_left`."""
    FolderArrowRight = _Variants66("folder_arrow_right")
    """Variantes do ícone `folder_arrow_right`."""
    FolderArrowUp = _Variants23("folder_arrow_up")
    """Variantes do ícone `folder_arrow_up`."""
    FolderBriefcase = _Variants58("folder_briefcase")
    """Variantes do ícone `folder_briefcase`."""
    FolderDataBar = _Variants58("folder_data_bar")
    """Variantes do ícone `folder_data_bar`."""
    FolderDismiss = _Variants28("folder_dismiss")
    """Variantes do ícone `folder_dismiss`."""
    FolderDocument = _Variants50("folder_document")
    """Variantes do ícone `folder_document`."""
    FolderGlobe = _Variants50("folder_globe")
    """Variantes do ícone `folder_globe`."""
    FolderHint = _Variants58("folder_hint")
    """Variantes do ícone `folder_hint`."""
    FolderHolder = _Variants58("folder_holder")
    """Variantes do ícone `folder_holder`."""
    FolderLightning = _Variants28("folder_lightning")
    """Variantes do ícone `folder_lightning`."""
    FolderLink = _Variants23("folder_link")
    """Variantes do ícone `folder_link`."""
    FolderList = _Variants60("folder_list")
    """Variantes do ícone `folder_list`."""
    FolderMail = _Variants78("folder_mail")
    """Variantes do ícone `folder_mail`."""
    FolderMultiple = _Variants23("folder_multiple")
    """Variantes do ícone `folder_multiple`."""
    FolderOpen = _Variants50("folder_open")
    """Variantes do ícone `folder_open`."""
    FolderOpenDown = _Variants50("folder_open_down")
    """Variantes do ícone `folder_open_down`."""
    FolderOpenVertical = _Variants28("folder_open_vertical")
    """Variantes do ícone `folder_open_vertical`."""
    FolderPeople = _Variants21("folder_people")
    """Variantes do ícone `folder_people`."""
    FolderPerson = _Variants23("folder_person")
    """Variantes do ícone `folder_person`."""
    FolderProhibited = _Variants23("folder_prohibited")
    """Variantes do ícone `folder_prohibited`."""
    FolderSearch = _Variants28("folder_search")
    """Variantes do ícone `folder_search`."""
    FolderSwap = _Variants28("folder_swap")
    """Variantes do ícone `folder_swap`."""
    FolderSync = _Variants28("folder_sync")
    """Variantes do ícone `folder_sync`."""
    FolderZip = _Variants28("folder_zip")
    """Variantes do ícone `folder_zip`."""
    Font = _Variants9("font")
    """Variantes do ícone `font`."""
    FontDecrease = _Variants21("font_decrease")
    """Variantes do ícone `font_decrease`."""
    FontIncrease = _Variants21("font_increase")
    """Variantes do ícone `font_increase`."""
    FontSpaceTrackingIn = _Variants50("font_space_tracking_in")
    """Variantes do ícone `font_space_tracking_in`."""
    FontSpaceTrackingOut = _Variants50("font_space_tracking_out")
    """Variantes do ícone `font_space_tracking_out`."""
    Food = _Variants35("food")
    """Variantes do ícone `food`."""
    FoodApple = _Variants21("food_apple")
    """Variantes do ícone `food_apple`."""
    FoodCake = _Variants52("food_cake")
    """Variantes do ícone `food_cake`."""
    FoodCarrot = _Variants21("food_carrot")
    """Variantes do ícone `food_carrot`."""
    FoodChickenLeg = _Variants90("food_chicken_leg")
    """Variantes do ícone `food_chicken_leg`."""
    FoodEgg = _Variants28("food_egg")
    """Variantes do ícone `food_egg`."""
    FoodFish = _Variants21("food_fish")
    """Variantes do ícone `food_fish`."""
    FoodGrains = _Variants21("food_grains")
    """Variantes do ícone `food_grains`."""
    FoodPizza = _Variants21("food_pizza")
    """Variantes do ícone `food_pizza`."""
    FoodToast = _Variants28("food_toast")
    """Variantes do ícone `food_toast`."""
    Form = _Variants237("form")
    """Variantes do ícone `form`."""
    FormMultiple = _Variants117("form_multiple")
    """Variantes do ícone `form_multiple`."""
    FormMultipleCollection = _Variants142("form_multiple_collection")
    """Variantes do ícone `form_multiple_collection`."""
    FormNew = _Variants26("form_new")
    """Variantes do ícone `form_new`."""
    FormSparkle = _Variants58("form_sparkle")
    """Variantes do ícone `form_sparkle`."""
    Forms = _Variants241("forms")
    """Variantes do ícone `forms`."""
    Fps120 = _Variants21("fps_120")
    """Variantes do ícone `fps_120`."""
    Fps240 = _Variants21("fps_240")
    """Variantes do ícone `fps_240`."""
    Fps30 = _Variants37("fps_30")
    """Variantes do ícone `fps_30`."""
    Fps60 = _Variants37("fps_60")
    """Variantes do ícone `fps_60`."""
    Fps960 = _Variants21("fps_960")
    """Variantes do ícone `fps_960`."""
    Frame = _Variants28("frame")
    """Variantes do ícone `frame`."""
    FullScreenMaximize = _Variants62("full_screen_maximize")
    """Variantes do ícone `full_screen_maximize`."""
    FullScreenMinimize = _Variants62("full_screen_minimize")
    """Variantes do ícone `full_screen_minimize`."""
    GameChat = _Variants243("game_chat")
    """Variantes do ícone `game_chat`."""
    GameControllerBumperLeft = _Variants58("game_controller_bumper_left")
    """Variantes do ícone `game_controller_bumper_left`."""
    GameControllerBumperRight = _Variants58("game_controller_bumper_right")
    """Variantes do ícone `game_controller_bumper_right`."""
    GameControllerButtonA = _Variants58("game_controller_button_a")
    """Variantes do ícone `game_controller_button_a`."""
    GameControllerButtonB = _Variants58("game_controller_button_b")
    """Variantes do ícone `game_controller_button_b`."""
    GameControllerButtonX = _Variants58("game_controller_button_x")
    """Variantes do ícone `game_controller_button_x`."""
    GameControllerButtonY = _Variants58("game_controller_button_y")
    """Variantes do ícone `game_controller_button_y`."""
    GameControllerTriggerLeft = _Variants58("game_controller_trigger_left")
    """Variantes do ícone `game_controller_trigger_left`."""
    GameControllerTriggerRight = _Variants58("game_controller_trigger_right")
    """Variantes do ícone `game_controller_trigger_right`."""
    Games = _Variants23("games")
    """Variantes do ícone `games`."""
    GanttChart = _Variants28("gantt_chart")
    """Variantes do ícone `gantt_chart`."""
    Gas = _Variants28("gas")
    """Variantes do ícone `gas`."""
    GasPropane = _Variants60("gas_propane")
    """Variantes do ícone `gas_propane`."""
    GasPump = _Variants21("gas_pump")
    """Variantes do ícone `gas_pump`."""
    Gather = _Variants58("gather")
    """Variantes do ícone `gather`."""
    Gauge = _Variants202("gauge")
    """Variantes do ícone `gauge`."""
    GaugeAdd = _Variants58("gauge_add")
    """Variantes do ícone `gauge_add`."""
    GaugeRotate0 = _Variants23("gauge_rotate_0")
    """Variantes do ícone `gauge_rotate_0`."""
    GaugeRotate315 = _Variants23("gauge_rotate_315")
    """Variantes do ícone `gauge_rotate_315`."""
    Gavel = _Variants90("gavel")
    """Variantes do ícone `gavel`."""
    GavelProhibited = _Variants60("gavel_prohibited")
    """Variantes do ícone `gavel_prohibited`."""
    Genericfile = _Variants9("genericfile")
    """Variantes do ícone `genericfile`."""
    Gesture = _Variants21("gesture")
    """Variantes do ícone `gesture`."""
    Gif = _Variants28("gif")
    """Variantes do ícone `gif`."""
    Gift = _Variants54("gift")
    """Variantes do ícone `gift`."""
    GiftCard = _Variants54("gift_card")
    """Variantes do ícone `gift_card`."""
    GiftCardAdd = _Variants21("gift_card_add")
    """Variantes do ícone `gift_card_add`."""
    GiftCardArrowRight = _Variants21("gift_card_arrow_right")
    """Variantes do ícone `gift_card_arrow_right`."""
    GiftCardMoney = _Variants21("gift_card_money")
    """Variantes do ícone `gift_card_money`."""
    GiftCardMultiple = _Variants21("gift_card_multiple")
    """Variantes do ícone `gift_card_multiple`."""
    GiftOpen = _Variants90("gift_open")
    """Variantes do ícone `gift_open`."""
    Glance = _Variants82("glance")
    """Variantes do ícone `glance`."""
    GlanceDefault = _Variants245("glance_default")
    """Variantes do ícone `glance_default`."""
    GlanceHorizontal = _Variants82("glance_horizontal")
    """Variantes do ícone `glance_horizontal`."""
    GlanceHorizontalSparkle = _Variants183("glance_horizontal_sparkle")
    """Variantes do ícone `glance_horizontal_sparkle`."""
    GlanceHorizontalSparkles = _Variants28("glance_horizontal_sparkles")
    """Variantes do ícone `glance_horizontal_sparkles`."""
    Glasses = _Variants23("glasses")
    """Variantes do ícone `glasses`."""
    GlassesOff = _Variants23("glasses_off")
    """Variantes do ícone `glasses_off`."""
    Globe = _Variants247("globe")
    """Variantes do ícone `globe`."""
    GlobeAdd = _Variants21("globe_add")
    """Variantes do ícone `globe_add`."""
    GlobeArrowForward = _Variants90("globe_arrow_forward")
    """Variantes do ícone `globe_arrow_forward`."""
    GlobeArrowUp = _Variants28("globe_arrow_up")
    """Variantes do ícone `globe_arrow_up`."""
    GlobeClock = _Variants28("globe_clock")
    """Variantes do ícone `globe_clock`."""
    GlobeDesktop = _Variants21("globe_desktop")
    """Variantes do ícone `globe_desktop`."""
    GlobeError = _Variants28("globe_error")
    """Variantes do ícone `globe_error`."""
    GlobeLocation = _Variants21("globe_location")
    """Variantes do ícone `globe_location`."""
    GlobeOff = _Variants82("globe_off")
    """Variantes do ícone `globe_off`."""
    GlobePerson = _Variants21("globe_person")
    """Variantes do ícone `globe_person`."""
    GlobeProhibited = _Variants28("globe_prohibited")
    """Variantes do ícone `globe_prohibited`."""
    GlobeSearch = _Variants21("globe_search")
    """Variantes do ícone `globe_search`."""
    GlobeShield = _Variants249("globe_shield")
    """Variantes do ícone `globe_shield`."""
    GlobeStand = _Variants58("globe_stand")
    """Variantes do ícone `globe_stand`."""
    GlobeStar = _Variants60("globe_star")
    """Variantes do ícone `globe_star`."""
    GlobeSurface = _Variants142("globe_surface")
    """Variantes do ícone `globe_surface`."""
    GlobeSync = _Variants28("globe_sync")
    """Variantes do ícone `globe_sync`."""
    GlobeVideo = _Variants86("globe_video")
    """Variantes do ícone `globe_video`."""
    GlobeWarning = _Variants28("globe_warning")
    """Variantes do ícone `globe_warning`."""
    Grid = _Variants50("grid")
    """Variantes do ícone `grid`."""
    GridCircles = _Variants156("grid_circles")
    """Variantes do ícone `grid_circles`."""
    GridDots = _Variants50("grid_dots")
    """Variantes do ícone `grid_dots`."""
    GridKanban = _Variants60("grid_kanban")
    """Variantes do ícone `grid_kanban`."""
    Group = _Variants21("group")
    """Variantes do ícone `group`."""
    GroupDismiss = _Variants21("group_dismiss")
    """Variantes do ícone `group_dismiss`."""
    GroupList = _Variants21("group_list")
    """Variantes do ícone `group_list`."""
    GroupReturn = _Variants21("group_return")
    """Variantes do ícone `group_return`."""
    Guardian = _Variants117("guardian")
    """Variantes do ícone `guardian`."""
    Guest = _Variants39("guest")
    """Variantes do ícone `guest`."""
    GuestAdd = _Variants21("guest_add")
    """Variantes do ícone `guest_add`."""
    Guitar = _Variants50("guitar")
    """Variantes do ícone `guitar`."""
    HandDraw = _Variants78("hand_draw")
    """Variantes do ícone `hand_draw`."""
    HandLeft = _Variants50("hand_left")
    """Variantes do ícone `hand_left`."""
    HandLeftChat = _Variants50("hand_left_chat")
    """Variantes do ícone `hand_left_chat`."""
    HandMultiple = _Variants50("hand_multiple")
    """Variantes do ícone `hand_multiple`."""
    HandMultipleStack = _Variants41("hand_multiple_stack")
    """Variantes do ícone `hand_multiple_stack`."""
    HandOpenHeart = _Variants64("hand_open_heart")
    """Variantes do ícone `hand_open_heart`."""
    HandPoint = _Variants23("hand_point")
    """Variantes do ícone `hand_point`."""
    HandRight = _Variants50("hand_right")
    """Variantes do ícone `hand_right`."""
    HandRightOff = _Variants50("hand_right_off")
    """Variantes do ícone `hand_right_off`."""
    HandWave = _Variants28("hand_wave")
    """Variantes do ícone `hand_wave`."""
    Handshake = _Variants90("handshake")
    """Variantes do ícone `handshake`."""
    HapticStrong = _Variants28("haptic_strong")
    """Variantes do ícone `haptic_strong`."""
    HapticWeak = _Variants28("haptic_weak")
    """Variantes do ícone `haptic_weak`."""
    HardDrive = _Variants23("hard_drive")
    """Variantes do ícone `hard_drive`."""
    HardDriveCall = _Variants251("hard_drive_call")
    """Variantes do ícone `hard_drive_call`."""
    HatGraduation = _Variants82("hat_graduation")
    """Variantes do ícone `hat_graduation`."""
    HatGraduationAdd = _Variants28("hat_graduation_add")
    """Variantes do ícone `hat_graduation_add`."""
    HatGraduationSparkle = _Variants50("hat_graduation_sparkle")
    """Variantes do ícone `hat_graduation_sparkle`."""
    Hd = _Variants28("hd")
    """Variantes do ícone `hd`."""
    HdOff = _Variants28("hd_off")
    """Variantes do ícone `hd_off`."""
    Hdr = _Variants21("hdr")
    """Variantes do ícone `hdr`."""
    HdrOff = _Variants21("hdr_off")
    """Variantes do ícone `hdr_off`."""
    Headphones = _Variants253("headphones")
    """Variantes do ícone `headphones`."""
    HeadphonesConvertible = _Variants60("headphones_convertible")
    """Variantes do ícone `headphones_convertible`."""
    HeadphonesMonoaural = _Variants60("headphones_monoaural")
    """Variantes do ícone `headphones_monoaural`."""
    HeadphonesSoundWave = _Variants82("headphones_sound_wave")
    """Variantes do ícone `headphones_sound_wave`."""
    Headset = _Variants35("headset")
    """Variantes do ícone `headset`."""
    HeadsetAdd = _Variants21("headset_add")
    """Variantes do ícone `headset_add`."""
    HeadsetVr = _Variants21("headset_vr")
    """Variantes do ícone `headset_vr`."""
    HeadsetVrOff = _Variants21("headset_vr_off")
    """Variantes do ícone `headset_vr_off`."""
    Heart = _Variants39("heart")
    """Variantes do ícone `heart`."""
    HeartBroken = _Variants28("heart_broken")
    """Variantes do ícone `heart_broken`."""
    HeartCircle = _Variants28("heart_circle")
    """Variantes do ícone `heart_circle`."""
    HeartCircleHint = _Variants23("heart_circle_hint")
    """Variantes do ícone `heart_circle_hint`."""
    HeartOff = _Variants28("heart_off")
    """Variantes do ícone `heart_off`."""
    HeartPulse = _Variants142("heart_pulse")
    """Variantes do ícone `heart_pulse`."""
    HeartPulseCheckmark = _Variants58("heart_pulse_checkmark")
    """Variantes do ícone `heart_pulse_checkmark`."""
    HeartPulseError = _Variants58("heart_pulse_error")
    """Variantes do ícone `heart_pulse_error`."""
    HeartPulseWarning = _Variants58("heart_pulse_warning")
    """Variantes do ícone `heart_pulse_warning`."""
    Hexagon = _Variants82("hexagon")
    """Variantes do ícone `hexagon`."""
    HexagonSparkle = _Variants23("hexagon_sparkle")
    """Variantes do ícone `hexagon_sparkle`."""
    HexagonThree = _Variants52("hexagon_three")
    """Variantes do ícone `hexagon_three`."""
    Highlight = _Variants28("highlight")
    """Variantes do ícone `highlight`."""
    HighlightAccent = _Variants255("highlight_accent")
    """Variantes do ícone `highlight_accent`."""
    HighlightLink = _Variants58("highlight_link")
    """Variantes do ícone `highlight_link`."""
    Highway = _Variants21("highway")
    """Variantes do ícone `highway`."""
    History = _Variants123("history")
    """Variantes do ícone `history`."""
    HistoryDismiss = _Variants86("history_dismiss")
    """Variantes do ícone `history_dismiss`."""
    Home = _Variants39("home")
    """Variantes do ícone `home`."""
    HomeAdd = _Variants21("home_add")
    """Variantes do ícone `home_add`."""
    HomeCheckmark = _Variants23("home_checkmark")
    """Variantes do ícone `home_checkmark`."""
    HomeDatabase = _Variants142("home_database")
    """Variantes do ícone `home_database`."""
    HomeEmpty = _Variants50("home_empty")
    """Variantes do ícone `home_empty`."""
    HomeGarage = _Variants21("home_garage")
    """Variantes do ícone `home_garage`."""
    HomeHeart = _Variants90("home_heart")
    """Variantes do ícone `home_heart`."""
    HomeMoney = _Variants28("home_money")
    """Variantes do ícone `home_money`."""
    HomeMore = _Variants94("home_more")
    """Variantes do ícone `home_more`."""
    HomePerson = _Variants21("home_person")
    """Variantes do ícone `home_person`."""
    HomeSplit = _Variants94("home_split")
    """Variantes do ícone `home_split`."""
    Hourglass = _Variants52("hourglass")
    """Variantes do ícone `hourglass`."""
    HourglassHalf = _Variants52("hourglass_half")
    """Variantes do ícone `hourglass_half`."""
    HourglassOneQuarter = _Variants52("hourglass_one_quarter")
    """Variantes do ícone `hourglass_one_quarter`."""
    HourglassThreeQuarter = _Variants52("hourglass_three_quarter")
    """Variantes do ícone `hourglass_three_quarter`."""
    Html = _Variants9("html")
    """Variantes do ícone `html`."""
    Icons = _Variants21("icons")
    """Variantes do ícone `icons`."""
    Image = _Variants35("image")
    """Variantes do ícone `image`."""
    ImageAdd = _Variants26("image_add")
    """Variantes do ícone `image_add`."""
    ImageAltText = _Variants257("image_alt_text")
    """Variantes do ícone `image_alt_text`."""
    ImageArrowBack = _Variants21("image_arrow_back")
    """Variantes do ícone `image_arrow_back`."""
    ImageArrowBackAr = _Variants70("image_arrow_back__ar")
    """Variantes do ícone `image_arrow_back__ar`."""
    ImageArrowBackHe = _Variants70("image_arrow_back__he")
    """Variantes do ícone `image_arrow_back__he`."""
    ImageArrowCounterclockwise = _Variants21("image_arrow_counterclockwise")
    """Variantes do ícone `image_arrow_counterclockwise`."""
    ImageArrowForward = _Variants21("image_arrow_forward")
    """Variantes do ícone `image_arrow_forward`."""
    ImageArrowForwardAr = _Variants70("image_arrow_forward__ar")
    """Variantes do ícone `image_arrow_forward__ar`."""
    ImageArrowForwardHe = _Variants70("image_arrow_forward__he")
    """Variantes do ícone `image_arrow_forward__he`."""
    ImageBorder = _Variants23("image_border")
    """Variantes do ícone `image_border`."""
    ImageCircle = _Variants23("image_circle")
    """Variantes do ícone `image_circle`."""
    ImageCopy = _Variants259("image_copy")
    """Variantes do ícone `image_copy`."""
    ImageDismiss = _Variants58("image_dismiss")
    """Variantes do ícone `image_dismiss`."""
    ImageEdit = _Variants28("image_edit")
    """Variantes do ícone `image_edit`."""
    ImageGlobe = _Variants21("image_globe")
    """Variantes do ícone `image_globe`."""
    ImageMultiple = _Variants23("image_multiple")
    """Variantes do ícone `image_multiple`."""
    ImageMultipleOff = _Variants60("image_multiple_off")
    """Variantes do ícone `image_multiple_off`."""
    ImageOff = _Variants261("image_off")
    """Variantes do ícone `image_off`."""
    ImageProhibited = _Variants41("image_prohibited")
    """Variantes do ícone `image_prohibited`."""
    ImageReflection = _Variants263("image_reflection")
    """Variantes do ícone `image_reflection`."""
    ImageSearch = _Variants21("image_search")
    """Variantes do ícone `image_search`."""
    ImageShadow = _Variants263("image_shadow")
    """Variantes do ícone `image_shadow`."""
    ImageSparkle = _Variants28("image_sparkle")
    """Variantes do ícone `image_sparkle`."""
    ImageSplit = _Variants21("image_split")
    """Variantes do ícone `image_split`."""
    ImageStack = _Variants60("image_stack")
    """Variantes do ícone `image_stack`."""
    ImageStyleGuide = _Variants60("image_style_guide")
    """Variantes do ícone `image_style_guide`."""
    ImageTable = _Variants23("image_table")
    """Variantes do ícone `image_table`."""
    ImmersiveReader = _Variants66("immersive_reader")
    """Variantes do ícone `immersive_reader`."""
    Important = _Variants229("important")
    """Variantes do ícone `important`."""
    Incognito = _Variants82("incognito")
    """Variantes do ícone `incognito`."""
    Info = _Variants82("info")
    """Variantes do ícone `info`."""
    InfoShield = _Variants58("info_shield")
    """Variantes do ícone `info_shield`."""
    InfoSparkle = _Variants23("info_sparkle")
    """Variantes do ícone `info_sparkle`."""
    Infopath = _Variants266("infopath")
    """Variantes do ícone `infopath`."""
    InkStroke = _Variants21("ink_stroke")
    """Variantes do ícone `ink_stroke`."""
    InkStrokeArrowDown = _Variants21("ink_stroke_arrow_down")
    """Variantes do ícone `ink_stroke_arrow_down`."""
    InkStrokeArrowUpDown = _Variants21("ink_stroke_arrow_up_down")
    """Variantes do ícone `ink_stroke_arrow_up_down`."""
    Inkcanvas = _Variants9("inkcanvas")
    """Variantes do ícone `inkcanvas`."""
    InkingTool = _Variants90("inking_tool")
    """Variantes do ícone `inking_tool`."""
    InkingToolAccent = _Variants268("inking_tool_accent")
    """Variantes do ícone `inking_tool_accent`."""
    InprivateAccount = _Variants50("inprivate_account")
    """Variantes do ícone `inprivate_account`."""
    Insert = _Variants58("insert")
    """Variantes do ícone `insert`."""
    IosArrow = _Variants70("ios_arrow")
    """Variantes do ícone `ios_arrow`."""
    IosArrowLtr = _Variants70("ios_arrow_ltr")
    """Variantes do ícone `ios_arrow_ltr`."""
    IosArrowRtl = _Variants70("ios_arrow_rtl")
    """Variantes do ícone `ios_arrow_rtl`."""
    IosChevronRight = _Variants58("ios_chevron_right")
    """Variantes do ícone `ios_chevron_right`."""
    Iot = _Variants28("iot")
    """Variantes do ícone `iot`."""
    IotAlert = _Variants28("iot_alert")
    """Variantes do ícone `iot_alert`."""
    Ipynb = _Variants9("ipynb")
    """Variantes do ícone `ipynb`."""
    ItemCompare = _Variants23("item_compare")
    """Variantes do ícone `item_compare`."""
    Javascript = _Variants28("javascript")
    """Variantes do ícone `javascript`."""
    Joystick = _Variants58("joystick")
    """Variantes do ícone `joystick`."""
    Key = _Variants90("key")
    """Variantes do ícone `key`."""
    KeyCommand = _Variants28("key_command")
    """Variantes do ícone `key_command`."""
    KeyMultiple = _Variants28("key_multiple")
    """Variantes do ícone `key_multiple`."""
    KeyReset = _Variants21("key_reset")
    """Variantes do ícone `key_reset`."""
    Keyboard = _Variants28("keyboard")
    """Variantes do ícone `keyboard`."""
    Keyboard123 = _Variants21("keyboard_123")
    """Variantes do ícone `keyboard_123`."""
    KeyboardDock = _Variants21("keyboard_dock")
    """Variantes do ícone `keyboard_dock`."""
    KeyboardLayoutFloat = _Variants21("keyboard_layout_float")
    """Variantes do ícone `keyboard_layout_float`."""
    KeyboardLayoutOneHandedLeft = _Variants21("keyboard_layout_one_handed_left")
    """Variantes do ícone `keyboard_layout_one_handed_left`."""
    KeyboardLayoutResize = _Variants21("keyboard_layout_resize")
    """Variantes do ícone `keyboard_layout_resize`."""
    KeyboardLayoutSplit = _Variants21("keyboard_layout_split")
    """Variantes do ícone `keyboard_layout_split`."""
    KeyboardMouse = _Variants60("keyboard_mouse")
    """Variantes do ícone `keyboard_mouse`."""
    KeyboardMouseOff = _Variants58("keyboard_mouse_off")
    """Variantes do ícone `keyboard_mouse_off`."""
    KeyboardOff = _Variants28("keyboard_off")
    """Variantes do ícone `keyboard_off`."""
    KeyboardShift = _Variants28("keyboard_shift")
    """Variantes do ícone `keyboard_shift`."""
    KeyboardShiftUppercase = _Variants28("keyboard_shift_uppercase")
    """Variantes do ícone `keyboard_shift_uppercase`."""
    KeyboardTab = _Variants21("keyboard_tab")
    """Variantes do ícone `keyboard_tab`."""
    Kiosk = _Variants70("kiosk")
    """Variantes do ícone `kiosk`."""
    Laptop = _Variants35("laptop")
    """Variantes do ícone `laptop`."""
    LaptopBriefcase = _Variants142("laptop_briefcase")
    """Variantes do ícone `laptop_briefcase`."""
    LaptopCheckmark = _Variants58("laptop_checkmark")
    """Variantes do ícone `laptop_checkmark`."""
    LaptopDismiss = _Variants60("laptop_dismiss")
    """Variantes do ícone `laptop_dismiss`."""
    LaptopMultiple = _Variants70("laptop_multiple")
    """Variantes do ícone `laptop_multiple`."""
    LaptopOff = _Variants28("laptop_off")
    """Variantes do ícone `laptop_off`."""
    LaptopPerson = _Variants92("laptop_person")
    """Variantes do ícone `laptop_person`."""
    LaptopSettings = _Variants142("laptop_settings")
    """Variantes do ícone `laptop_settings`."""
    LaptopShield = _Variants60("laptop_shield")
    """Variantes do ícone `laptop_shield`."""
    LaserTool = _Variants58("laser_tool")
    """Variantes do ícone `laser_tool`."""
    Lasso = _Variants115("lasso")
    """Variantes do ícone `lasso`."""
    LauncherSettings = _Variants21("launcher_settings")
    """Variantes do ícone `launcher_settings`."""
    Layer = _Variants21("layer")
    """Variantes do ícone `layer`."""
    LayerDiagonal = _Variants28("layer_diagonal")
    """Variantes do ícone `layer_diagonal`."""
    LayerDiagonalAdd = _Variants21("layer_diagonal_add")
    """Variantes do ícone `layer_diagonal_add`."""
    LayerDiagonalPerson = _Variants54("layer_diagonal_person")
    """Variantes do ícone `layer_diagonal_person`."""
    LayerDiagonalSparkle = _Variants28("layer_diagonal_sparkle")
    """Variantes do ícone `layer_diagonal_sparkle`."""
    LayoutAddAbove = _Variants90("layout_add_above")
    """Variantes do ícone `layout_add_above`."""
    LayoutAddBelow = _Variants90("layout_add_below")
    """Variantes do ícone `layout_add_below`."""
    LayoutCellFour = _Variants28("layout_cell_four")
    """Variantes do ícone `layout_cell_four`."""
    LayoutCellFourFocusBottomLeft = _Variants255("layout_cell_four_focus_bottom_left")
    """Variantes do ícone `layout_cell_four_focus_bottom_left`."""
    LayoutCellFourFocusBottomRight = _Variants255("layout_cell_four_focus_bottom_right")
    """Variantes do ícone `layout_cell_four_focus_bottom_right`."""
    LayoutCellFourFocusTopLeft = _Variants255("layout_cell_four_focus_top_left")
    """Variantes do ícone `layout_cell_four_focus_top_left`."""
    LayoutCellFourFocusTopRight = _Variants255("layout_cell_four_focus_top_right")
    """Variantes do ícone `layout_cell_four_focus_top_right`."""
    LayoutColumnFour = _Variants28("layout_column_four")
    """Variantes do ícone `layout_column_four`."""
    LayoutColumnFourFocusCenterLeft = _Variants255("layout_column_four_focus_center_left")
    """Variantes do ícone `layout_column_four_focus_center_left`."""
    LayoutColumnFourFocusCenterRight = _Variants255("layout_column_four_focus_center_right")
    """Variantes do ícone `layout_column_four_focus_center_right`."""
    LayoutColumnFourFocusLeft = _Variants255("layout_column_four_focus_left")
    """Variantes do ícone `layout_column_four_focus_left`."""
    LayoutColumnFourFocusRight = _Variants255("layout_column_four_focus_right")
    """Variantes do ícone `layout_column_four_focus_right`."""
    LayoutColumnOneThirdLeft = _Variants28("layout_column_one_third_left")
    """Variantes do ícone `layout_column_one_third_left`."""
    LayoutColumnOneThirdRight = _Variants28("layout_column_one_third_right")
    """Variantes do ícone `layout_column_one_third_right`."""
    LayoutColumnOneThirdRightHint = _Variants28("layout_column_one_third_right_hint")
    """Variantes do ícone `layout_column_one_third_right_hint`."""
    LayoutColumnThree = _Variants28("layout_column_three")
    """Variantes do ícone `layout_column_three`."""
    LayoutColumnThreeFocusCenter = _Variants255("layout_column_three_focus_center")
    """Variantes do ícone `layout_column_three_focus_center`."""
    LayoutColumnThreeFocusLeft = _Variants255("layout_column_three_focus_left")
    """Variantes do ícone `layout_column_three_focus_left`."""
    LayoutColumnThreeFocusRight = _Variants255("layout_column_three_focus_right")
    """Variantes do ícone `layout_column_three_focus_right`."""
    LayoutColumnTwo = _Variants218("layout_column_two")
    """Variantes do ícone `layout_column_two`."""
    LayoutColumnTwoEdit = _Variants90("layout_column_two_edit")
    """Variantes do ícone `layout_column_two_edit`."""
    LayoutColumnTwoFocusLeft = _Variants271("layout_column_two_focus_left")
    """Variantes do ícone `layout_column_two_focus_left`."""
    LayoutColumnTwoFocusRight = _Variants271("layout_column_two_focus_right")
    """Variantes do ícone `layout_column_two_focus_right`."""
    LayoutColumnTwoSplitLeft = _Variants28("layout_column_two_split_left")
    """Variantes do ícone `layout_column_two_split_left`."""
    LayoutColumnTwoSplitLeftFocusBottomLeft = _Variants255(
        "layout_column_two_split_left_focus_bottom_left"
    )
    """Variantes do ícone `layout_column_two_split_left_focus_bottom_left`."""
    LayoutColumnTwoSplitLeftFocusRight = _Variants255("layout_column_two_split_left_focus_right")
    """Variantes do ícone `layout_column_two_split_left_focus_right`."""
    LayoutColumnTwoSplitLeftFocusTopLeft = _Variants255(
        "layout_column_two_split_left_focus_top_left"
    )
    """Variantes do ícone `layout_column_two_split_left_focus_top_left`."""
    LayoutColumnTwoSplitRight = _Variants28("layout_column_two_split_right")
    """Variantes do ícone `layout_column_two_split_right`."""
    LayoutColumnTwoSplitRightFocusBottomRight = _Variants255(
        "layout_column_two_split_right_focus_bottom_right"
    )
    """Variantes do ícone `layout_column_two_split_right_focus_bottom_right`."""
    LayoutColumnTwoSplitRightFocusLeft = _Variants255("layout_column_two_split_right_focus_left")
    """Variantes do ícone `layout_column_two_split_right_focus_left`."""
    LayoutColumnTwoSplitRightFocusTopRight = _Variants255(
        "layout_column_two_split_right_focus_top_right"
    )
    """Variantes do ícone `layout_column_two_split_right_focus_top_right`."""
    LayoutDynamic = _Variants21("layout_dynamic")
    """Variantes do ícone `layout_dynamic`."""
    LayoutInfographic = _Variants62("layout_infographic")
    """Variantes do ícone `layout_infographic`."""
    LayoutInfographicTwoSparkle = _Variants60("layout_infographic_two_sparkle")
    """Variantes do ícone `layout_infographic_two_sparkle`."""
    LayoutRowFour = _Variants28("layout_row_four")
    """Variantes do ícone `layout_row_four`."""
    LayoutRowFourFocusBottom = _Variants255("layout_row_four_focus_bottom")
    """Variantes do ícone `layout_row_four_focus_bottom`."""
    LayoutRowFourFocusCenterBottom = _Variants255("layout_row_four_focus_center_bottom")
    """Variantes do ícone `layout_row_four_focus_center_bottom`."""
    LayoutRowFourFocusCenterTop = _Variants255("layout_row_four_focus_center_top")
    """Variantes do ícone `layout_row_four_focus_center_top`."""
    LayoutRowFourFocusTop = _Variants255("layout_row_four_focus_top")
    """Variantes do ícone `layout_row_four_focus_top`."""
    LayoutRowThree = _Variants28("layout_row_three")
    """Variantes do ícone `layout_row_three`."""
    LayoutRowThreeFocusBottom = _Variants255("layout_row_three_focus_bottom")
    """Variantes do ícone `layout_row_three_focus_bottom`."""
    LayoutRowThreeFocusCenter = _Variants255("layout_row_three_focus_center")
    """Variantes do ícone `layout_row_three_focus_center`."""
    LayoutRowThreeFocusTop = _Variants255("layout_row_three_focus_top")
    """Variantes do ícone `layout_row_three_focus_top`."""
    LayoutRowTwo = _Variants66("layout_row_two")
    """Variantes do ícone `layout_row_two`."""
    LayoutRowTwoFocusBottom = _Variants255("layout_row_two_focus_bottom")
    """Variantes do ícone `layout_row_two_focus_bottom`."""
    LayoutRowTwoFocusTop = _Variants273("layout_row_two_focus_top")
    """Variantes do ícone `layout_row_two_focus_top`."""
    LayoutRowTwoFocusTopSettings = _Variants275("layout_row_two_focus_top_settings")
    """Variantes do ícone `layout_row_two_focus_top_settings`."""
    LayoutRowTwoSettings = _Variants115("layout_row_two_settings")
    """Variantes do ícone `layout_row_two_settings`."""
    LayoutRowTwoSplitBottom = _Variants28("layout_row_two_split_bottom")
    """Variantes do ícone `layout_row_two_split_bottom`."""
    LayoutRowTwoSplitBottomFocusBottomLeft = _Variants255(
        "layout_row_two_split_bottom_focus_bottom_left"
    )
    """Variantes do ícone `layout_row_two_split_bottom_focus_bottom_left`."""
    LayoutRowTwoSplitBottomFocusBottomRight = _Variants255(
        "layout_row_two_split_bottom_focus_bottom_right"
    )
    """Variantes do ícone `layout_row_two_split_bottom_focus_bottom_right`."""
    LayoutRowTwoSplitBottomFocusTop = _Variants255("layout_row_two_split_bottom_focus_top")
    """Variantes do ícone `layout_row_two_split_bottom_focus_top`."""
    LayoutRowTwoSplitTop = _Variants28("layout_row_two_split_top")
    """Variantes do ícone `layout_row_two_split_top`."""
    LayoutRowTwoSplitTopFocusBottom = _Variants255("layout_row_two_split_top_focus_bottom")
    """Variantes do ícone `layout_row_two_split_top_focus_bottom`."""
    LayoutRowTwoSplitTopFocusTopLeft = _Variants255("layout_row_two_split_top_focus_top_left")
    """Variantes do ícone `layout_row_two_split_top_focus_top_left`."""
    LayoutRowTwoSplitTopFocusTopRight = _Variants255("layout_row_two_split_top_focus_top_right")
    """Variantes do ícone `layout_row_two_split_top_focus_top_right`."""
    LeafOne = _Variants90("leaf_one")
    """Variantes do ícone `leaf_one`."""
    LeafThree = _Variants28("leaf_three")
    """Variantes do ícone `leaf_three`."""
    LeafTwo = _Variants88("leaf_two")
    """Variantes do ícone `leaf_two`."""
    LearningApp = _Variants28("learning_app")
    """Variantes do ícone `learning_app`."""
    Library = _Variants198("library")
    """Variantes do ícone `library`."""
    Lightbulb = _Variants123("lightbulb")
    """Variantes do ícone `lightbulb`."""
    LightbulbCheckmark = _Variants74("lightbulb_checkmark")
    """Variantes do ícone `lightbulb_checkmark`."""
    LightbulbCircle = _Variants21("lightbulb_circle")
    """Variantes do ícone `lightbulb_circle`."""
    LightbulbFilament = _Variants277("lightbulb_filament")
    """Variantes do ícone `lightbulb_filament`."""
    LightbulbPerson = _Variants23("lightbulb_person")
    """Variantes do ícone `lightbulb_person`."""
    LightbulbPulse = _Variants23("lightbulb_pulse")
    """Variantes do ícone `lightbulb_pulse`."""
    LightbulbSparkle = _Variants28("lightbulb_sparkle")
    """Variantes do ícone `lightbulb_sparkle`."""
    Likert = _Variants28("likert")
    """Variantes do ícone `likert`."""
    Line = _Variants94("line")
    """Variantes do ícone `line`."""
    LineDashes = _Variants94("line_dashes")
    """Variantes do ícone `line_dashes`."""
    LineFlowDiagonalUpRight = _Variants90("line_flow_diagonal_up_right")
    """Variantes do ícone `line_flow_diagonal_up_right`."""
    LineHorizontal1 = _Variants50("line_horizontal_1")
    """Variantes do ícone `line_horizontal_1`."""
    LineHorizontal1DashDotDash = _Variants58("line_horizontal_1_dash_dot_dash")
    """Variantes do ícone `line_horizontal_1_dash_dot_dash`."""
    LineHorizontal1Dashes = _Variants50("line_horizontal_1_dashes")
    """Variantes do ícone `line_horizontal_1_dashes`."""
    LineHorizontal1Dot = _Variants58("line_horizontal_1_dot")
    """Variantes do ícone `line_horizontal_1_dot`."""
    LineHorizontal2DashesSolid = _Variants50("line_horizontal_2_dashes_solid")
    """Variantes do ícone `line_horizontal_2_dashes_solid`."""
    LineHorizontal3 = _Variants23("line_horizontal_3")
    """Variantes do ícone `line_horizontal_3`."""
    LineHorizontal4 = _Variants60("line_horizontal_4")
    """Variantes do ícone `line_horizontal_4`."""
    LineHorizontal4Search = _Variants60("line_horizontal_4_search")
    """Variantes do ícone `line_horizontal_4_search`."""
    LineHorizontal5 = _Variants58("line_horizontal_5")
    """Variantes do ícone `line_horizontal_5`."""
    LineHorizontal5Error = _Variants58("line_horizontal_5_error")
    """Variantes do ícone `line_horizontal_5_error`."""
    LineStyle = _Variants21("line_style")
    """Variantes do ícone `line_style`."""
    LineStyleSketch = _Variants62("line_style_sketch")
    """Variantes do ícone `line_style_sketch`."""
    LineThickness = _Variants21("line_thickness")
    """Variantes do ícone `line_thickness`."""
    Link = _Variants279("link")
    """Variantes do ícone `link`."""
    LinkAdd = _Variants28("link_add")
    """Variantes do ícone `link_add`."""
    LinkDismiss = _Variants28("link_dismiss")
    """Variantes do ícone `link_dismiss`."""
    LinkEdit = _Variants28("link_edit")
    """Variantes do ícone `link_edit`."""
    LinkMultiple = _Variants54("link_multiple")
    """Variantes do ícone `link_multiple`."""
    LinkOff = _Variants41("link_off")
    """Variantes do ícone `link_off`."""
    LinkPerson = _Variants88("link_person")
    """Variantes do ícone `link_person`."""
    LinkSettings = _Variants21("link_settings")
    """Variantes do ícone `link_settings`."""
    LinkSquare = _Variants52("link_square")
    """Variantes do ícone `link_square`."""
    LinkToolbox = _Variants58("link_toolbox")
    """Variantes do ícone `link_toolbox`."""
    Linkedfolder = _Variants9("linkedfolder")
    """Variantes do ícone `linkedfolder`."""
    List = _Variants50("list")
    """Variantes do ícone `list`."""
    ListBar = _Variants48("list_bar")
    """Variantes do ícone `list_bar`."""
    ListBarTree = _Variants60("list_bar_tree")
    """Variantes do ícone `list_bar_tree`."""
    ListBarTreeOffset = _Variants60("list_bar_tree_offset")
    """Variantes do ícone `list_bar_tree_offset`."""
    ListRtl = _Variants60("list_rtl")
    """Variantes do ícone `list_rtl`."""
    Listform = _Variants9("listform")
    """Variantes do ícone `listform`."""
    Listitem = _Variants9("listitem")
    """Variantes do ícone `listitem`."""
    Live = _Variants28("live")
    """Variantes do ícone `live`."""
    LiveOff = _Variants28("live_off")
    """Variantes do ícone `live_off`."""
    LocalLanguage = _Variants50("local_language")
    """Variantes do ícone `local_language`."""
    LocalLanguageEn = _Variants50("local_language__en")
    """Variantes do ícone `local_language__en`."""
    LocalLanguageGlobe = _Variants58("local_language_globe")
    """Variantes do ícone `local_language_globe`."""
    LocalLanguageJa = _Variants21("local_language__ja")
    """Variantes do ícone `local_language__ja`."""
    LocalLanguageKo = _Variants50("local_language__ko")
    """Variantes do ícone `local_language__ko`."""
    LocalLanguageZh = _Variants21("local_language__zh")
    """Variantes do ícone `local_language__zh`."""
    Location = _Variants80("location")
    """Variantes do ícone `location`."""
    LocationAdd = _Variants28("location_add")
    """Variantes do ícone `location_add`."""
    LocationAddLeft = _Variants58("location_add_left")
    """Variantes do ícone `location_add_left`."""
    LocationAddRight = _Variants58("location_add_right")
    """Variantes do ícone `location_add_right`."""
    LocationAddUp = _Variants58("location_add_up")
    """Variantes do ícone `location_add_up`."""
    LocationArrow = _Variants82("location_arrow")
    """Variantes do ícone `location_arrow`."""
    LocationArrowLeft = _Variants281("location_arrow_left")
    """Variantes do ícone `location_arrow_left`."""
    LocationArrowRight = _Variants281("location_arrow_right")
    """Variantes do ícone `location_arrow_right`."""
    LocationArrowUp = _Variants281("location_arrow_up")
    """Variantes do ícone `location_arrow_up`."""
    LocationCheckmark = _Variants283("location_checkmark")
    """Variantes do ícone `location_checkmark`."""
    LocationDismiss = _Variants21("location_dismiss")
    """Variantes do ícone `location_dismiss`."""
    LocationLive = _Variants21("location_live")
    """Variantes do ícone `location_live`."""
    LocationOff = _Variants37("location_off")
    """Variantes do ícone `location_off`."""
    LocationRipple = _Variants100("location_ripple")
    """Variantes do ícone `location_ripple`."""
    LocationSettings = _Variants117("location_settings")
    """Variantes do ícone `location_settings`."""
    LocationTargetSquare = _Variants90("location_target_square")
    """Variantes do ícone `location_target_square`."""
    LockClosed = _Variants46("lock_closed")
    """Variantes do ícone `lock_closed`."""
    LockClosedKey = _Variants28("lock_closed_key")
    """Variantes do ícone `lock_closed_key`."""
    LockClosedRibbon = _Variants23("lock_closed_ribbon")
    """Variantes do ícone `lock_closed_ribbon`."""
    LockMultiple = _Variants21("lock_multiple")
    """Variantes do ícone `lock_multiple`."""
    LockOpen = _Variants30("lock_open")
    """Variantes do ícone `lock_open`."""
    LockShield = _Variants35("lock_shield")
    """Variantes do ícone `lock_shield`."""
    Loop = _Variants9("loop")
    """Variantes do ícone `loop`."""
    Loopworkspace = _Variants9("loopworkspace")
    """Variantes do ícone `loopworkspace`."""
    Lottery = _Variants21("lottery")
    """Variantes do ícone `lottery`."""
    Luggage = _Variants23("luggage")
    """Variantes do ícone `luggage`."""
    M365 = _Variants286("m365")
    """Variantes do ícone `m365`."""
    Mail = _Variants46("mail")
    """Variantes do ícone `mail`."""
    MailAdd = _Variants28("mail_add")
    """Variantes do ícone `mail_add`."""
    MailAlert = _Variants288("mail_alert")
    """Variantes do ícone `mail_alert`."""
    MailAllRead = _Variants50("mail_all_read")
    """Variantes do ícone `mail_all_read`."""
    MailAllUnread = _Variants58("mail_all_unread")
    """Variantes do ícone `mail_all_unread`."""
    MailArrowClockwise = _Variants218("mail_arrow_clockwise")
    """Variantes do ícone `mail_arrow_clockwise`."""
    MailArrowDoubleBack = _Variants218("mail_arrow_double_back")
    """Variantes do ícone `mail_arrow_double_back`."""
    MailArrowDown = _Variants60("mail_arrow_down")
    """Variantes do ícone `mail_arrow_down`."""
    MailArrowForward = _Variants60("mail_arrow_forward")
    """Variantes do ícone `mail_arrow_forward`."""
    MailArrowUp = _Variants28("mail_arrow_up")
    """Variantes do ícone `mail_arrow_up`."""
    MailAttach = _Variants50("mail_attach")
    """Variantes do ícone `mail_attach`."""
    MailBriefcase = _Variants227("mail_briefcase")
    """Variantes do ícone `mail_briefcase`."""
    MailCheckmark = _Variants28("mail_checkmark")
    """Variantes do ícone `mail_checkmark`."""
    MailClock = _Variants48("mail_clock")
    """Variantes do ícone `mail_clock`."""
    MailCopy = _Variants290("mail_copy")
    """Variantes do ícone `mail_copy`."""
    MailDataBar = _Variants28("mail_data_bar")
    """Variantes do ícone `mail_data_bar`."""
    MailDismiss = _Variants50("mail_dismiss")
    """Variantes do ícone `mail_dismiss`."""
    MailEdit = _Variants290("mail_edit")
    """Variantes do ícone `mail_edit`."""
    MailError = _Variants28("mail_error")
    """Variantes do ícone `mail_error`."""
    MailFishHook = _Variants23("mail_fish_hook")
    """Variantes do ícone `mail_fish_hook`."""
    MailInbox = _Variants23("mail_inbox")
    """Variantes do ícone `mail_inbox`."""
    MailInboxAdd = _Variants50("mail_inbox_add")
    """Variantes do ícone `mail_inbox_add`."""
    MailInboxAll = _Variants21("mail_inbox_all")
    """Variantes do ícone `mail_inbox_all`."""
    MailInboxArrowDown = _Variants60("mail_inbox_arrow_down")
    """Variantes do ícone `mail_inbox_arrow_down`."""
    MailInboxArrowRight = _Variants21("mail_inbox_arrow_right")
    """Variantes do ícone `mail_inbox_arrow_right`."""
    MailInboxArrowUp = _Variants21("mail_inbox_arrow_up")
    """Variantes do ícone `mail_inbox_arrow_up`."""
    MailInboxCheckmark = _Variants50("mail_inbox_checkmark")
    """Variantes do ícone `mail_inbox_checkmark`."""
    MailInboxDismiss = _Variants50("mail_inbox_dismiss")
    """Variantes do ícone `mail_inbox_dismiss`."""
    MailInboxPerson = _Variants292("mail_inbox_person")
    """Variantes do ícone `mail_inbox_person`."""
    MailLink = _Variants21("mail_link")
    """Variantes do ícone `mail_link`."""
    MailList = _Variants78("mail_list")
    """Variantes do ícone `mail_list`."""
    MailMultiple = _Variants288("mail_multiple")
    """Variantes do ícone `mail_multiple`."""
    MailOff = _Variants28("mail_off")
    """Variantes do ícone `mail_off`."""
    MailOpenPerson = _Variants78("mail_open_person")
    """Variantes do ícone `mail_open_person`."""
    MailPause = _Variants60("mail_pause")
    """Variantes do ícone `mail_pause`."""
    MailProhibited = _Variants50("mail_prohibited")
    """Variantes do ícone `mail_prohibited`."""
    MailRead = _Variants66("mail_read")
    """Variantes do ícone `mail_read`."""
    MailReadBriefcase = _Variants92("mail_read_briefcase")
    """Variantes do ícone `mail_read_briefcase`."""
    MailReadMultiple = _Variants78("mail_read_multiple")
    """Variantes do ícone `mail_read_multiple`."""
    MailRewind = _Variants257("mail_rewind")
    """Variantes do ícone `mail_rewind`."""
    MailSettings = _Variants212("mail_settings")
    """Variantes do ícone `mail_settings`."""
    MailShield = _Variants60("mail_shield")
    """Variantes do ícone `mail_shield`."""
    MailTemplate = _Variants66("mail_template")
    """Variantes do ícone `mail_template`."""
    MailUnread = _Variants30("mail_unread")
    """Variantes do ícone `mail_unread`."""
    MailWarning = _Variants78("mail_warning")
    """Variantes do ícone `mail_warning`."""
    Mailbox = _Variants60("mailbox")
    """Variantes do ícone `mailbox`."""
    Map = _Variants28("map")
    """Variantes do ícone `map`."""
    MapDrive = _Variants28("map_drive")
    """Variantes do ícone `map_drive`."""
    MapPin = _Variants58("map_pin")
    """Variantes do ícone `map_pin`."""
    Markdown = _Variants50("markdown")
    """Variantes do ícone `markdown`."""
    MatchAppLayout = _Variants21("match_app_layout")
    """Variantes do ícone `match_app_layout`."""
    MathFormatLinear = _Variants21("math_format_linear")
    """Variantes do ícone `math_format_linear`."""
    MathFormatProfessional = _Variants28("math_format_professional")
    """Variantes do ícone `math_format_professional`."""
    MathFormula = _Variants90("math_formula")
    """Variantes do ícone `math_formula`."""
    MathFormulaSparkle = _Variants60("math_formula_sparkle")
    """Variantes do ícone `math_formula_sparkle`."""
    MathSymbols = _Variants23("math_symbols")
    """Variantes do ícone `math_symbols`."""
    Maximize = _Variants37("maximize")
    """Variantes do ícone `maximize`."""
    Mctemplate = _Variants9("mctemplate")
    """Variantes do ícone `mctemplate`."""
    Mcworld = _Variants9("mcworld")
    """Variantes do ícone `mcworld`."""
    Md = _Variants9("md")
    """Variantes do ícone `md`."""
    Medal = _Variants28("medal")
    """Variantes do ícone `medal`."""
    MeetNow = _Variants23("meet_now")
    """Variantes do ícone `meet_now`."""
    Megaphone = _Variants98("megaphone")
    """Variantes do ícone `megaphone`."""
    MegaphoneCircle = _Variants21("megaphone_circle")
    """Variantes do ícone `megaphone_circle`."""
    MegaphoneLoud = _Variants72("megaphone_loud")
    """Variantes do ícone `megaphone_loud`."""
    MegaphoneOff = _Variants50("megaphone_off")
    """Variantes do ícone `megaphone_off`."""
    Memory = _Variants56("memory")
    """Variantes do ícone `memory`."""
    Mention = _Variants30("mention")
    """Variantes do ícone `mention`."""
    MentionArrowDown = _Variants58("mention_arrow_down")
    """Variantes do ícone `mention_arrow_down`."""
    MentionBrackets = _Variants58("mention_brackets")
    """Variantes do ícone `mention_brackets`."""
    Merge = _Variants28("merge")
    """Variantes do ícone `merge`."""
    Mic = _Variants123("mic")
    """Variantes do ícone `mic`."""
    MicLink = _Variants23("mic_link")
    """Variantes do ícone `mic_link`."""
    MicOff = _Variants82("mic_off")
    """Variantes do ícone `mic_off`."""
    MicProhibited = _Variants37("mic_prohibited")
    """Variantes do ícone `mic_prohibited`."""
    MicPulse = _Variants23("mic_pulse")
    """Variantes do ícone `mic_pulse`."""
    MicPulseOff = _Variants23("mic_pulse_off")
    """Variantes do ícone `mic_pulse_off`."""
    MicRecord = _Variants50("mic_record")
    """Variantes do ícone `mic_record`."""
    MicSettings = _Variants21("mic_settings")
    """Variantes do ícone `mic_settings`."""
    MicSparkle = _Variants23("mic_sparkle")
    """Variantes do ícone `mic_sparkle`."""
    MicSync = _Variants23("mic_sync")
    """Variantes do ícone `mic_sync`."""
    MicrophoneChat = _Variants23("microphone_chat")
    """Variantes do ícone `microphone_chat`."""
    Microscope = _Variants142("microscope")
    """Variantes do ícone `microscope`."""
    Microwave = _Variants60("microwave")
    """Variantes do ícone `microwave`."""
    Midi = _Variants28("midi")
    """Variantes do ícone `midi`."""
    MidiOff = _Variants28("midi_off")
    """Variantes do ícone `midi_off`."""
    MobileOptimized = _Variants86("mobile_optimized")
    """Variantes do ícone `mobile_optimized`."""
    Model = _Variants9("model")
    """Variantes do ícone `model`."""
    Mold = _Variants41("mold")
    """Variantes do ícone `mold`."""
    Molecule = _Variants123("molecule")
    """Variantes do ícone `molecule`."""
    Money = _Variants28("money")
    """Variantes do ícone `money`."""
    MoneyCalculator = _Variants21("money_calculator")
    """Variantes do ícone `money_calculator`."""
    MoneyDismiss = _Variants21("money_dismiss")
    """Variantes do ícone `money_dismiss`."""
    MoneyHand = _Variants28("money_hand")
    """Variantes do ícone `money_hand`."""
    MoneyOff = _Variants21("money_off")
    """Variantes do ícone `money_off`."""
    MoneySettings = _Variants28("money_settings")
    """Variantes do ícone `money_settings`."""
    MoreCircle = _Variants23("more_circle")
    """Variantes do ícone `more_circle`."""
    MoreHorizontal = _Variants23("more_horizontal")
    """Variantes do ícone `more_horizontal`."""
    MoreVertical = _Variants23("more_vertical")
    """Variantes do ícone `more_vertical`."""
    MountainLocationBottom = _Variants41("mountain_location_bottom")
    """Variantes do ícone `mountain_location_bottom`."""
    MountainLocationTop = _Variants41("mountain_location_top")
    """Variantes do ícone `mountain_location_top`."""
    MountainTrail = _Variants41("mountain_trail")
    """Variantes do ícone `mountain_trail`."""
    MoviesAndTv = _Variants28("movies_and_tv")
    """Variantes do ícone `movies_and_tv`."""
    Mpp = _Variants9("mpp")
    """Variantes do ícone `mpp`."""
    Mpt = _Variants9("mpt")
    """Variantes do ícone `mpt`."""
    Multiple = _Variants9("multiple")
    """Variantes do ícone `multiple`."""
    Multiplier12x = _Variants86("multiplier_1_2x")
    """Variantes do ícone `multiplier_1_2x`."""
    Multiplier15x = _Variants86("multiplier_1_5x")
    """Variantes do ícone `multiplier_1_5x`."""
    Multiplier18x = _Variants86("multiplier_1_8x")
    """Variantes do ícone `multiplier_1_8x`."""
    Multiplier1x = _Variants86("multiplier_1x")
    """Variantes do ícone `multiplier_1x`."""
    Multiplier2x = _Variants86("multiplier_2x")
    """Variantes do ícone `multiplier_2x`."""
    Multiplier5x = _Variants86("multiplier_5x")
    """Variantes do ícone `multiplier_5x`."""
    MultiselectLtr = _Variants28("multiselect_ltr")
    """Variantes do ícone `multiselect_ltr`."""
    MultiselectLtrAlternate02aeadaf = _Variants177("multiselect_ltr__alternate_02aeadaf")
    """Variantes do ícone `multiselect_ltr__alternate_02aeadaf`."""
    MultiselectLtrAlternate249fd1cb = _Variants294("multiselect_ltr__alternate_249fd1cb")
    """Variantes do ícone `multiselect_ltr__alternate_249fd1cb`."""
    MultiselectLtrAlternate7c1f71c6 = _Variants173("multiselect_ltr__alternate_7c1f71c6")
    """Variantes do ícone `multiselect_ltr__alternate_7c1f71c6`."""
    MultiselectLtrAlternate912bd276 = _Variants179("multiselect_ltr__alternate_912bd276")
    """Variantes do ícone `multiselect_ltr__alternate_912bd276`."""
    MultiselectLtrAlternate94bc76a0 = _Variants296("multiselect_ltr__alternate_94bc76a0")
    """Variantes do ícone `multiselect_ltr__alternate_94bc76a0`."""
    MultiselectLtrAlternate98d09883 = _Variants181("multiselect_ltr__alternate_98d09883")
    """Variantes do ícone `multiselect_ltr__alternate_98d09883`."""
    MultiselectRtl = _Variants28("multiselect_rtl")
    """Variantes do ícone `multiselect_rtl`."""
    MultiselectRtlAlternate97479027 = _Variants173("multiselect_rtl__alternate_97479027")
    """Variantes do ícone `multiselect_rtl__alternate_97479027`."""
    MultiselectRtlAlternateA6a75bb9 = _Variants294("multiselect_rtl__alternate_a6a75bb9")
    """Variantes do ícone `multiselect_rtl__alternate_a6a75bb9`."""
    MultiselectRtlAlternateD53e483e = _Variants177("multiselect_rtl__alternate_d53e483e")
    """Variantes do ícone `multiselect_rtl__alternate_d53e483e`."""
    MultiselectRtlAlternateF5ca7bc1 = _Variants179("multiselect_rtl__alternate_f5ca7bc1")
    """Variantes do ícone `multiselect_rtl__alternate_f5ca7bc1`."""
    MultiselectRtlAlternateF6544a7c = _Variants181("multiselect_rtl__alternate_f6544a7c")
    """Variantes do ícone `multiselect_rtl__alternate_f6544a7c`."""
    MultiselectRtlAlternateFad2ae6d = _Variants296("multiselect_rtl__alternate_fad2ae6d")
    """Variantes do ícone `multiselect_rtl__alternate_fad2ae6d`."""
    MusicNote1 = _Variants21("music_note_1")
    """Variantes do ícone `music_note_1`."""
    MusicNote2 = _Variants28("music_note_2")
    """Variantes do ícone `music_note_2`."""
    MusicNote2Play = _Variants58("music_note_2_play")
    """Variantes do ícone `music_note_2_play`."""
    MusicNoteOff1 = _Variants21("music_note_off_1")
    """Variantes do ícone `music_note_off_1`."""
    MusicNoteOff2 = _Variants28("music_note_off_2")
    """Variantes do ícone `music_note_off_2`."""
    MyLocation = _Variants52("my_location")
    """Variantes do ícone `my_location`."""
    Navigation = _Variants23("navigation")
    """Variantes do ícone `navigation`."""
    NavigationBriefcase = _Variants41("navigation_briefcase")
    """Variantes do ícone `navigation_briefcase`."""
    NavigationLocationTarget = _Variants58("navigation_location_target")
    """Variantes do ícone `navigation_location_target`."""
    NavigationPerson = _Variants41("navigation_person")
    """Variantes do ícone `navigation_person`."""
    NavigationPlay = _Variants60("navigation_play")
    """Variantes do ícone `navigation_play`."""
    NavigationUnread = _Variants21("navigation_unread")
    """Variantes do ícone `navigation_unread`."""
    NetworkAdapter = _Variants56("network_adapter")
    """Variantes do ícone `network_adapter`."""
    NetworkCheck = _Variants21("network_check")
    """Variantes do ícone `network_check`."""
    New = _Variants28("new")
    """Variantes do ícone `new`."""
    News = _Variants298("news")
    """Variantes do ícone `news`."""
    Next = _Variants23("next")
    """Variantes do ícone `next`."""
    NextFrame = _Variants21("next_frame")
    """Variantes do ícone `next_frame`."""
    Note = _Variants231("note")
    """Variantes do ícone `note`."""
    NoteAdd = _Variants37("note_add")
    """Variantes do ícone `note_add`."""
    NoteEdit = _Variants21("note_edit")
    """Variantes do ícone `note_edit`."""
    NotePin = _Variants60("note_pin")
    """Variantes do ícone `note_pin`."""
    Notebook = _Variants48("notebook")
    """Variantes do ícone `notebook`."""
    NotebookAdd = _Variants21("notebook_add")
    """Variantes do ícone `notebook_add`."""
    NotebookArrowCurveDown = _Variants58("notebook_arrow_curve_down")
    """Variantes do ícone `notebook_arrow_curve_down`."""
    NotebookError = _Variants21("notebook_error")
    """Variantes do ícone `notebook_error`."""
    NotebookEye = _Variants58("notebook_eye")
    """Variantes do ícone `notebook_eye`."""
    NotebookLightning = _Variants21("notebook_lightning")
    """Variantes do ícone `notebook_lightning`."""
    NotebookQuestionMark = _Variants130("notebook_question_mark")
    """Variantes do ícone `notebook_question_mark`."""
    NotebookSection = _Variants21("notebook_section")
    """Variantes do ícone `notebook_section`."""
    NotebookSectionArrowRight = _Variants21("notebook_section_arrow_right")
    """Variantes do ícone `notebook_section_arrow_right`."""
    NotebookSubsection = _Variants21("notebook_subsection")
    """Variantes do ícone `notebook_subsection`."""
    NotebookSync = _Variants21("notebook_sync")
    """Variantes do ícone `notebook_sync`."""
    Notepad = _Variants82("notepad")
    """Variantes do ícone `notepad`."""
    NotepadEdit = _Variants60("notepad_edit")
    """Variantes do ícone `notepad_edit`."""
    NotepadPerson = _Variants23("notepad_person")
    """Variantes do ícone `notepad_person`."""
    NotepadPersonOff = _Variants23("notepad_person_off")
    """Variantes do ícone `notepad_person_off`."""
    NotepadSparkle = _Variants62("notepad_sparkle")
    """Variantes do ícone `notepad_sparkle`."""
    NumberCircle0 = _Variants23("number_circle_0")
    """Variantes do ícone `number_circle_0`."""
    NumberCircle1 = _Variants23("number_circle_1")
    """Variantes do ícone `number_circle_1`."""
    NumberCircle2 = _Variants23("number_circle_2")
    """Variantes do ícone `number_circle_2`."""
    NumberCircle3 = _Variants23("number_circle_3")
    """Variantes do ícone `number_circle_3`."""
    NumberCircle4 = _Variants23("number_circle_4")
    """Variantes do ícone `number_circle_4`."""
    NumberCircle5 = _Variants23("number_circle_5")
    """Variantes do ícone `number_circle_5`."""
    NumberCircle6 = _Variants23("number_circle_6")
    """Variantes do ícone `number_circle_6`."""
    NumberCircle7 = _Variants23("number_circle_7")
    """Variantes do ícone `number_circle_7`."""
    NumberCircle8 = _Variants23("number_circle_8")
    """Variantes do ícone `number_circle_8`."""
    NumberCircle9 = _Variants23("number_circle_9")
    """Variantes do ícone `number_circle_9`."""
    NumberRow = _Variants28("number_row")
    """Variantes do ícone `number_row`."""
    NumberSymbol = _Variants23("number_symbol")
    """Variantes do ícone `number_symbol`."""
    NumberSymbolDismiss = _Variants21("number_symbol_dismiss")
    """Variantes do ícone `number_symbol_dismiss`."""
    NumberSymbolSquare = _Variants74("number_symbol_square")
    """Variantes do ícone `number_symbol_square`."""
    Office = _Variants286("office")
    """Variantes do ícone `office`."""
    Officescript = _Variants9("officescript")
    """Variantes do ícone `officescript`."""
    Omega = _Variants78("omega")
    """Variantes do ícone `omega`."""
    One = _Variants9("one")
    """Variantes do ícone `one`."""
    Onedrive = _Variants299("onedrive")
    """Variantes do ícone `onedrive`."""
    Onenote = _Variants18("onenote")
    """Variantes do ícone `onenote`."""
    Onepage = _Variants9("onepage")
    """Variantes do ícone `onepage`."""
    Onetoc = _Variants9("onetoc")
    """Variantes do ícone `onetoc`."""
    Open = _Variants82("open")
    """Variantes do ícone `open`."""
    OpenFolder = _Variants37("open_folder")
    """Variantes do ícone `open_folder`."""
    OpenOff = _Variants37("open_off")
    """Variantes do ícone `open_off`."""
    Options = _Variants123("options")
    """Variantes do ícone `options`."""
    OptionsSpeaker = _Variants50("options_speaker")
    """Variantes do ícone `options_speaker`."""
    Org = _Variants301("org")
    """Variantes do ícone `org`."""
    Organization = _Variants82("organization")
    """Variantes do ícone `organization`."""
    OrganizationAdd = _Variants28("organization_add")
    """Variantes do ícone `organization_add`."""
    OrganizationHorizontal = _Variants28("organization_horizontal")
    """Variantes do ícone `organization_horizontal`."""
    Orientation = _Variants21("orientation")
    """Variantes do ícone `orientation`."""
    OrientationPortrait = _Variants21("orientation_portrait")
    """Variantes do ícone `orientation_portrait`."""
    Outlook = _Variants18("outlook")
    """Variantes do ícone `outlook`."""
    Oval = _Variants23("oval")
    """Variantes do ícone `oval`."""
    Oven = _Variants94("oven")
    """Variantes do ícone `oven`."""
    PaddingDown = _Variants21("padding_down")
    """Variantes do ícone `padding_down`."""
    PaddingLeft = _Variants21("padding_left")
    """Variantes do ícone `padding_left`."""
    PaddingRight = _Variants21("padding_right")
    """Variantes do ícone `padding_right`."""
    PaddingTop = _Variants21("padding_top")
    """Variantes do ícone `padding_top`."""
    PageFit = _Variants28("page_fit")
    """Variantes do ícone `page_fit`."""
    PaintBrush = _Variants303("paint_brush")
    """Variantes do ícone `paint_brush`."""
    PaintBrushArrowDown = _Variants21("paint_brush_arrow_down")
    """Variantes do ícone `paint_brush_arrow_down`."""
    PaintBrushArrowUp = _Variants21("paint_brush_arrow_up")
    """Variantes do ícone `paint_brush_arrow_up`."""
    PaintBrushSparkle = _Variants21("paint_brush_sparkle")
    """Variantes do ícone `paint_brush_sparkle`."""
    PaintBrushSubtract = _Variants62("paint_brush_subtract")
    """Variantes do ícone `paint_brush_subtract`."""
    PaintBucket = _Variants28("paint_bucket")
    """Variantes do ícone `paint_bucket`."""
    PaintBucketBrush = _Variants50("paint_bucket_brush")
    """Variantes do ícone `paint_bucket_brush`."""
    Pair = _Variants28("pair")
    """Variantes do ícone `pair`."""
    PanelBottom = _Variants58("panel_bottom")
    """Variantes do ícone `panel_bottom`."""
    PanelBottomContract = _Variants58("panel_bottom_contract")
    """Variantes do ícone `panel_bottom_contract`."""
    PanelBottomExpand = _Variants58("panel_bottom_expand")
    """Variantes do ícone `panel_bottom_expand`."""
    PanelLeft = _Variants23("panel_left")
    """Variantes do ícone `panel_left`."""
    PanelLeftAdd = _Variants23("panel_left_add")
    """Variantes do ícone `panel_left_add`."""
    PanelLeftContract = _Variants50("panel_left_contract")
    """Variantes do ícone `panel_left_contract`."""
    PanelLeftDefault = _Variants305("panel_left_default")
    """Variantes do ícone `panel_left_default`."""
    PanelLeftExpand = _Variants50("panel_left_expand")
    """Variantes do ícone `panel_left_expand`."""
    PanelLeftFocusRight = _Variants273("panel_left_focus_right")
    """Variantes do ícone `panel_left_focus_right`."""
    PanelLeftHeader = _Variants23("panel_left_header")
    """Variantes do ícone `panel_left_header`."""
    PanelLeftHeaderAdd = _Variants23("panel_left_header_add")
    """Variantes do ícone `panel_left_header_add`."""
    PanelLeftHeaderKey = _Variants28("panel_left_header_key")
    """Variantes do ícone `panel_left_header_key`."""
    PanelLeftKey = _Variants28("panel_left_key")
    """Variantes do ícone `panel_left_key`."""
    PanelLeftTall = _Variants58("panel_left_tall")
    """Variantes do ícone `panel_left_tall`."""
    PanelLeftText = _Variants23("panel_left_text")
    """Variantes do ícone `panel_left_text`."""
    PanelLeftTextAdd = _Variants23("panel_left_text_add")
    """Variantes do ícone `panel_left_text_add`."""
    PanelLeftTextDismiss = _Variants23("panel_left_text_dismiss")
    """Variantes do ícone `panel_left_text_dismiss`."""
    PanelRight = _Variants82("panel_right")
    """Variantes do ícone `panel_right`."""
    PanelRightAdd = _Variants58("panel_right_add")
    """Variantes do ícone `panel_right_add`."""
    PanelRightContract = _Variants50("panel_right_contract")
    """Variantes do ícone `panel_right_contract`."""
    PanelRightCursor = _Variants21("panel_right_cursor")
    """Variantes do ícone `panel_right_cursor`."""
    PanelRightDefault = _Variants307("panel_right_default")
    """Variantes do ícone `panel_right_default`."""
    PanelRightExpand = _Variants309("panel_right_expand")
    """Variantes do ícone `panel_right_expand`."""
    PanelRightGallery = _Variants50("panel_right_gallery")
    """Variantes do ícone `panel_right_gallery`."""
    PanelSeparateWindow = _Variants58("panel_separate_window")
    """Variantes do ícone `panel_separate_window`."""
    PanelTopContract = _Variants58("panel_top_contract")
    """Variantes do ícone `panel_top_contract`."""
    PanelTopExpand = _Variants58("panel_top_expand")
    """Variantes do ícone `panel_top_expand`."""
    PanelTopGallery = _Variants50("panel_top_gallery")
    """Variantes do ícone `panel_top_gallery`."""
    Password = _Variants88("password")
    """Variantes do ícone `password`."""
    PasswordClock = _Variants108("password_clock")
    """Variantes do ícone `password_clock`."""
    PasswordReset = _Variants227("password_reset")
    """Variantes do ícone `password_reset`."""
    Patch = _Variants21("patch")
    """Variantes do ícone `patch`."""
    Patient = _Variants74("patient")
    """Variantes do ícone `patient`."""
    Pause = _Variants82("pause")
    """Variantes do ícone `pause`."""
    PauseCircle = _Variants311("pause_circle")
    """Variantes do ícone `pause_circle`."""
    PauseOff = _Variants60("pause_off")
    """Variantes do ícone `pause_off`."""
    PauseSettings = _Variants60("pause_settings")
    """Variantes do ícone `pause_settings`."""
    Paw = _Variants301("paw")
    """Variantes do ícone `paw`."""
    Payment = _Variants23("payment")
    """Variantes do ícone `payment`."""
    PaymentWireless = _Variants23("payment_wireless")
    """Variantes do ícone `payment_wireless`."""
    Pbiapp = _Variants9("pbiapp")
    """Variantes do ícone `pbiapp`."""
    Pbidashboard = _Variants223("pbidashboard")
    """Variantes do ícone `pbidashboard`."""
    Pbipagereport = _Variants223("pbipagereport")
    """Variantes do ícone `pbipagereport`."""
    Pbiscorecard = _Variants223("pbiscorecard")
    """Variantes do ícone `pbiscorecard`."""
    Pbisemmodel = _Variants223("pbisemmodel")
    """Variantes do ícone `pbisemmodel`."""
    Pdf = _Variants9("pdf")
    """Variantes do ícone `pdf`."""
    Pen = _Variants23("pen")
    """Variantes do ícone `pen`."""
    PenDismiss = _Variants23("pen_dismiss")
    """Variantes do ícone `pen_dismiss`."""
    PenOff = _Variants23("pen_off")
    """Variantes do ícone `pen_off`."""
    PenProhibited = _Variants23("pen_prohibited")
    """Variantes do ícone `pen_prohibited`."""
    PenSparkle = _Variants66("pen_sparkle")
    """Variantes do ícone `pen_sparkle`."""
    PenSync = _Variants23("pen_sync")
    """Variantes do ícone `pen_sync`."""
    Pentagon = _Variants313("pentagon")
    """Variantes do ícone `pentagon`."""
    People = _Variants46("people")
    """Variantes do ícone `people`."""
    PeopleAdd = _Variants315("people_add")
    """Variantes do ícone `people_add`."""
    PeopleAudience = _Variants142("people_audience")
    """Variantes do ícone `people_audience`."""
    PeopleCall = _Variants28("people_call")
    """Variantes do ícone `people_call`."""
    PeopleChat = _Variants317("people_chat")
    """Variantes do ícone `people_chat`."""
    PeopleCheckmark = _Variants218("people_checkmark")
    """Variantes do ícone `people_checkmark`."""
    PeopleCommunication = _Variants23("people_communication")
    """Variantes do ícone `people_communication`."""
    PeopleCommunity = _Variants46("people_community")
    """Variantes do ícone `people_community`."""
    PeopleCommunityAdd = _Variants41("people_community_add")
    """Variantes do ícone `people_community_add`."""
    PeopleEdit = _Variants218("people_edit")
    """Variantes do ícone `people_edit`."""
    PeopleError = _Variants28("people_error")
    """Variantes do ícone `people_error`."""
    PeopleEye = _Variants60("people_eye")
    """Variantes do ícone `people_eye`."""
    PeopleGameController = _Variants58("people_game_controller")
    """Variantes do ícone `people_game_controller`."""
    PeopleHome = _Variants301("people_home")
    """Variantes do ícone `people_home`."""
    PeopleInterwoven = _Variants35("people_interwoven")
    """Variantes do ícone `people_interwoven`."""
    PeopleLink = _Variants23("people_link")
    """Variantes do ícone `people_link`."""
    PeopleList = _Variants288("people_list")
    """Variantes do ícone `people_list`."""
    PeopleLock = _Variants78("people_lock")
    """Variantes do ícone `people_lock`."""
    PeopleMoney = _Variants21("people_money")
    """Variantes do ícone `people_money`."""
    PeopleProhibited = _Variants108("people_prohibited")
    """Variantes do ícone `people_prohibited`."""
    PeopleQueue = _Variants86("people_queue")
    """Variantes do ícone `people_queue`."""
    PeopleSearch = _Variants21("people_search")
    """Variantes do ícone `people_search`."""
    PeopleSettings = _Variants115("people_settings")
    """Variantes do ícone `people_settings`."""
    PeopleStar = _Variants23("people_star")
    """Variantes do ícone `people_star`."""
    PeopleSubtract = _Variants142("people_subtract")
    """Variantes do ícone `people_subtract`."""
    PeopleSwap = _Variants50("people_swap")
    """Variantes do ícone `people_swap`."""
    PeopleSync = _Variants288("people_sync")
    """Variantes do ícone `people_sync`."""
    PeopleTeam = _Variants35("people_team")
    """Variantes do ícone `people_team`."""
    PeopleTeamAdd = _Variants21("people_team_add")
    """Variantes do ícone `people_team_add`."""
    PeopleTeamDelete = _Variants62("people_team_delete")
    """Variantes do ícone `people_team_delete`."""
    PeopleTeamToolbox = _Variants21("people_team_toolbox")
    """Variantes do ícone `people_team_toolbox`."""
    PeopleToolbox = _Variants60("people_toolbox")
    """Variantes do ícone `people_toolbox`."""
    Person = _Variants46("person")
    """Variantes do ícone `person`."""
    Person5 = _Variants64("person_5")
    """Variantes do ícone `person_5`."""
    Person6 = _Variants64("person_6")
    """Variantes do ícone `person_6`."""
    PersonAccount = _Variants56("person_account")
    """Variantes do ícone `person_account`."""
    PersonAccounts = _Variants21("person_accounts")
    """Variantes do ícone `person_accounts`."""
    PersonAdd = _Variants319("person_add")
    """Variantes do ícone `person_add`."""
    PersonAlert = _Variants90("person_alert")
    """Variantes do ícone `person_alert`."""
    PersonAlertOff = _Variants90("person_alert_off")
    """Variantes do ícone `person_alert_off`."""
    PersonArrowBack = _Variants23("person_arrow_back")
    """Variantes do ícone `person_arrow_back`."""
    PersonArrowLeft = _Variants28("person_arrow_left")
    """Variantes do ícone `person_arrow_left`."""
    PersonArrowRight = _Variants28("person_arrow_right")
    """Variantes do ícone `person_arrow_right`."""
    PersonAvailable = _Variants321("person_available")
    """Variantes do ícone `person_available`."""
    PersonBoard = _Variants204("person_board")
    """Variantes do ícone `person_board`."""
    PersonBoardAdd = _Variants62("person_board_add")
    """Variantes do ícone `person_board_add`."""
    PersonBriefcase = _Variants28("person_briefcase")
    """Variantes do ícone `person_briefcase`."""
    PersonCall = _Variants28("person_call")
    """Variantes do ícone `person_call`."""
    PersonChat = _Variants28("person_chat")
    """Variantes do ícone `person_chat`."""
    PersonCircle = _Variants204("person_circle")
    """Variantes do ícone `person_circle`."""
    PersonCircleOff = _Variants204("person_circle_off")
    """Variantes do ícone `person_circle_off`."""
    PersonClock = _Variants28("person_clock")
    """Variantes do ícone `person_clock`."""
    PersonDelete = _Variants28("person_delete")
    """Variantes do ícone `person_delete`."""
    PersonDesktop = _Variants58("person_desktop")
    """Variantes do ícone `person_desktop`."""
    PersonEdit = _Variants323("person_edit")
    """Variantes do ícone `person_edit`."""
    PersonError = _Variants28("person_error")
    """Variantes do ícone `person_error`."""
    PersonFeedback = _Variants123("person_feedback")
    """Variantes do ícone `person_feedback`."""
    PersonGuest = _Variants28("person_guest")
    """Variantes do ícone `person_guest`."""
    PersonHeadHint = _Variants28("person_head_hint")
    """Variantes do ícone `person_head_hint`."""
    PersonHeart = _Variants261("person_heart")
    """Variantes do ícone `person_heart`."""
    PersonHome = _Variants23("person_home")
    """Variantes do ícone `person_home`."""
    PersonInfo = _Variants28("person_info")
    """Variantes do ícone `person_info`."""
    PersonKey = _Variants202("person_key")
    """Variantes do ícone `person_key`."""
    PersonLightbulb = _Variants21("person_lightbulb")
    """Variantes do ícone `person_lightbulb`."""
    PersonLightning = _Variants60("person_lightning")
    """Variantes do ícone `person_lightning`."""
    PersonLink = _Variants23("person_link")
    """Variantes do ícone `person_link`."""
    PersonLock = _Variants28("person_lock")
    """Variantes do ícone `person_lock`."""
    PersonMail = _Variants66("person_mail")
    """Variantes do ícone `person_mail`."""
    PersonMoney = _Variants21("person_money")
    """Variantes do ícone `person_money`."""
    PersonNote = _Variants28("person_note")
    """Variantes do ícone `person_note`."""
    PersonPasskey = _Variants23("person_passkey")
    """Variantes do ícone `person_passkey`."""
    PersonPhone = _Variants70("person_phone")
    """Variantes do ícone `person_phone`."""
    PersonPill = _Variants21("person_pill")
    """Variantes do ícone `person_pill`."""
    PersonProhibited = _Variants78("person_prohibited")
    """Variantes do ícone `person_prohibited`."""
    PersonQuestionMark = _Variants28("person_question_mark")
    """Variantes do ícone `person_question_mark`."""
    PersonRibbon = _Variants28("person_ribbon")
    """Variantes do ícone `person_ribbon`."""
    PersonRunning = _Variants58("person_running")
    """Variantes do ícone `person_running`."""
    PersonSearch = _Variants90("person_search")
    """Variantes do ícone `person_search`."""
    PersonSettings = _Variants60("person_settings")
    """Variantes do ícone `person_settings`."""
    PersonShield = _Variants23("person_shield")
    """Variantes do ícone `person_shield`."""
    PersonSoundSpatial = _Variants23("person_sound_spatial")
    """Variantes do ícone `person_sound_spatial`."""
    PersonSquare = _Variants90("person_square")
    """Variantes do ícone `person_square`."""
    PersonSquareAdd = _Variants28("person_square_add")
    """Variantes do ícone `person_square_add`."""
    PersonSquareCheckmark = _Variants90("person_square_checkmark")
    """Variantes do ícone `person_square_checkmark`."""
    PersonStanding = _Variants56("person_standing")
    """Variantes do ícone `person_standing`."""
    PersonStar = _Variants23("person_star")
    """Variantes do ícone `person_star`."""
    PersonStarburst = _Variants35("person_starburst")
    """Variantes do ícone `person_starburst`."""
    PersonSubtract = _Variants28("person_subtract")
    """Variantes do ícone `person_subtract`."""
    PersonSuport = _Variants111("person_suport")
    """Variantes do ícone `person_suport`."""
    PersonSupport = _Variants62("person_support")
    """Variantes do ícone `person_support`."""
    PersonSwap = _Variants28("person_swap")
    """Variantes do ícone `person_swap`."""
    PersonSync = _Variants23("person_sync")
    """Variantes do ícone `person_sync`."""
    PersonTag = _Variants86("person_tag")
    """Variantes do ícone `person_tag`."""
    PersonTentative = _Variants48("person_tentative")
    """Variantes do ícone `person_tentative`."""
    PersonVoice = _Variants88("person_voice")
    """Variantes do ícone `person_voice`."""
    PersonWalking = _Variants28("person_walking")
    """Variantes do ícone `person_walking`."""
    PersonWarning = _Variants35("person_warning")
    """Variantes do ícone `person_warning`."""
    PersonWrench = _Variants58("person_wrench")
    """Variantes do ícone `person_wrench`."""
    Phone = _Variants46("phone")
    """Variantes do ícone `phone`."""
    PhoneAdd = _Variants21("phone_add")
    """Variantes do ícone `phone_add`."""
    PhoneArrowRight = _Variants21("phone_arrow_right")
    """Variantes do ícone `phone_arrow_right`."""
    PhoneBriefcase = _Variants70("phone_briefcase")
    """Variantes do ícone `phone_briefcase`."""
    PhoneChat = _Variants50("phone_chat")
    """Variantes do ícone `phone_chat`."""
    PhoneCheckmark = _Variants28("phone_checkmark")
    """Variantes do ícone `phone_checkmark`."""
    PhoneDesktop = _Variants23("phone_desktop")
    """Variantes do ícone `phone_desktop`."""
    PhoneDesktopAdd = _Variants58("phone_desktop_add")
    """Variantes do ícone `phone_desktop_add`."""
    PhoneDismiss = _Variants21("phone_dismiss")
    """Variantes do ícone `phone_dismiss`."""
    PhoneEdit = _Variants21("phone_edit")
    """Variantes do ícone `phone_edit`."""
    PhoneEraser = _Variants60("phone_eraser")
    """Variantes do ícone `phone_eraser`."""
    PhoneFooterArrowDown = _Variants21("phone_footer_arrow_down")
    """Variantes do ícone `phone_footer_arrow_down`."""
    PhoneHeaderArrowUp = _Variants21("phone_header_arrow_up")
    """Variantes do ícone `phone_header_arrow_up`."""
    PhoneKey = _Variants21("phone_key")
    """Variantes do ícone `phone_key`."""
    PhoneLaptop = _Variants48("phone_laptop")
    """Variantes do ícone `phone_laptop`."""
    PhoneLinkSetup = _Variants21("phone_link_setup")
    """Variantes do ícone `phone_link_setup`."""
    PhoneLock = _Variants21("phone_lock")
    """Variantes do ícone `phone_lock`."""
    PhoneMultiple = _Variants70("phone_multiple")
    """Variantes do ícone `phone_multiple`."""
    PhoneMultipleSettings = _Variants70("phone_multiple_settings")
    """Variantes do ícone `phone_multiple_settings`."""
    PhonePageHeader = _Variants21("phone_page_header")
    """Variantes do ícone `phone_page_header`."""
    PhonePagination = _Variants21("phone_pagination")
    """Variantes do ícone `phone_pagination`."""
    PhonePerson = _Variants70("phone_person")
    """Variantes do ícone `phone_person`."""
    PhoneScreenTime = _Variants21("phone_screen_time")
    """Variantes do ícone `phone_screen_time`."""
    PhoneShake = _Variants21("phone_shake")
    """Variantes do ícone `phone_shake`."""
    PhoneSpanIn = _Variants50("phone_span_in")
    """Variantes do ícone `phone_span_in`."""
    PhoneSpanOut = _Variants50("phone_span_out")
    """Variantes do ícone `phone_span_out`."""
    PhoneSpeaker = _Variants21("phone_speaker")
    """Variantes do ícone `phone_speaker`."""
    PhoneStatusBar = _Variants21("phone_status_bar")
    """Variantes do ícone `phone_status_bar`."""
    PhoneSubtract = _Variants70("phone_subtract")
    """Variantes do ícone `phone_subtract`."""
    PhoneTablet = _Variants21("phone_tablet")
    """Variantes do ícone `phone_tablet`."""
    PhoneUpdate = _Variants21("phone_update")
    """Variantes do ícone `phone_update`."""
    PhoneUpdateCheckmark = _Variants21("phone_update_checkmark")
    """Variantes do ícone `phone_update_checkmark`."""
    PhoneVerticalScroll = _Variants21("phone_vertical_scroll")
    """Variantes do ícone `phone_vertical_scroll`."""
    PhoneVibrate = _Variants21("phone_vibrate")
    """Variantes do ícone `phone_vibrate`."""
    Photo = _Variants9("photo")
    """Variantes do ícone `photo`."""
    Photo360 = _Variants9("photo360")
    """Variantes do ícone `photo360`."""
    PhotoFilter = _Variants21("photo_filter")
    """Variantes do ícone `photo_filter`."""
    Pi = _Variants21("pi")
    """Variantes do ícone `pi`."""
    PictureInPicture = _Variants78("picture_in_picture")
    """Variantes do ícone `picture_in_picture`."""
    PictureInPictureEnter = _Variants28("picture_in_picture_enter")
    """Variantes do ícone `picture_in_picture_enter`."""
    PictureInPictureExit = _Variants28("picture_in_picture_exit")
    """Variantes do ícone `picture_in_picture_exit`."""
    Picturesfolder = _Variants9("picturesfolder")
    """Variantes do ícone `picturesfolder`."""
    Pill = _Variants50("pill")
    """Variantes do ícone `pill`."""
    Pin = _Variants46("pin")
    """Variantes do ícone `pin`."""
    PinGlobe = _Variants60("pin_globe")
    """Variantes do ícone `pin_globe`."""
    PinOff = _Variants66("pin_off")
    """Variantes do ícone `pin_off`."""
    Pipeline = _Variants142("pipeline")
    """Variantes do ícone `pipeline`."""
    PipelineAdd = _Variants64("pipeline_add")
    """Variantes do ícone `pipeline_add`."""
    PipelineArrowCurveDown = _Variants58("pipeline_arrow_curve_down")
    """Variantes do ícone `pipeline_arrow_curve_down`."""
    PipelinePlay = _Variants58("pipeline_play")
    """Variantes do ícone `pipeline_play`."""
    Pivot = _Variants28("pivot")
    """Variantes do ícone `pivot`."""
    Planet = _Variants48("planet")
    """Variantes do ícone `planet`."""
    Planner = _Variants9("planner")
    """Variantes do ícone `planner`."""
    PlantCattail = _Variants21("plant_cattail")
    """Variantes do ícone `plant_cattail`."""
    PlantGrass = _Variants41("plant_grass")
    """Variantes do ícone `plant_grass`."""
    PlantRagweed = _Variants41("plant_ragweed")
    """Variantes do ícone `plant_ragweed`."""
    Play = _Variants82("play")
    """Variantes do ícone `play`."""
    PlayCircle = _Variants37("play_circle")
    """Variantes do ícone `play_circle`."""
    PlayCircleHint = _Variants28("play_circle_hint")
    """Variantes do ícone `play_circle_hint`."""
    PlayCircleHintHalf = _Variants21("play_circle_hint_half")
    """Variantes do ícone `play_circle_hint_half`."""
    PlayCircleSparkle = _Variants28("play_circle_sparkle")
    """Variantes do ícone `play_circle_sparkle`."""
    PlayMultiple = _Variants56("play_multiple")
    """Variantes do ícone `play_multiple`."""
    PlaySettings = _Variants58("play_settings")
    """Variantes do ícone `play_settings`."""
    PlayingCards = _Variants58("playing_cards")
    """Variantes do ícone `playing_cards`."""
    Playlist = _Variants9("playlist")
    """Variantes do ícone `playlist`."""
    PlugConnected = _Variants23("plug_connected")
    """Variantes do ícone `plug_connected`."""
    PlugConnectedAdd = _Variants58("plug_connected_add")
    """Variantes do ícone `plug_connected_add`."""
    PlugConnectedCheckmark = _Variants58("plug_connected_checkmark")
    """Variantes do ícone `plug_connected_checkmark`."""
    PlugConnectedSettings = _Variants21("plug_connected_settings")
    """Variantes do ícone `plug_connected_settings`."""
    PlugDisconnected = _Variants37("plug_disconnected")
    """Variantes do ícone `plug_disconnected`."""
    PlugPuzzle = _Variants90("plug_puzzle")
    """Variantes do ícone `plug_puzzle`."""
    PointScan = _Variants21("point_scan")
    """Variantes do ícone `point_scan`."""
    Poll = _Variants325("poll")
    """Variantes do ícone `poll`."""
    PollHorizontal = _Variants28("poll_horizontal")
    """Variantes do ícone `poll_horizontal`."""
    PollOff = _Variants90("poll_off")
    """Variantes do ícone `poll_off`."""
    PortHdmi = _Variants21("port_hdmi")
    """Variantes do ícone `port_hdmi`."""
    PortMicroUsb = _Variants21("port_micro_usb")
    """Variantes do ícone `port_micro_usb`."""
    PortUsbA = _Variants21("port_usb_a")
    """Variantes do ícone `port_usb_a`."""
    PortUsbC = _Variants21("port_usb_c")
    """Variantes do ícone `port_usb_c`."""
    Portfolio = _Variants9("portfolio")
    """Variantes do ícone `portfolio`."""
    PositionBackward = _Variants21("position_backward")
    """Variantes do ícone `position_backward`."""
    PositionForward = _Variants21("position_forward")
    """Variantes do ícone `position_forward`."""
    PositionToBack = _Variants21("position_to_back")
    """Variantes do ícone `position_to_back`."""
    PositionToFront = _Variants21("position_to_front")
    """Variantes do ícone `position_to_front`."""
    Potx = _Variants9("potx")
    """Variantes do ícone `potx`."""
    Power = _Variants41("power")
    """Variantes do ícone `power`."""
    Powerbi = _Variants9("powerbi")
    """Variantes do ícone `powerbi`."""
    Powerpoint = _Variants18("powerpoint")
    """Variantes do ícone `powerpoint`."""
    Ppsx = _Variants9("ppsx")
    """Variantes do ícone `ppsx`."""
    Pptx = _Variants9("pptx")
    """Variantes do ícone `pptx`."""
    Predictions = _Variants21("predictions")
    """Variantes do ícone `predictions`."""
    Premium = _Variants132("premium")
    """Variantes do ícone `premium`."""
    PremiumPerson = _Variants28("premium_person")
    """Variantes do ícone `premium_person`."""
    PresenceAvailable = _Variants327("presence_available")
    """Variantes do ícone `presence_available`."""
    PresenceAway = _Variants327("presence_away")
    """Variantes do ícone `presence_away`."""
    PresenceBlocked = _Variants329("presence_blocked")
    """Variantes do ícone `presence_blocked`."""
    PresenceBusy = _Variants331("presence_busy")
    """Variantes do ícone `presence_busy`."""
    PresenceDnd = _Variants327("presence_dnd")
    """Variantes do ícone `presence_dnd`."""
    PresenceOffline = _Variants329("presence_offline")
    """Variantes do ícone `presence_offline`."""
    PresenceOof = _Variants329("presence_oof")
    """Variantes do ícone `presence_oof`."""
    PresenceTentative = _Variants329("presence_tentative")
    """Variantes do ícone `presence_tentative`."""
    PresenceUnknown = _Variants329("presence_unknown")
    """Variantes do ícone `presence_unknown`."""
    Presentation = _Variants9("presentation")
    """Variantes do ícone `presentation`."""
    Presenter = _Variants66("presenter")
    """Variantes do ícone `presenter`."""
    PresenterOff = _Variants21("presenter_off")
    """Variantes do ícone `presenter_off`."""
    PreviewLink = _Variants78("preview_link")
    """Variantes do ícone `preview_link`."""
    Previous = _Variants23("previous")
    """Variantes do ícone `previous`."""
    PreviousFrame = _Variants21("previous_frame")
    """Variantes do ícone `previous_frame`."""
    Print = _Variants66("print")
    """Variantes do ícone `print`."""
    PrintAdd = _Variants21("print_add")
    """Variantes do ícone `print_add`."""
    Production = _Variants21("production")
    """Variantes do ícone `production`."""
    ProductionCheckmark = _Variants21("production_checkmark")
    """Variantes do ícone `production_checkmark`."""
    Prohibited = _Variants82("prohibited")
    """Variantes do ícone `prohibited`."""
    ProhibitedMultiple = _Variants50("prohibited_multiple")
    """Variantes do ícone `prohibited_multiple`."""
    ProhibitedNote = _Variants58("prohibited_note")
    """Variantes do ícone `prohibited_note`."""
    ProhibitedSmoking = _Variants60("prohibited_smoking")
    """Variantes do ícone `prohibited_smoking`."""
    Project = _Variants18("project")
    """Variantes do ícone `project`."""
    ProjectionScreen = _Variants50("projection_screen")
    """Variantes do ícone `projection_screen`."""
    ProjectionScreenDismiss = _Variants50("projection_screen_dismiss")
    """Variantes do ícone `projection_screen_dismiss`."""
    ProjectionScreenText = _Variants28("projection_screen_text")
    """Variantes do ícone `projection_screen_text`."""
    ProjectionScreenTextSparkle = _Variants60("projection_screen_text_sparkle")
    """Variantes do ícone `projection_screen_text_sparkle`."""
    Prompt = _Variants23("prompt")
    """Variantes do ícone `prompt`."""
    ProtocolHandler = _Variants28("protocol_handler")
    """Variantes do ícone `protocol_handler`."""
    Pub = _Variants9("pub")
    """Variantes do ícone `pub`."""
    Pulse = _Variants113("pulse")
    """Variantes do ícone `pulse`."""
    PulseSquare = _Variants21("pulse_square")
    """Variantes do ícone `pulse_square`."""
    PuzzleCube = _Variants23("puzzle_cube")
    """Variantes do ícone `puzzle_cube`."""
    PuzzleCubePiece = _Variants23("puzzle_cube_piece")
    """Variantes do ícone `puzzle_cube_piece`."""
    PuzzlePiece = _Variants39("puzzle_piece")
    """Variantes do ícone `puzzle_piece`."""
    PuzzlePieceShield = _Variants58("puzzle_piece_shield")
    """Variantes do ícone `puzzle_piece_shield`."""
    QrCode = _Variants41("qr_code")
    """Variantes do ícone `qr_code`."""
    Question = _Variants66("question")
    """Variantes do ícone `question`."""
    QuestionCircle = _Variants39("question_circle")
    """Variantes do ícone `question_circle`."""
    Quiz = _Variants117("quiz")
    """Variantes do ícone `quiz`."""
    QuizNew = _Variants117("quiz_new")
    """Variantes do ícone `quiz_new`."""
    Radar = _Variants58("radar")
    """Variantes do ícone `radar`."""
    RadarCheckmark = _Variants58("radar_checkmark")
    """Variantes do ícone `radar_checkmark`."""
    RadarRectangleMultiple = _Variants58("radar_rectangle_multiple")
    """Variantes do ícone `radar_rectangle_multiple`."""
    RadioButton = _Variants28("radio_button")
    """Variantes do ícone `radio_button`."""
    RadioButtonOff = _Variants56("radio_button_off")
    """Variantes do ícone `radio_button_off`."""
    Ram = _Variants60("ram")
    """Variantes do ícone `ram`."""
    RatingMature = _Variants28("rating_mature")
    """Variantes do ícone `rating_mature`."""
    RatioOneToOne = _Variants21("ratio_one_to_one")
    """Variantes do ícone `ratio_one_to_one`."""
    ReOrder = _Variants28("re_order")
    """Variantes do ícone `re_order`."""
    ReOrderDotsHorizontal = _Variants28("re_order_dots_horizontal")
    """Variantes do ícone `re_order_dots_horizontal`."""
    ReOrderDotsVertical = _Variants28("re_order_dots_vertical")
    """Variantes do ícone `re_order_dots_vertical`."""
    ReOrderVertical = _Variants28("re_order_vertical")
    """Variantes do ícone `re_order_vertical`."""
    ReadAloud = _Variants162("read_aloud")
    """Variantes do ícone `read_aloud`."""
    ReadingList = _Variants50("reading_list")
    """Variantes do ícone `reading_list`."""
    ReadingListAdd = _Variants50("reading_list_add")
    """Variantes do ícone `reading_list_add`."""
    ReadingModeMobile = _Variants21("reading_mode_mobile")
    """Variantes do ícone `reading_mode_mobile`."""
    RealEstate = _Variants21("real_estate")
    """Variantes do ícone `real_estate`."""
    Receipt = _Variants72("receipt")
    """Variantes do ícone `receipt`."""
    ReceiptAdd = _Variants21("receipt_add")
    """Variantes do ícone `receipt_add`."""
    ReceiptBag = _Variants21("receipt_bag")
    """Variantes do ícone `receipt_bag`."""
    ReceiptCube = _Variants21("receipt_cube")
    """Variantes do ícone `receipt_cube`."""
    ReceiptMoney = _Variants28("receipt_money")
    """Variantes do ícone `receipt_money`."""
    ReceiptPlay = _Variants21("receipt_play")
    """Variantes do ícone `receipt_play`."""
    ReceiptSearch = _Variants58("receipt_search")
    """Variantes do ícone `receipt_search`."""
    ReceiptSparkles = _Variants28("receipt_sparkles")
    """Variantes do ícone `receipt_sparkles`."""
    Record = _Variants82("record")
    """Variantes do ícone `record`."""
    RecordStop = _Variants82("record_stop")
    """Variantes do ícone `record_stop`."""
    RectangleLandscape = _Variants30("rectangle_landscape")
    """Variantes do ícone `rectangle_landscape`."""
    RectangleLandscapeClock = _Variants58("rectangle_landscape_clock")
    """Variantes do ícone `rectangle_landscape_clock`."""
    RectangleLandscapeHintCopy = _Variants28("rectangle_landscape_hint_copy")
    """Variantes do ícone `rectangle_landscape_hint_copy`."""
    RectangleLandscapeLineHorizontal = _Variants58("rectangle_landscape_line_horizontal")
    """Variantes do ícone `rectangle_landscape_line_horizontal`."""
    RectangleLandscapeOff = _Variants58("rectangle_landscape_off")
    """Variantes do ícone `rectangle_landscape_off`."""
    RectangleLandscapeSparkle = _Variants23("rectangle_landscape_sparkle")
    """Variantes do ícone `rectangle_landscape_sparkle`."""
    RectangleLandscapeSync = _Variants50("rectangle_landscape_sync")
    """Variantes do ícone `rectangle_landscape_sync`."""
    RectangleLandscapeSyncOff = _Variants50("rectangle_landscape_sync_off")
    """Variantes do ícone `rectangle_landscape_sync_off`."""
    RectanglePortrait = _Variants82("rectangle_portrait")
    """Variantes do ícone `rectangle_portrait`."""
    RectanglePortraitLocationTarget = _Variants58("rectangle_portrait_location_target")
    """Variantes do ícone `rectangle_portrait_location_target`."""
    Recycle = _Variants64("recycle")
    """Variantes do ícone `recycle`."""
    Refrigerator = _Variants60("refrigerator")
    """Variantes do ícone `refrigerator`."""
    RemixAdd = _Variants90("remix_add")
    """Variantes do ícone `remix_add`."""
    Remote = _Variants60("remote")
    """Variantes do ícone `remote`."""
    Rename = _Variants50("rename")
    """Variantes do ícone `rename`."""
    RenameA = _Variants50("rename_a")
    """Variantes do ícone `rename_a`."""
    Reorder = _Variants58("reorder")
    """Variantes do ícone `reorder`."""
    Replay = _Variants62("replay")
    """Variantes do ícone `replay`."""
    Resize = _Variants23("resize")
    """Variantes do ícone `resize`."""
    ResizeImage = _Variants21("resize_image")
    """Variantes do ícone `resize_image`."""
    ResizeLarge = _Variants28("resize_large")
    """Variantes do ícone `resize_large`."""
    ResizeSmall = _Variants28("resize_small")
    """Variantes do ícone `resize_small`."""
    ResizeTable = _Variants21("resize_table")
    """Variantes do ícone `resize_table`."""
    ResizeVideo = _Variants21("resize_video")
    """Variantes do ícone `resize_video`."""
    Reward = _Variants333("reward")
    """Variantes do ícone `reward`."""
    Rewind = _Variants50("rewind")
    """Variantes do ícone `rewind`."""
    Rhombus = _Variants82("rhombus")
    """Variantes do ícone `rhombus`."""
    Ribbon = _Variants335("ribbon")
    """Variantes do ícone `ribbon`."""
    RibbonAdd = _Variants21("ribbon_add")
    """Variantes do ícone `ribbon_add`."""
    RibbonOff = _Variants204("ribbon_off")
    """Variantes do ícone `ribbon_off`."""
    RibbonStar = _Variants74("ribbon_star")
    """Variantes do ícone `ribbon_star`."""
    Road = _Variants21("road")
    """Variantes do ícone `road`."""
    RoadCone = _Variants23("road_cone")
    """Variantes do ícone `road_cone`."""
    Rocket = _Variants23("rocket")
    """Variantes do ícone `rocket`."""
    RotateLeft = _Variants263("rotate_left")
    """Variantes do ícone `rotate_left`."""
    RotateRight = _Variants21("rotate_right")
    """Variantes do ícone `rotate_right`."""
    Router = _Variants21("router")
    """Variantes do ícone `router`."""
    RouterOff = _Variants21("router_off")
    """Variantes do ícone `router_off`."""
    RowChild = _Variants62("row_child")
    """Variantes do ícone `row_child`."""
    RowTriple = _Variants21("row_triple")
    """Variantes do ícone `row_triple`."""
    Rss = _Variants28("rss")
    """Variantes do ícone `rss`."""
    Rtf = _Variants9("rtf")
    """Variantes do ícone `rtf`."""
    Ruler = _Variants82("ruler")
    """Variantes do ícone `ruler`."""
    Run = _Variants23("run")
    """Variantes do ícone `run`."""
    Sanitize = _Variants21("sanitize")
    """Variantes do ícone `sanitize`."""
    Save = _Variants78("save")
    """Variantes do ícone `save`."""
    SaveArrowRight = _Variants21("save_arrow_right")
    """Variantes do ícone `save_arrow_right`."""
    SaveCopy = _Variants21("save_copy")
    """Variantes do ícone `save_copy`."""
    SaveEdit = _Variants21("save_edit")
    """Variantes do ícone `save_edit`."""
    SaveImage = _Variants58("save_image")
    """Variantes do ícone `save_image`."""
    SaveMultiple = _Variants28("save_multiple")
    """Variantes do ícone `save_multiple`."""
    SaveSearch = _Variants58("save_search")
    """Variantes do ícone `save_search`."""
    SaveSync = _Variants21("save_sync")
    """Variantes do ícone `save_sync`."""
    Savings = _Variants48("savings")
    """Variantes do ícone `savings`."""
    ScaleFill = _Variants21("scale_fill")
    """Variantes do ícone `scale_fill`."""
    ScaleFit = _Variants28("scale_fit")
    """Variantes do ícone `scale_fit`."""
    Scales = _Variants23("scales")
    """Variantes do ícone `scales`."""
    Scan = _Variants28("scan")
    """Variantes do ícone `scan`."""
    ScanCamera = _Variants37("scan_camera")
    """Variantes do ícone `scan_camera`."""
    ScanDash = _Variants82("scan_dash")
    """Variantes do ícone `scan_dash`."""
    ScanObject = _Variants21("scan_object")
    """Variantes do ícone `scan_object`."""
    ScanPerson = _Variants206("scan_person")
    """Variantes do ícone `scan_person`."""
    ScanQrCode = _Variants70("scan_qr_code")
    """Variantes do ícone `scan_qr_code`."""
    ScanTable = _Variants21("scan_table")
    """Variantes do ícone `scan_table`."""
    ScanText = _Variants23("scan_text")
    """Variantes do ícone `scan_text`."""
    ScanThumbUp = _Variants37("scan_thumb_up")
    """Variantes do ícone `scan_thumb_up`."""
    ScanThumbUpOff = _Variants37("scan_thumb_up_off")
    """Variantes do ícone `scan_thumb_up_off`."""
    ScanType = _Variants130("scan_type")
    """Variantes do ícone `scan_type`."""
    ScanTypeCheckmark = _Variants21("scan_type_checkmark")
    """Variantes do ícone `scan_type_checkmark`."""
    ScanTypeOff = _Variants21("scan_type_off")
    """Variantes do ícone `scan_type_off`."""
    Scratchpad = _Variants21("scratchpad")
    """Variantes do ícone `scratchpad`."""
    ScreenCut = _Variants58("screen_cut")
    """Variantes do ícone `screen_cut`."""
    ScreenPerson = _Variants58("screen_person")
    """Variantes do ícone `screen_person`."""
    ScreenSearch = _Variants21("screen_search")
    """Variantes do ícone `screen_search`."""
    Screenshot = _Variants50("screenshot")
    """Variantes do ícone `screenshot`."""
    ScreenshotRecord = _Variants50("screenshot_record")
    """Variantes do ícone `screenshot_record`."""
    Script = _Variants90("script")
    """Variantes do ícone `script`."""
    Search = _Variants30("search")
    """Variantes do ícone `search`."""
    SearchInfo = _Variants21("search_info")
    """Variantes do ícone `search_info`."""
    SearchSettings = _Variants58("search_settings")
    """Variantes do ícone `search_settings`."""
    SearchShield = _Variants58("search_shield")
    """Variantes do ícone `search_shield`."""
    SearchSparkle = _Variants123("search_sparkle")
    """Variantes do ícone `search_sparkle`."""
    SearchSquare = _Variants28("search_square")
    """Variantes do ícone `search_square`."""
    SearchVisual = _Variants54("search_visual")
    """Variantes do ícone `search_visual`."""
    Seat = _Variants28("seat")
    """Variantes do ícone `seat`."""
    SeatAdd = _Variants28("seat_add")
    """Variantes do ícone `seat_add`."""
    SeatMultipleStadium = _Variants60("seat_multiple_stadium")
    """Variantes do ícone `seat_multiple_stadium`."""
    SelectAllOff = _Variants28("select_all_off")
    """Variantes do ícone `select_all_off`."""
    SelectAllOn = _Variants28("select_all_on")
    """Variantes do ícone `select_all_on`."""
    SelectObject = _Variants28("select_object")
    """Variantes do ícone `select_object`."""
    SelectObjectSkew = _Variants28("select_object_skew")
    """Variantes do ícone `select_object_skew`."""
    SelectObjectSkewDismiss = _Variants21("select_object_skew_dismiss")
    """Variantes do ícone `select_object_skew_dismiss`."""
    SelectObjectSkewEdit = _Variants21("select_object_skew_edit")
    """Variantes do ícone `select_object_skew_edit`."""
    Send = _Variants35("send")
    """Variantes do ícone `send`."""
    SendBeaker = _Variants23("send_beaker")
    """Variantes do ícone `send_beaker`."""
    SendClock = _Variants337("send_clock")
    """Variantes do ícone `send_clock`."""
    SendCopy = _Variants21("send_copy")
    """Variantes do ícone `send_copy`."""
    SendPerson = _Variants28("send_person")
    """Variantes do ícone `send_person`."""
    SerialPort = _Variants28("serial_port")
    """Variantes do ícone `serial_port`."""
    SerialPortOff = _Variants28("serial_port_off")
    """Variantes do ícone `serial_port_off`."""
    Server = _Variants52("server")
    """Variantes do ícone `server`."""
    ServerLink = _Variants28("server_link")
    """Variantes do ícone `server_link`."""
    ServerMultiple = _Variants58("server_multiple")
    """Variantes do ícone `server_multiple`."""
    ServerPlay = _Variants58("server_play")
    """Variantes do ícone `server_play`."""
    ServerSurface = _Variants56("server_surface")
    """Variantes do ícone `server_surface`."""
    ServerSurfaceMultiple = _Variants56("server_surface_multiple")
    """Variantes do ícone `server_surface_multiple`."""
    ServiceBell = _Variants28("service_bell")
    """Variantes do ícone `service_bell`."""
    Settings = _Variants123("settings")
    """Variantes do ícone `settings`."""
    SettingsChat = _Variants28("settings_chat")
    """Variantes do ícone `settings_chat`."""
    SettingsCogMultiple = _Variants21("settings_cog_multiple")
    """Variantes do ícone `settings_cog_multiple`."""
    SettingsSync = _Variants58("settings_sync")
    """Variantes do ícone `settings_sync`."""
    ShapeExclude = _Variants28("shape_exclude")
    """Variantes do ícone `shape_exclude`."""
    ShapeIntersect = _Variants28("shape_intersect")
    """Variantes do ícone `shape_intersect`."""
    ShapeOrganic = _Variants23("shape_organic")
    """Variantes do ícone `shape_organic`."""
    ShapeSubtract = _Variants28("shape_subtract")
    """Variantes do ícone `shape_subtract`."""
    ShapeUnion = _Variants28("shape_union")
    """Variantes do ícone `shape_union`."""
    Shapes = _Variants23("shapes")
    """Variantes do ícone `shapes`."""
    Share = _Variants66("share")
    """Variantes do ícone `share`."""
    ShareAndroid = _Variants48("share_android")
    """Variantes do ícone `share_android`."""
    ShareCloseTray = _Variants21("share_close_tray")
    """Variantes do ícone `share_close_tray`."""
    ShareIos = _Variants261("share_ios")
    """Variantes do ícone `share_ios`."""
    ShareMultiple = _Variants28("share_multiple")
    """Variantes do ícone `share_multiple`."""
    ShareScreenPerson = _Variants50("share_screen_person")
    """Variantes do ícone `share_screen_person`."""
    ShareScreenPersonOverlay = _Variants50("share_screen_person_overlay")
    """Variantes do ícone `share_screen_person_overlay`."""
    ShareScreenPersonOverlayInside = _Variants50("share_screen_person_overlay_inside")
    """Variantes do ícone `share_screen_person_overlay_inside`."""
    ShareScreenPersonP = _Variants50("share_screen_person_p")
    """Variantes do ícone `share_screen_person_p`."""
    ShareScreenStart = _Variants37("share_screen_start")
    """Variantes do ícone `share_screen_start`."""
    ShareScreenStop = _Variants37("share_screen_stop")
    """Variantes do ícone `share_screen_stop`."""
    Sharedfolder = _Variants9("sharedfolder")
    """Variantes do ícone `sharedfolder`."""
    Sharepoint = _Variants18("sharepoint")
    """Variantes do ícone `sharepoint`."""
    Shield = _Variants39("shield")
    """Variantes do ícone `shield`."""
    ShieldAdd = _Variants23("shield_add")
    """Variantes do ícone `shield_add`."""
    ShieldArrowRight = _Variants23("shield_arrow_right")
    """Variantes do ícone `shield_arrow_right`."""
    ShieldBadge = _Variants21("shield_badge")
    """Variantes do ícone `shield_badge`."""
    ShieldCheckmark = _Variants339("shield_checkmark")
    """Variantes do ícone `shield_checkmark`."""
    ShieldDismiss = _Variants108("shield_dismiss")
    """Variantes do ícone `shield_dismiss`."""
    ShieldDismissShield = _Variants58("shield_dismiss_shield")
    """Variantes do ícone `shield_dismiss_shield`."""
    ShieldError = _Variants66("shield_error")
    """Variantes do ícone `shield_error`."""
    ShieldGlobe = _Variants28("shield_globe")
    """Variantes do ícone `shield_globe`."""
    ShieldKeyhole = _Variants28("shield_keyhole")
    """Variantes do ícone `shield_keyhole`."""
    ShieldLock = _Variants37("shield_lock")
    """Variantes do ícone `shield_lock`."""
    ShieldPerson = _Variants58("shield_person")
    """Variantes do ícone `shield_person`."""
    ShieldPersonAdd = _Variants58("shield_person_add")
    """Variantes do ícone `shield_person_add`."""
    ShieldProhibited = _Variants21("shield_prohibited")
    """Variantes do ícone `shield_prohibited`."""
    ShieldQuestion = _Variants90("shield_question")
    """Variantes do ícone `shield_question`."""
    ShieldSettings = _Variants50("shield_settings")
    """Variantes do ícone `shield_settings`."""
    ShieldTask = _Variants23("shield_task")
    """Variantes do ícone `shield_task`."""
    Shifts = _Variants198("shifts")
    """Variantes do ícone `shifts`."""
    Shifts30Minutes = _Variants21("shifts_30_minutes")
    """Variantes do ícone `shifts_30_minutes`."""
    ShiftsActivity = _Variants28("shifts_activity")
    """Variantes do ícone `shifts_activity`."""
    ShiftsAdd = _Variants21("shifts_add")
    """Variantes do ícone `shifts_add`."""
    ShiftsAvailability = _Variants21("shifts_availability")
    """Variantes do ícone `shifts_availability`."""
    ShiftsCheckmark = _Variants21("shifts_checkmark")
    """Variantes do ícone `shifts_checkmark`."""
    ShiftsDay = _Variants21("shifts_day")
    """Variantes do ícone `shifts_day`."""
    ShiftsOpen = _Variants21("shifts_open")
    """Variantes do ícone `shifts_open`."""
    ShiftsProhibited = _Variants21("shifts_prohibited")
    """Variantes do ícone `shifts_prohibited`."""
    ShiftsQuestionMark = _Variants21("shifts_question_mark")
    """Variantes do ícone `shifts_question_mark`."""
    ShiftsTeam = _Variants21("shifts_team")
    """Variantes do ícone `shifts_team`."""
    Shirt = _Variants58("shirt")
    """Variantes do ícone `shirt`."""
    ShoppingBag = _Variants23("shopping_bag")
    """Variantes do ícone `shopping_bag`."""
    ShoppingBagAdd = _Variants28("shopping_bag_add")
    """Variantes do ícone `shopping_bag_add`."""
    ShoppingBagArrowLeft = _Variants21("shopping_bag_arrow_left")
    """Variantes do ícone `shopping_bag_arrow_left`."""
    ShoppingBagCheckmark = _Variants23("shopping_bag_checkmark")
    """Variantes do ícone `shopping_bag_checkmark`."""
    ShoppingBagDismiss = _Variants21("shopping_bag_dismiss")
    """Variantes do ícone `shopping_bag_dismiss`."""
    ShoppingBagPause = _Variants21("shopping_bag_pause")
    """Variantes do ícone `shopping_bag_pause`."""
    ShoppingBagPercent = _Variants21("shopping_bag_percent")
    """Variantes do ícone `shopping_bag_percent`."""
    ShoppingBagPlay = _Variants21("shopping_bag_play")
    """Variantes do ícone `shopping_bag_play`."""
    ShoppingBagTag = _Variants23("shopping_bag_tag")
    """Variantes do ícone `shopping_bag_tag`."""
    Shortpick = _Variants21("shortpick")
    """Variantes do ícone `shortpick`."""
    Showerhead = _Variants142("showerhead")
    """Variantes do ícone `showerhead`."""
    SidebarSearchLtr = _Variants58("sidebar_search_ltr")
    """Variantes do ícone `sidebar_search_ltr`."""
    SidebarSearchLtrAlternate1cbbdb97 = _Variants173("sidebar_search_ltr__alternate_1cbbdb97")
    """Variantes do ícone `sidebar_search_ltr__alternate_1cbbdb97`."""
    SidebarSearchLtrAlternate612ff76c = _Variants181("sidebar_search_ltr__alternate_612ff76c")
    """Variantes do ícone `sidebar_search_ltr__alternate_612ff76c`."""
    SidebarSearchRtl = _Variants58("sidebar_search_rtl")
    """Variantes do ícone `sidebar_search_rtl`."""
    SidebarSearchRtlAlternate09121f54 = _Variants181("sidebar_search_rtl__alternate_09121f54")
    """Variantes do ícone `sidebar_search_rtl__alternate_09121f54`."""
    SidebarSearchRtlAlternate42dd31dc = _Variants173("sidebar_search_rtl__alternate_42dd31dc")
    """Variantes do ícone `sidebar_search_rtl__alternate_42dd31dc`."""
    SignOut = _Variants21("sign_out")
    """Variantes do ícone `sign_out`."""
    Signature = _Variants78("signature")
    """Variantes do ícone `signature`."""
    Sim = _Variants28("sim")
    """Variantes do ícone `sim`."""
    SineWaveDots = _Variants23("sine_wave_dots")
    """Variantes do ícone `sine_wave_dots`."""
    SkipBack10 = _Variants86("skip_back_10")
    """Variantes do ícone `skip_back_10`."""
    SkipBack15 = _Variants86("skip_back_15")
    """Variantes do ícone `skip_back_15`."""
    SkipForward10 = _Variants86("skip_forward_10")
    """Variantes do ícone `skip_forward_10`."""
    SkipForward15 = _Variants86("skip_forward_15")
    """Variantes do ícone `skip_forward_15`."""
    SkipForward30 = _Variants86("skip_forward_30")
    """Variantes do ícone `skip_forward_30`."""
    SkipForwardTab = _Variants21("skip_forward_tab")
    """Variantes do ícone `skip_forward_tab`."""
    SlashForward = _Variants52("slash_forward")
    """Variantes do ícone `slash_forward`."""
    Sleep = _Variants21("sleep")
    """Variantes do ícone `sleep`."""
    SlideAdd = _Variants23("slide_add")
    """Variantes do ícone `slide_add`."""
    SlideArrowForward = _Variants21("slide_arrow_forward")
    """Variantes do ícone `slide_arrow_forward`."""
    SlideArrowRight = _Variants21("slide_arrow_right")
    """Variantes do ícone `slide_arrow_right`."""
    SlideContent = _Variants21("slide_content")
    """Variantes do ícone `slide_content`."""
    SlideEraser = _Variants28("slide_eraser")
    """Variantes do ícone `slide_eraser`."""
    SlideGrid = _Variants21("slide_grid")
    """Variantes do ícone `slide_grid`."""
    SlideHide = _Variants21("slide_hide")
    """Variantes do ícone `slide_hide`."""
    SlideLayout = _Variants21("slide_layout")
    """Variantes do ícone `slide_layout`."""
    SlideLink = _Variants41("slide_link")
    """Variantes do ícone `slide_link`."""
    SlideMicrophone = _Variants142("slide_microphone")
    """Variantes do ícone `slide_microphone`."""
    SlideMultiple = _Variants28("slide_multiple")
    """Variantes do ícone `slide_multiple`."""
    SlideMultipleArrowRight = _Variants21("slide_multiple_arrow_right")
    """Variantes do ícone `slide_multiple_arrow_right`."""
    SlideMultipleSearch = _Variants21("slide_multiple_search")
    """Variantes do ícone `slide_multiple_search`."""
    SlidePlay = _Variants21("slide_play")
    """Variantes do ícone `slide_play`."""
    SlideRecord = _Variants37("slide_record")
    """Variantes do ícone `slide_record`."""
    SlideSearch = _Variants62("slide_search")
    """Variantes do ícone `slide_search`."""
    SlideSettings = _Variants21("slide_settings")
    """Variantes do ícone `slide_settings`."""
    SlideSize = _Variants21("slide_size")
    """Variantes do ícone `slide_size`."""
    SlideText = _Variants23("slide_text")
    """Variantes do ícone `slide_text`."""
    SlideTextCall = _Variants37("slide_text_call")
    """Variantes do ícone `slide_text_call`."""
    SlideTextCursor = _Variants21("slide_text_cursor")
    """Variantes do ícone `slide_text_cursor`."""
    SlideTextEdit = _Variants50("slide_text_edit")
    """Variantes do ícone `slide_text_edit`."""
    SlideTextMultiple = _Variants90("slide_text_multiple")
    """Variantes do ícone `slide_text_multiple`."""
    SlideTextPerson = _Variants23("slide_text_person")
    """Variantes do ícone `slide_text_person`."""
    SlideTextSparkle = _Variants35("slide_text_sparkle")
    """Variantes do ícone `slide_text_sparkle`."""
    SlideTextTitle = _Variants28("slide_text_title")
    """Variantes do ícone `slide_text_title`."""
    SlideTextTitleAdd = _Variants28("slide_text_title_add")
    """Variantes do ícone `slide_text_title_add`."""
    SlideTextTitleCheckmark = _Variants28("slide_text_title_checkmark")
    """Variantes do ícone `slide_text_title_checkmark`."""
    SlideTextTitleEdit = _Variants28("slide_text_title_edit")
    """Variantes do ícone `slide_text_title_edit`."""
    SlideTopicAdd = _Variants341("slide_topic_add")
    """Variantes do ícone `slide_topic_add`."""
    SlideTransition = _Variants21("slide_transition")
    """Variantes do ícone `slide_transition`."""
    Smartwatch = _Variants21("smartwatch")
    """Variantes do ícone `smartwatch`."""
    SmartwatchDot = _Variants21("smartwatch_dot")
    """Variantes do ícone `smartwatch_dot`."""
    Snooze = _Variants28("snooze")
    """Variantes do ícone `snooze`."""
    SoundSource = _Variants41("sound_source")
    """Variantes do ícone `sound_source`."""
    SoundWaveCircle = _Variants23("sound_wave_circle")
    """Variantes do ícone `sound_wave_circle`."""
    SoundWaveCircleAdd = _Variants41("sound_wave_circle_add")
    """Variantes do ícone `sound_wave_circle_add`."""
    SoundWaveCircleSparkle = _Variants23("sound_wave_circle_sparkle")
    """Variantes do ícone `sound_wave_circle_sparkle`."""
    SoundWaveCircleSparkleOff = _Variants50("sound_wave_circle_sparkle_off")
    """Variantes do ícone `sound_wave_circle_sparkle_off`."""
    SoundWaveCircleSubtract = _Variants41("sound_wave_circle_subtract")
    """Variantes do ícone `sound_wave_circle_subtract`."""
    Space3d = _Variants23("space_3d")
    """Variantes do ícone `space_3d`."""
    Spacebar = _Variants21("spacebar")
    """Variantes do ícone `spacebar`."""
    Sparkle = _Variants82("sparkle")
    """Variantes do ícone `sparkle`."""
    SparkleAction = _Variants28("sparkle_action")
    """Variantes do ícone `sparkle_action`."""
    SparkleCircle = _Variants23("sparkle_circle")
    """Variantes do ícone `sparkle_circle`."""
    SparkleCircleOff = _Variants50("sparkle_circle_off")
    """Variantes do ícone `sparkle_circle_off`."""
    SparkleInfo = _Variants21("sparkle_info")
    """Variantes do ícone `sparkle_info`."""
    SparkleOff = _Variants82("sparkle_off")
    """Variantes do ícone `sparkle_off`."""
    SpatulaSpoon = _Variants23("spatula_spoon")
    """Variantes do ícone `spatula_spoon`."""
    Speaker0 = _Variants23("speaker_0")
    """Variantes do ícone `speaker_0`."""
    Speaker1 = _Variants23("speaker_1")
    """Variantes do ícone `speaker_1`."""
    Speaker2 = _Variants23("speaker_2")
    """Variantes do ícone `speaker_2`."""
    SpeakerBluetooth = _Variants41("speaker_bluetooth")
    """Variantes do ícone `speaker_bluetooth`."""
    SpeakerBox = _Variants28("speaker_box")
    """Variantes do ícone `speaker_box`."""
    SpeakerBoxKeyboard = _Variants58("speaker_box_keyboard")
    """Variantes do ícone `speaker_box_keyboard`."""
    SpeakerEdit = _Variants28("speaker_edit")
    """Variantes do ícone `speaker_edit`."""
    SpeakerMute = _Variants66("speaker_mute")
    """Variantes do ícone `speaker_mute`."""
    SpeakerOff = _Variants37("speaker_off")
    """Variantes do ícone `speaker_off`."""
    SpeakerSettings = _Variants41("speaker_settings")
    """Variantes do ícone `speaker_settings`."""
    SpeakerUsb = _Variants41("speaker_usb")
    """Variantes do ícone `speaker_usb`."""
    SpinnerIos = _Variants60("spinner_ios")
    """Variantes do ícone `spinner_ios`."""
    Splist = _Variants9("splist")
    """Variantes do ícone `splist`."""
    SplitHint = _Variants58("split_hint")
    """Variantes do ícone `split_hint`."""
    SplitHorizontal = _Variants82("split_horizontal")
    """Variantes do ícone `split_horizontal`."""
    SplitVertical = _Variants82("split_vertical")
    """Variantes do ícone `split_vertical`."""
    Spo = _Variants9("spo")
    """Variantes do ícone `spo`."""
    Spocampaign = _Variants223("spocampaign")
    """Variantes do ícone `spocampaign`."""
    Sponews = _Variants9("sponews")
    """Variantes do ícone `sponews`."""
    Sport = _Variants54("sport")
    """Variantes do ícone `sport`."""
    SportAmericanFootball = _Variants21("sport_american_football")
    """Variantes do ícone `sport_american_football`."""
    SportBaseball = _Variants21("sport_baseball")
    """Variantes do ícone `sport_baseball`."""
    SportBasketball = _Variants21("sport_basketball")
    """Variantes do ícone `sport_basketball`."""
    SportCricketBall = _Variants28("sport_cricket_ball")
    """Variantes do ícone `sport_cricket_ball`."""
    SportCricketBat = _Variants28("sport_cricket_bat")
    """Variantes do ícone `sport_cricket_bat`."""
    SportHockey = _Variants21("sport_hockey")
    """Variantes do ícone `sport_hockey`."""
    SportSoccer = _Variants28("sport_soccer")
    """Variantes do ícone `sport_soccer`."""
    SprayCan = _Variants56("spray_can")
    """Variantes do ícone `spray_can`."""
    Spreadsheet = _Variants9("spreadsheet")
    """Variantes do ícone `spreadsheet`."""
    Square = _Variants82("square")
    """Variantes do ícone `square`."""
    SquareAdd = _Variants60("square_add")
    """Variantes do ícone `square_add`."""
    SquareArrowForward = _Variants66("square_arrow_forward")
    """Variantes do ícone `square_arrow_forward`."""
    SquareDismiss = _Variants60("square_dismiss")
    """Variantes do ícone `square_dismiss`."""
    SquareDovetailJoint = _Variants82("square_dovetail_joint")
    """Variantes do ícone `square_dovetail_joint`."""
    SquareEraser = _Variants58("square_eraser")
    """Variantes do ícone `square_eraser`."""
    SquareHint = _Variants23("square_hint")
    """Variantes do ícone `square_hint`."""
    SquareHintApps = _Variants21("square_hint_apps")
    """Variantes do ícone `square_hint_apps`."""
    SquareHintArrowBack = _Variants60("square_hint_arrow_back")
    """Variantes do ícone `square_hint_arrow_back`."""
    SquareHintHexagon = _Variants82("square_hint_hexagon")
    """Variantes do ícone `square_hint_hexagon`."""
    SquareHintSparkles = _Variants23("square_hint_sparkles")
    """Variantes do ícone `square_hint_sparkles`."""
    SquareMultiple = _Variants23("square_multiple")
    """Variantes do ícone `square_multiple`."""
    SquareShadow = _Variants52("square_shadow")
    """Variantes do ícone `square_shadow`."""
    SquareTextArrowRepeatAll = _Variants90("square_text_arrow_repeat_all")
    """Variantes do ícone `square_text_arrow_repeat_all`."""
    SquaresNested = _Variants58("squares_nested")
    """Variantes do ícone `squares_nested`."""
    Stack = _Variants23("stack")
    """Variantes do ícone `stack`."""
    StackAdd = _Variants21("stack_add")
    """Variantes do ícone `stack_add`."""
    StackArrowForward = _Variants21("stack_arrow_forward")
    """Variantes do ícone `stack_arrow_forward`."""
    StackOff = _Variants23("stack_off")
    """Variantes do ícone `stack_off`."""
    StackStar = _Variants28("stack_star")
    """Variantes do ícone `stack_star`."""
    StackVertical = _Variants62("stack_vertical")
    """Variantes do ícone `stack_vertical`."""
    Stamp = _Variants111("stamp")
    """Variantes do ícone `stamp`."""
    Star = _Variants39("star")
    """Variantes do ícone `star`."""
    StarAdd = _Variants78("star_add")
    """Variantes do ícone `star_add`."""
    StarArrowBack = _Variants28("star_arrow_back")
    """Variantes do ícone `star_arrow_back`."""
    StarArrowRight = _Variants111("star_arrow_right")
    """Variantes do ícone `star_arrow_right`."""
    StarArrowRightEnd = _Variants21("star_arrow_right_end")
    """Variantes do ícone `star_arrow_right_end`."""
    StarArrowRightStart = _Variants21("star_arrow_right_start")
    """Variantes do ícone `star_arrow_right_start`."""
    StarCheckmark = _Variants50("star_checkmark")
    """Variantes do ícone `star_checkmark`."""
    StarDismiss = _Variants50("star_dismiss")
    """Variantes do ícone `star_dismiss`."""
    StarEdit = _Variants21("star_edit")
    """Variantes do ícone `star_edit`."""
    StarEmphasis = _Variants90("star_emphasis")
    """Variantes do ícone `star_emphasis`."""
    StarHalf = _Variants98("star_half")
    """Variantes do ícone `star_half`."""
    StarLineHorizontal3 = _Variants28("star_line_horizontal_3")
    """Variantes do ícone `star_line_horizontal_3`."""
    StarOff = _Variants98("star_off")
    """Variantes do ícone `star_off`."""
    StarOneQuarter = _Variants98("star_one_quarter")
    """Variantes do ícone `star_one_quarter`."""
    StarProhibited = _Variants28("star_prohibited")
    """Variantes do ícone `star_prohibited`."""
    StarSettings = _Variants74("star_settings")
    """Variantes do ícone `star_settings`."""
    StarThreeQuarter = _Variants98("star_three_quarter")
    """Variantes do ícone `star_three_quarter`."""
    Status = _Variants82("status")
    """Variantes do ícone `status`."""
    Step = _Variants28("step")
    """Variantes do ícone `step`."""
    Steps = _Variants28("steps")
    """Variantes do ícone `steps`."""
    Stethoscope = _Variants21("stethoscope")
    """Variantes do ícone `stethoscope`."""
    Sticker = _Variants229("sticker")
    """Variantes do ícone `sticker`."""
    StickerAdd = _Variants21("sticker_add")
    """Variantes do ícone `sticker_add`."""
    Stop = _Variants28("stop")
    """Variantes do ícone `stop`."""
    Storage = _Variants23("storage")
    """Variantes do ícone `storage`."""
    StoreMicrosoft = _Variants28("store_microsoft")
    """Variantes do ícone `store_microsoft`."""
    Stove = _Variants60("stove")
    """Variantes do ícone `stove`."""
    Stream = _Variants94("stream")
    """Variantes do ícone `stream`."""
    StreamInput = _Variants58("stream_input")
    """Variantes do ícone `stream_input`."""
    StreamInputOutput = _Variants58("stream_input_output")
    """Variantes do ícone `stream_input_output`."""
    StreamOutput = _Variants58("stream_output")
    """Variantes do ícone `stream_output`."""
    StreetHome = _Variants58("street_home")
    """Variantes do ícone `street_home`."""
    StreetSign = _Variants21("street_sign")
    """Variantes do ícone `street_sign`."""
    StyleGuide = _Variants21("style_guide")
    """Variantes do ícone `style_guide`."""
    SubGrid = _Variants21("sub_grid")
    """Variantes do ícone `sub_grid`."""
    Subtitles = _Variants28("subtitles")
    """Variantes do ícone `subtitles`."""
    Subtract = _Variants80("subtract")
    """Variantes do ícone `subtract`."""
    SubtractCircle = _Variants82("subtract_circle")
    """Variantes do ícone `subtract_circle`."""
    SubtractCircleArrowBack = _Variants60("subtract_circle_arrow_back")
    """Variantes do ícone `subtract_circle_arrow_back`."""
    SubtractCircleArrowForward = _Variants60("subtract_circle_arrow_forward")
    """Variantes do ícone `subtract_circle_arrow_forward`."""
    SubtractParentheses = _Variants23("subtract_parentheses")
    """Variantes do ícone `subtract_parentheses`."""
    SubtractSquare = _Variants28("subtract_square")
    """Variantes do ícone `subtract_square`."""
    SubtractSquareMultiple = _Variants60("subtract_square_multiple")
    """Variantes do ícone `subtract_square_multiple`."""
    SurfaceEarbuds = _Variants21("surface_earbuds")
    """Variantes do ícone `surface_earbuds`."""
    SurfaceHub = _Variants21("surface_hub")
    """Variantes do ícone `surface_hub`."""
    Sway = _Variants343("sway")
    """Variantes do ícone `sway`."""
    SwimmingPool = _Variants94("swimming_pool")
    """Variantes do ícone `swimming_pool`."""
    SwipeDown = _Variants21("swipe_down")
    """Variantes do ícone `swipe_down`."""
    SwipeRight = _Variants21("swipe_right")
    """Variantes do ícone `swipe_right`."""
    SwipeUp = _Variants21("swipe_up")
    """Variantes do ícone `swipe_up`."""
    Symbols = _Variants28("symbols")
    """Variantes do ícone `symbols`."""
    SyncOff = _Variants60("sync_off")
    """Variantes do ícone `sync_off`."""
    Syringe = _Variants21("syringe")
    """Variantes do ícone `syringe`."""
    Sysfile = _Variants9("sysfile")
    """Variantes do ícone `sysfile`."""
    System = _Variants21("system")
    """Variantes do ícone `system`."""
    Tab = _Variants50("tab")
    """Variantes do ícone `tab`."""
    TabAdd = _Variants290("tab_add")
    """Variantes do ícone `tab_add`."""
    TabArrowLeft = _Variants21("tab_arrow_left")
    """Variantes do ícone `tab_arrow_left`."""
    TabDesktop = _Variants50("tab_desktop")
    """Variantes do ícone `tab_desktop`."""
    TabDesktopArrowClockwise = _Variants28("tab_desktop_arrow_clockwise")
    """Variantes do ícone `tab_desktop_arrow_clockwise`."""
    TabDesktopArrowLeft = _Variants58("tab_desktop_arrow_left")
    """Variantes do ícone `tab_desktop_arrow_left`."""
    TabDesktopBottom = _Variants41("tab_desktop_bottom")
    """Variantes do ícone `tab_desktop_bottom`."""
    TabDesktopClock = _Variants58("tab_desktop_clock")
    """Variantes do ícone `tab_desktop_clock`."""
    TabDesktopCopy = _Variants58("tab_desktop_copy")
    """Variantes do ícone `tab_desktop_copy`."""
    TabDesktopImage = _Variants28("tab_desktop_image")
    """Variantes do ícone `tab_desktop_image`."""
    TabDesktopLink = _Variants50("tab_desktop_link")
    """Variantes do ícone `tab_desktop_link`."""
    TabDesktopMultiple = _Variants28("tab_desktop_multiple")
    """Variantes do ícone `tab_desktop_multiple`."""
    TabDesktopMultipleAdd = _Variants60("tab_desktop_multiple_add")
    """Variantes do ícone `tab_desktop_multiple_add`."""
    TabDesktopMultipleBottom = _Variants41("tab_desktop_multiple_bottom")
    """Variantes do ícone `tab_desktop_multiple_bottom`."""
    TabDesktopMultipleSparkle = _Variants28("tab_desktop_multiple_sparkle")
    """Variantes do ícone `tab_desktop_multiple_sparkle`."""
    TabDesktopNewPage = _Variants58("tab_desktop_new_page")
    """Variantes do ícone `tab_desktop_new_page`."""
    TabDesktopSearch = _Variants28("tab_desktop_search")
    """Variantes do ícone `tab_desktop_search`."""
    TabGroup = _Variants28("tab_group")
    """Variantes do ícone `tab_group`."""
    TabInPrivate = _Variants50("tab_in_private")
    """Variantes do ícone `tab_in_private`."""
    TabInprivateAccount = _Variants21("tab_inprivate_account")
    """Variantes do ícone `tab_inprivate_account`."""
    TabProhibited = _Variants21("tab_prohibited")
    """Variantes do ícone `tab_prohibited`."""
    TabShieldDismiss = _Variants21("tab_shield_dismiss")
    """Variantes do ícone `tab_shield_dismiss`."""
    Table = _Variants123("table")
    """Variantes do ícone `table`."""
    TableAdd = _Variants50("table_add")
    """Variantes do ícone `table_add`."""
    TableAltText = _Variants290("table_alt_text")
    """Variantes do ícone `table_alt_text`."""
    TableArrowRepeatAll = _Variants41("table_arrow_repeat_all")
    """Variantes do ícone `table_arrow_repeat_all`."""
    TableArrowUp = _Variants21("table_arrow_up")
    """Variantes do ícone `table_arrow_up`."""
    TableBottomRow = _Variants23("table_bottom_row")
    """Variantes do ícone `table_bottom_row`."""
    TableCalculator = _Variants60("table_calculator")
    """Variantes do ícone `table_calculator`."""
    TableCellAdd = _Variants28("table_cell_add")
    """Variantes do ícone `table_cell_add`."""
    TableCellCenter = _Variants50("table_cell_center")
    """Variantes do ícone `table_cell_center`."""
    TableCellCenterArrowRepeatAll = _Variants41("table_cell_center_arrow_repeat_all")
    """Variantes do ícone `table_cell_center_arrow_repeat_all`."""
    TableCellCenterEdit = _Variants50("table_cell_center_edit")
    """Variantes do ícone `table_cell_center_edit`."""
    TableCellCenterLink = _Variants41("table_cell_center_link")
    """Variantes do ícone `table_cell_center_link`."""
    TableCellCenterSearch = _Variants41("table_cell_center_search")
    """Variantes do ícone `table_cell_center_search`."""
    TableCellCross = _Variants28("table_cell_cross")
    """Variantes do ícone `table_cell_cross`."""
    TableCellCrossBrush = _Variants28("table_cell_cross_brush")
    """Variantes do ícone `table_cell_cross_brush`."""
    TableCellEdit = _Variants50("table_cell_edit")
    """Variantes do ícone `table_cell_edit`."""
    TableCellsMerge = _Variants162("table_cells_merge")
    """Variantes do ícone `table_cells_merge`."""
    TableCellsSplit = _Variants162("table_cells_split")
    """Variantes do ícone `table_cells_split`."""
    TableChecker = _Variants58("table_checker")
    """Variantes do ícone `table_checker`."""
    TableColumnTopBottom = _Variants50("table_column_top_bottom")
    """Variantes do ícone `table_column_top_bottom`."""
    TableColumnTopBottomArrowRepeatAll = _Variants41("table_column_top_bottom_arrow_repeat_all")
    """Variantes do ícone `table_column_top_bottom_arrow_repeat_all`."""
    TableColumnTopBottomEdit = _Variants50("table_column_top_bottom_edit")
    """Variantes do ícone `table_column_top_bottom_edit`."""
    TableColumnTopBottomLink = _Variants41("table_column_top_bottom_link")
    """Variantes do ícone `table_column_top_bottom_link`."""
    TableColumnTopBottomSearch = _Variants41("table_column_top_bottom_search")
    """Variantes do ícone `table_column_top_bottom_search`."""
    TableCopy = _Variants58("table_copy")
    """Variantes do ícone `table_copy`."""
    TableCursor = _Variants28("table_cursor")
    """Variantes do ícone `table_cursor`."""
    TableDefault = _Variants183("table_default")
    """Variantes do ícone `table_default`."""
    TableDeleteColumn = _Variants50("table_delete_column")
    """Variantes do ícone `table_delete_column`."""
    TableDeleteRow = _Variants50("table_delete_row")
    """Variantes do ícone `table_delete_row`."""
    TableDismiss = _Variants162("table_dismiss")
    """Variantes do ícone `table_dismiss`."""
    TableEdit = _Variants50("table_edit")
    """Variantes do ícone `table_edit`."""
    TableFreezeColumn = _Variants50("table_freeze_column")
    """Variantes do ícone `table_freeze_column`."""
    TableFreezeColumnAndRow = _Variants50("table_freeze_column_and_row")
    """Variantes do ícone `table_freeze_column_and_row`."""
    TableFreezeColumnAndRowDismiss = _Variants21("table_freeze_column_and_row_dismiss")
    """Variantes do ícone `table_freeze_column_and_row_dismiss`."""
    TableFreezeColumnDismiss = _Variants21("table_freeze_column_dismiss")
    """Variantes do ícone `table_freeze_column_dismiss`."""
    TableFreezeRow = _Variants50("table_freeze_row")
    """Variantes do ícone `table_freeze_row`."""
    TableFreezeRowDismiss = _Variants21("table_freeze_row_dismiss")
    """Variantes do ícone `table_freeze_row_dismiss`."""
    TableImage = _Variants58("table_image")
    """Variantes do ícone `table_image`."""
    TableInsertColumn = _Variants50("table_insert_column")
    """Variantes do ícone `table_insert_column`."""
    TableInsertRow = _Variants50("table_insert_row")
    """Variantes do ícone `table_insert_row`."""
    TableLightning = _Variants50("table_lightning")
    """Variantes do ícone `table_lightning`."""
    TableLink = _Variants50("table_link")
    """Variantes do ícone `table_link`."""
    TableLock = _Variants23("table_lock")
    """Variantes do ícone `table_lock`."""
    TableMoveAbove = _Variants162("table_move_above")
    """Variantes do ícone `table_move_above`."""
    TableMoveBelow = _Variants162("table_move_below")
    """Variantes do ícone `table_move_below`."""
    TableMoveLeft = _Variants162("table_move_left")
    """Variantes do ícone `table_move_left`."""
    TableMoveRight = _Variants162("table_move_right")
    """Variantes do ícone `table_move_right`."""
    TableMultiple = _Variants23("table_multiple")
    """Variantes do ícone `table_multiple`."""
    TableOffset = _Variants21("table_offset")
    """Variantes do ícone `table_offset`."""
    TableOffsetAdd = _Variants21("table_offset_add")
    """Variantes do ícone `table_offset_add`."""
    TableOffsetLessThanOrEqualTo = _Variants21("table_offset_less_than_or_equal_to")
    """Variantes do ícone `table_offset_less_than_or_equal_to`."""
    TableOffsetSettings = _Variants21("table_offset_settings")
    """Variantes do ícone `table_offset_settings`."""
    TablePicnic = _Variants60("table_picnic")
    """Variantes do ícone `table_picnic`."""
    TableResizeColumn = _Variants50("table_resize_column")
    """Variantes do ícone `table_resize_column`."""
    TableResizeRow = _Variants50("table_resize_row")
    """Variantes do ícone `table_resize_row`."""
    TableSearch = _Variants41("table_search")
    """Variantes do ícone `table_search`."""
    TableSelectRange = _Variants28("table_select_range")
    """Variantes do ícone `table_select_range`."""
    TableSettings = _Variants162("table_settings")
    """Variantes do ícone `table_settings`."""
    TableSimple = _Variants66("table_simple")
    """Variantes do ícone `table_simple`."""
    TableSimpleCheckmark = _Variants23("table_simple_checkmark")
    """Variantes do ícone `table_simple_checkmark`."""
    TableSimpleExclude = _Variants23("table_simple_exclude")
    """Variantes do ícone `table_simple_exclude`."""
    TableSimpleInclude = _Variants23("table_simple_include")
    """Variantes do ícone `table_simple_include`."""
    TableSimpleMultiple = _Variants21("table_simple_multiple")
    """Variantes do ícone `table_simple_multiple`."""
    TableSparkle = _Variants21("table_sparkle")
    """Variantes do ícone `table_sparkle`."""
    TableSplit = _Variants58("table_split")
    """Variantes do ícone `table_split`."""
    TableStackAbove = _Variants50("table_stack_above")
    """Variantes do ícone `table_stack_above`."""
    TableStackBelow = _Variants50("table_stack_below")
    """Variantes do ícone `table_stack_below`."""
    TableStackLeft = _Variants50("table_stack_left")
    """Variantes do ícone `table_stack_left`."""
    TableStackRight = _Variants50("table_stack_right")
    """Variantes do ícone `table_stack_right`."""
    TableSwitch = _Variants50("table_switch")
    """Variantes do ícone `table_switch`."""
    Tablet = _Variants311("tablet")
    """Variantes do ícone `tablet`."""
    TabletLaptop = _Variants21("tablet_laptop")
    """Variantes do ícone `tablet_laptop`."""
    TabletPhoneDesktop = _Variants58("tablet_phone_desktop")
    """Variantes do ícone `tablet_phone_desktop`."""
    TabletSpeaker = _Variants21("tablet_speaker")
    """Variantes do ícone `tablet_speaker`."""
    Tabs = _Variants28("tabs")
    """Variantes do ícone `tabs`."""
    Tag = _Variants66("tag")
    """Variantes do ícone `tag`."""
    TagAdd = _Variants23("tag_add")
    """Variantes do ícone `tag_add`."""
    TagCircle = _Variants58("tag_circle")
    """Variantes do ícone `tag_circle`."""
    TagDismiss = _Variants28("tag_dismiss")
    """Variantes do ícone `tag_dismiss`."""
    TagEdit = _Variants23("tag_edit")
    """Variantes do ícone `tag_edit`."""
    TagError = _Variants28("tag_error")
    """Variantes do ícone `tag_error`."""
    TagLock = _Variants90("tag_lock")
    """Variantes do ícone `tag_lock`."""
    TagLockAccent = _Variants268("tag_lock_accent")
    """Variantes do ícone `tag_lock_accent`."""
    TagMultiple = _Variants28("tag_multiple")
    """Variantes do ícone `tag_multiple`."""
    TagOff = _Variants28("tag_off")
    """Variantes do ícone `tag_off`."""
    TagPercent = _Variants23("tag_percent")
    """Variantes do ícone `tag_percent`."""
    TagQuestionMark = _Variants90("tag_question_mark")
    """Variantes do ícone `tag_question_mark`."""
    TagReset = _Variants21("tag_reset")
    """Variantes do ícone `tag_reset`."""
    TagSearch = _Variants21("tag_search")
    """Variantes do ícone `tag_search`."""
    TapDouble = _Variants94("tap_double")
    """Variantes do ícone `tap_double`."""
    TapSingle = _Variants94("tap_single")
    """Variantes do ícone `tap_single`."""
    Target = _Variants90("target")
    """Variantes do ícone `target`."""
    TargetAdd = _Variants21("target_add")
    """Variantes do ícone `target_add`."""
    TargetArrow = _Variants28("target_arrow")
    """Variantes do ícone `target_arrow`."""
    TargetDismiss = _Variants21("target_dismiss")
    """Variantes do ícone `target_dismiss`."""
    TargetEdit = _Variants28("target_edit")
    """Variantes do ícone `target_edit`."""
    TargetSparkle = _Variants28("target_sparkle")
    """Variantes do ícone `target_sparkle`."""
    TaskListAdd = _Variants21("task_list_add")
    """Variantes do ícone `task_list_add`."""
    TaskListLtr = _Variants21("task_list_ltr")
    """Variantes do ícone `task_list_ltr`."""
    TaskListLtrAlternate25af58ab = _Variants173("task_list_ltr__alternate_25af58ab")
    """Variantes do ícone `task_list_ltr__alternate_25af58ab`."""
    TaskListLtrAlternate65070280 = _Variants179("task_list_ltr__alternate_65070280")
    """Variantes do ícone `task_list_ltr__alternate_65070280`."""
    TaskListLtrAlternate777d1b47 = _Variants181("task_list_ltr__alternate_777d1b47")
    """Variantes do ícone `task_list_ltr__alternate_777d1b47`."""
    TaskListLtrAlternate7af5fe3c = _Variants177("task_list_ltr__alternate_7af5fe3c")
    """Variantes do ícone `task_list_ltr__alternate_7af5fe3c`."""
    TaskListRectangle = _Variants307("task_list_rectangle")
    """Variantes do ícone `task_list_rectangle`."""
    TaskListRtl = _Variants21("task_list_rtl")
    """Variantes do ícone `task_list_rtl`."""
    TaskListRtlAlternate2aa6883a = _Variants181("task_list_rtl__alternate_2aa6883a")
    """Variantes do ícone `task_list_rtl__alternate_2aa6883a`."""
    TaskListRtlAlternate699de1f1 = _Variants177("task_list_rtl__alternate_699de1f1")
    """Variantes do ícone `task_list_rtl__alternate_699de1f1`."""
    TaskListRtlAlternate76bdc86a = _Variants173("task_list_rtl__alternate_76bdc86a")
    """Variantes do ícone `task_list_rtl__alternate_76bdc86a`."""
    TaskListRtlAlternateA61e4cc9 = _Variants179("task_list_rtl__alternate_a61e4cc9")
    """Variantes do ícone `task_list_rtl__alternate_a61e4cc9`."""
    TaskListSquareAdd = _Variants21("task_list_square_add")
    """Variantes do ícone `task_list_square_add`."""
    TaskListSquareDatabase = _Variants21("task_list_square_database")
    """Variantes do ícone `task_list_square_database`."""
    TaskListSquareLtr = _Variants108("task_list_square_ltr")
    """Variantes do ícone `task_list_square_ltr`."""
    TaskListSquareLtrAlternate6e3f042d = _Variants179("task_list_square_ltr__alternate_6e3f042d")
    """Variantes do ícone `task_list_square_ltr__alternate_6e3f042d`."""
    TaskListSquareLtrAlternate732f27e6 = _Variants177("task_list_square_ltr__alternate_732f27e6")
    """Variantes do ícone `task_list_square_ltr__alternate_732f27e6`."""
    TaskListSquareLtrAlternateAa3a0341 = _Variants181("task_list_square_ltr__alternate_aa3a0341")
    """Variantes do ícone `task_list_square_ltr__alternate_aa3a0341`."""
    TaskListSquareLtrAlternateBcb74bb2 = _Variants173("task_list_square_ltr__alternate_bcb74bb2")
    """Variantes do ícone `task_list_square_ltr__alternate_bcb74bb2`."""
    TaskListSquareLtrAlternateD469ceb7 = _Variants294("task_list_square_ltr__alternate_d469ceb7")
    """Variantes do ícone `task_list_square_ltr__alternate_d469ceb7`."""
    TaskListSquareLtrAlternateF089fe33 = _Variants296("task_list_square_ltr__alternate_f089fe33")
    """Variantes do ícone `task_list_square_ltr__alternate_f089fe33`."""
    TaskListSquarePerson = _Variants92("task_list_square_person")
    """Variantes do ícone `task_list_square_person`."""
    TaskListSquareRtl = _Variants28("task_list_square_rtl")
    """Variantes do ícone `task_list_square_rtl`."""
    TaskListSquareRtlAlternate5196858e = _Variants294("task_list_square_rtl__alternate_5196858e")
    """Variantes do ícone `task_list_square_rtl__alternate_5196858e`."""
    TaskListSquareRtlAlternate5ff82b66 = _Variants177("task_list_square_rtl__alternate_5ff82b66")
    """Variantes do ícone `task_list_square_rtl__alternate_5ff82b66`."""
    TaskListSquareRtlAlternate9715a991 = _Variants296("task_list_square_rtl__alternate_9715a991")
    """Variantes do ícone `task_list_square_rtl__alternate_9715a991`."""
    TaskListSquareRtlAlternateBc8d5f9d = _Variants173("task_list_square_rtl__alternate_bc8d5f9d")
    """Variantes do ícone `task_list_square_rtl__alternate_bc8d5f9d`."""
    TaskListSquareRtlAlternateD8a8fa43 = _Variants181("task_list_square_rtl__alternate_d8a8fa43")
    """Variantes do ícone `task_list_square_rtl__alternate_d8a8fa43`."""
    TaskListSquareRtlAlternateDb9eb16f = _Variants179("task_list_square_rtl__alternate_db9eb16f")
    """Variantes do ícone `task_list_square_rtl__alternate_db9eb16f`."""
    TaskListSquareSettings = _Variants58("task_list_square_settings")
    """Variantes do ícone `task_list_square_settings`."""
    TaskListSquareSparkle = _Variants28("task_list_square_sparkle")
    """Variantes do ícone `task_list_square_sparkle`."""
    TasksApp = _Variants41("tasks_app")
    """Variantes do ícone `tasks_app`."""
    Teaching = _Variants23("teaching")
    """Variantes do ícone `teaching`."""
    Teams = _Variants18("teams")
    """Variantes do ícone `teams`."""
    TeardropBottomRight = _Variants23("teardrop_bottom_right")
    """Variantes do ícone `teardrop_bottom_right`."""
    Teddy = _Variants21("teddy")
    """Variantes do ícone `teddy`."""
    Temperature = _Variants88("temperature")
    """Variantes do ícone `temperature`."""
    TemperatureDegreeCelsius = _Variants23("temperature_degree_celsius")
    """Variantes do ícone `temperature_degree_celsius`."""
    TemperatureDegreeFahrenheit = _Variants23("temperature_degree_fahrenheit")
    """Variantes do ícone `temperature_degree_fahrenheit`."""
    Tent = _Variants80("tent")
    """Variantes do ícone `tent`."""
    TetrisApp = _Variants23("tetris_app")
    """Variantes do ícone `tetris_app`."""
    Text = _Variants345("text")
    """Variantes do ícone `text`."""
    TextAbcUnderlineDouble = _Variants183("text_abc_underline_double")
    """Variantes do ícone `text_abc_underline_double`."""
    TextAdd = _Variants58("text_add")
    """Variantes do ícone `text_add`."""
    TextAddSpaceAfter = _Variants21("text_add_space_after")
    """Variantes do ícone `text_add_space_after`."""
    TextAddSpaceBefore = _Variants21("text_add_space_before")
    """Variantes do ícone `text_add_space_before`."""
    TextAddT = _Variants115("text_add_t")
    """Variantes do ícone `text_add_t`."""
    TextAlignCenter = _Variants28("text_align_center")
    """Variantes do ícone `text_align_center`."""
    TextAlignCenterRotate270 = _Variants28("text_align_center_rotate_270")
    """Variantes do ícone `text_align_center_rotate_270`."""
    TextAlignCenterRotate90 = _Variants28("text_align_center_rotate_90")
    """Variantes do ícone `text_align_center_rotate_90`."""
    TextAlignDistributed = _Variants21("text_align_distributed")
    """Variantes do ícone `text_align_distributed`."""
    TextAlignDistributedEvenly = _Variants21("text_align_distributed_evenly")
    """Variantes do ícone `text_align_distributed_evenly`."""
    TextAlignDistributedVertical = _Variants21("text_align_distributed_vertical")
    """Variantes do ícone `text_align_distributed_vertical`."""
    TextAlignJustify = _Variants21("text_align_justify")
    """Variantes do ícone `text_align_justify`."""
    TextAlignJustifyLow = _Variants21("text_align_justify_low")
    """Variantes do ícone `text_align_justify_low`."""
    TextAlignJustifyLow90 = _Variants21("text_align_justify_low_90")
    """Variantes do ícone `text_align_justify_low_90`."""
    TextAlignJustifyLowRotate270 = _Variants21("text_align_justify_low_rotate_270")
    """Variantes do ícone `text_align_justify_low_rotate_270`."""
    TextAlignJustifyLowRotate90 = _Variants21("text_align_justify_low_rotate_90")
    """Variantes do ícone `text_align_justify_low_rotate_90`."""
    TextAlignJustifyRotate270 = _Variants21("text_align_justify_rotate_270")
    """Variantes do ícone `text_align_justify_rotate_270`."""
    TextAlignJustifyRotate90 = _Variants21("text_align_justify_rotate_90")
    """Variantes do ícone `text_align_justify_rotate_90`."""
    TextAlignLeft = _Variants28("text_align_left")
    """Variantes do ícone `text_align_left`."""
    TextAlignLeftRotate270 = _Variants28("text_align_left_rotate_270")
    """Variantes do ícone `text_align_left_rotate_270`."""
    TextAlignLeftRotate90 = _Variants28("text_align_left_rotate_90")
    """Variantes do ícone `text_align_left_rotate_90`."""
    TextAlignRight = _Variants28("text_align_right")
    """Variantes do ícone `text_align_right`."""
    TextAlignRightRotate270 = _Variants28("text_align_right_rotate_270")
    """Variantes do ícone `text_align_right_rotate_270`."""
    TextAlignRightRotate90 = _Variants28("text_align_right_rotate_90")
    """Variantes do ícone `text_align_right_rotate_90`."""
    TextArrowDownRightColumn = _Variants23("text_arrow_down_right_column")
    """Variantes do ícone `text_arrow_down_right_column`."""
    TextAsterisk = _Variants60("text_asterisk")
    """Variantes do ícone `text_asterisk`."""
    TextBaseline = _Variants58("text_baseline")
    """Variantes do ícone `text_baseline`."""
    TextBold = _Variants50("text_bold")
    """Variantes do ícone `text_bold`."""
    TextBoldBg = _Variants50("text_bold__bg")
    """Variantes do ícone `text_bold__bg`."""
    TextBoldCa = _Variants50("text_bold__ca")
    """Variantes do ícone `text_bold__ca`."""
    TextBoldDa = _Variants50("text_bold__da")
    """Variantes do ícone `text_bold__da`."""
    TextBoldDe = _Variants50("text_bold__de")
    """Variantes do ícone `text_bold__de`."""
    TextBoldEn = _Variants50("text_bold__en")
    """Variantes do ícone `text_bold__en`."""
    TextBoldEs = _Variants50("text_bold__es")
    """Variantes do ícone `text_bold__es`."""
    TextBoldEt = _Variants50("text_bold__et")
    """Variantes do ícone `text_bold__et`."""
    TextBoldFr = _Variants50("text_bold__fr")
    """Variantes do ícone `text_bold__fr`."""
    TextBoldGl = _Variants50("text_bold__gl")
    """Variantes do ícone `text_bold__gl`."""
    TextBoldHu = _Variants50("text_bold__hu")
    """Variantes do ícone `text_bold__hu`."""
    TextBoldIt = _Variants50("text_bold__it")
    """Variantes do ícone `text_bold__it`."""
    TextBoldKk = _Variants50("text_bold__kk")
    """Variantes do ícone `text_bold__kk`."""
    TextBoldKo = _Variants50("text_bold__ko")
    """Variantes do ícone `text_bold__ko`."""
    TextBoldLt = _Variants50("text_bold__lt")
    """Variantes do ícone `text_bold__lt`."""
    TextBoldLv = _Variants50("text_bold__lv")
    """Variantes do ícone `text_bold__lv`."""
    TextBoldMs = _Variants50("text_bold__ms")
    """Variantes do ícone `text_bold__ms`."""
    TextBoldNo = _Variants50("text_bold__no")
    """Variantes do ícone `text_bold__no`."""
    TextBoldPt = _Variants50("text_bold__pt")
    """Variantes do ícone `text_bold__pt`."""
    TextBoldRu = _Variants50("text_bold__ru")
    """Variantes do ícone `text_bold__ru`."""
    TextBoldSl = _Variants50("text_bold__sl")
    """Variantes do ícone `text_bold__sl`."""
    TextBoldSrCyrl = _Variants50("text_bold__sr-cyrl")
    """Variantes do ícone `text_bold__sr-cyrl`."""
    TextBoldSrLatn = _Variants50("text_bold__sr-latn")
    """Variantes do ícone `text_bold__sr-latn`."""
    TextBoldSv = _Variants50("text_bold__sv")
    """Variantes do ícone `text_bold__sv`."""
    TextBoldTr = _Variants50("text_bold__tr")
    """Variantes do ícone `text_bold__tr`."""
    TextBoldUk = _Variants50("text_bold__uk")
    """Variantes do ícone `text_bold__uk`."""
    TextBoxSettings = _Variants21("text_box_settings")
    """Variantes do ícone `text_box_settings`."""
    TextBulletList = _Variants28("text_bullet_list")
    """Variantes do ícone `text_bullet_list`."""
    TextBulletList270 = _Variants70("text_bullet_list_270")
    """Variantes do ícone `text_bullet_list_270`."""
    TextBulletList90 = _Variants21("text_bullet_list_90")
    """Variantes do ícone `text_bullet_list_90`."""
    TextBulletListAdd = _Variants21("text_bullet_list_add")
    """Variantes do ícone `text_bullet_list_add`."""
    TextBulletListCheckmark = _Variants58("text_bullet_list_checkmark")
    """Variantes do ícone `text_bullet_list_checkmark`."""
    TextBulletListDismiss = _Variants58("text_bullet_list_dismiss")
    """Variantes do ícone `text_bullet_list_dismiss`."""
    TextBulletListEdit = _Variants58("text_bullet_list_edit")
    """Variantes do ícone `text_bullet_list_edit`."""
    TextBulletListLtr = _Variants28("text_bullet_list_ltr")
    """Variantes do ícone `text_bullet_list_ltr`."""
    TextBulletListLtr90 = _Variants21("text_bullet_list_ltr_90")
    """Variantes do ícone `text_bullet_list_ltr_90`."""
    TextBulletListLtrRotate270 = _Variants70("text_bullet_list_ltr_rotate_270")
    """Variantes do ícone `text_bullet_list_ltr_rotate_270`."""
    TextBulletListRtl = _Variants28("text_bullet_list_rtl")
    """Variantes do ícone `text_bullet_list_rtl`."""
    TextBulletListRtl90 = _Variants58("text_bullet_list_rtl_90")
    """Variantes do ícone `text_bullet_list_rtl_90`."""
    TextBulletListSquare = _Variants35("text_bullet_list_square")
    """Variantes do ícone `text_bullet_list_square`."""
    TextBulletListSquareClock = _Variants50("text_bullet_list_square_clock")
    """Variantes do ícone `text_bullet_list_square_clock`."""
    TextBulletListSquareEdit = _Variants21("text_bullet_list_square_edit")
    """Variantes do ícone `text_bullet_list_square_edit`."""
    TextBulletListSquarePerson = _Variants64("text_bullet_list_square_person")
    """Variantes do ícone `text_bullet_list_square_person`."""
    TextBulletListSquareSearch = _Variants58("text_bullet_list_square_search")
    """Variantes do ícone `text_bullet_list_square_search`."""
    TextBulletListSquareSettings = _Variants58("text_bullet_list_square_settings")
    """Variantes do ícone `text_bullet_list_square_settings`."""
    TextBulletListSquareShield = _Variants106("text_bullet_list_square_shield")
    """Variantes do ícone `text_bullet_list_square_shield`."""
    TextBulletListSquareSparkle = _Variants48("text_bullet_list_square_sparkle")
    """Variantes do ícone `text_bullet_list_square_sparkle`."""
    TextBulletListSquareToolbox = _Variants58("text_bullet_list_square_toolbox")
    """Variantes do ícone `text_bullet_list_square_toolbox`."""
    TextBulletListSquareWarning = _Variants28("text_bullet_list_square_warning")
    """Variantes do ícone `text_bullet_list_square_warning`."""
    TextBulletListTree = _Variants28("text_bullet_list_tree")
    """Variantes do ícone `text_bullet_list_tree`."""
    TextCaseLowercase = _Variants28("text_case_lowercase")
    """Variantes do ícone `text_case_lowercase`."""
    TextCaseTitle = _Variants28("text_case_title")
    """Variantes do ícone `text_case_title`."""
    TextCaseUppercase = _Variants28("text_case_uppercase")
    """Variantes do ícone `text_case_uppercase`."""
    TextChangeCase = _Variants28("text_change_case")
    """Variantes do ícone `text_change_case`."""
    TextClearFormatting = _Variants218("text_clear_formatting")
    """Variantes do ícone `text_clear_formatting`."""
    TextClearFormattingEn = _Variants90("text_clear_formatting__en")
    """Variantes do ícone `text_clear_formatting__en`."""
    TextClearFormattingKo = _Variants251("text_clear_formatting__ko")
    """Variantes do ícone `text_clear_formatting__ko`."""
    TextCollapse = _Variants78("text_collapse")
    """Variantes do ícone `text_collapse`."""
    TextColor = _Variants28("text_color")
    """Variantes do ícone `text_color`."""
    TextColorAccent = _Variants255("text_color_accent")
    """Variantes do ícone `text_color_accent`."""
    TextColorEn = _Variants28("text_color__en")
    """Variantes do ícone `text_color__en`."""
    TextColorKo = _Variants21("text_color__ko")
    """Variantes do ícone `text_color__ko`."""
    TextColumnOne = _Variants21("text_column_one")
    """Variantes do ícone `text_column_one`."""
    TextColumnOneNarrow = _Variants21("text_column_one_narrow")
    """Variantes do ícone `text_column_one_narrow`."""
    TextColumnOneSemiNarrow = _Variants21("text_column_one_semi_narrow")
    """Variantes do ícone `text_column_one_semi_narrow`."""
    TextColumnOneWide = _Variants21("text_column_one_wide")
    """Variantes do ícone `text_column_one_wide`."""
    TextColumnOneWideLightning = _Variants28("text_column_one_wide_lightning")
    """Variantes do ícone `text_column_one_wide_lightning`."""
    TextColumnThree = _Variants21("text_column_three")
    """Variantes do ícone `text_column_three`."""
    TextColumnTwo = _Variants21("text_column_two")
    """Variantes do ícone `text_column_two`."""
    TextColumnTwoLeft = _Variants21("text_column_two_left")
    """Variantes do ícone `text_column_two_left`."""
    TextColumnTwoRight = _Variants21("text_column_two_right")
    """Variantes do ícone `text_column_two_right`."""
    TextColumnWide = _Variants21("text_column_wide")
    """Variantes do ícone `text_column_wide`."""
    TextContinuous = _Variants21("text_continuous")
    """Variantes do ícone `text_continuous`."""
    TextDensity = _Variants78("text_density")
    """Variantes do ícone `text_density`."""
    TextDescription = _Variants62("text_description")
    """Variantes do ícone `text_description`."""
    TextDescriptionLtr = _Variants21("text_description_ltr")
    """Variantes do ícone `text_description_ltr`."""
    TextDescriptionRtl = _Variants21("text_description_rtl")
    """Variantes do ícone `text_description_rtl`."""
    TextDirectionHorizontalLeft = _Variants28("text_direction_horizontal_left")
    """Variantes do ícone `text_direction_horizontal_left`."""
    TextDirectionHorizontalLeftEn = _Variants28("text_direction_horizontal_left__en")
    """Variantes do ícone `text_direction_horizontal_left__en`."""
    TextDirectionHorizontalLeftKo = _Variants28("text_direction_horizontal_left__ko")
    """Variantes do ícone `text_direction_horizontal_left__ko`."""
    TextDirectionHorizontalLtr = _Variants21("text_direction_horizontal_ltr")
    """Variantes do ícone `text_direction_horizontal_ltr`."""
    TextDirectionHorizontalLtrEn = _Variants21("text_direction_horizontal_ltr__en")
    """Variantes do ícone `text_direction_horizontal_ltr__en`."""
    TextDirectionHorizontalLtrKo = _Variants21("text_direction_horizontal_ltr__ko")
    """Variantes do ícone `text_direction_horizontal_ltr__ko`."""
    TextDirectionHorizontalRight = _Variants28("text_direction_horizontal_right")
    """Variantes do ícone `text_direction_horizontal_right`."""
    TextDirectionHorizontalRightEn = _Variants28("text_direction_horizontal_right__en")
    """Variantes do ícone `text_direction_horizontal_right__en`."""
    TextDirectionHorizontalRightKo = _Variants28("text_direction_horizontal_right__ko")
    """Variantes do ícone `text_direction_horizontal_right__ko`."""
    TextDirectionHorizontalRtl = _Variants21("text_direction_horizontal_rtl")
    """Variantes do ícone `text_direction_horizontal_rtl`."""
    TextDirectionHorizontalRtlEn = _Variants21("text_direction_horizontal_rtl__en")
    """Variantes do ícone `text_direction_horizontal_rtl__en`."""
    TextDirectionHorizontalRtlKo = _Variants21("text_direction_horizontal_rtl__ko")
    """Variantes do ícone `text_direction_horizontal_rtl__ko`."""
    TextDirectionRotate270Right = _Variants28("text_direction_rotate_270_right")
    """Variantes do ícone `text_direction_rotate_270_right`."""
    TextDirectionRotate270RightEn = _Variants28("text_direction_rotate_270_right__en")
    """Variantes do ícone `text_direction_rotate_270_right__en`."""
    TextDirectionRotate270RightKo = _Variants28("text_direction_rotate_270_right__ko")
    """Variantes do ícone `text_direction_rotate_270_right__ko`."""
    TextDirectionRotate315Right = _Variants28("text_direction_rotate_315_right")
    """Variantes do ícone `text_direction_rotate_315_right`."""
    TextDirectionRotate45Right = _Variants28("text_direction_rotate_45_right")
    """Variantes do ícone `text_direction_rotate_45_right`."""
    TextDirectionRotate90Left = _Variants28("text_direction_rotate_90_left")
    """Variantes do ícone `text_direction_rotate_90_left`."""
    TextDirectionRotate90LeftEn = _Variants28("text_direction_rotate_90_left__en")
    """Variantes do ícone `text_direction_rotate_90_left__en`."""
    TextDirectionRotate90Ltr = _Variants21("text_direction_rotate_90_ltr")
    """Variantes do ícone `text_direction_rotate_90_ltr`."""
    TextDirectionRotate90LtrEn = _Variants21("text_direction_rotate_90_ltr__en")
    """Variantes do ícone `text_direction_rotate_90_ltr__en`."""
    TextDirectionRotate90LtrKo = _Variants21("text_direction_rotate_90_ltr__ko")
    """Variantes do ícone `text_direction_rotate_90_ltr__ko`."""
    TextDirectionRotate90Right = _Variants28("text_direction_rotate_90_right")
    """Variantes do ícone `text_direction_rotate_90_right`."""
    TextDirectionRotate90RightEn = _Variants28("text_direction_rotate_90_right__en")
    """Variantes do ícone `text_direction_rotate_90_right__en`."""
    TextDirectionRotate90RightKo = _Variants28("text_direction_rotate_90_right__ko")
    """Variantes do ícone `text_direction_rotate_90_right__ko`."""
    TextDirectionRotate90Rtl = _Variants21("text_direction_rotate_90_rtl")
    """Variantes do ícone `text_direction_rotate_90_rtl`."""
    TextDirectionRotate90RtlEn = _Variants21("text_direction_rotate_90_rtl__en")
    """Variantes do ícone `text_direction_rotate_90_rtl__en`."""
    TextDirectionVertical = _Variants28("text_direction_vertical")
    """Variantes do ícone `text_direction_vertical`."""
    TextDirectionVerticalEn = _Variants28("text_direction_vertical__en")
    """Variantes do ícone `text_direction_vertical__en`."""
    TextDirectionVerticalKo = _Variants28("text_direction_vertical__ko")
    """Variantes do ícone `text_direction_vertical__ko`."""
    TextEditStyle = _Variants347("text_edit_style")
    """Variantes do ícone `text_edit_style`."""
    TextEditStyleCharacterA = _Variants349("text_edit_style_character_a")
    """Variantes do ícone `text_edit_style_character_a`."""
    TextEditStyleCharacterGa = _Variants349("text_edit_style_character_ga")
    """Variantes do ícone `text_edit_style_character_ga`."""
    TextEditStyleEn = _Variants78("text_edit_style__en")
    """Variantes do ícone `text_edit_style__en`."""
    TextEditStyleKo = _Variants62("text_edit_style__ko")
    """Variantes do ícone `text_edit_style__ko`."""
    TextEffects = _Variants21("text_effects")
    """Variantes do ícone `text_effects`."""
    TextEffectsEn = _Variants21("text_effects__en")
    """Variantes do ícone `text_effects__en`."""
    TextEffectsKo = _Variants21("text_effects__ko")
    """Variantes do ícone `text_effects__ko`."""
    TextEffectsSparkle = _Variants21("text_effects_sparkle")
    """Variantes do ícone `text_effects_sparkle`."""
    TextExpand = _Variants78("text_expand")
    """Variantes do ícone `text_expand`."""
    TextField = _Variants28("text_field")
    """Variantes do ícone `text_field`."""
    TextFirstLine = _Variants21("text_first_line")
    """Variantes do ícone `text_first_line`."""
    TextFont = _Variants28("text_font")
    """Variantes do ícone `text_font`."""
    TextFontInfo = _Variants28("text_font_info")
    """Variantes do ícone `text_font_info`."""
    TextFontSize = _Variants28("text_font_size")
    """Variantes do ícone `text_font_size`."""
    TextFontSizeOff = _Variants28("text_font_size_off")
    """Variantes do ícone `text_font_size_off`."""
    TextFootnote = _Variants21("text_footnote")
    """Variantes do ícone `text_footnote`."""
    TextFootnoteEn = _Variants21("text_footnote__en")
    """Variantes do ícone `text_footnote__en`."""
    TextFootnoteKo = _Variants21("text_footnote__ko")
    """Variantes do ícone `text_footnote__ko`."""
    TextGrammarArrowLeft = _Variants21("text_grammar_arrow_left")
    """Variantes do ícone `text_grammar_arrow_left`."""
    TextGrammarArrowRight = _Variants21("text_grammar_arrow_right")
    """Variantes do ícone `text_grammar_arrow_right`."""
    TextGrammarCheckmark = _Variants21("text_grammar_checkmark")
    """Variantes do ícone `text_grammar_checkmark`."""
    TextGrammarDismiss = _Variants21("text_grammar_dismiss")
    """Variantes do ícone `text_grammar_dismiss`."""
    TextGrammarError = _Variants58("text_grammar_error")
    """Variantes do ícone `text_grammar_error`."""
    TextGrammarLightning = _Variants62("text_grammar_lightning")
    """Variantes do ícone `text_grammar_lightning`."""
    TextGrammarSettings = _Variants21("text_grammar_settings")
    """Variantes do ícone `text_grammar_settings`."""
    TextGrammarWand = _Variants28("text_grammar_wand")
    """Variantes do ícone `text_grammar_wand`."""
    TextHanging = _Variants21("text_hanging")
    """Variantes do ícone `text_hanging`."""
    TextHeader1 = _Variants21("text_header_1")
    """Variantes do ícone `text_header_1`."""
    TextHeader1Lines = _Variants28("text_header_1_lines")
    """Variantes do ícone `text_header_1_lines`."""
    TextHeader1LinesCaret = _Variants28("text_header_1_lines_caret")
    """Variantes do ícone `text_header_1_lines_caret`."""
    TextHeader2 = _Variants21("text_header_2")
    """Variantes do ícone `text_header_2`."""
    TextHeader2Lines = _Variants28("text_header_2_lines")
    """Variantes do ícone `text_header_2_lines`."""
    TextHeader2LinesCaret = _Variants28("text_header_2_lines_caret")
    """Variantes do ícone `text_header_2_lines_caret`."""
    TextHeader3 = _Variants21("text_header_3")
    """Variantes do ícone `text_header_3`."""
    TextHeader3Lines = _Variants28("text_header_3_lines")
    """Variantes do ícone `text_header_3_lines`."""
    TextHeader3LinesCaret = _Variants28("text_header_3_lines_caret")
    """Variantes do ícone `text_header_3_lines_caret`."""
    TextHeader4 = _Variants21("text_header_4")
    """Variantes do ícone `text_header_4`."""
    TextHeader4LinesCaret = _Variants28("text_header_4_lines_caret")
    """Variantes do ícone `text_header_4_lines_caret`."""
    TextHeader5 = _Variants21("text_header_5")
    """Variantes do ícone `text_header_5`."""
    TextHeader6 = _Variants21("text_header_6")
    """Variantes do ícone `text_header_6`."""
    TextIndentDecrease = _Variants28("text_indent_decrease")
    """Variantes do ícone `text_indent_decrease`."""
    TextIndentDecreaseLtr = _Variants28("text_indent_decrease_ltr")
    """Variantes do ícone `text_indent_decrease_ltr`."""
    TextIndentDecreaseLtr90 = _Variants21("text_indent_decrease_ltr_90")
    """Variantes do ícone `text_indent_decrease_ltr_90`."""
    TextIndentDecreaseLtrRotate270 = _Variants21("text_indent_decrease_ltr_rotate_270")
    """Variantes do ícone `text_indent_decrease_ltr_rotate_270`."""
    TextIndentDecreaseRotate270 = _Variants21("text_indent_decrease_rotate_270")
    """Variantes do ícone `text_indent_decrease_rotate_270`."""
    TextIndentDecreaseRotate90 = _Variants21("text_indent_decrease_rotate_90")
    """Variantes do ícone `text_indent_decrease_rotate_90`."""
    TextIndentDecreaseRtl = _Variants28("text_indent_decrease_rtl")
    """Variantes do ícone `text_indent_decrease_rtl`."""
    TextIndentDecreaseRtl90 = _Variants21("text_indent_decrease_rtl_90")
    """Variantes do ícone `text_indent_decrease_rtl_90`."""
    TextIndentDecreaseRtlRotate270 = _Variants21("text_indent_decrease_rtl_rotate_270")
    """Variantes do ícone `text_indent_decrease_rtl_rotate_270`."""
    TextIndentIncrease = _Variants28("text_indent_increase")
    """Variantes do ícone `text_indent_increase`."""
    TextIndentIncreaseLtr = _Variants28("text_indent_increase_ltr")
    """Variantes do ícone `text_indent_increase_ltr`."""
    TextIndentIncreaseLtr90 = _Variants21("text_indent_increase_ltr_90")
    """Variantes do ícone `text_indent_increase_ltr_90`."""
    TextIndentIncreaseLtrRotate270 = _Variants21("text_indent_increase_ltr_rotate_270")
    """Variantes do ícone `text_indent_increase_ltr_rotate_270`."""
    TextIndentIncreaseRotate270 = _Variants21("text_indent_increase_rotate_270")
    """Variantes do ícone `text_indent_increase_rotate_270`."""
    TextIndentIncreaseRotate90 = _Variants21("text_indent_increase_rotate_90")
    """Variantes do ícone `text_indent_increase_rotate_90`."""
    TextIndentIncreaseRtl = _Variants28("text_indent_increase_rtl")
    """Variantes do ícone `text_indent_increase_rtl`."""
    TextIndentIncreaseRtl90 = _Variants21("text_indent_increase_rtl_90")
    """Variantes do ícone `text_indent_increase_rtl_90`."""
    TextIndentIncreaseRtlRotate270 = _Variants21("text_indent_increase_rtl_rotate_270")
    """Variantes do ícone `text_indent_increase_rtl_rotate_270`."""
    TextItalic = _Variants50("text_italic")
    """Variantes do ícone `text_italic`."""
    TextItalicBg = _Variants50("text_italic__bg")
    """Variantes do ícone `text_italic__bg`."""
    TextItalicCa = _Variants50("text_italic__ca")
    """Variantes do ícone `text_italic__ca`."""
    TextItalicDa = _Variants50("text_italic__da")
    """Variantes do ícone `text_italic__da`."""
    TextItalicDe = _Variants50("text_italic__de")
    """Variantes do ícone `text_italic__de`."""
    TextItalicEn = _Variants50("text_italic__en")
    """Variantes do ícone `text_italic__en`."""
    TextItalicEs = _Variants50("text_italic__es")
    """Variantes do ícone `text_italic__es`."""
    TextItalicEt = _Variants50("text_italic__et")
    """Variantes do ícone `text_italic__et`."""
    TextItalicEu = _Variants50("text_italic__eu")
    """Variantes do ícone `text_italic__eu`."""
    TextItalicGl = _Variants50("text_italic__gl")
    """Variantes do ícone `text_italic__gl`."""
    TextItalicHu = _Variants50("text_italic__hu")
    """Variantes do ícone `text_italic__hu`."""
    TextItalicIt = _Variants50("text_italic__it")
    """Variantes do ícone `text_italic__it`."""
    TextItalicKk = _Variants50("text_italic__kk")
    """Variantes do ícone `text_italic__kk`."""
    TextItalicKo = _Variants50("text_italic__ko")
    """Variantes do ícone `text_italic__ko`."""
    TextItalicLt = _Variants50("text_italic__lt")
    """Variantes do ícone `text_italic__lt`."""
    TextItalicLv = _Variants50("text_italic__lv")
    """Variantes do ícone `text_italic__lv`."""
    TextItalicNo = _Variants50("text_italic__no")
    """Variantes do ícone `text_italic__no`."""
    TextItalicRu = _Variants50("text_italic__ru")
    """Variantes do ícone `text_italic__ru`."""
    TextItalicSl = _Variants50("text_italic__sl")
    """Variantes do ícone `text_italic__sl`."""
    TextItalicSr = _Variants50("text_italic__sr")
    """Variantes do ícone `text_italic__sr`."""
    TextItalicSv = _Variants50("text_italic__sv")
    """Variantes do ícone `text_italic__sv`."""
    TextItalicTr = _Variants50("text_italic__tr")
    """Variantes do ícone `text_italic__tr`."""
    TextItalicUk = _Variants50("text_italic__uk")
    """Variantes do ícone `text_italic__uk`."""
    TextLineSpacing = _Variants90("text_line_spacing")
    """Variantes do ícone `text_line_spacing`."""
    TextListAbcLowercaseLtr = _Variants21("text_list_abc_lowercase_ltr")
    """Variantes do ícone `text_list_abc_lowercase_ltr`."""
    TextListAbcUppercaseLtr = _Variants21("text_list_abc_uppercase_ltr")
    """Variantes do ícone `text_list_abc_uppercase_ltr`."""
    TextListRomanNumeralLowercase = _Variants21("text_list_roman_numeral_lowercase")
    """Variantes do ícone `text_list_roman_numeral_lowercase`."""
    TextListRomanNumeralUppercase = _Variants21("text_list_roman_numeral_uppercase")
    """Variantes do ícone `text_list_roman_numeral_uppercase`."""
    TextMore = _Variants21("text_more")
    """Variantes do ícone `text_more`."""
    TextMoreEn = _Variants21("text_more__en")
    """Variantes do ícone `text_more__en`."""
    TextMoreKo = _Variants21("text_more__ko")
    """Variantes do ícone `text_more__ko`."""
    TextNumberFormat = _Variants21("text_number_format")
    """Variantes do ícone `text_number_format`."""
    TextNumberFormatEn = _Variants21("text_number_format__en")
    """Variantes do ícone `text_number_format__en`."""
    TextNumberFormatKo = _Variants21("text_number_format__ko")
    """Variantes do ícone `text_number_format__ko`."""
    TextNumberListLtr = _Variants50("text_number_list_ltr")
    """Variantes do ícone `text_number_list_ltr`."""
    TextNumberListLtr90 = _Variants21("text_number_list_ltr_90")
    """Variantes do ícone `text_number_list_ltr_90`."""
    TextNumberListLtrAlternate520c0270 = _Variants294("text_number_list_ltr__alternate_520c0270")
    """Variantes do ícone `text_number_list_ltr__alternate_520c0270`."""
    TextNumberListLtrAlternate524a3b5d = _Variants296("text_number_list_ltr__alternate_524a3b5d")
    """Variantes do ícone `text_number_list_ltr__alternate_524a3b5d`."""
    TextNumberListLtrAlternate8bee32bf = _Variants181("text_number_list_ltr__alternate_8bee32bf")
    """Variantes do ícone `text_number_list_ltr__alternate_8bee32bf`."""
    TextNumberListLtrAlternate99939b5d = _Variants179("text_number_list_ltr__alternate_99939b5d")
    """Variantes do ícone `text_number_list_ltr__alternate_99939b5d`."""
    TextNumberListLtrAlternateD1204f55 = _Variants177("text_number_list_ltr__alternate_d1204f55")
    """Variantes do ícone `text_number_list_ltr__alternate_d1204f55`."""
    TextNumberListLtrAlternateD1c76c18 = _Variants173("text_number_list_ltr__alternate_d1c76c18")
    """Variantes do ícone `text_number_list_ltr__alternate_d1c76c18`."""
    TextNumberListLtrRotate270 = _Variants41("text_number_list_ltr_rotate_270")
    """Variantes do ícone `text_number_list_ltr_rotate_270`."""
    TextNumberListLtrRotate90 = _Variants307("text_number_list_ltr_rotate_90")
    """Variantes do ícone `text_number_list_ltr_rotate_90`."""
    TextNumberListRotate270 = _Variants21("text_number_list_rotate_270")
    """Variantes do ícone `text_number_list_rotate_270`."""
    TextNumberListRotate270Ltr = _Variants21("text_number_list_rotate_270__LTR")
    """Variantes do ícone `text_number_list_rotate_270__LTR`."""
    TextNumberListRotate270Rtl = _Variants21("text_number_list_rotate_270__RTL")
    """Variantes do ícone `text_number_list_rotate_270__RTL`."""
    TextNumberListRotate90 = _Variants21("text_number_list_rotate_90")
    """Variantes do ícone `text_number_list_rotate_90`."""
    TextNumberListRotate90Ltr = _Variants21("text_number_list_rotate_90__LTR")
    """Variantes do ícone `text_number_list_rotate_90__LTR`."""
    TextNumberListRotate90Rtl = _Variants21("text_number_list_rotate_90__RTL")
    """Variantes do ícone `text_number_list_rotate_90__RTL`."""
    TextNumberListRtl = _Variants50("text_number_list_rtl")
    """Variantes do ícone `text_number_list_rtl`."""
    TextNumberListRtl90 = _Variants21("text_number_list_rtl_90")
    """Variantes do ícone `text_number_list_rtl_90`."""
    TextNumberListRtlAlternate793c7add = _Variants181("text_number_list_rtl__alternate_793c7add")
    """Variantes do ícone `text_number_list_rtl__alternate_793c7add`."""
    TextNumberListRtlAlternate80276e9a = _Variants296("text_number_list_rtl__alternate_80276e9a")
    """Variantes do ícone `text_number_list_rtl__alternate_80276e9a`."""
    TextNumberListRtlAlternate8d530db5 = _Variants179("text_number_list_rtl__alternate_8d530db5")
    """Variantes do ícone `text_number_list_rtl__alternate_8d530db5`."""
    TextNumberListRtlAlternateA22ea72f = _Variants294("text_number_list_rtl__alternate_a22ea72f")
    """Variantes do ícone `text_number_list_rtl__alternate_a22ea72f`."""
    TextNumberListRtlAlternateA432fd2b = _Variants173("text_number_list_rtl__alternate_a432fd2b")
    """Variantes do ícone `text_number_list_rtl__alternate_a432fd2b`."""
    TextNumberListRtlAlternateAc421bd6 = _Variants177("text_number_list_rtl__alternate_ac421bd6")
    """Variantes do ícone `text_number_list_rtl__alternate_ac421bd6`."""
    TextNumberListRtlRotate270 = _Variants41("text_number_list_rtl_rotate_270")
    """Variantes do ícone `text_number_list_rtl_rotate_270`."""
    TextNumberListRtlRotate90 = _Variants307("text_number_list_rtl_rotate_90")
    """Variantes do ícone `text_number_list_rtl_rotate_90`."""
    TextParagraph = _Variants28("text_paragraph")
    """Variantes do ícone `text_paragraph`."""
    TextParagraphDirection = _Variants21("text_paragraph_direction")
    """Variantes do ícone `text_paragraph_direction`."""
    TextParagraphDirectionLeft = _Variants28("text_paragraph_direction_left")
    """Variantes do ícone `text_paragraph_direction_left`."""
    TextParagraphDirectionRight = _Variants28("text_paragraph_direction_right")
    """Variantes do ícone `text_paragraph_direction_right`."""
    TextParagraphEn = _Variants28("text_paragraph__en")
    """Variantes do ícone `text_paragraph__en`."""
    TextParagraphJa = _Variants28("text_paragraph__ja")
    """Variantes do ícone `text_paragraph__ja`."""
    TextParagraphKo = _Variants28("text_paragraph__ko")
    """Variantes do ícone `text_paragraph__ko`."""
    TextParagraphZh = _Variants28("text_paragraph__zh")
    """Variantes do ícone `text_paragraph__zh`."""
    TextPercent = _Variants23("text_percent")
    """Variantes do ícone `text_percent`."""
    TextPeriodAsterisk = _Variants58("text_period_asterisk")
    """Variantes do ícone `text_period_asterisk`."""
    TextPositionBehind = _Variants21("text_position_behind")
    """Variantes do ícone `text_position_behind`."""
    TextPositionFront = _Variants21("text_position_front")
    """Variantes do ícone `text_position_front`."""
    TextPositionLine = _Variants21("text_position_line")
    """Variantes do ícone `text_position_line`."""
    TextPositionSquare = _Variants21("text_position_square")
    """Variantes do ícone `text_position_square`."""
    TextPositionSquareLeft = _Variants28("text_position_square_left")
    """Variantes do ícone `text_position_square_left`."""
    TextPositionSquareRight = _Variants28("text_position_square_right")
    """Variantes do ícone `text_position_square_right`."""
    TextPositionThrough = _Variants21("text_position_through")
    """Variantes do ícone `text_position_through`."""
    TextPositionTight = _Variants21("text_position_tight")
    """Variantes do ícone `text_position_tight`."""
    TextPositionTopBottom = _Variants21("text_position_top_bottom")
    """Variantes do ícone `text_position_top_bottom`."""
    TextProofingTools = _Variants21("text_proofing_tools")
    """Variantes do ícone `text_proofing_tools`."""
    TextProofingToolsAbc = _Variants56("text_proofing_tools_abc")
    """Variantes do ícone `text_proofing_tools_abc`."""
    TextProofingToolsEn = _Variants21("text_proofing_tools__en")
    """Variantes do ícone `text_proofing_tools__en`."""
    TextProofingToolsGaNaDa = _Variants56("text_proofing_tools_ga_na_da")
    """Variantes do ícone `text_proofing_tools_ga_na_da`."""
    TextProofingToolsKo = _Variants21("text_proofing_tools__ko")
    """Variantes do ícone `text_proofing_tools__ko`."""
    TextProofingToolsZh = _Variants21("text_proofing_tools__zh")
    """Variantes do ícone `text_proofing_tools__zh`."""
    TextProofingToolsZi = _Variants56("text_proofing_tools_zi")
    """Variantes do ícone `text_proofing_tools_zi`."""
    TextQuote = _Variants62("text_quote")
    """Variantes do ícone `text_quote`."""
    TextQuoteOpening = _Variants62("text_quote_opening")
    """Variantes do ícone `text_quote_opening`."""
    TextSortAscending = _Variants28("text_sort_ascending")
    """Variantes do ícone `text_sort_ascending`."""
    TextSortAscendingBg = _Variants28("text_sort_ascending__bg")
    """Variantes do ícone `text_sort_ascending__bg`."""
    TextSortAscendingDa = _Variants28("text_sort_ascending__da")
    """Variantes do ícone `text_sort_ascending__da`."""
    TextSortAscendingEn = _Variants28("text_sort_ascending__en")
    """Variantes do ícone `text_sort_ascending__en`."""
    TextSortAscendingFi = _Variants28("text_sort_ascending__fi")
    """Variantes do ícone `text_sort_ascending__fi`."""
    TextSortAscendingGr = _Variants28("text_sort_ascending__gr")
    """Variantes do ícone `text_sort_ascending__gr`."""
    TextSortAscendingKk = _Variants28("text_sort_ascending__kk")
    """Variantes do ícone `text_sort_ascending__kk`."""
    TextSortAscendingKo = _Variants28("text_sort_ascending__ko")
    """Variantes do ícone `text_sort_ascending__ko`."""
    TextSortAscendingRu = _Variants28("text_sort_ascending__ru")
    """Variantes do ícone `text_sort_ascending__ru`."""
    TextSortAscendingSe = _Variants28("text_sort_ascending__se")
    """Variantes do ícone `text_sort_ascending__se`."""
    TextSortAscendingSl = _Variants28("text_sort_ascending__sl")
    """Variantes do ícone `text_sort_ascending__sl`."""
    TextSortAscendingSr = _Variants28("text_sort_ascending__sr")
    """Variantes do ícone `text_sort_ascending__sr`."""
    TextSortDescending = _Variants28("text_sort_descending")
    """Variantes do ícone `text_sort_descending`."""
    TextSortDescendingBg = _Variants28("text_sort_descending__bg")
    """Variantes do ícone `text_sort_descending__bg`."""
    TextSortDescendingDa = _Variants28("text_sort_descending__da")
    """Variantes do ícone `text_sort_descending__da`."""
    TextSortDescendingEn = _Variants28("text_sort_descending__en")
    """Variantes do ícone `text_sort_descending__en`."""
    TextSortDescendingFi = _Variants28("text_sort_descending__fi")
    """Variantes do ícone `text_sort_descending__fi`."""
    TextSortDescendingGr = _Variants28("text_sort_descending__gr")
    """Variantes do ícone `text_sort_descending__gr`."""
    TextSortDescendingKk = _Variants28("text_sort_descending__kk")
    """Variantes do ícone `text_sort_descending__kk`."""
    TextSortDescendingKo = _Variants28("text_sort_descending__ko")
    """Variantes do ícone `text_sort_descending__ko`."""
    TextSortDescendingRu = _Variants28("text_sort_descending__ru")
    """Variantes do ícone `text_sort_descending__ru`."""
    TextSortDescendingSe = _Variants28("text_sort_descending__se")
    """Variantes do ícone `text_sort_descending__se`."""
    TextSortDescendingSl = _Variants28("text_sort_descending__sl")
    """Variantes do ícone `text_sort_descending__sl`."""
    TextSortDescendingSr = _Variants28("text_sort_descending__sr")
    """Variantes do ícone `text_sort_descending__sr`."""
    TextStrikethrough = _Variants28("text_strikethrough")
    """Variantes do ícone `text_strikethrough`."""
    TextStrikethroughEn = _Variants28("text_strikethrough__en")
    """Variantes do ícone `text_strikethrough__en`."""
    TextStrikethroughKo = _Variants28("text_strikethrough__ko")
    """Variantes do ícone `text_strikethrough__ko`."""
    TextSubscript = _Variants28("text_subscript")
    """Variantes do ícone `text_subscript`."""
    TextSuperscript = _Variants28("text_superscript")
    """Variantes do ícone `text_superscript`."""
    TextT = _Variants82("text_t")
    """Variantes do ícone `text_t`."""
    TextTTag = _Variants56("text_t_tag")
    """Variantes do ícone `text_t_tag`."""
    TextUnderline = _Variants50("text_underline")
    """Variantes do ícone `text_underline`."""
    TextUnderlineBg = _Variants50("text_underline__bg")
    """Variantes do ícone `text_underline__bg`."""
    TextUnderlineCa = _Variants50("text_underline__ca")
    """Variantes do ícone `text_underline__ca`."""
    TextUnderlineCharacterU = _Variants28("text_underline_character_u")
    """Variantes do ícone `text_underline_character_u`."""
    TextUnderlineDouble = _Variants21("text_underline_double")
    """Variantes do ícone `text_underline_double`."""
    TextUnderlineEn = _Variants50("text_underline__en")
    """Variantes do ícone `text_underline__en`."""
    TextUnderlineEs = _Variants50("text_underline__es")
    """Variantes do ícone `text_underline__es`."""
    TextUnderlineEt = _Variants50("text_underline__et")
    """Variantes do ícone `text_underline__et`."""
    TextUnderlineEu = _Variants50("text_underline__eu")
    """Variantes do ícone `text_underline__eu`."""
    TextUnderlineFr = _Variants50("text_underline__fr")
    """Variantes do ícone `text_underline__fr`."""
    TextUnderlineGl = _Variants50("text_underline__gl")
    """Variantes do ícone `text_underline__gl`."""
    TextUnderlineHu = _Variants50("text_underline__hu")
    """Variantes do ícone `text_underline__hu`."""
    TextUnderlineIt = _Variants50("text_underline__it")
    """Variantes do ícone `text_underline__it`."""
    TextUnderlineKk = _Variants50("text_underline__kk")
    """Variantes do ícone `text_underline__kk`."""
    TextUnderlineKo = _Variants351("text_underline__ko")
    """Variantes do ícone `text_underline__ko`."""
    TextUnderlineLt = _Variants50("text_underline__lt")
    """Variantes do ícone `text_underline__lt`."""
    TextUnderlineLv = _Variants50("text_underline__lv")
    """Variantes do ícone `text_underline__lv`."""
    TextUnderlinePt = _Variants50("text_underline__pt")
    """Variantes do ícone `text_underline__pt`."""
    TextUnderlineRu = _Variants50("text_underline__ru")
    """Variantes do ícone `text_underline__ru`."""
    TextUnderlineSl = _Variants50("text_underline__sl")
    """Variantes do ícone `text_underline__sl`."""
    TextUnderlineSr = _Variants50("text_underline__sr")
    """Variantes do ícone `text_underline__sr`."""
    TextUnderlineSrCyrl = _Variants50("text_underline__sr-cyrl")
    """Variantes do ícone `text_underline__sr-cyrl`."""
    TextUnderlineTr = _Variants50("text_underline__tr")
    """Variantes do ícone `text_underline__tr`."""
    TextUnderlineUk = _Variants50("text_underline__uk")
    """Variantes do ícone `text_underline__uk`."""
    TextWholeWord = _Variants60("text_whole_word")
    """Variantes do ícone `text_whole_word`."""
    TextWordCount = _Variants21("text_word_count")
    """Variantes do ícone `text_word_count`."""
    TextWrap = _Variants28("text_wrap")
    """Variantes do ícone `text_wrap`."""
    TextWrapOff = _Variants28("text_wrap_off")
    """Variantes do ícone `text_wrap_off`."""
    Textbox = _Variants23("textbox")
    """Variantes do ícone `textbox`."""
    TextboxAlignBottom = _Variants21("textbox_align_bottom")
    """Variantes do ícone `textbox_align_bottom`."""
    TextboxAlignBottomCenter = _Variants28("textbox_align_bottom_center")
    """Variantes do ícone `textbox_align_bottom_center`."""
    TextboxAlignBottomLeft = _Variants28("textbox_align_bottom_left")
    """Variantes do ícone `textbox_align_bottom_left`."""
    TextboxAlignBottomRight = _Variants28("textbox_align_bottom_right")
    """Variantes do ícone `textbox_align_bottom_right`."""
    TextboxAlignBottomRotate90 = _Variants21("textbox_align_bottom_rotate_90")
    """Variantes do ícone `textbox_align_bottom_rotate_90`."""
    TextboxAlignCenter = _Variants28("textbox_align_center")
    """Variantes do ícone `textbox_align_center`."""
    TextboxAlignMiddle = _Variants28("textbox_align_middle")
    """Variantes do ícone `textbox_align_middle`."""
    TextboxAlignMiddleLeft = _Variants28("textbox_align_middle_left")
    """Variantes do ícone `textbox_align_middle_left`."""
    TextboxAlignMiddleRight = _Variants28("textbox_align_middle_right")
    """Variantes do ícone `textbox_align_middle_right`."""
    TextboxAlignMiddleRotate90 = _Variants21("textbox_align_middle_rotate_90")
    """Variantes do ícone `textbox_align_middle_rotate_90`."""
    TextboxAlignTop = _Variants21("textbox_align_top")
    """Variantes do ícone `textbox_align_top`."""
    TextboxAlignTopArrowClockwise = _Variants58("textbox_align_top_arrow_clockwise")
    """Variantes do ícone `textbox_align_top_arrow_clockwise`."""
    TextboxAlignTopCenter = _Variants28("textbox_align_top_center")
    """Variantes do ícone `textbox_align_top_center`."""
    TextboxAlignTopLeft = _Variants257("textbox_align_top_left")
    """Variantes do ícone `textbox_align_top_left`."""
    TextboxAlignTopRight = _Variants28("textbox_align_top_right")
    """Variantes do ícone `textbox_align_top_right`."""
    TextboxAlignTopRotate90 = _Variants21("textbox_align_top_rotate_90")
    """Variantes do ícone `textbox_align_top_rotate_90`."""
    TextboxCheckmark = _Variants23("textbox_checkmark")
    """Variantes do ícone `textbox_checkmark`."""
    TextboxMore = _Variants21("textbox_more")
    """Variantes do ícone `textbox_more`."""
    TextboxRotate90 = _Variants21("textbox_rotate_90")
    """Variantes do ícone `textbox_rotate_90`."""
    TextboxSettings = _Variants21("textbox_settings")
    """Variantes do ícone `textbox_settings`."""
    Thinking = _Variants21("thinking")
    """Variantes do ícone `thinking`."""
    ThumbDislike = _Variants37("thumb_dislike")
    """Variantes do ícone `thumb_dislike`."""
    ThumbLike = _Variants37("thumb_like")
    """Variantes do ícone `thumb_like`."""
    ThumbLikeDislike = _Variants28("thumb_like_dislike")
    """Variantes do ícone `thumb_like_dislike`."""
    TicketDiagonal = _Variants66("ticket_diagonal")
    """Variantes do ícone `ticket_diagonal`."""
    TicketHorizontal = _Variants21("ticket_horizontal")
    """Variantes do ícone `ticket_horizontal`."""
    TimeAndWeather = _Variants21("time_and_weather")
    """Variantes do ícone `time_and_weather`."""
    TimePicker = _Variants21("time_picker")
    """Variantes do ícone `time_picker`."""
    Timeline = _Variants21("timeline")
    """Variantes do ícone `timeline`."""
    Timer = _Variants82("timer")
    """Variantes do ícone `timer`."""
    Timer10 = _Variants21("timer_10")
    """Variantes do ícone `timer_10`."""
    Timer2 = _Variants21("timer_2")
    """Variantes do ícone `timer_2`."""
    Timer3 = _Variants21("timer_3")
    """Variantes do ícone `timer_3`."""
    TimerOff = _Variants21("timer_off")
    """Variantes do ícone `timer_off`."""
    Todoitem = _Variants9("todoitem")
    """Variantes do ícone `todoitem`."""
    ToggleLeft = _Variants37("toggle_left")
    """Variantes do ícone `toggle_left`."""
    ToggleMultiple = _Variants28("toggle_multiple")
    """Variantes do ícone `toggle_multiple`."""
    ToggleRight = _Variants37("toggle_right")
    """Variantes do ícone `toggle_right`."""
    Toilet = _Variants60("toilet")
    """Variantes do ícone `toilet`."""
    Toolbox = _Variants303("toolbox")
    """Variantes do ícone `toolbox`."""
    TooltipQuote = _Variants82("tooltip_quote")
    """Variantes do ícone `tooltip_quote`."""
    TooltipQuoteOff = _Variants82("tooltip_quote_off")
    """Variantes do ícone `tooltip_quote_off`."""
    TopSpeed = _Variants353("top_speed")
    """Variantes do ícone `top_speed`."""
    Translate = _Variants66("translate")
    """Variantes do ícone `translate`."""
    TranslateAuto = _Variants28("translate_auto")
    """Variantes do ícone `translate_auto`."""
    TranslateOff = _Variants28("translate_off")
    """Variantes do ícone `translate_off`."""
    Transmission = _Variants21("transmission")
    """Variantes do ícone `transmission`."""
    TransparencySquare = _Variants28("transparency_square")
    """Variantes do ícone `transparency_square`."""
    TrayItemAdd = _Variants21("tray_item_add")
    """Variantes do ícone `tray_item_add`."""
    TrayItemRemove = _Variants21("tray_item_remove")
    """Variantes do ícone `tray_item_remove`."""
    TreeDeciduous = _Variants41("tree_deciduous")
    """Variantes do ícone `tree_deciduous`."""
    TreeEvergreen = _Variants58("tree_evergreen")
    """Variantes do ícone `tree_evergreen`."""
    Triangle = _Variants82("triangle")
    """Variantes do ícone `triangle`."""
    TriangleDown = _Variants311("triangle_down")
    """Variantes do ícone `triangle_down`."""
    TriangleLeft = _Variants355("triangle_left")
    """Variantes do ícone `triangle_left`."""
    TriangleRight = _Variants355("triangle_right")
    """Variantes do ícone `triangle_right`."""
    TriangleUp = _Variants58("triangle_up")
    """Variantes do ícone `triangle_up`."""
    Trophy = _Variants35("trophy")
    """Variantes do ícone `trophy`."""
    TrophyLock = _Variants23("trophy_lock")
    """Variantes do ícone `trophy_lock`."""
    TrophyOff = _Variants23("trophy_off")
    """Variantes do ícone `trophy_off`."""
    Tv = _Variants37("tv")
    """Variantes do ícone `tv`."""
    TvArrowRight = _Variants58("tv_arrow_right")
    """Variantes do ícone `tv_arrow_right`."""
    TvUsb = _Variants37("tv_usb")
    """Variantes do ícone `tv_usb`."""
    Txt = _Variants9("txt")
    """Variantes do ícone `txt`."""
    Umbrella = _Variants21("umbrella")
    """Variantes do ícone `umbrella`."""
    UninstallApp = _Variants21("uninstall_app")
    """Variantes do ícone `uninstall_app`."""
    Usb = _Variants28("usb")
    """Variantes do ícone `usb`."""
    UsbOff = _Variants28("usb_off")
    """Variantes do ícone `usb_off`."""
    UsbPlug = _Variants21("usb_plug")
    """Variantes do ícone `usb_plug`."""
    UsbStick = _Variants21("usb_stick")
    """Variantes do ícone `usb_stick`."""
    Vault = _Variants54("vault")
    """Variantes do ícone `vault`."""
    Vaultclosed = _Variants9("vaultclosed")
    """Variantes do ícone `vaultclosed`."""
    Vaultopen = _Variants9("vaultopen")
    """Variantes do ícone `vaultopen`."""
    Vector = _Variants9("vector")
    """Variantes do ícone `vector`."""
    VehicleBicycle = _Variants28("vehicle_bicycle")
    """Variantes do ícone `vehicle_bicycle`."""
    VehicleBus = _Variants28("vehicle_bus")
    """Variantes do ícone `vehicle_bus`."""
    VehicleCab = _Variants50("vehicle_cab")
    """Variantes do ícone `vehicle_cab`."""
    VehicleCableCar = _Variants41("vehicle_cable_car")
    """Variantes do ícone `vehicle_cable_car`."""
    VehicleCar = _Variants23("vehicle_car")
    """Variantes do ícone `vehicle_car`."""
    VehicleCarCollision = _Variants23("vehicle_car_collision")
    """Variantes do ícone `vehicle_car_collision`."""
    VehicleCarParking = _Variants88("vehicle_car_parking")
    """Variantes do ícone `vehicle_car_parking`."""
    VehicleCarProfile = _Variants28("vehicle_car_profile")
    """Variantes do ícone `vehicle_car_profile`."""
    VehicleCarProfileLtr = _Variants28("vehicle_car_profile_ltr")
    """Variantes do ícone `vehicle_car_profile_ltr`."""
    VehicleCarProfileLtrClock = _Variants28("vehicle_car_profile_ltr_clock")
    """Variantes do ícone `vehicle_car_profile_ltr_clock`."""
    VehicleCarProfileRtl = _Variants28("vehicle_car_profile_rtl")
    """Variantes do ícone `vehicle_car_profile_rtl`."""
    VehicleMotorcycle = _Variants23("vehicle_motorcycle")
    """Variantes do ícone `vehicle_motorcycle`."""
    VehicleRv = _Variants60("vehicle_rv")
    """Variantes do ícone `vehicle_rv`."""
    VehicleShip = _Variants28("vehicle_ship")
    """Variantes do ícone `vehicle_ship`."""
    VehicleSubway = _Variants28("vehicle_subway")
    """Variantes do ícone `vehicle_subway`."""
    VehicleSubwayClock = _Variants28("vehicle_subway_clock")
    """Variantes do ícone `vehicle_subway_clock`."""
    VehicleTractor = _Variants21("vehicle_tractor")
    """Variantes do ícone `vehicle_tractor`."""
    VehicleTrailer = _Variants60("vehicle_trailer")
    """Variantes do ícone `vehicle_trailer`."""
    VehicleTrailerArrowDown = _Variants60("vehicle_trailer_arrow_down")
    """Variantes do ícone `vehicle_trailer_arrow_down`."""
    VehicleTruck = _Variants28("vehicle_truck")
    """Variantes do ícone `vehicle_truck`."""
    VehicleTruckBag = _Variants21("vehicle_truck_bag")
    """Variantes do ícone `vehicle_truck_bag`."""
    VehicleTruckCheckmark = _Variants23("vehicle_truck_checkmark")
    """Variantes do ícone `vehicle_truck_checkmark`."""
    VehicleTruckCube = _Variants21("vehicle_truck_cube")
    """Variantes do ícone `vehicle_truck_cube`."""
    VehicleTruckProfile = _Variants23("vehicle_truck_profile")
    """Variantes do ícone `vehicle_truck_profile`."""
    Video = _Variants357("video")
    """Variantes do ícone `video`."""
    Video360 = _Variants359("video360")
    """Variantes do ícone `video360`, `video_360`."""
    Video360Off = _Variants58("video_360_off")
    """Variantes do ícone `video_360_off`."""
    VideoAdd = _Variants21("video_add")
    """Variantes do ícone `video_add`."""
    VideoBackgroundEffect = _Variants23("video_background_effect")
    """Variantes do ícone `video_background_effect`."""
    VideoBackgroundEffectHorizontal = _Variants23("video_background_effect_horizontal")
    """Variantes do ícone `video_background_effect_horizontal`."""
    VideoBluetooth = _Variants23("video_bluetooth")
    """Variantes do ícone `video_bluetooth`."""
    VideoChat = _Variants23("video_chat")
    """Variantes do ícone `video_chat`."""
    VideoClip = _Variants66("video_clip")
    """Variantes do ícone `video_clip`."""
    VideoClipMultiple = _Variants28("video_clip_multiple")
    """Variantes do ícone `video_clip_multiple`."""
    VideoClipOff = _Variants28("video_clip_off")
    """Variantes do ícone `video_clip_off`."""
    VideoClipOptimize = _Variants50("video_clip_optimize")
    """Variantes do ícone `video_clip_optimize`."""
    VideoClipWand = _Variants28("video_clip_wand")
    """Variantes do ícone `video_clip_wand`."""
    VideoLink = _Variants156("video_link")
    """Variantes do ícone `video_link`."""
    VideoMultiple = _Variants23("video_multiple")
    """Variantes do ícone `video_multiple`."""
    VideoOff = _Variants23("video_off")
    """Variantes do ícone `video_off`."""
    VideoPeople = _Variants183("video_people")
    """Variantes do ícone `video_people`."""
    VideoPerson = _Variants82("video_person")
    """Variantes do ícone `video_person`."""
    VideoPersonCall = _Variants90("video_person_call")
    """Variantes do ícone `video_person_call`."""
    VideoPersonClock = _Variants23("video_person_clock")
    """Variantes do ícone `video_person_clock`."""
    VideoPersonOff = _Variants21("video_person_off")
    """Variantes do ícone `video_person_off`."""
    VideoPersonPulse = _Variants50("video_person_pulse")
    """Variantes do ícone `video_person_pulse`."""
    VideoPersonSparkle = _Variants37("video_person_sparkle")
    """Variantes do ícone `video_person_sparkle`."""
    VideoPersonSparkleOff = _Variants21("video_person_sparkle_off")
    """Variantes do ícone `video_person_sparkle_off`."""
    VideoPersonStar = _Variants21("video_person_star")
    """Variantes do ícone `video_person_star`."""
    VideoPersonStarOff = _Variants21("video_person_star_off")
    """Variantes do ícone `video_person_star_off`."""
    VideoPlayPause = _Variants21("video_play_pause")
    """Variantes do ícone `video_play_pause`."""
    VideoProhibited = _Variants50("video_prohibited")
    """Variantes do ícone `video_prohibited`."""
    VideoRecording = _Variants58("video_recording")
    """Variantes do ícone `video_recording`."""
    VideoSecurity = _Variants21("video_security")
    """Variantes do ícone `video_security`."""
    VideoSettings = _Variants23("video_settings")
    """Variantes do ícone `video_settings`."""
    VideoShort = _Variants23("video_short")
    """Variantes do ícone `video_short`."""
    VideoShortMultiple = _Variants23("video_short_multiple")
    """Variantes do ícone `video_short_multiple`."""
    VideoSwitch = _Variants21("video_switch")
    """Variantes do ícone `video_switch`."""
    VideoSync = _Variants58("video_sync")
    """Variantes do ícone `video_sync`."""
    VideoUsb = _Variants23("video_usb")
    """Variantes do ícone `video_usb`."""
    ViewDesktop = _Variants21("view_desktop")
    """Variantes do ícone `view_desktop`."""
    ViewDesktopMobile = _Variants21("view_desktop_mobile")
    """Variantes do ícone `view_desktop_mobile`."""
    Vip = _Variants66("vip")
    """Variantes do ícone `vip`."""
    VirtualNetwork = _Variants28("virtual_network")
    """Variantes do ícone `virtual_network`."""
    VirtualNetworkToolbox = _Variants58("virtual_network_toolbox")
    """Variantes do ícone `virtual_network_toolbox`."""
    Visio = _Variants18("visio")
    """Variantes do ícone `visio`."""
    Voicemail = _Variants23("voicemail")
    """Variantes do ícone `voicemail`."""
    VoicemailArrowBack = _Variants60("voicemail_arrow_back")
    """Variantes do ícone `voicemail_arrow_back`."""
    VoicemailArrowForward = _Variants60("voicemail_arrow_forward")
    """Variantes do ícone `voicemail_arrow_forward`."""
    VoicemailArrowSubtract = _Variants58("voicemail_arrow_subtract")
    """Variantes do ícone `voicemail_arrow_subtract`."""
    VoicemailShield = _Variants90("voicemail_shield")
    """Variantes do ícone `voicemail_shield`."""
    VoicemailSubtract = _Variants60("voicemail_subtract")
    """Variantes do ícone `voicemail_subtract`."""
    Vote = _Variants28("vote")
    """Variantes do ícone `vote`."""
    Vsdx = _Variants9("vsdx")
    """Variantes do ícone `vsdx`."""
    Vssx = _Variants9("vssx")
    """Variantes do ícone `vssx`."""
    Vstx = _Variants9("vstx")
    """Variantes do ícone `vstx`."""
    WalkieTalkie = _Variants41("walkie_talkie")
    """Variantes do ícone `walkie_talkie`."""
    Wallet = _Variants23("wallet")
    """Variantes do ícone `wallet`."""
    WalletCreditCard = _Variants23("wallet_credit_card")
    """Variantes do ícone `wallet_credit_card`."""
    Wallpaper = _Variants21("wallpaper")
    """Variantes do ícone `wallpaper`."""
    Wand = _Variants37("wand")
    """Variantes do ícone `wand`."""
    Warning = _Variants39("warning")
    """Variantes do ícone `warning`."""
    WarningLockOpen = _Variants28("warning_lock_open")
    """Variantes do ícone `warning_lock_open`."""
    WarningShield = _Variants58("warning_shield")
    """Variantes do ícone `warning_shield`."""
    Washer = _Variants94("washer")
    """Variantes do ícone `washer`."""
    Water = _Variants88("water")
    """Variantes do ícone `water`."""
    WeatherBlowingSnow = _Variants92("weather_blowing_snow")
    """Variantes do ícone `weather_blowing_snow`."""
    WeatherCloudy = _Variants92("weather_cloudy")
    """Variantes do ícone `weather_cloudy`."""
    WeatherDrizzle = _Variants92("weather_drizzle")
    """Variantes do ícone `weather_drizzle`."""
    WeatherDuststorm = _Variants92("weather_duststorm")
    """Variantes do ícone `weather_duststorm`."""
    WeatherFog = _Variants92("weather_fog")
    """Variantes do ícone `weather_fog`."""
    WeatherHailDay = _Variants92("weather_hail_day")
    """Variantes do ícone `weather_hail_day`."""
    WeatherHailNight = _Variants92("weather_hail_night")
    """Variantes do ícone `weather_hail_night`."""
    WeatherHaze = _Variants92("weather_haze")
    """Variantes do ícone `weather_haze`."""
    WeatherHumidity = _Variants82("weather_humidity")
    """Variantes do ícone `weather_humidity`."""
    WeatherMoon = _Variants30("weather_moon")
    """Variantes do ícone `weather_moon`."""
    WeatherMoonOff = _Variants37("weather_moon_off")
    """Variantes do ícone `weather_moon_off`."""
    WeatherPartlyCloudyDay = _Variants108("weather_partly_cloudy_day")
    """Variantes do ícone `weather_partly_cloudy_day`."""
    WeatherPartlyCloudyNight = _Variants92("weather_partly_cloudy_night")
    """Variantes do ícone `weather_partly_cloudy_night`."""
    WeatherRain = _Variants92("weather_rain")
    """Variantes do ícone `weather_rain`."""
    WeatherRainShowersDay = _Variants92("weather_rain_showers_day")
    """Variantes do ícone `weather_rain_showers_day`."""
    WeatherRainShowersNight = _Variants92("weather_rain_showers_night")
    """Variantes do ícone `weather_rain_showers_night`."""
    WeatherRainSnow = _Variants92("weather_rain_snow")
    """Variantes do ícone `weather_rain_snow`."""
    WeatherSnow = _Variants92("weather_snow")
    """Variantes do ícone `weather_snow`."""
    WeatherSnowShowerDay = _Variants92("weather_snow_shower_day")
    """Variantes do ícone `weather_snow_shower_day`."""
    WeatherSnowShowerNight = _Variants92("weather_snow_shower_night")
    """Variantes do ícone `weather_snow_shower_night`."""
    WeatherSnowflake = _Variants361("weather_snowflake")
    """Variantes do ícone `weather_snowflake`."""
    WeatherSqualls = _Variants92("weather_squalls")
    """Variantes do ícone `weather_squalls`."""
    WeatherSunny = _Variants66("weather_sunny")
    """Variantes do ícone `weather_sunny`."""
    WeatherSunnyHigh = _Variants92("weather_sunny_high")
    """Variantes do ícone `weather_sunny_high`."""
    WeatherSunnyLow = _Variants249("weather_sunny_low")
    """Variantes do ícone `weather_sunny_low`."""
    WeatherThunderstorm = _Variants92("weather_thunderstorm")
    """Variantes do ícone `weather_thunderstorm`."""
    WebAsset = _Variants28("web_asset")
    """Variantes do ícone `web_asset`."""
    WheelchairAccess = _Variants28("wheelchair_access")
    """Variantes do ícone `wheelchair_access`."""
    Whiteboard = _Variants363("whiteboard")
    """Variantes do ícone `whiteboard`."""
    WhiteboardOff = _Variants28("whiteboard_off")
    """Variantes do ícone `whiteboard_off`."""
    Wifi = _Variants365("wifi")
    """Variantes do ícone `wifi`."""
    Wifi1 = _Variants92("wifi_1")
    """Variantes do ícone `wifi_1`."""
    Wifi2 = _Variants21("wifi_2")
    """Variantes do ícone `wifi_2`."""
    Wifi3 = _Variants21("wifi_3")
    """Variantes do ícone `wifi_3`."""
    Wifi4 = _Variants21("wifi_4")
    """Variantes do ícone `wifi_4`."""
    WifiLock = _Variants21("wifi_lock")
    """Variantes do ícone `wifi_lock`."""
    WifiOff = _Variants92("wifi_off")
    """Variantes do ícone `wifi_off`."""
    WifiSettings = _Variants58("wifi_settings")
    """Variantes do ícone `wifi_settings`."""
    WifiWarning = _Variants130("wifi_warning")
    """Variantes do ícone `wifi_warning`."""
    Wikipage = _Variants223("wikipage")
    """Variantes do ícone `wikipage`."""
    Window = _Variants66("window")
    """Variantes do ícone `window`."""
    WindowAd = _Variants21("window_ad")
    """Variantes do ícone `window_ad`."""
    WindowAdOff = _Variants58("window_ad_off")
    """Variantes do ícone `window_ad_off`."""
    WindowAdPerson = _Variants58("window_ad_person")
    """Variantes do ícone `window_ad_person`."""
    WindowApps = _Variants23("window_apps")
    """Variantes do ícone `window_apps`."""
    WindowArrowUp = _Variants28("window_arrow_up")
    """Variantes do ícone `window_arrow_up`."""
    WindowBrush = _Variants21("window_brush")
    """Variantes do ícone `window_brush`."""
    WindowBulletList = _Variants58("window_bullet_list")
    """Variantes do ícone `window_bullet_list`."""
    WindowBulletListAdd = _Variants58("window_bullet_list_add")
    """Variantes do ícone `window_bullet_list_add`."""
    WindowColumnOneFourthLeft = _Variants58("window_column_one_fourth_left")
    """Variantes do ícone `window_column_one_fourth_left`."""
    WindowColumnOneFourthLeftFocusLeft = _Variants181("window_column_one_fourth_left_focus_left")
    """Variantes do ícone `window_column_one_fourth_left_focus_left`."""
    WindowColumnOneFourthLeftFocusTop = _Variants181("window_column_one_fourth_left_focus_top")
    """Variantes do ícone `window_column_one_fourth_left_focus_top`."""
    WindowConsole = _Variants58("window_console")
    """Variantes do ícone `window_console`."""
    WindowDatabase = _Variants142("window_database")
    """Variantes do ícone `window_database`."""
    WindowDevEdit = _Variants60("window_dev_edit")
    """Variantes do ícone `window_dev_edit`."""
    WindowDevTools = _Variants28("window_dev_tools")
    """Variantes do ícone `window_dev_tools`."""
    WindowEdit = _Variants60("window_edit")
    """Variantes do ícone `window_edit`."""
    WindowFingerprint = _Variants23("window_fingerprint")
    """Variantes do ícone `window_fingerprint`."""
    WindowHeaderHorizontal = _Variants58("window_header_horizontal")
    """Variantes do ícone `window_header_horizontal`."""
    WindowHeaderHorizontalOff = _Variants58("window_header_horizontal_off")
    """Variantes do ícone `window_header_horizontal_off`."""
    WindowHeaderVertical = _Variants58("window_header_vertical")
    """Variantes do ícone `window_header_vertical`."""
    WindowInprivate = _Variants58("window_inprivate")
    """Variantes do ícone `window_inprivate`."""
    WindowInprivateAccount = _Variants58("window_inprivate_account")
    """Variantes do ícone `window_inprivate_account`."""
    WindowLocationTarget = _Variants58("window_location_target")
    """Variantes do ícone `window_location_target`."""
    WindowMultiple = _Variants28("window_multiple")
    """Variantes do ícone `window_multiple`."""
    WindowMultipleOff = _Variants28("window_multiple_off")
    """Variantes do ícone `window_multiple_off`."""
    WindowMultipleSwap = _Variants58("window_multiple_swap")
    """Variantes do ícone `window_multiple_swap`."""
    WindowNew = _Variants23("window_new")
    """Variantes do ícone `window_new`."""
    WindowNewRotate180 = _Variants23("window_new_rotate_180")
    """Variantes do ícone `window_new_rotate_180`."""
    WindowPlay = _Variants58("window_play")
    """Variantes do ícone `window_play`."""
    WindowSettings = _Variants58("window_settings")
    """Variantes do ícone `window_settings`."""
    WindowShield = _Variants28("window_shield")
    """Variantes do ícone `window_shield`."""
    WindowText = _Variants50("window_text")
    """Variantes do ícone `window_text`."""
    WindowToolbox = _Variants58("window_toolbox")
    """Variantes do ícone `window_toolbox`."""
    WindowWrench = _Variants23("window_wrench")
    """Variantes do ícone `window_wrench`."""
    Word = _Variants18("word")
    """Variantes do ícone `word`."""
    WorkIq = _Variants23("work_iq")
    """Variantes do ícone `work_iq`."""
    Wrench = _Variants54("wrench")
    """Variantes do ícone `wrench`."""
    WrenchScrewdriver = _Variants337("wrench_screwdriver")
    """Variantes do ícone `wrench_screwdriver`."""
    WrenchSettings = _Variants21("wrench_settings")
    """Variantes do ícone `wrench_settings`."""
    XboxConsole = _Variants21("xbox_console")
    """Variantes do ícone `xbox_console`."""
    XboxController = _Variants23("xbox_controller")
    """Variantes do ícone `xbox_controller`."""
    XboxControllerError = _Variants94("xbox_controller_error")
    """Variantes do ícone `xbox_controller_error`."""
    XboxOneConsole = _Variants58("xbox_one_console")
    """Variantes do ícone `xbox_one_console`."""
    Xlsx = _Variants9("xlsx")
    """Variantes do ícone `xlsx`."""
    Xltx = _Variants9("xltx")
    """Variantes do ícone `xltx`."""
    Xml = _Variants9("xml")
    """Variantes do ícone `xml`."""
    Xray = _Variants21("xray")
    """Variantes do ícone `xray`."""
    Xsn = _Variants9("xsn")
    """Variantes do ícone `xsn`."""
    Zip = _Variants9("zip")
    """Variantes do ícone `zip`."""
    ZoomFit = _Variants28("zoom_fit")
    """Variantes do ícone `zoom_fit`."""
    ZoomIn = _Variants78("zoom_in")
    """Variantes do ícone `zoom_in`."""
    ZoomOut = _Variants78("zoom_out")
    """Variantes do ícone `zoom_out`."""
