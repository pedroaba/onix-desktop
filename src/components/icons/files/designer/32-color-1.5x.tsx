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
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 10.5A4.5 4.5 0 0 1 10.5 6H33a9 9 0 0 1 9 9v22.5a4.5 4.5 0 0 1-4.5 4.5H15a9 9 0 0 1-9-9V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 10.5A3.5 3.5 0 0 1 10.5 7H33a8 8 0 0 1 8 8v22.5a3.5 3.5 0 0 1-3.5 3.5H15a8 8 0 0 1-8-8V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 10.5A3.5 3.5 0 0 1 10.5 7H33a8 8 0 0 1 8 8v22.5a3.5 3.5 0 0 1-3.5 3.5H15a8 8 0 0 1-8-8V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M30.875 30.237C29.095 32.53 26.358 34 23.285 34h-6.071c-.629 0-1.146-.492-1.208-1.122L16 32.75V31.5c0-4.013 3.061-7.29 6.911-7.49l.375-.01v-.313h7.589v6.55z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.5}
        d="M30.875 30.237C29.095 32.53 26.358 34 23.285 34h-6.071c-.629 0-1.146-.492-1.208-1.122L16 32.75V31.5c0-4.013 3.061-7.29 6.911-7.49l.375-.01v-.313h7.589v6.55z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="m23.286 14 .5.013c5.12.267 9.194 4.616 9.214 9.948v.064a10.13 10.13 0 0 1-2.355 6.498A5.1 5.1 0 0 0 30.876 29c0-2.675-2.041-4.859-4.607-4.993l-.25-.007h-2.733l-.375-.01c-3.73-.194-6.719-3.275-6.902-7.116L16 16.5v-1.25c0-.69.544-1.25 1.214-1.25h6.072z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.5}
        d="m23.286 14 .5.013c5.12.267 9.194 4.616 9.214 9.948v.064a10.13 10.13 0 0 1-2.355 6.498A5.1 5.1 0 0 0 30.876 29c0-2.675-2.041-4.859-4.607-4.993l-.25-.007h-2.733l-.375-.01c-3.73-.194-6.719-3.275-6.902-7.116L16 16.5v-1.25c0-.69.544-1.25 1.214-1.25h6.072z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={17.625}
          x2={22.472}
          y1={6}
          y2={42.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={16.444}
          x2={20.745}
          y1={7}
          y2={41.407}
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
          gradientTransform="matrix(17.9444 26.9167 -26.9167 10.0937 17.861 15.854)"
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
          gradientTransform="matrix(12.2946 -10.3125 12.2826 15.5174 16 34.73)"
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
          gradientTransform="matrix(-17.2167 -6.34445 6.16318 -17.7231 32.252 33.636)"
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
          gradientTransform="matrix(17 13.7664 -11.0556 14.455 16 14.602)"
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
          gradientTransform="matrix(-13.8631 -9.94368 9.17691 -13.5462 22.974 28.317)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.709} stopColor="#FFB357" stopOpacity={0} />
          <stop offset={0.942} stopColor="#FFB357" />
        </radialGradient>
      </defs>
    </svg>
  )
}
