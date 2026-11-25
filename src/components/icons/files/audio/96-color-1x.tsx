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
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M12 21a9 9 0 0 1 9-9h45c9.941 0 18 8.059 18 18v45a9 9 0 0 1-9 9H30c-9.941 0-18-8.059-18-18V21z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M14 21a7 7 0 0 1 7-7h45c8.837 0 16 7.163 16 16v45a7 7 0 0 1-7 7H30c-8.837 0-16-7.163-16-16V21z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M14 21a7 7 0 0 1 7-7h45c8.837 0 16 7.163 16 16v45a7 7 0 0 1-7 7H30c-8.837 0-16-7.163-16-16V21z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M43 28a2 2 0 0 1 2 2v36a2 2 0 1 1-4 0V30a2 2 0 0 1 2-2z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M55 36a2 2 0 0 1 2 2v20a2 2 0 1 1-4 0V38a2 2 0 0 1 2-2z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M31 42a2 2 0 0 1 2 2v8a2 2 0 1 1-4 0v-8a2 2 0 0 1 2-2z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M67 42a2 2 0 0 1 2 2v8a2 2 0 1 1-4 0v-8a2 2 0 0 1 2-2z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={35.25}
          x2={44.944}
          y1={12}
          y2={84.707}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={32.889}
          x2={41.491}
          y1={14}
          y2={82.814}
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
          gradientTransform="matrix(35.8889 53.8333 -53.8333 20.1875 35.722 31.708)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={49}
          x2={41.377}
          y1={58.21}
          y2={23.379}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={49}
          x2={41.377}
          y1={58.21}
          y2={23.379}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={49}
          x2={41.377}
          y1={58.21}
          y2={23.379}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={49}
          x2={41.377}
          y1={58.21}
          y2={23.379}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
