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
        d="M17 12L13.5 11.5L10 12L9.5 14.5L10 17H14C15.6569 17 17 15.6569 17 14V12Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_10299)' + ''}
      />
      <path
        d="M10 3L9.5 7.5L10 12H17V6C17 4.34315 15.6569 3 14 3H10Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_10299)' + ''}
      />
      <path
        d="M10 17V8L6.5 7.5L3 8V14C3 15.6569 4.34315 17 6 17H10Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_10299)' + ''}
      />
      <path
        d="M10 3V8H3V6C3 4.34315 4.34315 3 6 3H10Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_10299)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_10299'}
          x1={7}
          y1={9.5}
          x2={11.0998}
          y2={18.877}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B0F098" />
          <stop offset={1} stopColor="#52D17C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_10299'}
          x1={11}
          y1={4}
          x2={16.3275}
          y2={10.7411}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={1} stopColor="#309C61" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_10299'}
          x1={4}
          y1={9}
          x2={9.4562}
          y2={14.562}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#42B870" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_10299'}
          x1={4}
          y1={4}
          x2={6.07107}
          y2={9.00508}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B0F098" />
          <stop offset={1} stopColor="#64DE89" />
        </linearGradient>
      </defs>
    </svg>
  )
}
