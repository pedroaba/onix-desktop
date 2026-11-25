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
        d="M3 5a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4v12a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 5a1 1 0 0 1 1-1h12a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 5a1 1 0 0 1 1-1h12a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M5.5 8a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M9 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={8.15}
          x2={12.437}
          y1={4}
          y2={16.137}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8.15}
          x2={12.437}
          y1={4}
          y2={16.137}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.15}
          x2={12.437}
          y1={4}
          y2={16.137}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={8.15}
          x2={12.437}
          y1={4}
          y2={16.137}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={8.15}
          x2={12.437}
          y1={4}
          y2={16.137}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={8.15}
          x2={12.437}
          y1={4}
          y2={16.137}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
