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
        d="M4 6.25C4 5.00736 5.00736 4 6.25 4H17.75C18.9926 4 20 5.00736 20 6.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V6.25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_10065)' + ''}
      />
      <path
        d="M4 6.25C4 5.00736 5.00736 4 6.25 4H17.75C18.9926 4 20 5.00736 20 6.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V6.25Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_10065)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M4 6.25C4 5.00736 5.00736 4 6.25 4H17.75C18.9926 4 20 5.00736 20 6.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V6.25Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_10065)' + ''}
        fillOpacity={0.4}
      />
      <path
        d="M8 4.25C8 5.49264 9.00736 6.5 10.25 6.5H13.75C14.9926 6.5 16 5.49264 16 4.25C16 3.00736 14.9926 2 13.75 2H10.25C9.00736 2 8 3.00736 8 4.25Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_10065)' + ''}
      />
      <path
        d="M17.0303 11.0303C17.3232 10.7374 17.3232 10.2626 17.0303 9.96967C16.7374 9.67678 16.2626 9.67678 15.9697 9.96967L11 14.9393L9.03033 12.9697C8.73744 12.6768 8.26256 12.6768 7.96967 12.9697C7.67678 13.2626 7.67678 13.7374 7.96967 14.0303L10.4697 16.5303C10.7626 16.8232 11.2374 16.8232 11.5303 16.5303L17.0303 11.0303Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_10065)' + ''}
        fillOpacity={0.9}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_10065'}
          x1={4}
          y1={5.8}
          x2={18.1463}
          y2={23.4829}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36DFF1" />
          <stop offset={1} stopColor="#0094F0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_10065'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 3) rotate(90) scale(6.16892 6.75)"
        >
          <stop stopColor="#0A1852" />
          <stop offset={0.9} stopColor="#0A1852" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_10065'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 4.61779) rotate(90) scale(2.79325 4.95298)"
        >
          <stop stopColor="#0A1852" />
          <stop offset={1} stopColor="#0A1852" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_10065'}
          x1={12}
          y1={2}
          x2={12}
          y2={6.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE06B" />
          <stop offset={1} stopColor="#FAB500" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_10065'}
          x1={18}
          y1={18.5}
          x2={10.2655}
          y2={7.73189}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}
