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
        d="M8.952 3.667A2.75 2.75 0 0 0 7.157 3H4.75A2.75 2.75 0 0 0 2 5.75v11.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25v-9.5A2.75 2.75 0 0 0 19.25 5h-8.312c-.283 0-.556-.101-.77-.286L8.952 3.667z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M8.952 3.667A2.75 2.75 0 0 0 7.157 3H4.75A2.75 2.75 0 0 0 2 5.75v11.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25v-9.5A2.75 2.75 0 0 0 19.25 5h-8.312c-.283 0-.556-.101-.77-.286L8.952 3.667z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8.75C3 7.784 3.784 7 4.75 7h3.417a2.75 2.75 0 0 0 1.526-.462l.114-.076A2.75 2.75 0 0 1 11.333 6h7.917c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25v-8.5z"
      />
      <path
        fill="#944600"
        d="M15.523 11.03a.533.533 0 0 1 .956 0l.741 1.502 1.658.241a.533.533 0 0 1 .295.91l-1.2 1.169.284 1.65a.533.533 0 0 1-.774.563l-1.482-.78-1.482.78a.533.533 0 0 1-.774-.563l.283-1.65-1.2-1.169a.533.533 0 0 1 .296-.91l1.657-.24.742-1.502z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={6.5}
          x2={6.5}
          y1={20}
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
          gradientTransform="matrix(0 2.2573 -7.85714 0 8.857 8.023)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={10.654}
          x2={7.707}
          y1={19.956}
          y2={5.993}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
      </defs>
    </svg>
  )
}
