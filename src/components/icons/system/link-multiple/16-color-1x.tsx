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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.25C1 4.45507 2.45507 3 4.25 3H8.75C10.5449 3 12 4.45507 12 6.25C12 8.04493 10.5449 9.5 8.75 9.5H4.25C2.45507 9.5 1 8.04493 1 6.25ZM4.25 4.5C3.2835 4.5 2.5 5.2835 2.5 6.25C2.5 7.2165 3.2835 8 4.25 8H8.75C9.7165 8 10.5 7.2165 10.5 6.25C10.5 5.2835 9.7165 4.5 8.75 4.5H4.25Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_9195)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.25C1 4.45507 2.45507 3 4.25 3H8.75C10.5449 3 12 4.45507 12 6.25C12 8.04493 10.5449 9.5 8.75 9.5H4.25C2.45507 9.5 1 8.04493 1 6.25ZM4.25 4.5C3.2835 4.5 2.5 5.2835 2.5 6.25C2.5 7.2165 3.2835 8 4.25 8H8.75C9.7165 8 10.5 7.2165 10.5 6.25C10.5 5.2835 9.7165 4.5 8.75 4.5H4.25Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_9195)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.25C1 4.45507 2.45507 3 4.25 3H8.75C10.5449 3 12 4.45507 12 6.25C12 8.04493 10.5449 9.5 8.75 9.5H4.25C2.45507 9.5 1 8.04493 1 6.25ZM4.25 4.5C3.2835 4.5 2.5 5.2835 2.5 6.25C2.5 7.2165 3.2835 8 4.25 8H8.75C9.7165 8 10.5 7.2165 10.5 6.25C10.5 5.2835 9.7165 4.5 8.75 4.5H4.25Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_9195)' + ''}
      />
      <path
        d="M10.4823 6.5H7.25C5.45507 6.5 4 7.95507 4 9.75C4 11.5449 5.45507 13 7.25 13H11.75C13.5449 13 15 11.5449 15 9.75C15 8.03575 13.6728 6.63148 11.9899 6.50872C11.9468 7.0549 11.7688 7.56312 11.4891 8H11.75C12.7165 8 13.5 8.7835 13.5 9.75C13.5 10.7165 12.7165 11.5 11.75 11.5H7.25C6.2835 11.5 5.5 10.7165 5.5 9.75C5.5 8.86838 6.15193 8.13903 7 8.01772V8H8.75C9.63162 8 10.361 7.34807 10.4823 6.5Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_9195)' + ''}
      />
      <path
        d="M10.4823 6.5H7.25C5.45507 6.5 4 7.95507 4 9.75C4 11.5449 5.45507 13 7.25 13H11.75C13.5449 13 15 11.5449 15 9.75C15 8.03575 13.6728 6.63148 11.9899 6.50872C11.9468 7.0549 11.7688 7.56312 11.4891 8H11.75C12.7165 8 13.5 8.7835 13.5 9.75C13.5 10.7165 12.7165 11.5 11.75 11.5H7.25C6.2835 11.5 5.5 10.7165 5.5 9.75C5.5 8.86838 6.15193 8.13903 7 8.01772V8H8.75C9.63162 8 10.361 7.34807 10.4823 6.5Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_9195)' + ''}
      />
      <path
        d="M10.4823 6.5H7.25C5.45507 6.5 4 7.95507 4 9.75C4 11.5449 5.45507 13 7.25 13H11.75C13.5449 13 15 11.5449 15 9.75C15 8.03575 13.6728 6.63148 11.9899 6.50872C11.9468 7.0549 11.7688 7.56312 11.4891 8H11.75C12.7165 8 13.5 8.7835 13.5 9.75C13.5 10.7165 12.7165 11.5 11.75 11.5H7.25C6.2835 11.5 5.5 10.7165 5.5 9.75C5.5 8.86838 6.15193 8.13903 7 8.01772V8H8.75C9.63162 8 10.361 7.34807 10.4823 6.5Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_9195)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_9195'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.5 3) rotate(37.875) scale(11.4018 10.2127)"
        >
          <stop stopColor="#0FAFFF" />
          <stop offset={0.429447} stopColor="#367AF2" />
          <stop offset={0.942067} stopColor="#5750E2" />
          <stop offset={1} stopColor="#6F47DF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_9195'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.5 10) rotate(-180) scale(5 5.07351)"
        >
          <stop offset={0.26875} stopColor="#261D82" stopOpacity={0} />
          <stop offset={0.5} stopColor="#261D82" />
          <stop offset={0.55625} stopColor="#261D82" />
          <stop offset={0.865625} stopColor="#261D82" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_9195'}
          x1={12}
          y1={8}
          x2={6.36477}
          y2={3.5786}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5157E4" stopOpacity={0} />
          <stop offset={0.066311} stopColor="#5157E4" />
          <stop offset={0.326595} stopColor="#5157E4" />
          <stop offset={0.603575} stopColor="#5157E4" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_9195'}
          x1={0.464285}
          y1={3.65625}
          x2={6.32658}
          y2={18.5735}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36DFF1" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_9195'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9 6) scale(4.5 4.56616)"
        >
          <stop offset={0.260417} stopColor="#2764E7" stopOpacity={0} />
          <stop offset={0.447917} stopColor="#2764E7" />
          <stop offset={0.578125} stopColor="#2764E7" />
          <stop offset={0.767361} stopColor="#2764E7" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_9195'}
          x1={4}
          y1={5}
          x2={9.52664}
          y2={7.95009}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#31B3EE" stopOpacity={0.243137} />
          <stop offset={0.207974} stopColor="#31B3EE" />
          <stop offset={0.538814} stopColor="#31B3EE" />
          <stop offset={0.755175} stopColor="#31B3EE" stopOpacity={0.902403} />
          <stop offset={1} stopColor="#31B3EE" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
