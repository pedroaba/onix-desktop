import { FileGrid } from '@/components/file-browser/file-grid'
import { FileTable } from '@/components/file-browser/file-table'
import type { Item } from '@/lib/workspace-types'

type ResultsProps = {
  items: Item[]
  selectedId?: string
  cards: boolean
  trash: boolean
  onSelect: (item: Item) => void
  onOpen: (item: Item) => void
}

export function Results({
  items,
  selectedId,
  cards,
  trash,
  onSelect,
  onOpen,
}: ResultsProps) {
  if (!items.length) {
    return (
      <div
        className="flex min-h-0 flex-col items-center justify-center gap-[6px] p-[20px] text-center"
        role="status"
      >
        <strong className="text-[17px]">
          {trash ? 'Lixeira vazia' : 'Nenhum item encontrado'}
        </strong>
        <p className="text-[12px] text-muted-foreground">
          {trash
            ? 'Os itens excluídos aparecem aqui.'
            : 'Tente outro termo ou ajuste os filtros.'}
        </p>
      </div>
    )
  }

  return cards ? (
    <FileGrid items={items} selectedId={selectedId} onOpen={onOpen} />
  ) : (
    <FileTable
      items={items}
      selectedId={selectedId}
      onSelect={onSelect}
      onOpen={onOpen}
    />
  )
}
