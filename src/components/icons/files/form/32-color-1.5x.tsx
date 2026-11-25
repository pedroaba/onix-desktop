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
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 0 1-3.5 3.5H18a8 8 0 0 1-8-8V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 0 1-3.5 3.5H18a8 8 0 0 1-8-8V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M33 33.167C33 34.179 32.18 35 31.167 35H24v-5.5a5.5 5.5 0 0 0-5.5-5.5h-2.8a5.749 5.749 0 0 1 5.05-3H33v12.167z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        d="M33 33.167C33 34.179 32.18 35 31.167 35H24v-5.5a5.5 5.5 0 0 0-5.5-5.5h-2.8a5.749 5.749 0 0 1 5.05-3H33v12.167z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M31 13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H18.689l-.092.002L18.5 24H15v-7.311A3.689 3.689 0 0 1 18.689 13H31z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M31 13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H18.689l-.092.002L18.5 24H15v-7.311A3.689 3.689 0 0 1 18.689 13H31z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M27.5 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M27.5 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M29.5 27a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h4z"
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
        fillOpacity={0.6}
        rx={4.5}
      />
      <path
        fill="#fff"
        d="M16.46 31.243h-4.224v2.887h3.883v2.226h-3.883V41H9.539V29h6.922v2.243z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={18.688}
          x2={25.772}
          y1={4}
          y2={43.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={17.778}
          x2={24.218}
          y1={5}
          y2={42.963}
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
          gradientTransform="matrix(14.7778 30.0833 -22.1667 11.2812 18.944 14.896)"
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
          gradientTransform="matrix(-11.4446 -19 17.3738 -9.66779 28.838 37.5)"
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
          gradientTransform="matrix(-7.47799 -7.1875 5.79017 -5.56296 19.995 23.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={0.992} stopColor="#06517B" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15.405}
          x2={34.657}
          y1={24.915}
          y2={16.748}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.227} stopColor="#15B4D5" />
          <stop offset={1} stopColor="#43E5CA" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={19.959}
          x2={15}
          y1={19.854}
          y2={19.854}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#29CBDC" stopOpacity={0} />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={25}
          x2={29.5}
          y1={15.5}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={26.071}
          x2={28.643}
          y1={16.786}
          y2={20.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={16.62}
          x2={18.072}
          y1={27.357}
          y2={33.903}
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
          gradientTransform="rotate(45 -28.678 16.121) scale(28.2843)"
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
          gradientTransform="matrix(0 14 -15.9375 0 13 37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
