'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M5 9a4 4 0 0 1 4-4h18a8 8 0 0 1 8 8v18a4 4 0 0 1-4 4H13a8 8 0 0 1-8-8V9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 9a3 3 0 0 1 3-3h18a7 7 0 0 1 7 7v18a3 3 0 0 1-3 3H13a7 7 0 0 1-7-7V9z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M6 9a3 3 0 0 1 3-3h18a7 7 0 0 1 7 7v18a3 3 0 0 1-3 3H13a7 7 0 0 1-7-7V9z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M18.25 12a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0v-14.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M23.25 15a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M13.25 18a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M28.25 18a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={14.688}
          x2={18.727}
          y1={5}
          y2={35.295}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.778}
          x2={17.32}
          y1={6}
          y2={34.335}
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
          gradientTransform="matrix(14.7778 22.1667 -22.1667 8.3125 14.944 13.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={20.75}
          x2={17.785}
          y1={24.084}
          y2={10.114}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={20.75}
          x2={17.785}
          y1={24.084}
          y2={10.114}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={20.75}
          x2={17.785}
          y1={24.084}
          y2={10.114}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={20.75}
          x2={17.785}
          y1={24.084}
          y2={10.114}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
