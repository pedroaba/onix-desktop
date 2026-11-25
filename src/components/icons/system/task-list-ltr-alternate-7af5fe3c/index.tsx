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

export type TaskListLtrAlternate7af5fe3cIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function TaskListLtrAlternate7af5fe3cIcon(
  props: TaskListLtrAlternate7af5fe3cIconProps
) {
  return renderIcon(sources, props)
}
