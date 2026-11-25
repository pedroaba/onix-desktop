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
      <rect
        x={3}
        y={3}
        width={14}
        height={14}
        rx={3.5}
        fill={'url(#' + iconId + '-paint0_linear_72095_8095)' + ''}
      />
      <path
        d="M13 17H14.5C15.8807 17 17 15.8807 17 14.5V13H13V17ZM13 12V8H17V12H13ZM12 12H8V8H12V12ZM8 13H12V17H8V13ZM7 12V8H3V12H7ZM3 13H7V17H5.5C4.11929 17 3 15.8807 3 14.5V13ZM13 7H17V5.5C17 4.11929 15.8807 3 14.5 3H13V7ZM12 3V7H8V3H12ZM7 3V7H3V5.5C3 4.11929 4.11929 3 5.5 3H7Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8095)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8095'}
          x1={4}
          y1={4}
          x2={16}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B0F098" />
          <stop offset={1} stopColor="#98F0B0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8095'}
          x1={3}
          y1={3}
          x2={17}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#42B870" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
      </defs>
    </svg>
  )
}
