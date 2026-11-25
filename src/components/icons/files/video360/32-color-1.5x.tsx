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
        d="M20 17.504v8.992c0 1.166 1.265 1.887 2.262 1.29l7.482-4.49c.97-.582.972-1.993.002-2.577l-7.483-4.503c-.996-.6-2.263.121-2.263 1.288z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M18.442 20.411a.75.75 0 0 1-.562.9c-2.014.465-3.655 1.144-4.772 1.93-1.132.796-1.608 1.608-1.608 2.336 0 .807.591 1.72 1.987 2.586 1.369.848 3.356 1.544 5.742 1.95a.75.75 0 0 1-.251 1.478c-2.508-.426-4.697-1.171-6.281-2.153C11.139 28.472 10 27.164 10 25.577c0-1.433.932-2.64 2.245-3.563 1.327-.933 3.167-1.672 5.298-2.165a.75.75 0 0 1 .9.562z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M32.36 21.17a.75.75 0 0 1 .976-.413c1.333.54 2.464 1.21 3.274 1.998.812.791 1.343 1.746 1.343 2.822 0 1.036-.493 1.961-1.255 2.734-.76.77-1.82 1.429-3.073 1.966-2.43 1.042-5.706 1.681-9.299 1.72l.072.05a.75.75 0 0 1-.842 1.24l-1.967-1.335a.85.85 0 0 1 0-1.406l1.967-1.336a.75.75 0 0 1 .842 1.241l-.067.046c3.433-.04 6.498-.653 8.702-1.599 1.142-.489 2.017-1.052 2.597-1.64.576-.584.823-1.151.823-1.681 0-.55-.266-1.14-.89-1.747-.625-.61-1.568-1.188-2.79-1.683a.75.75 0 0 1-.413-.977z"
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
          x1={16.988}
          x2={20.663}
          y1={12.651}
          y2={34.26}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={16.988}
          x2={20.663}
          y1={12.651}
          y2={34.26}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={16.988}
          x2={20.663}
          y1={12.651}
          y2={34.26}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
