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
        d="M4 7.5A3.5 3.5 0 0 1 7.5 4H25a7 7 0 0 1 7 7v17.5a3.5 3.5 0 0 1-3.5 3.5H11a7 7 0 0 1-7-7V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5H25a6 6 0 0 1 6 6v17.5a2.5 2.5 0 0 1-2.5 2.5H11a6 6 0 0 1-6-6V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5H25a6 6 0 0 1 6 6v17.5a2.5 2.5 0 0 1-2.5 2.5H11a6 6 0 0 1-6-6V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16.25 10a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0v-14.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M20.25 13a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M12.25 16a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M24.25 16a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.042}
          x2={16.812}
          y1={4}
          y2={32.275}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.222}
          x2={15.511}
          y1={5}
          y2={31.311}
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
          gradientTransform="matrix(13.7222 20.5833 -20.5833 7.71875 13.306 11.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={18.25}
          x2={14.702}
          y1={22.084}
          y2={8.405}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={18.25}
          x2={14.702}
          y1={22.084}
          y2={8.405}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={18.25}
          x2={14.702}
          y1={22.084}
          y2={8.405}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={18.25}
          x2={14.702}
          y1={22.084}
          y2={8.405}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
