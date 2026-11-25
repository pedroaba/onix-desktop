'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.75 25C4.33579 25 4 24.6642 4 24.25V16.5H5.5V24.25C5.5 24.6642 5.16421 25 4.75 25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9504)' + ''}
      />
      <path
        d="M23.25 18H4.5C4.22386 18 4 17.7761 4 17.5V3.75C4 3.33579 4.33579 3 4.75 3H23.25C23.8402 3 24.1991 3.65017 23.8847 4.14961L19.8863 10.5L23.8847 16.8504C24.1991 17.3498 23.8402 18 23.25 18Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9504)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9504'}
          x1={5.5}
          y1={27.7321}
          x2={4.76383}
          y2={16.8195}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#889096" />
          <stop offset={1} stopColor="#63686E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9504'}
          x1={-0.375264}
          y1={-1.28571}
          x2={7.90628}
          y2={18.9819}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={1} stopColor="#D7257D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
