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
        d="M18 17a9 9 0 0 1 9-9h33c9.941 0 18 8.059 18 18v53a9 9 0 0 1-9 9H27a9 9 0 0 1-9-9V17z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M27 10a7 7 0 0 0-7 7v56.343A8.983 8.983 0 0 1 27 70h42a7 7 0 0 0 7-7V26c0-8.837-7.163-16-16-16H27z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M27 10a7 7 0 0 0-7 7v56.343A8.983 8.983 0 0 1 27 70h42a7 7 0 0 0 7-7V26c0-8.837-7.163-16-16-16H27z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M76 68.657A8.983 8.983 0 0 1 69 72H27a7 7 0 1 0 0 14h42a7 7 0 0 0 7-7v-2.343A8.983 8.983 0 0 1 69 80H27a1 1 0 1 1 0-2h42a7 7 0 0 0 7-7v-2.343z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M76 68.657A8.983 8.983 0 0 1 69 72H27a7 7 0 1 0 0 14h42a7 7 0 0 0 7-7v-2.343A8.983 8.983 0 0 1 69 80H27a1 1 0 1 1 0-2h42a7 7 0 0 0 7-7v-2.343z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M54.513 22.09a1.5 1.5 0 0 1 .897 1.923l-12 33a1.5 1.5 0 1 1-2.82-1.025l12-33a1.5 1.5 0 0 1 1.923-.897z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M34.06 31.44a1.5 1.5 0 0 1 0 2.121l-6.439 6.44 6.44 6.439a1.5 1.5 0 0 1-2.122 2.121l-7.5-7.5a1.5 1.5 0 0 1 0-2.121l7.5-7.5a1.5 1.5 0 0 1 2.122 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M61.94 31.44a1.5 1.5 0 0 1 2.12 0l7.5 7.5a1.5 1.5 0 0 1 0 2.121l-7.5 7.5a1.5 1.5 0 0 1-2.12-2.121L68.378 40l-6.44-6.439a1.5 1.5 0 0 1 0-2.121z"
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
        <linearGradient
          id={iconId + '-g'}
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
          id={iconId + '-h'}
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
