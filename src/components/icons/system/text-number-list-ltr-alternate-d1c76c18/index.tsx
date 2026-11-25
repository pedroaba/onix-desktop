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

export type TextNumberListLtrAlternateD1c76c18IconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function TextNumberListLtrAlternateD1c76c18Icon(
  props: TextNumberListLtrAlternateD1c76c18IconProps
) {
  return renderIcon(sources, props)
}
