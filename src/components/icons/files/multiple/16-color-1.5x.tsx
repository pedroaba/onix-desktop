'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M8 2a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a6 6 0 0 0 6 6h6a2 2 0 0 0 2-2 2 2 0 0 0 2-2V6a4 4 0 0 0-4-4H8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M8 3a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h8a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M8 3a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h8a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M5 6a1 1 0 0 1 1-1v11a4 4 0 0 0 4 4h7a1 1 0 0 1-1 1h-6a5 5 0 0 1-5-5V6z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M5 6a1 1 0 0 1 1-1v11a4 4 0 0 0 4 4h7a1 1 0 0 1-1 1h-6a5 5 0 0 1-5-5V6z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={9.167}
          x2={12.5}
          y1={2}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.889}
          x2={11.787}
          y1={3}
          y2={21.034}
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
          gradientTransform="matrix(7.38889 14.25 -11.0833 5.34375 9.472 7.688)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8.889}
          x2={11.787}
          y1={3}
          y2={21.034}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7.38889 14.25 -11.0833 5.34375 9.472 7.688)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
