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
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill="#33C481"
        d="M22 12a1 1 0 0 1 1 1v4l-5.321.968c-.118.021-.24.021-.358 0L12 17v-4a1 1 0 0 1 1-1h9z"
      />
      <path
        fill="#21A366"
        d="M24 17a1 1 0 0 1 1 1v5l-4.5 1-.633-.14A5 5 0 0 0 15 20h-3v-3h12z"
      />
      <path
        fill="#185C37"
        d="M27 23a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-7v-3c0-.711-.15-1.387-.417-2H27z"
      />
      <rect width={18} height={18} x={1} y={21} fill="#107C41" rx={4} />
      <path
        fill="#fff"
        d="M8.597 31.743V35H6.342V25h3.484c1.247 0 2.197.272 2.849.816.656.544.984 1.35.984 2.42 0 1.101-.367 1.962-1.103 2.58-.73.618-1.713.927-2.946.927H8.597zm0-5.014v3.285h.943c.558 0 .989-.146 1.292-.44.302-.292.453-.713.453-1.262 0-.506-.149-.897-.447-1.171-.293-.274-.714-.412-1.263-.412h-.978z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.578}
          y1={6}
          y2={34.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.444}
          x2={14.976}
          y1={7}
          y2={33.48}
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
          gradientTransform="matrix(17.9444 20.5833 -26.9167 7.71875 13.861 13.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
