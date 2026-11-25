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
        fillRule="evenodd"
        d="M34.5 44h-24A4.5 4.5 0 0 1 9 35.256V8.5A4.5 4.5 0 0 1 13.5 4H30a9 9 0 0 1 9 9v26.5a4.5 4.5 0 0 1-4.5 4.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 1 1-3.5-3.5.5.5 0 0 0 0-1h-24c-.169 0-.336.01-.5.028V8.5zM31.671 36H10.5a3.5 3.5 0 1 0 0 7h21.171A4.491 4.491 0 0 1 30 39.5c0-1.414.652-2.675 1.671-3.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M10 8.5A3.5 3.5 0 0 1 13.5 5H30a8 8 0 0 1 8 8v26.5a3.5 3.5 0 1 1-3.5-3.5.5.5 0 0 0 0-1h-24c-.169 0-.336.01-.5.028V8.5zM31.671 36H10.5a3.5 3.5 0 1 0 0 7h21.171A4.491 4.491 0 0 1 30 39.5c0-1.414.652-2.675 1.671-3.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M26.472 12.034a.75.75 0 0 1 .494.938l-4.5 14.5a.75.75 0 1 1-1.432-.444l4.5-14.5a.75.75 0 0 1 .938-.494z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M17.78 15.97a.75.75 0 0 1 0 1.06L14.81 20l2.97 2.97a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M30.22 15.97a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L33.19 20l-2.97-2.97a.75.75 0 0 1 0-1.06z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={16.656}
          x2={23.131}
          y1={4}
          y2={44.065}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={15.611}
          x2={21.458}
          y1={5}
          y2={43.16}
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
          gradientTransform="matrix(16.3611 30.0833 -24.5417 11.2812 16.903 14.896)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={17.813}
          x2={24.903}
          y1={9.333}
          y2={28.148}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={17.813}
          x2={24.903}
          y1={9.333}
          y2={28.148}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={17.813}
          x2={24.903}
          y1={9.333}
          y2={28.148}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
