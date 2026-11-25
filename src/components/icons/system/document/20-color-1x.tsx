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
        d="M10 2L12 6L16 8V16.5C16 17.3284 15.3284 18 14.5 18H5.5C4.67157 18 4 17.3284 4 16.5V3.5C4 2.67157 4.67157 2 5.5 2H10Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_8716)' + ''}
      />
      <path
        d="M10 2L12 6L16 8V16.5C16 17.3284 15.3284 18 14.5 18H5.5C4.67157 18 4 17.3284 4 16.5V3.5C4 2.67157 4.67157 2 5.5 2H10Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_8716)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M10.01 6.5V2L16.01 8H11.51C10.6816 8 10.01 7.32843 10.01 6.5Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_8716)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_8716'}
          x1={12.4}
          y1={2}
          x2={13.782}
          y2={15.4789}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6CE0FF" />
          <stop offset={1} stopColor="#4894FE" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_8716'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16.5 2.5) rotate(131.781) scale(9.75567 5.7303)"
        >
          <stop offset={0.362364} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_8716'}
          x1={13}
          y1={4.5}
          x2={11.5}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9FF0F9" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
