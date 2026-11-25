import Image, { type StaticImageData } from 'next/image'
import type { ComponentType, SVGProps } from 'react'

type SvgSource = {
  format: 'svg'
  size: number
  variant: string
  density: string
  component: ComponentType<SVGProps<SVGSVGElement>>
}
type PngSource = {
  format: 'png'
  size: number
  variant: string
  density: string
  image: StaticImageData
}
export type IconSource = SvgSource | PngSource
export type IconProps<
  Variant extends string,
  Density extends string,
  Format extends 'svg' | 'png',
> = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  size?: number
  variant?: Variant
  density?: Density
  format?: Format
}

export function renderIcon(
  sources: readonly IconSource[],
  {
    size = 16,
    variant,
    density = '1x',
    format = 'svg',
    className,
    'aria-label': label,
    ...props
  }: IconProps<string, string, 'svg' | 'png'>
) {
  const dimension = Number.isFinite(size) && size > 0 ? size : 16
  const available = sources.filter((source) => source.format === format)
  const formats = available.length ? available : sources
  const preferred = ['regular', 'color', 'filled', 'light'].find((name) =>
    formats.some((source) => source.variant === name)
  )
  const chosenVariant = variant ?? preferred ?? formats[0].variant
  const variants = formats.filter((source) => source.variant === chosenVariant)
  const candidates = variants.length ? variants : formats
  const densities = candidates.filter((source) => source.density === density)
  const fallback = candidates.filter((source) => source.density === '1x')
  const choices = densities.length
    ? densities
    : fallback.length
      ? fallback
      : candidates
  const source = choices.reduce((closest, candidate) => {
    const distance = Math.abs(candidate.size - dimension)
    const closestDistance = Math.abs(closest.size - dimension)
    return distance < closestDistance ||
      (distance === closestDistance && candidate.size > closest.size)
      ? candidate
      : closest
  })

  if (source.format === 'svg') {
    const Component = source.component
    return (
      <Component
        {...props}
        width={dimension}
        height={dimension}
        className={className}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        role={label ? 'img' : undefined}
        focusable="false"
      />
    )
  }
  return (
    <Image
      unoptimized
      src={source.image}
      width={dimension}
      height={dimension}
      alt={label ?? ''}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      style={{ ...props.style, width: dimension, height: dimension }}
    />
  )
}
