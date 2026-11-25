import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-color-1.5x.png'
import Source4 from './16-color-1x'
import Source3 from './16-color-1x.png'
import Source1 from './16-color-2x.png'
import Source2 from './16-color-3x.png'
import Source5 from './20-color-1x'
import Source6 from './24-color-1x'
import Source7 from './32-color-1.5x.png'
import Source10 from './32-color-1x.png'
import Source8 from './32-color-2x.png'
import Source9 from './32-color-3x.png'
import Source11 from './48-color-1.5x.png'
import Source15 from './48-color-1x'
import Source14 from './48-color-1x.png'
import Source12 from './48-color-2x.png'
import Source13 from './48-color-3x.png'
import Source16 from './96-color-1.5x.png'
import Source19 from './96-color-1x.png'
import Source17 from './96-color-2x.png'
import Source18 from './96-color-3x.png'

const sources: readonly IconSource[] = [
  {
    format: 'png',
    size: 16,
    variant: 'color',
    density: '1.5x',
    image: Source0,
  },
  { format: 'png', size: 16, variant: 'color', density: '2x', image: Source1 },
  { format: 'png', size: 16, variant: 'color', density: '3x', image: Source2 },
  { format: 'png', size: 16, variant: 'color', density: '1x', image: Source3 },
  {
    format: 'svg',
    size: 16,
    variant: 'color',
    density: '1x',
    component: Source4,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'color',
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
    format: 'png',
    size: 32,
    variant: 'color',
    density: '1.5x',
    image: Source7,
  },
  { format: 'png', size: 32, variant: 'color', density: '2x', image: Source8 },
  { format: 'png', size: 32, variant: 'color', density: '3x', image: Source9 },
  { format: 'png', size: 32, variant: 'color', density: '1x', image: Source10 },
  {
    format: 'png',
    size: 48,
    variant: 'color',
    density: '1.5x',
    image: Source11,
  },
  { format: 'png', size: 48, variant: 'color', density: '2x', image: Source12 },
  { format: 'png', size: 48, variant: 'color', density: '3x', image: Source13 },
  { format: 'png', size: 48, variant: 'color', density: '1x', image: Source14 },
  {
    format: 'svg',
    size: 48,
    variant: 'color',
    density: '1x',
    component: Source15,
  },
  {
    format: 'png',
    size: 96,
    variant: 'color',
    density: '1.5x',
    image: Source16,
  },
  { format: 'png', size: 96, variant: 'color', density: '2x', image: Source17 },
  { format: 'png', size: 96, variant: 'color', density: '3x', image: Source18 },
  { format: 'png', size: 96, variant: 'color', density: '1x', image: Source19 },
]

export type M365IconProps = IconProps<
  'color',
  '1.5x' | '1x' | '2x' | '3x',
  'png' | 'svg'
>

export default function M365Icon(props: M365IconProps) {
  return renderIcon(sources, props)
}
