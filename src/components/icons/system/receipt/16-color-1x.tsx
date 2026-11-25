'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.63636 2C2.73262 2 2 2.76751 2 3.71429V11.4286C2 12.8487 3.09894 14 4.45455 14H11V3.71429C11 2.76751 10.2674 2 9.36364 2H3.63636Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9458)' + ''}
      />
      <path
        d="M11 10H14V12C14 13.1046 13.1046 14 12 14H11V10Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9458)' + ''}
      />
      <path
        d="M4.5 5.5C4.5 5.22386 4.72386 5 5 5H8C8.27614 5 8.5 5.22386 8.5 5.5C8.5 5.77614 8.27614 6 8 6H5C4.72386 6 4.5 5.77614 4.5 5.5Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9458)' + ''}
      />
      <path
        d="M4.5 5.5C4.5 5.22386 4.72386 5 5 5H8C8.27614 5 8.5 5.22386 8.5 5.5C8.5 5.77614 8.27614 6 8 6H5C4.72386 6 4.5 5.77614 4.5 5.5Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_9458)' + ''}
      />
      <path
        d="M4.5 8C4.5 7.72386 4.72386 7.5 5 7.5H8C8.27614 7.5 8.5 7.72386 8.5 8C8.5 8.27614 8.27614 8.5 8 8.5H5C4.72386 8.5 4.5 8.27614 4.5 8Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_9458)' + ''}
      />
      <path
        d="M4.5 8C4.5 7.72386 4.72386 7.5 5 7.5H8C8.27614 7.5 8.5 7.72386 8.5 8C8.5 8.27614 8.27614 8.5 8 8.5H5C4.72386 8.5 4.5 8.27614 4.5 8Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_9458)' + ''}
      />
      <path
        d="M4.5 10.5C4.5 10.2239 4.72386 10 5 10H6.5C6.77614 10 7 10.2239 7 10.5C7 10.7761 6.77614 11 6.5 11H5C4.72386 11 4.5 10.7761 4.5 10.5Z"
        fill={'url(#' + iconId + '-paint6_linear_378174_9458)' + ''}
      />
      <path
        d="M4.5 10.5C4.5 10.2239 4.72386 10 5 10H6.5C6.77614 10 7 10.2239 7 10.5C7 10.7761 6.77614 11 6.5 11H5C4.72386 11 4.5 10.7761 4.5 10.5Z"
        fill={'url(#' + iconId + '-paint7_linear_378174_9458)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9458'}
          x1={3.63636}
          y1={2.42857}
          x2={7.63816}
          y2={13.8883}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE06B" />
          <stop offset={0.644682} stopColor="#FFB357" />
          <stop offset={1} stopColor="#FF921F" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9458'}
          x1={14}
          y1={11.6}
          x2={11.1343}
          y2={12.2203}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE8401" />
          <stop offset={1} stopColor="#CA6407" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9458'}
          x1={3.8}
          y1={10}
          x2={4.25601}
          y2={11.9152}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF921F" />
          <stop offset={1} stopColor="#CA6407" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_9458'}
          x1={3.7}
          y1={5}
          x2={9.62334}
          y2={9.73868}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF921F" />
          <stop offset={1} stopColor="#CA6407" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_9458'}
          x1={3.8}
          y1={10}
          x2={4.25601}
          y2={11.9152}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF921F" />
          <stop offset={1} stopColor="#CA6407" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_9458'}
          x1={3.7}
          y1={5}
          x2={9.62334}
          y2={9.73868}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF921F" />
          <stop offset={1} stopColor="#CA6407" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_378174_9458'}
          x1={3.8}
          y1={10}
          x2={4.25601}
          y2={11.9152}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF921F" />
          <stop offset={1} stopColor="#CA6407" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_378174_9458'}
          x1={3.7}
          y1={5}
          x2={9.62334}
          y2={9.73868}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF921F" />
          <stop offset={1} stopColor="#CA6407" />
        </linearGradient>
      </defs>
    </svg>
  )
}
