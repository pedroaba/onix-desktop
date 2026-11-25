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
        d="M6 5.5A3.5 3.5 0 0 1 9.5 2H23a7 7 0 0 1 7 7v21.5a3.5 3.5 0 0 1-3.5 3.5H13a7 7 0 0 1-7-7V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill="#D20112"
        fillRule="evenodd"
        d="M13.25 9c.382 0 .807.164 1.137.444a1.695 1.695 0 0 1 0 2.612c-.33.28-.755.444-1.137.444H12v2a.5.5 0 0 1-1 0v-5l.01-.1a.5.5 0 0 1 .49-.4h1.75zM12 11.5h1.25a.833.833 0 0 0 .488-.206.696.696 0 0 0 0-1.088.833.833 0 0 0-.488-.206H12v1.5zM17.5 9c1.346 0 2.5 1.299 2.5 3s-1.154 3-2.5 3h-1a.5.5 0 0 1-.5-.5v-5l.01-.1a.5.5 0 0 1 .49-.4h1zm-.5 5h.5c.654 0 1.5-.701 1.5-2s-.846-2-1.5-2H17v4z"
        clipRule="evenodd"
      />
      <path
        fill="#D20112"
        d="M24.5 9a.5.5 0 0 1 0 1H22v1.5h1.5a.5.5 0 0 1 0 1H22v2a.5.5 0 0 1-1 0v-5l.01-.1a.5.5 0 0 1 .49-.4h3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M24.5 25a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13zm0-3a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13zm0-3a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={15.521}
          x2={15.998}
          y1={19}
          y2={26.163}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898989" />
          <stop offset={1} stopColor="#636262" />
        </linearGradient>
      </defs>
    </svg>
  )
}
