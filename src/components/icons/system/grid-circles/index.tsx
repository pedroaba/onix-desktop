import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './24-filled-1x'
import Source1 from './24-regular-1x'
import Source2 from './28-filled-1x'
import Source3 from './28-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 24,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'regular',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'filled',
    density: '1x',
    component: Source2,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'regular',
    density: '1x',
    component: Source3,
  },
]

export type GridCirclesIconProps = IconProps<'regular' | 'filled', '1x', 'svg'>

export default function GridCirclesIcon(props: GridCirclesIconProps) {
  return renderIcon(sources, props)
}
