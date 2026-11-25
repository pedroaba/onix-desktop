'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M1 4a2 2 0 0 1 2-2h8.5A3.5 3.5 0 0 1 15 5.5V12a2 2 0 0 1-2 2H4.5A3.5 3.5 0 0 1 1 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M8 4a4 4 0 0 1 0 8l-.102-.01a.495.495 0 0 1-.313-.21A.5.5 0 0 1 8 11c.038 0 .117-.016.233-.13.119-.118.249-.313.369-.592.194-.453.333-1.07.38-1.778H8a.5.5 0 0 1 0-1h.981c-.046-.707-.185-1.325-.38-1.778-.12-.28-.249-.474-.368-.591C8.117 5.016 8.038 5 8 5c-.062 0-.245.058-.469.454-.21.371-.386.929-.472 1.61a.5.5 0 0 1-.993-.127c.07-.548.195-1.059.368-1.495a3.006 3.006 0 0 0-1.31 1.7.5.5 0 0 1-.959-.285A4.003 4.003 0 0 1 8 4zM6.474 8.502a.498.498 0 0 1 .523.522c0 .009.003.017.003.026v1.45a.5.5 0 0 1-1 0v-.293l-1.146 1.146a.5.5 0 1 1-.708-.707L5.293 9.5H5a.5.5 0 0 1 0-1h1.45l.024.002zm3.51-.002c-.045.772-.192 1.482-.419 2.055A2.997 2.997 0 0 0 10.958 8.5h-.975zm-.419-3.056c.227.573.374 1.284.418 2.056h.975a2.998 2.998 0 0 0-1.393-2.056z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.521}
          x2={6.912}
          y1={2}
          y2={14.174}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.333}
          x2={6.392}
          y1={3}
          y2={13.168}
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
          gradientTransform="matrix(6.33333 7.91667 -9.5 2.96875 5.833 5.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={5.5}
          x2={9.979}
          y1={4}
          y2={11.04}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
