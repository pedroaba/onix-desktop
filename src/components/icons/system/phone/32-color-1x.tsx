'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.25 2C8.45508 2 7 3.45507 7 5.25V26.75C7 28.5449 8.45507 30 10.25 30H21.75C23.5449 30 25 28.5449 25 26.75V5.25C25 3.45507 23.5449 2 21.75 2H10.25Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_8509)' + ''}
      />
      <path
        d="M14 24H18C18.5523 24 19 24.4477 19 25C19 25.5523 18.5523 26 18 26H14C13.4477 26 13 25.5523 13 25C13 24.4477 13.4477 24 14 24Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8509)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_8509'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7 1.125) rotate(61.1666) scale(36.1576 71.7141)"
        >
          <stop stopColor="#CB7DF8" />
          <stop offset={0.412452} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#4E44DB" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8509'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.0625 24.1333) rotate(40.8628) scale(10.4955 12.3381)"
        >
          <stop stopColor="#DECBFF" />
          <stop offset={1} stopColor="#D1D1FF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
