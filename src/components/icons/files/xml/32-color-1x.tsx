'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 8a3 3 0 0 1 3-3h19a6 6 0 0 1 6 6v13a3 3 0 0 1-3 3H8a6 6 0 0 1-6-6V8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M14.9 10.2a.5.5 0 0 0-.9.3v4a.5.5 0 1 0 1 0V12l.6.8a.5.5 0 0 0 .8 0l.6-.8v2.5a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.9-.3L16 11.667 14.9 10.2z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8.5 18a.5.5 0 1 0 0 1h15a.5.5 0 0 0 0-1h-15z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M8.5 21a.5.5 0 1 0 0 1h15a.5.5 0 0 0 0-1h-15z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M19.5 10a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M10.947 10.277a.5.5 0 0 0-.894.447l.888 1.776-.888 1.777a.5.5 0 0 0 .894.447l.553-1.106.553 1.106a.5.5 0 1 0 .894-.447L12.06 12.5l.888-1.776a.5.5 0 0 0-.894-.447l-.553 1.105-.553-1.105z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.042}
          x2={13.385}
          y1={5}
          y2={27.366}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={10.222}
          x2={12.181}
          y1={6}
          y2={26.367}
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
          gradientTransform="matrix(13.7222 15.8333 -20.5833 5.9375 11.306 11.208)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={9.5}
          x2={16.941}
          y1={5}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={9.5}
          x2={16.941}
          y1={5}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={9.5}
          x2={16.941}
          y1={5}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={9.5}
          x2={16.941}
          y1={5}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={9.5}
          x2={16.941}
          y1={5}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
