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
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 4a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 4a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 4a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16 12.942v3.14a.918.918 0 0 1-.918.918H12v-2a3 3 0 0 0-2.067-2.85l1.78-2.233L16 12.942z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M16 12.748a.919.919 0 0 1-.918.919h-3.397A2.997 2.997 0 0 0 9 12H8v-.812a1.18 1.18 0 0 1 1.174-1.18l5.982-.033L16 9.5v3.248z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.6}
        d="M16 12.748a.919.919 0 0 1-.918.919h-3.397A2.997 2.997 0 0 0 9 12H8v-.812a1.18 1.18 0 0 1 1.174-1.18l5.982-.033L16 9.5v3.248z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M16 12.748a.919.919 0 0 1-.918.919h-3.397A2.997 2.997 0 0 0 9 12H8v-.812a1.18 1.18 0 0 1 1.174-1.18l5.982-.033L16 9.5v3.248z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M15.082 7c.507 0 .918.411.918.918v1.497a.918.918 0 0 1-.918.918H9.476c-.815 0-1.476.66-1.476 1.476V8.574C8 7.704 8.705 7 9.574 7h5.508z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        d="M15.082 7c.507 0 .918.411.918.918v1.497a.918.918 0 0 1-.918.918H9.476c-.815 0-1.476.66-1.476 1.476V8.574C8 7.704 8.705 7 9.574 7h5.508z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.65}
        rx={2}
      />
      <path
        fill="#fff"
        d="m9.6 15-1.292 6H6.763L6 17.4 5.2 21H3.64L2.4 15h1.274l.766 3.96L5.2 15h1.562l.797 3.96.748-3.96H9.6z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={9.167}
          x2={12.5}
          y1={2}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.889}
          x2={11.787}
          y1={3}
          y2={21.034}
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
          gradientTransform="matrix(7.38889 14.25 -11.0833 5.34375 9.472 7.688)"
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
          gradientTransform="matrix(22.1992 0 0 5.49017 15.528 17)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.18} stopColor="#1657F4" />
          <stop offset={0.575} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8.071}
          x2={14.116}
          y1={15.135}
          y2={15.135}
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
          gradientTransform="matrix(-5.32254 9.42419 -11.6993 -25.7646 15.964 10.58)"
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
          gradientTransform="matrix(0 8.24248 -26.7428 0 14.81 17.008)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.283} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={8.071}
          x2={15.962}
          y1={9.917}
          y2={10.047}
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
          gradientTransform="matrix(-7.55663 1.7597 -4.73517 -17.929 15.964 7.71)"
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
          gradientTransform="rotate(45 -15.192 7.707) scale(14.1421)"
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
          gradientTransform="matrix(0 7 -7.97811 0 6 19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.587} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.974} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
