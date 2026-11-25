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
        d="M24 26.25a.75.75 0 0 1 .75.75v4.5h2.501a.75.75 0 0 1 0 1.5H24v-3.5c0-.987-.262-1.912-.717-2.713A.749.749 0 0 1 24 26.25z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M32 26a2 2 0 0 1-2 2h-6.208a5.501 5.501 0 0 0-5.292-4H16v-8h16v10z"
      />
      <rect
        width={18}
        height={2.571}
        x={15}
        y={15}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={1.286}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-g)' + ''}
        rx={4.5}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.3}
        rx={4.5}
      />
      <path
        fill="#fff"
        d="M11.636 37.092V41H8.94V29h4.167c1.492 0 2.627.326 3.406.98.785.652 1.178 1.62 1.178 2.903 0 1.322-.44 2.354-1.32 3.096-.873.742-2.048 1.113-3.523 1.113h-1.21zm0-6.017v3.942h1.128c.668 0 1.182-.176 1.544-.528.362-.35.543-.856.543-1.514 0-.608-.178-1.077-.534-1.406-.351-.33-.855-.494-1.512-.494h-1.169z"
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
          x1={9.164}
          x2={11.971}
          y1={14.181}
          y2={39.798}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.508} stopColor="#FA734C" />
          <stop offset={0.725} stopColor="#E5495B" />
          <stop offset={0.873} stopColor="#AA1D2D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={29.333}
          x2={24}
          y1={16}
          y2={32.667}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.103} stopColor="#FFA05C" />
          <stop offset={0.767} stopColor="#FDB567" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={21.429}
          x2={24}
          y1={9.857}
          y2={21.429}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.298} stopColor="#FF7F48" />
          <stop offset={0.579} stopColor="#E5495B" />
          <stop offset={0.89} stopColor="#AA1D2D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -28.679 16.118) scale(28.2843)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8193E" />
          <stop offset={0.939} stopColor="#920616" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 14 -15.9375 0 12.998 37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
