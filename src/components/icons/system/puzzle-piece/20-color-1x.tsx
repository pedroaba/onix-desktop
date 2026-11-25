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
        d="M11 2C9.89543 2 9 2.89543 9 4L6.5 4C5.67157 4 5 4.67157 5 5.5V8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12V14.5C5 15.3284 5.67157 16 6.5 16H9C9 17.1046 9.89543 18 11 18C12.1046 18 13 17.1046 13 16H15.5C16.3284 16 17 15.3284 17 14.5V12H16C14.8954 12 14 11.1046 14 10C14 8.89543 14.8954 8 16 8H17V5.5C17 4.67157 16.3284 4 15.5 4H13C13 2.89543 12.1046 2 11 2Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8562)' + ''}
      />
      <path
        d="M11 2C9.89543 2 9 2.89543 9 4L6.5 4C5.67157 4 5 4.67157 5 5.5V8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12V14.5C5 15.3284 5.67157 16 6.5 16H9C9 17.1046 9.89543 18 11 18C12.1046 18 13 17.1046 13 16H15.5C16.3284 16 17 15.3284 17 14.5V12H16C14.8954 12 14 11.1046 14 10C14 8.89543 14.8954 8 16 8H17V5.5C17 4.67157 16.3284 4 15.5 4H13C13 2.89543 12.1046 2 11 2Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8562)' + ''}
        fillOpacity={0.7}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8562'}
          x1={5.33333}
          y1={1.11111}
          x2={14.028}
          y2={18.0174}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1EC8B0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8562'}
          x1={12.1667}
          y1={3.96491}
          x2={15.7479}
          y2={19.5353}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.53288} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
