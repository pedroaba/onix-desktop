import { ActionButton } from '@/components/action-button'
import { Icon } from '@/components/icon'
import { WindowBar } from '@/components/layout/window-bar'
import { useIsMac } from '@/hooks/use-is-mac'
import { sections } from '@/lib/workspace-sections'
import type { Item, Section } from '@/lib/workspace-types'

import { ThemeToggle } from '../theme-toggle'

export function TitleBar({
  section,
  folder,
  ancestors,
  onNavigate,
  onOpen,
}: {
  section: Section
  folder?: Item
  ancestors: Item[]
  onNavigate: (section: Section) => void
  onOpen: (item: Item) => void
}) {
  const isMac = useIsMac()

  const root = folder?.provider === 'OneDrive' ? 'onedrive' : 'all'
  const label = section === 'settings' ? 'Provedores' : sections[section].label
  return (
    <WindowBar
      className="justify-between select-none"
      data-tauri-drag-region={isMac ? '' : undefined}
    >
      {folder && section !== 'settings' ? (
        <nav
          aria-label="Caminho da pasta"
          className="flex min-w-0 items-center gap-[6px] overflow-hidden"
        >
          <Icon
            className="text-muted-foreground"
            name={root === 'onedrive' ? 'cloud' : 'folder'}
          />
          <ActionButton
            variant="quiet"
            className="block truncate"
            onClick={() => onNavigate(root)}
          >
            {sections[root].label}
          </ActionButton>
          {ancestors.map((item) => (
            <span key={item.id} className="flex min-w-0 items-center gap-[6px]">
              <Icon className="text-muted-foreground" name="chevron_right" />
              <ActionButton
                variant="quiet"
                className="block truncate"
                onClick={() => onOpen(item)}
                title={item.name}
              >
                {item.name}
              </ActionButton>
            </span>
          ))}
          <Icon className="text-muted-foreground" name="chevron_right" />
          <strong
            className="truncate"
            aria-current="location"
            title={folder.name}
          >
            {folder.name}
          </strong>
        </nav>
      ) : (
        <span
          className="flex min-w-0 items-center gap-[6px]"
          data-tauri-drag-region={isMac ? '' : undefined}
        >
          <Icon
            className="text-muted-foreground"
            name={section === 'all' ? 'folder' : sections[section].icon}
          />
          <strong className="pointer-events-none">{label}</strong>
        </span>
      )}

      <ThemeToggle />
    </WindowBar>
  )
}
