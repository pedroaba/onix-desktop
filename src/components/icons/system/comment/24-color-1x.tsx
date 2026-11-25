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
        d="M5.25 3C3.45507 3 2 4.45507 2 6.25V14.75C2 16.5449 3.45508 18 5.25 18H6V20.75C6 21.7801 7.17595 22.368 8 21.75L13 18H18.75C20.5449 18 22 16.5449 22 14.75V6.25C22 4.45507 20.5449 3 18.75 3H5.25Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_9912)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_9912'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-2.61539 -2.84685) rotate(48.1124) scale(35.9314 65.1687)"
        >
          <stop stopColor="#FAB500" />
          <stop offset={0.535356} stopColor="#FE8401" />
          <stop offset={1} stopColor="#FB5937" />
        </radialGradient>
      </defs>
    </svg>
  )
}
