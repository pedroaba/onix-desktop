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
        d="M7 4.75C7 3.23122 8.23122 2 9.75 2H18.25C19.7688 2 21 3.23122 21 4.75V23.2497C21 24.7684 19.7688 25.9997 18.25 25.9997H9.75C8.23122 25.9997 7 24.7684 7 23.2497V4.75Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_8512)' + ''}
      />
      <path
        d="M12.25 21C11.8358 21 11.5 21.3358 11.5 21.75C11.5 22.1642 11.8358 22.5 12.25 22.5H15.75C16.1642 22.5 16.5 22.1642 16.5 21.75C16.5 21.3358 16.1642 21 15.75 21H12.25Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8512)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_8512'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7 1.25001) rotate(63.4557) scale(30.3487 56.9596)"
        >
          <stop stopColor="#CB7DF8" />
          <stop offset={0.412452} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#4E44DB" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8512'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.7188 21.1) rotate(37.9037) scale(8.38303 9.65446)"
        >
          <stop stopColor="#DECBFF" />
          <stop offset={1} stopColor="#D1D1FF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
