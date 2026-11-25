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
        d="M8 2a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a6 6 0 0 0 6 6h6a2 2 0 0 0 2-2 2 2 0 0 0 2-2V6a4 4 0 0 0-4-4H8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M8 3a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h8a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M8 3a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h8a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M5 6a1 1 0 0 1 1-1v11a4 4 0 0 0 4 4h7a1 1 0 0 1-1 1h-6a5 5 0 0 1-5-5V6z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M5 6a1 1 0 0 1 1-1v11a4 4 0 0 0 4 4h7a1 1 0 0 1-1 1h-6a5 5 0 0 1-5-5V6z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.8}
        rx={2}
      />
      <path
        fill="#fff"
        d="M8.693 21H7.332l-2.468-3.703a12.19 12.19 0 0 1-.175-.289 2.648 2.648 0 0 1-.109-.209h-.016c.005.106.01.24.012.402.003.162.004.351.004.569V21H3.307v-6H4.76l2.375 3.586c.05.08.1.163.147.247.05.08.096.161.137.242h.017a5.673 5.673 0 0 1-.013-.31c-.002-.139-.004-.31-.004-.514V15h1.274v6z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M17 15.09a.91.91 0 0 1-.91.91L12 15.999V15a3 3 0 0 0-2.37-2.933 1.81 1.81 0 0 1 1.188-.442H17v3.466z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M13.375 8.324 17 8.188v3.465a.91.91 0 0 1-.91.91h-2.715v-4.24z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M16.152 6c.537 0 .848.436.848.973v1.492a.98.98 0 0 1-.98.973h-.422a.973.973 0 0 0-.973.972v1.18a.973.973 0 0 1-.973.973h-2.908A2.983 2.983 0 0 0 9 12l.001-4.281c0-.95.77-1.719 1.719-1.719h5.432z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M16.152 6c.537 0 .848.436.848.973v1.492a.98.98 0 0 1-.98.973h-.422a.973.973 0 0 0-.973.972v1.18a.973.973 0 0 1-.973.973h-2.908A2.983 2.983 0 0 0 9 12l.001-4.281c0-.95.77-1.719 1.719-1.719h5.432z"
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
        <linearGradient
          id={iconId + '-d'}
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
          id={iconId + '-e'}
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
          id={iconId + '-f'}
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
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 7 -8.0625 0 6 19)"
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
          gradientTransform="matrix(12.8844 0 0 5.84736 16.888 16)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={18.808}
          x2={14.144}
          y1={10.581}
          y2={8.271}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={17.484}
          x2={9.002}
          y1={8.143}
          y2={8.143}
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
          gradientTransform="matrix(-4.08436 6.79786 -11.9839 -6.8932 17.71 5.502)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
