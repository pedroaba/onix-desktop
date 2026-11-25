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
        d="M26 16H24V14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14V16H2V14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14V16Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_8981)' + ''}
      />
      <path
        d="M26 16H24V14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14V16H2V14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14V16Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_8981)' + ''}
      />
      <path
        d="M4 16V25.4649C2.8044 24.7733 2 23.4806 2 22V16H4Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_8981)' + ''}
      />
      <path
        d="M24 16V25.4649C25.1956 24.7733 26 23.4806 26 22V16H24Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_8981)' + ''}
      />
      <path
        d="M4 25.4649V16H9C9.55228 16 10 16.4477 10 17V25C10 25.5523 9.55228 26 9 26H6C5.27143 26 4.58835 25.8052 4 25.4649Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_8981)' + ''}
      />
      <path
        d="M22 26C22.7286 26 23.4117 25.8052 24 25.4649V16H19C18.4477 16 18 16.4477 18 17V25C18 25.5523 18.4477 26 19 26H22Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_8981)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_8981'}
          x1={-5.5}
          y1={4.19621}
          x2={1.6283}
          y2={20.1585}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAD2D9" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_8981'}
          x1={-6.57143}
          y1={2}
          x2={-3.90738}
          y2={13.8984}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_8981'}
          x1={3}
          y1={16}
          x2={3}
          y2={25.4648}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_8981'}
          x1={3}
          y1={16}
          x2={3}
          y2={25.4648}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_8981'}
          x1={20.625}
          y1={16}
          x2={20.625}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_8981'}
          x1={20.625}
          y1={16}
          x2={20.625}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
