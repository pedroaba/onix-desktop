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
        d="M44.7 30.6a1.5 1.5 0 0 0-2.7.9v12a1.5 1.5 0 0 0 3 0V36l1.8 2.4a1.5 1.5 0 0 0 2.4 0L51 36v7.5a1.5 1.5 0 0 0 3 0v-12a1.5 1.5 0 0 0-2.7-.9L48 35l-3.3-4.4z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M25.5 54a1.5 1.5 0 0 0 0 3h45a1.5 1.5 0 0 0 0-3h-45z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M25.5 63a1.5 1.5 0 0 0 0 3h45a1.5 1.5 0 0 0 0-3h-45z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M58.5 30a1.5 1.5 0 0 1 1.5 1.5V42h4.5a1.5 1.5 0 0 1 0 3h-6a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M32.842 30.83a1.5 1.5 0 1 0-2.684 1.341l2.665 5.33-2.665 5.329a1.5 1.5 0 1 0 2.684 1.341l1.658-3.316 1.658 3.316a1.5 1.5 0 1 0 2.684-1.341l-2.665-5.33 2.665-5.329a1.5 1.5 0 1 0-2.684-1.341L34.5 34.146l-1.658-3.316z"
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
          x1={28.5}
          x2={50.823}
          y1={15}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={28.5}
          x2={50.823}
          y1={15}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={28.5}
          x2={50.823}
          y1={15}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={28.5}
          x2={50.823}
          y1={15}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={28.5}
          x2={50.823}
          y1={15}
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
