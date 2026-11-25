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
        d="M4 7.5V8.5V14.5C4 15.8807 5.11929 17 6.5 17H13.5C15.9853 17 18 14.9856 18 12.5003V7.5C18 6.11929 16.8807 5 15.5 5H6.5C5.11929 5 4 6.11929 4 7.5Z"
        fill="#1B44B1"
      />
      <path
        d="M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z"
        fill="#367AF2"
      />
      <path
        d="M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9161)' + ''}
      />
      <path
        d="M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9161)' + ''}
      />
      <path
        d="M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9161)' + ''}
        fillOpacity={0.75}
      />
      <path
        d="M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_9161)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M16 5.5C16 4.11929 14.8807 3 13.5 3H4.5C3.11929 3 2 4.11929 2 5.5V6.5L8.74649 9.93097L8.82751 9.96932C8.96661 10.0205 9.12312 10.0077 9.25351 9.93097L16 6.5V5.5Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_9161)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9161'}
          x1={10.7773}
          y1={7.36222}
          x2={14.9746}
          y2={14.7158}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.22807} stopColor="#0094F0" stopOpacity={0} />
          <stop offset={0.430619} stopColor="#0094F0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9161'}
          x1={7}
          y1={6.5}
          x2={2.33333}
          y2={15.1667}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.22807} stopColor="#0094F0" stopOpacity={0} />
          <stop offset={0.430619} stopColor="#0094F0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9161'}
          x1={12.3906}
          y1={10.25}
          x2={13.4083}
          y2={15.8576}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2764E7" stopOpacity={0} />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_9161'}
          x1={11.1667}
          y1={6.66667}
          x2={12.4716}
          y2={16.2224}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.53288} stopColor="#DD3CE2" stopOpacity={0} />
          <stop offset={1} stopColor="#DD3CE2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_9161'}
          x1={6.15912}
          y1={0.818248}
          x2={11.0949}
          y2={12.7285}
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
