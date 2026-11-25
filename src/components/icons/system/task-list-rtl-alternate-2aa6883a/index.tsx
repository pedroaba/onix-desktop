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

export type TaskListRtlAlternate2aa6883aIconProps = IconProps<
  'filled',
  '1x',
  'svg'
>

export default function TaskListRtlAlternate2aa6883aIcon(
  props: TaskListRtlAlternate2aa6883aIconProps
) {
  return renderIcon(sources, props)
}
