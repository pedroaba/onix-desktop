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

export type TextNumberListLtrAlternate8bee32bfIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function TextNumberListLtrAlternate8bee32bfIcon(
  props: TextNumberListLtrAlternate8bee32bfIconProps
) {
  return renderIcon(sources, props)
}
