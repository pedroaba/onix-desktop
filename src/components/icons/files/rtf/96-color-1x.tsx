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
        d="M40.385 24.923a1.5 1.5 0 0 0-2.77 0l-7.5 18a1.5 1.5 0 1 0 2.77 1.154L35 39h8l2.116 5.077a1.5 1.5 0 1 0 2.769-1.154l-7.5-18zM39 29.4l2.75 6.6h-5.5L39 29.4z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M52.5 33a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3h-12z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M52.5 42a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3h-12z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M31.5 51a1.5 1.5 0 0 0 0 3h33a1.5 1.5 0 0 0 0-3h-33z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M31.5 60a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3h-12z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M31.5 69a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3h-12z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M51 60a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H51z"
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
          x1={30}
          x2={64.5}
          y1={6}
          y2={84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={30}
          x2={64.5}
          y1={6}
          y2={84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={30}
          x2={64.5}
          y1={6}
          y2={84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={30}
          x2={64.5}
          y1={6}
          y2={84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={30}
          x2={64.5}
          y1={6}
          y2={84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={30}
          x2={64.5}
          y1={6}
          y2={84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={30}
          x2={64.5}
          y1={6}
          y2={84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
