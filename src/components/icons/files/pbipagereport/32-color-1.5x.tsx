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
        d="M9 8.5A4.5 4.5 0 0113.5 4H30a9 9 0 019 9v26.5a4.5 4.5 0 01-4.5 4.5h-21A4.5 4.5 0 019 39.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M38 35.5a3.5 3.5 0 01-3.5 3.5h-21a.5.5 0 000 1h21a4.49 4.49 0 003.5-1.673V39.5a3.5 3.5 0 01-3.5 3.5h-21a3.5 3.5 0 110-7h21a4.5 4.5 0 003.5-1.67z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M38 35.5a3.5 3.5 0 01-3.5 3.5h-21a.5.5 0 000 1h21a4.49 4.49 0 003.5-1.673V39.5a3.5 3.5 0 01-3.5 3.5h-21a3.5 3.5 0 110-7h21a4.5 4.5 0 003.5-1.67z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M30 5a8 8 0 018 8v18.5a3.5 3.5 0 01-3.5 3.5h-21a4.5 4.5 0 00-3.5 1.672V8.5A3.5 3.5 0 0113.5 5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M30 5a8 8 0 018 8v18.5a3.5 3.5 0 01-3.5 3.5h-21a4.5 4.5 0 00-3.5 1.672V8.5A3.5 3.5 0 0113.5 5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M18 26v18a1 1 0 01-1 1h-6V26a1 1 0 011-1h5a1 1 0 011 1"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M14.5 31.02a1.01 1.01 0 00-1-1.02l-3.643.438v14.125l4.214.437h.429z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M14 31v14H7V31a1 1 0 011-1h5a1 1 0 011 1"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M3 36v8a1 1 0 001 1h6v-9a1 1 0 00-1-1H4a1 1 0 00-1 1"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M31.5 30a.5.5 0 010 1H19v-1zm0-5a.5.5 0 010 1H19c0-.365-.1-.706-.27-1zm0-5a.5.5 0 010 1h-15a.5.5 0 010-1zm-9-11a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-5A1.5 1.5 0 0117.5 9zm9 7a.5.5 0 010 1h-5a.5.5 0 010-1zm0-5a.5.5 0 010 1h-5a.5.5 0 010-1z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={18.688}
          x2={25.772}
          y1={4}
          y2={43.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={17.778}
          x2={24.218}
          y1={5}
          y2={42.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={17.778}
          x2={24.218}
          y1={5}
          y2={42.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={9.833}
          x2={17.417}
          y1={25}
          y2={43.083}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={6.999}
          x2={14.181}
          y1={30}
          y2={44.624}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={2.999}
          x2={6.866}
          y1={35}
          y2={44.896}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={16}
          x2={36.93}
          y1={9}
          y2={24.222}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(14.7778 30.0833 -22.1667 11.2812 18.944 14.896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(14.7778 30.0833 -22.1667 11.2812 18.944 14.896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
