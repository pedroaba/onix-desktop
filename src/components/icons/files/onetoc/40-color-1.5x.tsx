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
        d="M6 6a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v24a4 4 0 0 1-4 4H10.5A4.5 4.5 0 0 1 6 33.5V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M33 30a3 3 0 0 1-3 3H10.5a.5.5 0 0 0 0 1H30a3.99 3.99 0 0 0 3-1.356V34a3 3 0 0 1-3 3H10.5a3.5 3.5 0 1 1 0-7H30a3.99 3.99 0 0 0 3-1.355V30z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M33 30a3 3 0 0 1-3 3H10.5a.5.5 0 0 0 0 1H30a3.99 3.99 0 0 0 3-1.356V34a3 3 0 0 1-3 3H10.5a3.5 3.5 0 1 1 0-7H30a3.99 3.99 0 0 0 3-1.355V30z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M26 3a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10.5A4.491 4.491 0 0 0 7 30.672V6a3 3 0 0 1 3-3h16z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M26 3a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10.5A4.491 4.491 0 0 0 7 30.672V6a3 3 0 0 1 3-3h16z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M28 23.363c0 .904-.733 1.637-1.637 1.637L20 24.998A5 5 0 0 0 15 20h-1.907a3.273 3.273 0 0 1 3.18-2.5H28v5.863z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="m21 11.25 7-.25v6.364c0 .903-.733 1.636-1.637 1.636H21v-7.75z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M26.25 7c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 26.25 13h-1.5A1.75 1.75 0 0 0 23 14.75v2.5A1.75 1.75 0 0 1 21.25 19H16a2.99 2.99 0 0 0-2.231 1H13l.003-10.001a3 3 0 0 1 3-2.999H26.25z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M26.25 7c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 26.25 13h-1.5A1.75 1.75 0 0 0 23 14.75v2.5A1.75 1.75 0 0 1 21.25 19H16a2.99 2.99 0 0 0-2.231 1H13l.003-10.001a3 3 0 0 1 3-2.999H26.25z"
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
        fillOpacity={0.8}
        rx={4}
      />
      <path
        fill="#fff"
        d="M14.503 35h-2.276l-4.126-6.172a20.356 20.356 0 0 1-.294-.48 4.052 4.052 0 0 1-.181-.35h-.028c.01.177.016.4.02.67.005.27.008.586.008.948V35h-2.13V25h2.43l3.973 5.976c.084.135.165.272.244.412.084.134.161.27.23.404h.029a9.4 9.4 0 0 1-.021-.516 43.637 43.637 0 0 1-.007-.858V25h2.13v10z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={15.042}
          x2={21.203}
          y1={2}
          y2={37.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
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
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
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
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(23.9347 0 0 10.024 27.56 25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={31.142}
          x2={22.506}
          y1={15.376}
          y2={11.011}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={28.663}
          x2={13.003}
          y1={11.479}
          y2={11.479}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.807} stopColor="#DE66FF" />
          <stop offset={1} stopColor="#FCB1FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.54034 14.2074 -22.124 -14.4067 29.079 5.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -24.85 11.707) scale(25.4558)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.072} stopColor="#AC13EB" />
          <stop offset={0.879} stopColor="#580087" />
        </radialGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 12.6 -14.5125 0 10 31.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
      </defs>
    </svg>
  )
}
