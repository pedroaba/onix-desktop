import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 16,
    variant: 'regular',
    density: '1x',
    component: Source0,
  },
]

export type MultiselectRtlAlternateA6a75bb9IconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function MultiselectRtlAlternateA6a75bb9Icon(
  props: MultiselectRtlAlternateA6a75bb9IconProps
) {
  return renderIcon(sources, props)
}
