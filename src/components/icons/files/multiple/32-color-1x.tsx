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
      </defs>
    </svg>
  )
}
