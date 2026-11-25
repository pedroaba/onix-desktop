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
        d="M7 3a2 2 0 00-2 2 2 2 0 00-2 2v8a6 6 0 006 6h8a2 2 0 002-2 2 2 0 002-2V7a4 4 0 00-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 4a1 1 0 00-1 1v10a3 3 0 003 3h10a1 1 0 001-1V7a3 3 0 00-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 4a1 1 0 00-1 1v10a3 3 0 003 3h10a1 1 0 001-1V7a3 3 0 00-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M4 7a1 1 0 011-1v9a4 4 0 004 4h9a1 1 0 01-1 1H9a5 5 0 01-5-5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M4 7a1 1 0 011-1v9a4 4 0 004 4h9a1 1 0 01-1 1H9a5 5 0 01-5-5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M11.636 12.364a.965.965 0 01-1.364 0L8.908 11a.965.965 0 010-1.364l1.364-1.364a.965.965 0 011.364 0L13 9.636A.965.965 0 0113 11z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M11.636 12.364a.965.965 0 01-1.364 0L8.908 11a.965.965 0 010-1.364l1.364-1.364a.965.965 0 011.364 0L13 9.636A.965.965 0 0113 11z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M8.908 11a.965.965 0 001.364 0l4.093-4.092a.965.965 0 011.364 0l1.364 1.364a.965.965 0 010 1.364l-4.092 4.092a.965.965 0 01-1.364 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M8.908 11a.965.965 0 001.364 0l4.093-4.092a.965.965 0 011.364 0l1.364 1.364a.965.965 0 010 1.364l-4.092 4.092a.965.965 0 01-1.364 0z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M10.272 12.364a.965.965 0 001.364 0l2.728-2.728a.965.965 0 011.364 0L17.092 11a.965.965 0 010 1.364l-2.728 2.729a.965.965 0 01-1.364 0z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M10.272 12.364a.965.965 0 001.364 0l2.728-2.728a.965.965 0 011.364 0L17.092 11a.965.965 0 010 1.364l-2.728 2.729a.965.965 0 01-1.364 0z"
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
          id={iconId + '-f'}
          x1={10.954}
          x2={9.412}
          y1={7.989}
          y2={11.284}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={11.68}
          x2={10.426}
          y1={10.661}
          y2={9.43}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={15.323}
          x2={12.22}
          y1={6.625}
          y2={14.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={15.323}
          x2={12.22}
          y1={6.625}
          y2={14.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={15.188}
          x2={13.729}
          y1={9.36}
          y2={15.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={15.266}
          x2={12.462}
          y1={9.515}
          y2={14.988}
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
        <radialGradient
          id={iconId + '-e'}
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
