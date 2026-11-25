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
        d="M4 4a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill="#D9D9D9"
        fillRule="evenodd"
        d="M10 6a4 4 0 0 1 0 8H6v-4a4 4 0 0 1 4-4zm0 2.5A1.5 1.5 0 0 0 8.5 10v1.5H10a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M10 6a4 4 0 0 1 0 8H6v-4a4 4 0 0 1 4-4zm0 2.5A1.5 1.5 0 0 0 8.5 10v1.5H10a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M14 10a4 4 0 0 1-4 4H6a2.5 2.5 0 0 1 2.5-2.5H10a1.5 1.5 0 0 0 1.492-1.347L11.5 10H14z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.56}
        d="M14 10a4 4 0 0 1-4 4H6a2.5 2.5 0 0 1 2.5-2.5H10a1.5 1.5 0 0 0 1.492-1.347L11.5 10H14z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M14 10a4 4 0 0 1-4 4H6a2.5 2.5 0 0 1 2.5-2.5H10a1.5 1.5 0 0 0 1.492-1.347L11.5 10H14z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M10 6c1.105 0 2.104.448 2.828 1.172L11.06 8.939A1.5 1.5 0 0 0 8.5 10v1.501A2.5 2.5 0 0 1 6 14v-4a4 4 0 0 1 4-4z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M10 6c1.105 0 2.104.448 2.828 1.172L11.06 8.939A1.5 1.5 0 0 0 8.5 10v1.501A2.5 2.5 0 0 1 6 14v-4a4 4 0 0 1 4-4z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.875}
          x2={10.709}
          y1={2}
          y2={17.941}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.778}
          x2={10.221}
          y1={3}
          y2={16.961}
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
          gradientTransform="matrix(5.27778 11.0833 -7.91667 4.15625 8.194 6.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={10.88}
          x2={9.56}
          y1={8.84}
          y2={14.24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8.6}
          x2={12.12}
          y1={13.4}
          y2={12.6}
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
          gradientTransform="matrix(1.59998 1.1 -1.93324 2.81204 7.4 12.3)"
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
          gradientTransform="matrix(2.95995 1.84 -3.23379 5.20227 6.92 12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={7.637}
          x2={9.696}
          y1={10.307}
          y2={7.424}
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
          gradientTransform="matrix(5.35159 -.9258 2.41501 14.1809 5.321 8.496)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
