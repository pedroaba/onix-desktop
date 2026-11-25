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
        d="M6 5.5A3.5 3.5 0 019.5 2H23a7 7 0 017 7v21.5a3.5 3.5 0 01-3.5 3.5h-17A3.5 3.5 0 016 30.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M29 27.5a2.5 2.5 0 01-2.5 2.5h-17a.5.5 0 000 1h17c.98 0 1.865-.404 2.5-1.053v.553a2.5 2.5 0 01-2.5 2.5h-17a2.5 2.5 0 010-5h17a3.5 3.5 0 002.5-1.05z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M29 27.5a2.5 2.5 0 01-2.5 2.5h-17a.5.5 0 000 1h17c.98 0 1.865-.404 2.5-1.053v.553a2.5 2.5 0 01-2.5 2.5h-17a2.5 2.5 0 010-5h17a3.5 3.5 0 002.5-1.05z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M23 3a6 6 0 016 6v15.5a2.5 2.5 0 01-2.5 2.5h-17c-.98 0-1.865.403-2.5 1.052V5.5A2.5 2.5 0 019.5 3z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M23 3a6 6 0 016 6v15.5a2.5 2.5 0 01-2.5 2.5h-17c-.98 0-1.865.403-2.5 1.052V5.5A2.5 2.5 0 019.5 3z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M13 20.67v13.66c0 .37-.3.67-.67.67H8V20.67c0-.37.3-.67.67-.67h3.66c.37 0 .67.3.67.67"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M10 25.02A1.01 1.01 0 009 24l-3.643.438v10.125L9.571 35H10z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M9.5 24.667V35h-5V24.67c0-.37.3-.67.67-.67h3.663c.369 0 .667.299.667.667"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M1 28.67v5.66c0 .37.3.67.67.67H6v-6.33c0-.37-.3-.67-.67-.67H1.67c-.37 0-.67.3-.67.67"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M24.5 23a.5.5 0 010 1H14v-1zm0-4a.5.5 0 010 1H13.913a1.5 1.5 0 00-1.413-1zm0-4a.5.5 0 010 1h-13a.5.5 0 010-1zm-9-9A1.5 1.5 0 0117 7.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3A1.5 1.5 0 0112.5 6zm9 5a.5.5 0 010 1h-5a.5.5 0 010-1zm0-4a.5.5 0 010 1h-5a.5.5 0 010-1z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={7.167}
          x2={13.048}
          y1={20}
          y2={33.358}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={4.5}
          x2={9.85}
          y1={24}
          y2={34.613}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={1}
          x2={3.666}
          y1={28}
          y2={34.964}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={11}
          x2={28.446}
          y1={6}
          y2={19.569}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
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
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
