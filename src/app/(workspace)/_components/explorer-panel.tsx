import { ExplorerToolbar } from '@/components/file-browser/explorer-toolbar'
import { Inspector } from '@/components/file-browser/inspector'
import { Results } from '@/components/file-browser/results'
import type { useCatalog } from '@/hooks/use-catalog'
import type { useExplorer } from '@/hooks/use-explorer'

export function ExplorerPanel({
  view,
  catalog,
  onCreateFolder,
}: {
  view: ReturnType<typeof useExplorer>
  catalog: ReturnType<typeof useCatalog>
  onCreateFolder: () => void
}) {
  const { section, folder, selected, results, providerCount } = view

  return (
    <div className="flex min-h-0">
      <main className="@container grid min-h-0 min-w-0 flex-1 grid-rows-[auto_minmax(0,1fr)_36px]">
        <ExplorerToolbar
          pageTitle={view.pageTitle}
          query={view.query}
          filters={view.filters}
          cards={view.cards}
          editable={view.editable}
          importing={catalog.importing}
          onClearSearch={() => view.setQuery('')}
          onChangeFilters={view.setFilters}
          onChangeView={view.setCards}
          onImport={() => void catalog.importFiles(folder?.id ?? null)}
          onCreateFolder={onCreateFolder}
        />
        <Results
          items={results}
          selectedId={selected?.id}
          cards={view.cards}
          trash={section === 'trash'}
          onSelect={(item) => view.setSelectedId(item.id)}
          onOpen={view.openItem}
        />
        <footer
          className="flex items-center border-t border-border px-[16px] text-[11px] text-muted-foreground"
          aria-live="polite"
        >
          {results.length} {results.length === 1 ? 'item' : 'itens'}
          {section === 'all' && providerCount > 0 && (
            <>
              {' '}
              · {providerCount}{' '}
              {providerCount === 1 ? 'provedor' : 'provedores'}
            </>
          )}
        </footer>
      </main>
      {selected && (
        <Inspector
          item={selected}
          onClose={() => view.setSelectedId(undefined)}
          onFavorite={() => void catalog.toggleFavorite(selected)}
          onSave={() => void catalog.saveCopy(selected)}
          favoritePending={catalog.favoritePending}
          savePending={catalog.saving}
        />
      )}
    </div>
  )
}
