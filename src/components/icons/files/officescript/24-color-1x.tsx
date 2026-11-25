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
        d="M6 2a2 2 0 0 0-2 2v14.268A2 2 0 0 0 5 22h13a2 2 0 0 0 2-2V6a4 4 0 0 0-4-4H6z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M17.5 21h.5a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H6a1 1 0 0 0-1 1v14h12.5a.5.5 0 0 1 0 1 1 1 0 1 0 0 2zm-1.732-2a1.99 1.99 0 0 0-.268 1c0 .364.097.706.268 1H5a1 1 0 1 1 0-2h10.768z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M17.5 21h.5a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H6a1 1 0 0 0-1 1v14h12.5a.5.5 0 0 1 0 1 1 1 0 1 0 0 2zm-1.732-2a1.99 1.99 0 0 0-.268 1c0 .364.097.706.268 1H5a1 1 0 1 1 0-2h10.768z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M15.5 14a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h7z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M15.5 11a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h7z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M15.5 8a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h7z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M15.5 5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h7z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={4.667}
          x2={18.015}
          y1={-2.692}
          y2={15.44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={4.667}
          x2={18.015}
          y1={-2.692}
          y2={15.44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={4.667}
          x2={18.015}
          y1={-2.692}
          y2={15.44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={4.667}
          x2={18.015}
          y1={-2.692}
          y2={15.44}
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
