'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 13.8877L10 6L17 11.1255V16.4444C17 17.3036 16.3036 18 15.4444 18H6.66667C5.19391 18 4 16.8061 4 15.3333V13.8877Z"
        fill={'url(#' + iconId + '-paint0_radial_353_14575)' + ''}
      />
      <path
        d="M4 9.03846C4 7.93389 4.89543 7.03846 6 7.03846H15.6667L17 6V10.9444C17 11.8036 16.3036 12.5 15.4444 12.5H6.5C5.11929 12.5 4 13.6193 4 15V9.03846Z"
        fill={'url(#' + iconId + '-paint1_linear_353_14575)' + ''}
      />
      <path
        d="M4 9.03846C4 7.93389 4.89543 7.03846 6 7.03846H15.6667L17 6V10.9444C17 11.8036 16.3036 12.5 15.4444 12.5H6.5C5.11929 12.5 4 13.6193 4 15V9.03846Z"
        fill={'url(#' + iconId + '-paint2_radial_353_14575)' + ''}
        fillOpacity={0.6}
      />
      <path
        d="M4 9.03846C4 7.93389 4.89543 7.03846 6 7.03846H15.6667L17 6V10.9444C17 11.8036 16.3036 12.5 15.4444 12.5H6.5C5.11929 12.5 4 13.6193 4 15V9.03846Z"
        fill={'url(#' + iconId + '-paint3_radial_353_14575)' + ''}
        fillOpacity={0.1}
      />
      <path
        d="M4 4.66667C4 3.19391 5.19391 2 6.66667 2H15.4444C16.3036 2 17 2.69645 17 3.55556V5.94444C17 6.80355 16.3036 7.5 15.4444 7.5H6.5C5.11929 7.5 4 8.61929 4 10V4.66667Z"
        fill={'url(#' + iconId + '-paint4_linear_353_14575)' + ''}
      />
      <path
        d="M4 4.66667C4 3.19391 5.19391 2 6.66667 2H15.4444C16.3036 2 17 2.69645 17 3.55556V5.94444C17 6.80355 16.3036 7.5 15.4444 7.5H6.5C5.11929 7.5 4 8.61929 4 10V4.66667Z"
        fill={'url(#' + iconId + '-paint5_radial_353_14575)' + ''}
        fillOpacity={0.8}
      />
      <path
        d="M9 7H4C2.89543 7 2 7.89543 2 9V14C2 15.1046 2.89543 16 4 16H9C10.1046 16 11 15.1046 11 14V9C11 7.89543 10.1046 7 9 7Z"
        fill={'url(#' + iconId + '-paint6_radial_353_14575)' + ''}
      />
      <path
        d="M9 7H4C2.89543 7 2 7.89543 2 9V14C2 15.1046 2.89543 16 4 16H9C10.1046 16 11 15.1046 11 14V9C11 7.89543 10.1046 7 9 7Z"
        fill={'url(#' + iconId + '-paint7_radial_353_14575)' + ''}
        fillOpacity={0.65}
      />
      <path
        d="M9.5 9L8.42306 13.9994L7.13577 14L6.5 11L5.83446 14H4.53488L3.5 9.0006H4.56146L5.2 12.3L5.83446 9.0006H7.13577L7.8 12.3L8.42306 9.0006L9.5 9Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_353_14575'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16.621 17.9997) scale(20.6151 9.29972)"
        >
          <stop offset={0.180414} stopColor="#1657F4" />
          <stop offset={0.574542} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_353_14575'}
          x1={4}
          y1={10.5}
          x2={13.9557}
          y2={10.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66C0FF" />
          <stop offset={0.25606} stopColor="#0094F0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_353_14575'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17 6.29282) rotate(135.195) scale(12.3559 30.4685)"
        >
          <stop offset={0.140259} stopColor="#D471FF" />
          <stop offset={0.830508} stopColor="#509DF5" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_353_14575'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.0981 12.2308) rotate(90) scale(7.61538 44.047)"
        >
          <stop offset={0.283333} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_353_14575'}
          x1={4}
          y1={6}
          x2={16.9966}
          y2={6.20932}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.201276} stopColor="#3BD5FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint5_radial_353_14575'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17 2.26028) rotate(166.53) scale(12.7983 31.355)"
        >
          <stop offset={0.0606583} stopColor="#E4A7FE" />
          <stop offset={0.538869} stopColor="#E4A7FE" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint6_radial_353_14575'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2 7) rotate(45) scale(12.7279)"
        >
          <stop offset={0.0811439} stopColor="#367AF2" />
          <stop offset={0.871875} stopColor="#001A8F" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint7_radial_353_14575'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.5 12.4) rotate(90) scale(6.3 7.1803)"
        >
          <stop offset={0.586954} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.973806} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
