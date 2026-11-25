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

export type TaskListLtrAlternate25af58abIconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function TaskListLtrAlternate25af58abIcon(
  props: TaskListLtrAlternate25af58abIconProps
) {
  return renderIcon(sources, props)
}
