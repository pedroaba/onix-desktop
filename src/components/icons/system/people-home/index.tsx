import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-color-1x'
import Source1 from './20-color-1x'
import Source2 from './24-color-1x'
import Source3 from './28-color-1x'
import Source4 from './32-color-1x'
import Source5 from './48-color-1x'

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
  {
    format: 'svg',
    size: 28,
    variant: 'color',
    density: '1x',
    component: Source3,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'color',
    density: '1x',
    component: Source4,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'color',
    density: '1x',
    component: Source5,
  },
]

export type PeopleHomeIconProps = IconProps<'color', '1x', 'svg'>

export default function PeopleHomeIcon(props: PeopleHomeIconProps) {
  return renderIcon(sources, props)
}
