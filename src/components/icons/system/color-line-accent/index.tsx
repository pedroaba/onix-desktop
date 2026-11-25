import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-regular-1x'
import Source1 from './20-regular-1x'
import Source2 from './24-regular-1x'
import Source3 from './28-regular-1x'
import Source4 from './32-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 16,
    variant: 'regular',
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
    size: 24,
    variant: 'regular',
    density: '1x',
    component: Source2,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'regular',
    density: '1x',
    component: Source3,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'regular',
    density: '1x',
    component: Source4,
  },
]

export type ColorLineAccentIconProps = IconProps<'regular', '1x', 'svg'>

export default function ColorLineAccentIcon(props: ColorLineAccentIconProps) {
  return renderIcon(sources, props)
}
