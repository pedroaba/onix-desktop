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
        d="M31.899 31.899A4 4 0 0128 35H16C9.925 35 5 30.075 5 24V12c0-1.9 1.325-3.49 3.101-3.899A4 4 0 0112 5h15a8 8 0 018 8v15c0 1.9-1.325 3.49-3.101 3.899"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M12 6a3 3 0 00-3 3v15a7 7 0 007 7h15a3 3 0 003-3V13a7 7 0 00-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M12 6a3 3 0 00-3 3v15a7 7 0 007 7h15a3 3 0 003-3V13a7 7 0 00-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M6 12c0-1.306.835-2.417 2-2.83V24a8 8 0 008 8h14.83A3 3 0 0128 34H16c-5.523 0-10-4.477-10-10z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M6 12c0-1.306.835-2.417 2-2.83V24a8 8 0 008 8h14.83A3 3 0 0128 34H16c-5.523 0-10-4.477-10-10z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M18.161 20.839a1.654 1.654 0 01-2.338 0L13.484 18.5a1.654 1.654 0 010-2.338l2.339-2.339a1.653 1.653 0 012.338 0l2.339 2.339a1.653 1.653 0 010 2.338z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M18.161 20.839a1.654 1.654 0 01-2.338 0L13.484 18.5a1.654 1.654 0 010-2.338l2.339-2.339a1.653 1.653 0 012.338 0l2.339 2.339a1.653 1.653 0 010 2.338z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M13.484 18.5a1.654 1.654 0 002.339 0l7.015-7.016a1.654 1.654 0 012.339 0l2.338 2.339a1.654 1.654 0 010 2.338L20.5 23.176a1.654 1.654 0 01-2.339 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M13.484 18.5a1.654 1.654 0 002.339 0l7.015-7.016a1.654 1.654 0 012.339 0l2.338 2.339a1.654 1.654 0 010 2.338L20.5 23.176a1.654 1.654 0 01-2.339 0z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M15.822 20.838a1.654 1.654 0 002.339 0l4.677-4.677a1.654 1.654 0 012.339 0l2.338 2.339a1.654 1.654 0 010 2.338l-4.677 4.677a1.654 1.654 0 01-2.338 0z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M15.822 20.838a1.654 1.654 0 002.339 0l4.677-4.677a1.654 1.654 0 012.339 0l2.338 2.339a1.654 1.654 0 010 2.338l-4.677 4.677a1.654 1.654 0 01-2.338 0z"
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
          id={iconId + '-f'}
          x1={16.992}
          x2={14.349}
          y1={13.339}
          y2={18.986}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={18.238}
          x2={16.088}
          y1={17.919}
          y2={15.808}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={24.481}
          x2={19.161}
          y1={11}
          y2={23.761}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={24.481}
          x2={19.161}
          y1={11}
          y2={23.761}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={24.25}
          x2={21.75}
          y1={15.687}
          y2={25.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={24.385}
          x2={19.577}
          y1={15.954}
          y2={25.335}
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
          gradientTransform="matrix(14.7778 22.1668 -22.1667 8.31253 14.944 13.292)"
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
          gradientTransform="matrix(14.7778 22.1668 -22.1667 8.31253 14.944 13.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
