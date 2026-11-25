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
        d="M17.766 7.427A5.25 5.25 0 0 0 14.168 6H9.25A5.25 5.25 0 0 0 4 11.25v22.5C4 36.65 6.35 39 9.25 39h29.5c2.9 0 5.25-2.35 5.25-5.25v-18.5c0-2.9-2.35-5.25-5.25-5.25H21.392a2.25 2.25 0 0 1-1.542-.612l-2.084-1.961z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M17.766 7.427A5.25 5.25 0 0 0 14.168 6H9.25A5.25 5.25 0 0 0 4 11.25v22.5C4 36.65 6.35 39 9.25 39h29.5c2.9 0 5.25-2.35 5.25-5.25v-18.5c0-2.9-2.35-5.25-5.25-5.25H21.392a2.25 2.25 0 0 1-1.542-.612l-2.084-1.961z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 19.5A4.5 4.5 0 0 1 9.5 15H15a5 5 0 0 0 4-2 5 5 0 0 1 4-2h15.5a4.5 4.5 0 0 1 4.5 4.5v18a4.5 4.5 0 0 1-4.5 4.5h-29A4.5 4.5 0 0 1 5 33.5v-14z"
      />
      <path
        fill="#944600"
        d="M33 25.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm3.5 2.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-1 2.594V30.5A2.49 2.49 0 0 0 35 29h3.273c.676 0 1.225.549 1.225 1.225 0 0 0 2.275-3 2.275-.598 0-1.077-.09-1.46-.235a3.86 3.86 0 0 0 .447-1.413c.006-.062.01-.115.012-.159l.003-.1zm-1-.094A1.5 1.5 0 0 0 33 29h-5a1.5 1.5 0 0 0-1.5 1.5v.075s0 2.925 4 2.925c3.812 0 3.991-2.656 4-2.906V30.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M32.5 32.5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M32.5 32.5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M46 32.5a2.5 2.5 0 0 0-2.5-2.5h-8a2.5 2.5 0 0 0-2.5 2.5v8a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-8zm1 8a3.5 3.5 0 0 1-3.5 3.5h-8a3.5 3.5 0 0 1-3.5-3.5v-8a3.5 3.5 0 0 1 3.5-3.5h8a3.5 3.5 0 0 1 3.5 3.5v8z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M43 38.5a.5.5 0 0 1-1 0v-3.793l-5.147 5.146a.5.5 0 1 1-.707-.706L41.293 34H37.5a.5.5 0 1 1 0-1h5l.1.01a.5.5 0 0 1 .4.49v5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.5}
          x2={13.5}
          y1={39}
          y2={6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BA7300" />
          <stop offset={0.221} stopColor="#C77B00" />
          <stop offset={0.716} stopColor="#D48300" />
          <stop offset={1} stopColor="#D48300" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 4.38181 -15 0 18 15.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={21.308}
          x2={14.972}
          y1={39.985}
          y2={11.082}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={36.389}
          x2={38.16}
          y1={29.5}
          y2={43.667}
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
          gradientTransform="matrix(7.38889 11.0833 -11.0833 4.15625 36.972 33.146)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={36.844}
          x2={38.863}
          y1={29}
          y2={44.147}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898989" />
          <stop offset={1} stopColor="#636262" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={35.782}
          x2={39.542}
          y1={28.792}
          y2={39.545}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
