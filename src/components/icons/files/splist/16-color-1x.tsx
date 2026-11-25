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
        d="M5 6.5 6.5 5h4.262c.132 0 .238.106.238.238V6.5l-3 .688L5 6.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M6.857 7.955 5 8.723V6.5h1.5l.357 1.455z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M11 8.018V6.5H6.5v1.536l2.045.366L11 8.018z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M11 9.5V8H6.17v1.509l2.973.277L11 9.5z"
      />
      <path fill={'url(#' + iconId + '-g)' + ''} d="M6.5 9.5 5 10V8h1.5v1.5z" />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="m6.5 9.5-.232.714L6.5 11h3L11 9.5H6.5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M6.5 11H5.282A.282.282 0 0 1 5 10.718V9.5h1.5V11z"
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
          x1={5.929}
          x2={5.929}
          y1={8.723}
          y2={6.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E25A01" />
          <stop offset={0.61} stopColor="#E15801" />
          <stop offset={0.878} stopColor="#E05101" />
          <stop offset={1} stopColor="#DE4A01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8.75}
          x2={8.75}
          y1={8.402}
          y2={6.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F18C0A" />
          <stop offset={0.437} stopColor="#F0880A" />
          <stop offset={0.868} stopColor="#EC7C0A" />
          <stop offset={1} stopColor="#EB770A" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.585}
          x2={8.585}
          y1={9.786}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83B01" />
          <stop offset={0.472} stopColor="#D63701" />
          <stop offset={0.937} stopColor="#CE2B01" />
          <stop offset={1} stopColor="#CD2901" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5.75}
          x2={5.75}
          y1={10}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#BF3207" />
          <stop offset={0.472} stopColor="#BB3207" />
          <stop offset={0.937} stopColor="#AF3007" />
          <stop offset={1} stopColor="#AD3007" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={8.634}
          x2={8.634}
          y1={11}
          y2={9.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854A81" />
          <stop offset={0.482} stopColor="#82497E" />
          <stop offset={0.812} stopColor="#794475" />
          <stop offset={1} stopColor="#703F6C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={5.75}
          x2={5.75}
          y1={11}
          y2={9.5}
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
