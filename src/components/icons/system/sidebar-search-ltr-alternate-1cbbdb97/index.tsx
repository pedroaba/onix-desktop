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

export type SidebarSearchLtrAlternate1cbbdb97IconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function SidebarSearchLtrAlternate1cbbdb97Icon(
  props: SidebarSearchLtrAlternate1cbbdb97IconProps
) {
  return renderIcon(sources, props)
}
