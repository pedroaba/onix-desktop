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
        d="M6 6a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v24a4 4 0 0 1-4 4H14a8 8 0 0 1-8-8V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 6a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v24a4 4 0 0 1-4 4H14a8 8 0 0 1-8-8V6z"
      />
      <path
        stroke={'url(#' + iconId + '-c)' + ''}
        strokeDasharray="6 3.5"
        strokeLinecap="round"
        d="M6.5 6A3.5 3.5 0 0 1 10 2.5h16a7.5 7.5 0 0 1 7.5 7.5v24a3.5 3.5 0 0 1-3.5 3.5H14A7.5 7.5 0 0 1 6.5 30V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M27 21.053v6.197A1.75 1.75 0 0 1 25.25 29H20v-4a5.001 5.001 0 0 0-3.473-4.762L20 16l7 5.053z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M27 21.25A1.75 1.75 0 0 1 25.25 23h-5.667A5 5 0 0 0 15 20h-2v-1.48a2.25 2.25 0 0 1 2.25-2.25h10.194L27 15v6.25z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.6}
        d="M27 21.25A1.75 1.75 0 0 1 25.25 23h-5.667A5 5 0 0 0 15 20h-2v-1.48a2.25 2.25 0 0 1 2.25-2.25h10.194L27 15v6.25z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M27 21.25A1.75 1.75 0 0 1 25.25 23h-5.667A5 5 0 0 0 15 20h-2v-1.48a2.25 2.25 0 0 1 2.25-2.25h10.194L27 15v6.25z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M25.25 11c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 25.25 17H16a3 3 0 0 0-3 3v-6a3 3 0 0 1 3-3h9.25z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        d="M25.25 11c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 25.25 17H16a3 3 0 0 0-3 3v-6a3 3 0 0 1 3-3h9.25z"
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={4}
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.65}
        rx={4}
      />
      <path
        fill="#fff"
        d="m16 25-2.154 9.999-2.575.001L10 29l-1.331 6h-2.6L4 25.001h2.123L7.4 31.6l1.269-6.599h2.602L12.6 31.6l1.246-6.599L16 25z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.778}
          x2={19.575}
          y1={2}
          y2={38.068}
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
          gradientTransform="matrix(14.7778 28.5 -22.1667 10.6875 14.944 11.375)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={15.219}
          x2={21.256}
          y1={2.5}
          y2={37.429}
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
          gradientTransform="matrix(40.4362 0 0 10.0747 26.257 29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.18} stopColor="#1657F4" />
          <stop offset={0.575} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={13}
          x2={23.721}
          y1={25.398}
          y2={25.398}
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
          gradientTransform="matrix(-9.44088 20.1202 -20.7517 -55.0063 27 15.677)"
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
          gradientTransform="matrix(0 17.5974 -47.4352 0 24.952 29.398)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.283} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={13}
          x2={26.997}
          y1={15.5}
          y2={15.716}
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
          gradientTransform="matrix(-13.4036 3.35377 -8.39903 -34.1706 27 11.293)"
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
          gradientTransform="rotate(45 -24.85 11.707) scale(25.4558)"
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
          gradientTransform="matrix(0 12.6 -14.3606 0 10 31.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.587} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.974} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
