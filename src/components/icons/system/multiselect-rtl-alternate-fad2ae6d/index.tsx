import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-filled-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 16,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
]

export type MultiselectRtlAlternateFad2ae6dIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function MultiselectRtlAlternateFad2ae6dIcon(
  props: MultiselectRtlAlternateFad2ae6dIconProps
) {
  return renderIcon(sources, props)
}
