'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 36C9 40.4183 15.7157 44 24 44C32.2077 44 38.8757 40.4842 38.9983 36.1223L39 32H9V36Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9846)' + ''}
      />
      <ellipse
        cx={24}
        cy={32}
        rx={15}
        ry={8}
        fill={'url(#' + iconId + '-paint1_linear_72095_9846)' + ''}
      />
      <path
        d="M9 26C9 30.4183 15.7157 34 24 34C32.2077 34 38.8757 30.4842 38.9983 26.1223L39 22H9V26Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9846)' + ''}
      />
      <ellipse
        cx={24}
        cy={22}
        rx={15}
        ry={8}
        fill={'url(#' + iconId + '-paint3_linear_72095_9846)' + ''}
      />
      <path
        d="M9 16C9 20.4183 15.7157 24 24 24C32.2077 24 38.8757 20.4842 38.9983 16.1223L39 12H9V16Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9846)' + ''}
      />
      <ellipse
        cx={24}
        cy={12}
        rx={15}
        ry={8}
        fill={'url(#' + iconId + '-paint5_linear_72095_9846)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9846'}
          x1={16.9571}
          y1={34.9448}
          x2={21.0094}
          y2={45.0869}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA43D" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9846'}
          x1={39.0429}
          y1={39.9938}
          x2={24.8563}
          y2={18.234}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A69" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9846'}
          x1={16.9571}
          y1={24.9448}
          x2={21.0094}
          y2={35.0869}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA43D" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9846'}
          x1={39.0429}
          y1={29.9938}
          x2={24.8563}
          y2={8.23395}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A69" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9846'}
          x1={16.9571}
          y1={14.9448}
          x2={21.0094}
          y2={25.0869}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA43D" />
          <stop offset={1} stopColor="#FB5937" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_9846'}
          x1={39.0429}
          y1={19.9938}
          x2={24.8563}
          y2={-1.76605}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A69" />
          <stop offset={1} stopColor="#FFCD0F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
