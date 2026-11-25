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
        d="M11.5 8C12.3284 8 13 8.67157 13 9.5V10C13 11.9714 11.1405 14 8 14C4.85951 14 3 11.9714 3 10V9.5C3 8.67157 3.67157 8 4.5 8H11.5Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9347)' + ''}
      />
      <path
        d="M11.5 8C12.3284 8 13 8.67157 13 9.5V10C13 11.9714 11.1405 14 8 14C4.85951 14 3 11.9714 3 10V9.5C3 8.67157 3.67157 8 4.5 8H11.5Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9347)' + ''}
      />
      <path
        d="M8 1.5C9.51878 1.5 10.75 2.73122 10.75 4.25C10.75 5.76878 9.51878 7 8 7C6.48122 7 5.25 5.76878 5.25 4.25C5.25 2.73122 6.48122 1.5 8 1.5Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9347)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9347'}
          x1={5.37804}
          y1={8.79761}
          x2={7.61628}
          y2={14.7542}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9347'}
          x1={8}
          y1={7.28571}
          x2={11.1641}
          y2={17.1388}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9347'}
          x1={6.55792}
          y1={2.23115}
          x2={9.36093}
          y2={6.70691}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
      </defs>
    </svg>
  )
}
