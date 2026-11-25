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
        d="M6.5 3C4.01472 3 2 5.01472 2 7.5V19.5C2 21.9853 4.01472 24 6.5 24H8V28.081C8 29.7873 9.99932 30.71 11.2977 29.6029L17.8685 24H25.5C27.9853 24 30 21.9853 30 19.5V7.5C30 5.01472 27.9853 3 25.5 3H6.5Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_9908)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_9908'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-4.46154 -5.33381) rotate(48.6229) scale(50.8108 91.9616)"
        >
          <stop stopColor="#FAB500" />
          <stop offset={0.535356} stopColor="#FE8401" />
          <stop offset={1} stopColor="#FB5937" />
        </radialGradient>
      </defs>
    </svg>
  )
}
