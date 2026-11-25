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
        d="M13.418 6.03a.5.5 0 0 1 .303.638l-2.5 7a.5.5 0 0 1-.942-.336l2.5-7a.5.5 0 0 1 .64-.303z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8.854 7.647a.5.5 0 0 1 0 .707L7.207 10l1.647 1.647a.5.5 0 1 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M15.146 7.647a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.708-.707L16.793 10l-1.647-1.646a.5.5 0 0 1 0-.707z"
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
          x1={8.625}
          x2={11.941}
          y1={4.667}
          y2={14.265}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8.625}
          x2={11.941}
          y1={4.667}
          y2={14.265}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.625}
          x2={11.941}
          y1={4.667}
          y2={14.265}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
