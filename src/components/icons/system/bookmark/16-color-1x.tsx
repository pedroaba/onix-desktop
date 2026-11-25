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
        d="M3.77935 13.9187C3.4471 14.1405 3.00171 13.9024 3.00171 13.5029V4.01167C3.00171 2.9085 3.89496 2.01365 4.99813 2.01168L10.9981 2.00092C12.1027 1.99895 12.9997 2.89277 13.0017 3.99734V13.5029C13.0017 13.9024 12.5563 14.1405 12.2241 13.9187L8.00171 11.0994L3.77935 13.9187Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_10436)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_10436'}
          x1={3.00171}
          y1={3.01901}
          x2={9.30169}
          y2={11.9137}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={1} stopColor="#D7257D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
