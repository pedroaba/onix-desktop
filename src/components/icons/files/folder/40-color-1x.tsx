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
        d="M14.845 4.537A4.5 4.5 0 0 0 11.458 3H6.5A4.5 4.5 0 0 0 2 7.5v22A4.5 4.5 0 0 0 6.5 34h27a4.5 4.5 0 0 0 4.5-4.5v-18A4.5 4.5 0 0 0 33.5 7H17.907a2 2 0 0 1-1.505-.683l-1.557-1.78z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M14.845 4.537A4.5 4.5 0 0 0 11.458 3H6.5A4.5 4.5 0 0 0 2 7.5v22A4.5 4.5 0 0 0 6.5 34h27a4.5 4.5 0 0 0 4.5-4.5v-18A4.5 4.5 0 0 0 33.5 7H17.907a2 2 0 0 1-1.505-.683l-1.557-1.78z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 13.5A3.5 3.5 0 0 1 6.5 10h7.13a3.16 3.16 0 0 0 2.307-1c.599-.638 1.434-1 2.309-1H33.5a3.5 3.5 0 0 1 3.5 3.5v18a3.5 3.5 0 0 1-3.5 3.5h-27A3.5 3.5 0 0 1 3 29.5v-16z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.25}
          x2={11.25}
          y1={32.5}
          y2={5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BA7300" />
          <stop offset={0.221} stopColor="#C77B00" />
          <stop offset={0.716} stopColor="#D48300" />
          <stop offset={1} stopColor="#D48300" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 3.65151 -12.5 0 15 13.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={17.813}
          x2={12.969}
          y1={32.813}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
