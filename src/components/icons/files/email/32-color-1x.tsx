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
        d="M2 8a3 3 0 0 1 3-3h19a6 6 0 0 1 6 6v13a3 3 0 0 1-3 3H8a6 6 0 0 1-6-6V8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M26.904 9.205a.5.5 0 0 1-.11.699l-8.731 6.37a3.5 3.5 0 0 1-4.126 0l-8.732-6.37a.5.5 0 0 1 .59-.808l8.732 6.37a2.5 2.5 0 0 0 2.946 0l8.732-6.37a.5.5 0 0 1 .699.11z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.042}
          x2={13.385}
          y1={5}
          y2={27.366}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={10.222}
          x2={12.181}
          y1={6}
          y2={26.367}
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
          gradientTransform="matrix(13.7222 15.8333 -20.5833 5.9375 11.306 11.208)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={12.5}
          x2={19}
          y1={2.5}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
