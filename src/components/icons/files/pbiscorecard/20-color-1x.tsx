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
        d="M11.553 5.95c.452 0 .82.354.845.8h.516c.6 0 1.086.486 1.086 1.086a2.114 2.114 0 01-2.114 2.114h-.097c-.355.397-.84.675-1.389.767v1.233h.72c.707 0 1.28.574 1.28 1.28a.32.32 0 01-.32.32H9v-1.6h.6v-1.233q-.317-.055-.6-.186V10.5a1.5 1.5 0 00-1.306-1.486A2.4 2.4 0 017.6 8.35v-.8h-.514a.286.286 0 00-.286.286c0 .506.286.944.705 1.164H6.35A2.1 2.1 0 016 7.836c0-.6.486-1.086 1.086-1.086h.516a.847.847 0 01.845-.8zm.847 2.4q-.001.388-.116.739c.531-.169.916-.666.916-1.253a.286.286 0 00-.286-.286H12.4z"
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
          x1={6}
          x2={13.59}
          y1={5.95}
          y2={13.94}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
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
