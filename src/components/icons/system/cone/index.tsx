import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-filled-1x'
import Source1 from './16-regular-1x'

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
]

export type ConeIconProps = IconProps<'regular' | 'filled', '1x', 'svg'>

export default function ConeIcon(props: ConeIconProps) {
  return renderIcon(sources, props)
}
