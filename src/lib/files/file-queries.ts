import { localDateKey } from '@/lib/files/file-format'
import type { Filters, Item, Section } from '@/lib/workspace-types'

const collator = new Intl.Collator('pt-BR', { sensitivity: 'accent' })

export function matchesName(name: string, query: string) {
  const fold = (value: string) =>
    value.normalize('NFC').toLocaleLowerCase('pt-BR').replaceAll('ß', 'ss')
  return fold(name).includes(fold(query.trim()))
}

export function visibleItems(
  items: Item[],
  section: Section,
  folder: Item | undefined,
  query: string,
  filters: Filters
) {
  if (section === 'trash' || section === 'settings') return []
  const today = new Date()
  const earliest = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 6
  )
  const recentStart = localDateKey(earliest)
  const recentEnd = localDateKey(today)

  return items
    .filter((item) => {
      if (section === 'onedrive' && item.provider !== 'OneDrive') return false
      if (!query && (folder || section === 'all' || section === 'onedrive')) {
        if (item.parentId !== (folder?.id ?? null)) return false
      }
      if (
        section === 'recent' &&
        (item.modifiedOn < recentStart || item.modifiedOn > recentEnd)
      )
        return false
      if (section === 'favorites' && !item.isFavorite) return false
      if (
        filters.type !== 'all' &&
        item.isDirectory !== (filters.type === 'folders')
      )
        return false
      if (filters.provider !== 'all' && item.provider !== filters.provider)
        return false
      return matchesName(item.name, query)
    })
    .sort((left, right) => {
      if (left.isDirectory !== right.isDirectory)
        return left.isDirectory ? -1 : 1
      if (filters.byDate || section === 'recent') {
        const dateOrder = right.modifiedOn.localeCompare(left.modifiedOn)
        if (dateOrder) return dateOrder
      }
      return collator.compare(left.name, right.name)
    })
}

export function ancestorsOf(folder: Item, items: Item[]) {
  const ancestors: Item[] = []
  const byId = new Map(items.map((item) => [item.id, item]))
  let parent = byId.get(folder.parentId ?? '')
  while (parent) {
    ancestors.unshift(parent)
    parent = byId.get(parent.parentId ?? '')
  }
  return ancestors
}
