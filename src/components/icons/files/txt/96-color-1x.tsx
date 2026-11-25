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
        d="M30 25.5a1.5 1.5 0 0 1 1.5-1.5h33a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1-1.5-1.5zm0 9a1.5 1.5 0 0 1 1.5-1.5h33a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1-1.5-1.5zm0 9a1.5 1.5 0 0 1 1.5-1.5h33a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1-1.5-1.5zm0 9a1.5 1.5 0 0 1 1.5-1.5h33a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1-1.5-1.5zm0 9a1.5 1.5 0 0 1 1.5-1.5h33a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1-1.5-1.5zm0 9a1.5 1.5 0 0 1 1.5-1.5h33a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1-1.5-1.5z"
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
          x1={41.045}
          x2={58.137}
          y1={30}
          y2={68.434}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
