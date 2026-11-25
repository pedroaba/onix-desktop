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
      <g clipPath={'url(#' + iconId + '-a)' + ''}>
        <path
          fill={'url(#' + iconId + '-b)' + ''}
          d="M5 5a3 3 0 013-3h13a6 6 0 016 6v19a3 3 0 01-3 3H8.5A3.5 3.5 0 015 26.5z"
        />
        <path
          fill={'url(#' + iconId + '-c)' + ''}
          fillRule="evenodd"
          d="M8 3h13a5 5 0 015 5v13a2 2 0 01-2 2H8.5A3.5 3.5 0 006 24.05V5a2 2 0 012-2M6 26.5A2.5 2.5 0 008.5 29H24a2 2 0 002-2v-.764A3 3 0 0124 27H8.5a.5.5 0 110-1H24a2 2 0 002-2v-.764A3 3 0 0124 24H8.5A2.5 2.5 0 006 26.5"
          clipRule="evenodd"
        />
        <path
          fill={'url(#' + iconId + '-d)' + ''}
          fillRule="evenodd"
          d="M8 3h13a5 5 0 015 5v13a2 2 0 01-2 2H8.5A3.5 3.5 0 006 24.05V5a2 2 0 012-2M6 26.5A2.5 2.5 0 008.5 29H24a2 2 0 002-2v-.764A3 3 0 0124 27H8.5a.5.5 0 110-1H24a2 2 0 002-2v-.764A3 3 0 0124 24H8.5A2.5 2.5 0 006 26.5"
          clipRule="evenodd"
        />
        <rect
          width={13}
          height={13}
          x={1}
          y={18}
          fill={'url(#' + iconId + '-e)' + ''}
          rx={3}
        />
        <rect
          width={13}
          height={13}
          x={1}
          y={18}
          fill={'url(#' + iconId + '-f)' + ''}
          fillOpacity={0.6}
          rx={3}
        />
        <path
          fill="#fff"
          d="m4.861 26.555 1.328-.671q.226.439.586.647.367.208.801.208.483 0 .737-.19.255-.192.254-.58a.65.65 0 00-.244-.51q-.244-.213-.864-.321-1.181-.208-1.719-.728a1.74 1.74 0 01-.532-1.294q0-.963.703-1.54Q6.614 21 7.767 21q.776 0 1.367.307.59.307.937.879l-1.299.647a1.4 1.4 0 00-.463-.463 1.2 1.2 0 00-.625-.147q-.45 0-.684.19a.6.6 0 00-.23.49q0 .26.22.459.225.193.899.316 1.132.208 1.69.756.56.543.56 1.374 0 1.011-.668 1.602-.67.59-1.91.59-.898 0-1.62-.378a2.53 2.53 0 01-1.08-1.067"
        />
        <rect
          width={5}
          height={3}
          x={10}
          y={6}
          fill={'url(#' + iconId + '-g)' + ''}
          rx={1}
        />
        <rect
          width={5}
          height={3}
          x={17}
          y={6}
          fill={'url(#' + iconId + '-h)' + ''}
          rx={1}
        />
        <rect
          width={5}
          height={3}
          x={10}
          y={11}
          fill={'url(#' + iconId + '-i)' + ''}
          rx={1}
        />
        <rect
          width={5}
          height={3}
          x={17}
          y={11}
          fill={'url(#' + iconId + '-j)' + ''}
          rx={1}
        />
        <g clipPath={'url(#' + iconId + '-k)' + ''}>
          <path
            fill={'url(#' + iconId + '-l)' + ''}
            d="M15 17v1c0 .4-.24.75-.59.91A4 4 0 0011 17h-1c0-.55.44-1 1-1h3c.55 0 1 .45 1 1"
          />
        </g>
        <rect
          width={5}
          height={3}
          x={17}
          y={16}
          fill={'url(#' + iconId + '-m)' + ''}
          rx={1}
        />
      </g>
      <defs>
        <linearGradient
          id={iconId + '-b'}
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
          id={iconId + '-c'}
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
          id={iconId + '-g'}
          x1={14}
          x2={14}
          y1={6}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={21}
          x2={21}
          y1={6}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={14}
          x2={14}
          y1={6}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={21}
          x2={21}
          y1={6}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={14.5}
          x2={14.5}
          y1={6}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={21}
          x2={27.313}
          y1={6}
          y2={14.046}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(10.5556 20.5833 -15.8333 7.71875 12.389 9.77)"
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
          gradientTransform="rotate(45 -21.228 10.207)scale(18.3848)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#00B6BD" />
          <stop offset={0.89} stopColor="#00495C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 9.1 -10.3594 0 7.5 25.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
        <clipPath id={iconId + '-a'}>
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id={iconId + '-k'}>
          <path fill="#fff" d="M10 16h5v2.91h-5z" />
        </clipPath>
      </defs>
    </svg>
  )
}
