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
        fillRule="evenodd"
        d="M16.745 9.15a2 2 0 0 0-1.49 0l-5 2.008A2 2 0 0 0 9 13.014v5.973a2 2 0 0 0 1.252 1.855l5 2.016a2 2 0 0 0 1.496 0l5-2.016A2 2 0 0 0 23 18.987v-5.973a2 2 0 0 0-1.255-1.856l-5-2.008zm-6.72 3.643a1.002 1.002 0 0 0-.025.221v5.973a1 1 0 0 0 .626.928l5 2.015c.24.097.508.097.748 0l5-2.015a1 1 0 0 0 .626-.928v-5.973c0-.075-.009-.15-.025-.221l-5.137 2.37c-.11.052-.223.092-.338.121V19.5a.5.5 0 0 1-1 0v-4.216a1.99 1.99 0 0 1-.338-.12l-5.137-2.371z"
        clipRule="evenodd"
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
          x1={11}
          x2={19.21}
          y1={5.5}
          y2={22.66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
