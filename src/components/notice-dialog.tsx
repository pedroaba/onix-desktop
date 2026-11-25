import { ActionButton } from '@/components/action-button'
import { Icon } from '@/components/icon'
import { Modal } from '@/components/modal'

export type Notice = { title: string; messages: string[] }

export function NoticeDialog({
  title,
  messages,
  onDismiss,
}: Notice & { onDismiss: () => void }) {
  return (
    <Modal label={title} onDismiss={onDismiss}>
      <div className="grid gap-[10px]">
        <h2 className="flex items-center gap-[6px] text-[17px] font-semibold">
          <Icon name="document" />
          {title}
        </h2>
        {messages.map((message, index) => (
          <p key={index} className="wrap-anywhere">
            {message}
          </p>
        ))}
        <div className="mt-[4px] flex justify-end gap-[8px]">
          <ActionButton onClick={onDismiss}>Fechar</ActionButton>
        </div>
      </div>
    </Modal>
  )
}
