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
        fillRule="evenodd"
        d="M69 88H21a9 9 0 0 1-9-9 9.004 9.004 0 0 1 6-8.488V17a9 9 0 0 1 9-9h33c9.941 0 18 8.059 18 18v53a9 9 0 0 1-9 9z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M20 17a7 7 0 0 1 7-7h33c8.837 0 16 7.163 16 16v53a7 7 0 1 1-7-7 1 1 0 1 0 0-2H21c-.338 0-.672.019-1 .055V17zm43.343 55H21a7 7 0 1 0 0 14h42.343A8.983 8.983 0 0 1 60 79a8.983 8.983 0 0 1 3.343-7z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M20 17a7 7 0 0 1 7-7h33c8.837 0 16 7.163 16 16v53a7 7 0 1 1-7-7 1 1 0 1 0 0-2H21c-.338 0-.672.019-1 .055V17zm43.343 55H21a7 7 0 1 0 0 14h42.343A8.983 8.983 0 0 1 60 79a8.983 8.983 0 0 1 3.343-7z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M54.513 22.09a1.5 1.5 0 0 1 .897 1.923l-12 33a1.5 1.5 0 1 1-2.82-1.025l12-33a1.5 1.5 0 0 1 1.923-.897z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M34.06 31.44a1.5 1.5 0 0 1 0 2.121l-6.439 6.44 6.44 6.439a1.5 1.5 0 0 1-2.122 2.121l-7.5-7.5a1.5 1.5 0 0 1 0-2.121l7.5-7.5a1.5 1.5 0 0 1 2.122 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M61.94 31.44a1.5 1.5 0 0 1 2.12 0l7.5 7.5a1.5 1.5 0 0 1 0 2.121l-7.5 7.5a1.5 1.5 0 0 1-2.12-2.121L68.378 40l-6.44-6.439a1.5 1.5 0 0 1 0-2.121z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.313}
          x2={46.263}
          y1={8}
          y2={88.129}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={31.222}
          x2={42.916}
          y1={10}
          y2={86.319}
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
          gradientTransform="matrix(32.7222 60.1667 -49.0833 22.5625 33.806 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={34.5}
          x2={50.824}
          y1={16}
          y2={58.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={34.5}
          x2={50.824}
          y1={16}
          y2={58.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={34.5}
          x2={50.824}
          y1={16}
          y2={58.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
