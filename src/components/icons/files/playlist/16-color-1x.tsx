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
        d="M4 4a2 2 0 0 1 2-2h4.5A3.5 3.5 0 0 1 14 5.5V10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H7.5A5.5 5.5 0 0 1 2 8.5V6a2 2 0 0 1 2-2z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M6 3h4.5A2.5 2.5 0 0 1 13 5.5V10a1 1 0 0 1-1 1H7.5A2.5 2.5 0 0 1 5 8.5V4a1 1 0 0 1 1-1zM4 5a1 1 0 0 0-1 1v2.5A4.5 4.5 0 0 0 7.5 13H10a1 1 0 0 0 1-1H7.5A3.5 3.5 0 0 1 4 8.5V5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M6 3h4.5A2.5 2.5 0 0 1 13 5.5V10a1 1 0 0 1-1 1H7.5A2.5 2.5 0 0 1 5 8.5V4a1 1 0 0 1 1-1zM4 5a1 1 0 0 0-1 1v2.5A4.5 4.5 0 0 0 7.5 13H10a1 1 0 0 0 1-1H7.5A3.5 3.5 0 0 1 4 8.5V5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M8.049 4.63c-.356-.23-.799.06-.799.524v3.79c0 .464.443.754.799.524l3.201-1.92c.359-.231.359-.816 0-1.048L8.049 4.63z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={7.491}
          y1={2}
          y2={14.118}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.043}
          y1={3}
          y2={13.12}
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
          gradientTransform="matrix(5.27778 7.91667 -7.91667 2.96875 6.194 5.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8.75}
          x2={8.078}
          y1={7.776}
          y2={4.989}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
