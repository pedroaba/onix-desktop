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
        d="M2 4a2 2 0 012-2h6.5A3.5 3.5 0 0114 5.5V12a2 2 0 01-2 2H5.5A3.5 3.5 0 012 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 4a1 1 0 011-1h6.5A2.5 2.5 0 0113 5.5V12a1 1 0 01-1 1H5.5A2.5 2.5 0 013 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 4a1 1 0 011-1h6.5A2.5 2.5 0 0113 5.5V12a1 1 0 01-1 1H5.5A2.5 2.5 0 013 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M6.909 9.092a.77.77 0 01-1.092 0L4.726 8a.77.77 0 010-1.09l1.091-1.092a.77.77 0 011.092 0L8 6.909A.77.77 0 018 8z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M6.909 9.092a.77.77 0 01-1.092 0L4.726 8a.77.77 0 010-1.09l1.091-1.092a.77.77 0 011.092 0L8 6.909A.77.77 0 018 8z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M4.727 8a.77.77 0 001.09 0l3.275-3.274a.77.77 0 011.091 0l1.092 1.091a.77.77 0 010 1.092L8 10.183a.77.77 0 01-1.092 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M4.727 8a.77.77 0 001.09 0l3.275-3.274a.77.77 0 011.091 0l1.092 1.091a.77.77 0 010 1.092L8 10.183a.77.77 0 01-1.092 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M5.816 9.091a.77.77 0 001.092 0L9.09 6.91a.77.77 0 011.092 0L11.273 8a.77.77 0 010 1.091L9.09 11.274a.77.77 0 01-1.09 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M5.816 9.091a.77.77 0 001.092 0L9.09 6.91a.77.77 0 011.092 0L11.273 8a.77.77 0 010 1.091L9.09 11.274a.77.77 0 01-1.09 0z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={6.363}
          x2={5.129}
          y1={5.592}
          y2={8.227}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={6.944}
          x2={5.941}
          y1={7.729}
          y2={6.744}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={9.859}
          x2={7.376}
          y1={4.5}
          y2={10.456}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={9.859}
          x2={7.376}
          y1={4.5}
          y2={10.456}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={9.749}
          x2={8.583}
          y1={6.687}
          y2={11.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={9.812}
          x2={7.569}
          y1={6.812}
          y2={11.19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#4A40D4" />
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
      </defs>
    </svg>
  )
}
