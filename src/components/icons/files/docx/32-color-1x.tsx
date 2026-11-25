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
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M5 5a3 3 0 0 1 3-3h13a6 6 0 0 1 6 6v19a3 3 0 0 1-3 3H11a6 6 0 0 1-6-6V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 5a2 2 0 0 1 2-2h13a5 5 0 0 1 5 5v19a2 2 0 0 1-2 2H11a5 5 0 0 1-5-5V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M6 5a2 2 0 0 1 2-2h13a5 5 0 0 1 5 5v19a2 2 0 0 1-2 2H11a5 5 0 0 1-5-5V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M22 17v5.531A1.47 1.47 0 0 1 20.531 24H15v-3a4.001 4.001 0 0 0-2.973-3.866L15.571 13 22 17z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M22 17.031a1.47 1.47 0 0 1-1.469 1.469h-6.41A3.991 3.991 0 0 0 11 17h-1v-2.3a1.89 1.89 0 0 1 1.878-1.89l8.855-.053L22 12v5.031z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.6}
        d="M22 17.031a1.47 1.47 0 0 1-1.469 1.469h-6.41A3.991 3.991 0 0 0 11 17h-1v-2.3a1.89 1.89 0 0 1 1.878-1.89l8.855-.053L22 12v5.031z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M22 17.031a1.47 1.47 0 0 1-1.469 1.469h-6.41A3.991 3.991 0 0 0 11 17h-1v-2.3a1.89 1.89 0 0 1 1.878-1.89l8.855-.053L22 12v5.031z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M20.531 8A1.47 1.47 0 0 1 22 9.469v2.562a1.47 1.47 0 0 1-1.469 1.469h-8.076A2.455 2.455 0 0 0 10 15.955V10.52A2.519 2.519 0 0 1 12.519 8h8.012z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        d="M20.531 8A1.47 1.47 0 0 1 22 9.469v2.562a1.47 1.47 0 0 1-1.469 1.469h-8.076A2.455 2.455 0 0 0 10 15.955V10.52A2.519 2.519 0 0 1 12.519 8h8.012z"
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={3}
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.65}
        rx={3}
      />
      <path
        fill="#fff"
        d="m11.7 21-1.508 7H8.39l-.89-4.2-.932 4.2h-1.82L3.3 21h1.486l.894 4.62.888-4.62H8.39l.93 4.62.872-4.62H11.7z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.104}
          x2={16.851}
          y1={2}
          y2={29.972}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.556}
          x2={15.786}
          y1={3}
          y2={29.035}
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
          gradientTransform="matrix(10.5556 20.5833 -15.8333 7.71875 12.389 9.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(27.5042 0 0 8.52474 21.416 24)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.18} stopColor="#1657F4" />
          <stop offset={0.575} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={10.107}
          x2={19.174}
          y1={21.094}
          y2={21.094}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66C0FF" />
          <stop offset={0.256} stopColor="#0094F0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.98381 15.2097 -17.5489 -41.5814 21.946 13.745)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.14} stopColor="#D471FF" />
          <stop offset={0.831} stopColor="#509DF5" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 13.3025 -40.1142 0 20.214 24.117)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.283} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={10.107}
          x2={21.944}
          y1={12.852}
          y2={13.029}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.201} stopColor="#3BD5FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-11.335 2.92732 -7.10275 -29.8256 21.946 9.18)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.061} stopColor="#E4A7FE" />
          <stop offset={0.539} stopColor="#E4A7FE" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -21.228 10.207) scale(18.3848)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.081} stopColor="#367AF2" />
          <stop offset={0.872} stopColor="#001A8F" />
        </radialGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 9.1 -10.3715 0 7.5 25.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.587} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.974} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
