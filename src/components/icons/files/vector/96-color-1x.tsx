'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M18 17a9 9 0 0 1 9-9h33c9.941 0 18 8.059 18 18v53a9 9 0 0 1-9 9H36c-9.941 0-18-8.059-18-18V17z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M20 17a7 7 0 0 1 7-7h33c8.837 0 16 7.163 16 16v53a7 7 0 0 1-7 7H36c-8.837 0-16-7.163-16-16V17z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M20 17a7 7 0 0 1 7-7h33c8.837 0 16 7.163 16 16v53a7 7 0 0 1-7 7H36c-8.837 0-16-7.163-16-16V17z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M27 31.5a4.5 4.5 0 0 1 4.5-4.5h3a4.5 4.5 0 0 1 4.5 4.5h18.19a6 6 0 1 1 0 3h-9.595c8.719 4.236 15.077 12.57 16.571 22.5h.334a4.5 4.5 0 0 1 4.5 4.5v3a4.5 4.5 0 0 1-4.5 4.5h-3a4.5 4.5 0 0 1-4.5-4.5v-3a4.5 4.5 0 0 1 4.13-4.485C59.24 45.697 50.304 36.76 38.986 34.87A4.5 4.5 0 0 1 34.5 39h-3a4.5 4.5 0 0 1-4.5-4.5v-3zm4.5-1.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zM60 61.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3zm.001-28.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillRule="evenodd"
        d="M38.207 46.894c.871-2.007 3.718-2.006 4.588.001l7.8 18.004c.851 1.964-.998 4.02-3.04 3.38L40.5 66.072l-7.065 2.208c-2.042.638-3.89-1.418-3.039-3.381l7.81-18.005zm2.294 2.254v13.9c.252 0 .504.038.747.114l6.16 1.928-6.907-15.942z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={37.375}
          x2={51.544}
          y1={8}
          y2={87.703}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
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
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={33}
          x2={52.554}
          y1={18}
          y2={68.188}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={33}
          x2={52.554}
          y1={18}
          y2={68.188}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
