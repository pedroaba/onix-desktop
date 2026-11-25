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
        d="M26.962 14.363a1.49 1.49 0 012.104 0l3.508 3.508a1.49 1.49 0 010 2.104l-3.024 3.024h.898c.822 0 1.488.667 1.488 1.488v5.952c0 .822-.666 1.489-1.488 1.489H19v-.992h4.009V23.99h-6.945V24h-.992v-7.448a1.49 1.49 0 011.489-1.489h5.952c.821 0 1.487.667 1.487 1.489v.773zM24 30.936h6.448a.496.496 0 00.496-.497v-5.952a.496.496 0 00-.496-.496H24zm-7.44-14.88a.496.496 0 00-.495.496v6.447h6.944v-6.447a.496.496 0 00-.496-.496zM24 22.999h2.479L24 20.519z"
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
          x1={15.072}
          x2={33.072}
          y1={13.928}
          y2={31.865}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB6D00" />
          <stop offset={1} stopColor="#B85500" />
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
