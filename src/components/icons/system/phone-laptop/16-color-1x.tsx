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
        d="M5.5 10L9 9.5L12.5 10H12.7639C12.9192 10 13.0723 10.0361 13.2111 10.1056L14.5528 10.7764C14.8269 10.9134 15 11.1936 15 11.5H3C3 11.1936 3.17313 10.9134 3.44721 10.7764L4.78885 10.1056C4.92771 10.0361 5.08082 10 5.23607 10H5.5Z"
        fill={'url(#' + iconId + '-paint0_radial_72095_8499)' + ''}
      />
      <path
        d="M5.5 10L9 9.5L12.5 10H12.7639C12.9192 10 13.0723 10.0361 13.2111 10.1056L14.5528 10.7764C14.8269 10.9134 15 11.1936 15 11.5H3C3 11.1936 3.17313 10.9134 3.44721 10.7764L4.78885 10.1056C4.92771 10.0361 5.08082 10 5.23607 10H5.5Z"
        fill={'url(#' + iconId + '-paint1_linear_72095_8499)' + ''}
      />
      <path
        d="M3.5 11C3.22386 11 3 11.2239 3 11.5C3 11.7761 3.22386 12 3.5 12H14.5C14.7761 12 15 11.7761 15 11.5C15 11.2239 14.7761 11 14.5 11H3.5Z"
        fill={'url(#' + iconId + '-paint2_linear_72095_8499)' + ''}
      />
      <path
        d="M4 4.5C4 3.67157 4.67157 3 5.5 3H12.5C13.3284 3 14 3.67157 14 4.5V8.5C14 9.32843 13.3284 10 12.5 10H5.5C4.67157 10 4 9.32843 4 8.5V4.5Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8499)' + ''}
      />
      <path
        d="M5.5 3C4.67157 3 4 3.67157 4 4.5V8.5C4 9.32843 4.67157 10 5.5 10H5.23607C5.08082 10 4.92771 10.0361 4.78885 10.1056L3.44721 10.7764C3.17313 10.9134 3 11.1936 3 11.5C3 11.7761 3.22386 12 3.5 12H14.5C14.7761 12 15 11.7761 15 11.5C15 11.1936 14.8269 10.9134 14.5528 10.7764L13.2111 10.1056C13.0723 10.0361 12.9192 10 12.7639 10H12.5C13.3284 10 14 9.32843 14 8.5V4.5C14 3.67157 13.3284 3 12.5 3H5.5Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_8499)' + ''}
        fillOpacity={0.3}
      />
      <path
        d="M2.5 5C1.67157 5 1 5.67157 1 6.5V12.5C1 13.3284 1.67157 14 2.5 14H5.5C6.32843 14 7 13.3284 7 12.5V6.5C7 5.67157 6.32843 5 5.5 5H2.5Z"
        fill={'url(#' + iconId + '-paint5_radial_72095_8499)' + ''}
      />
      <path
        d="M4 12.5C3.72386 12.5 3.5 12.2761 3.5 12C3.5 11.7239 3.72386 11.5 4 11.5C4.27614 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.27614 12.5 4 12.5Z"
        fill={'url(#' + iconId + '-paint6_radial_72095_8499)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_72095_8499'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.75 7.5) rotate(15.6498) scale(29.931 24.247)"
        >
          <stop stopColor="#F08AF4" />
          <stop offset={0.265311} stopColor="#9C6CFE" />
          <stop offset={0.452566} stopColor="#4E44DB" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint1_linear_72095_8499'}
          x1={15}
          y1={11.9762}
          x2={13.9513}
          y2={7.25686}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#63686E" />
          <stop offset={1} stopColor="#889096" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_72095_8499'}
          x1={15}
          y1={11.9286}
          x2={14.8463}
          y2={10.0842}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#889096" />
          <stop offset={1} stopColor="#AAB3BD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8499'}
          x1={11}
          y1={3}
          x2={11.4083}
          y2={11.0074}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6CE0FF" />
          <stop offset={1} stopColor="#4894FE" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_8499'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6 9.5) scale(2.5 5.23437)"
        >
          <stop offset={0.148148} stopColor="#4A43CB" />
          <stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint5_radial_72095_8499'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-0.5 1.90625) rotate(60.6305) scale(14.9101 30.1586)"
        >
          <stop stopColor="#F08AF4" />
          <stop offset={0.535356} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#4E44DB" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint6_radial_72095_8499'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(3.34375 11.5667) rotate(69.5731) scale(2.59661 2.03173)"
        >
          <stop stopColor="#DECBFF" />
          <stop offset={1} stopColor="#D6CFFF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
