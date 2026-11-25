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
        d="M10 10a6 6 0 0 1 6-6h26c6.627 0 12 5.373 12 12v38a6 6 0 0 1-6 6H22c-6.627 0-12-5.373-12-12V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M11 10a5 5 0 0 1 5-5h26c6.075 0 11 4.925 11 11v38a5 5 0 0 1-5 5H22c-6.075 0-11-4.925-11-11V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M11 10a5 5 0 0 1 5-5h26c6.075 0 11 4.925 11 11v38a5 5 0 0 1-5 5H22c-6.075 0-11-4.925-11-11V10z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M20 17a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={24.208}
          x2={33.702}
          y1={4}
          y2={59.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={22.667}
          x2={31.362}
          y1={5}
          y2={59.103}
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
          gradientTransform="matrix(22.1667 42.75 -33.25 16.0312 24.417 19.063)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={27.364}
          x2={38.758}
          y1={20}
          y2={45.623}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
