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
        d="M4 4a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 4a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 4a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M10.468 6.324a.5.5 0 0 0-.936 0l-1.5 4a.5.5 0 0 0 .936.352L9.222 10h1.557l.253.676a.5.5 0 0 0 .936-.352l-1.5-4zM10 7.924 10.404 9h-.807L10 7.924z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M13.5 8a.5.5 0 0 0 0 1h2a.5.5 0 1 0 0-1h-2z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M13.5 10a.5.5 0 0 0 0 1h2a.5.5 0 1 0 0-1h-2z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M8.5 12a.5.5 0 0 0 0 1h7a.5.5 0 1 0 0-1h-7z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M8.5 14a.5.5 0 0 0 0 1h2a.5.5 0 1 0 0-1h-2z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M8.5 16a.5.5 0 0 0 0 1h2a.5.5 0 1 0 0-1h-2z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M12.75 14a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-2.5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={9.167}
          x2={12.5}
          y1={2}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.889}
          x2={11.787}
          y1={3}
          y2={21.034}
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
          gradientTransform="matrix(7.38889 14.25 -11.0833 5.34375 9.472 7.688)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8}
          x2={16.07}
          y1={1.875}
          y2={19.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8}
          x2={16.07}
          y1={1.875}
          y2={19.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8}
          x2={16.07}
          y1={1.875}
          y2={19.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={8}
          x2={16.07}
          y1={1.875}
          y2={19.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={8}
          x2={16.07}
          y1={1.875}
          y2={19.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={8}
          x2={16.07}
          y1={1.875}
          y2={19.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={8}
          x2={16.07}
          y1={1.875}
          y2={19.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
