import { type IconProps, type IconSource, renderIcon } from '../../icon-source'
import Source1 from './16-color-1.5x'
import Source0 from './16-color-1.5x.png'
import Source6 from './16-color-1x'
import Source5 from './16-color-1x.png'
import Source2 from './16-color-2x.png'
import Source3 from './16-color-3x.png'
import Source4 from './16-color-4x.png'
import Source11 from './20-color-1x'
import Source10 from './20-color-1x.png'
import Source7 from './20-color-2x.png'
import Source8 from './20-color-3x.png'
import Source9 from './20-color-4x.png'
import Source13 from './24-color-1.5x'
import Source12 from './24-color-1.5x.png'
import Source18 from './24-color-1x'
import Source17 from './24-color-1x.png'
import Source14 from './24-color-2x.png'
import Source15 from './24-color-3x.png'
import Source16 from './24-color-4x.png'
import Source20 from './32-color-1.5x'
import Source19 from './32-color-1.5x.png'
import Source25 from './32-color-1x'
import Source24 from './32-color-1x.png'
import Source21 from './32-color-2x.png'
import Source22 from './32-color-3x.png'
import Source23 from './32-color-4x.png'
import Source27 from './40-color-1.5x'
import Source26 from './40-color-1.5x.png'
import Source32 from './40-color-1x'
import Source31 from './40-color-1x.png'
import Source28 from './40-color-2x.png'
import Source29 from './40-color-3x.png'
import Source30 from './40-color-4x.png'
import Source34 from './48-color-1.5x'
import Source33 from './48-color-1.5x.png'
import Source39 from './48-color-1x'
import Source38 from './48-color-1x.png'
import Source35 from './48-color-2x.png'
import Source36 from './48-color-3x.png'
import Source37 from './48-color-4x.png'
import Source41 from './64-color-1.5x'
import Source40 from './64-color-1.5x.png'
import Source46 from './64-color-1x'
import Source45 from './64-color-1x.png'
import Source42 from './64-color-2x.png'
import Source43 from './64-color-3x.png'
import Source44 from './64-color-4x.png'
import Source48 from './96-color-1.5x'
import Source47 from './96-color-1.5x.png'
import Source53 from './96-color-1x'
import Source52 from './96-color-1x.png'
import Source49 from './96-color-2x.png'
import Source50 from './96-color-3x.png'
import Source51 from './96-color-4x.png'

