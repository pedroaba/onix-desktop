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
        d="M24 15.425C23.365 14.809 22.48 14 21.5 14H14c-1.105 0-2 .85-2 1.9v15.2c0 1.05.895 1.9 2 1.9h7.5a3.58 3.58 0 002.5-.998l1-8.502z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M24 15.425c.635-.616 1.52-1.425 2.5-1.425H34c1.105 0 2 .85 2 1.9v15.2c0 1.05-.895 1.9-2 1.9h-7.5a3.58 3.58 0 01-2.5-.998L23 23.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M13.5 14.473c0-.261.224-.473.5-.473h8.5c.828 0 1.5.635 1.5 1.419l.5 4.257-.5 9.932c0 1.045-.895 1.892-2 1.892h-8a.487.487 0 01-.5-.473z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M34.5 14.473c0-.261-.23-.473-.52-.473h-8.409c-.867 0-1.571.635-1.571 1.419v14.189c0 1.045.938 1.892 2.095 1.892h7.885c.29 0 .52-.212.52-.473z"
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
          x1={16.485}
          x2={19.879}
          y1={17.555}
          y2={37.869}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={31.515}
          x2={28.121}
          y1={17.555}
          y2={37.869}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={12}
          x2={43.081}
          y1={13.327}
          y2={28.084}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6EFFF" />
          <stop offset={0.851} stopColor="#58AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={34.313}
          x2={8.933}
          y1={15.094}
          y2={20.844}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.123} stopColor="#9DEAFF" />
          <stop offset={0.616} stopColor="#4894FE" />
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
