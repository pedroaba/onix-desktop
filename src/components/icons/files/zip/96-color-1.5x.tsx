'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M35.575 15.075A10.5 10.5 0 0 0 28.151 12H18.5C12.701 12 8 16.701 8 22.5v45C8 73.299 12.701 78 18.5 78h59C83.299 78 88 73.299 88 67.5v-36C88 25.701 83.299 21 77.5 21H43.364a4.5 4.5 0 0 1-3.182-1.318l-4.607-4.607z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M35.575 15.075A10.5 10.5 0 0 0 28.151 12H18.5C12.701 12 8 16.701 8 22.5v45C8 73.299 12.701 78 18.5 78h59C83.299 78 88 73.299 88 67.5v-36C88 25.701 83.299 21 77.5 21H43.364a4.5 4.5 0 0 1-3.182-1.318l-4.607-4.607z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 37.5a8.5 8.5 0 0 1 8.5-8.5h12.75a7.5 7.5 0 0 0 6-3 7.5 7.5 0 0 1 6-3H77.5a8.5 8.5 0 0 1 8.5 8.5v36a8.5 8.5 0 0 1-8.5 8.5h-59a8.5 8.5 0 0 1-8.5-8.5v-30z"
      />
      <path
        fill="#944600"
        fillRule="evenodd"
        d="M40.499 42a9.5 9.5 0 0 1 0 19c-1.154 0-16.806-1.775-23.968-2.594A3.986 3.986 0 0 1 13.038 55H22.5a3.5 3.5 0 0 0 0-7h-9.462a3.985 3.985 0 0 1 3.493-3.406C23.693 43.776 39.345 42 40.5 42zm0 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
        clipRule="evenodd"
      />
      <path
        fill="#944600"
        d="M58.5 48a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zm10 0a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zm10 0a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zm-25-5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zm10 0a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zm10 0a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zm10 0a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zm-61 7a1.5 1.5 0 0 1 0 3h-10a1.5 1.5 0 0 1 0-3h10z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={27}
          x2={27}
          y1={78}
          y2={12}
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
          gradientTransform="matrix(0 8.76362 -30 0 36 31.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={42.75}
          x2={31.125}
          y1={78.75}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
