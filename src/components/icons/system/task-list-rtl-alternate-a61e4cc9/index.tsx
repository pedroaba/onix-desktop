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

export type TaskListRtlAlternateA61e4cc9IconProps = IconProps<
  'regular',
  '1x',
  'svg'
>

export default function TaskListRtlAlternateA61e4cc9Icon(
  props: TaskListRtlAlternateA61e4cc9IconProps
) {
  return renderIcon(sources, props)
}
