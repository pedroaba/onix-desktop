'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.25 14C3.00736 14 2 15.0074 2 16.25V16.5C2 16.5 2 21 8 21C14 21 14 16.5 14 16.5V16.25C14 15.0074 12.9926 14 11.75 14H4.25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8583)' + ''}
      />
      <path
        d="M4.25 14C3.00736 14 2 15.0074 2 16.25V16.5C2 16.5 2 21 8 21C14 21 14 16.5 14 16.5V16.25C14 15.0074 12.9926 14 11.75 14H4.25Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8583)' + ''}
      />
      <path
        d="M4.25 14C3.00736 14 2 15.0074 2 16.25V16.5C2 16.5 2 21 8 21C14 21 14 16.5 14 16.5V16.25C14 15.0074 12.9926 14 11.75 14H4.25Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_8583)' + ''}
        fillOpacity={0.75}
      />
      <path
        d="M17 12C18.6569 12 20 10.6569 20 9C20 7.34315 18.6569 6 17 6C15.3431 6 14 7.34315 14 9C14 10.6569 15.3431 12 17 12Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8583)' + ''}
      />
      <path
        d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_8583)' + ''}
      />
      <path
        d="M11 13C11 11.8954 11.8954 11 13 11H20C21.1046 11 22 11.8954 22 13V20C22 21.1046 21.1046 22 20 22H13C11.8954 22 11 21.1046 11 20V13Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_8583)' + ''}
      />
      <path
        d="M13.75 13C13.3358 13 13 13.3358 13 13.75C13 14.1642 13.3358 14.5 13.75 14.5H19.25C19.6642 14.5 20 14.1642 20 13.75C20 13.3358 19.6642 13 19.25 13H13.75ZM13.75 15.75C13.3358 15.75 13 16.0858 13 16.5C13 16.9142 13.3358 17.25 13.75 17.25H19.25C19.6642 17.25 20 16.9142 20 16.5C20 16.0858 19.6642 15.75 19.25 15.75H13.75ZM13.75 18.5C13.3358 18.5 13 18.8358 13 19.25C13 19.6642 13.3358 20 13.75 20H19.25C19.6642 20 20 19.6642 20 19.25C20 18.8358 19.6642 18.5 19.25 18.5H13.75Z"
        fill={'url(#' + iconId + '-paint6_linear_72095_8583)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8583'}
          x1={4.85365}
          y1={14.9305}
          x2={7.40972}
          y2={21.9274}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8583'}
          x1={8}
          y1={13.1667}
          x2={11.6074}
          y2={24.7212}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_8583'}
          x1={15}
          y1={18}
          x2={9}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A1852" stopOpacity={0.75} />
          <stop offset={1} stopColor="#0A1852" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8583'}
          x1={15.4268}
          y1={6.79761}
          x2={18.4846}
          y2={11.6803}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_8583'}
          x1={5.90243}
          y1={5.06349}
          x2={9.97953}
          y2={11.5737}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_8583'}
          x1={14.9286}
          y1={11}
          x2={19.143}
          y2={21.407}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_8583'}
          x1={9.50042}
          y1={8.1}
          x2={20}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
