import { ActionButton } from '@/components/action-button'
import { FiltersButton } from '@/components/file-browser/filters-button'
import { WindowBar } from '@/components/layout/window-bar'
import type { Filters } from '@/lib/workspace-types'

export function ExplorerToolbar({
  pageTitle,
  query,
  filters,
  cards,
  editable,
  importing,
  onClearSearch,
  onChangeFilters,
  onChangeView,
  onImport,
  onCreateFolder,
}: {
  pageTitle: string
  query: string
  filters: Filters
  cards: boolean
  editable: boolean
  importing: boolean
  onClearSearch: () => void
  onChangeFilters: (filters: Filters) => void
  onChangeView: (cards: boolean) => void
  onImport: () => void
  onCreateFolder: () => void
}) {
  return (
    <WindowBar className="justify-between">
      <h1
        className="min-w-0 flex-1 truncate text-[13px] font-semibold"
        title={pageTitle}
      >
        {pageTitle}
      </h1>
      {query && (
        <div className="flex min-w-0 items-center gap-[4px] text-[11px] text-muted-foreground">
          <span className="truncate @max-[420px]:hidden" title={query}>
            Busca: {query}
          </span>
          <ActionButton
            icon="dismiss"
            variant="quiet"
            aria-label="Limpar busca"
            title="Limpar busca"
            onClick={onClearSearch}
          />
        </div>
      )}
      <div className="flex flex-none items-center gap-[8px]">
        <FiltersButton filters={filters} onChange={onChangeFilters} />
        <div
          className="flex items-center gap-[8px]"
          role="group"
          aria-label="Visualização"
        >
          <ActionButton
            icon="list"
            title="Lista"
            aria-label="Lista"
            aria-pressed={!cards}
            onClick={() => onChangeView(false)}
          />
          <ActionButton
            icon="apps"
            title="Cards"
            aria-label="Cards"
            aria-pressed={cards}
            onClick={() => onChangeView(true)}
          />
        </div>
        {editable && (
          <>
            <ActionButton
              icon="arrow_upload"
              disabled={importing}
              title="Adiciona arquivos locais a esta sessão"
              aria-label="Enviar arquivos"
              onClick={onImport}
            >
              <span className="@max-[510px]:hidden">
                {importing ? 'Adicionando…' : 'Enviar arquivos'}
              </span>
            </ActionButton>
            <ActionButton
              icon="add"
              variant="primary"
              title="Nova pasta"
              aria-label="Nova pasta"
              onClick={onCreateFolder}
            >
              <span className="@max-[510px]:hidden">Nova pasta</span>
            </ActionButton>
          </>
        )}
      </div>
    </WindowBar>
  )
}
