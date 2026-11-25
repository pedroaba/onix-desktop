import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './24-filled-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 24,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
]

export type MultiselectLtrAlternate02aeadafIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function MultiselectLtrAlternate02aeadafIcon(
  props: MultiselectLtrAlternate02aeadafIconProps
) {
  return renderIcon(sources, props)
}
