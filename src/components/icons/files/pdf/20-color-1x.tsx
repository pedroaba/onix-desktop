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
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12.5 13a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12.5 11a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
      />
      <path
        fill="#D20112"
        d="M6.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V8c.163 0 .397-.045.605-.194A.962.962 0 0 0 8 7a.962.962 0 0 0-.395-.806A1.058 1.058 0 0 0 7 6h-.5zm2.5.5a.5.5 0 0 1 .5-.5h.25c.354 0 .711.11.959.431.224.292.291.676.291 1.069 0 .393-.067.777-.291 1.069-.248.32-.605.431-.959.431H9.5a.5.5 0 0 1-.5-.5v-2zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-.25a.5.5 0 0 1 0 1H13v.5a.5.5 0 0 1-1 0v-2z"
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
          x1={8.938}
          x2={9.142}
          y1={11}
          y2={14.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898989" />
          <stop offset={1} stopColor="#636262" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8.938}
          x2={9.142}
          y1={11}
          y2={14.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898989" />
          <stop offset={1} stopColor="#636262" />
        </linearGradient>
      </defs>
    </svg>
  )
}
