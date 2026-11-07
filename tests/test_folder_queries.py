import unittest
from datetime import date

from src.models.folder import Folder
from src.services.folder_queries import get_recent_folders


class FolderQueryTests(unittest.TestCase):
    def test_recent_folders_filter_and_order(self):
        oldest = Folder(
            "No limite",
            "Exemplo local",
            0,
            modified_on=date(2026, 11, 1),
        )
        newest = Folder(
            "Hoje",
            "Exemplo local",
            0,
            modified_on=date(2026, 11, 7),
        )
        outside = Folder(
            "Antiga",
            "Exemplo local",
            0,
            modified_on=date(2026, 10, 31),
        )
        undated = Folder("Sem data", "Exemplo local", 0)
        future = Folder(
            "Futura",
            "Exemplo local",
            0,
            modified_on=date(2026, 11, 8),
        )

        folders = [oldest, outside, newest, undated, future]
        original_order = folders.copy()

        result = get_recent_folders(
            folders,
            today=date(2026, 11, 7),
        )

        self.assertEqual(result, [newest, oldest])
        self.assertEqual(folders, original_order)

    def test_empty_list(self):
        result = get_recent_folders(
            [],
            today=date(2026, 11, 7),
        )

        self.assertEqual(result, [])


if __name__ == "__main__":
    unittest.main()
