import { useState } from 'react'

import type { Notice } from '@/components/notice-dialog'
import { errorMessage, workspace } from '@/lib/tauri/workspace'
import type { Item } from '@/lib/workspace-types'

export function useCatalog(
  initialItems: Item[],
  setNotice: (notice: Notice) => void
) {
  const [items, setItems] = useState(initialItems)
  const [saving, setSaving] = useState(false)
  const [importing, setImporting] = useState(false)
  const [favoritePending, setFavoritePending] = useState(false)

  function appendItems(added: Item[]) {
    setItems((previous) => [...previous, ...added])
  }

  async function toggleFavorite(item: Item) {
    const favorite = !item.isFavorite
    setFavoritePending(true)
    try {
      await workspace.setFavorite(item.id, favorite)
      setItems((previous) =>
        previous.map((entry) =>
          entry.id === item.id ? { ...entry, isFavorite: favorite } : entry
        )
      )
    } catch (error) {
      setNotice({
        title: 'Favoritos',
        messages: [
          errorMessage(error, 'Não foi possível atualizar os favoritos.'),
        ],
      })
    } finally {
      setFavoritePending(false)
    }
  }

  async function importFiles(parentId: string | null) {
    setImporting(true)
    try {
      const imported = await workspace.addFiles(parentId)
      if (imported.items.length) appendItems(imported.items)
      if (imported.failures.length)
        setNotice({ title: 'Adicionar arquivos', messages: imported.failures })
    } catch (error) {
      setNotice({
        title: 'Adicionar arquivos',
        messages: [
          errorMessage(error, 'Não foi possível adicionar os arquivos.'),
        ],
      })
    } finally {
      setImporting(false)
    }
  }

  async function saveCopy(item: Item) {
    setSaving(true)
    try {
      await workspace.saveCopy(item.id)
    } catch (error) {
      setNotice({
        title: 'Salvar cópia',
        messages: [errorMessage(error, 'Não foi possível salvar a cópia.')],
      })
    } finally {
      setSaving(false)
    }
  }

  return {
    items,
    saving,
    importing,
    favoritePending,
    appendItems,
    toggleFavorite,
    importFiles,
    saveCopy,
  }
}
