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
        fillRule="evenodd"
        d="M8.466 4.09a1.25 1.25 0 0 0-.932 0l-2.75 1.104A1.25 1.25 0 0 0 4 6.354v3.293c0 .51.31.97.783 1.16l2.75 1.108c.3.12.634.12.934 0l2.75-1.108c.473-.19.783-.65.783-1.16V6.354c0-.51-.31-.97-.784-1.16L8.466 4.09zM8.5 7.751a2 2 0 0 0 .338-.12L11 6.633v3.014a.25.25 0 0 1-.157.232l-2.75 1.109a.25.25 0 0 1-.186 0l-2.75-1.109A.25.25 0 0 1 5 9.647V6.633l2.162.998a2 2 0 0 0 .338.12v1.69a.5.5 0 1 0 1 0v-1.69z"
        clipRule="evenodd"
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
          x1={5.143}
          x2={9.842}
          y1={1.994}
          y2={11.806}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
