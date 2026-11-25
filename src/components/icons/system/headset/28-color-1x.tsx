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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 20V19L6 18L7 19V20C7 21.1046 7.89543 22 9 22H14V24H9C6.79086 24 5 22.2091 5 20Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9022)' + ''}
      />
      <path
        d="M17 23C17 24.6569 15.6569 26 14 26C12.3431 26 11 24.6569 11 23C11 21.3431 12.3431 20 14 20C15.6569 20 17 21.3431 17 23Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9022)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4C10.134 4 7 7.13401 7 11V12.5L6 13.5L5 12.5V11C5 6.02944 9.02944 2 14 2C18.9706 2 23 6.02944 23 11V12.5L22 13.5L21 12.5V11C21 7.13401 17.866 4 14 4Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9022)' + ''}
      />
      <path
        d="M10.5 12H5V19H10.5C11.3284 19 12 18.3284 12 17.5V13.5C12 12.6716 11.3284 12 10.5 12Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_9022)' + ''}
      />
      <path
        d="M17.5 12H23V16.5C23 17.8807 21.8807 19 20.5 19H17.5C16.6716 19 16 18.3284 16 17.5V13.5C16 12.6716 16.6716 12 17.5 12Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_9022)' + ''}
      />
      <path
        d="M7 12V19H5V12H7Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_9022)' + ''}
      />
      <path
        d="M21 12V18.95C22.1411 18.7184 23 17.7095 23 16.5V12H21Z"
        fill={'url(#' + iconId + '-paint6_linear_378174_9022)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9022'}
          x1={10.25}
          y1={22.8333}
          x2={8.3772}
          y2={16.7716}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9CA5AD" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9022'}
          x1={16.25}
          y1={25.25}
          x2={11.1675}
          y2={22.2809}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#383B3D" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9022'}
          x1={-1.42857}
          y1={2}
          x2={1.07292}
          y2={11.9217}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_9022'}
          x1={20.375}
          y1={11}
          x2={20.375}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_9022'}
          x1={20.375}
          y1={11}
          x2={20.375}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_9022'}
          x1={21.5}
          y1={12}
          x2={20.6177}
          y2={18.887}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_378174_9022'}
          x1={21.5}
          y1={12}
          x2={20.6177}
          y2={18.887}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
      </defs>
    </svg>
  )
}
