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
        d="M12 2C9.79086 2 8 3.79086 8 6V7.5H9.5V6C9.5 4.61929 10.6193 3.5 12 3.5C13.3807 3.5 14.5 4.61929 14.5 6V7.5H16V6C16 3.79086 14.2091 2 12 2Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9276)' + ''}
      />
      <path
        d="M20 10.25C20 8.45507 18.5449 7 16.75 7H7.25C5.45507 7 4 8.45507 4 10.25V17.75C4 19.5449 5.45507 21 7.25 21H16.75C18.5449 21 20 19.5449 20 17.75V10.25Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9276)' + ''}
      />
      <path
        d="M12 15.5C12.8284 15.5 13.5 14.8284 13.5 14C13.5 13.1716 12.8284 12.5 12 12.5C11.1716 12.5 10.5 13.1716 10.5 14C10.5 14.8284 11.1716 15.5 12 15.5Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_9276)' + ''}
      />
      <path
        d="M20 10.25C20 8.45507 18.5449 7 16.75 7H7.25C5.45507 7 4 8.45507 4 10.25V17.75C4 19.5449 5.45507 21 7.25 21H16.75C18.5449 21 20 19.5449 20 17.75V10.25Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_9276)' + ''}
      />
      <path
        d="M17.9896 12.1945C18.6423 12.8454 19.8965 13.8805 21.439 14.0928C21.7466 14.1352 22 14.3779 22 14.6817V17.5203C22 21.3363 18.4206 22.7212 17.6467 22.9761C17.5498 23.008 17.4509 23.008 17.354 22.9761C16.5801 22.7213 13.0003 21.3363 13.0003 17.5203L13 14.6818C13 14.378 13.2534 14.1352 13.561 14.0928C15.1032 13.8804 16.3575 12.8454 17.0103 12.1945C17.2704 11.9351 17.7295 11.9352 17.9896 12.1945Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9276)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9276'}
          x1={9.71429}
          y1={0.949254}
          x2={15.8349}
          y2={11.0566}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC205" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9276'}
          x1={21.1429}
          y1={21.875}
          x2={6.54201}
          y2={8.2778}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6F47" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_9276'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.75 15.5) rotate(-105.945) scale(5.46008 7.57586)"
        >
          <stop stopColor="#944600" />
          <stop offset={1} stopColor="#CD8E02" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_9276'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.1429 18.0833) rotate(142.708) scale(6.46446 7.08296)"
        >
          <stop stopColor="#EB4824" />
          <stop offset={0.989901} stopColor="#EB4824" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9276'}
          x1={14.6875}
          y1={12}
          x2={23.0074}
          y2={21.7668}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62BE55" />
          <stop offset={1} stopColor="#1E794A" />
        </linearGradient>
      </defs>
    </svg>
  )
}
