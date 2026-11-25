'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 16a6 6 0 0 1 6-6h38c6.627 0 12 5.373 12 12v26a6 6 0 0 1-6 6H16C9.373 54 4 48.627 4 42V16z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 16a5 5 0 0 1 5-5h38c6.075 0 11 4.925 11 11v26a5 5 0 0 1-5 5H16C9.925 53 5 48.075 5 42V16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 16a5 5 0 0 1 5-5h38c6.075 0 11 4.925 11 11v26a5 5 0 0 1-5 5H16C9.925 53 5 48.075 5 42V16z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M26.5 25a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M28.165 33.009c1.566 0 2.835 1.29 2.835 2.88v.44c0 3.785-3.564 7.68-9.5 7.68-5.935 0-9.5-3.895-9.5-7.68v-.44c0-1.59 1.27-2.88 2.835-2.88h13.33z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M36 24.009a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H36z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M36 31.009a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H36z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M36 38.009a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H36z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={22.083}
          x2={26.77}
          y1={10}
          y2={54.731}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={20}
          x2={24.157}
          y1={11}
          y2={53.763}
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
          gradientTransform="matrix(28.5 33.25 -42.75 12.4687 22.25 21.938)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={20}
          x2={34.361}
          y1={13.998}
          y2={44.005}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={20}
          x2={34.361}
          y1={13.998}
          y2={44.005}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={20}
          x2={34.361}
          y1={13.998}
          y2={44.005}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={20}
          x2={34.361}
          y1={13.998}
          y2={44.005}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={20}
          x2={34.361}
          y1={13.998}
          y2={44.005}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
