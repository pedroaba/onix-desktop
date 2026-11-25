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
        d="M8 27a9 9 0 0 1 9-9h53c9.941 0 18 8.059 18 18v33a9 9 0 0 1-9 9H26c-9.941 0-18-8.059-18-18V27z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M40 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M41.748 50C44.096 50 46 51.934 46 54.32v.16C46 60.158 40.903 66 32 66c-8.903 0-14-5.842-14-11.52v-.16c0-2.386 1.904-4.32 4.253-4.32h19.495z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M54.5 39h22a1.5 1.5 0 0 0 0-3h-22a1.5 1.5 0 0 0 0 3z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M54.5 49.5h22a1.5 1.5 0 0 0 0-3h-22a1.5 1.5 0 0 0 0 3z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M54.5 60h22a1.5 1.5 0 0 0 0-3h-22a1.5 1.5 0 0 0 0 3z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.833}
          x2={39.939}
          y1={18}
          y2={79.056}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={31.111}
          x2={36.368}
          y1={20}
          y2={77.071}
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
          gradientTransform="matrix(40.1111 44.3333 -60.1667 16.625 34.278 34.583)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={30}
          x2={51.529}
          y1={21}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={30}
          x2={51.529}
          y1={21}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={30}
          x2={51.529}
          y1={21}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={30}
          x2={51.529}
          y1={21}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={30}
          x2={51.529}
          y1={21}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
