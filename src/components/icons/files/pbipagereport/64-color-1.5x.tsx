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
        d="M18 17a9 9 0 019-9h33c9.941 0 18 8.059 18 18v53a9 9 0 01-9 9H27a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M76 71a7 7 0 01-7 7H27a1 1 0 100 2h42a8.98 8.98 0 007-3.346V79a7 7 0 01-7 7H27a7 7 0 110-14h42a8.98 8.98 0 007-3.343z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M76 71a7 7 0 01-7 7H27a1 1 0 100 2h42a8.98 8.98 0 007-3.346V79a7 7 0 01-7 7H27a7 7 0 110-14h42a8.98 8.98 0 007-3.343z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M60 10c8.837 0 16 7.163 16 16v37a7 7 0 01-7 7H27a8.98 8.98 0 00-7 3.345V17a7 7 0 017-7z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M60 10c8.837 0 16 7.163 16 16v37a7 7 0 01-7 7H27a8.98 8.98 0 00-7 3.345V17a7 7 0 017-7z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
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
        fill={'url(#' + iconId + '-g)' + ''}
        d="M29 60.539V90H15V60.539c0-.85.689-1.539 1.538-1.539h10.924c.85 0 1.538.689 1.538 1.538"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M6 71.539v16.923C6 89.312 6.689 90 7.538 90H20V71.539c0-.85-.689-1.539-1.538-1.539H7.538C6.688 70 6 70.689 6 71.538"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M65.438 59a.562.562 0 110 1.125H40V59zm0-8a.562.562 0 110 1.125H40V52q-.002-.519-.126-1zm0-8a.562.562 0 110 1.125H30.563a.562.562 0 110-1.125zm0-8a.562.562 0 110 1.125H30.563a.562.562 0 110-1.125zM41.667 16A2.333 2.333 0 0144 18.333v9.334A2.333 2.333 0 0141.667 30h-9.334A2.333 2.333 0 0130 27.667v-9.334A2.333 2.333 0 0132.333 16zm23.77 11a.562.562 0 110 1.125H48.564a.562.562 0 110-1.125zm0-8a.562.562 0 110 1.125H48.564a.562.562 0 110-1.125z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={37.375}
          x2={51.544}
          y1={8}
          y2={87.703}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
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
          id={iconId + '-g'}
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
          id={iconId + '-h'}
          x1={5.999}
          x2={13.732}
          y1={70}
          y2={89.792}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E589" />
          <stop offset={1} stopColor="#F6D751" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={30}
          x2={73.227}
          y1={16}
          y2={51.267}
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
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
