'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M50.929 50.929A6.001 6.001 0 0 1 45 56H25c-9.389 0-17-7.611-17-17V19a6.001 6.001 0 0 1 5.071-5.929A6.001 6.001 0 0 1 19 8h25c6.627 0 12 5.373 12 12v25a6.001 6.001 0 0 1-5.071 5.929z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M19 9a5 5 0 0 0-5 5v25c0 6.075 4.925 11 11 11h25a5 5 0 0 0 5-5V20c0-6.075-4.925-11-11-11H19z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M19 9a5 5 0 0 0-5 5v25c0 6.075 4.925 11 11 11h25a5 5 0 0 0 5-5V20c0-6.075-4.925-11-11-11H19z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M9 19a5.002 5.002 0 0 1 4-4.9V39c0 6.627 5.373 12 12 12h24.9a5.002 5.002 0 0 1-4.9 4H25c-8.837 0-16-7.163-16-16V19z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M9 19a5.002 5.002 0 0 1 4-4.9V39c0 6.627 5.373 12 12 12h24.9a5.002 5.002 0 0 1-4.9 4H25c-8.837 0-16-7.163-16-16V19z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M29.267 18.373C27.36 17.296 25 18.68 25 20.878v17.244c0 2.198 2.359 3.582 4.267 2.505l15.273-8.622c1.947-1.099 1.947-3.91 0-5.01l-15.273-8.622z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={23.5}
          x2={29.963}
          y1={8}
          y2={56.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={21.778}
          x2={27.597}
          y1={9}
          y2={55.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(24.2778 36.4167 -36.4167 13.6562 23.694 20.98)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={21.778}
          x2={27.597}
          y1={9}
          y2={55.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(24.2778 36.4167 -36.4167 13.6562 23.694 20.98)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={35.5}
          x2={32.755}
          y1={35.371}
          y2={22.382}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#892FFF" />
          <stop offset={1} stopColor="#A966FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
