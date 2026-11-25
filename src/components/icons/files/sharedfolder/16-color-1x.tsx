'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6.884 1.698A2 2 0 0 0 5.366 1H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8.394a.857.857 0 0 1-.65-.3l-.86-1.002z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M6.884 1.698A2 2 0 0 0 5.366 1H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8.394a.857.857 0 0 1-.65-.3l-.86-1.002z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 6.5A1.5 1.5 0 0 1 3.5 5h1.793c.453 0 .887-.18 1.207-.5.32-.32.754-.5 1.207-.5H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.5z"
      />
      <path
        fill="#944600"
        d="M8.217 9.264A.84.84 0 0 0 8 9.81v.16c0 .817.817 1.53 2 1.53s2-.713 2-1.53v-.16a.84.84 0 0 0-.217-.546.753.753 0 0 0-.558-.264h-2.45a.753.753 0 0 0-.558.264zM10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
      <path
        fill="#944600"
        d="M11.25 6.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={4}
          x2={4}
          y1={14}
          y2={1}
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
          gradientTransform="matrix(0 1.72617 -5.71429 0 5.714 4.84)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={7.058}
          x2={5.038}
          y1={13.662}
          y2={3.986}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
