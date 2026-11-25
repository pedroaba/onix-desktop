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
        d="M9.72265 2.08397C9.8906 1.97201 10.1094 1.97201 10.2774 2.08397C12.2155 3.3761 14.3117 4.1823 16.5707 4.50503C16.817 4.54021 17 4.75117 17 5V9.5C17 13.3913 14.693 16.2307 10.1795 17.9667C10.064 18.0111 9.93605 18.0111 9.82051 17.9667C5.30699 16.2307 3 13.3913 3 9.5V5C3 4.75117 3.18296 4.54021 3.42929 4.50503C5.68833 4.1823 7.78446 3.3761 9.72265 2.08397Z"
        fill={'url(#' + iconId + '-paint0_radial_378174_9601)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_378174_9601'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-2.5 -7) rotate(55.2568) scale(37.726 33.0102)"
        >
          <stop offset={0.337728} stopColor="#0FAFFF" />
          <stop offset={0.529425} stopColor="#367AF2" />
          <stop offset={0.682436} stopColor="#5750E2" />
          <stop offset={0.860903} stopColor="#CC23D1" />
        </radialGradient>
      </defs>
    </svg>
  )
}
