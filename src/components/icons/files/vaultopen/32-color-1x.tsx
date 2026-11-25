'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <rect
        width={28}
        height={22}
        x={2}
        y={5}
        fill={'url(#' + iconId + '-a)' + ''}
        rx={5}
      />
      <rect
        width={24}
        height={18}
        x={4}
        y={7}
        fill={'url(#' + iconId + '-b)' + ''}
        rx={3}
      />
      <rect
        width={24}
        height={18}
        x={4}
        y={7}
        fill={'url(#' + iconId + '-c)' + ''}
        fillOpacity={0.28}
        rx={3}
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10 11a2 2 0 0 1 2-2h5.5a3.5 3.5 0 0 1 3.5 3.5V21a2 2 0 0 1-2 2h-5.5a3.5 3.5 0 0 1-3.5-3.5V11z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10 11a2 2 0 0 1 2-2h5.5a3.5 3.5 0 0 1 3.5 3.5V21a2 2 0 0 1-2 2h-5.5a3.5 3.5 0 0 1-3.5-3.5V11z"
      />
      <rect
        width={2}
        height={18}
        x={26}
        y={7}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={1}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M24 11a2 2 0 0 1 2-2v14a2 2 0 0 1-2-2V11z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.042}
          x2={13.385}
          y1={5}
          y2={27.366}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD3D8" />
          <stop offset={1} stopColor="#9AA6AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.75}
          x2={13.582}
          y1={7}
          y2={25.317}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626C72" />
          <stop offset={1} stopColor="#4D565C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={16}
          x2={16}
          y1={7}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.6} stopColor="#5C666C" stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.056}
          x2={15.288}
          y1={9}
          y2={23.034}
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
          gradientTransform="matrix(5.80556 11.0833 -8.70833 4.15625 13.514 12.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={26.75}
          x2={34.917}
          y1={7}
          y2={11.356}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF0F2" />
          <stop offset={1} stopColor="#C9CED0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={25}
          x2={25}
          y1={9}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD1D6" />
          <stop offset={1} stopColor="#929CA2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
