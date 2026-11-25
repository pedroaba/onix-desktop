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
        d="M14 26C18.9706 26 23 23.9853 23 21.5V18.5H5V21.5C5 23.9853 9.02944 26 14 26Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9860)' + ''}
      />
      <ellipse
        cx={14}
        cy={18.5}
        rx={9}
        ry={4.5}
        fill={'url(#' + iconId + '-paint1_linear_72095_9860)' + ''}
      />
      <path
        d="M14 20C18.9706 20 23 17.9853 23 15.5V12.5H5V15.5C5 17.9853 9.02944 20 14 20Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9860)' + ''}
      />
      <ellipse
        cx={14}
        cy={12.5}
        rx={9}
        ry={4.5}
        fill={'url(#' + iconId + '-paint3_linear_72095_9860)' + ''}
      />
      <path
        d="M14 14C18.9706 14 23 11.9853 23 9.5V6.5H5V9.5C5 11.9853 9.02944 14 14 14Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9860)' + ''}
      />
      <ellipse
        cx={14}
        cy={6.5}
        rx={9}
        ry={4.5}
        fill={'url(#' + iconId + '-paint5_linear_72095_9860)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9860'}
          x1={9.77424}
          y1={20.3405}
          x2={12.382}
          y2={26.6059}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA43D" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9860'}
          x1={23.0257}
          y1={22.9965}
          x2={15.2642}
          y2={10.2979}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A69" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9860'}
          x1={9.77424}
          y1={14.3405}
          x2={12.382}
          y2={20.6059}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA43D" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9860'}
          x1={23.0257}
          y1={16.9965}
          x2={15.2642}
          y2={4.29794}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A69" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9860'}
          x1={9.77424}
          y1={8.34051}
          x2={12.382}
          y2={14.6059}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA43D" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_9860'}
          x1={23.0257}
          y1={10.9965}
          x2={15.2642}
          y2={-1.70206}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A69" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
