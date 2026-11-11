import tempfile
import unittest
from pathlib import Path

from PySide6.QtCore import QSettings

from src.data.sample_folders import create_sample_folders
from src.services.app_settings import AppSettings
from src.services.folder_store import FolderStore


class FavoritePersistenceTests(unittest.TestCase):
    def test_examples_have_stable_unique_ids(self):
        first = create_sample_folders()
        second = create_sample_folders()

        self.assertEqual(
            [folder.id for folder in first],
            [folder.id for folder in second],
        )
        self.assertEqual(len({folder.id for folder in first}), len(first))
        for original, recreated in zip(first, second):
            self.assertIsNot(original, recreated)

    def test_favorites_survive_reopening_and_removal(self):
        with tempfile.TemporaryDirectory() as directory:
            path = str(Path(directory) / "settings.ini")

            def create_settings() -> AppSettings:
                return AppSettings(settings=QSettings(path, QSettings.Format.IniFormat))

            first_store = FolderStore(create_sample_folders(), settings=create_settings())
            self.assertFalse(any(folder.is_favorite for folder in first_store.folders))
            selected_names = {"Documentos", "Fotos"}
            for folder in first_store.folders:
                folder.is_favorite = folder.name in selected_names
            first_store.save_favorites()

            second_store = FolderStore(create_sample_folders(), settings=create_settings())
            self.assertEqual(
                {folder.name for folder in second_store.folders if folder.is_favorite},
                selected_names,
            )

            for folder in second_store.folders:
                folder.is_favorite = folder.name == "Fotos"
            second_store.save_favorites()

            third_store = FolderStore(create_sample_folders(), settings=create_settings())
            self.assertEqual(
                {folder.name for folder in third_store.folders if folder.is_favorite},
                {"Fotos"},
            )
            for folder in third_store.folders:
                folder.is_favorite = False
            third_store.save_favorites()

            fourth_store = FolderStore(create_sample_folders(), settings=create_settings())
            self.assertFalse(any(folder.is_favorite for folder in fourth_store.folders))
            self.assertEqual(create_settings().load_favorite_ids(), set())


if __name__ == "__main__":
    unittest.main()
