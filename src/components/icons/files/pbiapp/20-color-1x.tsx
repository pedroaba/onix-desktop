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
        d="M2 6a2 2 0 012-2h10a4 4 0 014 4v6a2 2 0 01-2 2H6a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 011-1h10a3 3 0 013 3v6a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 011-1h10a3 3 0 013 3v6a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M10.767 6.433a1.5 1.5 0 012.12 0l.708.707a1.5 1.5 0 010 2.12l-.707.708a1.5 1.5 0 01-.495.329c.367.273.606.71.606 1.203v1a1.5 1.5 0 01-1.5 1.5H9v-3.5a1.5 1.5 0 00-.087-.5H9V8.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V9H6v-.5A1.5 1.5 0 017.5 7h1c.509 0 .957.253 1.229.64.073-.182.184-.353.332-.5zM9.999 13h1.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1.5zm0-3h.803l-.035-.032-.707-.707-.061-.067z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8 10.67v7.66c0 .37-.3.67-.67.67H5v-8.33c0-.37.3-.67.67-.67h1.66c.37 0 .67.3.67.67"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M6.5 13.057c0-.308-.285-.557-.636-.557l-2.319.239v6.022L6.227 19H6.5z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M6 13.167V19H3v-5.83c0-.37.3-.67.67-.67h1.663c.369 0 .667.299.667.667"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M1 15.67v2.66c0 .37.3.67.67.67H4v-3.33c0-.37-.3-.67-.67-.67H1.67c-.37 0-.67.3-.67.67"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.167}
          x2={8.388}
          y1={4}
          y2={16.211}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={6.889}
          x2={7.799}
          y1={5}
          y2={15.197}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={5.999}
          x2={14.006}
          y1={5.993}
          y2={14.028}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB6D00" />
          <stop offset={1} stopColor="#B85500" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={4.5}
          x2={7.387}
          y1={11}
          y2={18.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={3}
          x2={5.75}
          y1={13}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={1}
          x2={2.468}
          y1={15}
          y2={19.027}
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
          gradientTransform="matrix(7.38889 7.91667 -11.0833 2.96875 7.472 7.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
