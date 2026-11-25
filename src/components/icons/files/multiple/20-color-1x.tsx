'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M5 4a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2 2 2 0 0 1-2 2H9a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M7 3h6a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1zM5 5a1 1 0 0 0-1 1v6a5 5 0 0 0 5 5h4a1 1 0 0 0 1-1H9a4 4 0 0 1-4-4V5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M7 3h6a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1zM5 5a1 1 0 0 0-1 1v6a5 5 0 0 0 5 5h4a1 1 0 0 0 1-1H9a4 4 0 0 1-4-4V5z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.521}
          x2={9.97}
          y1={2}
          y2={18.071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.333}
          x2={9.388}
          y1={3}
          y2={17.089}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(6.33333 11.0833 -9.5 4.15625 7.833 6.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
