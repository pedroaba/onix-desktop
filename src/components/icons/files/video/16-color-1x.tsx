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
        d="M2 4a2 2 0 0 1 2-2h6.5A3.5 3.5 0 0 1 14 5.5V12a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 4a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 5.5V12a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 4a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 5.5V12a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7.025 5.34A.687.687 0 0 0 6 5.937v4.124c0 .525.566.856 1.025.599l3.558-2.062a.687.687 0 0 0 0-1.198L7.025 5.34z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={7.491}
          y1={2}
          y2={14.118}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.043}
          y1={3}
          y2={13.12}
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
          gradientTransform="matrix(5.27778 7.91667 -7.91667 2.96875 6.194 5.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8.467}
          x2={7.8}
          y1={9.404}
          y2={6.303}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
