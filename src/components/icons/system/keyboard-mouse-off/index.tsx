import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-filled-1x'
import Source1 from './20-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 20,
    variant: 'filled',
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
]

export type KeyboardMouseOffIconProps = IconProps<
  'regular' | 'filled',
  '1x',
  'svg'
>

export default function KeyboardMouseOffIcon(props: KeyboardMouseOffIconProps) {
  return renderIcon(sources, props)
}
