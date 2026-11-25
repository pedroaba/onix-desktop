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
        d="M12.25 6C8.79822 6 6 8.79822 6 12.25V35.75C6 39.2018 8.79822 42 12.25 42H35.75C39.2018 42 42 39.2018 42 35.75V12.25C42 8.79822 39.2018 6 35.75 6H12.25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_9476)' + ''}
      />
      <path
        d="M12 13.25C12 12.5596 12.5596 12 13.25 12H34.75C35.4404 12 36 12.5596 36 13.25C36 13.9404 35.4404 14.5 34.75 14.5H13.25C12.5596 14.5 12 13.9404 12 13.25Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_9476)' + ''}
      />
      <path
        d="M23.25 20.5C22.5596 20.5 22 21.0596 22 21.75C22 22.4404 22.5596 23 23.25 23H34.75C35.4404 23 36 22.4404 36 21.75C36 21.0596 35.4404 20.5 34.75 20.5H23.25Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9476)' + ''}
      />
      <path
        d="M22 32.25C22 31.5596 22.5596 31 23.25 31H34.75C35.4404 31 36 31.5596 36 32.25C36 32.9404 35.4404 33.5 34.75 33.5H23.25C22.5596 33.5 22 32.9404 22 32.25Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9476)' + ''}
      />
      <path
        d="M19 21.5C19 23.433 17.433 25 15.5 25C13.567 25 12 23.433 12 21.5C12 19.567 13.567 18 15.5 18C17.433 18 19 19.567 19 21.5Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_9476)' + ''}
      />
      <path
        d="M19 32.5C19 34.433 17.433 36 15.5 36C13.567 36 12 34.433 12 32.5C12 30.567 13.567 29 15.5 29C17.433 29 19 30.567 19 32.5Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_9476)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_9476'}
          x1={18.8571}
          y1={6}
          x2={32.6497}
          y2={40.0592}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF" />
          <stop offset={1} stopColor="#8CD0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_9476'}
          x1={10.8}
          y1={10.8}
          x2={39.9793}
          y2={15.9787}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9476'}
          x1={10.8}
          y1={10.8}
          x2={39.9793}
          y2={15.9787}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9476'}
          x1={10.8}
          y1={10.8}
          x2={39.9793}
          y2={15.9787}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_9476'}
          x1={10.8}
          y1={10.8}
          x2={39.9793}
          y2={15.9787}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_9476'}
          x1={10.8}
          y1={10.8}
          x2={39.9793}
          y2={15.9787}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
