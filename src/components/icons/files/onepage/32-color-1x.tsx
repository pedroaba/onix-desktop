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
        d="M22 22.545c0 .803-.652 1.455-1.455 1.455L15 23.998V21a4.001 4.001 0 0 0-2.968-3.865c.277-.088.572-.135.877-.135H22v5.545z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M22 17.046c0 .803-.651 1.454-1.454 1.454H16v-6.781l6-.219v5.546z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M20.444 8C21.304 8 22 8.697 22 9.556v2.388c0 .86-.697 1.556-1.556 1.556h-.888c-.86 0-1.556.697-1.556 1.556v1.888c0 .86-.697 1.556-1.556 1.556h-2.323A3.991 3.991 0 0 0 11 17H9.998l.001-6.251A2.75 2.75 0 0 1 12.749 8h7.695z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M20.444 8C21.304 8 22 8.697 22 9.556v2.388c0 .86-.697 1.556-1.556 1.556h-.888c-.86 0-1.556.697-1.556 1.556v1.888c0 .86-.697 1.556-1.556 1.556h-2.323A3.991 3.991 0 0 0 11 17H9.998l.001-6.251A2.75 2.75 0 0 1 12.749 8h7.695z"
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-h)' + ''}
        rx={3}
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        rx={3}
      />
      <path
        fill="#fff"
        d="M10.65 28H9.057l-2.886-4.32a10.56 10.56 0 0 1-.205-.337 3.076 3.076 0 0 1-.127-.244h-.02c.007.124.012.28.015.469.003.188.005.41.005.663V28H4.35v-7h1.7l2.778 4.183c.059.095.116.19.171.288.059.095.112.19.161.284h.02a6.602 6.602 0 0 1-.015-.362 30.791 30.791 0 0 1-.005-.6V21h1.49v7z"
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
          gradientTransform="matrix(30.9257 0 0 9.35577 21.431 24)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={24.693}
          x2={17.23}
          y1={15.329}
          y2={11.633}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={22.575}
          x2={9.002}
          y1={12.375}
          y2={12.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.807} stopColor="#DE66FF" />
          <stop offset={1} stopColor="#FCB1FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-6.53551 13.8762 -19.1758 -14.0708 22.935 6.984)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -21.228 10.207) scale(18.3848)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.072} stopColor="#AC13EB" />
          <stop offset={0.879} stopColor="#580087" />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 9.1 -10.4813 0 7.5 25.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
      </defs>
    </svg>
  )
}
