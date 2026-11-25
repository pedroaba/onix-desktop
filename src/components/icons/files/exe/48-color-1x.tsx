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
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M25.813 14.822a2.75 2.75 0 0 1 3.89 0l2.476 2.476a2.75 2.75 0 0 1 0 3.89l-2.33 2.328A2.745 2.745 0 0 1 31 25.75v3.5l-.015.282A2.75 2.75 0 0 1 28.25 32h-10.5l-.281-.014A2.75 2.75 0 0 1 15 29.25v-10.5a2.75 2.75 0 0 1 2.469-2.735L17.75 16h3.5l.281.015a2.746 2.746 0 0 1 1.952 1.135l2.33-2.328zM16.5 29.25c0 .69.56 1.25 1.25 1.25h4.75v-6h-6v4.75zM24 30.5h4.25c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25H24v6zm0-7.5h1.148L24 21.852V23zm-6.25-5.5a1.25 1.25 0 0 0-1.243 1.122l-.007.128V23h6v-4.25c0-.69-.56-1.25-1.25-1.25h-3.5z"
        clipRule="evenodd"
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
          x1={19.5}
          x2={28.494}
          y1={14}
          y2={30.073}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
