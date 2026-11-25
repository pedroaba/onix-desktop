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
        d="M23.05 8.05A7 7 0 0 0 18.1 6H11a7 7 0 0 0-7 7v34a7 7 0 0 0 7 7h42a7 7 0 0 0 7-7V19a7 7 0 0 0-7-7H28.243a3 3 0 0 1-2.122-.879l-3.07-3.07z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M23.05 8.05A7 7 0 0 0 18.1 6H11a7 7 0 0 0-7 7v34a7 7 0 0 0 7 7h42a7 7 0 0 0 7-7V19a7 7 0 0 0-7-7H28.243a3 3 0 0 1-2.122-.879l-3.07-3.07z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 23a6 6 0 0 1 6-6h10.5a5 5 0 0 0 4-2 5 5 0 0 1 4-2H53a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6V23z"
      />
      <path
        fill="#944600"
        d="M27 27c1.105 0 2.002.895 2.005 2H16.338a3.333 3.333 0 0 0-3.333 3.333v5.334A3.333 3.333 0 0 0 16.338 41h12.667c-.003 1.105-.9 2-2.005 2H16.35a5.346 5.346 0 0 1-5.345-5.346v-5.308A5.346 5.346 0 0 1 16.35 27H27zM9.023 31a6.95 6.95 0 0 0-.02.48v7.04c0 .161.009.322.02.48H5.047v-8h3.976z"
      />
      <path
        fill="#944600"
        fillRule="evenodd"
        d="M59.534 38.957H16.441a1.44 1.44 0 0 1-1.438-1.44v-5.036c0-.794.644-1.438 1.438-1.438h43.093v7.914zM20.003 34a1 1 0 1 0 0 2h2.667a1 1 0 0 0 0-2h-2.667z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={18}
          x2={18}
          y1={52}
          y2={8}
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
          gradientTransform="matrix(0 5.84242 -20 0 24 21)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={28.5}
          x2={20.75}
          y1={52.5}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
