from dataclasses import dataclass
from datetime import date


@dataclass
class Folder:
    name: str
    status: str
    size_bytes: int
    modified_on: date | None = None
    file_count: int | None = None
    location: str = "OneDrive Pessoal"
    keep_on_device: bool = False
    is_favorite: bool = False
