'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M10 10a6 6 0 0 1 6-6h26c6.627 0 12 5.373 12 12v38a6 6 0 0 1-6 6H22c-6.627 0-12-5.373-12-12V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M11 10a5 5 0 0 1 5-5h26c6.075 0 11 4.925 11 11v38a5 5 0 0 1-5 5H22c-6.075 0-11-4.925-11-11V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M11 10a5 5 0 0 1 5-5h26c6.075 0 11 4.925 11 11v38a5 5 0 0 1-5 5H22c-6.075 0-11-4.925-11-11V10z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M18 21a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h12.127A4.002 4.002 0 0 1 46 22a4 4 0 0 1-7.874 1H31.73c5.813 2.824 10.052 8.38 11.047 15H43a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2a3 3 0 0 1 2.754-2.99c-1.261-7.545-7.218-13.503-14.764-14.764A3 3 0 0 1 23 26h-2a3 3 0 0 1-3-3v-2zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2zm19 21a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2zm0-19a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillRule="evenodd"
        d="M25.395 31.44c.61-1.406 2.602-1.405 3.211 0l5.052 11.66c.595 1.374-.699 2.813-2.129 2.365l-4.528-1.417-4.536 1.418c-1.43.447-2.724-.993-2.128-2.367l5.058-11.66zm1.606 1.325v9.27c.176 0 .352.028.522.08l4.082 1.278-4.604-10.628z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={24.208}
          x2={33.702}
          y1={4}
          y2={59.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={22.667}
          x2={31.362}
          y1={5}
          y2={59.103}
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
          gradientTransform="matrix(22.1667 42.75 -33.25 16.0312 24.417 19.063)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={22}
          x2={35.036}
          y1={12}
          y2={45.459}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={22}
          x2={35.036}
          y1={12}
          y2={45.459}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
