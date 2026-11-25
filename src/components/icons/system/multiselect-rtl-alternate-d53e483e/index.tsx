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

export type MultiselectRtlAlternateD53e483eIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function MultiselectRtlAlternateD53e483eIcon(
  props: MultiselectRtlAlternateD53e483eIconProps
) {
  return renderIcon(sources, props)
}
