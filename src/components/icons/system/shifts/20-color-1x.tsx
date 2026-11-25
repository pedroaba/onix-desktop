'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9641)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 6C9.77614 6 10 6.22386 10 6.5V10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H9.5C9.22386 11 9 10.7761 9 10.5V6.5C9 6.22386 9.22386 6 9.5 6Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9641)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9641'}
          x1={5.33333}
          y1={2.22222}
          x2={12.3333}
          y2={17.7778}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1EC8B0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9641'}
          x1={8.9375}
          y1={6.375}
          x2={7.46298}
          y2={11.3257}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#DEDEFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
