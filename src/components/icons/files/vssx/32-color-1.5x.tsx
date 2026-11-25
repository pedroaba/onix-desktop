'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 13.5A4.5 4.5 0 0 1 8.5 9H35a9 9 0 0 1 9 9v16.5a4.5 4.5 0 0 1-4.5 4.5H13a9 9 0 0 1-9-9V13.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 13.5A3.5 3.5 0 0 1 8.5 10H35a8 8 0 0 1 8 8v16.5a3.5 3.5 0 0 1-3.5 3.5H13a8 8 0 0 1-8-8V13.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 13.5A3.5 3.5 0 0 1 8.5 10H35a8 8 0 0 1 8 8v16.5a3.5 3.5 0 0 1-3.5 3.5H13a8 8 0 0 1-8-8V13.5z"
      />
      <rect
        width={9}
        height={7}
        x={24}
        y={16}
        fill={'url(#' + iconId + '-d)' + ''}
        rx={1.5}
      />
      <rect
        width={9}
        height={7}
        x={24}
        y={25}
        fill={'url(#' + iconId + '-e)' + ''}
        rx={1.5}
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M20.5 16a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5h6z"
      />
      <rect width={20} height={20} x={3} y={25} fill="#185ABD" rx={4.5} />
      <path
        fill="#fff"
        d="m18.628 29-4.125 12h-3.056L7.373 29h2.872l2.53 8.067c.061.19.108.354.142.494l.117.485h.05l.108-.502c.028-.14.073-.31.134-.51L15.839 29h2.789z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={16.917}
          x2={19.97}
          y1={9}
          y2={39.528}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={15.556}
          x2={18.184}
          y1={10}
          y2={38.536}
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
          gradientTransform="matrix(20.0556 22.1667 -30.0833 8.3125 17.139 17.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={28.5}
          x2={28.5}
          y1={16}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28A8EA" />
          <stop offset={1} stopColor="#1490DF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={28.5}
          x2={28.5}
          y1={25}
          y2={32}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B7CD3" />
          <stop offset={1} stopColor="#1D59C1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={17.5}
          x2={17.5}
          y1={16}
          y2={27.511}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#50D9FF" />
          <stop offset={1} stopColor="#28A8EA" />
        </linearGradient>
      </defs>
    </svg>
  )
}