const sources: readonly IconSource[] = [
  {
    format: 'png',
    size: 16,
    variant: 'color',
    density: '1.5x',
    image: Source0,
  },
  {
    format: 'svg',
    size: 16,
    variant: 'color',
    density: '1.5x',
    component: Source1,
  },
  { format: 'png', size: 16, variant: 'color', density: '2x', image: Source2 },
  { format: 'png', size: 16, variant: 'color', density: '3x', image: Source3 },
  { format: 'png', size: 16, variant: 'color', density: '4x', image: Source4 },
  { format: 'png', size: 16, variant: 'color', density: '1x', image: Source5 },
  {
    format: 'svg',
    size: 16,
    variant: 'color',
    density: '1x',
    component: Source6,
  },
  { format: 'png', size: 20, variant: 'color', density: '2x', image: Source7 },
  { format: 'png', size: 20, variant: 'color', density: '3x', image: Source8 },
  { format: 'png', size: 20, variant: 'color', density: '4x', image: Source9 },
  { format: 'png', size: 20, variant: 'color', density: '1x', image: Source10 },
  {
    format: 'svg',
    size: 20,
    variant: 'color',
    density: '1x',
    component: Source11,
  },
  {
    format: 'png',
    size: 24,
    variant: 'color',
    density: '1.5x',
    image: Source12,
  },
  {
    format: 'svg',
    size: 24,
    variant: 'color',
    density: '1.5x',
    component: Source13,
  },
  { format: 'png', size: 24, variant: 'color', density: '2x', image: Source14 },
  { format: 'png', size: 24, variant: 'color', density: '3x', image: Source15 },
  { format: 'png', size: 24, variant: 'color', density: '4x', image: Source16 },
  { format: 'png', size: 24, variant: 'color', density: '1x', image: Source17 },
  {
    format: 'svg',
    size: 24,
    variant: 'color',
    density: '1x',
    component: Source18,
  },
  {
    format: 'png',
    size: 32,
    variant: 'color',
    density: '1.5x',
    image: Source19,
  },
  {
    format: 'svg',
    size: 32,
    variant: 'color',
    density: '1.5x',
    component: Source20,
  },
  { format: 'png', size: 32, variant: 'color', density: '2x', image: Source21 },
  { format: 'png', size: 32, variant: 'color', density: '3x', image: Source22 },
  { format: 'png', size: 32, variant: 'color', density: '4x', image: Source23 },
  { format: 'png', size: 32, variant: 'color', density: '1x', image: Source24 },
  {
    format: 'svg',
    size: 32,
    variant: 'color',
    density: '1x',
    component: Source25,
  },
  {
    format: 'png',
    size: 40,
    variant: 'color',
    density: '1.5x',
    image: Source26,
  },
  {
    format: 'svg',
    size: 40,
    variant: 'color',
    density: '1.5x',
    component: Source27,
  },
  { format: 'png', size: 40, variant: 'color', density: '2x', image: Source28 },
  { format: 'png', size: 40, variant: 'color', density: '3x', image: Source29 },
  { format: 'png', size: 40, variant: 'color', density: '4x', image: Source30 },
  { format: 'png', size: 40, variant: 'color', density: '1x', image: Source31 },
  {
    format: 'svg',
    size: 40,
    variant: 'color',
    density: '1x',
    component: Source32,
  },
  {
    format: 'png',
    size: 48,
    variant: 'color',
    density: '1.5x',
    image: Source33,
  },
  {
    format: 'svg',
    size: 48,
    variant: 'color',
    density: '1.5x',
    component: Source34,
  },
  { format: 'png', size: 48, variant: 'color', density: '2x', image: Source35 },
  { format: 'png', size: 48, variant: 'color', density: '3x', image: Source36 },
  { format: 'png', size: 48, variant: 'color', density: '4x', image: Source37 },
  { format: 'png', size: 48, variant: 'color', density: '1x', image: Source38 },
  {
    format: 'svg',
    size: 48,
    variant: 'color',
    density: '1x',
    component: Source39,
  },
  {
    format: 'png',
    size: 64,
    variant: 'color',
    density: '1.5x',
    image: Source40,
  },
  {
    format: 'svg',
    size: 64,
    variant: 'color',
    density: '1.5x',
    component: Source41,
  },
  { format: 'png', size: 64, variant: 'color', density: '2x', image: Source42 },
  { format: 'png', size: 64, variant: 'color', density: '3x', image: Source43 },
  { format: 'png', size: 64, variant: 'color', density: '4x', image: Source44 },
  { format: 'png', size: 64, variant: 'color', density: '1x', image: Source45 },
  {
    format: 'svg',
    size: 64,
    variant: 'color',
    density: '1x',
    component: Source46,
  },
  {
    format: 'png',
    size: 96,
    variant: 'color',
    density: '1.5x',
    image: Source47,
  },
  {
    format: 'svg',
    size: 96,
    variant: 'color',
    density: '1.5x',
    component: Source48,
  },
  { format: 'png', size: 96, variant: 'color', density: '2x', image: Source49 },
  { format: 'png', size: 96, variant: 'color', density: '3x', image: Source50 },
  { format: 'png', size: 96, variant: 'color', density: '4x', image: Source51 },
  { format: 'png', size: 96, variant: 'color', density: '1x', image: Source52 },
  {
    format: 'svg',
    size: 96,
    variant: 'color',
    density: '1x',
    component: Source53,
  },
]

export type AlbumIconProps = IconProps<
  'color',
  '1.5x' | '1x' | '2x' | '3x' | '4x',
  'png' | 'svg'
>

export default function AlbumIcon(props: AlbumIconProps) {
  return renderIcon(sources, props)
}
