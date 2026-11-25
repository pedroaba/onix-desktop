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
        fill={'url(#' + iconId + '-paint0_linear_378174_9844)' + ''}
      />
      <path
        d="M14 11.5V5.5L8 4.5L2 5.5V11.5C2 12.8807 3.11929 14 4.5 14H11.5C12.8807 14 14 12.8807 14 11.5Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9844)' + ''}
      />
      <path
        d="M14 11.5V5.5L8 4.5L2 5.5V11.5C2 12.8807 3.11929 14 4.5 14H11.5C12.8807 14 14 12.8807 14 11.5Z"
        fill={'url(#' + iconId + '-paint2_radial_378174_9844)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M14 4.5C14 3.11929 12.8807 2 11.5 2H4.5C3.11929 2 2 3.11929 2 4.5V6H14V4.5Z"
        fill={'url(#' + iconId + '-paint3_linear_378174_9844)' + ''}
      />
      <path
        d="M16 11.5C16 13.9853 13.9853 16 11.5 16C9.01472 16 7 13.9853 7 11.5C7 9.01472 9.01472 7 11.5 7C13.9853 7 16 9.01472 16 11.5Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_9844)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8536 9.64645C14.0488 9.84171 14.0488 10.1583 13.8536 10.3536L10.8536 13.3536C10.6583 13.5488 10.3417 13.5488 10.1464 13.3536L9.14645 12.3536C8.95118 12.1583 8.95118 11.8417 9.14645 11.6464C9.34171 11.4512 9.65829 11.4512 9.85355 11.6464L10.5 12.2929L13.1464 9.64645C13.3417 9.45118 13.6583 9.45118 13.8536 9.64645Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_9844)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9844'}
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
          id={iconId + '-paint1_linear_378174_9844'}
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
          id={iconId + '-paint2_radial_378174_9844'}
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
          id={iconId + '-paint3_linear_378174_9844'}
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
          id={iconId + '-paint4_linear_378174_9844'}
          x1={7.32143}
          y1={8.6875}
          x2={13.5325}
          y2={15.1406}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_9844'}
          x1={9.9375}
          y1={9.90803}
          x2={10.9463}
          y2={14.3597}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#E3FFD9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
