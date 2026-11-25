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
        d="M5 13.5A3.5 3.5 0 0 1 8.5 10H35a8 8 0 0 1 8 8v16.5a3.5 3.5 0 0 1-3.5 3.5H13a8 8 0 0 1-8-8V13.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 13.5A3.5 3.5 0 0 1 8.5 10H35a8 8 0 0 1 8 8v16.5a3.5 3.5 0 0 1-3.5 3.5H13a8 8 0 0 1-8-8V13.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M31.5 31.5c0 1.38-3.358 2.5-7.5 2.5v-4.5a5.473 5.473 0 0 0-.892-3H31.5v5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M31.5 31.5c0 1.38-3.358 2.5-7.5 2.5v-4.5a5.473 5.473 0 0 0-.892-3H31.5v5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M31.5 26.5c0 1.38-3.358 2.5-7.5 2.5l-.024-.001A5.499 5.499 0 0 0 18.5 24h-2v-2.5h15v5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M31.5 26.5c0 1.38-3.358 2.5-7.5 2.5l-.024-.001A5.499 5.499 0 0 0 18.5 24h-2v-2.5h15v5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M31.5 21.5c0 1.38-3.358 2.5-7.5 2.5-4.142 0-7.5-1.12-7.5-2.5v-5h15v5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.4}
        d="M31.5 21.5c0 1.38-3.358 2.5-7.5 2.5-4.142 0-7.5-1.12-7.5-2.5v-5h15v5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M24 19c-4.142 0-7.5-1.12-7.5-2.5S19.858 14 24 14c4.142 0 7.5 1.12 7.5 2.5S28.142 19 24 19z"
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={4.5}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.5}
        rx={4.5}
      />
      <path
        fill="#fff"
        d="m7.16 41 4.292-12h3.198l4.191 12h-2.839l-.826-2.402h-4.392L9.974 41H7.16zm4.242-4.61h3.13l-1.277-4.193a16.624 16.624 0 0 0-.125-.41 7.08 7.08 0 0 1-.117-.444h-.067c-.033.14-.07.276-.108.41a16.96 16.96 0 0 1-.134.435l-1.302 4.201z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={16.917}
          x2={19.97}
          y1={9}
          y2={39.528}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={15.556}
          x2={18.184}
          y1={10}
          y2={38.536}
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
          gradientTransform="matrix(20.0556 22.1667 -30.0833 8.3125 17.139 17.292)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={31.5}
          x2={1.5}
          y1={30.59}
          y2={30.59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9C0D55" />
          <stop offset={0.511} stopColor="#A61727" />
          <stop offset={1} stopColor="#8A1421" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 7.5 -38.7275 0 16.5 26.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.605} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={31.5}
          x2={4.687}
          y1={25.59}
          y2={25.59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F24A9D" />
          <stop offset={0.511} stopColor="#E82C41" />
          <stop offset={1} stopColor="#CA2134" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 7.5 -34.6127 0 18.094 21.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#560B14" />
          <stop offset={0.751} stopColor="#560B14" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={31.5}
          x2={16.5}
          y1={20.59}
          y2={20.59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={0.511} stopColor="#FB5B6C" />
          <stop offset={1} stopColor="#F83F54" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 7.5 -19.3638 0 24 16.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#FF9FB2" />
          <stop offset={0.634} stopColor="#FF9FB2" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={22.65}
          x2={20.754}
          y1={12.72}
          y2={19.83}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97DBD" />
          <stop offset={0.902} stopColor="#FF9FB2" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -28.679 16.118) scale(28.2843)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E82C58" />
          <stop offset={0.939} stopColor="#AA1D2D" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 14 -15.9375 0 12.998 37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FF5778" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FF9FB2" />
        </radialGradient>
      </defs>
    </svg>
  )
}
