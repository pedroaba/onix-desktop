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
        fill="#185ABD"
        d="m13 16.5-2.7 2.7c-.4.4-.4 1 0 1.4l4.1 4.1 4.1-4.1-4.1-4.1c-.4-.4-1-.4-1.4 0z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="m29.6 15-2.7-2.7c-.4-.4-1-.4-1.4 0L18 19.8l-3.6 3.5c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0l10.9-10.9c.5-.5.5-1.2.1-1.6z"
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
          x1={21.72}
          x2={9.773}
          y1={7.616}
          y2={20.091}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62C4F6" />
          <stop offset={1} stopColor="#2A88E5" />
        </linearGradient>
      </defs>
    </svg>
  )
}
