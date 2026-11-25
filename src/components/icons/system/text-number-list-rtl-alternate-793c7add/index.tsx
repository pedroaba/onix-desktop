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

export type TextNumberListRtlAlternate793c7addIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function TextNumberListRtlAlternate793c7addIcon(
  props: TextNumberListRtlAlternate793c7addIconProps
) {
  return renderIcon(sources, props)
}
