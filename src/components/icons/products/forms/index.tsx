import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source1 from './16-color-1x'
import Source0 from './16-color-1x.png'
import Source2 from './20-color-1x'
import Source3 from './24-color-1x'
import Source5 from './32-color-1x'
import Source4 from './32-color-1x.png'
import Source7 from './48-color-1x'
import Source6 from './48-color-1x.png'

const sources: readonly IconSource[] = [
  { format: 'png', size: 16, variant: 'color', density: '1x', image: Source0 },
  {
    format: 'svg',
    size: 16,
    variant: 'color',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'color',
    density: '1x',
    component: Source2,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'color',
    density: '1x',
    component: Source3,
  },
  { format: 'png', size: 32, variant: 'color', density: '1x', image: Source4 },
  {
    format: 'svg',
    size: 32,
    variant: 'color',
    density: '1x',
    component: Source5,
  },
  { format: 'png', size: 48, variant: 'color', density: '1x', image: Source6 },
  {
    format: 'svg',
    size: 48,
    variant: 'color',
    density: '1x',
    component: Source7,
  },
]

export type FormsIconProps = IconProps<'color', '1x', 'png' | 'svg'>

export default function FormsIcon(props: FormsIconProps) {
  return renderIcon(sources, props)
}
