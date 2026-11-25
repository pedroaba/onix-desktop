'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M8 14a6 6 0 0 1 6-6h30c6.627 0 12 5.373 12 12v30a6 6 0 0 1-6 6H20c-6.627 0-12-5.373-12-12V14z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M9 14a5 5 0 0 1 5-5h30c6.075 0 11 4.925 11 11v30a5 5 0 0 1-5 5H20c-6.075 0-11-4.925-11-11V14z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M9 14a5 5 0 0 1 5-5h30c6.075 0 11 4.925 11 11v30a5 5 0 0 1-5 5H20c-6.075 0-11-4.925-11-11V14z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M28.5 19a1.5 1.5 0 0 1 1.5 1.5v23a1.5 1.5 0 0 1-3 0v-23a1.5 1.5 0 0 1 1.5-1.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M36.5 24a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-3 0v-13a1.5 1.5 0 0 1 1.5-1.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M20.5 28a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M44.5 28a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={23.5}
          x2={29.963}
          y1={8}
          y2={56.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={21.778}
          x2={27.597}
          y1={9}
          y2={55.55}
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
          gradientTransform="matrix(24.2778 36.4167 -36.4167 13.6562 23.694 20.98)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={32.5}
          x2={27.712}
          y1={38.636}
          y2={15.921}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={32.5}
          x2={27.712}
          y1={38.636}
          y2={15.921}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={32.5}
          x2={27.712}
          y1={38.636}
          y2={15.921}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={32.5}
          x2={27.712}
          y1={38.636}
          y2={15.921}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
