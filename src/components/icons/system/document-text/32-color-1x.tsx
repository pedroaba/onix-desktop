'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 2H8C6.34315 2 5 3.34315 5 5V27C5 28.6569 6.34315 30 8 30H24C25.6569 30 27 28.6569 27 27V12L20 9L17 2Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9765)' + ''}
      />
      <path
        d="M17 2H8C6.34315 2 5 3.34315 5 5V27C5 28.6569 6.34315 30 8 30H24C25.6569 30 27 28.6569 27 27V12L20 9L17 2Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_9765)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M17 10V2L27 12H19C17.8954 12 17 11.1046 17 10Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9765)' + ''}
      />
      <path
        d="M11 23C10.4477 23 10 23.4477 10 24C10 24.5523 10.4477 25 11 25H21C21.5523 25 22 24.5523 22 24C22 23.4477 21.5523 23 21 23H11ZM10 20C10 19.4477 10.4477 19 11 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H11C10.4477 21 10 20.5523 10 20ZM11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H11Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9765)' + ''}
        fillOpacity={0.9}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9765'}
          x1={20.4}
          y1={2}
          x2={22.7106}
          y2={25.6099}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6CE0FF" />
          <stop offset={1} stopColor="#4894FE" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_9765'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.9167 2.875) rotate(133.108) scale(17.438 10.2853)"
        >
          <stop offset={0.362364} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9765'}
          x1={21.9833}
          y1={6.16667}
          x2={19.4833}
          y2={10.3333}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9FF0F9" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9765'}
          x1={22}
          y1={29}
          x2={11.1052}
          y2={10.3542}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}
