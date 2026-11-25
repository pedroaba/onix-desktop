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
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M5 9a4 4 0 0 1 4-4h18a8 8 0 0 1 8 8v18a4 4 0 0 1-4 4H13a8 8 0 0 1-8-8V9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 9a3 3 0 0 1 3-3h18a7 7 0 0 1 7 7v18a3 3 0 0 1-3 3H13a7 7 0 0 1-7-7V9z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M6 9a3 3 0 0 1 3-3h18a7 7 0 0 1 7 7v18a3 3 0 0 1-3 3H13a7 7 0 0 1-7-7V9z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M27 25.614A9.178 9.178 0 0 1 19.857 29h-5.714a1.137 1.137 0 0 1-1.137-1.01L13 27.875V26.75c0-3.611 2.881-6.56 6.504-6.741l.353-.009v-.281H27v5.895z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.5}
        d="M27 25.614A9.178 9.178 0 0 1 19.857 29h-5.714a1.137 1.137 0 0 1-1.137-1.01L13 27.875V26.75c0-3.611 2.881-6.56 6.504-6.741l.353-.009v-.281H27v5.895z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="m19.857 11 .471.012C25.158 11.253 29 15.185 29 20a8.88 8.88 0 0 1-2.217 5.87c.14-.432.218-.892.218-1.37 0-2.407-1.922-4.373-4.337-4.494L22.43 20h-2.572l-.353-.009c-3.51-.175-6.324-2.948-6.496-6.404L13 13.25v-1.125c0-.621.512-1.125 1.143-1.125h5.714z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.5}
        d="m19.857 11 .471.012C25.158 11.253 29 15.185 29 20a8.88 8.88 0 0 1-2.217 5.87c.14-.432.218-.892.218-1.37 0-2.407-1.922-4.373-4.337-4.494L22.43 20h-2.572l-.353-.009c-3.51-.175-6.324-2.948-6.496-6.404L13 13.25v-1.125c0-.621.512-1.125 1.143-1.125h5.714z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={14.688}
          x2={18.727}
          y1={5}
          y2={35.295}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.778}
          x2={17.32}
          y1={6}
          y2={34.335}
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
          gradientTransform="matrix(14.7778 22.1667 -22.1667 8.3125 14.944 13.292)"
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
          gradientTransform="matrix(11.5714 -9.28125 11.5601 13.9657 13 29.657)"
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
          gradientTransform="matrix(-16.204 -5.71001 5.80064 -15.9508 28.296 28.672)"
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
          gradientTransform="matrix(16 12.3897 -10.4053 13.0095 13 11.542)"
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
          gradientTransform="matrix(-13.0476 -8.94925 8.63709 -12.1915 19.564 23.885)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.709} stopColor="#FFB357" stopOpacity={0} />
          <stop offset={0.942} stopColor="#FFB357" />
        </radialGradient>
      </defs>
    </svg>
  )
}
