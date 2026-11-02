from dataclasses import dataclass
from datetime import date


@dataclass
class Folder:
    name: str
    status: str
    size_bytes: int
    modified_on: date | None = None
