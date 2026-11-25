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

export type TaskListLtrAlternate777d1b47IconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function TaskListLtrAlternate777d1b47Icon(
  props: TaskListLtrAlternate777d1b47IconProps
) {
  return renderIcon(sources, props)
}
