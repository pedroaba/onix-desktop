import { ActionButton } from '@/components/action-button'
import { Icon } from '@/components/icon'
import { WindowBar } from '@/components/layout/window-bar'
import { extensionOf, modifiedText, sizeText } from '@/lib/files/file-format'
import type { Item } from '@/lib/workspace-types'

export function Inspector({
  item,
  onClose,
  onFavorite,
  onSave,
  favoritePending,
  savePending,
}: {
  item: Item
  onClose: () => void
  onFavorite: () => void
  onSave: () => void
  favoritePending: boolean
  savePending: boolean
}) {
  const properties = [
    ['Provedor', item.provider],
    ['Localização', item.location],
    ['Modificado', modifiedText(item.modifiedOn)],
    ['Tamanho', sizeText(item.sizeBytes)],
  ]
  return (
    <aside
      className="flex min-h-0 flex-[0_0_min(var(--inspector-width),36%)] flex-col border-l border-border bg-sidebar"
      aria-label="Detalhes"
    >
      <WindowBar className="justify-between">
        <strong>Detalhes</strong>
        <ActionButton
          icon="dismiss"
          variant="quiet"
          onClick={onClose}
          aria-label="Fechar detalhes"
        />
      </WindowBar>
      <div className="min-h-0 overflow-auto p-[16px] pt-[20px]">
        <div className="grid gap-[6px] wrap-anywhere">
          <Icon
            name={item.isDirectory ? 'folder' : 'document'}
            size={24}
            className="text-onix-accent"
          />
          <h2 className="text-[17px] font-semibold">{item.name}</h2>
          <p className="text-[12px] text-muted-foreground">
            {item.isDirectory ? 'Pasta' : extensionOf(item.name) || 'Arquivo'}
          </p>
        </div>
        <div className="mt-[14px] mb-[22px] flex flex-wrap gap-[8px]">
          {!item.isDirectory && (
            <ActionButton
              icon="arrow_download"
              onClick={onSave}
              disabled={!item.isLocal || savePending}
              title={
                item.isLocal
                  ? 'Salvar cópia'
                  : 'Download indisponível para este exemplo'
              }
            >
              Baixar
            </ActionButton>
          )}
          <ActionButton
            icon="star"
            onClick={onFavorite}
            disabled={favoritePending}
          >
            {item.isFavorite
              ? 'Remover dos favoritos'
              : 'Adicionar aos favoritos'}
          </ActionButton>
        </div>
        <h3 className="mb-[10px] text-[13px]">Propriedades</h3>
        <dl className="grid gap-[10px]">
          {properties.map(([name, value]) => (
            <div
              key={name}
              className="grid grid-cols-2 gap-[6px] wrap-anywhere"
            >
              <dt className="text-[12px] text-muted-foreground">{name}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  )
}
