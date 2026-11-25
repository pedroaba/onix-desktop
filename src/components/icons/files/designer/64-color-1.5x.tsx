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
        d="M63.251 61.73c-3.98 5.04-10.1 8.27-16.966 8.27H32.714c-1.405 0-2.561-1.082-2.7-2.469L30 67.25v-2.834c.044-8.932 7.092-16.185 15.865-16.41l.42-.006v-.688h16.966V61.73z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.5}
        d="M63.251 61.73c-3.98 5.04-10.1 8.27-16.966 8.27H32.714c-1.405 0-2.561-1.082-2.7-2.469L30 67.25v-2.834c.044-8.932 7.092-16.185 15.865-16.41l.42-.006v-.688h16.966V61.73z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="m46.285 26 .56.007C58.58 26.308 68 36.04 68 48a22.08 22.08 0 0 1-5.269 14.364c.336-1.06.519-2.19.519-3.364 0-5.885-4.561-10.69-10.298-10.985l-.56-.015h-6.107l-.42-.006C37.083 47.77 30.03 40.5 30 31.556V28.75c0-1.519 1.215-2.75 2.714-2.75h13.571z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.5}
        d="m46.285 26 .56.007C58.58 26.308 68 36.04 68 48a22.08 22.08 0 0 1-5.269 14.364c.336-1.06.519-2.19.519-3.364 0-5.885-4.561-10.69-10.298-10.985l-.56-.015h-6.107l-.42-.006C37.083 47.77 30.03 40.5 30 31.556V28.75c0-1.519 1.215-2.75 2.714-2.75h13.571z"
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
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(27.4829 -22.6875 27.4559 34.1383 30 71.605)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.045} stopColor="#AD7DFF" />
          <stop offset={0.328} stopColor="#6864F6" />
          <stop offset={0.571} stopColor="#5750E2" />
          <stop offset={0.809} stopColor="#3E36B1" />
          <stop offset={1} stopColor="#261D82" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-38.4855 -13.9578 13.7769 -38.9908 66.33 69.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.706} stopColor="#AC80FF" stopOpacity={0} />
          <stop offset={0.921} stopColor="#BD96FF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(38 30.2985 -24.7126 31.8141 30 27.326)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC470" />
          <stop offset={0.251} stopColor="#FF835C" />
          <stop offset={0.584} stopColor="#F24A9D" />
          <stop offset={0.871} stopColor="#B339F0" />
          <stop offset={1} stopColor="#C354FF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-30.9881 -21.885 20.5131 -29.8138 45.59 57.51)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.709} stopColor="#FFB357" stopOpacity={0} />
          <stop offset={0.942} stopColor="#FFB357" />
        </radialGradient>
      </defs>
    </svg>
  )
}
