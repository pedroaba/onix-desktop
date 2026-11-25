'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M1 4a2 2 0 012-2h8.5A3.5 3.5 0 0115 5.5V12a2 2 0 01-2 2H4.5A3.5 3.5 0 011 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 4a1 1 0 011-1h8.5A2.5 2.5 0 0114 5.5V12a1 1 0 01-1 1H4.5A2.5 2.5 0 012 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 4a1 1 0 011-1h8.5A2.5 2.5 0 0114 5.5V12a1 1 0 01-1 1H4.5A2.5 2.5 0 012 10.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M9.553 3.95c.452 0 .82.354.845.8h.516c.6 0 1.086.486 1.086 1.086A2.114 2.114 0 019.886 7.95h-.097c-.355.397-.84.675-1.389.767V9.95h.72c.707 0 1.28.574 1.28 1.28a.32.32 0 01-.32.32H8V8.5A1.5 1.5 0 006.5 7h-.81a2.4 2.4 0 01-.09-.65v-.8h-.514a.286.286 0 00-.286.286c0 .506.286.944.705 1.164H4.35A2.1 2.1 0 014 5.836c0-.6.486-1.086 1.086-1.086h.516a.847.847 0 01.845-.8zm.847 2.4q-.001.388-.116.739c.531-.169.916-.666.916-1.253a.286.286 0 00-.286-.286H10.4z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7 8.67v6.66c0 .37-.3.67-.67.67H4V8.67c0-.37.3-.67.67-.67h1.66c.37 0 .67.3.67.67"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M5.5 10.557c0-.308-.285-.557-.636-.557l-2.319.239v5.522L5.227 16H5.5z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M5 10.667V16H2v-5.33c0-.37.3-.67.67-.67h1.663c.369 0 .667.299.667.667"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M0 12.67v2.66c0 .37.3.67.67.67H3v-3.33c0-.37-.3-.67-.67-.67H.67c-.37 0-.67.3-.67.67"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.521}
          x2={6.912}
          y1={2}
          y2={14.174}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.333}
          x2={6.392}
          y1={3}
          y2={13.168}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={4}
          x2={11.59}
          y1={3.95}
          y2={11.94}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={3.5}
          x2={6.387}
          y1={8}
          y2={15.376}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={2}
          x2={4.75}
          y1={10}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={0}
          x2={1.468}
          y1={12}
          y2={16.027}
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
          gradientTransform="matrix(6.33333 7.91667 -9.5 2.96875 5.833 5.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
