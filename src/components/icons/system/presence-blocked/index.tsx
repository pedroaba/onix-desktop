import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './10-regular-1x'
import Source1 from './12-regular-1x'
import Source2 from './16-regular-1x'
import Source3 from './20-regular-1x'
import Source4 from './24-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 10,
    variant: 'regular',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 12,
    variant: 'regular',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 16,
    variant: 'regular',
    density: '1x',
    component: Source2,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'regular',
    density: '1x',
    component: Source3,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'regular',
    density: '1x',
    component: Source4,
  },
]

export type PresenceBlockedIconProps = IconProps<'regular', '1x', 'svg'>

export default function PresenceBlockedIcon(props: PresenceBlockedIconProps) {
  return renderIcon(sources, props)
}
