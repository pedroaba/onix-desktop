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
        d="M11 2a3 3 0 0 0-3 3 3 3 0 0 0-3 3v13a9 9 0 0 0 9 9h7a3 3 0 0 0 3-3 3 3 0 0 0 3-3V8a6 6 0 0 0-6-6H11z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M8 21a6 6 0 0 0 6 6h9a2 2 0 0 1-2 2h-7a8 8 0 0 1-8-8V8a2 2 0 0 1 2-2v15zM21 3a5 5 0 0 1 5 5v16a2 2 0 0 1-2 2H14a5 5 0 0 1-5-5V5a2 2 0 0 1 2-2h10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M8 21a6 6 0 0 0 6 6h9a2 2 0 0 1-2 2h-7a8 8 0 0 1-8-8V8a2 2 0 0 1 2-2v15zM21 3a5 5 0 0 1 5 5v16a2 2 0 0 1-2 2H14a5 5 0 0 1-5-5V5a2 2 0 0 1 2-2h10z"
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-d)' + ''}
        rx={3}
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        rx={3}
      />
      <path
        fill="#fff"
        d="M10.65 28H9.057l-2.886-4.32a10.56 10.56 0 0 1-.205-.337 3.076 3.076 0 0 1-.127-.244h-.02c.007.124.012.28.015.469.003.188.005.41.005.663V28H4.35v-7h1.7l2.778 4.183c.059.095.116.19.171.288.059.095.112.19.161.284h.02a6.602 6.602 0 0 1-.015-.362 30.791 30.791 0 0 1-.005-.6V21h1.49v7z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M23 20.545c0 .803-.652 1.455-1.455 1.455L15 21.998V21a4.001 4.001 0 0 0-2.898-3.846A2.908 2.908 0 0 1 14.909 15H23v5.545z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="m17 10.719 6-.219v4.546c0 .803-.651 1.454-1.454 1.454H17v-5.781z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M21.444 7C22.304 7 23 7.697 23 8.556v2.388c0 .86-.697 1.556-1.556 1.556h-.888c-.86 0-1.556.697-1.556 1.556v.888c0 .86-.697 1.556-1.556 1.556h-2.697c-.8 0-1.52.343-2.022.89-.232-.11-.475-.2-.728-.265L12 9.749A2.751 2.751 0 0 1 14.75 7h6.694z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M21.444 7C22.304 7 23 7.697 23 8.556v2.388c0 .86-.697 1.556-1.556 1.556h-.888c-.86 0-1.556.697-1.556 1.556v.888c0 .86-.697 1.556-1.556 1.556h-2.697c-.8 0-1.52.343-2.022.89-.232-.11-.475-.2-.728-.265L12 9.749A2.751 2.751 0 0 1 14.75 7h6.694z"
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
          gradientTransform="rotate(45 -21.228 10.207) scale(18.3848)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.072} stopColor="#AC13EB" />
          <stop offset={0.879} stopColor="#580087" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 9.1 -10.4813 0 7.5 25.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(20.6151 0 0 9.35577 23.621 23)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={25.693}
          x2={18.23}
          y1={14.329}
          y2={10.633}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={24.575}
          x2={11.003}
          y1={10.429}
          y2={10.429}
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
          gradientTransform="matrix(-6.53498 10.8766 -19.1742 -11.0291 24.935 6.204)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
