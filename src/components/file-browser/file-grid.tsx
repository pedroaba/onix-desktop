import { FileCard } from '@/components/file-browser/file-card'
import type { Item } from '@/lib/workspace-types'

export function FileGrid({
  items,
  selectedId,
  onOpen,
}: {
  items: Item[]
  selectedId?: string
  onOpen: (item: Item) => void
}) {
  return (
    <div className="min-h-0 space-y-[20px] overflow-auto px-[24px] py-[16px]">
      {[
        { title: 'Pastas', directories: true },
        { title: 'Arquivos', directories: false },
      ].map(({ title, directories }) => {
        const group = items.filter((item) => item.isDirectory === directories)
        if (!group.length) return null
        return (
          <section key={title}>
            <h2 className="mb-[8px] text-[13px] font-semibold">{title}</h2>
            <div className="grid grid-cols-2 gap-[12px] @min-[610px]:grid-cols-3 @min-[880px]:grid-cols-4">
              {group.map((item) => (
                <FileCard
                  key={item.id}
                  item={item}
                  selected={item.id === selectedId}
                  onActivate={() => onOpen(item)}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
