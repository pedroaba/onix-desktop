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
        d="M8.456 3.698A2 2 0 0 0 6.937 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9.966a.857.857 0 0 1-.651-.3l-.86-1.002z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M8.456 3.698A2 2 0 0 0 6.937 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9.966a.857.857 0 0 1-.651-.3l-.86-1.002z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.293C7.246 7 7.68 6.82 8 6.5c.32-.32.754-.5 1.207-.5H16a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.5z"
      />
      <path
        fill="#944600"
        d="M11.217 11.264a.84.84 0 0 0-.217.546v.16c0 .817.817 1.53 2 1.53s2-.713 2-1.53v-.16a.84.84 0 0 0-.217-.546.753.753 0 0 0-.558-.264h-2.45a.753.753 0 0 0-.558.264zM13 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
      <path
        fill="#944600"
        d="M14.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={6}
          x2={6}
          y1={16}
          y2={3}
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
          gradientTransform="matrix(0 1.72617 -5.71429 0 7.714 6.84)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={9.058}
          x2={7.038}
          y1={15.662}
          y2={5.986}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
