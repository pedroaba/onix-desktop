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
        d="M4 13.5A4.5 4.5 0 0 1 8.5 9H35a9 9 0 0 1 9 9v16.5a4.5 4.5 0 0 1-4.5 4.5H13a9 9 0 0 1-9-9V13.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 13.5A4.5 4.5 0 0 1 8.5 9H35a9 9 0 0 1 9 9v16.5a4.5 4.5 0 0 1-4.5 4.5H13a9 9 0 0 1-9-9V13.5z"
      />
      <path
        stroke={'url(#' + iconId + '-c)' + ''}
        strokeDasharray="6.5 4"
        strokeLinecap="round"
        d="M4.5 13.5a4 4 0 0 1 4-4H35a8.5 8.5 0 0 1 8.5 8.5v16.5a4 4 0 0 1-4 4H13A8.5 8.5 0 0 1 4.5 30V13.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M24 14c5.523 0 10 4.478 10 10.001s-4.477 10.001-10 10.001V29.5a5.5 5.5 0 0 0-5.5-5.5H14c0-5.523 4.477-10 10-10z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M24 14c5.523 0 10 4.478 10 10.001s-4.477 10.001-10 10.001V29.5a5.5 5.5 0 0 0-5.5-5.5H14c0-5.523 4.477-10 10-10z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.5}
        d="M24 14c5.523 0 10 4.478 10 10.001s-4.477 10.001-10 10.001V29.5a5.5 5.5 0 0 0-5.5-5.5H14c0-5.523 4.477-10 10-10z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M24 14c5.523 0 10 4.478 10 10.001a9.95 9.95 0 0 1-1.352 5.017l.155-.343c.989-2.197-.618-4.682-3.027-4.682h-3.993a1.79 1.79 0 0 1-1.79-1.793l.003-3.973c.002-2.413-2.488-4.021-4.686-3.028l-.292.131A9.95 9.95 0 0 1 24 14z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M24 14c5.523 0 10 4.478 10 10.001a9.95 9.95 0 0 1-1.352 5.017l.155-.343c.989-2.197-.618-4.682-3.027-4.682h-3.993a1.79 1.79 0 0 1-1.79-1.793l.003-3.973c.002-2.413-2.488-4.021-4.686-3.028l-.292.131A9.95 9.95 0 0 1 24 14z"
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={4.5}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.3}
        rx={4.5}
      />
      <path
        fill="#fff"
        d="M11.636 37.092V41H8.94V29h4.167c1.492 0 2.627.326 3.406.98.785.652 1.178 1.62 1.178 2.903 0 1.322-.44 2.354-1.32 3.096-.873.742-2.048 1.113-3.523 1.113h-1.21zm0-6.017v3.942h1.128c.668 0 1.182-.176 1.544-.528.362-.35.543-.856.543-1.514 0-.608-.178-1.077-.534-1.406-.351-.33-.855-.494-1.512-.494h-1.169z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={15.111}
          x2={17.977}
          y1={9}
          y2={39.565}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(21.1111 23.75 -31.6667 8.90625 16.778 16.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={17.094}
          x2={20.02}
          y1={9.5}
          y2={39.015}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={22.194}
          x2={9.933}
          y1={13.363}
          y2={25.936}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#FF7F48" />
          <stop offset={1} stopColor="#E5495B" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-15.2185 14.1982 -25.6147 -23.8975 27.518 19.804)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.152} stopColor="#AA1D2D" />
          <stop offset={0.381} stopColor="#D12B18" stopOpacity={0.44} />
          <stop offset={0.602} stopColor="#FF3C00" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(18.4476 -8.12936 15.7858 31.18 8.822 32.13)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.407} stopColor="#FF66FB" />
          <stop offset={1} stopColor="#EA3D01" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9.12928 -10.4535 9.74361 8.11201 22.9 25.362)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD6EF9" />
          <stop offset={0.637} stopColor="#F94" />
          <stop offset={0.852} stopColor="#FCC479" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-1.03121 6.98874 -15.808 -2.22362 21.991 15.32)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.144} stopColor="#FF8D13" />
          <stop offset={0.537} stopColor="#FF7F29" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -28.679 16.118) scale(28.2843)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8193E" />
          <stop offset={0.939} stopColor="#920616" />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 14 -15.9375 0 12.998 37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
