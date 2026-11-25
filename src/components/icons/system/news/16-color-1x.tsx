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
        d="M13 4C14.1046 4 15 4.89543 15 6V10.5C15 11.8807 13.8807 13 12.5 13L12.4766 4H13Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_8906)' + ''}
      />
      <path
        d="M1 4C1 2.89543 1.89543 2 3 2H11C12.1046 2 13 2.89543 13 4V5V10V12.95C12.8384 12.9828 12.6712 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V4Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8906)' + ''}
      />
      <path
        d="M1 4C1 2.89543 1.89543 2 3 2H11C12.1046 2 13 2.89543 13 4V5V10V12.95C12.8384 12.9828 12.6712 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V4Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_8906)' + ''}
      />
      <path
        d="M1 4C1 2.89543 1.89543 2 3 2H11C12.1046 2 13 2.89543 13 4V5V10V12.95C12.8384 12.9828 12.6712 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V4Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8906)' + ''}
      />
      <path
        d="M3.5 7C3.22386 7 3 7.22386 3 7.5V9.5C3 9.77614 3.22386 10 3.5 10H5.5C5.77614 10 6 9.77614 6 9.5V7.5C6 7.22386 5.77614 7 5.5 7H3.5Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_8906)' + ''}
      />
      <path
        d="M3.5 5C3.22386 5 3 5.22386 3 5.5C3 5.77614 3.22386 6 3.5 6H10.5C10.7761 6 11 5.77614 11 5.5C11 5.22386 10.7761 5 10.5 5H3.5ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10H10.5C10.7761 10 11 9.77614 11 9.5C11 9.22386 10.7761 9 10.5 9H7.5Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_8906)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_8906'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16.5141 5.35) rotate(129.203) scale(6.38779 9.53604)"
        >
          <stop stopColor="#068BEB" />
          <stop offset={0.616664} stopColor="#0056CF" />
          <stop offset={0.974342} stopColor="#0027A7" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8906'}
          x1={4.42857}
          y1={0.307692}
          x2={13.3463}
          y2={12.3108}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#367AF2" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_8906'}
          x1={7.85714}
          y1={10.8846}
          x2={7.85714}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.18125} stopColor="#2764E7" stopOpacity={0} />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8906'}
          x1={7.42857}
          y1={5.38462}
          x2={11.5346}
          y2={16.1256}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DCF8FF" stopOpacity={0} />
          <stop offset={1} stopColor="#FF6CE8" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_8906'}
          x1={3.28633}
          y1={6.85329}
          x2={4.78662}
          y2={9.85683}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFCFF" />
          <stop offset={1} stopColor="#9FF0F9" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_8906'}
          x1={3.69977}
          y1={5.08779}
          x2={4.2269}
          y2={10.5246}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#CCEAFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
