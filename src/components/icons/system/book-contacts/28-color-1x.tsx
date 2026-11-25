'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 21.5H22.7578C22.7578 21.5 22.5 22.3125 22.5 23.5C22.5 24.6875 22.7578 25.5 22.7578 25.5H8.75C7.23122 25.5 6 24.2688 6 22.75V21.5Z"
        fill={'url(#' + iconId + '-paint0_linear_75809_8111)' + ''}
      />
      <path
        d="M8.75 2C6.67893 2 5 3.67893 5 5.75V22.2497C5 24.3207 6.67893 25.9997 8.75 25.9997H22.25C22.6642 25.9997 23 25.6639 23 25.2497C23 24.8355 22.6642 24.4997 22.25 24.4997H8.75C7.59198 24.4997 6.63828 23.6248 6.51377 22.5H21.5C22.3284 22.5 23 21.8284 23 21V5.75C23 3.67893 21.3211 2 19.25 2H8.75Z"
        fill={'url(#' + iconId + '-paint1_linear_75809_8111)' + ''}
      />
      <path
        d="M8.75 2C6.67893 2 5 3.67893 5 5.75V22.2497C5 24.3207 6.67893 25.9997 8.75 25.9997H22.25C22.6642 25.9997 23 25.6639 23 25.2497C23 24.8355 22.6642 24.4997 22.25 24.4997H8.75C7.59198 24.4997 6.63828 23.6248 6.51377 22.5H21.5C22.3284 22.5 23 21.8284 23 21V5.75C23 3.67893 21.3211 2 19.25 2H8.75Z"
        fill={'url(#' + iconId + '-paint2_radial_75809_8111)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M8.75 2C6.67893 2 5 3.67893 5 5.75V22.2497C5 24.3207 6.67893 25.9997 8.75 25.9997H22.25C22.6642 25.9997 23 25.6639 23 25.2497C23 24.8355 22.6642 24.4997 22.25 24.4997H8.75C7.59198 24.4997 6.63828 23.6248 6.51377 22.5H21.5C22.3284 22.5 23 21.8284 23 21V5.75C23 3.67893 21.3211 2 19.25 2H8.75Z"
        fill={'url(#' + iconId + '-paint3_radial_75809_8111)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M16.5 9.5C16.5 10.8807 15.3807 12 14 12C12.6193 12 11.5 10.8807 11.5 9.5C11.5 8.11929 12.6193 7 14 7C15.3807 7 16.5 8.11929 16.5 9.5ZM18.5 14.875C18.5 16.4315 17.2143 18 14 18C10.7857 18 9.5 16.4374 9.5 14.875V14.772C9.5 13.7929 10.2937 13 11.2727 13H16.7273C17.7063 13 18.5 13.793 18.5 14.772V14.875Z"
        fill={'url(#' + iconId + '-paint4_linear_75809_8111)' + ''}
        fillOpacity={0.9}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_75809_8111'}
          x1={13.6522}
          y1={24.4}
          x2={13.6522}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.715705} stopColor="#58AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_75809_8111'}
          x1={11.4046}
          y1={6.49047}
          x2={15.2188}
          y2={32.3022}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_75809_8111'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.5 15.5) scale(5.5 3.30769)"
        >
          <stop stopColor="#171155" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_75809_8111'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15 9.1999) scale(3 3.26174)"
        >
          <stop stopColor="#171155" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_75809_8111'}
          x1={20.754}
          y1={27.4286}
          x2={1.60237}
          y2={-1.30806}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}
