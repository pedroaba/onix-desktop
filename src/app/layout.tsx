import './globals.css'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

export const metadata: Metadata = { title: 'Onix Desktop' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
