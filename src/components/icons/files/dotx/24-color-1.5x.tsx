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
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 5.5A3.5 3.5 0 0 1 9.5 2H23a7 7 0 0 1 7 7v21.5a3.5 3.5 0 0 1-3.5 3.5H13a7 7 0 0 1-7-7V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 5.5A3.5 3.5 0 0 1 9.5 2H23a7 7 0 0 1 7 7v21.5a3.5 3.5 0 0 1-3.5 3.5H13a7 7 0 0 1-7-7V5.5z"
      />
      <path
        stroke={'url(#' + iconId + '-c)' + ''}
        strokeDasharray="5 3.5"
        strokeLinecap="round"
        d="M6.5 5.5a3 3 0 0 1 3-3H23A6.5 6.5 0 0 1 29.5 9v21.5a3 3 0 0 1-3 3H13A6.5 6.5 0 0 1 6.5 27V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M25 19.053v6.197A1.75 1.75 0 0 1 23.25 27H17v-3.5a4.501 4.501 0 0 0-3.243-4.321L18 14l7 5.053z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M25 19.25A1.75 1.75 0 0 1 23.25 21h-7.009a4.495 4.495 0 0 0-3.741-2H11v-2.48a2.25 2.25 0 0 1 2.25-2.25h10.194L25 13v6.25z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.6}
        d="M25 19.25A1.75 1.75 0 0 1 23.25 21h-7.009a4.495 4.495 0 0 0-3.741-2H11v-2.48a2.25 2.25 0 0 1 2.25-2.25h10.194L25 13v6.25z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M25 19.25A1.75 1.75 0 0 1 23.25 21h-7.009a4.495 4.495 0 0 0-3.741-2H11v-2.48a2.25 2.25 0 0 1 2.25-2.25h10.194L25 13v6.25z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M23.25 9c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 23.25 15H14a3 3 0 0 0-3 3v-6a3 3 0 0 1 3-3h9.25z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        d="M23.25 9c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 23.25 15H14a3 3 0 0 0-3 3v-6a3 3 0 0 1 3-3h9.25z"
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={3.5}
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.65}
        rx={3.5}
      />
      <path
        fill="#fff"
        d="m13.9 23-1.938 8.999L9.644 32 8.5 26.6 7.302 32h-2.34L3.1 23.001h1.91l1.15 5.939 1.142-5.939h2.342l1.196 5.939 1.122-5.939L13.9 23z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.667}
          x2={18}
          y1={2}
          y2={34}
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
          gradientTransform="matrix(12.66668 25.3333 -18.99995 9.5 13.667 10.333)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={13.927}
          x2={19.474}
          y1={2.5}
          y2={33.364}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(34.8836 0 0 10.0747 24.358 27)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.18} stopColor="#1657F4" />
          <stop offset={0.575} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={11}
          x2={21.721}
          y1={23.398}
          y2={23.398}
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
          gradientTransform="matrix(-9.44088 20.1202 -20.7517 -55.0063 25 13.677)"
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
          gradientTransform="matrix(0 17.5974 -47.4352 0 22.952 27.398)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.283} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={11}
          x2={24.997}
          y1={13.5}
          y2={13.716}
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
          gradientTransform="matrix(-13.4036 3.35377 -8.39903 -34.1706 25 9.293)"
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
          gradientTransform="matrix(15 15 -15 15 1 20)"
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
          gradientTransform="matrix(0 10.5 -11.9672 0 8.5 29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.587} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.974} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
