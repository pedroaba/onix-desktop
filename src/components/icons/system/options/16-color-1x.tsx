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
        d="M14 11.5C14 11.2239 13.7761 11 13.5 11H2.5L2.41012 11.0081C2.17688 11.0504 2 11.2546 2 11.5C2 11.7762 2.22386 12 2.5 12H13.5L13.5899 11.992C13.8231 11.9496 14 11.7455 14 11.5Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8792)' + ''}
      />
      <path
        d="M14 11.5C14 11.2239 13.7761 11 13.5 11H2.5L2.41012 11.0081C2.17688 11.0504 2 11.2546 2 11.5C2 11.7762 2.22386 12 2.5 12H13.5L13.5899 11.992C13.8231 11.9496 14 11.7455 14 11.5Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8792)' + ''}
      />
      <path
        d="M14 11.5C14 11.2239 13.7761 11 13.5 11H2.5L2.41012 11.0081C2.17688 11.0504 2 11.2546 2 11.5C2 11.7762 2.22386 12 2.5 12H13.5L13.5899 11.992C13.8231 11.9496 14 11.7455 14 11.5Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_8792)' + ''}
      />
      <path
        d="M14 4.50002C14 4.22388 13.7761 4.00002 13.5 4.00002H2.5L2.41012 4.00807C2.17688 4.05041 2 4.25456 2 4.50002C2 4.77616 2.22386 5.00002 2.5 5.00002H13.5L13.5899 4.99196C13.8231 4.94963 14 4.74548 14 4.50002Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8792)' + ''}
      />
      <path
        d="M14 4.50002C14 4.22388 13.7761 4.00002 13.5 4.00002H2.5L2.41012 4.00807C2.17688 4.05041 2 4.25456 2 4.50002C2 4.77616 2.22386 5.00002 2.5 5.00002H13.5L13.5899 4.99196C13.8231 4.94963 14 4.74548 14 4.50002Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_8792)' + ''}
      />
      <path
        d="M14 4.50002C14 4.22388 13.7761 4.00002 13.5 4.00002H2.5L2.41012 4.00807C2.17688 4.05041 2 4.25456 2 4.50002C2 4.77616 2.22386 5.00002 2.5 5.00002H13.5L13.5899 4.99196C13.8231 4.94963 14 4.74548 14 4.50002Z"
        fill={'url(#' + iconId + '-paint5_radial_72095_8792)' + ''}
      />
      <circle
        cx={6}
        cy={11.5}
        r={2}
        fill={'url(#' + iconId + '-paint6_linear_72095_8792)' + ''}
      />
      <circle
        cx={10}
        cy={4.5}
        r={2}
        fill={'url(#' + iconId + '-paint7_linear_72095_8792)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8792'}
          x1={14.75}
          y1={12.8}
          x2={7.42088}
          y2={-1.06397}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C959B" />
          <stop offset={1} stopColor="#A3ACB5" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8792'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10 4.5) scale(3 2.3326)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_8792'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6 11.5) scale(3 2.3326)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8792'}
          x1={14.75}
          y1={12.8}
          x2={7.42088}
          y2={-1.06397}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C959B" />
          <stop offset={1} stopColor="#A3ACB5" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_8792'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10 4.5) scale(3 2.3326)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint5_radial_72095_8792'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6 11.5) scale(3 2.3326)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_8792'}
          x1={4.4}
          y1={9.5}
          x2={7.6}
          y2={13.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29B4FB" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_72095_8792'}
          x1={8.4}
          y1={2.5}
          x2={11.6}
          y2={6.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29B4FB" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
