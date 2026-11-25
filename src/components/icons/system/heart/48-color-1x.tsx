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
        d="M21.2625 10.1783C17.5699 7.38867 12.508 7.26959 8.68827 9.8825C3.03756 13.7479 2.37962 21.8352 7.33123 26.5632L23.1367 41.6547C23.6198 42.116 24.3801 42.116 24.8632 41.6547L40.6663 26.5638C45.6178 21.8355 44.9594 13.748 39.3083 9.88276C35.4874 7.26933 30.424 7.38942 26.7313 10.1811L23.9997 12.2461L21.2625 10.1783Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9353)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9353'}
          x1={-4.7522}
          y1={-1.7126}
          x2={15.6899}
          y2={42.4296}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={1} stopColor="#D7257D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
