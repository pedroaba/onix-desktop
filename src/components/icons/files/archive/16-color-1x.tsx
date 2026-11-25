'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6.884 1.698A2 2 0 0 0 5.366 1H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8.394a.857.857 0 0 1-.65-.3l-.86-1.002z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M6.884 1.698A2 2 0 0 0 5.366 1H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8.394a.857.857 0 0 1-.65-.3l-.86-1.002z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 6.5A1.5 1.5 0 0 1 3.5 5h1.793c.453 0 .887-.18 1.207-.5.32-.32.754-.5 1.207-.5H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.5z"
      />
      <path
        fill="#944600"
        d="M6.974 7c.558 0 1.011.445 1.025 1H5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2.499c-.014.555-.467 1-1.025 1H5.5A1.5 1.5 0 0 1 4 9.5v-1A1.5 1.5 0 0 1 5.5 7h1.474zM3 10H2V8h1v2zm11.001 0H8.686A.685.685 0 0 1 8 9.315v-.63C8 8.307 8.307 8 8.685 8H14v2z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={4}
          x2={4}
          y1={14}
          y2={1}
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
          gradientTransform="matrix(0 1.72617 -5.71429 0 5.714 4.84)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={7.058}
          x2={5.038}
          y1={13.662}
          y2={3.986}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
