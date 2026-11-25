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
        d="M17 2C15.3431 2 14 3.34315 14 5V6H9.75C8.23122 6 7 7.23122 7 8.75V13H6C4.34315 13 3 14.3431 3 16C3 17.6569 4.34315 19 6 19H7V23.25C7 24.7688 8.23122 26 9.75 26H14V27C14 28.6569 15.3431 30 17 30C18.6569 30 20 28.6569 20 27V26H24.25C25.7688 26 27 24.7688 27 23.25V19H25C23.3431 19 22 17.6569 22 16C22 14.3431 23.3431 13 25 13H27V8.75C27 7.23122 25.7688 6 24.25 6H20V5C20 3.34315 18.6569 2 17 2Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8556)' + ''}
      />
      <path
        d="M17 2C15.3431 2 14 3.34315 14 5V6H9.75C8.23122 6 7 7.23122 7 8.75V13H6C4.34315 13 3 14.3431 3 16C3 17.6569 4.34315 19 6 19H7V23.25C7 24.7688 8.23122 26 9.75 26H14V27C14 28.6569 15.3431 30 17 30C18.6569 30 20 28.6569 20 27V26H24.25C25.7688 26 27 24.7688 27 23.25V19H25C23.3431 19 22 17.6569 22 16C22 14.3431 23.3431 13 25 13H27V8.75C27 7.23122 25.7688 6 24.25 6H20V5C20 3.34315 18.6569 2 17 2Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8556)' + ''}
        fillOpacity={0.7}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8556'}
          x1={7}
          y1={0.444444}
          x2={22.397}
          y2={29.7721}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1EC8B0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8556'}
          x1={18.7143}
          y1={5.4386}
          x2={25.0985}
          y2={32.6292}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.53288} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
