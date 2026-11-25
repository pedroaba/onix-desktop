import { useEffect, useState } from 'react'

import { SearchDialog } from '@/components/file-browser/search-dialog'
import { Sidebar } from '@/components/layout/sidebar'
import { TitleBar } from '@/components/layout/title-bar'
import { type Notice, NoticeDialog } from '@/components/notice-dialog'
import { useCatalog } from '@/hooks/use-catalog'
import { useExplorer } from '@/hooks/use-explorer'
import { useProviders } from '@/hooks/use-providers'
import type { Snapshot } from '@/lib/workspace-types'

import { ExplorerPanel } from './explorer-panel'
import { FolderDialog } from './folder-dialog'
import { ProvidersPanel } from './providers-panel'

export function Workspace({ initial }: { initial: Snapshot }) {
  const [notice, setNotice] = useState<Notice>()
  const [folderOpen, setFolderOpen] = useState(false)

  const catalog = useCatalog(initial.items, setNotice)
  const providers = useProviders()
  const view = useExplorer(catalog.items)
  const { section, folder, ancestors, searchOpen, openSearch } = view
  const hasOpenDialog = folderOpen || Boolean(notice) || searchOpen

  useEffect(() => {
    function shortcut(event: KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.repeat ||
        event.altKey ||
        event.shiftKey ||
        (!event.metaKey && !event.ctrlKey) ||
        !['f', 'k'].includes(event.key.toLowerCase())
      )
        return

      event.preventDefault()
      if (!hasOpenDialog) openSearch()
    }
    window.addEventListener('keydown', shortcut)
    return () => window.removeEventListener('keydown', shortcut)
  }, [hasOpenDialog, openSearch])

  return (
    <div className="grid h-full grid-cols-[var(--sidebar-width)_minmax(0,1fr)]">
      <Sidebar
        section={section}
        onNavigate={view.navigate}
        onSearch={openSearch}
      />
      <div className="grid min-h-0 min-w-0 grid-rows-[var(--bar-height)_minmax(0,1fr)]">
        <TitleBar
          section={section}
          folder={folder}
          ancestors={ancestors}
          onNavigate={view.navigate}
          onOpen={view.openItem}
        />
        {section === 'settings' ? (
          <ProvidersPanel
            account={providers.account}
            connecting={providers.connecting}
            loginError={providers.loginError}
            onConnect={() => void providers.toggleConnection()}
          />
        ) : (
          <ExplorerPanel
            view={view}
            catalog={catalog}
            onCreateFolder={() => setFolderOpen(true)}
          />
        )}
      </div>
      {searchOpen && (
        <SearchDialog
          query={view.query}
          items={catalog.items}
          onSearch={view.applySearch}
          onOpen={view.openSearchResult}
          onDismiss={() => view.setSearchOpen(false)}
        />
      )}
      {folderOpen && (
        <FolderDialog
          parent={folder}
          onDismiss={() => setFolderOpen(false)}
          onCreate={(item) => {
            catalog.appendItems([item])
            setFolderOpen(false)
          }}
        />
      )}
      {notice && (
        <NoticeDialog {...notice} onDismiss={() => setNotice(undefined)} />
      )}
    </div>
  )
}
