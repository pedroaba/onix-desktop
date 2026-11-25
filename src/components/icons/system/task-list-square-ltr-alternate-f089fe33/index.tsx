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

export type TaskListSquareLtrAlternateF089fe33IconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function TaskListSquareLtrAlternateF089fe33Icon(
  props: TaskListSquareLtrAlternateF089fe33IconProps
) {
  return renderIcon(sources, props)
}
