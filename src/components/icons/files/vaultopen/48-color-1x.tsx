'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <rect
        width={40}
        height={30}
        x={4}
        y={9}
        fill={'url(#' + iconId + '-a)' + ''}
        rx={7}
      />
      <rect
        width={36}
        height={26}
        x={6}
        y={11}
        fill={'url(#' + iconId + '-b)' + ''}
        rx={5}
      />
      <rect
        width={36}
        height={26}
        x={6}
        y={11}
        fill={'url(#' + iconId + '-c)' + ''}
        fillOpacity={0.28}
        rx={5}
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M15 16a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H19a4 4 0 0 1-4-4V16z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M15 16a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H19a4 4 0 0 1-4-4V16z"
      />
      <rect
        width={2}
        height={26}
        x={40}
        y={11}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={1}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M38 15a2 2 0 0 1 2-2v22a2 2 0 0 1-2-2V15z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={16.917}
          x2={19.97}
          y1={9}
          y2={39.528}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD3D8" />
          <stop offset={1} stopColor="#9AA6AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={17.625}
          x2={20.175}
          y1={11}
          y2={37.477}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626C72" />
          <stop offset={1} stopColor="#4D565C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={24}
          x2={24}
          y1={11}
          y2={37}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.6} stopColor="#5C666C" stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={19.444}
          x2={22.58}
          y1={14}
          y2={34.066}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(8.44444 15.8333 -12.6667 5.9375 20.111 19.208)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={40.75}
          x2={49.981}
          y1={11}
          y2={14.409}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF0F2" />
          <stop offset={1} stopColor="#C9CED0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={39}
          x2={39}
          y1={13}
          y2={35}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD1D6" />
          <stop offset={1} stopColor="#929CA2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
