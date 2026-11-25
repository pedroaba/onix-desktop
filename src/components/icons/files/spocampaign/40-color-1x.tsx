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
        d="M6 6a4 4 0 014-4h16a8 8 0 018 8v24a4 4 0 01-4 4H10.5A4.5 4.5 0 016 33.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M33 30a3 3 0 01-3 3H10.5a.5.5 0 000 1H30a4 4 0 003-1.356V34a3 3 0 01-3 3H10.5q-.09 0-.18-.005A3.5 3.5 0 0110.5 30H30a4 4 0 003-1.355z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M33 30a3 3 0 01-3 3H10.5a.5.5 0 000 1H30a4 4 0 003-1.356V34a3 3 0 01-3 3H10.5q-.09 0-.18-.005A3.5 3.5 0 0110.5 30H30a4 4 0 003-1.355z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M26 3a7 7 0 017 7v16a3 3 0 01-3 3H10.5A4.5 4.5 0 007 30.672V6a3 3 0 013-3z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M26 3a7 7 0 017 7v16a3 3 0 01-3 3H10.5A4.5 4.5 0 007 30.672V6a3 3 0 013-3z"
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={4}
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.6}
        rx={4}
      />
      <path
        fill="#fff"
        d="m6.227 32.935 1.899-.958q.32.628.838.924.523.297 1.145.297.69 0 1.054-.27.363-.276.363-.83a.92.92 0 00-.349-.728q-.35-.304-1.236-.46-1.69-.295-2.458-1.038-.76-.742-.76-1.85 0-1.375 1.005-2.199Q8.734 25 10.38 25q1.11 0 1.955.439.845.438 1.34 1.255l-1.857.924q-.306-.459-.663-.661-.356-.21-.894-.21-.642 0-.977.27a.87.87 0 00-.328.702q0 .372.314.655.32.276 1.285.452 1.62.297 2.416 1.08.803.775.803 1.963 0 1.444-.957 2.288t-2.73.843q-1.286 0-2.318-.54a3.6 3.6 0 01-1.543-1.525"
      />
      <rect
        width={7}
        height={5}
        x={12}
        y={7}
        fill={'url(#' + iconId + '-h)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={5}
        x={21}
        y={7}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={5}
        x={12}
        y={14}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={5}
        x={21}
        y={14}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={5}
        x={21}
        y={21}
        fill={'url(#' + iconId + '-l)' + ''}
        rx={1.5}
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={15.042}
          x2={21.203}
          y1={2}
          y2={37.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={17.6}
          x2={17.6}
          y1={7}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={26.6}
          x2={26.6}
          y1={7}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={17.6}
          x2={17.6}
          y1={6.5}
          y2={26.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={26.6}
          x2={26.6}
          y1={7}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={26.5}
          x2={26.5}
          y1={7}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -24.85 11.707)scale(25.4558)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#00B6BD" />
          <stop offset={0.89} stopColor="#00495C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 12.6 -14.3437 0 10 31.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
