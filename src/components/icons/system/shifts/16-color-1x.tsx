'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.49707 2C3.11636 2 1.99707 3.11929 1.99707 4.5V11.5C1.99707 12.8807 3.11636 14 4.49707 14H11.4971C12.8778 14 13.9971 12.8807 13.9971 11.5V4.5C13.9971 3.11929 12.8778 2 11.4971 2H4.49707Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9638)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 4C7.77614 4 8 4.22386 8 4.5V8H10.5C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9H7.5C7.22386 9 7 8.77614 7 8.5V4.5C7 4.22386 7.22386 4 7.5 4Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9638)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9638'}
          x1={3.99707}
          y1={1.33333}
          x2={9.99707}
          y2={14.6667}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1EC8B0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9638'}
          x1={6.9375}
          y1={4.375}
          x2={5.46298}
          y2={9.32566}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#DEDEFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
