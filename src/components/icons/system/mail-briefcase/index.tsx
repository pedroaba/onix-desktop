import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source0 from './48-filled-1x'
import Source1 from './48-regular-1x'

const sources: readonly IconSource[] = [
  {
    format: 'svg',
    size: 48,
    variant: 'filled',
    density: '1x',
    component: Source0,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'regular',
    density: '1x',
    component: Source1,
  },
]

export type MailBriefcaseIconProps = IconProps<
  'regular' | 'filled',
  '1x',
  'svg'
>

export default function MailBriefcaseIcon(props: MailBriefcaseIconProps) {
  return renderIcon(sources, props)
}
