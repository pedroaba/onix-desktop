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
        d="M38.807 38.807A4.502 4.502 0 0 1 34.5 42H18c-6.627 0-12-5.373-12-12V13.5a4.502 4.502 0 0 1 3.193-4.307A4.502 4.502 0 0 1 13.5 6H33a9 9 0 0 1 9 9v19.5a4.502 4.502 0 0 1-3.193 4.307z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M13.5 7a3.5 3.5 0 0 0-3.5 3.5V30a8 8 0 0 0 8 8h19.5a3.5 3.5 0 0 0 3.5-3.5V15a8 8 0 0 0-8-8H13.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M13.5 7a3.5 3.5 0 0 0-3.5 3.5V30a8 8 0 0 0 8 8h19.5a3.5 3.5 0 0 0 3.5-3.5V15a8 8 0 0 0-8-8H13.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="m9 10.5.003-.165A3.5 3.5 0 0 0 7 13.5V30c0 6.075 4.925 11 11 11h16.5a3.5 3.5 0 0 0 3.165-2.003L37.5 39H18a9 9 0 0 1-9-9V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="m9 10.5.003-.165A3.5 3.5 0 0 0 7 13.5V30c0 6.075 4.925 11 11 11h16.5a3.5 3.5 0 0 0 3.165-2.003L37.5 39H18a9 9 0 0 1-9-9V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M21.251 14.276c-1.454-.797-3.251.227-3.251 1.851v12.746c0 1.624 1.797 2.648 3.251 1.851l11.637-6.372a2.097 2.097 0 0 0 0-3.703L21.25 14.276z"
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
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(17.9444 26.9168 -26.9167 10.0938 17.861 15.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={16.444}
          x2={20.745}
          y1={7}
          y2={41.407}
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
          gradientTransform="matrix(17.9444 26.9168 -26.9167 10.0938 17.861 15.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={26}
          x2={24.027}
          y1={26.839}
          y2={17.215}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
