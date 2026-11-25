import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './20-color-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 20,
    variant: 'color',
    density: '1x',
    component: Source0,
  },
]

export type CalendarPeopleIconProps = IconProps<'color', '1x', 'svg'>

export default function CalendarPeopleIcon(props: CalendarPeopleIconProps) {
  return renderIcon(sources, props)
}
