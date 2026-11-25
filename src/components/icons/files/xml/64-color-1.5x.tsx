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
        d="M29.8 20.4a1 1 0 0 0-1.8.6v8a1 1 0 1 0 2 0v-5l1.2 1.6a1 1 0 0 0 1.6 0L34 24v5a1 1 0 1 0 2 0v-8a1 1 0 0 0-1.8-.6L32 23.333 29.8 20.4z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M17 36a1 1 0 1 0 0 2h30a1 1 0 0 0 0-2H17z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M17 42a1 1 0 1 0 0 2h30a1 1 0 0 0 0-2H17z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M39 20a1 1 0 0 1 1 1v7h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M21.894 20.553a1 1 0 1 0-1.788.894L21.882 25l-1.776 3.553a1 1 0 1 0 1.788.894L23 27.237l1.105 2.21a1 1 0 0 0 1.79-.894L24.117 25l1.776-3.553a1 1 0 1 0-1.788-.894L23 22.764l-1.106-2.211z"
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
          x1={19}
          x2={33.882}
          y1={10}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={19}
          x2={33.882}
          y1={10}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={19}
          x2={33.882}
          y1={10}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={19}
          x2={33.882}
          y1={10}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={19}
          x2={33.882}
          y1={10}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
