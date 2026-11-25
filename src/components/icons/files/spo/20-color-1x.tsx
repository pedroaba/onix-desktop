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
            d="M4 4a2 2 0 012-2h6a4 4 0 014 4v10a2 2 0 01-2 2H8a4 4 0 01-4-4z"
          />
          <path
            fill={'url(#' + iconId + '-d)' + ''}
            d="M5 4a1 1 0 011-1h6a3 3 0 013 3v10a1 1 0 01-1 1H8a3 3 0 01-3-3z"
          />
          <path
            fill={'url(#' + iconId + '-e)' + ''}
            d="M5 4a1 1 0 011-1h6a3 3 0 013 3v10a1 1 0 01-1 1H8a3 3 0 01-3-3z"
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
          <path
            fill={'url(#' + iconId + '-h)' + ''}
            d="M12.5 13a.5.5 0 010 1H11v-1zm0-2a.5.5 0 010 1H11v-1z"
          />
          <path
            fill={'url(#' + iconId + '-i)' + ''}
            d="M13 7v2c0 .55-.45 1-1 1h-1.77C9.69 9.38 8.89 9 8 9H7V7c0-.56.45-1 1-1h4c.55 0 1 .44 1 1"
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
          x1={11.125}
          x2={11.806}
          y1={9}
          y2={15.139}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.509} stopColor="#0097A8" />
          <stop offset={0.838} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={8.667}
          x2={9.007}
          y1={6}
          y2={10.083}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#86F2F2" />
          <stop offset={1} stopColor="#37C6D0" />
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
