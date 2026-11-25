'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect
        width={20}
        height={16}
        x={2}
        y={4}
        fill={'url(#' + iconId + '-a)' + ''}
        rx={3.5}
      />
      <rect
        width={18}
        height={14}
        x={3}
        y={5}
        fill={'url(#' + iconId + '-b)' + ''}
        rx={2.5}
      />
      <rect
        width={18}
        height={14}
        x={3}
        y={5}
        fill={'url(#' + iconId + '-c)' + ''}
        fillOpacity={0.28}
        rx={2.5}
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M8 8.5A1.5 1.5 0 0 1 9.5 7h4A2.5 2.5 0 0 1 16 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-4A2.5 2.5 0 0 1 8 14.5v-6z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8 8.5A1.5 1.5 0 0 1 9.5 7h4A2.5 2.5 0 0 1 16 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-4A2.5 2.5 0 0 1 8 14.5v-6z"
      />
      <rect
        width={1}
        height={14}
        x={20}
        y={5}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={0.5}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M19 7a1 1 0 0 1 1-1v12a1 1 0 0 1-1-1V7z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.458}
          x2={10.193}
          y1={4}
          y2={20.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD3D8" />
          <stop offset={1} stopColor="#9AA6AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.813}
          x2={10.289}
          y1={5}
          y2={19.236}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626C72" />
          <stop offset={1} stopColor="#4D565C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={12}
          x2={12}
          y1={5}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.6} stopColor="#5C666C" stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={10.222}
          x2={11.79}
          y1={7}
          y2={17.033}
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
          gradientTransform="matrix(4.22222 7.91667 -6.33333 2.96875 10.556 9.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={20.375}
          x2={25.068}
          y1={5}
          y2={6.609}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF0F2" />
          <stop offset={1} stopColor="#C9CED0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={19.5}
          x2={19.5}
          y1={6}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD1D6" />
          <stop offset={1} stopColor="#929CA2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
