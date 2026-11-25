'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M69 88H21a9 9 0 0 1-9-9 9.004 9.004 0 0 1 6-8.488V17a9 9 0 0 1 9-9h33c9.941 0 18 8.059 18 18v53a9 9 0 0 1-9 9z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M20 17a7 7 0 0 1 7-7h33c8.837 0 16 7.163 16 16v53a7 7 0 1 1-7-7 1 1 0 1 0 0-2H21c-.338 0-.672.019-1 .055V17zm43.343 55H21a7 7 0 1 0 0 14h42.343A8.983 8.983 0 0 1 60 79a8.983 8.983 0 0 1 3.343-7z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M20 17a7 7 0 0 1 7-7h33c8.837 0 16 7.163 16 16v53a7 7 0 1 1-7-7 1 1 0 1 0 0-2H21c-.338 0-.672.019-1 .055V17zm43.343 55H21a7 7 0 1 0 0 14h42.343A8.983 8.983 0 0 1 60 79a8.983 8.983 0 0 1 3.343-7z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M64.5 56a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1 0-3h33z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M64.5 47a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1 0-3h33z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M64.5 38a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1 0-3h33z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M64.5 29a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1 0-3h33z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M64.5 20a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1 0-3h33z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.313}
          x2={46.263}
          y1={8}
          y2={88.129}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={31.222}
          x2={42.916}
          y1={10}
          y2={86.319}
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
          gradientTransform="matrix(32.7222 60.1667 -49.0833 22.5625 33.806 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={15}
          x2={64.442}
          y1={-10}
          y2={67.494}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={15}
          x2={64.442}
          y1={-10}
          y2={67.494}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15}
          x2={64.442}
          y1={-10}
          y2={67.494}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={15}
          x2={64.442}
          y1={-10}
          y2={67.494}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={15}
          x2={64.442}
          y1={-10}
          y2={67.494}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
      </defs>
    </svg>
  )
}
