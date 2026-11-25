'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M5 5a3 3 0 013-3h13a6 6 0 016 6v19a3 3 0 01-3 3H8.5A3.5 3.5 0 015 26.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M8 3h13a5 5 0 015 5v13a2 2 0 01-2 2H8.5A3.5 3.5 0 006 24.05V5a2 2 0 012-2M6 26.5A2.5 2.5 0 008.5 29H24a2 2 0 002-2v-.764A3 3 0 0124 27H8.5a.5.5 0 110-1H24a2 2 0 002-2v-.764A3 3 0 0124 24H8.5A2.5 2.5 0 006 26.5"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M8 3h13a5 5 0 015 5v13a2 2 0 01-2 2H8.5A3.5 3.5 0 006 24.05V5a2 2 0 012-2M6 26.5A2.5 2.5 0 008.5 29H24a2 2 0 002-2v-.764A3 3 0 0124 27H8.5a.5.5 0 110-1H24a2 2 0 002-2v-.764A3 3 0 0124 24H8.5A2.5 2.5 0 006 26.5"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M11.001 18.67v11.66c0 .37-.3.67-.67.67h-3.33V18.67c0-.37.3-.67.67-.67h2.66c.37 0 .67.3.67.67"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M8.501 22.875c0-.483-.373-.875-.833-.875l-3.036.375v8.25L8 31h.5z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8.001 22.667V31h-4v-8.33c0-.37.3-.67.67-.67h2.663c.369 0 .667.299.667.667"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M1 25.67v4.66c0 .37.3.67.67.67H5v-5.33c0-.37-.3-.67-.67-.67H1.67c-.37 0-.67.3-.67.67"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M21.5 19a.5.5 0 010 1H12v-.5q-.002-.264-.087-.5zm0-3a.5.5 0 010 1h-11a.5.5 0 010-1zm0-3a.5.5 0 010 1h-11a.5.5 0 010-1zM14 6a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V7a1 1 0 011-1zm7.5 4a.5.5 0 010 1h-4a.5.5 0 010-1zm0-3a.5.5 0 010 1h-4a.5.5 0 010-1z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.104}
          x2={16.851}
          y1={2}
          y2={29.972}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.556}
          x2={15.786}
          y1={3}
          y2={29.035}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={6.306}
          x2={11.443}
          y1={18}
          y2={29.343}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={4}
          x2={8.663}
          y1={22}
          y2={30.991}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={1}
          x2={3.333}
          y1={25}
          y2={30.925}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={10}
          x2={23.835}
          y1={6}
          y2={17.859}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(10.5556 20.5833 -15.8333 7.71875 12.389 9.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
