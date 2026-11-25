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
        d="M5 9a4 4 0 014-4h18a8 8 0 018 8v18a4 4 0 01-4 4H13a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 9a3 3 0 013-3h18a7 7 0 017 7v18a3 3 0 01-3 3H13a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M6 9a3 3 0 013-3h18a7 7 0 017 7v18a3 3 0 01-3 3H13a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16.194 22.807a1.984 1.984 0 01-2.807 0L10.581 20a1.984 1.984 0 010-2.806l2.806-2.806a1.984 1.984 0 012.807 0L19 17.194A1.984 1.984 0 0119 20z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M16.194 22.807a1.984 1.984 0 01-2.807 0L10.581 20a1.984 1.984 0 010-2.806l2.806-2.806a1.984 1.984 0 012.807 0L19 17.194A1.984 1.984 0 0119 20z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M10.582 20a1.985 1.985 0 002.806 0l8.42-8.419a1.984 1.984 0 012.806 0l2.806 2.807a1.984 1.984 0 010 2.806l-8.419 8.419a1.984 1.984 0 01-2.806 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M10.582 20a1.985 1.985 0 002.806 0l8.42-8.419a1.984 1.984 0 012.806 0l2.806 2.807a1.984 1.984 0 010 2.806l-8.419 8.419a1.984 1.984 0 01-2.806 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M13.387 22.806a1.984 1.984 0 002.806 0l5.613-5.613a1.984 1.984 0 012.806 0L27.418 20a1.984 1.984 0 010 2.806l-5.612 5.613a1.984 1.984 0 01-2.807 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M13.387 22.806a1.984 1.984 0 002.806 0l5.613-5.613a1.984 1.984 0 012.806 0L27.418 20a1.984 1.984 0 010 2.806l-5.612 5.613a1.984 1.984 0 01-2.807 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={14.688}
          x2={18.727}
          y1={5}
          y2={35.295}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.778}
          x2={17.32}
          y1={6}
          y2={34.335}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={14.79}
          x2={11.618}
          y1={13.807}
          y2={20.583}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={16.285}
          x2={13.706}
          y1={19.303}
          y2={16.77}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={23.779}
          x2={17.394}
          y1={11}
          y2={26.315}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={23.779}
          x2={17.394}
          y1={11}
          y2={26.315}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={23.5}
          x2={20.5}
          y1={16.625}
          y2={28.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={23.662}
          x2={17.892}
          y1={16.945}
          y2={28.202}
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
          gradientTransform="matrix(14.7778 22.1667 -22.1667 8.3125 14.944 13.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
