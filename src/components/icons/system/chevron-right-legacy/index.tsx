import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 20,
    variant: 'regular',
    density: '1x',
    component: Source0,
  },
]

export type ChevronRightLegacyIconProps = IconProps<'regular', '1x', 'svg'>

export default function ChevronRightLegacyIcon(
  props: ChevronRightLegacyIconProps
) {
  return renderIcon(sources, props)
}
