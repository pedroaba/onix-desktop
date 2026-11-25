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
        d="M48.929 54.929A6.001 6.001 0 0 1 43 60H27c-9.389 0-17-7.611-17-17V15a6.001 6.001 0 0 1 5.071-5.929A6.001 6.001 0 0 1 21 4h21c6.627 0 12 5.373 12 12v33a6.002 6.002 0 0 1-5.071 5.929z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M21 5a5 5 0 0 0-5 5v33c0 6.075 4.925 11 11 11h21a5 5 0 0 0 5-5V16c0-6.075-4.925-11-11-11H21z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M21 5a5 5 0 0 0-5 5v33c0 6.075 4.925 11 11 11h21a5 5 0 0 0 5-5V16c0-6.075-4.925-11-11-11H21z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M11 15a5.002 5.002 0 0 1 4-4.9V43c0 6.627 5.373 12 12 12h20.9a5.002 5.002 0 0 1-4.9 4H27c-8.837 0-16-7.163-16-16V15z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M11 15a5.002 5.002 0 0 1 4-4.9V43c0 6.627 5.373 12 12 12h20.9a5.002 5.002 0 0 1-4.9 4H27c-8.837 0-16-7.163-16-16V15z"
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
          gradientTransform="matrix(22.1667 42.7501 -33.25 16.0313 24.417 19.063)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
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
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(22.1667 42.7501 -33.25 16.0313 24.417 19.063)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
