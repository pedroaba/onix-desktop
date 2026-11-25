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
        d="m29.812 23.32-9.057 9.624C18.953 34.858 20.31 38 22.939 38h18.114c2.63 0 3.986-3.142 2.184-5.056l-9.056-9.623a3 3 0 0 0-4.37 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M44 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
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
          x1={24}
          x2={38}
          y1={15}
          y2={43}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={37}
          x2={44.605}
          y1={8.625}
          y2={23.184}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
