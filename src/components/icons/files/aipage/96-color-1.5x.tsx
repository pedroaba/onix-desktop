'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M12 21a9 9 0 019-9h45c9.941 0 18 8.059 18 18v45a9 9 0 01-9 9H30c-9.941 0-18-8.059-18-18z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M14 21a7 7 0 017-7h45c8.837 0 16 7.163 16 16v45a7 7 0 01-7 7H30c-8.837 0-16-7.163-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M14 21a7 7 0 017-7h45c8.837 0 16 7.163 16 16v45a7 7 0 01-7 7H30c-8.837 0-16-7.163-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M62 51a1.21 1.21 0 011.14.807l.996 3.06a6.3 6.3 0 003.995 4.007l3.062.994a1.21 1.21 0 01.585 1.838 1.2 1.2 0 01-.585.441l-3.062.995a6.31 6.31 0 00-3.934 3.992l-.995 3.06a1.21 1.21 0 01-2.281 0l-.995-3.06a6.3 6.3 0 00-3.996-3.992l-3.062-.995a1.16 1.16 0 01-.645-.457 1.21 1.21 0 01.584-1.837l3.062-.995a6.3 6.3 0 003.995-3.992l.995-3.06A1.21 1.21 0 0162 51M42 63a1.5 1.5 0 010 3H30a1.5 1.5 0 010-3zm4-12a1.5 1.5 0 010 3H30a1.5 1.5 0 010-3zm20-12a1.5 1.5 0 010 3H30a1.5 1.5 0 010-3zm.014-12a1.5 1.5 0 010 3H30a1.5 1.5 0 010-3z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={35.25}
          x2={44.944}
          y1={12}
          y2={84.707}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={32.889}
          x2={41.491}
          y1={14}
          y2={82.814}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={36.802}
          x2={69.518}
          y1={16.063}
          y2={57.337}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(35.8889 53.8333 -53.8333 20.1875 35.722 31.708)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
