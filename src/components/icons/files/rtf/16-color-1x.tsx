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
        d="M2 3a2 2 0 0 1 2-2h6.5A3.5 3.5 0 0 1 14 4.5V13a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M6.974 4.342a.5.5 0 0 0-.948 0l-1 3A.5.5 0 0 0 5.5 8h2a.5.5 0 0 0 .474-.658l-1-3z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M9.5 5a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1h-1z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M9.5 7a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1h-1z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M5.5 9a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M5.5 11a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M8.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={5}
          x2={10.75}
          y1={1}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={5}
          x2={10.75}
          y1={1}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={5}
          x2={10.75}
          y1={1}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5}
          x2={10.75}
          y1={1}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={5}
          x2={10.75}
          y1={1}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={5}
          x2={10.75}
          y1={1}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
