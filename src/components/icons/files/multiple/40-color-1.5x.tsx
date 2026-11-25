'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M30.899 34.899A4.001 4.001 0 0 1 27 38H17c-6.075 0-11-4.925-11-11V9c0-1.9 1.325-3.49 3.101-3.899A4.002 4.002 0 0 1 13 2h13a8 8 0 0 1 8 8v21c0 1.9-1.325 3.49-3.101 3.899z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M13 3a3 3 0 0 0-3 3v21a7 7 0 0 0 7 7h13a3 3 0 0 0 3-3V10a7 7 0 0 0-7-7H13z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M13 3a3 3 0 0 0-3 3v21a7 7 0 0 0 7 7h13a3 3 0 0 0 3-3V10a7 7 0 0 0-7-7H13z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7 9c0-1.306.835-2.418 2-2.83V27a8 8 0 0 0 8 8h12.83A3.001 3.001 0 0 1 27 37H17c-5.523 0-10-4.477-10-10V9z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7 9c0-1.306.835-2.418 2-2.83V27a8 8 0 0 0 8 8h12.83A3.001 3.001 0 0 1 27 37H17c-5.523 0-10-4.477-10-10V9z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={15.042}
          x2={21.203}
          y1={2}
          y2={37.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
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
          gradientTransform="matrix(13.7222 26.9166 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
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
          gradientTransform="matrix(13.7222 26.9166 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
