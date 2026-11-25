'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M11.525 5.025A3.5 3.5 0 0 0 9.05 4H5.5A3.5 3.5 0 0 0 2 7.5v16A3.5 3.5 0 0 0 5.5 27h21a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 26.5 7H14.121a1.5 1.5 0 0 1-1.06-.44l-1.536-1.535z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M11.525 5.025A3.5 3.5 0 0 0 9.05 4H5.5A3.5 3.5 0 0 0 2 7.5v16A3.5 3.5 0 0 0 5.5 27h21a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 26.5 7H14.121a1.5 1.5 0 0 1-1.06-.44l-1.536-1.535z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 12.5A2.5 2.5 0 0 1 5.5 10h5.25a2.5 2.5 0 0 0 2-1 2.5 2.5 0 0 1 2-1H26.5a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 3 23.5v-11z"
      />
      <path
        fill="#944600"
        d="M20 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6.25 1c-.69 0-1.25.56-1.25 1.25 0 0 0 2.25 3 2.25 2.378 0 2.871-1.414 2.973-2 .027-.153.027-.25.027-.25 0-.69-.56-1.25-1.25-1.25h-3.5zm5.746 1.6a2.64 2.64 0 0 1-.09.536c-.063.223-.167.49-.342.765.265.063.574.099.935.099 2.5 0 2.5-1.75 2.5-1.75 0-.69-.56-1.25-1.25-1.25H23.62c.24.358.379.788.379 1.25v.25l-.003.1z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M20.5 23a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M20.5 23a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M30 23a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5zm1 5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M28 26.5a.5.5 0 0 1-1 0v-1.793l-3.146 3.146a.5.5 0 1 1-.708-.707L26.293 24H24.5a.5.5 0 1 1 0-1h3l.1.01a.5.5 0 0 1 .4.49v3z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={9}
          x2={9}
          y1={26}
          y2={4}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BA7300" />
          <stop offset={0.221} stopColor="#C77B00" />
          <stop offset={0.716} stopColor="#D48300" />
          <stop offset={1} stopColor="#D48300" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 2.92121 -10 0 12 10.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={14.25}
          x2={10.375}
          y1={26.25}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={23.278}
          x2={24.543}
          y1={20.5}
          y2={30.62}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.27778 7.91667 -7.91667 2.96875 23.694 23.104)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={23.552}
          x2={25.033}
          y1={20}
          y2={31.108}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898989" />
          <stop offset={1} stopColor="#636262" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={22.462}
          x2={25.282}
          y1={19.469}
          y2={27.534}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
