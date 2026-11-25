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
        d="M9 8.5A4.5 4.5 0 0 1 13.5 4H30a9 9 0 0 1 9 9v26.5a4.5 4.5 0 0 1-4.5 4.5H18a9 9 0 0 1-9-9V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M9 8.5A4.5 4.5 0 0 1 13.5 4H30a9 9 0 0 1 9 9v26.5a4.5 4.5 0 0 1-4.5 4.5H18a9 9 0 0 1-9-9V8.5z"
      />
      <path
        stroke={'url(#' + iconId + '-c)' + ''}
        strokeDasharray="6.5 4"
        strokeLinecap="round"
        d="M9.5 8.5a4 4 0 0 1 4-4H30a8.5 8.5 0 0 1 8.5 8.5v26.5a4 4 0 0 1-4 4H18A8.5 8.5 0 0 1 9.5 35V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M33 25.548V33a2 2 0 0 1-2 2h-7v-5.5a5.5 5.5 0 0 0-4.623-5.43L24 18.5l9 7.048z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M33 25.495a2 2 0 0 1-2 2h-7.379A5.5 5.5 0 0 0 18.5 24H15v-1.255a2.75 2.75 0 0 1 2.75-2.75H31l2-1.5v7z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.6}
        d="M33 25.495a2 2 0 0 1-2 2h-7.379A5.5 5.5 0 0 0 18.5 24H15v-1.255a2.75 2.75 0 0 1 2.75-2.75H31l2-1.5v7z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M33 25.495a2 2 0 0 1-2 2h-7.379A5.5 5.5 0 0 0 18.5 24H15v-1.255a2.75 2.75 0 0 1 2.75-2.75H31l2-1.5v7z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M31 13a2 2 0 0 1 2 2v3.494a2 2 0 0 1-2 2.001H18.564A3.563 3.563 0 0 0 15.002 24H15v-7.25A3.75 3.75 0 0 1 18.75 13H31z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        d="M31 13a2 2 0 0 1 2 2v3.494a2 2 0 0 1-2 2.001H18.564A3.563 3.563 0 0 0 15.002 24H15v-7.25A3.75 3.75 0 0 1 18.75 13H31z"
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={4.5}
      />
      <rect
        width={20}
        height={20}
        x={3}
        y={25}
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.65}
        rx={4.5}
      />
      <path
        fill="#fff"
        d="m20.2 29-2.584 11.999-3.09.001-1.525-7.2-1.598 7.2H8.284L5.801 29.001h2.547l1.533 7.919 1.522-7.919h3.124l1.594 7.919 1.495-7.919L20.201 29z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={17.333}
          x2={24}
          y1={4}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(63.435 -2.372 22.243) scale(35.4044 26.5533)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={18.865}
          x2={25.828}
          y1={4.5}
          y2={43.335}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(50.0512 0 0 12.7872 32.08 35)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.18} stopColor="#1657F4" />
          <stop offset={0.575} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={15}
          x2={28.785}
          y1={31.537}
          y2={31.537}
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
          gradientTransform="matrix(-12.1383 25.2395 -26.6807 -69.0017 33 19.341)"
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
          gradientTransform="matrix(0 22.0747 -60.9881 0 30.367 36.554)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.283} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={15}
          x2={32.995}
          y1={18.59}
          y2={18.877}
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
          gradientTransform="matrix(-17.2332 4.16592 -10.7988 -42.4453 33 13.364)"
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
          gradientTransform="rotate(45 -28.678 16.121) scale(28.2843)"
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
          gradientTransform="matrix(0 14 -15.9562 0 13 37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.587} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.974} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
