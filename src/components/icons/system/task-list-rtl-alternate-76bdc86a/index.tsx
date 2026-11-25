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

export type TaskListRtlAlternate76bdc86aIconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function TaskListRtlAlternate76bdc86aIcon(
  props: TaskListRtlAlternate76bdc86aIconProps
) {
  return renderIcon(sources, props)
}
