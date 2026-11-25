'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M11.525 5.025A3.5 3.5 0 0 0 9.05 4H5.5A3.5 3.5 0 0 0 2 7.5v16A3.5 3.5 0 0 0 5.5 27h21a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 26.5 7H14.121a1.5 1.5 0 0 1-1.06-.44l-1.536-1.535z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M11.525 5.025A3.5 3.5 0 0 0 9.05 4H5.5A3.5 3.5 0 0 0 2 7.5v16A3.5 3.5 0 0 0 5.5 27h21a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 26.5 7H14.121a1.5 1.5 0 0 1-1.06-.44l-1.536-1.535z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 12.5A2.5 2.5 0 0 1 5.5 10h5.25a2.5 2.5 0 0 0 2-1 2.5 2.5 0 0 1 2-1H26.5a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 3 23.5v-11z"
      />
      <path
        fill="#944600"
        d="M13.08 15c.558 0 1.01.446 1.024 1H8.752a1.75 1.75 0 0 0-1.75 1.75v1.5c0 .966.784 1.75 1.75 1.75h5.354c-.014.554-.467 1-1.025 1H8.856a2.75 2.75 0 0 1-2.75-2.75v-1.5A2.75 2.75 0 0 1 8.856 15h4.224zm-8.002 2.001a3.119 3.119 0 0 0-.025.394v2.395c0 .07.003.141.008.211H3v-3h2.078z"
      />
      <path
        fill="#944600"
        fillRule="evenodd"
        d="M29 20H8.685A.685.685 0 0 1 8 19.315v-1.63c0-.378.307-.685.685-.685H29v3zM9.5 18a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={9}
          x2={9}
          y1={26}
          y2={4}
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
          gradientTransform="matrix(0 2.92121 -10 0 12 10.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={14.25}
          x2={10.375}
          y1={26.25}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
