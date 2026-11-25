import type { IconName } from '@/components/icon'
import type { Section } from '@/lib/workspace-types'

export const sections: Record<Section, { label: string; icon: IconName }> = {
  all: { label: 'Todos os arquivos', icon: 'grid' },
  recent: { label: 'Recentes', icon: 'clock' },
  favorites: { label: 'Favoritos', icon: 'star' },
  onedrive: { label: 'OneDrive', icon: 'cloud' },
  trash: { label: 'Lixeira', icon: 'delete' },
  settings: { label: 'Configurações', icon: 'settings' },
}
