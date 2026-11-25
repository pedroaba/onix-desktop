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
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12 10a1 1 0 0 1-1 1H8.9A5.001 5.001 0 0 0 4 7V6h8v4z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M11 5a1 1 0 0 1 1 1v1H4V6a1 1 0 0 1 1-1h6z"
      />
      <path fill="#F3F3F3" d="M6.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillRule="evenodd"
        d="M4 8a4 4 0 1 1 0 8H0v-4a4 4 0 0 1 4-4zm0 2.5A1.5 1.5 0 0 0 2.5 12v1.5H4a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M8 12a4 4 0 0 1-4 4H0a2.5 2.5 0 0 1 2.5-2.5H4a1.5 1.5 0 0 0 1.492-1.347L5.5 12H8z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.56}
        d="M8 12a4 4 0 0 1-4 4H0a2.5 2.5 0 0 1 2.5-2.5H4a1.5 1.5 0 0 0 1.492-1.347L5.5 12H8z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.1}
        d="M8 12a4 4 0 0 1-4 4H0a2.5 2.5 0 0 1 2.5-2.5H4a1.5 1.5 0 0 0 1.492-1.347L5.5 12H8z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M4 8c1.105 0 2.104.448 2.828 1.172L5.061 10.94A1.5 1.5 0 0 0 2.5 12v1.5A2.5 2.5 0 0 1-.001 16v-4a4 4 0 0 1 4-4z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M4 8c1.105 0 2.104.448 2.828 1.172L5.061 10.94A1.5 1.5 0 0 0 2.5 12v1.5A2.5 2.5 0 0 1-.001 16v-4a4 4 0 0 1 4-4z"
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
          x1={8}
          x2={8}
          y1={6}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D0BEFE" />
          <stop offset={1} stopColor="#C2AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8}
          x2={8}
          y1={5}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB85FF" />
          <stop offset={1} stopColor="#9354FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={4.88}
          x2={3.56}
          y1={10.84}
          y2={16.24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={2.6}
          x2={6.12}
          y1={15.4}
          y2={14.6}
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
          gradientTransform="matrix(1.59998 1.1 -1.93324 2.81204 1.4 14.3)"
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
          gradientTransform="matrix(2.95995 1.84 -3.23379 5.20227 .92 14)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={1.637}
          x2={3.696}
          y1={12.307}
          y2={9.424}
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
          gradientTransform="matrix(5.35159 -.9258 2.41501 14.1809 -.679 10.496)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
