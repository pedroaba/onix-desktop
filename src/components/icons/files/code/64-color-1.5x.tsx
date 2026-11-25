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
        fillRule="evenodd"
        d="M16 4a6 6 0 0 0-6 6v37.498A6.502 6.502 0 0 0 12.5 60h35a6.5 6.5 0 0 0 6.5-6.5V16c0-6.627-5.373-12-12-12H16z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M47.5 59a5.5 5.5 0 0 0 5.5-5.5V16c0-6.075-4.925-11-11-11H16a5 5 0 0 0-5 5v37.174A6.52 6.52 0 0 1 12.5 47h35a.5.5 0 0 1 0 1 5.5 5.5 0 1 0 0 11zm-3.466-11A6.495 6.495 0 0 0 41 53.5a6.495 6.495 0 0 0 3.034 5.5H12.5a5.5 5.5 0 1 1 0-11h31.534z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M47.5 59a5.5 5.5 0 0 0 5.5-5.5V16c0-6.075-4.925-11-11-11H16a5 5 0 0 0-5 5v37.174A6.52 6.52 0 0 1 12.5 47h35a.5.5 0 0 1 0 1 5.5 5.5 0 1 0 0 11zm-3.466-11A6.495 6.495 0 0 0 41 53.5a6.495 6.495 0 0 0 3.034 5.5H12.5a5.5 5.5 0 1 1 0-11h31.534z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M36.342 14.06a1 1 0 0 1 .598 1.282l-8 22a1 1 0 0 1-1.88-.684l8-22a1 1 0 0 1 1.282-.598z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M22.707 20.293a1 1 0 0 1 0 1.414L18.414 26l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M41.293 20.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L45.586 26l-4.293-4.293a1 1 0 0 1 0-1.414z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={21.5}
          x2={30.242}
          y1={4}
          y2={60.196}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={19.778}
          x2={27.75}
          y1={5}
          y2={59.33}
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
          gradientTransform="matrix(24.2778 42.75 -36.4167 16.0312 21.694 19.063)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={23}
          x2={33.882}
          y1={10}
          y2={38.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={23}
          x2={33.882}
          y1={10}
          y2={38.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={23}
          x2={33.882}
          y1={10}
          y2={38.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
