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

export type SidebarSearchRtlAlternate09121f54IconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function SidebarSearchRtlAlternate09121f54Icon(
  props: SidebarSearchRtlAlternate09121f54IconProps
) {
  return renderIcon(sources, props)
}
