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
        d="M6.25 3C4.45507 3 3 4.45508 3 6.25V17.75C3 19.5449 4.45508 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_10085)' + ''}
      />
      <path
        d="M6.25 3C4.45507 3 3 4.45508 3 6.25V17.75C3 19.5449 4.45508 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_10085)' + ''}
      />
      <path
        d="M6.25 3C4.45507 3 3 4.45508 3 6.25V17.75C3 19.5449 4.45508 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25Z"
        fill={'url(#' + iconId + '-paint2_radial_378174_10085)' + ''}
      />
      <path
        d="M17.28 9.28064L10.5263 16.0266C10.2333 16.3192 9.75868 16.319 9.46591 16.0262L6.72014 13.2803C6.42726 12.9874 6.42727 12.5125 6.72018 12.2196C7.01308 11.9268 7.48795 11.9268 7.78084 12.2197L9.99658 14.4356L16.22 8.21936C16.513 7.92664 16.9879 7.92691 17.2806 8.21998C17.5734 8.51304 17.5731 8.98791 17.28 9.28064Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_10085)' + ''}
      />
      <path
        d="M23 19.875C23 21.4315 21.7143 23 18.5 23C15.2857 23 14 21.4374 14 19.875V19.772C14 18.7929 14.7937 18 15.7727 18H21.2273C22.2063 18 23 18.793 23 19.772V19.875Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_10085)' + ''}
      />
      <path
        d="M23 19.875C23 21.4315 21.7143 23 18.5 23C15.2857 23 14 21.4374 14 19.875V19.772C14 18.7929 14.7937 18 15.7727 18H21.2273C22.2063 18 23 18.793 23 19.772V19.875Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_10085)' + ''}
      />
      <path
        d="M21 14.5C21 15.8807 19.8807 17 18.5 17C17.1193 17 16 15.8807 16 14.5C16 13.1193 17.1193 12 18.5 12C19.8807 12 21 13.1193 21 14.5Z"
        fill={'url(#' + iconId + '-paint6_linear_378174_10085)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_10085'}
          x1={3.64286}
          y1={6.375}
          x2={16.065}
          y2={19.2812}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36DFF1" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_10085'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.5 20.5) scale(8 5.54167)"
        >
          <stop stopColor="#4A43CB" />
          <stop offset={0.914422} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_378174_10085'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.5 15.5) rotate(90) scale(3.5)"
        >
          <stop stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_10085'}
          x1={8.61578}
          y1={8.6343}
          x2={13.4669}
          y2={24.3126}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_10085'}
          x1={16.1402}
          y1={18.6647}
          x2={17.8983}
          y2={23.7177}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_10085'}
          x1={18.5}
          y1={17.4048}
          x2={20.9744}
          y2={25.7267}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_378174_10085'}
          x1={17.189}
          y1={12.6647}
          x2={19.7372}
          y2={16.7336}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
