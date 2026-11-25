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
        d="M18 17a9 9 0 0 1 9-9h33c9.941 0 18 8.059 18 18v53a9 9 0 0 1-9 9H36c-9.941 0-18-8.059-18-18V17z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M20 17a7 7 0 0 1 7-7h33c8.837 0 16 7.163 16 16v53a7 7 0 0 1-7 7H36c-8.837 0-16-7.163-16-16V17z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M20 17a7 7 0 0 1 7-7h33c8.837 0 16 7.163 16 16v53a7 7 0 0 1-7 7H36c-8.837 0-16-7.163-16-16V17z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M66 66.333A3.667 3.667 0 0 1 62.333 70H48V59c0-6.075-4.925-11-11-11h-7v-8.5a5.5 5.5 0 0 1 5.5-5.5H66v32.333z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        d="M66 66.333A3.667 3.667 0 0 1 62.333 70H48V59c0-6.075-4.925-11-11-11h-7v-8.5a5.5 5.5 0 0 1 5.5-5.5H66v32.333z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M62 26a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H37.377c-.063 0-.127.002-.19.004-.062-.001-.124-.004-.187-.004h-7V33.376A7.377 7.377 0 0 1 37.377 26H62z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M62 26a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H37.377c-.063 0-.127.002-.19.004-.062-.001-.124-.004-.187-.004h-7V33.376A7.377 7.377 0 0 1 37.377 26H62z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M55 44a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M55 41a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M59 54a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8z"
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={9}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.6}
        rx={9}
      />
      <path
        fill="#fff"
        d="M32.922 62.485h-8.45v5.774h7.765v4.452h-7.765V82h-5.394V58h13.844v4.485z"
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
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-22 -48.8571 33.3978 -24.86 58 76.429)"
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
          gradientTransform="matrix(-14.375 -18.4821 11.1305 -14.3047 41 40.429)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={0.992} stopColor="#06517B" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={30.81}
          x2={69.312}
          y1={49.826}
          y2={33.491}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.227} stopColor="#15B4D5" />
          <stop offset={1} stopColor="#43E5CA" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={39.918}
          x2={30}
          y1={39.705}
          y2={39.705}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#29CBDC" stopOpacity={0} />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={50}
          x2={59}
          y1={31}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={52.143}
          x2={57.286}
          y1={33.571}
          y2={41}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={51.429}
          x2={57.857}
          y1={54.714}
          y2={64}
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
          gradientTransform="rotate(45 -57.355 32.243) scale(56.5685)"
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
          gradientTransform="matrix(0 28 -31.875 0 26 74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
