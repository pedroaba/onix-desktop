import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './10-filled-1x'
import Source1 from './12-filled-1x'
import Source2 from './16-filled-1x'
import Source3 from './20-filled-1x'
import Source4 from './24-filled-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 10,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 12,
    variant: 'filled',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 16,
    variant: 'filled',
    density: '1x',
    component: Source2,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'filled',
    density: '1x',
    component: Source3,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'filled',
    density: '1x',
    component: Source4,
  },
]

export type PresenceBusyIconProps = IconProps<'filled', '1x', 'svg'>

export default function PresenceBusyIcon(props: PresenceBusyIconProps) {
  return renderIcon(sources, props)
}
