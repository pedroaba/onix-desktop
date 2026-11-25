'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5001 9.49987C11.7762 9.49987 12.0001 9.72372 12.0001 9.99987C12.0001 10.276 11.7762 10.4999 11.5001 10.4999L3.37793 12.2673L3.98258 9.99987L3.37793 7.73242L11.5001 9.49987Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_8253)' + ''}
      />
      <path
        d="M2.72363 2.05279C2.54771 1.96483 2.33657 1.98818 2.18412 2.11244C2.03167 2.2367 1.96623 2.4388 2.0169 2.62884L3.51498 8.24662C3.56554 8.43622 3.72234 8.57872 3.9159 8.61098L10.7704 9.7534C11.0489 9.79982 11.0489 10.2002 10.7704 10.2466L3.9159 11.389C3.72234 11.4213 3.56554 11.5638 3.51498 11.7534L2.0169 17.3712C1.96623 17.5612 2.03167 17.7633 2.18412 17.8876C2.33657 18.0118 2.54771 18.0352 2.72363 17.9472L17.7236 10.4472C17.893 10.3625 18 10.1894 18 10C18 9.81062 17.893 9.63749 17.7236 9.55279L2.72363 2.05279Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8253)' + ''}
      />
      <path
        d="M2.72363 2.05279C2.54771 1.96483 2.33657 1.98818 2.18412 2.11244C2.03167 2.2367 1.96623 2.4388 2.0169 2.62884L3.51498 8.24662C3.56554 8.43622 3.72234 8.57872 3.9159 8.61098L10.7704 9.7534C11.0489 9.79982 11.0489 10.2002 10.7704 10.2466L3.9159 11.389C3.72234 11.4213 3.56554 11.5638 3.51498 11.7534L2.0169 17.3712C1.96623 17.5612 2.03167 17.7633 2.18412 17.8876C2.33657 18.0118 2.54771 18.0352 2.72363 17.9472L17.7236 10.4472C17.893 10.3625 18 10.1894 18 10C18 9.81062 17.893 9.63749 17.7236 9.55279L2.72363 2.05279Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_8253)' + ''}
      />
      <path
        d="M2.72363 2.05279C2.54771 1.96483 2.33657 1.98818 2.18412 2.11244C2.03167 2.2367 1.96623 2.4388 2.0169 2.62884L3.51498 8.24662C3.56554 8.43622 3.72234 8.57872 3.9159 8.61098L10.7704 9.7534C11.0489 9.79982 11.0489 10.2002 10.7704 10.2466L3.9159 11.389C3.72234 11.4213 3.56554 11.5638 3.51498 11.7534L2.0169 17.3712C1.96623 17.5612 2.03167 17.7633 2.18412 17.8876C2.33657 18.0118 2.54771 18.0352 2.72363 17.9472L17.7236 10.4472C17.893 10.3625 18 10.1894 18 10C18 9.81062 17.893 9.63749 17.7236 9.55279L2.72363 2.05279Z"
        fill={'url(#' + iconId + '-paint3_radial_72095_8253)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19C16.9853 19 19 16.9853 19 14.5Z"
        fill={'url(#' + iconId + '-paint4_linear_72095_8253)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 12C14.7761 12 15 12.2239 15 12.5V14H16C16.2761 14 16.5 14.2239 16.5 14.5C16.5 14.7761 16.2761 15 16 15H14.5C14.2239 15 14 14.7761 14 14.5V12.5C14 12.2239 14.2239 12 14.5 12Z"
        fill={'url(#' + iconId + '-paint5_linear_72095_8253)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_8253'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.5 9.99988) scale(7 0.9275)"
        >
          <stop stopColor="#0094F0" />
          <stop offset={1} stopColor="#2052CB" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8253'}
          x1={2}
          y1={-4.5}
          x2={15.7031}
          y2={13.7079}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#0094F0" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_8253'}
          x1={10}
          y1={6.3125}
          x2={14.1611}
          y2={17.5709}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125345} stopColor="#DCF8FF" stopOpacity={0} />
          <stop offset={0.768599} stopColor="#FF6CE8" stopOpacity={0.7} />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_72095_8253'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.5 16.5) rotate(83.2902) scale(8.55862 6.72463)"
        >
          <stop offset={0.755} stopColor="#1B44B1" />
          <stop offset={1} stopColor="#1B44B1" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_72095_8253'}
          x1={11.5}
          y1={9.5}
          x2={16}
          y2={19.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43E5CA" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_72095_8253'}
          x1={14.2188}
          y1={12.4592}
          x2={13.5089}
          y2={14.892}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#D1D1FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
