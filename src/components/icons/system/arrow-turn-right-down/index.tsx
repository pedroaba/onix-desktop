import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-filled-1x'
import Source1 from './20-regular-1x'
import Source2 from './48-filled-1x'
import Source3 from './48-regular-1x'

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
    size: 48,
    variant: 'filled',
    density: '1x',
    component: Source2,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'regular',
    density: '1x',
    component: Source3,
  },
]

export type ArrowTurnRightDownIconProps = IconProps<
  'regular' | 'filled',
  '1x',
  'svg'
>

export default function ArrowTurnRightDownIcon(
  props: ArrowTurnRightDownIconProps
) {
  return renderIcon(sources, props)
}
