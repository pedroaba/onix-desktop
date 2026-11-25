import { invoke } from '@tauri-apps/api/core'

import type { Item, Snapshot, Theme } from '@/lib/workspace-types'

export const workspace = {
  initialize: () => invoke<Snapshot>('initialize_workspace'),
  createFolder: (parentId: string | null, name: string) =>
    invoke<Item>('create_folder', { parentId, name }),
  addFiles: (parentId: string | null) =>
    invoke<{ items: Item[]; failures: string[] }>('add_local_files', {
      parentId,
    }),
  thumbnail: (id: string) => invoke<ArrayBuffer>('get_thumbnail', { id }),
  saveCopy: (id: string) => invoke<void>('save_copy', { id }),
  setTheme: (theme: Theme) => invoke<void>('set_theme', { theme }),
  setFavorite: (id: string, favorite: boolean) =>
    invoke<void>('set_favorite', { id, favorite }),
  connect: () => invoke<{ accountName: string }>('connect_onedrive'),
  disconnect: () => invoke<void>('disconnect_onedrive'),
}

export function errorMessage(error: unknown, fallback: string) {
  if (typeof error === 'string') return error
  return fallback
}
