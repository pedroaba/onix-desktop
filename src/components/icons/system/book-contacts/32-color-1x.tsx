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
        d="M6 25H26.6875C26.6875 25 26 25.4 26 27C26 28.6 26.6875 29 26.6875 29H9C7.34315 29 6 27.6569 6 26V25Z"
        fill={'url(#' + iconId + '-paint0_linear_75809_8115)' + ''}
      />
      <path
        d="M9 28C7.89543 28 7 27.1046 7 26H25.25C26.2165 26 27 25.2165 27 24.25V6C27 3.79086 25.2091 2 23 2H9C6.79086 2 5 3.79086 5 6V26C5 28.2091 6.79086 30 9 30H26C26.5523 30 27 29.5523 27 29C27 28.4477 26.5523 28 26 28H9Z"
        fill={'url(#' + iconId + '-paint1_linear_75809_8115)' + ''}
      />
      <path
        d="M9 28C7.89543 28 7 27.1046 7 26H25.25C26.2165 26 27 25.2165 27 24.25V6C27 3.79086 25.2091 2 23 2H9C6.79086 2 5 3.79086 5 6V26C5 28.2091 6.79086 30 9 30H26C26.5523 30 27 29.5523 27 29C27 28.4477 26.5523 28 26 28H9Z"
        fill={'url(#' + iconId + '-paint2_radial_75809_8115)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M9 28C7.89543 28 7 27.1046 7 26H25.25C26.2165 26 27 25.2165 27 24.25V6C27 3.79086 25.2091 2 23 2H9C6.79086 2 5 3.79086 5 6V26C5 28.2091 6.79086 30 9 30H26C26.5523 30 27 29.5523 27 29C27 28.4477 26.5523 28 26 28H9Z"
        fill={'url(#' + iconId + '-paint3_radial_75809_8115)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M19 10.5C19 12.1569 17.6569 13.5 16 13.5C14.3431 13.5 13 12.1569 13 10.5C13 8.84315 14.3431 7.5 16 7.5C17.6569 7.5 19 8.84315 19 10.5ZM21.5 17.25C21.5 19.1178 19.9286 21 16 21C12.0714 21 10.5 19.1249 10.5 17.25V17.0448C10.5 15.9151 11.4158 15 12.5455 15H19.4545C20.5842 15 21.5 15.9151 21.5 17.0448V17.25Z"
        fill={'url(#' + iconId + '-paint4_linear_75809_8115)' + ''}
        fillOpacity={0.9}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_75809_8115'}
          x1={15.5652}
          y1={28.2}
          x2={15.5652}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.715705} stopColor="#58AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_75809_8115'}
          x1={12.8278}
          y1={7.23895}
          x2={17.0836}
          y2={37.4104}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_75809_8115'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 18.5) scale(8.5 4.26316)"
        >
          <stop stopColor="#171155" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_75809_8115'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17 10.5) scale(3.5 3.40447)"
        >
          <stop stopColor="#171155" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_75809_8115'}
          x1={24.2549}
          y1={32.5714}
          x2={0.713453}
          y2={-2.60666}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}
