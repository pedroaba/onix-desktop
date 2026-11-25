import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-filled-1x'
import Source1 from './20-regular-1x'
import Source2 from './32-filled-1x'
import Source3 from './32-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 20,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'regular',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'filled',
    density: '1x',
    component: Source2,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'regular',
    density: '1x',
    component: Source3,
  },
]

export type DrinkBottleIconProps = IconProps<'regular' | 'filled', '1x', 'svg'>

export default function DrinkBottleIcon(props: DrinkBottleIconProps) {
  return renderIcon(sources, props)
}
