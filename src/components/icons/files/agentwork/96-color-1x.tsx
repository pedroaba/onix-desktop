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
        d="M18 17a9 9 0 019-9h33c9.941 0 18 8.059 18 18v53a9 9 0 01-9 9H27a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M27 10a7 7 0 00-7 7v56.343A8.98 8.98 0 0127 70h42a7 7 0 007-7V26c0-8.837-7.163-16-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M27 10a7 7 0 00-7 7v56.343A8.98 8.98 0 0127 70h42a7 7 0 007-7V26c0-8.837-7.163-16-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M76 68.657A8.98 8.98 0 0169 72H27a7 7 0 100 14h42a7 7 0 007-7v-2.343A8.98 8.98 0 0169 80H27a1 1 0 110-2h42a7 7 0 007-7z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M76 68.657A8.98 8.98 0 0169 72H27a7 7 0 100 14h42a7 7 0 007-7v-2.343A8.98 8.98 0 0169 80H27a1 1 0 110-2h42a7 7 0 007-7z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M58.142 23.325A4.63 4.63 0 0053.7 20h-1.35a4.63 4.63 0 00-4.554 3.794L45.48 36.407l.575-1.965a4.63 4.63 0 014.444-3.33h7.853l3.294 1.282 3.175-1.283h-.926a4.63 4.63 0 01-4.443-3.325z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M38.33 56.656A4.63 4.63 0 0042.779 60h2.87a4.63 4.63 0 004.629-4.51l.312-12.163-.654 2.233a4.63 4.63 0 01-4.443 3.329h-7.919l-2.823-1.532-3.057 1.532h.912a4.63 4.63 0 014.447 3.344z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M53.5 20H37.46c-4.583 0-7.332 6.057-9.165 12.113-2.172 7.176-5.014 16.772 3.207 16.772h6.926a4.63 4.63 0 004.456-3.358 2079 2079 0 014.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C51.08 20.714 52.086 20 53.5 20"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M53.5 20H37.46c-4.583 0-7.332 6.057-9.165 12.113-2.172 7.176-5.014 16.772 3.207 16.772h6.926a4.63 4.63 0 004.456-3.358 2079 2079 0 014.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C51.08 20.714 52.086 20 53.5 20"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M42.498 60h16.04c4.582 0 7.332-6.058 9.165-12.116 2.171-7.176 5.013-16.775-3.208-16.775h-6.926a4.63 4.63 0 00-4.455 3.359 2085 2085 0 01-4.972 17.159c-.842 2.843-1.544 5.285-2.62 6.806-.605.853-1.61 1.567-3.024 1.567"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M42.498 60h16.04c4.582 0 7.332-6.058 9.165-12.116 2.171-7.176 5.013-16.775-3.208-16.775h-6.926a4.63 4.63 0 00-4.455 3.359 2085 2085 0 01-4.972 17.159c-.842 2.843-1.544 5.285-2.62 6.806-.605.853-1.61 1.567-3.024 1.567"
      />
      <defs>
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
          id={iconId + '-e'}
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
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-10.9604 -13.3893 -11.8337 11.2305 62.005 36.514)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.096} stopColor="#00AEFF" />
          <stop offset={0.773} stopColor="#2253CE" />
          <stop offset={1} stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9.88029 12.5737 11.6634 -10.2629 35.121 48.817)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB657" />
          <stop offset={0.634} stopColor="#FF5F3D" />
          <stop offset={0.923} stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-1.45314 -25.59378 143.75448 -8.16196 37.063 48.875)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.03} stopColor="#FFC800" />
          <stop offset={0.31} stopColor="#98BD42" />
          <stop offset={0.49} stopColor="#52B471" />
          <stop offset={0.844} stopColor="#0D91E1" />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-12.6712 36.2356 -43.1249 -15.9926 65.319 28.28)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
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
        <linearGradient
          id={iconId + '-d'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={38.5}
          x2={39.75}
          y1={20}
          y2={48.885}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={66.586}
          x2={66.57}
          y1={29.346}
          y2={37.214}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
