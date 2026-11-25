'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M10.146 8.022a.5.5 0 0 0-.292 0H7.521a1.5 1.5 0 0 0-1.5 1.5v4.956a1.5 1.5 0 0 0 1.5 1.5h6.333a.497.497 0 0 0 .292 0h2.332a1.5 1.5 0 0 0 1.5-1.5V9.522a1.5 1.5 0 0 0-1.5-1.5h-6.332zm-.646 1H7.521a.5.5 0 0 0-.5.5V11.5H9.5V9.022zm1 2.478V9.022h3V11.5h-3zm-1 1H7.021v1.978a.5.5 0 0 0 .5.5H9.5V12.5zm1 2.478V12.5h3v2.478h-3zm4 0h1.978a.5.5 0 0 0 .5-.5V12.5H14.5v2.478zm0-3.478h2.478V9.522a.5.5 0 0 0-.5-.5H14.5V11.5z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.458}
          x2={10.193}
          y1={4}
          y2={20.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8}
          x2={9.386}
          y1={5}
          y2={19.254}
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
          gradientTransform="matrix(9.5 11.0833 -14.25 4.15625 8.75 8.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8.637}
          x2={11.968}
          y1={7}
          y2={16.264}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
