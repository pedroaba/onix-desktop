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
        d="M31 15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-9v-5.5a1.5 1.5 0 0 0-1.5-1.5H15v-9a2 2 0 0 1 2-2h14z"
      />
      <path
        fill="#87447D"
        d="M28.185 25.01A2 2 0 0 1 27.98 29h-5.985v-1h5.985a1 1 0 0 0 .101-1.995L27.98 26h-9.718c.346-.597.99-1 1.73-1h7.988l.205.01z"
      />
      <path
        fill="#87447D"
        fillRule="evenodd"
        d="M28.185 18.01A2 2 0 0 1 27.98 22h-7.989a2 2 0 1 1 0-4h7.988l.205.01zm-8.193.99a1 1 0 1 0 0 2h7.988a1 1 0 0 0 .102-1.995L27.98 19h-7.988z"
        clipRule="evenodd"
      />
      <path
        fill="#FEE200"
        d="M3 31.5 7.5 27h12.785c.396 0 .715.319.715.715V31.5l-9 2.063L3 31.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8.571 35.866 3 38.17V31.5h4.5l1.071 4.366z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M21 36.054V31.5H7.5v4.607l6.134 1.098L21 36.054z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M21 40.5V36H6.509v4.527l8.92.83 5.57-.857z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M7.5 40.5 3 42v-6h4.5v4.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="m7.5 40.5-.696 2.143L7.5 45h9l4.5-4.5H7.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M7.5 45H3.846A.845.845 0 0 1 3 44.154V40.5h4.5V45z"
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
          x1={16.929}
          x2={33}
          y1={11.143}
          y2={41.357}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E0BEDB" />
          <stop offset={1} stopColor="#A35B98" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={5.786}
          x2={5.786}
          y1={38.17}
          y2={31.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={14.25}
          x2={14.25}
          y1={37.205}
          y2={31.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={13.754}
          x2={13.754}
          y1={41.357}
          y2={36}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={5.25}
          x2={5.25}
          y1={42}
          y2={36}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={13.902}
          x2={13.902}
          y1={45}
          y2={40.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={5.25}
          x2={5.25}
          y1={45}
          y2={40.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703D6E" />
          <stop offset={0.631} stopColor="#6C3B6A" />
          <stop offset={1} stopColor="#663764" />
        </linearGradient>
      </defs>
    </svg>
  )
}
