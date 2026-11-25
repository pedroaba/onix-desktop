import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './12-filled-1x'
import Source1 from './12-regular-1x'

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
]

export type GlanceDefaultIconProps = IconProps<
  'regular' | 'filled',
  '1x',
  'svg'
>

export default function GlanceDefaultIcon(props: GlanceDefaultIconProps) {
  return renderIcon(sources, props)
}
