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
      <rect
        width={56}
        height={44}
        x={4}
        y={10}
        fill={'url(#' + iconId + '-a)' + ''}
        rx={10}
      />
      <rect
        width={50}
        height={38}
        x={7}
        y={13}
        fill={'url(#' + iconId + '-b)' + ''}
        rx={7}
      />
      <rect
        width={50}
        height={38}
        x={7}
        y={13}
        fill={'url(#' + iconId + '-c)' + ''}
        fillOpacity={0.28}
        rx={7}
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M20 21a3 3 0 0 1 3-3h13a6 6 0 0 1 6 6v19a3 3 0 0 1-3 3H26a6 6 0 0 1-6-6V21z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M20 21a3 3 0 0 1 3-3h13a6 6 0 0 1 6 6v19a3 3 0 0 1-3 3H26a6 6 0 0 1-6-6V21z"
      />
      <rect
        width={3}
        height={38}
        x={54}
        y={13}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={1.5}
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M51 19a3 3 0 0 1 3-3v32a3 3 0 0 1-3-3V19z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={22.083}
          x2={26.77}
          y1={10}
          y2={54.731}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD3D8" />
          <stop offset={1} stopColor="#9AA6AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={23.146}
          x2={27.063}
          y1={13}
          y2={51.659}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626C72" />
          <stop offset={1} stopColor="#4D565C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={32}
          x2={32}
          y1={13}
          y2={51}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.6} stopColor="#5C666C" stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={26.111}
          x2={30.576}
          y1={18}
          y2={46.067}
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
          gradientTransform="matrix(11.6111 22.1667 -17.4167 8.3125 27.028 25.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={55.125}
          x2={68.884}
          y1={13}
          y2={18.214}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEF0F2" />
          <stop offset={1} stopColor="#C9CED0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={52.5}
          x2={52.5}
          y1={16}
          y2={48}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD1D6" />
          <stop offset={1} stopColor="#929CA2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
