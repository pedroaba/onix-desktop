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
        d="M4.5 15H16C16 15 15.5 15.5 15.5 16.5C15.5 17.5 16 17.5 16 17.5H5.5C4.94772 17.5 4.5 17.0523 4.5 16.5V15Z"
        fill={'url(#' + iconId + '-paint0_linear_74105_6416)' + ''}
      />
      <path
        d="M4 4V16C4 17.1046 4.89543 18 6 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H6C5.44772 17 5 16.5523 5 16H15C15.5523 16 16 15.5523 16 15V4C16 2.89543 15.1046 2 14 2H6C4.89543 2 4 2.89543 4 4Z"
        fill={'url(#' + iconId + '-paint1_linear_74105_6416)' + ''}
      />
      <path
        d="M6 5C6 4.44772 6.44772 4 7 4H13C13.5523 4 14 4.44772 14 5V6C14 6.55228 13.5523 7 13 7H7C6.44772 7 6 6.55228 6 6V5Z"
        fill={'url(#' + iconId + '-paint2_linear_74105_6416)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_74105_6416'}
          x1={10}
          y1={17}
          x2={10}
          y2={15}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.715705} stopColor="#58AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_74105_6416'}
          x1={8.14033}
          y1={4.99369}
          x2={10.7591}
          y2={22.1785}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_74105_6416'}
          x1={8.75898}
          y1={3.48531}
          x2={12.1155}
          y2={9.05541}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9FF0F9" />
          <stop offset={1} stopColor="#6CE0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
