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
        fillRule="evenodd"
        d="M4 1a2 2 0 00-2 2v10.5A1.5 1.5 0 003.5 15H12a2 2 0 002-2V4.5A3.5 3.5 0 0010.5 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M13 4.5A2.5 2.5 0 0010.5 2H4a1 1 0 00-1 1v9.085q.236-.084.5-.085H12a1 1 0 001-1zm0 8.232A2 2 0 0112 13H3.5a.5.5 0 000 1H12a1 1 0 001-1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M13 4.5A2.5 2.5 0 0010.5 2H4a1 1 0 00-1 1v9.085q.236-.084.5-.085H12a1 1 0 001-1zm0 8.232A2 2 0 0112 13H3.5a.5.5 0 000 1H12a1 1 0 001-1z"
        clipRule="evenodd"
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-d)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.6}
        rx={1.5}
      />
      <path
        fill="#fff"
        d="m1.613 13.968.95-.48q.16.315.419.463.261.148.572.148.346 0 .528-.135.18-.138.181-.415a.46.46 0 00-.174-.364q-.175-.152-.618-.23-.845-.148-1.23-.52a1.24 1.24 0 01-.38-.924q0-.687.503-1.1Q2.866 10 3.69 10q.555 0 .977.22.423.219.67.627l-.928.462a1 1 0 00-.332-.33.87.87 0 00-.447-.105q-.321 0-.489.135a.43.43 0 00-.164.35.43.43 0 00.157.328q.162.138.643.226.81.149 1.208.54.4.387.401.982 0 .72-.478 1.143Q4.431 15 3.544 15q-.642 0-1.16-.27a1.8 1.8 0 01-.77-.762"
      />
      <rect
        width={2}
        height={2}
        x={5}
        y={4}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={0.5}
      />
      <rect
        width={2}
        height={2}
        x={9}
        y={4}
        fill={'url(#' + iconId + '-g)' + ''}
        rx={0.5}
      />
      <rect
        width={2}
        height={2}
        x={9}
        y={8}
        fill={'url(#' + iconId + '-h)' + ''}
        rx={0.5}
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={8.06}
          y1={1}
          y2={15.049}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.587}
          y1={2}
          y2={14.062}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={6.6}
          x2={10.782}
          y1={4}
          y2={7.198}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={10.6}
          x2={14.782}
          y1={4}
          y2={7.198}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={9.329}
          x2={10.688}
          y1={8.144}
          y2={9.829}
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
          gradientTransform="matrix(5.27778 9.5 -7.91667 3.5625 6.194 5.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7 7 -7 7 0 9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#00B6BD" />
          <stop offset={0.89} stopColor="#00495C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 4.9 -5.57812 0 3.5 13.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
