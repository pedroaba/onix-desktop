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
        d="M1 4a2 2 0 0 1 2-2h8.5A3.5 3.5 0 0 1 15 5.5V12a2 2 0 0 1-2 2H4.5A3.5 3.5 0 0 1 1 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill="#FEE200"
        d="M0 10.75 1.75 9h4.972c.154 0 .278.124.278.278v1.472l-3.5.802L0 10.75z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M2.167 12.448 0 13.344V10.75h1.75l.417 1.698z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M7 12.52v-1.77H1.75v1.792l2.385.427L7 12.52z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M7 14.25V12.5H1.364v1.76l3.469.323L7 14.25z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M1.75 14.25 0 14.833V12.5h1.75v1.75z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m1.75 14.25-.27.833.27.917h3.5L7 14.25H1.75z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M1.75 16H.33a.329.329 0 0 1-.33-.33v-1.42h1.75V16z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M11.5 9a.5.5 0 0 1 0 1H8V9h3.5zm-6-3a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1zm6 0a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.521}
          x2={6.912}
          y1={2}
          y2={14.174}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.333}
          x2={6.392}
          y1={3}
          y2={13.168}
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
          gradientTransform="matrix(6.33333 7.91667 -9.5 2.96875 5.833 5.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={1.083}
          x2={1.083}
          y1={13.344}
          y2={10.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={4.375}
          x2={4.375}
          y1={12.969}
          y2={10.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={4.182}
          x2={4.182}
          y1={14.583}
          y2={12.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={0.875}
          x2={0.875}
          y1={14.833}
          y2={12.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={4.24}
          x2={4.24}
          y1={16}
          y2={14.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={0.875}
          x2={0.875}
          y1={16}
          y2={14.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703D6E" />
          <stop offset={0.631} stopColor="#6C3B6A" />
          <stop offset={1} stopColor="#663764" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={7.5}
          x2={9}
          y1={6}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A35B98" />
          <stop offset={1} stopColor="#87447D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
