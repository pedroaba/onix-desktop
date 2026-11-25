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
        d="M12 21a9 9 0 0 1 9-9h45c9.941 0 18 8.059 18 18v45a9 9 0 0 1-9 9H30c-9.941 0-18-8.059-18-18V21z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M14 21a7 7 0 0 1 7-7h45c8.837 0 16 7.163 16 16v45a7 7 0 0 1-7 7H30c-8.837 0-16-7.163-16-16V21z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M14 21a7 7 0 0 1 7-7h45c8.837 0 16 7.163 16 16v45a7 7 0 0 1-7 7H30c-8.837 0-16-7.163-16-16V21z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M50.413 28.496a6.5 6.5 0 0 0-4.856 0l-13.485 5.43A6.5 6.5 0 0 0 28 39.956v16.067a6.5 6.5 0 0 0 4.064 6.026L45.549 67.5a6.5 6.5 0 0 0 4.872 0l13.485-5.45a6.5 6.5 0 0 0 4.063-6.027V39.956a6.5 6.5 0 0 0-4.071-6.03l-13.485-5.43zM31.136 38.99a3.485 3.485 0 0 0-.136.966v16.067a3.5 3.5 0 0 0 2.188 3.245l13.485 5.45a3.5 3.5 0 0 0 2.623 0l13.485-5.45a3.5 3.5 0 0 0 2.188-3.245V39.956c0-.333-.046-.657-.135-.966l-15.35 7.104v12.58a1.5 1.5 0 0 1-3 0v-12.58L31.136 38.99z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={35.25}
          x2={44.944}
          y1={12}
          y2={84.707}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={32.889}
          x2={41.491}
          y1={14}
          y2={82.814}
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
          gradientTransform="matrix(35.8889 53.8333 -53.8333 20.1875 35.722 31.708)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={33.71}
          x2={57.139}
          y1={18.018}
          y2={67.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
