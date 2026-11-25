'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M8.952 3.667A2.75 2.75 0 0 0 7.157 3H4.75A2.75 2.75 0 0 0 2 5.75v11.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25v-9.5A2.75 2.75 0 0 0 19.25 5h-8.312c-.283 0-.556-.101-.77-.286L8.952 3.667z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillOpacity={0.2}
        d="M8.952 3.667A2.75 2.75 0 0 0 7.157 3H4.75A2.75 2.75 0 0 0 2 5.75v11.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25v-9.5A2.75 2.75 0 0 0 19.25 5h-8.312c-.283 0-.556-.101-.77-.286L8.952 3.667z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8.75C3 7.784 3.784 7 4.75 7h3.417a2.75 2.75 0 0 0 1.526-.462l.114-.076A2.75 2.75 0 0 1 11.333 6h7.917c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25v-8.5z"
      />
      <path
        fill="#944600"
        d="M14.217 14.264a.84.84 0 0 0-.217.546v.16c0 .817.817 1.53 2 1.53s2-.713 2-1.53v-.16a.84.84 0 0 0-.217-.546.753.753 0 0 0-.558-.264h-2.45a.753.753 0 0 0-.558.264zM16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
      <path
        fill="#944600"
        d="M17.25 11.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12.5 15a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12.5 15a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M22 15a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5zm1 5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M20 18.5a.5.5 0 0 1-1 0v-1.793l-3.146 3.146a.5.5 0 1 1-.708-.707L18.293 16H16.5a.5.5 0 1 1 0-1h3l.1.01a.5.5 0 0 1 .4.49v3z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={6.5}
          x2={6.5}
          y1={20}
          y2={3}
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
          gradientTransform="matrix(0 2.2573 -7.85714 0 8.857 8.023)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={10.654}
          x2={7.707}
          y1={19.956}
          y2={5.993}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7AB40" />
          <stop offset={1} stopColor="#FFDD57" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={15.278}
          x2={16.543}
          y1={12.5}
          y2={22.62}
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
          gradientTransform="matrix(5.27778 7.91667 -7.91667 2.96875 15.694 15.104)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15.552}
          x2={17.033}
          y1={12}
          y2={23.108}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#898989" />
          <stop offset={1} stopColor="#636262" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={14.462}
          x2={17.282}
          y1={11.469}
          y2={19.534}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
