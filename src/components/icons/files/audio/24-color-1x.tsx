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
        d="M3 5a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4v12a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 5a1 1 0 0 1 1-1h12a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 5a1 1 0 0 1 1-1h12a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.75 7a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M13.75 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M7.75 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M16.75 10.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.813}
          x2={11.236}
          y1={3}
          y2={21.177}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.444}
          x2={10.468}
          y1={4}
          y2={20.192}
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
          gradientTransform="matrix(8.44444 12.6667 -12.6667 4.75 9.111 8.167)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={12.25}
          x2={10.427}
          y1={14.553}
          y2={5.808}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={12.25}
          x2={10.427}
          y1={14.553}
          y2={5.808}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={12.25}
          x2={10.427}
          y1={14.553}
          y2={5.808}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={12.25}
          x2={10.427}
          y1={14.553}
          y2={5.808}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
