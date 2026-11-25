'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 12.25C4 9.90279 5.90279 8 8.25 8H39.75C42.0972 8 44 9.90279 44 12.25V35.75C44 38.0972 42.0972 40 39.75 40H8.25C5.90279 40 4 38.0972 4 35.75V12.25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_10020)' + ''}
      />
      <path
        d="M4 12.25C4 9.90279 5.90279 8 8.25 8H39.75C42.0972 8 44 9.90279 44 12.25V35.75C44 38.0972 42.0972 40 39.75 40H8.25C5.90279 40 4 38.0972 4 35.75V12.25Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_10020)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M25 20.25C25 19.5596 25.5596 19 26.25 19H35.75C36.4404 19 37 19.5596 37 20.25C37 20.9404 36.4404 21.5 35.75 21.5H26.25C25.5596 21.5 25 20.9404 25 20.25ZM26.25 26C25.5596 26 25 26.5596 25 27.25C25 27.9404 25.5596 28.5 26.25 28.5H35.75C36.4404 28.5 37 27.9404 37 27.25C37 26.5596 36.4404 26 35.75 26H26.25Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_10020)' + ''}
      />
      <path
        d="M11 26.5C11 25.6716 11.6716 25 12.5 25H19.5C20.3284 25 21 25.6716 21 26.5V27C21 27 21 31 16 31C11 31 11 27 11 27V26.5Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_10020)' + ''}
      />
      <path
        d="M19 20C19 21.6569 17.6569 23 16 23C14.3431 23 13 21.6569 13 20C13 18.3431 14.3431 17 16 17C17.6569 17 19 18.3431 19 20Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_10020)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_10020'}
          x1={18.2857}
          y1={8}
          x2={28.6178}
          y2={39.8924}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_10020'}
          x1={30.1905}
          y1={11.9298}
          x2={38.9669}
          y2={57.58}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.446512} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_10020'}
          x1={29.9091}
          y1={17.9038}
          x2={33.7945}
          y2={36.5488}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_10020'}
          x1={11}
          y1={21.3581}
          x2={13.3837}
          y2={31.8382}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_10020'}
          x1={13}
          y1={15}
          x2={17.4846}
          y2={22.6803}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
      </defs>
    </svg>
  )
}
