'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M10.73 6.443a1.5 1.5 0 0 1 2.122 0l.708.707a1.5 1.5 0 0 1 0 2.121l-.708.708a1.5 1.5 0 0 1-.464.314c.37.273.612.711.612 1.207v1a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 6 12.5v-4A1.5 1.5 0 0 1 7.5 7h1c.497 0 .936.242 1.209.614.073-.168.177-.326.314-.464l.707-.707zM7 12.5a.5.5 0 0 0 .5.5H9v-2H7v1.5zm3 .5h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H10v2zm0-3h.753l-.023-.02-.707-.709L10 9.245V10zM7.5 8a.5.5 0 0 0-.5.5V10h2V8.5a.5.5 0 0 0-.5-.5h-1z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.167}
          x2={8.388}
          y1={4}
          y2={16.211}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={6.889}
          x2={7.799}
          y1={5}
          y2={15.197}
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
          gradientTransform="matrix(7.38889 7.91667 -11.0833 2.96875 7.472 7.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={7.5}
          x2={11.977}
          y1={6}
          y2={13.042}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
