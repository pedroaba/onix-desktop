'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 6a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v24a4 4 0 0 1-4 4H14a8 8 0 0 1-8-8V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v24a3 3 0 0 1-3 3H14a7 7 0 0 1-7-7V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v24a3 3 0 0 1-3 3H14a7 7 0 0 1-7-7V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M16.968 9.325a.5.5 0 0 0-.936 0l-3 8.031a.5.5 0 0 0 .937.35L14.979 15h3.042l1.01 2.706a.5.5 0 0 0 .938-.35l-3-8.031zm-.468 1.604L17.647 14h-2.294l1.147-3.071z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M21.5 13a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M21.5 17a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M13.5 21a.5.5 0 1 0 0 1h13a.5.5 0 0 0 0-1h-13z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M13.5 25a.5.5 0 1 0 0 1h4.032a.5.5 0 1 0 0-1H13.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M13.5 29a.5.5 0 1 0 0 1h4.032a.5.5 0 1 0 0-1H13.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M21.5 25a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5h-4z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={15.042}
          x2={21.203}
          y1={2}
          y2={37.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
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
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13}
          x2={29.273}
          y1={1.125}
          y2={33.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={13}
          x2={29.273}
          y1={1.125}
          y2={33.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={13}
          x2={29.273}
          y1={1.125}
          y2={33.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={13}
          x2={29.273}
          y1={1.125}
          y2={33.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={13}
          x2={29.273}
          y1={1.125}
          y2={33.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={13}
          x2={29.273}
          y1={1.125}
          y2={33.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={13}
          x2={29.273}
          y1={1.125}
          y2={33.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
