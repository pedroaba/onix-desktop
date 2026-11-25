'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 10.5A4.5 4.5 0 0110.5 6H33a9 9 0 019 9v22.5a4.5 4.5 0 01-4.5 4.5H15a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 10.5A3.5 3.5 0 0110.5 7H33a8 8 0 018 8v22.5a3.5 3.5 0 01-3.5 3.5H15a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 10.5A3.5 3.5 0 0110.5 7H33a8 8 0 018 8v22.5a3.5 3.5 0 01-3.5 3.5H15a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M19.882 27.118a2.205 2.205 0 01-3.118 0L13.646 24a2.205 2.205 0 010-3.118l3.118-3.118a2.205 2.205 0 013.118 0L23 20.882A2.205 2.205 0 0123 24z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M19.882 27.118a2.205 2.205 0 01-3.118 0L13.646 24a2.205 2.205 0 010-3.118l3.118-3.118a2.205 2.205 0 013.118 0L23 20.882A2.205 2.205 0 0123 24z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M13.647 24a2.205 2.205 0 003.118 0l9.354-9.354a2.205 2.205 0 013.118 0l3.119 3.118a2.205 2.205 0 010 3.118L23 30.236a2.205 2.205 0 01-3.118 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M13.647 24a2.205 2.205 0 003.118 0l9.354-9.354a2.205 2.205 0 013.118 0l3.119 3.118a2.205 2.205 0 010 3.118L23 30.236a2.205 2.205 0 01-3.118 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M16.764 27.118a2.205 2.205 0 003.118 0l6.236-6.236a2.205 2.205 0 013.118 0L32.355 24a2.205 2.205 0 010 3.118l-6.237 6.237a2.205 2.205 0 01-3.118 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M16.764 27.118a2.205 2.205 0 003.118 0l6.236-6.236a2.205 2.205 0 013.118 0L32.355 24a2.205 2.205 0 010 3.118l-6.237 6.237a2.205 2.205 0 01-3.118 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={17.625}
          x2={22.472}
          y1={6}
          y2={42.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={16.444}
          x2={20.745}
          y1={7}
          y2={41.407}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={18.323}
          x2={14.798}
          y1={17.118}
          y2={24.648}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={19.984}
          x2={17.117}
          y1={23.225}
          y2={20.411}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={28.309}
          x2={21.215}
          y1={14}
          y2={31.017}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={28.309}
          x2={21.215}
          y1={14}
          y2={31.017}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={28}
          x2={24.667}
          y1={20.25}
          y2={34}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={28.181}
          x2={21.77}
          y1={20.606}
          y2={33.114}
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
          gradientTransform="matrix(17.9444 26.9167 -26.9167 10.0937 17.861 15.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
