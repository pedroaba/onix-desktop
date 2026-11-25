import { FilePreview } from '@/components/file-browser/file-preview'
import { Icon } from '@/components/icon'
import { Button } from '@/components/ui/button'
import { extensionOf, sizeText } from '@/lib/files/file-format'
import { cn } from '@/lib/utils'
import type { Item } from '@/lib/workspace-types'

const providerColors: Record<Item['provider'], string> = {
  OneDrive: 'text-provider-onedrive',
  'Google Drive': 'text-provider-google',
  Dropbox: 'text-provider-dropbox',
}

export function FileCard({
  item,
  selected,
  onActivate,
}: {
  item: Item
  selected: boolean
  onActivate: () => void
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      className={cn(
        'h-auto min-w-0 cursor-pointer flex-col items-stretch justify-start gap-[6px] rounded-lg border border-border bg-card p-[9px] text-left text-[13px] leading-[1.4] font-normal text-card-foreground',
        'hover:bg-card hover:text-card-foreground dark:hover:bg-card',
        selected ? 'border-ring' : 'hover:border-input'
      )}
      aria-pressed={item.isDirectory ? undefined : selected}
      onClick={onActivate}
    >
      {!item.isDirectory && <FilePreview item={item} />}
      <span
        className="flex min-h-(--control-height) min-w-0 items-center gap-[6px] px-[4px]"
        title={item.name}
      >
        <Icon name={item.isDirectory ? 'folder' : 'document'} />
        <strong className="truncate">{item.name}</strong>
      </span>
      <span className="flex min-w-0 items-center justify-between gap-[6px] text-[11px] text-muted-foreground">
        <span className={cn('truncate', providerColors[item.provider])}>
          {item.provider}
        </span>
        {!item.isDirectory && (
          <span className="truncate">
            {extensionOf(item.name) || 'Arquivo'} · {sizeText(item.sizeBytes)}
          </span>
        )}
      </span>
    </Button>
  )
}
