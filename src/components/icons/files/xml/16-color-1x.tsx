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
        d="M1 4a2 2 0 0 1 2-2h8.5A3.5 3.5 0 0 1 15 5.5V12a2 2 0 0 1-2 2H4.5A3.5 3.5 0 0 1 1 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7.385 5.013a.5.5 0 0 1 .562.263L8.5 6.382l.553-1.106A.5.5 0 0 1 10 5.5v4a.5.5 0 0 1-1 0V7.618l-.053.106a.5.5 0 0 1-.894 0L8 7.618V9.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .385-.487z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M11.5 5a.5.5 0 0 1 .5.5V9h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M3.947 5.277a.5.5 0 1 0-.894.447L3.94 7.5l-.888 1.777a.5.5 0 1 0 .894.447L4.5 8.618l.553 1.106a.5.5 0 1 0 .894-.447L5.06 7.5l.888-1.776a.5.5 0 1 0-.894-.447L4.5 6.382l-.553-1.105z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.521}
          x2={6.912}
          y1={2}
          y2={14.174}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.333}
          x2={6.392}
          y1={3}
          y2={13.168}
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
          gradientTransform="matrix(6.33333 7.91667 -9.5 2.96875 5.833 5.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={3.984}
          x2={6.162}
          y1={2.917}
          y2={10.752}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={3.984}
          x2={6.162}
          y1={2.917}
          y2={10.752}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={3.984}
          x2={6.162}
          y1={2.917}
          y2={10.752}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
