'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 5.5A3.5 3.5 0 0 1 9.5 2H23a7 7 0 0 1 7 7v21.5a3.5 3.5 0 0 1-3.5 3.5H13a7 7 0 0 1-7-7V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 5.5A2.5 2.5 0 0 1 9.5 3H23a6 6 0 0 1 6 6v21.5a2.5 2.5 0 0 1-2.5 2.5H13a6 6 0 0 1-6-6V5.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M14.462 10.308a.5.5 0 0 0-.923 0l-2.5 6a.5.5 0 1 0 .923.384L12.667 15h2.667l.705 1.692a.5.5 0 1 0 .923-.384l-2.5-6zM14 11.8l.917 2.2h-1.833L14 11.8z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M19.5 13a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M19.5 16a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M11.5 19a.5.5 0 1 0 0 1h13a.5.5 0 0 0 0-1h-13z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M11.5 22a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M11.5 25a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M20 22a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={11}
          x2={21.304}
          y1={4}
          y2={31.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={11}
          x2={21.304}
          y1={4}
          y2={31.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={11}
          x2={21.304}
          y1={4}
          y2={31.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={11}
          x2={21.304}
          y1={4}
          y2={31.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={11}
          x2={21.304}
          y1={4}
          y2={31.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={11}
          x2={21.304}
          y1={4}
          y2={31.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={11}
          x2={21.304}
          y1={4}
          y2={31.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
