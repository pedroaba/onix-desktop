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
        d="M3 6a3 3 0 0 1 3-3h17a6 6 0 0 1 6 6v17a3 3 0 0 1-3 3H9a6 6 0 0 1-6-6V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 6a2 2 0 0 1 2-2h17a5 5 0 0 1 5 5v17a2 2 0 0 1-2 2H9a5 5 0 0 1-5-5V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 6a2 2 0 0 1 2-2h17a5 5 0 0 1 5 5v17a2 2 0 0 1-2 2H9a5 5 0 0 1-5-5V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M6.5 10a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1h-19z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M12 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M16 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M17.5 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M21.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.396}
          x2={14.897}
          y1={3}
          y2={29.256}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={10.667}
          x2={13.703}
          y1={4}
          y2={28.287}
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
          gradientTransform="matrix(12.6667 19 -19 7.125 11.667 10.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={10.5}
          x2={17.177}
          y1={4}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={10.5}
          x2={17.177}
          y1={4}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={10.5}
          x2={17.177}
          y1={4}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={10.5}
          x2={17.177}
          y1={4}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={10.5}
          x2={17.177}
          y1={4}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={10.5}
          x2={17.177}
          y1={4}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
