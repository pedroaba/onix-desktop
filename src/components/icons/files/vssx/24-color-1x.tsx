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
        d="M2 6a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <rect
        width={5.5}
        height={3.5}
        x={12.5}
        y={8}
        fill={'url(#' + iconId + '-d)' + ''}
        rx={0.75}
      />
      <rect
        width={5.5}
        height={3.5}
        x={12.5}
        y={12.5}
        fill={'url(#' + iconId + '-e)' + ''}
        rx={0.75}
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M10.75 8a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-2A.75.75 0 0 1 6.75 8h4z"
      />
      <rect width={10} height={10} x={1} y={13} fill="#185ABD" rx={2} />
      <path
        fill="#fff"
        d="m8.814 15-2.062 6H5.224l-2.037-6h1.436l1.265 4.034c.03.094.054.177.07.246.017.067.037.148.059.243h.025l.054-.251c.014-.07.037-.155.067-.255L7.42 15h1.394z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.458}
          x2={10.193}
          y1={4}
          y2={20.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8}
          x2={9.386}
          y1={5}
          y2={19.254}
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
          gradientTransform="matrix(9.5 11.0833 -14.25 4.15625 8.75 8.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={15.25}
          x2={15.25}
          y1={8}
          y2={11.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28A8EA" />
          <stop offset={1} stopColor="#1490DF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={15.25}
          x2={15.25}
          y1={12.5}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B7CD3" />
          <stop offset={1} stopColor="#1D59C1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.75}
          x2={8.75}
          y1={8}
          y2={11.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#50D9FF" />
          <stop offset={1} stopColor="#28A8EA" />
        </linearGradient>
      </defs>
    </svg>
  )
}
