import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './24-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 24,
    variant: 'regular',
    density: '1x',
    component: Source0,
  },
]

export type TaskListSquareLtrAlternate6e3f042dIconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function TaskListSquareLtrAlternate6e3f042dIcon(
  props: TaskListSquareLtrAlternate6e3f042dIconProps
) {
  return renderIcon(sources, props)
}
