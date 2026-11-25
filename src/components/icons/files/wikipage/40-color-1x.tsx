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
        d="M2 10a4 4 0 014-4h24a8 8 0 018 8v16a4 4 0 01-4 4H10a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 013-3h24a7 7 0 017 7v16a3 3 0 01-3 3H10a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 013-3h24a7 7 0 017 7v16a3 3 0 01-3 3H10a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M19.22 15.588c.345.21.614.517.78.88v9.38A2 2 0 0118.19 27H12a2 2 0 01-2-2V15a2 2 0 012-2h2.95z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M19.874 16.03a2 2 0 011.204-1.425L25.05 13H28a2 2 0 012 2v10a2 2 0 01-2 2h-6.19a2 2 0 01-1.976-1.69L19 20z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M11.5 14a1 1 0 011-1H18a2 2 0 012 2v8.5a2 2 0 01-2 2h-5.5a1 1 0 01-1-1z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M20 15a2 2 0 012-2h5.5a1 1 0 011 1v10.5a1 1 0 01-1 1H22a2 2 0 01-2-2z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.578}
          y1={6}
          y2={34.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.444}
          x2={14.976}
          y1={7}
          y2={33.48}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={18.313}
          x2={15.404}
          y1={13.5}
          y2={30.665}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={0.908} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={28.144}
          x2={25.486}
          y1={13.5}
          y2={30.749}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={0.908} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={10.26}
          x2={34.446}
          y1={12.519}
          y2={25.814}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6EFFF" />
          <stop offset={0.851} stopColor="#58AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={27.933}
          x2={7.347}
          y1={13.781}
          y2={19.163}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.123} stopColor="#9DEAFF" />
          <stop offset={0.616} stopColor="#4894FE" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(17.9444 20.5833 -26.9167 7.71875 13.861 13.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
