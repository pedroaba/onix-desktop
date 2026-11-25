'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.75 2C16.9926 2 18 3.00736 18 4.25V19.75C18 20.9926 16.9926 22 15.75 22H8.25C7.00736 22 6 20.9926 6 19.75V4.25C6 3.00736 7.00736 2 8.25 2H15.75Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_8515)' + ''}
      />
      <path
        d="M13.25 18H10.75C10.3358 18 10 18.3358 10 18.75C10 19.1642 10.3358 19.5 10.75 19.5H13.25C13.6642 19.5 14 19.1642 14 18.75C14 18.3358 13.6642 18 13.25 18Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8515)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_8515'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6 1.375) rotate(62.8053) scale(25.4368 48.5425)"
        >
          <stop stopColor="#CB7DF8" />
          <stop offset={0.412452} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#4E44DB" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8515'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.375 18.1) rotate(44.2227) scale(7.38405 8.76848)"
        >
          <stop stopColor="#DECBFF" />
          <stop offset={1} stopColor="#D1D1FF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
