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
        d="M1 4a2 2 0 0 1 2-2h8.5A3.5 3.5 0 0 1 15 5.5V12a2 2 0 0 1-2 2H4.5A3.5 3.5 0 0 1 1 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M11 6a1 1 0 0 1 1 1v2.75c0 .605-.43 1.11-1 1.225l-.25.025V6H11z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10 5a1 1 0 0 1 1 1v4.975c-.08.016-.164.025-.25.025H8v-.5A2.5 2.5 0 0 0 5.5 8H4V6a1 1 0 0 1 1-1h5z"
      />
      <path
        fill="#028298"
        d="M9.5 8a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1zM9 6a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h3z"
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.6}
        rx={1.5}
      />
      <path
        fill="#fff"
        d="m1.613 13.968.95-.48c.107.21.246.364.419.463.174.099.365.148.572.148.23 0 .406-.045.527-.135.121-.092.182-.23.182-.415a.46.46 0 0 0-.175-.364c-.116-.101-.322-.178-.618-.23-.563-.098-.973-.272-1.229-.52a1.239 1.239 0 0 1-.38-.924c0-.458.167-.825.503-1.1.335-.274.777-.411 1.326-.411.37 0 .696.073.978.22.281.146.505.355.67.627l-.928.462a1.023 1.023 0 0 0-.332-.33.871.871 0 0 0-.447-.105c-.214 0-.377.045-.489.135a.433.433 0 0 0-.164.35.43.43 0 0 0 .157.328c.107.092.321.168.643.226.54.099.942.279 1.208.54.267.258.401.586.401.982 0 .48-.16.862-.478 1.143-.32.281-.774.422-1.365.422-.429 0-.815-.09-1.16-.27a1.81 1.81 0 0 1-.771-.762z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.521}
          x2={6.912}
          y1={2}
          y2={14.174}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.333}
          x2={6.392}
          y1={3}
          y2={13.168}
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
          gradientTransform="matrix(6.33333 7.91667 -9.5 2.96875 5.833 5.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={10.828}
          x2={13.645}
          y1={2.667}
          y2={12.192}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.509} stopColor="#0097A8" />
          <stop offset={0.838} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={5.944}
          x2={6.598}
          y1={5}
          y2={11.097}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#86F2F2" />
          <stop offset={1} stopColor="#37C6D0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7 7 -7 7 0 9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#00B6BD" />
          <stop offset={0.89} stopColor="#00495C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 4.9 -5.57812 0 3.5 13.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
