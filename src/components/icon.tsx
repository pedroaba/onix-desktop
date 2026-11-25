import addIcon from '@/components/icons/system/add'
import appsIcon from '@/components/icons/system/apps'
import arrowDownloadIcon from '@/components/icons/system/arrow-download'
import arrowUploadIcon from '@/components/icons/system/arrow-upload'
import chevronRightIcon from '@/components/icons/system/chevron-right'
import clockIcon from '@/components/icons/system/clock'
import cloudIcon from '@/components/icons/system/cloud'
import deleteIcon from '@/components/icons/system/delete'
import dismissIcon from '@/components/icons/system/dismiss'
import documentIcon from '@/components/icons/system/document'
import filterIcon from '@/components/icons/system/filter'
import folderIcon from '@/components/icons/system/folder'
import gridIcon from '@/components/icons/system/grid'
import listIcon from '@/components/icons/system/list'
import searchIcon from '@/components/icons/system/search'
import settingsIcon from '@/components/icons/system/settings'
import stackIcon from '@/components/icons/system/stack'
import starIcon from '@/components/icons/system/star'
import { cn } from '@/lib/utils'

const icons = {
  stack: stackIcon,
  search: searchIcon,
  grid: gridIcon,
  clock: clockIcon,
  star: starIcon,
  cloud: cloudIcon,
  delete: deleteIcon,
  settings: settingsIcon,
  folder: folderIcon,
  document: documentIcon,
  chevron_right: chevronRightIcon,
  filter: filterIcon,
  add: addIcon,
  dismiss: dismissIcon,
  arrow_upload: arrowUploadIcon,
  arrow_download: arrowDownloadIcon,
  list: listIcon,
  apps: appsIcon,
}

export type IconName = keyof typeof icons

export function Icon({
  name,
  size = 16,
  className,
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const Component = icons[name]
  return (
    <Component
      size={size}
      variant="regular"
      className={cn('pointer-events-none inline-block flex-none', className)}
    />
  )
}
