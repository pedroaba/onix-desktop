import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-filled-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 20,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
]

export type MultiselectRtlAlternateF6544a7cIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function MultiselectRtlAlternateF6544a7cIcon(
  props: MultiselectRtlAlternateF6544a7cIconProps
) {
  return renderIcon(sources, props)
}
