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
        d="M20 24C20 26.2091 18.2091 28 16 28C13.7909 28 12 26.2091 12 24C12 21.7909 13.7909 20 16 20C18.2091 20 20 21.7909 20 24Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_11809)' + ''}
      />
      <path
        d="M7.00001 13C7.00001 8.02944 11.0295 4 16 4C20.9706 4 25 8.02944 25 13V16.8074L26.9285 21.6286C27.0517 21.9367 27.0141 22.2859 26.8281 22.5606C26.642 22.8354 26.3318 23 26 23H6C5.66818 23 5.35797 22.8354 5.17194 22.5606C4.98591 22.2859 4.94829 21.9367 5.07153 21.6286L7.00001 16.8074V13Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_11809)' + ''}
      />
      <path
        d="M7.00001 13C7.00001 8.02944 11.0295 4 16 4C20.9706 4 25 8.02944 25 13V16.8074L26.9285 21.6286C27.0517 21.9367 27.0141 22.2859 26.8281 22.5606C26.642 22.8354 26.3318 23 26 23H6C5.66818 23 5.35797 22.8354 5.17194 22.5606C4.98591 22.2859 4.94829 21.9367 5.07153 21.6286L7.00001 16.8074V13Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_11809)' + ''}
        fillOpacity={0.2}
      />
      <path
        d="M27 9C27 10.6569 25.6569 12 24 12C22.3431 12 21 10.6569 21 9C21 7.34315 22.3431 6 24 6C25.6569 6 27 7.34315 27 9Z"
        fill="#212121"
      />
      <path
        d="M27 9C27 10.6569 25.6569 12 24 12C22.3431 12 21 10.6569 21 9C21 7.34315 22.3431 6 24 6C25.6569 6 27 7.34315 27 9Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_11809)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_11809'}
          x1={16}
          y1={22.8571}
          x2={16.0259}
          y2={27.9992}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB4824" />
          <stop offset={1} stopColor="#FFCD0F" stopOpacity={0.988235} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_11809'}
          x1={24.243}
          y1={20.8886}
          x2={8.48023}
          y2={5.76923}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6F47" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_11809'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.9424 9.33991) rotate(132.806) scale(8.09417 8.84338)"
        >
          <stop offset={0.253378} stopColor="#FFE994" />
          <stop offset={0.647973} stopColor="#FFE994" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_11809'}
          x1={21.2143}
          y1={7.125}
          x2={25.9286}
          y2={10.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F83F54" />
          <stop offset={1} stopColor="#B91D6B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
