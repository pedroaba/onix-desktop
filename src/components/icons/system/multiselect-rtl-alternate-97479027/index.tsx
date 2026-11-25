import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 20,
    variant: 'regular',
    density: '1x',
    component: Source0,
  },
]

export type MultiselectRtlAlternate97479027IconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function MultiselectRtlAlternate97479027Icon(
  props: MultiselectRtlAlternate97479027IconProps
) {
  return renderIcon(sources, props)
}
