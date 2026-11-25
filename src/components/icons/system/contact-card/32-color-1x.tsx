'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 7.25C2 5.45508 3.45507 4 5.25 4H26.75C28.5449 4 30 5.45508 30 7.25V24.75C30 26.5449 28.5449 28 26.75 28H5.25C3.45507 28 2 26.5449 2 24.75V7.25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_10025)' + ''}
      />
      <path
        d="M2 7.25C2 5.45508 3.45507 4 5.25 4H26.75C28.5449 4 30 5.45508 30 7.25V24.75C30 26.5449 28.5449 28 26.75 28H5.25C3.45507 28 2 26.5449 2 24.75V7.25Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_10025)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M18 13C18 12.4477 18.4477 12 19 12H25.0004C25.5526 12 26.0004 12.4477 26.0004 13C26.0004 13.5523 25.5526 14 25.0004 14H19C18.4477 14 18 13.5523 18 13ZM19 17C18.4477 17 18 17.4477 18 18C18 18.5523 18.4477 19 19 19H25.0004C25.5526 19 26.0004 18.5523 26.0004 18C26.0004 17.4477 25.5526 17 25.0004 17H19Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_10025)' + ''}
      />
      <path
        d="M7 17.5C7 16.6716 7.67157 16 8.5 16H13.5C14.3284 16 15 16.6716 15 17.5C15 17.5 15 21 11 21C7 21 7 17.5 7 17.5Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_10025)' + ''}
      />
      <path
        d="M13 13C13 14.1046 12.1046 15 11 15C9.89543 15 9 14.1046 9 13C9 11.8954 9.89543 11 11 11C12.1046 11 13 11.8954 13 13Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_10025)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_10025'}
          x1={12}
          y1={4}
          x2={20.1875}
          y2={27.5878}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_10025'}
          x1={20.3333}
          y1={6.94737}
          x2={27.3488}
          y2={41.0054}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.446512} stopColor="#FF6CE8" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_10025'}
          x1={21.2729}
          y1={11.1923}
          x2={24.4081}
          y2={24.8052}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4" />
          <stop offset={1} stopColor="#0067BF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_10025'}
          x1={7}
          y1={12.9651}
          x2={9.06059}
          y2={21.6621}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_10025'}
          x1={9}
          y1={9.66667}
          x2={11.9898}
          y2={14.7868}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
      </defs>
    </svg>
  )
}
