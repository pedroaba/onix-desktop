'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 6a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v24a4 4 0 0 1-4 4H14a8 8 0 0 1-8-8V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v24a3 3 0 0 1-3 3H14a7 7 0 0 1-7-7V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v24a3 3 0 0 1-3 3H14a7 7 0 0 1-7-7V6z"
      />
      <path
        fill="#D20112"
        fillRule="evenodd"
        d="M15.25 10c.382 0 .807.164 1.137.444a1.695 1.695 0 0 1 0 2.612c-.33.28-.755.444-1.137.444H14v2a.5.5 0 0 1-1 0v-5l.01-.1a.5.5 0 0 1 .49-.4h1.75zM14 12.5h1.25a.833.833 0 0 0 .488-.206.696.696 0 0 0 0-1.088.833.833 0 0 0-.488-.206H14v1.5zm5.5-2.5c.683 0 1.314.37 1.759.902.45.539.741 1.277.741 2.098s-.292 1.56-.741 2.098c-.445.532-1.076.902-1.759.902h-1a.5.5 0 0 1-.5-.5v-5l.01-.1a.5.5 0 0 1 .49-.4h1zm-.5 5h.5c.316 0 .686-.177.991-.543.3-.36.509-.872.509-1.457 0-.585-.208-1.097-.509-1.457-.305-.366-.675-.543-.991-.543H19v4z"
        clipRule="evenodd"
      />
      <path
        fill="#D20112"
        d="M26.5 10a.5.5 0 0 1 0 1H24v1.5h1.5a.5.5 0 0 1 0 1H24v2a.5.5 0 0 1-1 0v-5l.01-.1a.5.5 0 0 1 .49-.4h3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M26.5 29a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13zm0-4a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13zm0-4a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={15.042}
          x2={21.203}
          y1={2}
          y2={37.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
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
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={17.521}
          x2={18.308}
          y1={21}
          y2={30.183}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898989" />
          <stop offset={1} stopColor="#636262" />
        </linearGradient>
      </defs>
    </svg>
  )
}
