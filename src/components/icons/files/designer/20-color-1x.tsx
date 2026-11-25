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
        d="M3 5a2 2 0 0 1 2-2h8a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 5a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 5a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M13.106 12.494A4.105 4.105 0 0 1 9.916 14H7.364a.508.508 0 0 1-.5-.4l-.01-.1V13c0-1.605 1.287-2.916 2.905-2.996L9.916 10v-.125h3.19v2.62z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.5}
        d="M13.106 12.494A4.105 4.105 0 0 1 9.916 14H7.364a.508.508 0 0 1-.5-.4l-.01-.1V13c0-1.605 1.287-2.916 2.905-2.996L9.916 10v-.125h3.19v2.62z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M9.916 6c2.255 0 4.083 1.79 4.083 4 0 .997-.374 1.908-.99 2.608.062-.192.097-.396.097-.608 0-1.035-.803-1.887-1.833-1.99l-.208-.01H9.916l-.157-.004C8.14 9.916 6.854 8.606 6.854 7v-.5c0-.276.228-.5.51-.5h2.552z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.5}
        d="M9.916 6c2.255 0 4.083 1.79 4.083 4 0 .997-.374 1.908-.99 2.608.062-.192.097-.396.097-.608 0-1.035-.803-1.887-1.833-1.99l-.208-.01H9.916l-.157-.004C8.14 9.916 6.854 8.606 6.854 7v-.5c0-.276.228-.5.51-.5h2.552z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.521}
          x2={9.406}
          y1={3}
          y2={17.138}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.333}
          x2={8.851}
          y1={4}
          y2={16.144}
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
          gradientTransform="matrix(6.33333 9.5 -9.5 3.5625 7.833 7.125)"
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
          gradientTransform="matrix(5.16824 -4.125 5.16316 6.20696 6.854 14.292)"
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
          gradientTransform="matrix(-7.2373 -2.53778 2.59079 -7.08924 13.685 13.854)"
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
          gradientTransform="matrix(7.14551 5.50608 -4.64694 5.7815 6.854 6.24)"
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
          gradientTransform="matrix(-5.82699 -3.97712 3.85727 -5.418 9.785 11.726)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.709} stopColor="#FFB357" stopOpacity={0} />
          <stop offset={0.942} stopColor="#FFB357" />
        </radialGradient>
      </defs>
    </svg>
  )
}
