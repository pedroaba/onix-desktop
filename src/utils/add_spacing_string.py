def add_spacing_string(string: str, *, spacing_size: int = 1) -> str:
    spacing_unicode = "\u2003" * spacing_size
    return f"{spacing_unicode}{string}"
