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
        d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15V6Z"
        fill={'url(#' + iconId + '-paint0_linear_74105_6478)' + ''}
      />
      <path
        d="M26 15C27.6569 15 29 16.3431 29 18V26C29 27.6569 27.6569 29 26 29H16C15.4477 29 15 28.5523 15 28L15 16C15 15.4477 15.4477 15 16 15L26 15Z"
        fill={'url(#' + iconId + '-paint1_linear_74105_6478)' + ''}
      />
      <path
        d="M17 28C17 28.5523 16.5523 29 16 29L6 29C4.34315 29 3 27.6569 3 26L3 16C3 15.4477 3.44772 15 4 15L16 15C16.5523 15 17 15.4477 17 16L17 28Z"
        fill={'url(#' + iconId + '-paint2_linear_74105_6478)' + ''}
      />
      <path
        d="M20.2002 2.95317C21.4696 1.68424 23.5276 1.68446 24.7968 2.95367L29.0454 7.20224C30.3146 8.47144 30.3144 10.529 29.0449 11.7979L24.7954 16.0456C23.526 17.3145 21.4679 17.3143 20.1987 16.0451L15.9502 11.7965C14.681 10.5273 14.6812 8.46976 15.9507 7.20083L20.2002 2.95317Z"
        fill={'url(#' + iconId + '-paint3_linear_74105_6478)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_74105_6478'}
          x1={3}
          y1={3}
          x2={15.9644}
          y2={16.9616}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#889096" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_74105_6478'}
          x1={29}
          y1={28}
          x2={16}
          y2={15}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#63686E" />
          <stop offset={1} stopColor="#889096" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_74105_6478'}
          x1={3}
          y1={15}
          x2={17}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55595E" />
          <stop offset={1} stopColor="#383B3D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_74105_6478'}
          x1={27.3972}
          y1={13.625}
          x2={18.9034}
          y2={3.14537}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2764E7" />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
      </defs>
    </svg>
  )
}
