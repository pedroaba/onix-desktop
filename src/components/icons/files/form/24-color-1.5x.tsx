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
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M25 25.5a1.5 1.5 0 0 1-1.5 1.5H17v-3.5a4.5 4.5 0 0 0-4.5-4.5h-2.433a4.25 4.25 0 0 1 4.183-3.5H25v10z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        d="M25 25.5a1.5 1.5 0 0 1-1.5 1.5H17v-3.5a4.5 4.5 0 0 0-4.5-4.5h-2.433a4.25 4.25 0 0 1 4.183-3.5H25v10z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M23.363 9C24.267 9 25 9.733 25 10.637v5.726c0 .904-.733 1.637-1.637 1.637H13.018c-.888 0-1.683.388-2.235 1H10v-6.982A3.018 3.018 0 0 1 13.018 9h10.345z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M23.363 9C24.267 9 25 9.733 25 10.637v5.726c0 .904-.733 1.637-1.637 1.637H13.018c-.888 0-1.683.388-2.235 1H10v-6.982A3.018 3.018 0 0 1 13.018 9h10.345z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M20.5 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M20.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M22.1 20.5c.22 0 .4.18.4.4v3.2a.4.4 0 0 1-.4.4h-3.2a.4.4 0 0 1-.4-.4v-3.2c0-.22.18-.4.4-.4h3.2z"
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={3.5}
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.6}
        rx={3.5}
      />
      <path
        fill="#fff"
        d="M11.096 24.682H7.927v2.165h2.912v1.67H7.927V32H5.904v-9h5.192v1.682z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
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
          gradientTransform="matrix(-9.20803 -15.6071 13.9786 -7.94138 21.652 29.053)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.008} stopColor="#1A7F7C" />
          <stop offset={0.45} stopColor="#14717C" />
          <stop offset={0.803} stopColor="#08567B" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-6.01661 -5.90401 4.65863 -4.56956 14.536 17.554)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={0.992} stopColor="#06517B" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={10.338}
          x2={25.722}
          y1={17.774}
          y2={10.388}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.227} stopColor="#15B4D5" />
          <stop offset={1} stopColor="#43E5CA" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={14.133}
          x2={10}
          y1={14.047}
          y2={14.047}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#29CBDC" stopOpacity={0} />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={18.358}
          x2={22.215}
          y1={10.929}
          y2={16.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={19.429}
          x2={21.358}
          y1={12.214}
          y2={15}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={17.318}
          x2={19.398}
          y1={20.786}
          y2={25.327}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#20AC9D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(15 15 -15 15 1 20)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#009BBC" />
          <stop offset={0.591} stopColor="#01657D" />
          <stop offset={0.941} stopColor="#014354" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 10.5 -11.9531 0 8.5 29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
