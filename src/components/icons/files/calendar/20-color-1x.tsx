'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M3 5a2 2 0 0 1 2-2h8a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 5a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 5a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7.25 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M8 12.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M10 10.5A.75.75 0 1 0 10 9a.75.75 0 0 0 0 1.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M10.75 12.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M12.75 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.521}
          x2={9.406}
          y1={3}
          y2={17.138}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.333}
          x2={8.851}
          y1={4}
          y2={16.144}
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
          gradientTransform="matrix(6.33333 9.5 -9.5 3.5625 7.833 7.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={7.25}
          x2={10.588}
          y1={4}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={7.25}
          x2={10.588}
          y1={4}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={7.25}
          x2={10.588}
          y1={4}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={7.25}
          x2={10.588}
          y1={4}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={7.25}
          x2={10.588}
          y1={4}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={7.25}
          x2={10.588}
          y1={4}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
