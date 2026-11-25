import { useId, useState } from 'react'

import { ActionButton } from '@/components/action-button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { defaultFilters, type Filters, providers } from '@/lib/workspace-types'

export function FiltersButton({
  filters,
  onChange,
}: {
  filters: Filters
  onChange: (filters: Filters) => void
}) {
  const [open, setOpen] = useState(false)
  const typeId = useId()
  const providerId = useId()
  const active =
    filters.type !== 'all' || filters.provider !== 'all' || filters.byDate

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ActionButton icon="filter">
          {active ? 'Filtrar •' : 'Filtrar'}
        </ActionButton>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="grid w-[238px] gap-2.5 rounded-lg p-3"
        aria-label="Filtrar por"
      >
        <h2 className="border-b border-border pb-[6px] text-[13px]">
          Filtrar por
        </h2>
        <div className="flex items-center justify-between gap-[8px] text-[12px]">
          <label htmlFor={typeId}>Tipo de item</label>
          <Select
            value={filters.type}
            onValueChange={(type) =>
              onChange({ ...filters, type: type as Filters['type'] })
            }
          >
            <SelectTrigger
              id={typeId}
              size="sm"
              className="w-[118px] bg-sidebar text-[12px] dark:bg-sidebar"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper" align="end">
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="folders">Pastas</SelectItem>
              <SelectItem value="files">Arquivos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between gap-[8px] text-[12px]">
          <label htmlFor={providerId}>Provedor</label>
          <Select
            value={filters.provider}
            onValueChange={(provider) =>
              onChange({
                ...filters,
                provider: provider as Filters['provider'],
              })
            }
          >
            <SelectTrigger
              id={providerId}
              size="sm"
              className="w-[118px] bg-sidebar text-[12px] dark:bg-sidebar"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper" align="end">
              <SelectItem value="all">Todos</SelectItem>
              {providers.map((provider) => (
                <SelectItem key={provider} value={provider}>
                  {provider}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <label className="flex items-center gap-[8px] text-[12px]">
          <Checkbox
            checked={filters.byDate}
            onCheckedChange={(checked) =>
              onChange({ ...filters, byDate: checked === true })
            }
          />
          Modificado em · mais recentes
        </label>
        <ActionButton
          variant="quiet"
          disabled={!active}
          onClick={() => {
            onChange(defaultFilters)
            setOpen(false)
          }}
        >
          Limpar filtros
        </ActionButton>
      </PopoverContent>
    </Popover>
  )
}
