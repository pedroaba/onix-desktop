'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 25H26.6875C26.6875 25 26 25.4 26 27C26 28.6 26.6875 29 26.6875 29H9C7.34315 29 6 27.6569 6 26V25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_10471)' + ''}
      />
      <path
        d="M9 28C7.89543 28 7 27.1046 7 26H25.25C26.2165 26 27 25.2165 27 24.25V6C27 3.79086 25.2091 2 23 2H9C6.79086 2 5 3.79086 5 6V26C5 28.2091 6.79086 30 9 30H26C26.5523 30 27 29.5523 27 29C27 28.4477 26.5523 28 26 28H9Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_10471)' + ''}
      />
      <path
        d="M10.75 6C9.7835 6 9 6.7835 9 7.75V10.25C9 11.2165 9.7835 12 10.75 12H21.25C22.2165 12 23 11.2165 23 10.25V7.75C23 6.7835 22.2165 6 21.25 6H10.75Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_10471)' + ''}
      />
      <path
        d="M27 6C27 3.79086 25.2091 2 23 2H9C6.79086 2 5 3.79086 5 6V26C5 28.2091 6.79086 30 9 30H26C26.5523 30 27 29.5523 27 29C27 22.0418 27 13.6269 27 6Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_10471)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M27 6C27 3.79086 25.2091 2 23 2H9C6.79086 2 5 3.79086 5 6V26C5 28.2091 6.79086 30 9 30H26C26.5523 30 27 29.5523 27 29C27 22.0418 27 13.6269 27 6Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_10471)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M17 28C17 28.5464 17.3409 29.0587 17.9365 29.5C19.1468 30.3967 21.409 31 24 31C27.866 31 31 29.6569 31 28V19C30.5636 19.3302 30.0635 19.6033 29.5406 19.8274L29.5 19.8447C28.8999 20.0984 28.226 20.3072 27.5 20.4661C26.4244 20.7015 25.2343 20.8273 24 20.8273C21.9137 20.8273 19.9538 20.4678 18.4594 19.8274C17.9365 19.6033 17.4364 19.3302 17 19V28Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_10471)' + ''}
      />
      <path
        d="M27.5 21.5987C28.272 21.4073 28.9507 21.1545 29.5 20.856C30.4394 20.3453 31 19.7007 31 19C31 18.2993 30.4394 17.6547 29.5 17.144C28.9507 16.8455 28.272 16.5927 27.5 16.4013C26.4704 16.1461 25.275 16 24 16C20.134 16 17 17.3431 17 19C17 20.6569 20.134 22 24 22C25.275 22 26.4704 21.8539 27.5 21.5987Z"
        fill={'url(#' + iconId + '-paint6_linear_72095_10471)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_10471'}
          x1={15.5652}
          y1={28.2}
          x2={15.5652}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={0.715705} stopColor="#58AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_10471'}
          x1={12.5906}
          y1={7.23895}
          x2={16.974}
          y2={37.3731}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={1} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_10471'}
          x1={13.8282}
          y1={4.97063}
          x2={20.9218}
          y2={15.2709}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9FF0F9" />
          <stop offset={1} stopColor="#6CE0FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_10471'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19 28) rotate(150.642) scale(7.64899 8.34019)"
        >
          <stop stopColor="#4A43CB" />
          <stop offset={0.442902} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_10471'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.5 27) rotate(-90) scale(11.5 5.96562)"
        >
          <stop stopColor="#171155" />
          <stop offset={0.328125} stopColor="#171155" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_10471'}
          x1={20.3051}
          y1={16.2967}
          x2={28.4706}
          y2={29.6916}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#4894FE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_10471'}
          x1={28.6667}
          y1={22.6}
          x2={20.1111}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66C0FF" />
          <stop offset={1} stopColor="#C8F3FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
