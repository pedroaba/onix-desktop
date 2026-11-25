'use client'

import { useEffect, useState } from 'react'

import { ActionButton } from '@/components/action-button'
import { errorMessage, workspace } from '@/lib/tauri/workspace'
import type { Snapshot } from '@/lib/workspace-types'

import { Workspace } from './workspace'

export function WorkspaceScreen() {
  const [snapshot, setSnapshot] = useState<Snapshot>()
  const [startupError, setStartupError] = useState('')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let active = true
    workspace
      .initialize()
      .then((data) => {
        if (active) setSnapshot(data)
      })
      .catch((error: unknown) => {
        if (active)
          setStartupError(errorMessage(error, 'Não foi possível abrir o Onix.'))
      })
    return () => {
      active = false
    }
  }, [attempt])

  if (snapshot) return <Workspace initial={snapshot} />
  return (
    <main
      className="flex h-full min-h-0 flex-col items-center justify-center gap-[6px] p-[20px] text-center"
      aria-live="polite"
    >
      <strong className="text-[17px]">
        {startupError || 'Abrindo o Onix…'}
      </strong>
      {startupError && (
        <ActionButton
          onClick={() => {
            setStartupError('')
            setAttempt(attempt + 1)
          }}
        >
          Tentar novamente
        </ActionButton>
      )}
    </main>
  )
}
