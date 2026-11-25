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
        d="M6.58398 12.876L14.834 7.37598L15.666 8.62405L7.41603 14.1241L6.58398 12.876Z"
        fill="#212121"
      />
      <path
        d="M6.58398 12.876L14.834 7.37598L15.666 8.62405L7.41603 14.1241L6.58398 12.876Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8931)' + ''}
      />
      <path
        d="M6.58398 12.876L14.834 7.37598L15.666 8.62405L7.41603 14.1241L6.58398 12.876Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8931)' + ''}
      />
      <path
        d="M6.58398 12.876L14.834 7.37598L15.666 8.62405L7.41603 14.1241L6.58398 12.876Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_8931)' + ''}
      />
      <path
        d="M15.6646 19.6708L5.66455 14.6708L6.33537 13.3292L16.3354 18.3292L15.6646 19.6708Z"
        fill="#242424"
      />
      <path
        d="M15.6646 19.6708L5.66455 14.6708L6.33537 13.3292L16.3354 18.3292L15.6646 19.6708Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8931)' + ''}
      />
      <path
        d="M15.6646 19.6708L5.66455 14.6708L6.33537 13.3292L16.3354 18.3292L15.6646 19.6708Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_8931)' + ''}
      />
      <path
        d="M15.6646 19.6708L5.66455 14.6708L6.33537 13.3292L16.3354 18.3292L15.6646 19.6708Z"
        fill={'url(#' + iconId + '-paint5_radial_72095_8931)' + ''}
      />
      <circle
        cx={16}
        cy={7}
        r={5}
        fill={'url(#' + iconId + '-paint6_linear_72095_8931)' + ''}
      />
      <circle
        cx={6}
        cy={14}
        r={4}
        fill={'url(#' + iconId + '-paint7_linear_72095_8931)' + ''}
      />
      <circle cx={16} cy={19} r={3} fill="#D9D9D9" />
      <circle
        cx={16}
        cy={19}
        r={3}
        fill={'url(#' + iconId + '-paint8_linear_72095_8931)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8931'}
          x1={6.58398}
          y1={7.37598}
          x2={8.47508}
          y2={14.6483}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8931'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 7) rotate(143.973) scale(6.80074 7.76101)"
        >
          <stop offset={0.627668} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_8931'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6 14) rotate(-33.6901) scale(5.40833 6.17199)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8931'}
          x1={5.66455}
          y1={13.3292}
          x2={7.11923}
          y2={20.3231}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_8931'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 19.0001) rotate(-153.435) scale(4.47214 4.88569)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint5_radial_72095_8931'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6 14.0001) rotate(26.5651) scale(5.59017 5.55484)"
        >
          <stop offset={0.6775} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_8931'}
          x1={11.3571}
          y1={3.875}
          x2={18.2584}
          y2={11.0451}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BDABE" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_72095_8931'}
          x1={2.28571}
          y1={11.5}
          x2={7.80668}
          y2={17.2361}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC318F" />
          <stop offset={1} stopColor="#B91D6B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_72095_8931'}
          x1={13.9375}
          y1={15.0625}
          x2={17.875}
          y2={22.5625}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCD0F" />
          <stop offset={1} stopColor="#FE8401" />
        </linearGradient>
      </defs>
    </svg>
  )
}
