import { ActionButton } from '@/components/action-button'
import { Icon } from '@/components/icon'
import { useIsMac } from '@/hooks/use-is-mac'
import { cn } from '@/lib/utils'
import { sections } from '@/lib/workspace-sections'
import type { Section } from '@/lib/workspace-types'

export function Sidebar({
  section,
  onNavigate,
  onSearch,
}: {
  section: Section
  onNavigate: (section: Section) => void
  onSearch: () => void
}) {
  const isMac = useIsMac()

  function navigationButton(key: Section) {
    return (
      <ActionButton
        key={key}
        variant="quiet"
        className="justify-start text-muted-foreground aria-[current=page]:bg-accent aria-[current=page]:font-semibold aria-[current=page]:text-foreground"
        icon={sections[key].icon}
        aria-current={section === key ? 'page' : undefined}
        onClick={() => onNavigate(key)}
      >
        {sections[key].label}
      </ActionButton>
    )
  }

  return (
    <aside
      className={cn(
        'relative flex flex-col border-r border-border bg-sidebar pt-[16px] pr-[12px] pb-[14px] pl-[10px] select-none',
        isMac && 'pt-[44px]'
      )}
    >
      {isMac && (
        <div
          className="absolute inset-x-0 top-0 h-[42px]"
          data-tauri-drag-region
        />
      )}
      <div className="mb-[16px] grid min-h-[32px] grid-cols-[26px_1fr_36px] items-center gap-[8px] pl-[4px]">
        <span className="grid size-[26px] place-items-center rounded-md bg-brand text-onix-accent">
          <Icon name="stack" />
        </span>
        <div>
          <strong className="block text-[14px] leading-[1.1]">Onix</strong>
          <small className="block text-[11px] text-muted-foreground">
            Espaço pessoal
          </small>
        </div>
        <ActionButton
          icon="search"
          variant="quiet"
          aria-label="Busca rápida"
          title="Busca rápida"
          aria-keyshortcuts={
            isMac ? 'Meta+F Meta+K Control+K' : 'Control+F Control+K'
          }
          onClick={onSearch}
        />
      </div>
      <nav
        aria-label="Navegação principal"
        className="flex min-h-0 flex-1 flex-col gap-[16px]"
      >
        <div className="flex flex-col gap-[8px]">
          {(['all', 'recent', 'favorites'] as const).map(navigationButton)}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between pl-[8px] text-[11px] text-muted-foreground">
            <span>Provedores</span>
            <ActionButton
              icon="add"
              variant="quiet"
              aria-label="Gerenciar provedores"
              title="Gerenciar provedores"
              onClick={() => onNavigate('settings')}
            />
          </div>
          {navigationButton('onedrive')}
        </div>
        <div className="mt-auto flex flex-col gap-[2px]">
          {(['trash', 'settings'] as const).map(navigationButton)}
        </div>
      </nav>
    </aside>
  )
}
