'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M71.614 81.614A9.004 9.004 0 0 1 63 88H42c-13.255 0-24-10.745-24-24V23a9.004 9.004 0 0 1 6.386-8.614A9.004 9.004 0 0 1 33 8h27c9.941 0 18 8.059 18 18v47a9.004 9.004 0 0 1-6.386 8.614z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M33 10a7 7 0 0 0-7 7v47c0 8.837 7.163 16 16 16h27a7 7 0 0 0 7-7V26c0-8.837-7.163-16-16-16H33z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M33 10a7 7 0 0 0-7 7v47c0 8.837 7.163 16 16 16h27a7 7 0 0 0 7-7V26c0-8.837-7.163-16-16-16H33z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M24 17c0-.11.002-.22.006-.33A7 7 0 0 0 20 23v41c0 12.15 9.85 22 22 22h21a7 7 0 0 0 6.33-4.006A9.23 9.23 0 0 1 69 82H42c-9.941 0-18-8.059-18-18V17z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M24 17c0-.11.002-.22.006-.33A7 7 0 0 0 20 23v41c0 12.15 9.85 22 22 22h21a7 7 0 0 0 6.33-4.006A9.23 9.23 0 0 1 69 82H42c-9.941 0-18-8.059-18-18V17z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={37.375}
          x2={51.544}
          y1={8}
          y2={87.703}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
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
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
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
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
