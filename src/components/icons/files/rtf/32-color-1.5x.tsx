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
        d="M9 8.5A4.5 4.5 0 0 1 13.5 4H30a9 9 0 0 1 9 9v26.5a4.5 4.5 0 0 1-4.5 4.5H18a9 9 0 0 1-9-9V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 0 1-3.5 3.5H18a8 8 0 0 1-8-8V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 0 1-3.5 3.5H18a8 8 0 0 1-8-8V8.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M21.691 13.457a.75.75 0 0 0-1.381 0l-4.25 10.027a.75.75 0 1 0 1.38.585L18.743 21h4.517l1.301 3.069a.75.75 0 1 0 1.381-.585l-4.25-10.027zm.932 6.043L21 15.672 19.378 19.5h3.245z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M27 18.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M27 23.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M16 28.75a.75.75 0 0 1 .75-.75h5.188a.75.75 0 0 1 0 1.5h-5.187a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M16 33.75a.75.75 0 0 1 .75-.75h5.188a.75.75 0 0 1 0 1.5h-5.187a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M26 28a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2h-4z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={18.688}
          x2={25.772}
          y1={4}
          y2={43.852}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={17.778}
          x2={24.218}
          y1={5}
          y2={42.963}
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
          gradientTransform="matrix(14.7778 30.0833 -22.1667 11.2812 18.944 14.896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={16}
          x2={31.534}
          y1={4.938}
          y2={39.786}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={16}
          x2={31.534}
          y1={4.938}
          y2={39.786}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={16}
          x2={31.534}
          y1={4.938}
          y2={39.786}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={16}
          x2={31.534}
          y1={4.938}
          y2={39.786}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={16}
          x2={31.534}
          y1={4.938}
          y2={39.786}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={16}
          x2={31.534}
          y1={4.938}
          y2={39.786}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
