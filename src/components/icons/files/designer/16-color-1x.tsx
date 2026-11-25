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
        d="M2 4a2 2 0 0 1 2-2h6.5A3.5 3.5 0 0 1 14 5.5V12a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 4a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 5.5V12a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 4a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 5.5V12a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.362 9.87A2.88 2.88 0 0 1 8.084 11H6.261a.367.367 0 0 1-.357-.3l-.008-.075v-.375c0-1.165.861-2.123 1.964-2.238L8.084 8v-.094h2.278V9.87z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.5}
        d="M10.362 9.87A2.88 2.88 0 0 1 8.084 11H6.261a.367.367 0 0 1-.357-.3l-.008-.075v-.375c0-1.165.861-2.123 1.964-2.238L8.084 8v-.094h2.278V9.87z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M8.084 5c1.61 0 2.917 1.343 2.917 3 0 .747-.268 1.429-.707 1.954.044-.143.068-.296.068-.454 0-.777-.573-1.415-1.308-1.492L8.904 8h-.82l-.224-.012C6.757 7.873 5.896 6.915 5.896 5.75v-.375A.37.37 0 0 1 6.261 5h1.823z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.5}
        d="M8.084 5c1.61 0 2.917 1.343 2.917 3 0 .747-.268 1.429-.707 1.954.044-.143.068-.296.068-.454 0-.777-.573-1.415-1.308-1.492L8.904 8h-.82l-.224-.012C6.757 7.873 5.896 6.915 5.896 5.75v-.375A.37.37 0 0 1 6.261 5h1.823z"
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
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(3.69114 -3.09375 3.68751 4.65522 5.896 11.219)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.045} stopColor="#AD7DFF" />
          <stop offset={0.328} stopColor="#6864F6" />
          <stop offset={0.571} stopColor="#5750E2" />
          <stop offset={0.809} stopColor="#3E36B1" />
          <stop offset={1} stopColor="#261D82" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-5.16886 -1.90334 1.85033 -5.31693 10.776 10.89)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.706} stopColor="#AC80FF" stopOpacity={0} />
          <stop offset={0.921} stopColor="#BD96FF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.10449 4.12773 -3.31961 4.33421 5.896 5.18)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC470" />
          <stop offset={0.251} stopColor="#FF835C" />
          <stop offset={0.584} stopColor="#F24A9D" />
          <stop offset={0.871} stopColor="#B339F0" />
          <stop offset={1} stopColor="#C354FF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.16259 -2.98152 2.7555 -4.0617 7.99 9.293)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.709} stopColor="#FFB357" stopOpacity={0} />
          <stop offset={0.942} stopColor="#FFB357" />
        </radialGradient>
      </defs>
    </svg>
  )
}
