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
        d="M6 10.5A4.5 4.5 0 0 1 10.5 6H33a9 9 0 0 1 9 9v22.5a4.5 4.5 0 0 1-4.5 4.5H15a9 9 0 0 1-9-9V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 10.5A3.5 3.5 0 0 1 10.5 7H33a8 8 0 0 1 8 8v22.5a3.5 3.5 0 0 1-3.5 3.5H15a8 8 0 0 1-8-8V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 10.5A3.5 3.5 0 0 1 10.5 7H33a8 8 0 0 1 8 8v22.5a3.5 3.5 0 0 1-3.5 3.5H15a8 8 0 0 1-8-8V10.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M8.999 16a.75.75 0 0 0 0 1.5h30a.75.75 0 0 0 0-1.5h-30z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M16 25a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M18 30a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M24 25a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M26 30a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M32 25a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={17.625}
          x2={22.472}
          y1={6}
          y2={42.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={16.444}
          x2={20.745}
          y1={7}
          y2={41.407}
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
          gradientTransform="matrix(17.9444 26.9167 -26.9167 10.0937 17.861 15.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={15.336}
          x2={23.14}
          y1={8}
          y2={32.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={15.336}
          x2={23.14}
          y1={8}
          y2={32.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15.336}
          x2={23.14}
          y1={8}
          y2={32.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={15.336}
          x2={23.14}
          y1={8}
          y2={32.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={15.336}
          x2={23.14}
          y1={8}
          y2={32.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={15.336}
          x2={23.14}
          y1={8}
          y2={32.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
