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
      <rect
        width={36}
        height={27}
        x={2}
        y={7}
        fill={'url(#' + iconId + '-a)' + ''}
        rx={6.5}
      />
      <rect
        width={32}
        height={23}
        x={4}
        y={9}
        fill={'url(#' + iconId + '-b)' + ''}
        rx={4.5}
      />
      <rect
        width={32}
        height={23}
        x={4}
        y={9}
        fill={'url(#' + iconId + '-c)' + ''}
        fillOpacity={0.28}
        rx={4.5}
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12 13a2 2 0 0 1 2-2h8a4 4 0 0 1 4 4v13a2 2 0 0 1-2 2h-8a4 4 0 0 1-4-4V13z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12 13a2 2 0 0 1 2-2h8a4 4 0 0 1 4 4v13a2 2 0 0 1-2 2h-8a4 4 0 0 1-4-4V13z"
      />
      <rect
        width={2}
        height={23}
        x={34}
        y={9}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={1}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M32 13a2 2 0 0 1 2-2v19a2 2 0 0 1-2-2V13z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.372}
          y1={7}
          y2={34.475}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD3D8" />
          <stop offset={1} stopColor="#9AA6AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.333}
          x2={16.578}
          y1={9}
          y2={32.424}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626C72" />
          <stop offset={1} stopColor="#4D565C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={20}
          x2={20}
          y1={9}
          y2={32}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.6} stopColor="#5C666C" stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={15.889}
          x2={19.109}
          y1={11}
          y2={29.982}
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
          gradientTransform="matrix(7.38889 15.0417 -11.0833 5.64062 16.472 15.948)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={34.75}
          x2={43.684}
          y1={9}
          y2={12.729}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF0F2" />
          <stop offset={1} stopColor="#C9CED0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={33}
          x2={33}
          y1={11}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD1D6" />
          <stop offset={1} stopColor="#929CA2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
