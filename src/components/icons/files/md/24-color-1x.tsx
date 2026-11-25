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
        fillRule="evenodd"
        d="M6 2a2 2 0 00-2 2v14.268A2 2 0 005 22h13a2 2 0 002-2V6a4 4 0 00-4-4z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M17.5 21h.5a1 1 0 001-1V6a3 3 0 00-3-3H6a1 1 0 00-1 1v14h12.5a.5.5 0 010 1 1 1 0 100 2m-1.732-2a2 2 0 00-.268 1c0 .364.097.706.268 1H5a1 1 0 110-2z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M17.5 21h.5a1 1 0 001-1V6a3 3 0 00-3-3H6a1 1 0 00-1 1v14h12.5a.5.5 0 010 1 1 1 0 100 2m-1.732-2a2 2 0 00-.268 1c0 .364.097.706.268 1H5a1 1 0 110-2z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7.9 7.2a.5.5 0 00-.9.3v5a.5.5 0 101 0V9l.6.8a.5.5 0 00.8 0L10 9v3.5a.5.5 0 101 0v-5a.5.5 0 00-.9-.3L9 8.667z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12.52 11.229a.5.5 0 11.708-.707l.767.767L14 7.5a.5.5 0 111 0l-.005 3.79.768-.768a.5.5 0 01.707.707l-1.62 1.621a.5.5 0 01-.707 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.49}
          x2={11.637}
          y1={2}
          y2={22.062}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.167}
          x2={10.881}
          y1={3}
          y2={21.093}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={2.5}
          x2={9.941}
          y1={2}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={21.925}
          x2={8.136}
          y1={18.753}
          y2={14.865}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7.91667 14.25 -11.875 5.34375 8.792 7.688)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
