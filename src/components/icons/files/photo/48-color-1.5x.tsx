'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 7.5A3.5 3.5 0 0 1 7.5 4H25a7 7 0 0 1 7 7v17.5a3.5 3.5 0 0 1-3.5 3.5H11a7 7 0 0 1-7-7V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5H25a6 6 0 0 1 6 6v17.5a2.5 2.5 0 0 1-2.5 2.5H11a6 6 0 0 1-6-6V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5H25a6 6 0 0 1 6 6v17.5a2.5 2.5 0 0 1-2.5 2.5H11a6 6 0 0 1-6-6V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="m16.763 16.952-6.06 6.06C9.601 24.116 10.382 26 11.941 26h12.121c1.56 0 2.34-1.885 1.238-2.987l-6.062-6.061a1.75 1.75 0 0 0-2.475 0z"
      />
      <circle
        cx={23.5}
        cy={12.5}
        r={2.5}
        fill={'url(#' + iconId + '-e)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.042}
          x2={16.812}
          y1={4}
          y2={32.275}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.222}
          x2={15.511}
          y1={5}
          y2={31.311}
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
          gradientTransform="matrix(13.7222 20.5833 -20.5833 7.71875 13.306 11.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={10.052}
          x2={17.54}
          y1={12.878}
          y2={33.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={21}
          x2={26.432}
          y1={6.875}
          y2={17.274}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
