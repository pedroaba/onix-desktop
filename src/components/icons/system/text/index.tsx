import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './12-filled-1x'
import Source1 from './12-regular-1x'
import Source2 from './16-filled-1x'
import Source3 from './16-regular-1x'
import Source4 from './32-filled-1x'
import Source5 from './32-light-1x'
import Source6 from './32-regular-1x'

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
    size: 16,
    variant: 'filled',
    density: '1x',
    component: Source2,
  },
  {
    format: 'svg',
    size: 16,
    variant: 'regular',
    density: '1x',
    component: Source3,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'filled',
    density: '1x',
    component: Source4,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'light',
    density: '1x',
    component: Source5,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'regular',
    density: '1x',
    component: Source6,
  },
]

export type TextIconProps = IconProps<
  'regular' | 'filled' | 'light',
  '1x',
  'svg'
>

export default function TextIcon(props: TextIconProps) {
  return renderIcon(sources, props)
}
