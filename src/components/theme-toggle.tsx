import { useTheme } from 'next-themes'

import Moon from '@/components/icons/system/weather-moon'
import Sun from '@/components/icons/system/weather-sunny'

import { Button } from './ui/button'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  function toggle() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button size="icon" variant="ghost" onClick={toggle}>
      {resolvedTheme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  )
}
