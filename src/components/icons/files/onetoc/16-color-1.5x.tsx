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
        d="M4 4a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M19 20a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1.99 1.99 0 0 0 1-.268V20z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M19 20a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1.99 1.99 0 0 0 1-.268V20z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16 3a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H6c-.365 0-.706.1-1 .27V4a1 1 0 0 1 1-1h10z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M16 3a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H6c-.365 0-.706.1-1 .27V4a1 1 0 0 1 1-1h10z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M16.125 14.09a.91.91 0 0 1-.91.91L12 14.999A3 3 0 0 0 9 12h-.943c.198-.79.91-1.375 1.761-1.375h6.307v3.466z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="m12.375 7.324 3.75-.136v3.465a.91.91 0 0 1-.91.91h-2.84V7.324z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M15.152 5c.537 0 .973.436.973.973v1.492a.973.973 0 0 1-.973.973h-.554a.973.973 0 0 0-.973.972v1.18a.973.973 0 0 1-.973.973H9.72A1.71 1.71 0 0 0 8.577 12H8l.001-5.281c0-.95.77-1.719 1.719-1.719h5.432z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M15.152 5c.537 0 .973.436.973.973v1.492a.973.973 0 0 1-.973.973h-.554a.973.973 0 0 0-.973.972v1.18a.973.973 0 0 1-.973.973H9.72A1.71 1.71 0 0 0 8.577 12H8l.001-5.281c0-.95.77-1.719 1.719-1.719h5.432z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.8}
        rx={2}
      />
      <path
        fill="#fff"
        d="M8.693 21H7.332l-2.468-3.703a9.139 9.139 0 0 1-.175-.289 2.648 2.648 0 0 1-.108-.209h-.017a30.74 30.74 0 0 1 .017.971V21H3.307v-6H4.76l2.376 3.586c.05.08.098.163.146.247.05.08.096.161.137.242h.017a5.683 5.683 0 0 1-.012-.31c-.003-.139-.005-.31-.005-.514V15h1.274v6z"
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
          gradientTransform="matrix(12.9749 0 0 5.84736 15.886 15)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={17.808}
          x2={13.144}
          y1={9.58}
          y2={7.271}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={16.484}
          x2={8.002}
          y1={7.536}
          y2={7.536}
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
          gradientTransform="matrix(-4.08436 8.04211 -11.9839 -8.1549 16.71 4.411)"
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
          gradientTransform="rotate(45 -15.192 7.707) scale(14.1421)"
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
