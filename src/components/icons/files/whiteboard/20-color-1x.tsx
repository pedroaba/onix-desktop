'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M13.5 7.002h-7a.5.5 0 0 0-.5.5V12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"
      />
      <path
        fill="#fff"
        d="M10.715 10.066c-.075-.06-.135 0-.135 0a.94.94 0 0 1-.89.205.867.867 0 0 1-.34-.24c-.085-.095-.55-.685-.735-.855a1.267 1.267 0 0 0-.675-.33 1.148 1.148 0 0 0-.72.13c-.21.12-.37.305-.45.51 0 0-.03.065.04.12.06.045.125-.01.125-.01a.94.94 0 0 1 .89-.205c.13.045.235.13.34.24.085.095.55.685.735.855.175.164.42.294.675.33.255.034.505-.01.72-.13.21-.12.37-.305.45-.51 0 0 .03-.065-.03-.115v.005z"
      />
      <path
        fill="#1E2021"
        d="m11.115 9.786-.3.23c-.055.045-.15-.015-.135-.085l.08-.37.355.225z"
      />
      <path
        fill="#CCC"
        d="m10.86 8.931-.01.025-.085.36-.08.33c-.005.03 0 .06.025.07l.285.18s.05.01.075-.01l.265-.21.29-.23.015-.015-.25-.42-.53-.075v-.005z"
      />
      <path
        fill="#333"
        d="m11.65 9.416 1.84-2.89c.015-.024.01-.06-.02-.09a2.617 2.617 0 0 0-.315-.244 2.054 2.054 0 0 0-.355-.185.075.075 0 0 0-.09.02l-1.84 2.89s-.005.01-.01.014l.78.495s.01-.01.01-.015v.005z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.167}
          x2={8.388}
          y1={4}
          y2={16.211}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={6.889}
          x2={7.799}
          y1={5}
          y2={15.197}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7.38889 7.91667 -11.0833 2.96875 7.472 7.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={12.995}
          x2={8.582}
          y1={15.185}
          y2={7.541}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.1} stopColor="#30E5D0" />
          <stop offset={1} stopColor="#0C34FB" />
        </linearGradient>
      </defs>
    </svg>
  )
}
