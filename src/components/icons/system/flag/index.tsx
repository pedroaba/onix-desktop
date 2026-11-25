import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-color-1x'
import Source1 from './16-filled-1x'
import Source2 from './16-regular-1x'
import Source3 from './20-color-1x'
import Source4 from './20-filled-1x'
import Source5 from './20-regular-1x'
import Source6 from './24-color-1x'
import Source7 from './24-filled-1x'
import Source8 from './24-regular-1x'
import Source9 from './28-color-1x'
import Source10 from './28-filled-1x'
import Source11 from './28-regular-1x'
import Source12 from './32-color-1x'
import Source13 from './32-filled-1x'
import Source14 from './32-light-1x'
import Source15 from './32-regular-1x'
import Source16 from './48-color-1x'
import Source17 from './48-filled-1x'
import Source18 from './48-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 16,
    variant: 'color',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 16,
    variant: 'filled',
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
    variant: 'color',
    density: '1x',
    component: Source3,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'filled',
    density: '1x',
    component: Source4,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'regular',
    density: '1x',
    component: Source5,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'color',
    density: '1x',
    component: Source6,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'filled',
    density: '1x',
    component: Source7,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'regular',
    density: '1x',
    component: Source8,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'color',
    density: '1x',
    component: Source9,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'filled',
    density: '1x',
    component: Source10,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'regular',
    density: '1x',
    component: Source11,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'color',
    density: '1x',
    component: Source12,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'filled',
    density: '1x',
    component: Source13,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'light',
    density: '1x',
    component: Source14,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'regular',
    density: '1x',
    component: Source15,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'color',
    density: '1x',
    component: Source16,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'filled',
    density: '1x',
    component: Source17,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'regular',
    density: '1x',
    component: Source18,
  },
]

export type FlagIconProps = IconProps<
  'regular' | 'color' | 'filled' | 'light',
  '1x',
  'svg'
>

export default function FlagIcon(props: FlagIconProps) {
  return renderIcon(sources, props)
}
