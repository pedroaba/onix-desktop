'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M9 8.5A4.5 4.5 0 0 1 13.5 4H30a9 9 0 0 1 9 9v26.5a4.5 4.5 0 0 1-4.5 4.5H18a9 9 0 0 1-9-9V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 0 1-3.5 3.5H18a8 8 0 0 1-8-8V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 0 1-3.5 3.5H18a8 8 0 0 1-8-8V8.5z"
      />
      <path
        fill="#185ABD"
        d="m16.319 19.978-2.987 2.987a1.07 1.07 0 0 0 0 1.549l4.535 4.535 4.536-4.535-4.536-4.536a1.07 1.07 0 0 0-1.548 0z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="m34.681 18.319-2.987-2.987a1.07 1.07 0 0 0-1.548 0l-8.297 8.296-3.982 3.872a1.07 1.07 0 0 0 0 1.549l3.097 3.097a1.07 1.07 0 0 0 1.549 0L34.57 20.088c.553-.553.553-1.327.111-1.77z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={18.688}
          x2={25.772}
          y1={4}
          y2={43.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={17.778}
          x2={24.218}
          y1={5}
          y2={42.963}
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
          gradientTransform="matrix(14.7778 30.0833 -22.1667 11.2812 18.944 14.896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={25.965}
          x2={12.75}
          y1={10.151}
          y2={23.95}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62C4F6" />
          <stop offset={1} stopColor="#2A88E5" />
        </linearGradient>
      </defs>
    </svg>
  )
}
