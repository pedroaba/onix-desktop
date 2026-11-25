'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.03004 5.50733C4.27283 3.53062 5.95767 2 8 2C10.0423 2 11.7272 3.53063 11.97 5.50733C13.6623 5.62043 15 7.029 15 8.75C15 10.5449 13.5449 12 11.75 12H4.25C2.45507 12 1 10.5449 1 8.75C1 7.029 2.33769 5.62043 4.03004 5.50733Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_10227)' + ''}
      />
      <path
        d="M7.50012 8.75C7.50012 10.5449 6.04505 12 4.25012 12C2.4552 12 1.00012 10.5449 1.00012 8.75C1.00012 6.95507 2.4552 5.5 4.25012 5.5C6.04505 5.5 7.50012 6.95507 7.50012 8.75Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_10227)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M7.99999 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 7.99999 2C5.95766 2 4.27282 3.53062 4.03003 5.50733C4.10272 5.50247 4.17607 5.5 4.24999 5.5C6.04491 5.5 7.49999 6.95507 7.49999 8.75C7.49999 9.1681 7.42104 9.56775 7.27724 9.93487C7.51166 9.97765 7.75322 10 7.99999 10Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_10227)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M7.99999 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 7.99999 2C5.95766 2 4.27282 3.53062 4.03003 5.50733C4.10272 5.50247 4.17607 5.5 4.24999 5.5C6.04491 5.5 7.49999 6.95507 7.49999 8.75C7.49999 9.1681 7.42104 9.56775 7.27724 9.93487C7.51166 9.97765 7.75322 10 7.99999 10Z"
        fill={'url(#' + iconId + '-paint3_radial_378174_10227)' + ''}
      />
      <path
        d="M4.03004 5.50733C4.27283 3.53062 5.95767 2 8 2C10.0423 2 11.7272 3.53063 11.97 5.50733C13.6623 5.62043 15 7.029 15 8.75C15 10.5449 13.5449 12 11.75 12H4.25C2.45507 12 1 10.5449 1 8.75C1 7.029 2.33769 5.62043 4.03004 5.50733Z"
        fill={'url(#' + iconId + '-paint4_radial_378174_10227)' + ''}
        fillOpacity={0.5}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_10227'}
          x1={1.5}
          y1={3.875}
          x2={7.94828}
          y2={13.2543}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#367AF2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_10227'}
          x1={1.00012}
          y1={6.61343}
          x2={5.38197}
          y2={10.4917}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#FCFCFC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_10227'}
          x1={5.41163}
          y1={2.45}
          x2={6.47037}
          y2={7.96538}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#FCFCFC" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_378174_10227'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.34204 8.55) rotate(-22.9258) scale(4.87756 4.36018)"
        >
          <stop offset={0.412409} stopColor="#2C87F5" />
          <stop offset={1} stopColor="#2C87F5" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint4_radial_378174_10227'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.41667 1.375) rotate(64.0336) scale(12.3236 87.8769)"
        >
          <stop offset={0.5} stopColor="#DD3CE2" stopOpacity={0} />
          <stop offset={1} stopColor="#DD3CE2" />
        </radialGradient>
      </defs>
    </svg>
  )
}
