import { ActionButton } from '@/components/action-button'
import { ProviderCard } from '@/components/provider-card'

export function ProvidersPanel({
  account,
  connecting,
  loginError,
  onConnect,
}: {
  account?: string
  connecting: boolean
  loginError: string
  onConnect: () => void
}) {
  return (
    <main className="min-h-0 overflow-auto">
      <div className="mx-auto mt-8 mb-4 w-[min(100%-48px,766px)]">
        <div className="mb-2.5 flex items-center justify-between gap-[12px]">
          <h1 className="text-6 leading-8 font-semibold">Provedores</h1>
        </div>
        <p className="text-[12px] text-muted-foreground">
          Gerencie as contas de armazenamento conectadas ao Onix.
        </p>
        <section className="mt-6 grid gap-2.5">
          <h2 className="text-[13px]">OneDrive</h2>
          <ProviderCard
            name="OneDrive"
            description={
              <span aria-live="polite">
                {account ? account + ' · Conectado' : 'Conta Microsoft pessoal'}
              </span>
            }
            action={
              <ActionButton
                icon="cloud"
                disabled={connecting}
                onClick={onConnect}
              >
                {connecting
                  ? 'Conectando…'
                  : account
                    ? 'Desconectar'
                    : 'Conectar'}
              </ActionButton>
            }
          />
          {loginError && (
            <p role="alert" className="ml-[2px] text-destructive">
              {loginError}
            </p>
          )}
        </section>
        <section className="mt-6 grid gap-2.5">
          <h2 className="text-[13px]">Próximos provedores</h2>
          {[
            ['Google Drive', 'Armazenamento do Google'],
            ['Dropbox', 'Armazenamento do Dropbox'],
          ].map(([name, description]) => (
            <ProviderCard
              key={name}
              name={name}
              description={description}
              action={
                <span className="text-xs text-muted-foreground">Em breve</span>
              }
            />
          ))}
        </section>
      </div>
    </main>
  )
}
