'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 012-2h14a4 4 0 014 4v10a2 2 0 01-2 2H6a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 011-1h14a3 3 0 013 3v10a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 011-1h14a3 3 0 013 3v10a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12 9.223a.79.79 0 01.79.789v6.199a.79.79 0 01-1.58 0v-6.2a.79.79 0 01.79-.788m4.21 3.333a.79.79 0 01.79.789v2.866a.79.79 0 01-1.58 0v-2.866a.79.79 0 01.79-.79M7.79 7a.79.79 0 01.79.79v4.669A1.5 1.5 0 007.5 12H7V7.79A.79.79 0 017.79 7"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8 13.67v8.66c0 .37-.3.67-.67.67H5v-9.33c0-.37.3-.67.67-.67h1.66c.37 0 .67.3.67.67"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M6.5 16.557c0-.308-.285-.557-.636-.557l-2.319.239v6.522L6.227 23H6.5z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M6 16.667V23H3v-6.33c0-.37.3-.67.67-.67h1.663c.369 0 .667.299.667.667"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M1 18.67v3.66c0 .37.3.67.67.67H4v-4.33c0-.37-.3-.67-.67-.67H1.67c-.37 0-.67.3-.67.67"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.458}
          x2={10.193}
          y1={4}
          y2={20.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8}
          x2={9.386}
          y1={5}
          y2={19.254}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={7}
          x2={17}
          y1={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={4.5}
          x2={7.387}
          y1={15}
          y2={22.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={3}
          x2={5.75}
          y1={17}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={1}
          x2={2.468}
          y1={19}
          y2={23.027}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9.5 11.0833 -14.25 4.15625 8.75 8.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
