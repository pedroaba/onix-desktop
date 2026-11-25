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
        d="M4 4a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 4a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 4a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M12 7a5 5 0 0 1 0 10H7v-5a5 5 0 0 1 5-5zm0 3a2 2 0 0 0-2 2v2h2a2 2 0 1 0 0-4z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M17 12a5 5 0 0 1-5 5H7a3 3 0 0 1 2.846-2.996L10 14h2a2 2 0 0 0 1.99-1.796L14 12h3z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.56}
        d="M17 12a5 5 0 0 1-5 5H7a3 3 0 0 1 2.846-2.996L10 14h2a2 2 0 0 0 1.99-1.796L14 12h3z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M17 12a5 5 0 0 1-5 5H7a3 3 0 0 1 2.846-2.996L10 14h2a2 2 0 0 0 1.99-1.796L14 12h3z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M12 7c1.38 0 2.63.56 3.535 1.465l-2.12 2.12A2 2 0 0 0 10 12v2.001a3 3 0 0 1-3.001 3v-5a5 5 0 0 1 5-5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M12 7c1.38 0 2.63.56 3.535 1.465l-2.12 2.12A2 2 0 0 0 10 12v2.001a3 3 0 0 1-3.001 3v-5a5 5 0 0 1 5-5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={9.167}
          x2={12.5}
          y1={2}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.889}
          x2={11.787}
          y1={3}
          y2={21.034}
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
          gradientTransform="matrix(7.38889 14.25 -11.0833 5.34375 9.472 7.688)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.1}
          x2={11.45}
          y1={10.55}
          y2={17.3}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={10.25}
          x2={14.65}
          y1={16.25}
          y2={15.25}
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
          gradientTransform="matrix(1.99997 1.375 -2.41656 3.51505 8.75 14.875)"
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
          gradientTransform="matrix(3.69994 2.3 -4.04224 6.50283 8.15 14.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={9.047}
          x2={11.598}
          y1={12.35}
          y2={8.754}
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
          gradientTransform="matrix(6.68949 -1.15 3.01877 17.6152 6.151 10.1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
