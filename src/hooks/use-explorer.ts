import { useCallback, useState } from 'react'

import { ancestorsOf, visibleItems } from '@/lib/files/file-queries'
import { sections } from '@/lib/workspace-sections'
import { defaultFilters, type Item, type Section } from '@/lib/workspace-types'

export function useExplorer(items: Item[]) {
  const [section, setSection] = useState<Section>('all')
  const [folder, setFolder] = useState<Item>()
  const [selectedId, setSelectedId] = useState<string>()
  const [cards, setCards] = useState(false)
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState(defaultFilters)
  const [searchOpen, setSearchOpen] = useState(false)

  const results = visibleItems(items, section, folder, query, filters)
  const selected = results.find((item) => item.id === selectedId)
  if (selectedId && !selected) setSelectedId(undefined)

  const ancestors = folder ? ancestorsOf(folder, items) : []
  const providerCount = new Set(results.map((item) => item.provider)).size
  const editable = folder
    ? folder.provider === 'OneDrive'
    : section === 'onedrive'
  const pageTitle =
    folder?.name ??
    (section === 'all' || section === 'onedrive'
      ? 'Arquivos'
      : sections[section].label)

  const navigate = useCallback((target: Section) => {
    setSection(target)
    setFolder(undefined)
    setQuery('')
    setFilters((previous) => ({ ...defaultFilters, byDate: previous.byDate }))
    setSelectedId(undefined)
  }, [])

  function openItem(item: Item) {
    if (!item.isDirectory) {
      setSelectedId(item.id)
      return
    }

    if (section === 'recent' || section === 'favorites') setSection('all')
    setFolder(item)
    setQuery('')
    setFilters((previous) => ({ ...defaultFilters, byDate: previous.byDate }))
    setSelectedId(undefined)
  }

  const openSearch = useCallback(() => {
    if (section === 'settings') navigate('all')
    setSearchOpen(true)
  }, [navigate, section])

  function openSearchResult(item: Item) {
    navigate('all')
    if (item.isDirectory) setFolder(item)
    else {
      setQuery(item.name)
      setSelectedId(item.id)
    }
    setSearchOpen(false)
  }

  function applySearch(text: string) {
    if (section === 'trash') navigate('all')
    setQuery(text)
    setSearchOpen(false)
  }

  return {
    section,
    folder,
    selected,
    cards,
    query,
    filters,
    searchOpen,
    results,
    ancestors,
    providerCount,
    editable,
    pageTitle,
    setSelectedId,
    setCards,
    setQuery,
    setFilters,
    setSearchOpen,
    navigate,
    openItem,
    openSearch,
    openSearchResult,
    applySearch,
  }
}
