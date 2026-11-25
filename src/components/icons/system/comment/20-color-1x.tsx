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
        d="M6.79895 17.8034C6.35668 18.1298 5.73 18.0406 5.39921 17.6042C5.26989 17.4335 5.2 17.2262 5.2 17.0133L5.19937 14.8423H4.6C3.16406 14.8423 2 13.6935 2 12.2764V5.56582C2 4.14876 3.16406 3 4.6 3H15.4C16.8359 3 18 4.14876 18 5.56582V12.2764C18 13.6935 16.8359 14.8423 15.4 14.8423H10.81L6.79895 17.8034Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_9914)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_9914'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-1.69231 -1.61538) rotate(47.7315) scale(28.5343 51.823)"
        >
          <stop stopColor="#FAB500" />
          <stop offset={0.535356} stopColor="#FE8401" />
          <stop offset={1} stopColor="#FB5937" />
        </radialGradient>
      </defs>
    </svg>
  )
}
