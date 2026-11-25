'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M13.123 4.963A4 4 0 0 0 10.52 4H6a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H16.055a1.5 1.5 0 0 1-.976-.361l-1.956-1.676z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M13.123 4.963A4 4 0 0 0 10.52 4H6a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H16.055a1.5 1.5 0 0 1-.976-.361l-1.956-1.676z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 13a3 3 0 0 1 3-3h6.25a2.5 2.5 0 0 0 2-1 2.5 2.5 0 0 1 2-1H30a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V13z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={10.125}
          x2={10.125}
          y1={29.25}
          y2={4.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BA7300" />
          <stop offset={0.221} stopColor="#C77B00" />
          <stop offset={0.716} stopColor="#D48300" />
          <stop offset={1} stopColor="#D48300" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 3.28636 -11.25 0 13.5 11.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={16.031}
          x2={11.672}
          y1={29.531}
          y2={9}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
