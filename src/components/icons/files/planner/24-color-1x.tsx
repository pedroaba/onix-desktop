'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M3 5a2 2 0 012-2h12a4 4 0 014 4v12a2 2 0 01-2 2H7a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 5a1 1 0 011-1h12a3 3 0 013 3v12a1 1 0 01-1 1H7a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 5a1 1 0 011-1h12a3 3 0 013 3v12a1 1 0 01-1 1H7a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.5 13.5a1.06 1.06 0 01-1.501 0l-1.5-1.5a1.06 1.06 0 010-1.5l1.5-1.5a1.06 1.06 0 011.5 0L12 10.5a1.06 1.06 0 010 1.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10.5 13.5a1.06 1.06 0 01-1.501 0l-1.5-1.5a1.06 1.06 0 010-1.5l1.5-1.5a1.06 1.06 0 011.5 0L12 10.5a1.06 1.06 0 010 1.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M7.498 12a1.06 1.06 0 001.5 0l4.503-4.502a1.06 1.06 0 011.5 0l1.5 1.5a1.06 1.06 0 010 1.501L12 15.001a1.06 1.06 0 01-1.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M7.498 12a1.06 1.06 0 001.5 0l4.503-4.502a1.06 1.06 0 011.5 0l1.5 1.5a1.06 1.06 0 010 1.501L12 15.001a1.06 1.06 0 01-1.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M8.998 13.5a1.06 1.06 0 001.5 0l3.002-3a1.06 1.06 0 011.5 0l1.501 1.5a1.06 1.06 0 010 1.5L13.5 16.502a1.06 1.06 0 01-1.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M8.998 13.5a1.06 1.06 0 001.5 0l3.002-3a1.06 1.06 0 011.5 0l1.501 1.5a1.06 1.06 0 010 1.5L13.5 16.502a1.06 1.06 0 01-1.5 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.813}
          x2={11.236}
          y1={3}
          y2={21.177}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.444}
          x2={10.468}
          y1={4}
          y2={20.192}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={9.749}
          x2={8.053}
          y1={8.688}
          y2={12.312}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={10.548}
          x2={9.169}
          y1={11.627}
          y2={10.273}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={14.555}
          x2={11.14}
          y1={7.187}
          y2={15.377}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={14.555}
          x2={11.14}
          y1={7.187}
          y2={15.377}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={14.406}
          x2={12.802}
          y1={10.195}
          y2={16.812}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={14.492}
          x2={11.407}
          y1={10.366}
          y2={16.386}
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
          gradientTransform="matrix(8.44444 12.6667 -12.6667 4.75 9.111 8.167)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
