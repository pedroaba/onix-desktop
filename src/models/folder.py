from dataclasses import dataclass, field
from datetime import date
from pathlib import Path
from uuid import uuid4


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

    id: str = field(default_factory=lambda: uuid4().hex)

    provider: str = "OneDrive"
    is_directory: bool = True
    parent_id: str | None = None
    local_path: Path | None = None
