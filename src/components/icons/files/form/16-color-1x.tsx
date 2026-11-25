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
        d="M2 3a2 2 0 0 1 2-2h6.5A3.5 3.5 0 0 1 14 4.5V13a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M11 11.333a.667.667 0 0 1-.667.667H8v-1.5A2.5 2.5 0 0 0 5.5 8h-.23c.345-.597.99-1 1.73-1h4v4.333z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        d="M11 11.333a.667.667 0 0 1-.667.667H8v-1.5A2.5 2.5 0 0 0 5.5 8h-.23c.345-.597.99-1 1.73-1h4v4.333z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M10.273 4c.401 0 .727.326.727.728v2.544a.728.728 0 0 1-.727.728H6.259c-.11 0-.216.015-.317.041A2.512 2.512 0 0 0 5.5 8H5V5.34C5 4.6 5.6 4 6.34 4h3.933z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M10.273 4c.401 0 .727.326.727.728v2.544a.728.728 0 0 1-.727.728H6.259c-.11 0-.216.015-.317.041A2.512 2.512 0 0 0 5.5 8H5V5.34C5 4.6 5.6 4 6.34 4h3.933z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M9 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M9 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M9.818 9c.1 0 .182.081.182.182v1.636c0 .1-.081.182-.182.182H8.182A.182.182 0 0 1 8 10.818V9.182c0-.1.081-.182.182-.182h1.636z"
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.6}
        rx={1.5}
      />
      <path
        fill="#fff"
        d="M4.942 10.934h-1.76v1.203h1.617v.928H3.181V15H2.058v-5h2.884v.934z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={8.06}
          y1={1}
          y2={15.049}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.587}
          y1={2}
          y2={14.062}
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
          gradientTransform="matrix(5.27778 9.5 -7.91667 3.5625 6.194 5.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-3.84322 -6.78571 5.83432 -3.45278 9.609 12.893)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.008} stopColor="#1A7F7C" />
          <stop offset={0.45} stopColor="#14717C" />
          <stop offset={0.803} stopColor="#08567B" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-2.51119 -2.56696 1.9444 -1.98677 6.639 7.893)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={0.992} stopColor="#06517B" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={5.135}
          x2={11.479}
          y1={7.83}
          y2={5.039}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.227} stopColor="#15B4D5" />
          <stop offset={1} stopColor="#43E5CA" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={6.653}
          x2={5}
          y1={6.203}
          y2={6.203}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#29CBDC" stopOpacity={0} />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={8.286}
          x2={9.571}
          y1={5.143}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={8.286}
          x2={9.571}
          y1={5.143}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={7.72}
          x2={8.845}
          y1={9.143}
          y2={11.304}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#20AC9D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7 7 -7 7 0 9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#009BBC" />
          <stop offset={0.591} stopColor="#01657D" />
          <stop offset={0.941} stopColor="#014354" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 4.9 -5.57812 0 3.5 13.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
