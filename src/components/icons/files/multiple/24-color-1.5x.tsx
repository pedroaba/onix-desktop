'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M26.969 30.969A3.5 3.5 0 0 1 23.5 34H16c-5.523 0-10-4.477-10-10V8.5a3.5 3.5 0 0 1 3.031-3.469A3.5 3.5 0 0 1 12.5 2H23a7 7 0 0 1 7 7v18.5a3.5 3.5 0 0 1-3.031 3.469z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M12.5 3A2.5 2.5 0 0 0 10 5.5V24a6 6 0 0 0 6 6h10.5a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H12.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M12.5 3A2.5 2.5 0 0 0 10 5.5V24a6 6 0 0 0 6 6h10.5a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H12.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7 8.5a2.5 2.5 0 0 1 2-2.45V24a7 7 0 0 0 7 7h9.95a2.5 2.5 0 0 1-2.45 2H16a9 9 0 0 1-9-9V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7 8.5a2.5 2.5 0 0 1 2-2.45V24a7 7 0 0 0 7 7h9.95a2.5 2.5 0 0 1-2.45 2H16a9 9 0 0 1-9-9V8.5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90626 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90626 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
