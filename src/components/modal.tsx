import { type ReactNode, useRef } from 'react'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

export function Modal({
  label,
  onDismiss,
  children,
  className,
}: {
  label: string
  onDismiss: () => void
  children: ReactNode
  className?: string
}) {
  const content = useRef<HTMLDivElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onDismiss()
      }}
    >
      <DialogContent
        ref={content}
        showCloseButton={false}
        aria-describedby={undefined}
        className={cn(
          'max-h-[90vh] w-[min(400px,90vw)] max-w-none overflow-auto border-input bg-card p-4 text-card-foreground sm:max-w-none',
          className
        )}
        onOpenAutoFocus={(event) => {
          const focused = document.activeElement
          previousFocus.current =
            focused instanceof HTMLElement ? focused : null
          const input = content.current?.querySelector('input')
          if (input) {
            event.preventDefault()
            input.focus()
            input.select()
          }
        }}
        onCloseAutoFocus={(event) => {
          if (previousFocus.current?.isConnected) {
            event.preventDefault()
            previousFocus.current.focus()
          }
        }}
      >
        <DialogTitle className="sr-only">{label}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  )
}
