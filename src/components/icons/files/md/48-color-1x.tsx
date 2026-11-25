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
        fillRule="evenodd"
        d="M34.5 44h-24A4.5 4.5 0 019 35.256V8.5A4.5 4.5 0 0113.5 4H30a9 9 0 019 9v26.5a4.5 4.5 0 01-4.5 4.5"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M10 8.5A3.5 3.5 0 0113.5 5H30a8 8 0 018 8v26.5a3.5 3.5 0 11-3.5-3.5.5.5 0 000-1h-24q-.254 0-.5.028zM31.671 36H10.5a3.5 3.5 0 100 7h21.171A4.5 4.5 0 0130 39.5c0-1.414.652-2.675 1.671-3.5"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M10 8.5A3.5 3.5 0 0113.5 5H30a8 8 0 018 8v26.5a3.5 3.5 0 11-3.5-3.5.5.5 0 000-1h-24q-.254 0-.5.028zM31.671 36H10.5a3.5 3.5 0 100 7h21.171A4.5 4.5 0 0130 39.5c0-1.414.652-2.675 1.671-3.5"
        clipRule="evenodd"
      />
      <path
        fill="#242424"
        d="M14.97 13.054a.75.75 0 01.823.178l4.707 4.931 4.707-4.93a.752.752 0 011.293.517v11.5a.75.75 0 01-1.5 0v-9.628l-3.957 4.146a.75.75 0 01-1.086 0L16 15.622v9.628a.75.75 0 01-1.5 0v-11.5a.75.75 0 01.47-.696M31.25 13a.75.75 0 01.75.75v9.69l1.223-1.222a.75.75 0 111.06 1.06l-2.5 2.502a.75.75 0 01-1.061 0l-2.502-2.502a.75.75 0 011.06-1.06l1.22 1.22V13.75a.75.75 0 01.75-.75"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M14.97 13.054a.75.75 0 01.823.178l4.707 4.931 4.707-4.93a.752.752 0 011.293.517v11.5a.75.75 0 01-1.5 0v-9.628l-3.957 4.146a.75.75 0 01-1.086 0L16 15.622v9.628a.75.75 0 01-1.5 0v-11.5a.75.75 0 01.47-.696M31.25 13a.75.75 0 01.75.75v9.69l1.223-1.222a.75.75 0 111.06 1.06l-2.5 2.502a.75.75 0 01-1.061 0l-2.502-2.502a.75.75 0 011.06-1.06l1.22 1.22V13.75a.75.75 0 01.75-.75"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={16.656}
          x2={23.131}
          y1={4}
          y2={44.065}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={15.611}
          x2={21.458}
          y1={5}
          y2={43.16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={59.531}
          x2={8.525}
          y1={38.48}
          y2={7.207}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(16.3611 30.0833 -24.5417 11.2812 16.903 14.896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
