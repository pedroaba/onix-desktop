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
        d="M1 4a2 2 0 012-2h8.5A3.5 3.5 0 0115 5.5V12a2 2 0 01-2 2H4.5A3.5 3.5 0 011 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 4a1 1 0 011-1h8.5A2.5 2.5 0 0114 5.5V12a1 1 0 01-1 1H4.5A2.5 2.5 0 012 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 4a1 1 0 011-1h8.5A2.5 2.5 0 0114 5.5V12a1 1 0 01-1 1H4.5A2.5 2.5 0 012 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.5 5A1.5 1.5 0 0112 6.5v2.999a1.5 1.5 0 01-1.5 1.5H9c-.365 0-.705-.1-1-.27-.294.17-.635.27-1 .27H5.502a1.5 1.5 0 01-1.5-1.498v-3a1.5 1.5 0 011.5-1.5l1.497.998H7.5q.103 0 .202.015.295.043.59 0c.133-.019.27-.045.39-.105z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8 5.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3.999a.5.5 0 01-.5.5H9a1 1 0 01-1-1z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M7 5h.5a.5.5 0 01.5.5V9a1 1 0 01-1 .999H5.5a.5.5 0 01-.499-.5V5.5a.5.5 0 01.5-.5z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={10.5}
          x2={9.885}
          y1={5.214}
          y2={12.731}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={0.908} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={10.835}
          x2={4.151}
          y1={5.312}
          y2={6.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.123} stopColor="#9DEAFF" />
          <stop offset={0.616} stopColor="#4894FE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={5.001}
          x2={11.032}
          y1={6.25}
          y2={6.902}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6EFFF" />
          <stop offset={0.851} stopColor="#58AAFE" />
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
      </defs>
    </svg>
  )
}
