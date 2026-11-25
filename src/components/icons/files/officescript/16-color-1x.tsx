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
        fillRule="evenodd"
        d="M4 1a2 2 0 0 0-2 2v9.085A1.5 1.5 0 0 0 2.5 15H12a2 2 0 0 0 2-2V4.5A3.5 3.5 0 0 0 10.5 1H4z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M11.5 14h.5a1 1 0 0 0 1-1V4.5A2.5 2.5 0 0 0 10.5 2H4a1 1 0 0 0-1 1v9h8.5a.5.5 0 0 1 0 1 .5.5 0 0 0 0 1zm-1.415-1a1.497 1.497 0 0 0 0 1H2.5a.5.5 0 0 1 0-1h7.585z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M11.5 14h.5a1 1 0 0 0 1-1V4.5A2.5 2.5 0 0 0 10.5 2H4a1 1 0 0 0-1 1v9h8.5a.5.5 0 0 1 0 1 .5.5 0 0 0 0 1zm-1.415-1a1.497 1.497 0 0 0 0 1H2.5a.5.5 0 0 1 0-1h7.585z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.5 8a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10.5 5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.198}
          x2={7.222}
          y1={1}
          y2={15.098}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.056}
          x2={6.707}
          y1={2}
          y2={14.108}
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
          gradientTransform="matrix(5.80556 9.5 -8.70833 3.5625 5.514 5.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={2.5}
          x2={6.304}
          y1={1.923}
          y2={11.613}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={2.5}
          x2={6.304}
          y1={1.923}
          y2={11.613}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
      </defs>
    </svg>
  )
}
