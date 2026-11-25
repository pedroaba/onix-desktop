import { useState } from 'react'

import { ActionButton } from '@/components/action-button'
import { Modal } from '@/components/modal'
import { Input } from '@/components/ui/input'
import { errorMessage, workspace } from '@/lib/tauri/workspace'
import type { Item } from '@/lib/workspace-types'

export function FolderDialog({
  parent,
  onCreate,
  onDismiss,
}: {
  parent?: Item
  onCreate: (item: Item) => void
  onDismiss: () => void
}) {
  const [name, setName] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function save() {
    if (pending || !name.trim()) return
    setPending(true)
    try {
      onCreate(await workspace.createFolder(parent?.id ?? null, name))
    } catch (cause) {
      setError(errorMessage(cause, 'Não foi possível criar a pasta.'))
      setPending(false)
    }
  }

  return (
    <Modal
      label="Nova pasta"
      onDismiss={() => {
        if (!pending) onDismiss()
      }}
    >
      <form
        className="grid gap-[10px]"
        onSubmit={(event) => {
          event.preventDefault()
          void save()
        }}
      >
        <h2 className="text-[17px] font-semibold">Nova pasta</h2>
        <p className="text-xs text-muted-foreground">
          {parent?.name ?? 'OneDrive'}
        </p>
        <Input
          className="w-full border-input bg-sidebar px-[12px] py-[8px] text-foreground dark:bg-sidebar"
          value={name}
          placeholder="Nome da pasta"
          aria-label="Nome da pasta"
          disabled={pending}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'folder-error' : undefined}
          onChange={(event) => {
            setName(event.target.value)
            setError('')
          }}
        />
        {error && (
          <p id="folder-error" className="text-destructive" role="alert">
            {error}
          </p>
        )}
        <div className="mt-[4px] flex justify-end gap-[8px]">
          <ActionButton disabled={pending} onClick={onDismiss}>
            Cancelar
          </ActionButton>
          <ActionButton
            type="submit"
            variant="primary"
            disabled={pending || !name.trim()}
          >
            {pending ? 'Criando…' : 'Criar pasta'}
          </ActionButton>
        </div>
      </form>
    </Modal>
  )
}
