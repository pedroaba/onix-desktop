import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './12-filled-1x'
import Source1 from './12-regular-1x'
import Source2 from './20-filled-1x'
import Source3 from './20-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 12,
    variant: 'filled',
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
]

export type BezierCurveSquareIconProps = IconProps<
  'regular' | 'filled',
  '1x',
  'svg'
>

export default function BezierCurveSquareIcon(
  props: BezierCurveSquareIconProps
) {
  return renderIcon(sources, props)
}
