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
      <g clipPath={'url(#' + iconId + '-a)' + ''}>
        <g clipPath={'url(#' + iconId + '-b)' + ''}>
          <path
            fill={'url(#' + iconId + '-c)' + ''}
            d="M4 4a2 2 0 012-2h6a4 4 0 014 4v10a2 2 0 01-2 2H6a2 2 0 01-2-2z"
          />
          <path
            fill={'url(#' + iconId + '-d)' + ''}
            fillRule="evenodd"
            d="M6 3h6a3 3 0 013 3v7a1 1 0 01-1 1H6a2 2 0 00-1 .268V4a1 1 0 011-1M5 16a1 1 0 001 1h8a1 1 0 001-1v-1.268A2 2 0 0114 15H6a1 1 0 00-1 1"
            clipRule="evenodd"
          />
          <path
            fill={'url(#' + iconId + '-e)' + ''}
            fillRule="evenodd"
            d="M6 3h6a3 3 0 013 3v7a1 1 0 01-1 1H6a2 2 0 00-1 .268V4a1 1 0 011-1M5 16a1 1 0 001 1h8a1 1 0 001-1v-1.268A2 2 0 0114 15H6a1 1 0 00-1 1"
            clipRule="evenodd"
          />
          <rect
            width={9}
            height={9}
            x={1}
            y={10}
            fill={'url(#' + iconId + '-f)' + ''}
            rx={2}
          />
          <rect
            width={9}
            height={9}
            x={1}
            y={10}
            fill={'url(#' + iconId + '-g)' + ''}
            fillOpacity={0.6}
            rx={2}
          />
          <path
            fill="#fff"
            d="m3.613 15.968.95-.48q.16.315.419.463.261.148.572.148.346 0 .528-.135.18-.138.181-.415a.46.46 0 00-.174-.364q-.175-.152-.618-.23-.845-.148-1.23-.52a1.24 1.24 0 01-.38-.924q0-.687.503-1.1Q4.866 12 5.69 12q.555 0 .977.22.423.219.67.627l-.928.462a1 1 0 00-.332-.33.87.87 0 00-.447-.105q-.321 0-.489.135a.43.43 0 00-.164.35.43.43 0 00.157.328q.162.138.643.226.81.149 1.208.54.4.387.401.982 0 .72-.478 1.143Q6.43 17 5.544 17q-.642 0-1.16-.27a1.8 1.8 0 01-.77-.762"
          />
          <rect
            width={2}
            height={2}
            x={7}
            y={6}
            fill={'url(#' + iconId + '-h)' + ''}
            rx={0.5}
          />
          <rect
            width={2}
            height={2}
            x={11}
            y={6}
            fill={'url(#' + iconId + '-i)' + ''}
            rx={0.5}
          />
          <rect
            width={2}
            height={2}
            x={11}
            y={10}
            fill={'url(#' + iconId + '-j)' + ''}
            rx={0.5}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={iconId + '-c'}
          x1={7.875}
          x2={10.709}
          y1={2}
          y2={17.941}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={7.778}
          x2={10.221}
          y1={3}
          y2={16.961}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={8.6}
          x2={12.782}
          y1={6}
          y2={9.198}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={12.6}
          x2={16.782}
          y1={6}
          y2={9.198}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={11.329}
          x2={12.688}
          y1={10.144}
          y2={11.829}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.27778 11.0833 -7.91667 4.15625 8.194 6.646)"
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
          gradientTransform="rotate(45 -11.571 6.207)scale(12.7279)"
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
          gradientTransform="matrix(0 6.3 -7.17187 0 5.5 15.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
        <clipPath id={iconId + '-a'}>
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
        <clipPath id={iconId + '-b'}>
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
