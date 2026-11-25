'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 33.0901L23 16L39 27.1052V38.5C39 40.433 37.433 42 35.5 42H15C11.6863 42 9 39.3137 9 36V33.0901Z"
        fill={'url(#' + iconId + '-paint0_radial_353_14621)' + ''}
      />
      <path
        d="M9 21.0385C9 18.5532 11.0147 16.5385 13.5 16.5385H33.8889L39 14V26.5C39 28.433 37.433 30 35.5 30H15C11.6863 30 9 32.6863 9 36V21.0385Z"
        fill={'url(#' + iconId + '-paint1_linear_353_14621)' + ''}
      />
      <path
        d="M9 21.0385C9 18.5532 11.0147 16.5385 13.5 16.5385H33.8889L39 14V26.5C39 28.433 37.433 30 35.5 30H15C11.6863 30 9 32.6863 9 36V21.0385Z"
        fill={'url(#' + iconId + '-paint2_radial_353_14621)' + ''}
        fillOpacity={0.6}
      />
      <path
        d="M9 21.0385C9 18.5532 11.0147 16.5385 13.5 16.5385H33.8889L39 14V26.5C39 28.433 37.433 30 35.5 30H15C11.6863 30 9 32.6863 9 36V21.0385Z"
        fill={'url(#' + iconId + '-paint3_radial_353_14621)' + ''}
        fillOpacity={0.1}
      />
      <path
        d="M9 12C9 8.68629 11.6863 6 15 6H35.5C37.433 6 39 7.567 39 9.5V14.5C39 16.433 37.433 18 35.5 18H15C11.6863 18 9 20.6863 9 24V12Z"
        fill={'url(#' + iconId + '-paint4_linear_353_14621)' + ''}
      />
      <path
        d="M9 12C9 8.68629 11.6863 6 15 6H35.5C37.433 6 39 7.567 39 9.5V14.5C39 16.433 37.433 18 35.5 18H15C11.6863 18 9 20.6863 9 24V12Z"
        fill={'url(#' + iconId + '-paint5_radial_353_14621)' + ''}
        fillOpacity={0.8}
      />
      <path
        d="M16.75 23H7.25C5.45507 23 4 24.4551 4 26.25V35.75C4 37.5449 5.45507 39 7.25 39H16.75C18.5449 39 20 37.5449 20 35.75V26.25C20 24.4551 18.5449 23 16.75 23Z"
        fill={'url(#' + iconId + '-paint6_radial_353_14621)' + ''}
      />
      <path
        d="M16.75 23H7.25C5.45507 23 4 24.4551 4 26.25V35.75C4 37.5449 5.45507 39 7.25 39H16.75C18.5449 39 20 37.5449 20 35.75V26.25C20 24.4551 18.5449 23 16.75 23Z"
        fill={'url(#' + iconId + '-paint7_radial_353_14621)' + ''}
        fillOpacity={0.65}
      />
      <path
        d="M17.4859 26.4286L15.5167 35.5703L13.1628 35.5714L12.0002 30.0857L10.7832 35.5714H8.40686L6.51451 26.4297H8.45546L9.62308 32.4629L10.7832 26.4297H13.1628L14.3774 32.4629L15.5167 26.4297L17.4859 26.4286Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_353_14621'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(38.1254 41.9993) scale(47.5733 20.1494)"
        >
          <stop offset={0.180414} stopColor="#1657F4" />
          <stop offset={0.574542} stopColor="#0036C4" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_353_14621'}
          x1={9}
          y1={25}
          x2={31.9747}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66C0FF" />
          <stop offset={0.25606} stopColor="#0094F0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_353_14621'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(39 14.7158) rotate(133.546) scale(29.3648 72.3194)"
        >
          <stop offset={0.140259} stopColor="#D471FF" />
          <stop offset={0.830508} stopColor="#509DF5" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_353_14621'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(34.6111 29.2308) rotate(90) scale(18.6154 101.647)"
        >
          <stop offset={0.283333} stopColor="#4F006F" stopOpacity={0} />
          <stop offset={1} stopColor="#4F006F" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_353_14621'}
          x1={9}
          y1={15}
          x2={38.9918}
          y2={15.4954}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.201276} stopColor="#3BD5FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint5_radial_353_14621'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(39 6.58563) rotate(166.855) scale(29.4949 70.6435)"
        >
          <stop offset={0.0606583} stopColor="#E4A7FE" />
          <stop offset={0.538869} stopColor="#E4A7FE" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint6_radial_353_14621'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4 23) rotate(45) scale(22.6274)"
        >
          <stop offset={0.0811439} stopColor="#367AF2" />
          <stop offset={0.871875} stopColor="#001A8F" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint7_radial_353_14621'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 32.6) rotate(90) scale(11.2 12.765)"
        >
          <stop offset={0.586954} stopColor="#2763E5" stopOpacity={0} />
          <stop offset={0.973806} stopColor="#58AAFE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
