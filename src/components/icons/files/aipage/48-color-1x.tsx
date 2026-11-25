'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 10.5A4.5 4.5 0 0110.5 6H33a9 9 0 019 9v22.5a4.5 4.5 0 01-4.5 4.5H15a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 10.5A3.5 3.5 0 0110.5 7H33a8 8 0 018 8v22.5a3.5 3.5 0 01-3.5 3.5H15a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 10.5A3.5 3.5 0 0110.5 7H33a8 8 0 018 8v22.5a3.5 3.5 0 01-3.5 3.5H15a8 8 0 01-8-8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M31 26a.61.61 0 01.57.403l.497 1.53a3.16 3.16 0 001.998 2.003l1.532.498a.606.606 0 010 1.14l-1.532.496a3.16 3.16 0 00-1.966 1.997l-.498 1.53a.604.604 0 01-1.141 0l-.497-1.53a3.15 3.15 0 00-1.998-1.997l-1.53-.497a.604.604 0 01-.031-1.146l1.53-.497a3.16 3.16 0 001.999-1.997l.497-1.53A.605.605 0 0131 26m-9.75 6a.75.75 0 010 1.5h-6.5a.75.75 0 010-1.5zm2-6a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5zm10-6a.75.75 0 010 1.5h-18.5a.75.75 0 010-1.5zm-.001-6a.75.75 0 01.002 1.5l-18.5.014a.75.75 0 01-.002-1.5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={17.625}
          x2={22.472}
          y1={6}
          y2={42.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={16.444}
          x2={20.745}
          y1={7}
          y2={41.407}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={17.562}
          x2={33.849}
          y1={8.5}
          y2={29.898}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(17.9444 26.9167 -26.9167 10.0937 17.861 15.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
