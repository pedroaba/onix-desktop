'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <rect
        width={32}
        height={24}
        x={2}
        y={6}
        fill={'url(#' + iconId + '-a)' + ''}
        rx={6}
      />
      <rect
        width={28}
        height={20}
        x={4}
        y={8}
        fill={'url(#' + iconId + '-b)' + ''}
        rx={4}
      />
      <rect
        width={28}
        height={20}
        x={4}
        y={8}
        fill={'url(#' + iconId + '-c)' + ''}
        fillOpacity={0.28}
        rx={4}
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M11 12a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2h-6a4 4 0 0 1-4-4V12z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M11 12a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2h-6a4 4 0 0 1-4-4V12z"
      />
      <rect
        width={2}
        height={20}
        x={30}
        y={8}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={1}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M28 12a2 2 0 0 1 2-2v16a2 2 0 0 1-2-2V12z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.333}
          x2={14.776}
          y1={6}
          y2={30.422}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD3D8" />
          <stop offset={1} stopColor="#9AA6AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.042}
          x2={14.982}
          y1={8}
          y2={28.371}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626C72" />
          <stop offset={1} stopColor="#4D565C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={18}
          x2={18}
          y1={8}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.6} stopColor="#5C666C" stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={14.333}
          x2={17}
          y1={10}
          y2={26}
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
          gradientTransform="matrix(6.33334 12.6667 -9.49998 4.74998 14.834 14.166)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={30.75}
          x2={39.276}
          y1={8}
          y2={12.092}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF0F2" />
          <stop offset={1} stopColor="#C9CED0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={29}
          x2={29}
          y1={10}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD1D6" />
          <stop offset={1} stopColor="#929CA2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
