'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 12.5V3.49994C4.057 4.42594 5.864 5.01294 8 5.01294C10.136 5.01294 11.943 4.42594 13 3.49994V12.5C13 13.925 10.851 15 8 15C5.149 15 3 13.925 3 12.5Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9533)' + ''}
      />
      <path
        d="M3 12.5V3.49994C4.057 4.42594 5.864 5.01294 8 5.01294C10.136 5.01294 11.943 4.42594 13 3.49994V12.5C13 13.925 10.851 15 8 15C5.149 15 3 13.925 3 12.5Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9533)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M13 3.5C13 4.88071 10.7614 6 8 6C5.23858 6 3 4.88071 3 3.5C3 2.11929 5.23858 1 8 1C10.7614 1 13 2.11929 13 3.5Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9533)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9533'}
          x1={5.36077}
          y1={0.909217}
          x2={12.1143}
          y2={13.2418}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29C3FF" />
          <stop offset={1} stopColor="#367AF2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9533'}
          x1={9.54762}
          y1={4.91223}
          x2={12.1361}
          y2={16.0964}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.53288} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9533'}
          x1={16.75}
          y1={8.5}
          x2={10.9716}
          y2={-2.01767}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#58AAFE" />
          <stop offset={1} stopColor="#6CE0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
