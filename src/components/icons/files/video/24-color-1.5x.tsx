'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 7.5A3.5 3.5 0 0 1 7.5 4H25a7 7 0 0 1 7 7v17.5a3.5 3.5 0 0 1-3.5 3.5H11a7 7 0 0 1-7-7V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5H25a6 6 0 0 1 6 6v17.5a2.5 2.5 0 0 1-2.5 2.5H11a6 6 0 0 1-6-6V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5H25a6 6 0 0 1 6 6v17.5a2.5 2.5 0 0 1-2.5 2.5H11a6 6 0 0 1-6-6V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M14.691 11.227c-1.166-.656-2.607.187-2.607 1.525v10.496c0 1.338 1.44 2.18 2.607 1.525l9.334-5.248c1.19-.669 1.19-2.38 0-3.05l-9.334-5.248z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.042}
          x2={16.812}
          y1={4}
          y2={32.275}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.222}
          x2={15.511}
          y1={5}
          y2={31.311}
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
          gradientTransform="matrix(13.7222 20.5833 -20.5833 7.71875 13.306 11.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={18.5}
          x2={16.835}
          y1={21.573}
          y2={13.665}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
