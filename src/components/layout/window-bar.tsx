import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export function WindowBar({ className, ...props }: ComponentProps<'header'>) {
  return (
    <header
      className={cn(
        'flex min-h-(--bar-height) min-w-0 items-center gap-[8px] border-b border-border pr-[12px] pl-[16px]',
        className
      )}
      {...props}
    />
  )
}
