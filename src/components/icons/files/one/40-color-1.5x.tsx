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
        d="M30.899 34.899A4.001 4.001 0 0 1 27 38H17c-6.075 0-11-4.925-11-11V9c0-1.9 1.325-3.49 3.101-3.899A4.002 4.002 0 0 1 13 2h13a8 8 0 0 1 8 8v21c0 1.9-1.325 3.49-3.101 3.899z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M13 3a3 3 0 0 0-3 3v21a7 7 0 0 0 7 7h13a3 3 0 0 0 3-3V10a7 7 0 0 0-7-7H13z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M13 3a3 3 0 0 0-3 3v21a7 7 0 0 0 7 7h13a3 3 0 0 0 3-3V10a7 7 0 0 0-7-7H13z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7 9c0-1.306.835-2.418 2-2.83V27a8 8 0 0 0 8 8h12.83A3.001 3.001 0 0 1 27 37H17c-5.523 0-10-4.477-10-10V9z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7 9c0-1.306.835-2.418 2-2.83V27a8 8 0 0 0 8 8h12.83A3.001 3.001 0 0 1 27 37H17c-5.523 0-10-4.477-10-10V9z"
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={4}
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.8}
        rx={4}
      />
      <path
        fill="#fff"
        d="M14.503 35h-2.276l-4.126-6.172a20.356 20.356 0 0 1-.294-.48 4.052 4.052 0 0 1-.181-.35h-.028c.01.177.016.4.02.67.005.27.008.586.008.948V35h-2.13V25h2.43l3.973 5.976c.084.135.165.272.244.412.084.134.161.27.23.404h.029a9.4 9.4 0 0 1-.021-.516 43.637 43.637 0 0 1-.007-.858V25h2.13v10z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M29 26.363c0 .904-.733 1.637-1.637 1.637L20 27.997V25a5.001 5.001 0 0 0-4.504-4.977 3.259 3.259 0 0 1 1.777-.523H29v6.863z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="m22 13.25 7-.25v7.364c0 .903-.733 1.636-1.636 1.636H22v-8.75z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M27.25 9c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 27.25 16h-1.5A1.75 1.75 0 0 0 24 17.75v2.5A1.75 1.75 0 0 1 22.25 22H19a4.992 4.992 0 0 0-4-2h-.999l.002-8.001a3 3 0 0 1 3-2.999H27.25z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M27.25 9c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 27.25 16h-1.5A1.75 1.75 0 0 0 24 17.75v2.5A1.75 1.75 0 0 1 22.25 22H19a4.992 4.992 0 0 0-4-2h-.999l.002-8.001a3 3 0 0 1 3-2.999H27.25z"
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
          gradientTransform="matrix(13.7222 26.9166 -20.5833 10.0937 15.306 11.854)"
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
          gradientTransform="matrix(13.7222 26.9166 -20.5833 10.0937 15.306 11.854)"
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
          gradientTransform="rotate(45 -24.85 11.707) scale(25.4558)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.072} stopColor="#AC13EB" />
          <stop offset={0.879} stopColor="#580087" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 12.6 -14.5125 0 10 31.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(23.7867 0 0 10.024 28.563 27)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={32.142}
          x2={23.507}
          y1={17.376}
          y2={13.011}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={29.663}
          x2={14.003}
          y1={12.882}
          y2={12.882}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.807} stopColor="#DE66FF" />
          <stop offset={1} stopColor="#FCB1FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.54034 12.3131 -22.124 -12.4858 30.079 8.099)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
