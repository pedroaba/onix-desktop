import unittest

from src.models.folder import Folder
from src.services.folder_store import FolderStore, get_folder_store


class FolderStoreTests(unittest.TestCase):
    def test_shared_access_returns_same_instance(self):
        first = get_folder_store()
        second = get_folder_store()

        self.assertIs(first, second)

    def test_returned_list_does_not_expose_collection(self):
        folder = Folder("Documentos", "Exemplo local", 0)
        store = FolderStore([folder])

        received = store.folders
        received.clear()

        self.assertEqual(store.folders, [folder])

    def test_add_folder_notifies_listeners(self):
        store = FolderStore()
        notifications = []

        store.folders_changed.connect(lambda: notifications.append(True))

        folder = Folder("Projetos", "Exemplo local", 0)
        store.add_folder(folder)

        self.assertEqual(store.folders, [folder])
        self.assertEqual(notifications, [True])

    def test_invalid_names_do_not_change_collection(self):
        existing = Folder("Documentos", "Exemplo local", 0)
        store = FolderStore([existing])

        for name in ("   ", " DOCUMENTOS "):
            with self.subTest(name=name):
                folder = Folder(name, "Exemplo local", 0)

                with self.assertRaises(ValueError):
                    store.add_folder(folder)

        self.assertEqual(store.folders, [existing])


if __name__ == "__main__":
    unittest.main()
