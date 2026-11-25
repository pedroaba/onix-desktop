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
        d="M16.125 16.09a.91.91 0 0 1-.91.91L12 16.999V15c0-.968-.46-1.826-1.172-2.375h5.297v3.466z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M16.125 12.653a.91.91 0 0 1-.91.91h-2.84v-4.24l3.75-.136v3.465z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M15.152 7c.537 0 .973.436.973.973v1.492a.973.973 0 0 1-.973.973h-.554a.973.973 0 0 0-.973.972v1.18a.973.973 0 0 1-.973.973h-1.02A2.998 2.998 0 0 0 9 12H8l.001-3.281c0-.95.77-1.719 1.719-1.719h5.432z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M15.152 7c.537 0 .973.436.973.973v1.492a.973.973 0 0 1-.973.973h-.554a.973.973 0 0 0-.973.972v1.18a.973.973 0 0 1-.973.973h-1.02A2.998 2.998 0 0 0 9 12H8l.001-3.281c0-.95.77-1.719 1.719-1.719h5.432z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-h)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        rx={2}
      />
      <path
        fill="#fff"
        d="M8.693 21H7.332l-2.468-3.703a12.19 12.19 0 0 1-.175-.289 2.648 2.648 0 0 1-.109-.209h-.016c.005.106.01.24.012.402.003.162.004.351.004.569V21H3.307v-6H4.76l2.375 3.586c.05.08.1.163.147.247.05.08.096.161.137.242h.017a5.673 5.673 0 0 1-.013-.31c-.002-.139-.004-.31-.004-.514V15h1.274v6z"
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
          gradientTransform="matrix(31.7531 0 0 5.84736 15.541 17)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={17.808}
          x2={13.144}
          y1={11.581}
          y2={9.271}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={16.484}
          x2={8.002}
          y1={9.859}
          y2={9.859}
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
          gradientTransform="matrix(-4.08436 9.06666 -11.9839 -9.19382 16.71 6.336)"
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
          gradientTransform="rotate(45 -15.192 7.707) scale(14.1421)"
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
          gradientTransform="matrix(0 7 -8.0625 0 6 19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
      </defs>
    </svg>
  )
}
