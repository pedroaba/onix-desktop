'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 7.5A3.5 3.5 0 0 1 7.5 4H25a7 7 0 0 1 7 7v17.5a3.5 3.5 0 0 1-3.5 3.5H11a7 7 0 0 1-7-7V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5H25a6 6 0 0 1 6 6v17.5a2.5 2.5 0 0 1-2.5 2.5H11a6 6 0 0 1-6-6V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5H25a6 6 0 0 1 6 6v17.5a2.5 2.5 0 0 1-2.5 2.5H11a6 6 0 0 1-6-6V7.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M23.25 22.99A7.983 7.983 0 0 1 17 26h-5a1 1 0 0 1-.995-.898L11 25v-1a6 6 0 0 1 5.691-5.992L17 18v-.25h6.25v5.24z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.5}
        d="M23.25 22.99A7.983 7.983 0 0 1 17 26h-5a1 1 0 0 1-.995-.898L11 25v-1a6 6 0 0 1 5.691-5.992L17 18v-.25h6.25v5.24z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="m17 10 .411.01A8 8 0 0 1 25 18a7.966 7.966 0 0 1-1.94 5.219 3.996 3.996 0 0 0-3.604-5.214L19.25 18H17l-.309-.008a6.001 6.001 0 0 1-5.684-5.693L11 12v-1a1 1 0 0 1 1-1h5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.5}
        d="m17 10 .411.01A8 8 0 0 1 25 18a7.966 7.966 0 0 1-1.94 5.219 3.996 3.996 0 0 0-3.604-5.214L19.25 18H17l-.309-.008a6.001 6.001 0 0 1-5.684-5.693L11 12v-1a1 1 0 0 1 1-1h5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.042}
          x2={16.812}
          y1={4}
          y2={32.275}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.222}
          x2={15.511}
          y1={5}
          y2={31.311}
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
          gradientTransform="matrix(13.7222 20.5833 -20.5833 7.71875 13.306 11.77)"
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
          gradientTransform="matrix(10.12498 -8.25009 10.11512 12.41385 11 26.584)"
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
          gradientTransform="rotate(-160.304 14.423 10.738) scale(15.0596)"
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
          gradientTransform="matrix(14 11.0138 -9.10463 11.5647 11 10.482)"
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
          gradientTransform="matrix(-11.4167 -7.95542 7.55745 -10.8376 16.744 21.454)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.709} stopColor="#FFB357" stopOpacity={0} />
          <stop offset={0.942} stopColor="#FFB357" />
        </radialGradient>
      </defs>
    </svg>
  )
}
