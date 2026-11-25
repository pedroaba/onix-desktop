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
        fillRule="evenodd"
        d="M48 27c11.598 0 21 9.402 21 21s-9.402 21-21 21H27.001L27 48c0-11.598 9.402-21 21-21zm0 13a8 8 0 0 0-8 8v8h8a8 8 0 1 0 0-16z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M69 48c0 11.598-9.402 21-21 21H27v-.067C27.038 61.784 32.844 56 40 56h8a8 8 0 0 0 7.99-7.588L56 48h13z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.56}
        d="M69 48c0 11.598-9.402 21-21 21H27v-.067C27.038 61.784 32.844 56 40 56h8a8 8 0 0 0 7.99-7.588L56 48h13z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M69 48c0 11.598-9.402 21-21 21H27v-.067C27.038 61.784 32.844 56 40 56h8a8 8 0 0 0 7.99-7.588L56 48h13z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M48 27c5.799 0 11.05 2.35 14.85 6.15l-9.193 9.193A8 8 0 0 0 40 48v8l-.004.336C39.818 63.36 34.067 68.999 27 68.999V48c0-11.598 9.402-21 21-21z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M48 27c5.799 0 11.05 2.35 14.85 6.15l-9.193 9.193A8 8 0 0 0 40 48v8l-.004.336C39.818 63.36 34.067 68.999 27 68.999V48c0-11.598 9.402-21 21-21z"
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
          x1={52.62}
          x2={45.69}
          y1={41.91}
          y2={70.26}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={40.65}
          x2={59.13}
          y1={65.85}
          y2={61.65}
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
          gradientTransform="matrix(8.39981 5.775 -10.1495 14.7632 34.35 60.075)"
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
          gradientTransform="matrix(15.5396 9.66 -16.9773 27.3119 31.83 58.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={35.597}
          x2={46.402}
          y1={49.611}
          y2={34.475}
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
          gradientTransform="matrix(28.0974 -4.86029 12.6795 74.4478 23.435 40.102)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
