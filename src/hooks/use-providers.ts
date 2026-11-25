import { useState } from 'react'

import { errorMessage, workspace } from '@/lib/tauri/workspace'

export function useProviders() {
  const [account, setAccount] = useState<string>()
  const [loginError, setLoginError] = useState('')
  const [connecting, setConnecting] = useState(false)

  async function toggleConnection() {
    setConnecting(true)
    setLoginError('')
    try {
      if (account) {
        await workspace.disconnect()
        setAccount(undefined)
      } else {
        const connected = await workspace.connect()
        setAccount(connected.accountName)
      }
    } catch (error) {
      setLoginError(
        errorMessage(
          error,
          'Não foi possível concluir a conexão com o OneDrive.'
        )
      )
    } finally {
      setConnecting(false)
    }
  }

  return {
    account,
    connecting,
    loginError,
    toggleConnection,
  }
}
