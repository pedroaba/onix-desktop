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
        d="M7 3a2 2 0 0 0-2 2 2 2 0 0 0-2 2v8a6 6 0 0 0 6 6h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V7a4 4 0 0 0-4-4H7z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 4a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h10a1 1 0 0 0 1-1V7a3 3 0 0 0-3-3H7z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 4a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h10a1 1 0 0 0 1-1V7a3 3 0 0 0-3-3H7z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M4 7a1 1 0 0 1 1-1v9a4 4 0 0 0 4 4h9a1 1 0 0 1-1 1H9a5 5 0 0 1-5-5V7z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M4 7a1 1 0 0 1 1-1v9a4 4 0 0 0 4 4h9a1 1 0 0 1-1 1H9a5 5 0 0 1-5-5V7z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M11.524 7.13C10.842 6.755 10 7.237 10 8v6c0 .764.842 1.246 1.524.871l5.455-2.999a.989.989 0 0 0 0-1.742l-5.455-3z"
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
          id={iconId + '-e'}
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
          id={iconId + '-f'}
          x1={13.75}
          x2={12.818}
          y1={13.042}
          y2={8.514}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
