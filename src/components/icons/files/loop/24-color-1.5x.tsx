'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 5.5A3.5 3.5 0 0 1 9.5 2H23a7 7 0 0 1 7 7v21.5a3.5 3.5 0 0 1-3.5 3.5H13a7 7 0 0 1-7-7V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M18 10a8 8 0 1 1 0 16h-8v-8a8 8 0 0 1 8-8zm0 5a3 3 0 0 0-3 3v3h3a3 3 0 1 0 0-6z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M26 18a8 8 0 0 1-8 8h-8a5 5 0 0 1 5-5h3a3 3 0 0 0 2.996-2.846L21 18h5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.56}
        d="M26 18a8 8 0 0 1-8 8h-8a5 5 0 0 1 5-5h3a3 3 0 0 0 2.996-2.846L21 18h5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M26 18a8 8 0 0 1-8 8h-8a5 5 0 0 1 5-5h3a3 3 0 0 0 2.996-2.846L21 18h5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M18 10c2.21 0 4.21.895 5.657 2.343l-3.536 3.536A3 3 0 0 0 15 18v3a5 5 0 0 1-5 5v-8a8 8 0 0 1 8-8z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M18 10c2.21 0 4.21.895 5.657 2.343l-3.536 3.536A3 3 0 0 0 15 18v3a5 5 0 0 1-5 5v-8a8 8 0 0 1 8-8z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={19.76}
          x2={17.12}
          y1={15.68}
          y2={26.48}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={15.2}
          x2={22.24}
          y1={24.8}
          y2={23.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51E6FF" />
          <stop offset={1} stopColor="#71D4FF" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(3.2 2.2 -3.86655 5.62407 12.8 22.6)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.7} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.92 3.68 -6.46767 10.4045 11.84 22)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={13.275}
          x2={17.391}
          y1={18.614}
          y2={12.848}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#AB5ADD" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(10.704 -1.85158 4.83037 28.3617 8.642 14.991)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
