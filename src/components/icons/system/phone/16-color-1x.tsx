'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 2.75C4 1.7835 4.7835 1 5.75 1H10.25C11.2165 1 12 1.7835 12 2.75V13.25C12 14.2165 11.2165 15 10.25 15H5.75C4.7835 15 4 14.2165 4 13.25V2.75Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_8521)' + ''}
      />
      <path
        d="M7 12C6.72386 12 6.5 12.2239 6.5 12.5C6.5 12.7761 6.72386 13 7 13H9C9.27614 13 9.5 12.7761 9.5 12.5C9.5 12.2239 9.27614 12 9 12H7Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8521)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_8521'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4 0.5625) rotate(63.9254) scale(17.632 32.6805)"
        >
          <stop stopColor="#CB7DF8" />
          <stop offset={0.412452} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#4E44DB" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8521'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.03125 12.0667) rotate(40.8628) scale(5.24774 6.16903)"
        >
          <stop stopColor="#DECBFF" />
          <stop offset={1} stopColor="#D1D1FF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
