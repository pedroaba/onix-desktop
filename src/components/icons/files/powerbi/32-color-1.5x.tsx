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
        d="M4 13.5A4.5 4.5 0 018.5 9H35a9 9 0 019 9v16.5a4.5 4.5 0 01-4.5 4.5H13a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 13.5A3.5 3.5 0 018.5 10H35a8 8 0 018 8v16.5a3.5 3.5 0 01-3.5 3.5H13a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 13.5A3.5 3.5 0 018.5 10H35a8 8 0 018 8v16.5a3.5 3.5 0 01-3.5 3.5H13a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M18 26v18a1 1 0 01-1 1h-6V26a1 1 0 011-1h5a1 1 0 011 1"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M14.5 31.02a1.01 1.01 0 00-1-1.02l-3.643.438v14.125l4.214.437h.429z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M14 31v14H7V31a1 1 0 011-1h5a1 1 0 011 1"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M3 36v8a1 1 0 001 1h6v-9a1 1 0 00-1-1H4a1 1 0 00-1 1"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M24 19a1 1 0 011 1v12a1 1 0 11-2 0V20a1 1 0 011-1m8 6a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1M16 15a1 1 0 011 1v8h-2v-8a1 1 0 011-1"
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
        <linearGradient
          id={iconId + '-d'}
          x1={9.833}
          x2={17.417}
          y1={25}
          y2={43.083}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={6.999}
          x2={14.181}
          y1={30}
          y2={44.624}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={2.999}
          x2={6.866}
          y1={35}
          y2={44.896}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={15}
          x2={33}
          y1={15}
          y2={33}
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
          gradientTransform="matrix(20.0556 22.1667 -30.0833 8.3125 17.139 17.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
