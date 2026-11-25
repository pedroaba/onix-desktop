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
        d="M10 10a6 6 0 0 1 6-6h26c6.627 0 12 5.373 12 12v38a6 6 0 0 1-6 6H16.5a6.5 6.5 0 0 1-6.5-6.5V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M16 5a5 5 0 0 0-5 5v40.034A6.495 6.495 0 0 1 16.5 47H48a5 5 0 0 0 5-5V16c0-6.075-4.925-11-11-11H16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M16 5a5 5 0 0 0-5 5v40.034A6.495 6.495 0 0 1 16.5 47H48a5 5 0 0 0 5-5V16c0-6.075-4.925-11-11-11H16z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M53 45.318A5.994 5.994 0 0 1 48 48H16.5a5.5 5.5 0 1 0 0 11H48a5 5 0 0 0 5-5v-2.682A5.994 5.994 0 0 1 48 54H16.5a.5.5 0 0 1 0-1H48a5 5 0 0 0 5-5v-2.682z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M53 45.318A5.994 5.994 0 0 1 48 48H16.5a5.5 5.5 0 1 0 0 11H48a5 5 0 0 0 5-5v-2.682A5.994 5.994 0 0 1 48 54H16.5a.5.5 0 0 1 0-1H48a5 5 0 0 0 5-5v-2.682z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M36.342 14.06a1 1 0 0 1 .598 1.282l-8 22a1 1 0 0 1-1.88-.684l8-22a1 1 0 0 1 1.282-.598z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M22.707 20.293a1 1 0 0 1 0 1.414L18.414 26l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M41.293 20.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L45.586 26l-4.293-4.293a1 1 0 0 1 0-1.414z"
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
          gradientTransform="matrix(22.1667 42.75 -33.25 16.0312 24.417 19.063)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
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
        <linearGradient
          id={iconId + '-g'}
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
          id={iconId + '-h'}
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
