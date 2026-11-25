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
        d="m14.94 15.06-5.38 5.38c-.944.944-.275 2.56 1.061 2.56H21.38c1.336 0 2.005-1.616 1.06-2.561l-5.38-5.379a1.5 1.5 0 0 0-2.12 0z"
      />
      <circle cx={21} cy={11} r={2} fill={'url(#' + iconId + '-e)' + ''} />
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
          x1={9}
          x2={15.538}
          y1={11.5}
          y2={29.611}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={19}
          x2={23.345}
          y1={6.5}
          y2={14.82}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
