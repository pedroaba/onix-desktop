import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './24-color-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 24,
    variant: 'color',
    density: '1x',
    component: Source0,
  },
]

export type FastForwardCircleIconProps = IconProps<'color', '1x', 'svg'>

export default function FastForwardCircleIcon(
  props: FastForwardCircleIconProps
) {
  return renderIcon(sources, props)
}
