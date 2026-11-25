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
        d="M10 2H5.5C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V8L12 6L10 2Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_8796)' + ''}
      />
      <path
        d="M10 2H5.5C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V8L12 6L10 2Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_8796)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M10 2H5.5C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V8L12 6L10 2Z"
        fill={'url(#' + iconId + '-paint2_radial_378174_8796)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M10 2H5.5C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V8L12 6L10 2Z"
        fill={'url(#' + iconId + '-paint3_radial_378174_8796)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M10 2H5.5C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V8L12 6L10 2Z"
        fill={'url(#' + iconId + '-paint4_radial_378174_8796)' + ''}
        fillOpacity={0.7}
      />
      <path
        d="M10.01 6.5V2L16.01 8H11.51C10.6816 8 10.01 7.32843 10.01 6.5Z"
        fill={'url(#' + iconId + '-paint5_linear_378174_8796)' + ''}
      />
      <path
        d="M3.5 12V13H3C2.44772 13 2 13.4477 2 14V18C2 18.5523 2.44771 19 3 19H8C8.55228 19 9 18.5523 9 18V14C9 13.4477 8.55228 13 8 13H7.5V12C7.5 10.8954 6.60457 10 5.5 10C4.39543 10 3.5 10.8954 3.5 12ZM4.5 13V12C4.5 11.4477 4.94772 11 5.5 11C6.05228 11 6.5 11.4477 6.5 12V13H4.5Z"
        fill={'url(#' + iconId + '-paint6_linear_378174_8796)' + ''}
      />
      <path
        d="M6.25 16C6.25 15.5858 5.91421 15.25 5.5 15.25C5.08579 15.25 4.75 15.5858 4.75 16C4.75 16.4142 5.08579 16.75 5.5 16.75C5.91421 16.75 6.25 16.4142 6.25 16Z"
        fill="#944600"
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_8796'}
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
          id={iconId + '-paint1_radial_378174_8796'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16.5 2.5) rotate(131.781) scale(9.75567 5.7303)"
        >
          <stop offset={0.362364} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_378174_8796'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.5 13) rotate(90) scale(3)"
        >
          <stop stopColor="#4A43CB" stopOpacity={0} />
          <stop offset={0.619792} stopColor="#4A43CB" stopOpacity={0.5} />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_378174_8796'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.5 14.5) rotate(-180) scale(2.5)"
        >
          <stop stopColor="#4A43CB" stopOpacity={0.5} />
          <stop offset={0.731251} stopColor="#4A43CB" stopOpacity={0.05} />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint4_radial_378174_8796'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.5 17) rotate(90) scale(3 2.05312)"
        >
          <stop stopColor="#4A43CB" stopOpacity={0.4} />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint5_linear_378174_8796'}
          x1={13}
          y1={4.5}
          x2={11.5}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9FF0F9" />
          <stop offset={1} stopColor="#B3E0FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint6_linear_378174_8796'}
          x1={9.01001}
          y1={18.9965}
          x2={1.11013}
          y2={13.9702}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6F47" />
          <stop offset={1} stopColor="#FFD638" />
        </linearGradient>
      </defs>
    </svg>
  )
}
