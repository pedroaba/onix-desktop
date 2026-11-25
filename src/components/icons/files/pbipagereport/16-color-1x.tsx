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
        fillRule="evenodd"
        d="M4 1a2 2 0 00-2 2v10.5A1.5 1.5 0 003.5 15H12a2 2 0 002-2V4.5A3.5 3.5 0 0010.5 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M13 4.5A2.5 2.5 0 0010.5 2H4a1 1 0 00-1 1v9.085q.236-.084.5-.085H12a1 1 0 001-1zm0 8.232A2 2 0 0112 13H3.5a.5.5 0 000 1H12a1 1 0 001-1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M13 4.5A2.5 2.5 0 0010.5 2H4a1 1 0 00-1 1v9.085q.236-.084.5-.085H12a1 1 0 001-1zm0 8.232A2 2 0 0112 13H3.5a.5.5 0 000 1H12a1 1 0 001-1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M7 8.67v6.66c0 .37-.3.67-.67.67H4V8.67c0-.37.3-.67.67-.67h1.66c.37 0 .67.3.67.67"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M5.5 10.557c0-.308-.285-.557-.636-.557l-2.319.239v5.522L5.227 16H5.5z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M5 10.667V16H2v-5.33c0-.37.3-.67.67-.67h1.663c.369 0 .667.299.667.667"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M0 12.67v2.66c0 .37.3.67.67.67H3v-3.33c0-.37-.3-.67-.67-.67H.67c-.37 0-.67.3-.67.67"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M10.5 9a.5.5 0 010 1H8V9zm0-2a.5.5 0 010 1H7.913A1.5 1.5 0 006.5 7zm-3-4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5zm3 2a.5.5 0 010 1h-1a.5.5 0 010-1zm0-2a.5.5 0 010 1h-1a.5.5 0 010-1z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={8.06}
          y1={1}
          y2={15.049}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.587}
          y1={2}
          y2={14.062}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={3.5}
          x2={6.387}
          y1={8}
          y2={15.376}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={2}
          x2={4.75}
          y1={10}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={0}
          x2={1.468}
          y1={12}
          y2={16.027}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5}
          x2={11.918}
          y1={3}
          y2={8.929}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.27778 9.5 -7.91667 3.5625 6.194 5.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
