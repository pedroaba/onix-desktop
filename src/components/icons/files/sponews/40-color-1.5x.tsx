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
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M26 15h2a2 2 0 0 1 2 2v7a3 3 0 0 1-3 3h-1V15z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M25 13a2 2 0 0 1 2 2v12h-7v-2a5 5 0 0 0-5-5H9v-5a2 2 0 0 1 2-2h14z"
      />
      <path
        fill="#028298"
        d="M16.5 19a.5.5 0 0 1 .5.5v.916A4.983 4.983 0 0 0 15 20h-3v-.5a.5.5 0 0 1 .5-.5h4zm7 3a.5.5 0 0 1 0 1h-3.917a4.983 4.983 0 0 0-.459-.827A.497.497 0 0 1 19.5 22h4zm0-2.969a.5.5 0 0 1 0 1h-4a.5.5 0 1 1 0-1h4zM22.5 16a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h9z"
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={4}
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.6}
        rx={4}
      />
      <path
        fill="#fff"
        d="m6.226 32.935 1.9-.958c.213.418.493.727.837.924.35.198.731.297 1.145.297.461 0 .813-.09 1.055-.27.242-.184.363-.46.363-.83a.921.921 0 0 0-.35-.728c-.232-.203-.644-.356-1.235-.46-1.127-.197-1.946-.543-2.458-1.038-.507-.495-.761-1.111-.761-1.85 0-.917.335-1.65 1.005-2.199.67-.549 1.555-.823 2.654-.823.74 0 1.391.146 1.955.439.563.292 1.01.71 1.34 1.255l-1.857.924c-.205-.306-.426-.526-.663-.661-.238-.14-.536-.21-.894-.21-.428 0-.754.09-.978.27a.866.866 0 0 0-.328.702c0 .248.105.466.314.655.215.184.643.335 1.285.452 1.08.198 1.885.558 2.416 1.08.535.517.803 1.171.803 1.963 0 .963-.319 1.725-.956 2.288-.638.562-1.548.843-2.73.843-.857 0-1.63-.18-2.319-.54a3.62 3.62 0 0 1-1.543-1.525z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.578}
          y1={6}
          y2={34.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.444}
          x2={14.976}
          y1={7}
          y2={33.48}
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
          gradientTransform="matrix(17.9444 20.5833 -26.9167 7.71875 13.861 13.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={26.25}
          x2={31.506}
          y1={7}
          y2={30.694}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.509} stopColor="#0097A8" />
          <stop offset={0.838} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={14}
          x2={15.386}
          y1={13}
          y2={27.254}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#86F2F2" />
          <stop offset={1} stopColor="#37C6D0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -24.85 11.707) scale(25.4558)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#00B6BD" />
          <stop offset={0.89} stopColor="#00495C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 12.6 -14.3437 0 10 31.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
