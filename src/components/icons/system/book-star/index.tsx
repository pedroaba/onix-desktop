import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-color-1x'
import Source1 from './20-filled-1x'
import Source2 from './20-regular-1x'
import Source3 from './24-color-1x'
import Source4 from './24-filled-1x'
import Source5 from './24-regular-1x'

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
    size: 20,
    variant: 'filled',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 20,
    variant: 'regular',
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
  {
    format: 'svg',
    size: 24,
    variant: 'filled',
    density: '1x',
    component: Source4,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'regular',
    density: '1x',
    component: Source5,
  },
]

export type BookStarIconProps = IconProps<
  'regular' | 'color' | 'filled',
  '1x',
  'svg'
>

export default function BookStarIcon(props: BookStarIconProps) {
  return renderIcon(sources, props)
}
