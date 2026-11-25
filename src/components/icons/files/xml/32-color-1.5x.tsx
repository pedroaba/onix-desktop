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
        d="M15.383 16.347a.75.75 0 1 0-1.266.806l1.494 2.347-1.494 2.347a.75.75 0 1 0 1.266.806l1.117-1.756 1.117 1.756a.75.75 0 1 0 1.266-.806L17.389 19.5l1.494-2.347a.75.75 0 1 0-1.266-.806L16.5 18.103l-1.117-1.756z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M22.33 16.275a.75.75 0 0 0-1.33.475v5.5a.75.75 0 1 0 1.5 0v-3.399l.92 1.124a.75.75 0 0 0 1.16 0l.92-1.124v3.399a.75.75 0 1 0 1.5 0v-5.5a.75.75 0 0 0-1.33-.475L24 18.315l-1.67-2.04z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M13.75 26a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5h-20.5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M13.75 30a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5h-20.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M29.75 16a.75.75 0 0 1 .75.75v4.75H33a.75.75 0 0 1 0 1.5h-3.25a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 .75-.75z"
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
          x1={15.063}
          x2={24.265}
          y1={9.542}
          y2={31.923}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={15.063}
          x2={24.265}
          y1={9.542}
          y2={31.923}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15.063}
          x2={24.265}
          y1={9.542}
          y2={31.923}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={15.063}
          x2={24.265}
          y1={9.542}
          y2={31.923}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={15.063}
          x2={24.265}
          y1={9.542}
          y2={31.923}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
