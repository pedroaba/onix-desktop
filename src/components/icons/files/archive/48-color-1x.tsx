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
        d="M17.766 7.427A5.25 5.25 0 0 0 14.168 6H9.25A5.25 5.25 0 0 0 4 11.25v22.5C4 36.65 6.35 39 9.25 39h29.5c2.9 0 5.25-2.35 5.25-5.25v-18.5c0-2.9-2.35-5.25-5.25-5.25H21.392a2.25 2.25 0 0 1-1.542-.612l-2.084-1.961z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M17.766 7.427A5.25 5.25 0 0 0 14.168 6H9.25A5.25 5.25 0 0 0 4 11.25v22.5C4 36.65 6.35 39 9.25 39h29.5c2.9 0 5.25-2.35 5.25-5.25v-18.5c0-2.9-2.35-5.25-5.25-5.25H21.392a2.25 2.25 0 0 1-1.542-.612l-2.084-1.961z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 19.5A4.5 4.5 0 0 1 9.5 15H15a5 5 0 0 0 4-2 5 5 0 0 1 4-2h15.5a4.5 4.5 0 0 1 4.5 4.5v18a4.5 4.5 0 0 1-4.5 4.5h-29A4.5 4.5 0 0 1 5 33.5v-14z"
      />
      <path
        fill="#944600"
        d="M21.5 20a1.5 1.5 0 0 1 1.5 1.5h-9a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 2.5 2.5h9a1.5 1.5 0 0 1-1.5 1.5H14a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h7.5zM8.758 23a4.49 4.49 0 0 0-.258 1.5V28c0 .344.04.678.113 1H5v-6h3.758z"
      />
      <path
        fill="#944600"
        fillRule="evenodd"
        d="M43 29H14.5a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5H43v6zm-26.75-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.5}
          x2={13.5}
          y1={39}
          y2={6}
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
          gradientTransform="matrix(0 4.38181 -15 0 18 15.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={21.308}
          x2={14.972}
          y1={39.985}
          y2={11.082}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
