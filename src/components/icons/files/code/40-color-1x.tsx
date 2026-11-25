'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M29.5 38h-22A4.5 4.5 0 0 1 6 29.256V6a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v23.5a4.5 4.5 0 0 1-4.5 4.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v23.5a3.5 3.5 0 1 1-3.5-3.5.5.5 0 0 0 0-1h-22c-.169 0-.336.01-.5.027V6zm19.671 24H7.5a3.5 3.5 0 1 0 0 7h19.171A4.491 4.491 0 0 1 25 33.5c0-1.414.652-2.675 1.671-3.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v23.5a3.5 3.5 0 1 1-3.5-3.5.5.5 0 0 0 0-1h-22c-.169 0-.336.01-.5.027V6zm19.671 24H7.5a3.5 3.5 0 1 0 0 7h19.171A4.491 4.491 0 0 1 25 33.5c0-1.414.652-2.675 1.671-3.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M22.68 9.033a.5.5 0 0 1 .287.647l-5 13a.5.5 0 0 1-.934-.36l5-13a.5.5 0 0 1 .646-.287z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M13.854 12.647a.5.5 0 0 1 0 .707L11.207 16l2.647 2.647a.5.5 0 0 1-.708.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .708 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M26.146 12.647a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708-.707L28.793 16l-2.647-2.646a.5.5 0 0 1 0-.707z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.01}
          x2={18.605}
          y1={2}
          y2={38.134}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.056}
          x2={17.069}
          y1={3}
          y2={37.21}
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
          gradientTransform="matrix(15.3056 26.9167 -22.9583 10.0937 13.264 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={14.375}
          x2={20.402}
          y1={6.667}
          y2={23.281}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={14.375}
          x2={20.402}
          y1={6.667}
          y2={23.281}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={14.375}
          x2={20.402}
          y1={6.667}
          y2={23.281}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
