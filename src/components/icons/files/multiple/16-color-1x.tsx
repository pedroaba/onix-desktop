'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M4 3a2 2 0 0 1 2-2h4.5A3.5 3.5 0 0 1 14 4.5V11a2 2 0 0 1-2 2 2 2 0 0 1-2 2H7.5A5.5 5.5 0 0 1 2 9.5V5a2 2 0 0 1 2-2z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M6 2h4.5A2.5 2.5 0 0 1 13 4.5V11a1 1 0 0 1-1 1H7.5A2.5 2.5 0 0 1 5 9.5V3a1 1 0 0 1 1-1zM4 4a1 1 0 0 0-1 1v4.5A4.5 4.5 0 0 0 7.5 14H10a1 1 0 0 0 1-1H7.5A3.5 3.5 0 0 1 4 9.5V4z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M6 2h4.5A2.5 2.5 0 0 1 13 4.5V11a1 1 0 0 1-1 1H7.5A2.5 2.5 0 0 1 5 9.5V3a1 1 0 0 1 1-1zM4 4a1 1 0 0 0-1 1v4.5A4.5 4.5 0 0 0 7.5 14H10a1 1 0 0 0 1-1H7.5A3.5 3.5 0 0 1 4 9.5V4z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={8.06}
          y1={1}
          y2={15.049}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.587}
          y1={2}
          y2={14.062}
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
          gradientTransform="matrix(5.27778 9.5 -7.91667 3.5625 6.194 5.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
