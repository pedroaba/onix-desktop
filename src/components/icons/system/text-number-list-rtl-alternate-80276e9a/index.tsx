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

export type TextNumberListRtlAlternate80276e9aIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function TextNumberListRtlAlternate80276e9aIcon(
  props: TextNumberListRtlAlternate80276e9aIconProps
) {
  return renderIcon(sources, props)
}
