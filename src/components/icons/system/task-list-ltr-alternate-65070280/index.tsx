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

export type TaskListLtrAlternate65070280IconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function TaskListLtrAlternate65070280Icon(
  props: TaskListLtrAlternate65070280IconProps
) {
  return renderIcon(sources, props)
}
