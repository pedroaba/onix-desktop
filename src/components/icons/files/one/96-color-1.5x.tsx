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
        d="M71.614 81.614A9.004 9.004 0 0 1 63 88H42c-13.255 0-24-10.745-24-24V23a9.004 9.004 0 0 1 6.386-8.614A9.004 9.004 0 0 1 33 8h27c9.941 0 18 8.059 18 18v47a9.004 9.004 0 0 1-6.386 8.614z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M33 10a7 7 0 0 0-7 7v47c0 8.837 7.163 16 16 16h27a7 7 0 0 0 7-7V26c0-8.837-7.163-16-16-16H33z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M33 10a7 7 0 0 0-7 7v47c0 8.837 7.163 16 16 16h27a7 7 0 0 0 7-7V26c0-8.837-7.163-16-16-16H33z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M24 17c0-.11.002-.22.006-.33A7 7 0 0 0 20 23v41c0 12.15 9.85 22 22 22h21a7 7 0 0 0 6.33-4.006A9.23 9.23 0 0 1 69 82H42c-9.941 0-18-8.059-18-18V17z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M24 17c0-.11.002-.22.006-.33A7 7 0 0 0 20 23v41c0 12.15 9.85 22 22 22h21a7 7 0 0 0 6.33-4.006A9.23 9.23 0 0 1 69 82H42c-9.941 0-18-8.059-18-18V17z"
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={9}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.8}
        rx={9}
      />
      <path
        fill="#fff"
        d="M36.773 82h-5.445L21.46 67.188a49.048 49.048 0 0 1-.701-1.154c-.19-.335-.334-.614-.434-.837h-.067c.022.424.039.96.05 1.606.011.648.017 1.406.017 2.276V82H15.23V58h5.812l9.502 14.343c.2.324.395.653.584.987.2.324.384.648.551.971h.067a22.664 22.664 0 0 1-.05-1.238c-.011-.558-.017-1.244-.017-2.059V58h5.094v24z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M69 62.999a4 4 0 0 1-4.001 4L48 66.994V59c0-5.335-3.798-9.781-8.837-10.786A8.016 8.016 0 0 1 41 48h28v14.999z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M52 32h17v16a4 4 0 0 1-4 4H52V32z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M65 23a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-4a4 4 0 0 0-4 4v6a4 4 0 0 1-4 4h-7.515c-2.017-2.443-5.07-4-8.485-4h-3.992V30.5a7.5 7.5 0 0 1 7.5-7.5H65z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.8}
        d="M65 23a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-4a4 4 0 0 0-4 4v6a4 4 0 0 1-4 4h-7.515c-2.017-2.443-5.07-4-8.485-4h-3.992V30.5a7.5 7.5 0 0 1 7.5-7.5H65z"
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
          gradientTransform="rotate(45 -57.355 32.243) scale(56.5685)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.072} stopColor="#AC13EB" />
          <stop offset={0.879} stopColor="#580087" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 28 -32.25 0 26 74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(57.088 0 0 25.3942 67.95 67)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={76.631}
          x2={55.416}
          y1={42.939}
          y2={32.522}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={69.756}
          x2={33.008}
          y1={32.49}
          y2={32.49}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DE68F2" />
          <stop offset={0.775} stopColor="#DE66FF" />
          <stop offset={1} stopColor="#FF84F7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-18.374 20.91837 -20.94835 -18.40034 69.756 23)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC5D0" />
          <stop offset={1} stopColor="#EBC5FF" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
