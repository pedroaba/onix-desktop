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
        d="M14 11.5V5.5L8 4.5L2 5.5V11.5C2 12.8807 3.11929 14 4.5 14H11.5C12.8807 14 14 12.8807 14 11.5Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9875)' + ''}
      />
      <path
        d="M14 11.5V5.5L8 4.5L2 5.5V11.5C2 12.8807 3.11929 14 4.5 14H11.5C12.8807 14 14 12.8807 14 11.5Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9875)' + ''}
      />
      <path
        d="M14 11.5V5.5L8 4.5L2 5.5V11.5C2 12.8807 3.11929 14 4.5 14H11.5C12.8807 14 14 12.8807 14 11.5Z"
        fill={'url(#' + iconId + '-paint2_radial_378174_9875)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M14 4.5C14 3.11929 12.8807 2 11.5 2H4.5C3.11929 2 2 3.11929 2 4.5V6H14V4.5Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_9875)' + ''}
      />
      <path
        d="M16 11.5C16 13.9853 13.9853 16 11.5 16C9.01472 16 7 13.9853 7 11.5C7 9.01472 9.01472 7 11.5 7C13.9853 7 16 9.01472 16 11.5Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_9875)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 9C11.7761 9 12 9.22386 12 9.5V11H13C13.2761 11 13.5 11.2239 13.5 11.5C13.5 11.7761 13.2761 12 13 12H11.5C11.2239 12 11 11.7761 11 11.5V9.5C11 9.22386 11.2239 9 11.5 9Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_9875)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9875'}
          x1={6.28571}
          y1={4.5}
          x2={9.32709}
          y2={13.9867}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9875'}
          x1={9.28571}
          y1={8.38636}
          x2={11.0248}
          y2={16.1535}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DCF8FF" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" stopOpacity={0.7} />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_378174_9875'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11.8571 12.7045) rotate(88.7957) scale(6.79696 6.61452)"
        >
          <stop offset={0.497076} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_378174_9875'}
          x1={2.48214}
          y1={2}
          x2={4.02593}
          y2={8.72509}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_9875'}
          x1={8.5}
          y1={6.5}
          x2={13}
          y2={16.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1EC8B0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_9875'}
          x1={11.2188}
          y1={9.45918}
          x2={10.5089}
          y2={11.892}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#D1D1FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
