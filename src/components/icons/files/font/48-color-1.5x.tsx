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
        d="M6 5.5A3.5 3.5 0 0 1 9.5 2H23a7 7 0 0 1 7 7v21.5a3.5 3.5 0 0 1-3.5 3.5H13a7 7 0 0 1-7-7V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M18.464 10.314a.5.5 0 0 0-.928 0L11.633 25H10.5a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-.79l1.608-4h5.9l1.61 4H21a.5.5 0 1 0 0 1h4.5a.5.5 0 0 0 0-1h-1.162l-5.874-14.686zM19.816 20l-2.55-6.336L14.72 20h5.096z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={14.909}
          x2={19.515}
          y1={12}
          y2={25.809}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
