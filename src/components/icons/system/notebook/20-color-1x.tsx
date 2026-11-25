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
        d="M14.5 4H16.5C16.7761 4 17 4.22386 17 4.5V6.5C17 6.77614 16.7761 7 16.5 7H14.5V4ZM14.5 8H16.5C16.7761 8 17 8.22386 17 8.5V10.5C17 10.7761 16.7761 11 16.5 11H14.5V8ZM14.5 12H16.5C16.7761 12 17 12.2239 17 12.5V14.5C17 14.7761 16.7761 15 16.5 15H14.5V12Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8814)' + ''}
      />
      <path
        d="M5 2C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H13C14.1046 18 15 17.1046 15 16V4C15 2.89543 14.1046 2 13 2H5Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8814)' + ''}
      />
      <path
        d="M5 2C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H13C14.1046 18 15 17.1046 15 16V4C15 2.89543 14.1046 2 13 2H5Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_8814)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M5.5 5C5.22386 5 5 5.22386 5 5.5V6.5C5 6.77614 5.22386 7 5.5 7H12.5C12.7761 7 13 6.77614 13 6.5V5.5C13 5.22386 12.7761 5 12.5 5H5.5Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8814)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8814'}
          x1={14.5}
          y1={-2.5}
          x2={23.0548}
          y2={17.7904}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D373FC" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8814'}
          x1={1.5}
          y1={2}
          x2={0.604747}
          y2={19.9052}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E587F2" />
          <stop offset={1} stopColor="#816CDE" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_8814'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.50001 1) rotate(75.3777) scale(18.3207 81.0671)"
        >
          <stop offset={0.5} stopColor="#DD3CE2" stopOpacity={0} />
          <stop offset={1} stopColor="#DD3CE2" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8814'}
          x1={6.5}
          y1={5}
          x2={11.2483}
          y2={10.1234}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDD3FF" />
          <stop offset={1} stopColor="#F3D8FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
