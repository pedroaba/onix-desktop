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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.25C3 4.45507 4.45507 3 6.25 3H13.75C15.5449 3 17 4.45507 17 6.25V13.75C17 15.5449 15.5449 17 13.75 17H6.25C4.45507 17 3 15.5449 3 13.75V6.25Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_10080)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.25C3 4.45507 4.45507 3 6.25 3H13.75C15.5449 3 17 4.45507 17 6.25V13.75C17 15.5449 15.5449 17 13.75 17H6.25C4.45507 17 3 15.5449 3 13.75V6.25Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_10080)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.25C3 4.45507 4.45507 3 6.25 3H13.75C15.5449 3 17 4.45507 17 6.25V13.75C17 15.5449 15.5449 17 13.75 17H6.25C4.45507 17 3 15.5449 3 13.75V6.25Z"
        fill={'url(#' + iconId + '-paint2_radial_378174_10080)' + ''}
      />
      <path
        d="M13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645C13.6583 6.95118 13.3417 6.95118 13.1464 7.14645L8.5 11.7929L6.85355 10.1464C6.65829 9.95118 6.34171 9.95118 6.14645 10.1464C5.95118 10.3417 5.95118 10.6583 6.14645 10.8536L8.14645 12.8536C8.34171 13.0488 8.65829 13.0488 8.85355 12.8536L13.8536 7.85355Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_10080)' + ''}
      />
      <path
        d="M19 16.5C19 17.7452 18 19 15.5 19C13 19 12 17.7499 12 16.5C12 15.6716 12.6716 15 13.5 15H17.5C18.3284 15 19 15.6716 19 16.5Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_10080)' + ''}
      />
      <path
        d="M19 16.5C19 17.7452 18 19 15.5 19C13 19 12 17.7499 12 16.5C12 15.6716 12.6716 15 13.5 15H17.5C18.3284 15 19 15.6716 19 16.5Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_10080)' + ''}
      />
      <path
        d="M17.5 12C17.5 13.1046 16.6046 14 15.5 14C14.3954 14 13.5 13.1046 13.5 12C13.5 10.8954 14.3954 10 15.5 10C16.6046 10 17.5 10.8954 17.5 12Z"
        fill={'url(#' + iconId + '-paint6_linear_378174_10080)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_10080'}
          x1={3.5}
          y1={5.625}
          x2={13.1617}
          y2={15.6631}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36DFF1" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_10080'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.5299 16.2497) scale(6.6292 4.5921)"
        >
          <stop stopColor="#4A43CB" />
          <stop offset={0.914422} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_378174_10080'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.4467 12.8102) rotate(90) scale(3.24526)"
        >
          <stop stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_10080'}
          x1={7.53846}
          y1={7.46154}
          x2={11.0696}
          y2={18.8687}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_10080'}
          x1={13.6646}
          y1={15.5317}
          x2={15.1023}
          y2={19.549}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_10080'}
          x1={15.5}
          y1={14.5238}
          x2={17.5266}
          y2={21.1502}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_378174_10080'}
          x1={14.4512}
          y1={10.5317}
          x2={16.4898}
          y2={13.7868}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
