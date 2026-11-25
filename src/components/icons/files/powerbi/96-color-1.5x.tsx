'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M8 27a9 9 0 019-9h53c9.941 0 18 8.059 18 18v33a9 9 0 01-9 9H26c-9.941 0-18-8.059-18-18z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 27a7 7 0 017-7h53c8.837 0 16 7.163 16 16v33a7 7 0 01-7 7H26c-8.837 0-16-7.163-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 27a7 7 0 017-7h53c8.837 0 16 7.163 16 16v33a7 7 0 01-7 7H26c-8.837 0-16-7.163-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M48 36.889c1.227 0 2.222.995 2.222 2.222v26.666a2.223 2.223 0 11-4.445 0V39.111c0-1.227.996-2.222 2.223-2.222m17.777 13.334c1.228 0 2.223.994 2.223 2.221v13.333a2.223 2.223 0 01-4.444 0V52.444a2.22 2.22 0 012.221-2.221M30.223 28c1.227 0 2.221.995 2.221 2.223V48H28V30.223c0-1.228.995-2.223 2.223-2.223"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M38 51.539v36.923c0 .85-.689 1.538-1.538 1.538H24V51.539c0-.85.689-1.539 1.538-1.539h10.924c.85 0 1.538.689 1.538 1.538"
      />
      <path
        fill="#000"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M30 61.784C30 60.246 28.78 59 27.273 59l-10.272 1.193v28.614L28.83 90H30z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M29 60.539V90H15V60.539c0-.85.689-1.539 1.538-1.539h10.924c.85 0 1.538.689 1.538 1.538"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M6 71.539v16.923C6 89.312 6.689 90 7.538 90H20V71.539c0-.85-.689-1.539-1.538-1.539H7.538C6.688 70 6 70.689 6 71.538"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.833}
          x2={39.939}
          y1={18}
          y2={79.056}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={31.111}
          x2={36.368}
          y1={20}
          y2={77.071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={28}
          x2={68}
          y1={28}
          y2={68}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C28400" />
          <stop offset={1} stopColor="#A86500" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={21.667}
          x2={36.833}
          y1={50}
          y2={86.167}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6AD10" />
          <stop offset={1} stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={14.999}
          x2={30.136}
          y1={59}
          y2={88.831}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6D751" />
          <stop offset={1} stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5.999}
          x2={13.732}
          y1={70}
          y2={89.792}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(40.1111 44.3333 -60.1667 16.625 34.278 34.583)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
