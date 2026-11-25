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
        fill="#FEE200"
        d="m15 19.5 4.5-4.5h12.785c.396 0 .715.319.715.715V19.5l-9 2.063-9-2.063z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M20.571 23.866 15 26.17V19.5h4.5l1.071 4.366z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M33 24.054V19.5H19.5v4.607l6.134 1.098L33 24.054z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M33 28.5V24H18.509v4.527l8.92.83 5.57-.857z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M19.5 28.5 15 30v-6h4.5v4.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m19.5 28.5-.696 2.143L19.5 33h9l4.5-4.5H19.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M19.5 33h-3.654a.845.845 0 0 1-.846-.846V28.5h4.5V33z"
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
          x1={17.786}
          x2={17.786}
          y1={26.17}
          y2={19.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={26.25}
          x2={26.25}
          y1={25.205}
          y2={19.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={25.754}
          x2={25.754}
          y1={29.357}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={17.25}
          x2={17.25}
          y1={30}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={25.902}
          x2={25.902}
          y1={33}
          y2={28.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={17.25}
          x2={17.25}
          y1={33}
          y2={28.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703D6E" />
          <stop offset={0.631} stopColor="#6C3B6A" />
          <stop offset={1} stopColor="#663764" />
        </linearGradient>
      </defs>
    </svg>
  )
}
