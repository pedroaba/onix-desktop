'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <rect
        width={16}
        height={12}
        x={2}
        y={4}
        fill={'url(#' + iconId + '-a)' + ''}
        rx={3}
      />
      <rect
        width={14}
        height={10}
        x={3}
        y={5}
        fill={'url(#' + iconId + '-b)' + ''}
        rx={2}
      />
      <rect
        width={14}
        height={10}
        x={3}
        y={5}
        fill={'url(#' + iconId + '-c)' + ''}
        fillOpacity={0.28}
        rx={2}
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7 6.75A.75.75 0 0 1 7.75 6h3.75A1.5 1.5 0 0 1 13 7.5v5.75a.75.75 0 0 1-.75.75H8.5A1.5 1.5 0 0 1 7 12.5V6.75z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7 6.75A.75.75 0 0 1 7.75 6h3.75A1.5 1.5 0 0 1 13 7.5v5.75a.75.75 0 0 1-.75.75H8.5A1.5 1.5 0 0 1 7 12.5V6.75z"
      />
      <rect
        width={1}
        height={10}
        x={16}
        y={5}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={0.5}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M15 7a1 1 0 0 1 1-1v8a1 1 0 0 1-1-1V7z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.167}
          x2={8.388}
          y1={4}
          y2={16.211}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD3D8" />
          <stop offset={1} stopColor="#9AA6AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.521}
          x2={8.491}
          y1={5}
          y2={15.185}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626C72" />
          <stop offset={1} stopColor="#4D565C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={10}
          x2={10}
          y1={5}
          y2={15}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.6} stopColor="#5C666C" stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8.667}
          x2={10}
          y1={6}
          y2={14}
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
          gradientTransform="matrix(3.16667 6.33333 -4.75 2.375 8.917 8.083)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={16.375}
          x2={20.638}
          y1={5}
          y2={7.046}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF0F2" />
          <stop offset={1} stopColor="#C9CED0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={15.5}
          x2={15.5}
          y1={6}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD1D6" />
          <stop offset={1} stopColor="#929CA2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
