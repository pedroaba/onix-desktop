'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 4a2 2 0 0 1 2-2h6.5A3.5 3.5 0 0 1 14 5.5V12a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 4a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 5.5V12a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 4a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 5.5V12a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M5.25 8.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M6 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M8 8.5A.75.75 0 1 0 8 7a.75.75 0 0 0 0 1.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M8.75 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M10.75 8.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={7.491}
          y1={2}
          y2={14.118}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.043}
          y1={3}
          y2={13.12}
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
          gradientTransform="matrix(5.27778 7.91667 -7.91667 2.96875 6.194 5.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={5.8}
          x2={9.707}
          y1={2}
          y2={10.427}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={5.8}
          x2={9.707}
          y1={2}
          y2={10.427}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={5.8}
          x2={9.707}
          y1={2}
          y2={10.427}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5.8}
          x2={9.707}
          y1={2}
          y2={10.427}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={5.8}
          x2={9.707}
          y1={2}
          y2={10.427}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={5.8}
          x2={9.707}
          y1={2}
          y2={10.427}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
