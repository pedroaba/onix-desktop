import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './28-filled-1x'
import Source1 from './28-regular-1x'
import Source2 from './32-light-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 28,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 28,
    variant: 'regular',
    density: '1x',
    component: Source1,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'light',
    density: '1x',
    component: Source2,
  },
]

export type PanelLeftDefaultIconProps = IconProps<
  'regular' | 'filled' | 'light',
  '1x',
  'svg'
>

export default function PanelLeftDefaultIcon(props: PanelLeftDefaultIconProps) {
  return renderIcon(sources, props)
}
