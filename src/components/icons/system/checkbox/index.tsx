import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-color-1x'
import Source1 from './20-color-1x'
import Source2 from './24-color-1x'

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
    size: 20,
    variant: 'color',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'color',
    density: '1x',
    component: Source2,
  },
]

export type CheckboxIconProps = IconProps<'color', '1x', 'svg'>

export default function CheckboxIcon(props: CheckboxIconProps) {
  return renderIcon(sources, props)
}
