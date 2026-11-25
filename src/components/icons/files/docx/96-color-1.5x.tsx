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
        d="M66 51.095V66a4 4 0 0 1-4 4H48V59c0-5.478-4.005-10.02-9.246-10.86L48 37l18 14.095z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M66 50.99a4 4 0 0 1-4 4H47.242C45.64 50.897 41.66 48 37 48h-7v-2.51a5.5 5.5 0 0 1 5.5-5.5H62l4-3v14z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.6}
        d="M66 50.99a4 4 0 0 1-4 4H47.242C45.64 50.897 41.66 48 37 48h-7v-2.51a5.5 5.5 0 0 1 5.5-5.5H62l4-3v14z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M66 50.99a4 4 0 0 1-4 4H47.242C45.64 50.897 41.66 48 37 48h-7v-2.51a5.5 5.5 0 0 1 5.5-5.5H62l4-3v14z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M62 26a4 4 0 0 1 4 4v6.99a4 4 0 0 1-4 4H37.13A7.128 7.128 0 0 0 30.003 48H30V33.5a7.5 7.5 0 0 1 7.5-7.5H62z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        d="M62 26a4 4 0 0 1 4 4v6.99a4 4 0 0 1-4 4H37.13A7.128 7.128 0 0 0 30.003 48H30V33.5a7.5 7.5 0 0 1 7.5-7.5H62z"
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={9}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.65}
        rx={9}
      />
      <path
        fill="#fff"
        d="m40.402 58-5.17 23.997-6.179.003-3.051-14.4L22.807 82h-6.238l-4.967-23.997h5.095l3.065 15.837 3.045-15.837h6.246l3.189 15.837 2.99-15.837 5.17-.003z"
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
          gradientTransform="matrix(100.102 0 0 25.5743 64.16 70)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.18} stopColor="#1657F4" />
          <stop offset={0.575} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={30}
          x2={57.57}
          y1={63.08}
          y2={63.08}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66C0FF" />
          <stop offset={0.256} stopColor="#0094F0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-24.2766 50.4829 -53.3614 -138.014 66 38.687)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.14} stopColor="#D471FF" />
          <stop offset={0.831} stopColor="#509DF5" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 44.1528 -121.976 0 60.733 73.114)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.283} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={30}
          x2={65.991}
          y1={37.179}
          y2={37.754}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.201} stopColor="#3BD5FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-34.4665 8.33185 -21.5975 -84.8907 66 26.727)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.061} stopColor="#E4A7FE" />
          <stop offset={0.539} stopColor="#E4A7FE" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -57.355 32.243) scale(56.5685)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.081} stopColor="#367AF2" />
          <stop offset={0.872} stopColor="#001A8F" />
        </radialGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 28 -31.9124 0 26 74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.587} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.974} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
