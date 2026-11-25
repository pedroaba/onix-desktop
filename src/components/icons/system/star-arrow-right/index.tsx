import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './32-light-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 32,
    variant: 'light',
    density: '1x',
    component: Source0,
  },
]

export type StarArrowRightIconProps = IconProps<'light', '1x', 'svg'>

export default function StarArrowRightIcon(props: StarArrowRightIconProps) {
  return renderIcon(sources, props)
}
