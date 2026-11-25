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
        d="M5 4L11 4C13.2091 4 15 5.79086 15 8C15 10.2091 13.2091 12 11 12H5C2.79086 12 1 10.2091 1 8C1 5.79086 2.79086 4 5 4ZM11 6L5 6C3.89543 6 3 6.89543 3 8C3 9.10457 3.89543 10 5 10L11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_9192)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4L11 4C13.2091 4 15 5.79086 15 8C15 10.2091 13.2091 12 11 12H5C2.79086 12 1 10.2091 1 8C1 5.79086 2.79086 4 5 4ZM11 6L5 6C3.89543 6 3 6.89543 3 8C3 9.10457 3.89543 10 5 10L11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_9192)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4L11 4C13.2091 4 15 5.79086 15 8C15 10.2091 13.2091 12 11 12H5C2.79086 12 1 10.2091 1 8C1 5.79086 2.79086 4 5 4ZM11 6L5 6C3.89543 6 3 6.89543 3 8C3 9.10457 3.89543 10 5 10L11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9192)' + ''}
      />
      <path
        d="M13 8H9C6.79086 8 5 9.79086 5 12C5 14.2091 6.79086 16 9 16H15C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C15 8.72857 14.8052 9.41165 14.4649 10H15C16.1046 10 17 10.8954 17 12C17 13.1046 16.1046 14 15 14L9 14C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10L11 10C12.1046 10 13 9.10457 13 8Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9192)' + ''}
      />
      <path
        d="M13 8H9C6.79086 8 5 9.79086 5 12C5 14.2091 6.79086 16 9 16H15C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C15 8.72857 14.8052 9.41165 14.4649 10H15C16.1046 10 17 10.8954 17 12C17 13.1046 16.1046 14 15 14L9 14C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10L11 10C12.1046 10 13 9.10457 13 8Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_9192)' + ''}
      />
      <path
        d="M13 8H9C6.79086 8 5 9.79086 5 12C5 14.2091 6.79086 16 9 16H15C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C15 8.72857 14.8052 9.41165 14.4649 10H15C16.1046 10 17 10.8954 17 12C17 13.1046 16.1046 14 15 14L9 14C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10L11 10C12.1046 10 13 9.10457 13 8Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_9192)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_9192'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.63636 4) rotate(36.9482) scale(14.3329 12.726)"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={0.429447} stopColor="#367AF2" />
          <stop offset={0.942067} stopColor="#5750E2" />
          <stop offset={1} stopColor="#6F47DF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_9192'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9 12) rotate(180) scale(6 5.8875)"
        >
          <stop offset={0.229167} stopColor="#261D82" stopOpacity={0} />
          <stop offset={0.395833} stopColor="#261D82" />
          <stop offset={0.578125} stopColor="#261D82" />
          <stop offset={0.78125} stopColor="#261D82" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9192'}
          x1={13.5}
          y1={13}
          x2={8}
          y2={4.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5157E4" stopOpacity={0} />
          <stop offset={0.066311} stopColor="#5157E4" />
          <stop offset={0.272866} stopColor="#5157E4" />
          <stop offset={0.6} stopColor="#5157E4" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9192'}
          x1={0.499999}
          y1={4.5}
          x2={7.53833}
          y2={23.0203}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36DFF1" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_9192'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11 8) scale(6 5.8875)"
        >
          <stop offset={0.229167} stopColor="#2764E7" stopOpacity={0} />
          <stop offset={0.395833} stopColor="#2764E7" />
          <stop offset={0.578125} stopColor="#2764E7" />
          <stop offset={0.78125} stopColor="#2764E7" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_9192'}
          x1={9.5}
          y1={5}
          x2={13}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#31B3EE" stopOpacity={0.243137} />
          <stop offset={0.207974} stopColor="#31B3EE" />
          <stop offset={0.568966} stopColor="#31B3EE" />
          <stop offset={0.877534} stopColor="#31B3EE" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
