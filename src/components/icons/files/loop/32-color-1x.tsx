'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M5 5a3 3 0 0 1 3-3h13a6 6 0 0 1 6 6v19a3 3 0 0 1-3 3H11a6 6 0 0 1-6-6V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 5a2 2 0 0 1 2-2h13a5 5 0 0 1 5 5v19a2 2 0 0 1-2 2H11a5 5 0 0 1-5-5V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M6 5a2 2 0 0 1 2-2h13a5 5 0 0 1 5 5v19a2 2 0 0 1-2 2H11a5 5 0 0 1-5-5V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16 9a7 7 0 0 0-7 7v7h7a7 7 0 1 0 0-14zm0 4.55a2.45 2.45 0 1 1 0 4.9h-2.45V16A2.45 2.45 0 0 1 16 13.55z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M23 16a7 7 0 0 1-7 7H9a4.55 4.55 0 0 1 4.55-4.55H16A2.45 2.45 0 0 0 18.45 16H23z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.56}
        d="M23 16a7 7 0 0 1-7 7H9a4.55 4.55 0 0 1 4.55-4.55H16A2.45 2.45 0 0 0 18.45 16H23z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M23 16a7 7 0 0 1-7 7H9a4.55 4.55 0 0 1 4.55-4.55H16A2.45 2.45 0 0 0 18.45 16H23z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M16.019 9C12.142 9 9 12.134 9 16v7h.002a4.556 4.556 0 0 0 4.56-4.535l.015-.015h-.015V16c0-1.353 1.1-2.45 2.457-2.45.685 0 1.305.28 1.75.731L21 11.07A7.006 7.006 0 0 0 16.019 9z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M16.019 9C12.142 9 9 12.134 9 16v7h.002a4.556 4.556 0 0 0 4.56-4.535l.015-.015h-.015V16c0-1.353 1.1-2.45 2.457-2.45.685 0 1.305.28 1.75.731L21 11.07A7.006 7.006 0 0 0 16.019 9z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.104}
          x2={16.851}
          y1={2}
          y2={29.972}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.556}
          x2={15.786}
          y1={3}
          y2={29.035}
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
          gradientTransform="matrix(10.5556 20.5833 -15.8333 7.71875 12.389 9.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={17.54}
          x2={15.23}
          y1={13.97}
          y2={23.42}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={13.55}
          x2={19.71}
          y1={21.95}
          y2={20.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51E6FF" />
          <stop offset={1} stopColor="#71D4FF" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(2.8 1.925 -3.38323 4.92106 11.45 20.025)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.7} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.18 3.22 -5.65925 9.104 10.61 19.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={11.878}
          x2={15.444}
          y1={16.49}
          y2={11.441}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#AB5ADD" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9.40509 -1.61 4.24424 24.6613 7.807 13.34)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
