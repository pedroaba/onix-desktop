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
        d="M9 8.5A4.5 4.5 0 0 1 13.5 4H30a9 9 0 0 1 9 9v26.5a4.5 4.5 0 0 1-4.5 4.5h-21A4.5 4.5 0 0 1 9 39.5v-31z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M38 35.5a3.5 3.5 0 0 1-3.5 3.5h-21a.5.5 0 0 0 0 1h21a4.49 4.49 0 0 0 3.5-1.673V39.5a3.5 3.5 0 0 1-3.5 3.5h-21a3.5 3.5 0 1 1 0-7h21a4.492 4.492 0 0 0 3.5-1.67v1.17z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M38 35.5a3.5 3.5 0 0 1-3.5 3.5h-21a.5.5 0 0 0 0 1h21a4.49 4.49 0 0 0 3.5-1.673V39.5a3.5 3.5 0 0 1-3.5 3.5h-21a3.5 3.5 0 1 1 0-7h21a4.492 4.492 0 0 0 3.5-1.67v1.17z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M30 5a8 8 0 0 1 8 8v18.5a3.5 3.5 0 0 1-3.5 3.5h-21a4.491 4.491 0 0 0-3.5 1.672V8.5A3.5 3.5 0 0 1 13.5 5H30z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M30 5a8 8 0 0 1 8 8v18.5a3.5 3.5 0 0 1-3.5 3.5h-21a4.491 4.491 0 0 0-3.5 1.672V8.5A3.5 3.5 0 0 1 13.5 5H30z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M33 28.999a2 2 0 0 1-2.001 2L24 30.997V29.5a5.5 5.5 0 0 0-5.5-5.5h-3.208A4 4 0 0 1 19 21.5h14v7.499z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M24.5 13.5H33v8a2 2 0 0 1-2 2h-6.5v-10z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M31 9a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-6.25a3.73 3.73 0 0 0-1.868.5h-1.878V12.75A3.75 3.75 0 0 1 18.754 9H31z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M31 9a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-6.25a3.73 3.73 0 0 0-1.868.5h-1.878V12.75A3.75 3.75 0 0 1 18.754 9H31z"
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={4.5}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-k)' + ''}
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
        <linearGradient
          id={iconId + '-d'}
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
          id={iconId + '-e'}
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
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(29.0147 0 0 12.6971 32.467 31)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={36.816}
          x2={26.208}
          y1={18.97}
          y2={13.761}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={33.796}
          x2={15.004}
          y1={14.747}
          y2={14.747}
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
          gradientTransform="matrix(-9.04843 18.2268 -26.5489 -18.4824 34.295 7.666)"
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
          gradientTransform="rotate(45 -28.678 16.121) scale(28.2843)"
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
