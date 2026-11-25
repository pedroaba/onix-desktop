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
        d="M17 6H3V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V6Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_10171)' + ''}
      />
      <path
        d="M17 6H3V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V6Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_10171)' + ''}
      />
      <path
        d="M17 6H3V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V6Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_10171)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M17 6H3V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V6Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_10171)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M17 6H3V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V6Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_10171)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V7H17V5.5Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_10171)' + ''}
      />
      <path
        d="M17 13C17 12.4477 17.4477 12 18 12C18.5523 12 19 12.4477 19 13V18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18V13Z"
        fill={'url(#' + iconId + '-paint6_linear_72095_10171)' + ''}
      />
      <path
        d="M15 10C14.4477 10 14 10.4477 14 11V18C14 18.5523 14.4477 19 15 19C15.5523 19 16 18.5523 16 18V11C16 10.4477 15.5523 10 15 10Z"
        fill={'url(#' + iconId + '-paint7_linear_72095_10171)' + ''}
      />
      <path
        d="M12 14C11.4477 14 11 14.4477 11 15V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V15C13 14.4477 12.5523 14 12 14Z"
        fill={'url(#' + iconId + '-paint8_linear_72095_10171)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_10171'}
          x1={8}
          y1={6}
          x2={11.5}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_10171'}
          x1={11.5}
          y1={10.5}
          x2={13.5}
          y2={19.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DCF8FF" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" stopOpacity={0.7} />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_10171'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 18) rotate(90) scale(4 2)"
        >
          <stop offset={0.535} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_10171'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15 15.5) rotate(90) scale(6.5 2.15625)"
        >
          <stop offset={0.535} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_10171'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18 15.5) rotate(90) scale(5.5 1.82452)"
        >
          <stop offset={0.535} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_10171'}
          x1={3.5625}
          y1={3}
          x2={4.90356}
          y2={9.81561}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_10171'}
          x1={18.8333}
          y1={17.7167}
          x2={17.7646}
          y2={11.9272}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7257D" />
          <stop offset={1} stopColor="#E656EB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_72095_10171'}
          x1={16.5}
          y1={20}
          x2={14.8615}
          y2={10.0894}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B2AB5" />
          <stop offset={1} stopColor="#DD3CE2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_72095_10171'}
          x1={11.25}
          y1={14.2083}
          x2={15.4674}
          y2={16.2039}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16BBDA" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
      </defs>
    </svg>
  )
}
