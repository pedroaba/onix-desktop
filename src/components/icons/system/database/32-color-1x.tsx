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
        d="M16 10.1235C19.2559 10.1235 22.3003 9.52773 24.6058 8.47981C25.429 8.10563 26.2738 7.61481 27 6.99997V25C27 27.7614 22.0751 30 16 30C9.92487 30 5 27.7614 5 25V6.99997C5.72619 7.61481 6.57104 8.10563 7.39422 8.47981C9.69966 9.52773 12.7441 10.1235 16 10.1235Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9519)' + ''}
      />
      <path
        d="M16 10.1235C19.2559 10.1235 22.3003 9.52773 24.6058 8.47981C25.429 8.10563 26.2738 7.61481 27 6.99997V25C27 27.7614 22.0751 30 16 30C9.92487 30 5 27.7614 5 25V6.99997C5.72619 7.61481 6.57104 8.10563 7.39422 8.47981C9.69966 9.52773 12.7441 10.1235 16 10.1235Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9519)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M5 7C5 4.23858 9.92487 2 16 2C22.0751 2 27 4.23858 27 7C27 9.76142 22.0751 12 16 12C9.92487 12 5 9.76142 5 7Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9519)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9519'}
          x1={10.1937}
          y1={1.81855}
          x2={22.9849}
          y2={27.5123}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29C3FF" />
          <stop offset={1} stopColor="#367AF2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9519'}
          x1={19.4048}
          y1={9.82454}
          x2={24.153}
          y2={32.392}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.53288} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9519'}
          x1={35.25}
          y1={17}
          x2={24.3033}
          y2={-4.91728}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#58AAFE" />
          <stop offset={1} stopColor="#6CE0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
