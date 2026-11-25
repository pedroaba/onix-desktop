import { cn } from '@/lib/utils'

import addIcon from '../../assets/icons/fluent/16/regular/add.svg'
import appsIcon from '../../assets/icons/fluent/16/regular/apps.svg'
import arrowDownloadIcon from '../../assets/icons/fluent/16/regular/arrow_download.svg'
import arrowUploadIcon from '../../assets/icons/fluent/16/regular/arrow_upload.svg'
import chevronRightIcon from '../../assets/icons/fluent/16/regular/chevron_right.svg'
import clockIcon from '../../assets/icons/fluent/16/regular/clock.svg'
import cloudIcon from '../../assets/icons/fluent/16/regular/cloud.svg'
import deleteIcon from '../../assets/icons/fluent/16/regular/delete.svg'
import dismissIcon from '../../assets/icons/fluent/16/regular/dismiss.svg'
import documentIcon from '../../assets/icons/fluent/16/regular/document.svg'
import filterIcon from '../../assets/icons/fluent/16/regular/filter.svg'
import folderIcon from '../../assets/icons/fluent/16/regular/folder.svg'
import gridIcon from '../../assets/icons/fluent/16/regular/grid.svg'
import listIcon from '../../assets/icons/fluent/16/regular/list.svg'
import searchIcon from '../../assets/icons/fluent/16/regular/search.svg'
import settingsIcon from '../../assets/icons/fluent/16/regular/settings.svg'
import stackIcon from '../../assets/icons/fluent/16/regular/stack.svg'
import starIcon from '../../assets/icons/fluent/16/regular/star.svg'

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
  const asset = icons[name]
  const url = typeof asset === 'string' ? asset : asset.src
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none inline-block flex-none bg-current mask-contain mask-center mask-no-repeat',
        className
      )}
      style={{ width: size, height: size, maskImage: 'url("' + url + '")' }}
    />
  )
}
