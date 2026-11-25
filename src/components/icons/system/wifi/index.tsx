import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-color-1x'
import Source1 from './24-color-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 20,
    variant: 'color',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'color',
    density: '1x',
    component: Source1,
  },
]

export type WifiIconProps = IconProps<'color', '1x', 'svg'>

export default function WifiIcon(props: WifiIconProps) {
  return renderIcon(sources, props)
}
