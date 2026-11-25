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
        d="M3 6a3 3 0 0 1 3-3h17a6 6 0 0 1 6 6v17a3 3 0 0 1-3 3H9a6 6 0 0 1-6-6V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 6a2 2 0 0 1 2-2h17a5 5 0 0 1 5 5v17a2 2 0 0 1-2 2H9a5 5 0 0 1-5-5V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 6a2 2 0 0 1 2-2h17a5 5 0 0 1 5 5v17a2 2 0 0 1-2 2H9a5 5 0 0 1-5-5V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M13.235 10.195A1.5 1.5 0 0 0 11 11.502v8.996a1.5 1.5 0 0 0 2.235 1.307l8-4.498a1.5 1.5 0 0 0 0-2.614l-8-4.498z"
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
          x1={16.5}
          x2={15.073}
          y1={19.063}
          y2={12.284}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
