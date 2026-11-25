import { useRef, useState } from 'react'

import { ActionButton } from '@/components/action-button'
import { Modal } from '@/components/modal'
import { Input } from '@/components/ui/input'
import { matchesName } from '@/lib/files/file-queries'
import type { Item } from '@/lib/workspace-types'

export function SearchDialog({
  query,
  items,
  onSearch,
  onOpen,
  onDismiss,
}: {
  query: string
  items: Item[]
  onSearch: (query: string) => void
  onOpen: (item: Item) => void
  onDismiss: () => void
}) {
  const [draft, setDraft] = useState(query)
  const input = useRef<HTMLInputElement>(null)
  const list = useRef<HTMLUListElement>(null)
  const matches = items
    .filter((item) => matchesName(item.name, draft))
    .slice(0, 6)

  return (
    <Modal
      label="Busca rápida"
      onDismiss={onDismiss}
      className="w-[min(500px,90vw)]"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()
          onSearch(draft.trim())
        }}
      >
        <Input
          className="w-full border-input bg-sidebar px-[12px] py-[8px] text-foreground dark:bg-sidebar"
          ref={input}
          value={draft}
          aria-label="Buscar arquivos e pastas"
          placeholder="Buscar arquivos e pastas…"
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown' && matches.length) {
              event.preventDefault()
              list.current?.querySelector('button')?.focus()
            }
          }}
        />
      </form>
      <ul
        ref={list}
        className="my-[10px] min-h-[228px] list-none p-0"
        aria-label="Resultados da busca rápida"
      >
        {matches.map((item, index) => (
          <li key={item.id}>
            <ActionButton
              className="min-h-[36px] w-full justify-start"
              variant="quiet"
              icon={item.isDirectory ? 'folder' : 'document'}
              onClick={() => onOpen(item)}
              onKeyDown={(event) => {
                if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
                event.preventDefault()
                const next = index + (event.key === 'ArrowDown' ? 1 : -1)
                if (next < 0) input.current?.focus()
                else list.current?.querySelectorAll('button')[next]?.focus()
              }}
            >
              <span className="truncate">{item.name}</span>
              <small className="ml-auto flex-none text-muted-foreground">
                {item.provider}
              </small>
            </ActionButton>
          </li>
        ))}
        {!matches.length && (
          <li className="p-[8px] text-muted-foreground">
            Nenhum item encontrado
          </li>
        )}
      </ul>
      <p className="text-[11px] text-muted-foreground">
        Enter para buscar · Esc para fechar
      </p>
    </Modal>
  )
}
