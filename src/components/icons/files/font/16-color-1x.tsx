'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 3a2 2 0 0 1 2-2h6.5A3.5 3.5 0 0 1 14 4.5V13a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M8.46 4.303a.5.5 0 0 0-.919 0L4.671 11H4.5a.5.5 0 0 0 0 1h1.25a.5.5 0 0 0 .009-1l.428-1h3.214l.422 1H9.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.17L8.46 4.303zM8.978 9 7.806 6.224 6.616 9h2.362z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={8.06}
          y1={1}
          y2={15.049}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.587}
          y1={2}
          y2={14.062}
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
          gradientTransform="matrix(5.27778 9.5 -7.91667 3.5625 6.194 5.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={6.455}
          x2={8.757}
          y1={5}
          y2={11.905}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
