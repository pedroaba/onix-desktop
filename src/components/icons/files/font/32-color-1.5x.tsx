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
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M24.693 15.462a.75.75 0 0 0-1.385 0L16.646 31.5h-.896a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 0-1.5h-.73l1.47-3.536h7.219l1.44 3.536H27a.75.75 0 0 0 0 1.5h5.25a.75.75 0 0 0 0-1.5h-.895l-6.662-16.038zm1.654 11.002-2.964-7.272-3.02 7.272h5.984z"
        clipRule="evenodd"
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
          x1={20.523}
          x2={25.704}
          y1={17.25}
          y2={32.785}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
