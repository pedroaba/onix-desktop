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
        d="M21 7.5V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V7.5L12 6.5L21 7.5Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_10165)' + ''}
      />
      <path
        d="M21 7.5V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V7.5L12 6.5L21 7.5Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_10165)' + ''}
      />
      <path
        d="M21 7.5V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V7.5L12 6.5L21 7.5Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_10165)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M21 7.5V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V7.5L12 6.5L21 7.5Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_10165)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M21 7.5V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V7.5L12 6.5L21 7.5Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_10165)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M17.75 3C19.5449 3 21 4.45507 21 6.25V8H3V6.25C3 4.45507 4.45507 3 6.25 3H17.75Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_10165)' + ''}
      />
      <path
        d="M20 15.5C20 14.6716 20.6716 14 21.5 14C22.3284 14 23 14.6716 23 15.5V21.5C23 22.3284 22.3284 23 21.5 23C20.6716 23 20 22.3284 20 21.5V15.5Z"
        fill={'url(#' + iconId + '-paint6_linear_72095_10165)' + ''}
      />
      <path
        d="M17.5 12C16.6716 12 16 12.6716 16 13.5V21.5C16 22.3284 16.6716 23 17.5 23C18.3284 23 19 22.3284 19 21.5V13.5C19 12.6716 18.3284 12 17.5 12Z"
        fill={'url(#' + iconId + '-paint7_linear_72095_10165)' + ''}
      />
      <path
        d="M13.5 16C12.6716 16 12 16.6716 12 17.5V21.5C12 22.3284 12.6716 23 13.5 23C14.3284 23 15 22.3284 15 21.5V17.5C15 16.6716 14.3284 16 13.5 16Z"
        fill={'url(#' + iconId + '-paint8_linear_72095_10165)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_10165'}
          x1={9.42857}
          y1={6.5}
          x2={14.1366}
          y2={20.9321}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_10165'}
          x1={13.9286}
          y1={12.4318}
          x2={16.625}
          y2={24.267}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DCF8FF" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" stopOpacity={0.7} />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_10165'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.5 21) rotate(90) scale(5.5 2.5625)"
        >
          <stop offset={0.535} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_10165'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.5 19.5) rotate(90) scale(8 2.58848)"
        >
          <stop offset={0.535} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_10165'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21.5 20) rotate(90) scale(5.5 2.5)"
        >
          <stop offset={0.535} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_10165'}
          x1={3.72321}
          y1={3}
          x2={5.35631}
          y2={11.5369}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_10165'}
          x1={22.75}
          y1={21.35}
          x2={21.5618}
          y2={13.8407}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7257D" />
          <stop offset={1} stopColor="#E656EB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_72095_10165'}
          x1={19.75}
          y1={24.2222}
          x2={18.1035}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B2AB5" />
          <stop offset={1} stopColor="#DD3CE2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_72095_10165'}
          x1={12.375}
          y1={16.2917}
          x2={18.5343}
          y2={19.4143}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16BBDA" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
      </defs>
    </svg>
  )
}
