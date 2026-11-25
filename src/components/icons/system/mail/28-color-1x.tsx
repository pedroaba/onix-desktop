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
        d="M2.00391 8.50313V19.25C2.00391 21.3211 3.68284 23 5.75391 23H22.2505C24.3216 23 26.0005 21.3211 26.0005 19.25V8.5L14.3415 14.4717C14.1269 14.5817 13.8724 14.5817 13.6577 14.4717L2.00391 8.50313Z"
        fill="#367AF2"
      />
      <path
        d="M2.00391 8.50313V19.25C2.00391 21.3211 3.68284 23 5.75391 23H22.2505C24.3216 23 26.0005 21.3211 26.0005 19.25V8.5L14.3415 14.4717C14.1269 14.5817 13.8724 14.5817 13.6577 14.4717L2.00391 8.50313Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9147)' + ''}
      />
      <path
        d="M2.00391 8.50313V19.25C2.00391 21.3211 3.68284 23 5.75391 23H22.2505C24.3216 23 26.0005 21.3211 26.0005 19.25V8.5L14.3415 14.4717C14.1269 14.5817 13.8724 14.5817 13.6577 14.4717L2.00391 8.50313Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9147)' + ''}
      />
      <path
        d="M2.00391 8.50313V19.25C2.00391 21.3211 3.68284 23 5.75391 23H22.2505C24.3216 23 26.0005 21.3211 26.0005 19.25V8.5L14.3415 14.4717C14.1269 14.5817 13.8724 14.5817 13.6577 14.4717L2.00391 8.50313Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9147)' + ''}
        fillOpacity={0.75}
      />
      <path
        d="M2.00391 8.50313V19.25C2.00391 21.3211 3.68284 23 5.75391 23H22.2505C24.3216 23 26.0005 21.3211 26.0005 19.25V8.5L14.3415 14.4717C14.1269 14.5817 13.8724 14.5817 13.6577 14.4717L2.00391 8.50313Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_9147)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M2.00391 7.75C2.00391 5.67893 3.68284 4 5.75391 4H22.2505C24.3216 4 26.0005 5.67893 26.0005 7.75V8.95L14.3415 14.9217C14.1269 15.0317 13.8724 15.0317 13.6577 14.9217L2.00391 8.95313V7.75Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_9147)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9147'}
          x1={17.5}
          y1={10.5}
          x2={23.168}
          y2={23.701}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.19865} stopColor="#0094F0" stopOpacity={0} />
          <stop offset={0.430619} stopColor="#0094F0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9147'}
          x1={10.5741}
          y1={10.0263}
          x2={4.54976}
          y2={24.154}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.191319} stopColor="#0094F0" stopOpacity={0} />
          <stop offset={0.430619} stopColor="#0094F0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9147'}
          x1={20.3294}
          y1={17.1506}
          x2={21.3055}
          y2={24.3447}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2764E7" stopOpacity={0} />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_9147'}
          x1={17.716}
          y1={10.2807}
          x2={19.4964}
          y2={24.9213}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.53288} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_9147'}
          x1={9.13283}
          y1={0.554647}
          x2={16.4766}
          y2={19.7891}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6CE0FF" />
          <stop offset={0.461792} stopColor="#29C3FF" />
          <stop offset={1} stopColor="#4894FE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
