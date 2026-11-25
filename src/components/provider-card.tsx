import type { ReactNode } from 'react'

import { Card } from '@/components/ui/card'

export function ProviderCard({
  name,
  description,
  action,
}: {
  name: string
  description: ReactNode
  action: ReactNode
}) {
  return (
    <Card className="flex-row items-center justify-between gap-[12px] border-border bg-card px-[14px] py-[9px] shadow-none">
      <div>
        <strong>{name}</strong>
        <div className="mt-0.5 text-xs text-muted-foreground">
          {description}
        </div>
      </div>
      {action}
    </Card>
  )
}
