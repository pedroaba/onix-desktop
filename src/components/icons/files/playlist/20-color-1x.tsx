'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M5 5a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2 2 2 0 0 1-2 2H9a6 6 0 0 1-6-6V7a2 2 0 0 1 2-2z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M7 4h6a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1zM5 6a1 1 0 0 0-1 1v4a5 5 0 0 0 5 5h4a1 1 0 0 0 1-1H9a4 4 0 0 1-4-4V6z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M7 4h6a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H9a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1zM5 6a1 1 0 0 0-1 1v4a5 5 0 0 0 5 5h4a1 1 0 0 0 1-1H9a4 4 0 0 1-4-4V6z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M9.998 6.097C9.554 5.82 9 6.169 9 6.726v4.548c0 .557.554.906.998.63l3.666-2.275c.448-.278.448-.98 0-1.258L9.998 6.097z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.521}
          x2={9.406}
          y1={3}
          y2={17.138}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.333}
          x2={8.851}
          y1={4}
          y2={16.144}
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
          gradientTransform="matrix(6.33333 9.5 -9.5 3.5625 7.833 7.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={11.5}
          x2={10.722}
          y1={10.531}
          y2={7.172}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
