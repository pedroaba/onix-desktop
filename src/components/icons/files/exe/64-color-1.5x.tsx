'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 16a6 6 0 0 1 6-6h38c6.627 0 12 5.373 12 12v26a6 6 0 0 1-6 6H16C9.373 54 4 48.627 4 42V16z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 16a5 5 0 0 1 5-5h38c6.075 0 11 4.925 11 11v26a5 5 0 0 1-5 5H16C9.925 53 5 48.075 5 42V16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 16a5 5 0 0 1 5-5h38c6.075 0 11 4.925 11 11v26a5 5 0 0 1-5 5H16C9.925 53 5 48.075 5 42V16z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M34.339 19.335a4.5 4.5 0 0 1 6.364 0l2.962 2.962a4.5 4.5 0 0 1 0 6.365l-2.933 2.931A4.498 4.498 0 0 1 43 35.501v4l-.006.231a4.5 4.5 0 0 1-4.494 4.269h-15a4.5 4.5 0 0 1-4.5-4.5v-15a4.5 4.5 0 0 1 4.5-4.5h4l.231.005a4.5 4.5 0 0 1 3.675 2.261l2.933-2.931zM21 39.502a2.5 2.5 0 0 0 2.5 2.5H30v-9h-9v6.5zM32 42h6.5a2.5 2.5 0 0 0 2.5-2.5v-4a2.5 2.5 0 0 0-2.5-2.5H32v9zm0-11h1.716L32 29.284V31zm-8.5-9a2.5 2.5 0 0 0-2.5 2.5V31h9v-6.5a2.5 2.5 0 0 0-2.5-2.5h-4z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={22.083}
          x2={26.77}
          y1={10}
          y2={54.731}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={20}
          x2={24.157}
          y1={11}
          y2={53.763}
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
          gradientTransform="matrix(28.5 33.25 -42.75 12.4687 22.25 21.938)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={25}
          x2={38.472}
          y1={18}
          y2={41.114}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
