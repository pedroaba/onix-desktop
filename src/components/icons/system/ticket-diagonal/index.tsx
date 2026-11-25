import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-filled-1x'
import Source1 from './16-regular-1x'
import Source2 from './20-filled-1x'
import Source3 from './20-regular-1x'
import Source4 from './24-filled-1x'
import Source5 from './24-regular-1x'
import Source6 from './28-filled-1x'
import Source7 from './28-regular-1x'
import Source8 from './32-filled-1x'
import Source9 from './32-light-1x'
import Source10 from './32-regular-1x'
import Source11 from './48-filled-1x'
import Source12 from './48-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 16,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 16,
    variant: 'regular',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'filled',
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
    variant: 'filled',
    density: '1x',
    component: Source4,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'regular',
    density: '1x',
    component: Source5,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'filled',
    density: '1x',
    component: Source6,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'regular',
    density: '1x',
    component: Source7,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'filled',
    density: '1x',
    component: Source8,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'light',
    density: '1x',
    component: Source9,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'regular',
    density: '1x',
    component: Source10,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'filled',
    density: '1x',
    component: Source11,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'regular',
    density: '1x',
    component: Source12,
  },
]

export type TicketDiagonalIconProps = IconProps<
  'regular' | 'filled' | 'light',
  '1x',
  'svg'
>

export default function TicketDiagonalIcon(props: TicketDiagonalIconProps) {
  return renderIcon(sources, props)
}
