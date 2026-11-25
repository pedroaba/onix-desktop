'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M9 8.5A4.5 4.5 0 0 1 13.5 4H30a9 9 0 0 1 9 9v26.5a4.5 4.5 0 0 1-4.5 4.5H18a9 9 0 0 1-9-9V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 0 1-3.5 3.5H18a8 8 0 0 1-8-8V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 0 1-3.5 3.5H18a8 8 0 0 1-8-8V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M33 32.999a2 2 0 0 1-2.001 2L24 34.997V29.5a5.483 5.483 0 0 0-1.727-4H33v7.499z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M33 25.5a2 2 0 0 1-2 2h-6.5v-10H33v8z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M31 13a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-1.377A5.5 5.5 0 0 0 18.5 24h-3.496v-7.25a3.75 3.75 0 0 1 3.75-3.75H31z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M31 13a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-1.377A5.5 5.5 0 0 0 18.5 24h-3.496v-7.25a3.75 3.75 0 0 1 3.75-3.75H31z"
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-h)' + ''}
        rx={4.5}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        rx={4.5}
      />
      <path
        fill="#fff"
        d="M18.386 41h-2.722l-4.934-7.406c-.14-.223-.256-.416-.351-.577a5.252 5.252 0 0 1-.217-.419h-.034c.012.212.02.48.025.804.006.323.009.703.009 1.138V41H7.615V29h2.906l4.75 7.172c.101.161.198.326.293.493.1.162.192.324.276.486h.033a11.42 11.42 0 0 1-.025-.62 53.586 53.586 0 0 1-.008-1.029V29h2.546v12z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={18.688}
          x2={25.772}
          y1={4}
          y2={43.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={17.778}
          x2={24.218}
          y1={5}
          y2={42.963}
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
          gradientTransform="matrix(14.7778 30.0833 -22.1667 11.2812 18.944 14.896)"
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
          gradientTransform="matrix(89.7056 0 0 12.6971 31.35 35)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={36.816}
          x2={26.208}
          y1={22.97}
          y2={17.761}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={33.796}
          x2={15.004}
          y1={20.033}
          y2={20.033}
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
          gradientTransform="matrix(-9.04843 22.3061 -26.5489 -22.6189 34.295 11.367)"
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
          gradientTransform="rotate(45 -28.678 16.121) scale(28.2843)"
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
          gradientTransform="matrix(0 14 -16.125 0 13 37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
      </defs>
    </svg>
  )
}
