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
        d="M35 30a2 2 0 0 1-2 2h-9.418c-1.306-4.616-5.547-8-10.582-8v-5h22v11z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M33 16a2 2 0 0 1 2 2v2H13v-2a2 2 0 0 1 2-2h18z"
      />
      <path
        fill="#F3F3F3"
        d="M19.25 35a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillRule="evenodd"
        d="M13 25c5.523 0 10 4.477 10 10s-4.477 10-10 10H3V35c0-5.523 4.477-10 10-10zm0 6a4 4 0 0 0-4 4v4h4a4 4 0 0 0 0-8z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M23 35c0 5.523-4.477 10-10 10H3a6 6 0 0 1 6-6h4a4 4 0 0 0 3.994-3.794L17 35h6z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.56}
        d="M23 35c0 5.523-4.477 10-10 10H3a6 6 0 0 1 6-6h4a4 4 0 0 0 3.994-3.794L17 35h6z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.1}
        d="M23 35c0 5.523-4.477 10-10 10H3a6 6 0 0 1 6-6h4a4 4 0 0 0 3.994-3.794L17 35h6z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M13 25a9.97 9.97 0 0 1 7.071 2.929l-4.243 4.243A4 4 0 0 0 9 35v4a6 6 0 0 1-6 6V35c0-5.523 4.477-10 10-10z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M13 25a9.97 9.97 0 0 1 7.071 2.929l-4.243 4.243A4 4 0 0 0 9 35v4a6 6 0 0 1-6 6V35c0-5.523 4.477-10 10-10z"
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
          x1={24}
          x2={24}
          y1={18.675}
          y2={33.3}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D0BEFE" />
          <stop offset={1} stopColor="#C2AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={24}
          x2={24}
          y1={16}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB85FF" />
          <stop offset={1} stopColor="#9354FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15.2}
          x2={11.9}
          y1={32.1}
          y2={45.6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={9.5}
          x2={18.3}
          y1={43.5}
          y2={41.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51E6FF" />
          <stop offset={1} stopColor="#71D4FF" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(4 2.75 -4.83318 7.0301 6.5 40.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.7} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7.4 4.6 -8.08463 13.0057 5.3 40)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={7.094}
          x2={12.239}
          y1={35.767}
          y2={28.56}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#AB5ADD" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(13.3796 -2.31448 6.0378 35.4522 1.303 31.239)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
