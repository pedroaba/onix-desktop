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
        d="M18 17a9 9 0 0 1 9-9h33c9.941 0 18 8.059 18 18v53a9 9 0 0 1-9 9H27a9 9 0 0 1-9-9V17z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M27 10a7 7 0 0 0-7 7v56.343A8.983 8.983 0 0 1 27 70h42a7 7 0 0 0 7-7V26c0-8.837-7.163-16-16-16H27z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M27 10a7 7 0 0 0-7 7v56.343A8.983 8.983 0 0 1 27 70h42a7 7 0 0 0 7-7V26c0-8.837-7.163-16-16-16H27z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M76 68.657A8.983 8.983 0 0 1 69 72H27a7 7 0 1 0 0 14h42a7 7 0 0 0 7-7v-2.343A8.983 8.983 0 0 1 69 80H27a1 1 0 1 1 0-2h42a7 7 0 0 0 7-7v-2.343z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M76 68.657A8.983 8.983 0 0 1 69 72H27a7 7 0 1 0 0 14h42a7 7 0 0 0 7-7v-2.343A8.983 8.983 0 0 1 69 80H27a1 1 0 1 1 0-2h42a7 7 0 0 0 7-7v-2.343z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M44.754 36.381 31.309 50.383c-2.747 2.86-.72 7.617 3.245 7.617h26.884c3.965 0 5.992-4.756 3.247-7.616L51.246 36.382a4.5 4.5 0 0 0-6.492 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M66 25a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={37.375}
          x2={51.544}
          y1={8}
          y2={87.703}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
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
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
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
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={36.097}
          x2={56.577}
          y1={24.136}
          y2={65.537}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={56}
          x2={66.864}
          y1={13.75}
          y2={34.549}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
