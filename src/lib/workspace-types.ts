export type Theme = 'light' | 'dark'
export type Provider = 'OneDrive' | 'Google Drive' | 'Dropbox'
export type Section =
  'all' | 'recent' | 'favorites' | 'onedrive' | 'trash' | 'settings'
export type Item = {
  id: string
  name: string
  provider: Provider
  parentId: string | null
  modifiedOn: string
  sizeBytes: number
  isDirectory: boolean
  isFavorite: boolean
  isLocal: boolean
  location: string
}
export type Snapshot = { theme: Theme; items: Item[] }
export type Filters = {
  type: 'all' | 'folders' | 'files'
  provider: 'all' | Provider
  byDate: boolean
}
export const defaultFilters: Filters = {
  type: 'all',
  provider: 'all',
  byDate: false,
}
export const providers: Provider[] = ['OneDrive', 'Google Drive', 'Dropbox']
