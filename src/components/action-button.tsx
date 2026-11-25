import type { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { Icon, type IconName } from './icon'

const variants = {
  quiet: { button: 'ghost', classes: '' },
  primary: {
    button: 'default',
    classes: 'enabled:hover:bg-primary-hover enabled:active:bg-primary-pressed',
  },
  outline: {
    button: 'outline',
    classes: 'border-input bg-card enabled:hover:bg-accent dark:bg-card',
  },
} as const

export function ActionButton({
  icon,
  variant = 'outline',
  className,
  children,
  ...props
}: ComponentProps<'button'> & {
  icon?: IconName
  variant?: keyof typeof variants
}) {
  const { button, classes } = variants[variant]

  return (
    <Button
      type="button"
      variant={button}
      className={cn(
        'h-(--control-height) min-w-(--control-height) cursor-pointer gap-1.5 px-2 text-[13px] leading-[1.4] font-normal shadow-none',
        'aria-pressed:bg-accent aria-pressed:text-onix-accent',
        classes,
        className
      )}
      {...props}
    >
      {icon && <Icon name={icon} />}
      {children}
    </Button>
  )
}
