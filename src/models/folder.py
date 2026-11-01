from dataclasses import dataclass


@dataclass
class Folder:
    name: str
    status: str
    size_bytes: int
