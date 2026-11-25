'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <rect
        width={80}
        height={60}
        x={8}
        y={18}
        fill={'url(#' + iconId + '-a)' + ''}
        rx={14}
      />
      <rect
        width={72}
        height={52}
        x={12}
        y={22}
        fill={'url(#' + iconId + '-b)' + ''}
        rx={10}
      />
      <rect
        width={72}
        height={52}
        x={12}
        y={22}
        fill={'url(#' + iconId + '-c)' + ''}
        fillOpacity={0.28}
        rx={10}
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M32 32.5a4.5 4.5 0 0 1 4.5-4.5h17a8.5 8.5 0 0 1 8.5 8.5v27a4.5 4.5 0 0 1-4.5 4.5h-17a8.5 8.5 0 0 1-8.5-8.5v-27z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M32 32.5a4.5 4.5 0 0 1 4.5-4.5h17a8.5 8.5 0 0 1 8.5 8.5v27a4.5 4.5 0 0 1-4.5 4.5h-17a8.5 8.5 0 0 1-8.5-8.5v-27z"
      />
      <rect
        width={4}
        height={52}
        x={80}
        y={22}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={2}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M76 30a4 4 0 0 1 4-4v44a4 4 0 0 1-4-4V30z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.833}
          x2={39.939}
          y1={18}
          y2={79.056}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD3D8" />
          <stop offset={1} stopColor="#9AA6AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={35.25}
          x2={40.349}
          y1={22}
          y2={74.953}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626C72" />
          <stop offset={1} stopColor="#4D565C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={48}
          x2={48}
          y1={22}
          y2={74}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.6} stopColor="#5C666C" stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={40.333}
          x2={47}
          y1={28}
          y2={68}
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
          gradientTransform="rotate(63.435 -10.288 52.85) scale(35.4044 26.5533)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={81.5}
          x2={99.963}
          y1={22}
          y2={28.817}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF0F2" />
          <stop offset={1} stopColor="#C9CED0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={78}
          x2={78}
          y1={26}
          y2={70}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD1D6" />
          <stop offset={1} stopColor="#929CA2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
