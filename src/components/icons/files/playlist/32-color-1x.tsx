'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-3 3v11a9 9 0 0 0 9 9h11a3 3 0 0 0 3-3 3 3 0 0 0 3-3V9a6 6 0 0 0-6-6H9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M9 4a2 2 0 0 0-2 2v14a5 5 0 0 0 5 5h14a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5H9z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M9 4a2 2 0 0 0-2 2v14a5 5 0 0 0 5 5h14a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5H9z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M4 9a2 2 0 0 1 2-2v13a6 6 0 0 0 6 6h13a2 2 0 0 1-2 2H12a8 8 0 0 1-8-8V9z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M4 9a2 2 0 0 1 2-2v13a6 6 0 0 0 6 6h13a2 2 0 0 1-2 2H12a8 8 0 0 1-8-8V9z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M15.032 9.179C14.123 8.663 13 9.325 13 10.376v8.248c0 1.05 1.123 1.713 2.032 1.198l7.273-4.124c.927-.525.927-1.87 0-2.396L15.032 9.18z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.396}
          x2={14.897}
          y1={3}
          y2={29.256}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={10.667}
          x2={13.703}
          y1={4}
          y2={28.287}
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
          gradientTransform="matrix(12.6667 19 -19 7.125 11.667 10.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={10.667}
          x2={13.703}
          y1={4}
          y2={28.287}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(12.6667 19 -19 7.125 11.667 10.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={18}
          x2={16.682}
          y1={17.308}
          y2={11.098}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
