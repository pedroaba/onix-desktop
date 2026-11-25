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
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        stroke={'url(#' + iconId + '-c)' + ''}
        strokeDasharray="6 3.5"
        strokeLinecap="round"
        d="M2.5 10A3.5 3.5 0 0 1 6 6.5h24a7.5 7.5 0 0 1 7.5 7.5v16a3.5 3.5 0 0 1-3.5 3.5H10A7.5 7.5 0 0 1 2.5 26V10z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M20 11a9 9 0 0 1 9 9.001 9 9 0 0 1-9 9.001V25a5 5 0 0 0-5-5h-4a9 9 0 0 1 9-9z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M20 11a9 9 0 0 1 9 9.001 9 9 0 0 1-9 9.001V25a5 5 0 0 0-5-5h-4a9 9 0 0 1 9-9z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.5}
        d="M20 11a9 9 0 0 1 9 9.001 9 9 0 0 1-9 9.001V25a5 5 0 0 0-5-5h-4a9 9 0 0 1 9-9z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M20 11a9 9 0 0 1 7.78 13.523l.142-.315c.89-1.977-.556-4.215-2.724-4.215h-3.593a1.612 1.612 0 0 1-1.612-1.612l.003-3.577c.002-2.171-2.24-3.619-4.218-2.725l-.26.116A8.958 8.958 0 0 1 20 11z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M20 11a9 9 0 0 1 7.78 13.523l.142-.315c.89-1.977-.556-4.215-2.724-4.215h-3.593a1.612 1.612 0 0 1-1.612-1.612l.003-3.577c.002-2.171-2.24-3.619-4.218-2.725l-.26.116A8.958 8.958 0 0 1 20 11z"
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={4}
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.3}
        rx={4}
      />
      <path
        fill="#fff"
        d="M8.597 31.743V35H6.342V25h3.484c1.247 0 2.197.272 2.849.816.656.544.984 1.35.984 2.42 0 1.101-.367 1.962-1.103 2.58-.73.618-1.713.927-2.946.927H8.597zm0-5.014v3.285h.943c.558 0 .989-.146 1.292-.44.302-.292.453-.713.453-1.262 0-.506-.149-.897-.447-1.171-.293-.274-.714-.412-1.263-.412h-.978z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12}
          x2={14.772}
          y1={6}
          y2={34.508}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(19 22.1667 -28.5 8.3125 13.5 13.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={13.802}
          x2={16.627}
          y1={6.5}
          y2={33.959}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={18.541}
          x2={7.503}
          y1={10.427}
          y2={21.567}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#FF7F48" />
          <stop offset={1} stopColor="#E5495B" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-13.4813 12.7784 -22.6908 -21.5077 23.258 16.223)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.152} stopColor="#AA1D2D" />
          <stop offset={0.381} stopColor="#D12B18" stopOpacity={0.44} />
          <stop offset={0.602} stopColor="#FF3C00" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(16.3418 -7.31643 13.9839 28.062 6.696 27.317)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.407} stopColor="#FF66FB" />
          <stop offset={1} stopColor="#EA3D01" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(8.21528 -9.41277 8.7681 7.30439 19.01 21.23)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD6EF9" />
          <stop offset={0.637} stopColor="#F94" />
          <stop offset={0.852} stopColor="#FCC479" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.92797 6.29296 -14.2253 -2.00224 18.194 12.188)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.144} stopColor="#FF8D13" />
          <stop offset={0.537} stopColor="#FF7F29" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -24.85 11.704) scale(25.4558)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8193E" />
          <stop offset={0.939} stopColor="#920616" />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 12.6 -14.3438 0 9.998 31.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
