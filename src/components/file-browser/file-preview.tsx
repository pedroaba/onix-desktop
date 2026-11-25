import Image from 'next/image'
import { useEffect, useState } from 'react'

import { workspace } from '@/lib/tauri/workspace'
import type { Item } from '@/lib/workspace-types'

const previewClasses =
  'grid h-(--preview-height) place-items-center overflow-hidden rounded-md bg-muted text-[12px] text-muted-foreground'

export function FilePreview({ item }: { item: Item }) {
  const [imageUrl, setImageUrl] = useState<string>()

  useEffect(() => {
    if (!item.isLocal) return
    let disposed = false
    let url: string | undefined
    void workspace
      .thumbnail(item.id)
      .then((image) => {
        if (!disposed) {
          url = URL.createObjectURL(new Blob([image], { type: 'image/png' }))
          setImageUrl(url)
        }
      })
      .catch(() => {
        // Sem miniatura, o card mantém a indicação de prévia indisponível.
      })
    return () => {
      disposed = true
      if (url) URL.revokeObjectURL(url)
    }
  }, [item.id, item.isLocal])

  if (item.id === 'sample-briefing') {
    return (
      <span className={previewClasses} title="Prévia ilustrativa">
        <span
          className="flex h-[112px] w-[88px] flex-col gap-[4px] overflow-hidden rounded-[4px] bg-background p-[10px] text-[10px]"
          aria-hidden="true"
        >
          <b>Onix</b>
          <strong>Briefing</strong>
          <i className="h-[28px] bg-primary" />
          <span className="[&>em]:my-[4px] [&>em]:block [&>em]:h-[2px] [&>em]:w-[85%] [&>em]:bg-input [&>em:nth-child(even)]:w-[63%]">
            <em />
            <em />
            <em />
            <em />
          </span>
        </span>
      </span>
    )
  }
  if (item.id === 'sample-planilha') {
    return (
      <span className={previewClasses} title="Prévia ilustrativa">
        <span
          className="flex h-[112px] w-[min(calc(100%-12px),184px)] flex-col overflow-hidden rounded-[4px] bg-background text-[10px]"
          aria-hidden="true"
        >
          <b className="bg-primary px-[8px] py-[5px] text-primary-foreground">
            Planejamento Q4
          </b>
          <i className="flex-1 [background:repeating-linear-gradient(0deg,transparent_0_14px,var(--input-border)_14px_15px),repeating-linear-gradient(90deg,transparent_0_44px,var(--input-border)_44px_45px),linear-gradient(110deg,var(--selection),transparent)]" />
        </span>
      </span>
    )
  }
  return (
    <span className={previewClasses}>
      {imageUrl ? (
        <Image
          className="block h-full w-full object-contain"
          unoptimized
          width={404}
          height={254}
          src={imageUrl}
          alt="Prévia do arquivo"
          onError={() => setImageUrl(undefined)}
        />
      ) : (
        <span>Prévia indisponível</span>
      )}
    </span>
  )
}
