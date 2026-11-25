'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 4a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M6 3h6a3 3 0 0 1 3 3v7a1 1 0 0 1-1 1H6a1.99 1.99 0 0 0-1 .268V4a1 1 0 0 1 1-1zM5 16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.268A1.99 1.99 0 0 1 14 15H6a1 1 0 0 0-1 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M6 3h6a3 3 0 0 1 3 3v7a1 1 0 0 1-1 1H6a1.99 1.99 0 0 0-1 .268V4a1 1 0 0 1 1-1zM5 16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.268A1.99 1.99 0 0 1 14 15H6a1 1 0 0 0-1 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M11.186 5.036a.5.5 0 0 1 .278.65l-2 5a.5.5 0 0 1-.928-.372l2-5a.5.5 0 0 1 .65-.278z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7.854 6.647a.5.5 0 0 1 0 .707L7.207 8l.647.647a.5.5 0 1 1-.708.707l-1-1a.5.5 0 0 1 0-.707l1-1a.5.5 0 0 1 .708 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M12.146 6.647a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1 0 .707l-1 1a.5.5 0 0 1-.708-.707L12.793 8l-.647-.646a.5.5 0 0 1 0-.707z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.875}
          x2={10.709}
          y1={2}
          y2={17.941}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.778}
          x2={10.221}
          y1={3}
          y2={16.961}
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
          gradientTransform="matrix(5.27778 11.0833 -7.91667 4.15625 8.194 6.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={7.75}
          x2={10.471}
          y1={4}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={7.75}
          x2={10.471}
          y1={4}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={7.75}
          x2={10.471}
          y1={4}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
