from dataclasses import dataclass, field
from pathlib import Path

_ROOT = Path(__file__).resolve().parents[1]
_ASSETS = _ROOT / "assets" / "icons"
_OUTPUT = _ROOT / "src" / "loaders" / "icons.py"
_MARKER = "# Catálogo gerado por uv run python -m scripts.generate_icons"

_VARIANT_DOCS = {
    "Brands": "Versões oficiais ou de marca, como o logotipo do OneDrive.",
    "Fluent": "Variantes da família Microsoft Fluent.",
    "Files": "Ícones do Fluent para tipos de arquivo e pastas.",
    "Launch": "Ícones do Fluent para identificar aplicativos do Microsoft 365.",
    "Regular": "Versão em contorno com a espessura de traço padrão.",
    "Filled": "Versão com formas preenchidas.",
    "Light": "Versão em contorno com traço mais fino.",
    "Color": "Versão com as cores originais da família do ícone.",
    "Svg": "Arquivo vetorial SVG, adequado para renderizar em diferentes tamanhos.",
    "Png": "Imagem bitmap PNG com resolução definida pelo arquivo.",
}


@dataclass
class Variant:
    directory: str = ""
    children: dict[str, Variant] = field(default_factory=dict)
    stems: set[str] = field(default_factory=set)
    file: Path | None = None


def attribute_name(part: str) -> str:
    if part.isdecimal():
        return f"Size{part}"
    if part.endswith("x") and part[:-1].replace(".", "").isdecimal():
        return f"Scale{part.replace('.', '_')}"
    if part == "chevron-right":
        # Também existe chevron_right na mesma pasta.
        return "ChevronDashRight"
    return "".join(word.capitalize() for word in part.replace("-", "_").split("_"))


def scan_assets() -> dict[str, Variant]:
    icons: dict[str, Variant] = {}
    for directory, _, files in _ASSETS.walk():
        folders = directory.relative_to(_ASSETS).parts
        for filename in files:
            file = Path(filename)
            if file.suffix not in {".svg", ".png"}:
                continue

            variant = icons.setdefault(attribute_name(file.stem), Variant())
            variant.stems.add(file.stem)
            for folder in folders:
                variant = variant.children.setdefault(attribute_name(folder), Variant(folder))
                variant.stems.add(file.stem)

            extension = file.suffix[1:].capitalize()
            if extension in variant.children:
                raise ValueError(f"Mais de um arquivo para a mesma variante de {file.stem}")
            variant.children[extension] = Variant(stems={file.stem}, file=file)

    return icons


def variant_docstring(name: str, variant: Variant) -> str:
    if variant.directory.isdecimal():
        return f"Variantes desenhadas para o tamanho nominal de {variant.directory} px."
    if name.startswith("Scale"):
        scale = variant.directory[:-1].replace(".", ",")
        return f"Arquivos para telas com densidade de {scale} vezes a escala base."
    return _VARIANT_DOCS[name]


def generate_catalog(icons: dict[str, Variant]) -> str:
    lines: list[str] = []
    classes: dict[tuple[str, ...], str] = {}

    def make_class(variant: Variant, stem: str) -> str:
        assignments: list[str] = []
        for name, child in sorted(variant.children.items()):
            child_stem = stem if stem in child.stems else min(child.stems)
            name_arg = "name" if child_stem == stem else f'"{child_stem}"'
            if child.file is not None:
                filename = (
                    f'f"{{name}}{child.file.suffix}"'
                    if child_stem == stem
                    else f'"{child.file.name}"'
                )
                expression = f"Icon({name_arg}, folder / {filename})"
            else:
                class_name = make_class(child, child_stem)
                expression = f'{class_name}({name_arg}, folder / "{child.directory}")'
            assignments.append(f"        self.{name} = {expression}")
            assignments.append(f'        """{variant_docstring(name, child)}"""')

        default_format = next((ext for ext in ("Svg", "Png") if ext in variant.children), None)
        base = ""
        class_doc = "Agrupa as próximas variantes disponíveis deste ícone."
        if default_format is not None:
            base = "(Icon)"
            class_doc = (
                f"Agrupa variantes e usa {default_format.upper()} para renderizar por padrão."
            )
            assignments.append(f"        super().__init__(name, self.{default_format}._file)")

        body = tuple(assignments)
        if body not in classes:
            class_name = f"_Variants{len(classes) + 1}"
            classes[body] = class_name
            lines.extend(
                [
                    f"class {class_name}{base}:",
                    f'    """{class_doc}"""',
                    "",
                    "    def __init__(self, name: str, folder: Path = Path()) -> None:",
                    *assignments,
                    "",
                    "",
                ]
            )

        return classes[body]

    declarations = [
        "class Icons:",
        '    """Catálogo de ícones de assets/icons organizado por nome.',
        "",
        "    Escolha um ícone e siga os atributos até a variante desejada.",
        "    Por exemplo, Icons.Folder.Fluent.Size16.Regular seleciona a pasta",
        "    do Fluent em contorno de 16 px.",
        '    """',
        "",
    ]
    for name, variant in sorted(icons.items()):
        stem = min(variant.stems)
        class_name = make_class(variant, stem)
        assignment = f'    {name} = {class_name}("{stem}")'
        if len(assignment) > 100:
            assignment = f'    {name} = {class_name}(\n        "{stem}"\n    )'
        declarations.append(assignment)
        stems = ", ".join(f"`{value}`" for value in sorted(variant.stems))
        declarations.append(f'    """Variantes do ícone {stems}."""')

    return "\n".join([*lines, *declarations]) + "\n"


if __name__ == "__main__":
    source, marker, _ = _OUTPUT.read_text(encoding="utf-8").partition(_MARKER)
    if not marker:
        raise ValueError(f"Marcador de geração ausente em {_OUTPUT}")
    catalog = generate_catalog(scan_assets())
    _OUTPUT.write_text(f"{source}{marker}\n\n\n{catalog}", encoding="utf-8")
