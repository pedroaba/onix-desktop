import { Icon } from '@/components/icon'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { modifiedText, sizeText } from '@/lib/files/file-format'
import { cn } from '@/lib/utils'
import type { Item } from '@/lib/workspace-types'

const headClass =
  'sticky top-0 z-1 h-[33px] truncate bg-sidebar pr-[12px] pl-[16px] text-left text-[12px] font-normal text-muted-foreground'
const cellClass =
  'h-(--row-height) truncate pr-[12px] pl-[16px] text-left text-muted-foreground'

export function FileTable({
  items,
  selectedId,
  onSelect,
  onOpen,
}: {
  items: Item[]
  selectedId?: string
  onSelect: (item: Item) => void
  onOpen: (item: Item) => void
}) {
  return (
    <div className="min-h-0 overflow-auto [&>[data-slot=table-container]]:overflow-visible">
      <Table
        className="w-full table-fixed border-separate border-spacing-0"
        aria-label="Arquivos e pastas"
      >
        <TableHeader>
          <TableRow className="border-0!">
            <TableHead className={headClass} scope="col">
              Nome
            </TableHead>
            <TableHead
              className={cn(headClass, 'w-[min(22%,179px)]')}
              scope="col"
            >
              Modificado
            </TableHead>
            <TableHead
              className={cn(headClass, 'w-[min(17%,129px)]')}
              scope="col"
            >
              Tamanho
            </TableHead>
            <TableHead
              className={cn(headClass, 'w-[min(30%,150px)]')}
              scope="col"
            >
              Provedor
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={item.id}
              data-state={item.id === selectedId ? 'selected' : undefined}
              className="cursor-default border-0 hover:bg-accent data-[state=selected]:bg-selection data-[state=selected]:hover:bg-selection"
              onClick={() => onSelect(item)}
              onDoubleClick={() => onOpen(item)}
            >
              <TableCell className="h-(--row-height) p-0">
                <button
                  type="button"
                  className="cursor-inherit flex h-(--row-height) w-full items-center gap-[6px] border-0 bg-transparent pr-[12px] pl-[16px] text-left text-foreground focus-visible:outline-offset-[-3px]!"
                  aria-pressed={item.id === selectedId}
                  title={item.name}
                  onClick={(event) => {
                    event.stopPropagation()
                    onSelect(item)
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault()
                      onOpen(item)
                    }
                    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                      event.preventDefault()
                      const nextIndex =
                        index + (event.key === 'ArrowUp' ? -1 : 1)
                      const next = items[nextIndex]
                      const rows = event.currentTarget.closest('tbody')?.rows
                      rows?.[nextIndex]?.querySelector('button')?.focus()
                      if (next) onSelect(next)
                    }
                  }}
                >
                  <Icon
                    className="text-muted-foreground"
                    name={item.isDirectory ? 'folder' : 'document'}
                  />
                  <span className="truncate">{item.name}</span>
                </button>
              </TableCell>
              <TableCell className={cellClass}>
                {modifiedText(item.modifiedOn)}
              </TableCell>
              <TableCell className={cellClass}>
                {item.isDirectory ? '—' : sizeText(item.sizeBytes)}
              </TableCell>
              <TableCell className={cellClass}>
                <span className="block truncate">
                  <Icon className="mr-[6px] align-[-.24em]" name="cloud" />
                  {item.provider}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
