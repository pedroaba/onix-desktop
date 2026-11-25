import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './16-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 16,
    variant: 'regular',
    density: '1x',
    component: Source0,
  },
]

export type TaskListSquareLtrAlternateD469ceb7IconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function TaskListSquareLtrAlternateD469ceb7Icon(
  props: TaskListSquareLtrAlternateD469ceb7IconProps
) {
  return renderIcon(sources, props)
}
