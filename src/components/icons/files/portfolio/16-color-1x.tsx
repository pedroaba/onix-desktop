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
        d="M4 4a2 2 0 012-2h4.5A3.5 3.5 0 0114 5.5V10a2 2 0 01-2 2 2 2 0 01-2 2H7.5A5.5 5.5 0 012 8.5V6a2 2 0 012-2"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M6 3h4.5A2.5 2.5 0 0113 5.5V10a1 1 0 01-1 1H7.5A2.5 2.5 0 015 8.5V4a1 1 0 011-1M4 5a1 1 0 00-1 1v2.5A4.5 4.5 0 007.5 13H10a1 1 0 001-1H7.5A3.5 3.5 0 014 8.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M6 3h4.5A2.5 2.5 0 0113 5.5V10a1 1 0 01-1 1H7.5A2.5 2.5 0 015 8.5V4a1 1 0 011-1M4 5a1 1 0 00-1 1v2.5A4.5 4.5 0 007.5 13H10a1 1 0 001-1H7.5A3.5 3.5 0 014 8.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M8.181 7.818a.58.58 0 01-.818 0L6.545 7a.58.58 0 010-.819l.818-.818a.58.58 0 01.818 0L9 6.18A.58.58 0 019 7z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8.181 7.818a.58.58 0 01-.818 0L6.545 7a.58.58 0 010-.819l.818-.818a.58.58 0 01.818 0L9 6.18A.58.58 0 019 7z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M6.545 7a.58.58 0 00.818 0L9.82 4.545a.58.58 0 01.818 0l.819.818a.58.58 0 010 .819L9 8.637a.58.58 0 01-.818 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M6.545 7a.58.58 0 00.818 0L9.82 4.545a.58.58 0 01.818 0l.819.818a.58.58 0 010 .819L9 8.637a.58.58 0 01-.818 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M7.363 7.818a.58.58 0 00.819 0l1.637-1.637a.58.58 0 01.818 0l.819.819a.58.58 0 010 .818L9.819 9.455a.58.58 0 01-.819 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M7.363 7.818a.58.58 0 00.819 0l1.637-1.637a.58.58 0 01.818 0l.819.819a.58.58 0 010 .818L9.819 9.455a.58.58 0 01-.819 0z"
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
          x1={7.772}
          x2={6.847}
          y1={5.193}
          y2={7.17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8.208}
          x2={7.456}
          y1={6.796}
          y2={6.058}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={10.394}
          x2={8.532}
          y1={4.375}
          y2={8.842}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={10.394}
          x2={8.532}
          y1={4.375}
          y2={8.842}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={10.313}
          x2={9.438}
          y1={6.015}
          y2={9.625}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={10.36}
          x2={8.677}
          y1={6.109}
          y2={9.392}
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
