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
        d="M14.668 24.7519L26.668 16.7519L28.3321 19.2481L16.3321 27.2481L14.668 24.7519Z"
        fill="#212121"
      />
      <path
        d="M14.668 24.7519L26.668 16.7519L28.3321 19.2481L16.3321 27.2481L14.668 24.7519Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8911)' + ''}
      />
      <path
        d="M14.668 24.7519L26.668 16.7519L28.3321 19.2481L16.3321 27.2481L14.668 24.7519Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8911)' + ''}
      />
      <path
        d="M14.668 24.7519L26.668 16.7519L28.3321 19.2481L16.3321 27.2481L14.668 24.7519Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_8911)' + ''}
      />
      <path
        d="M28.3291 37.8416L16.3291 31.8416L17.6707 29.1584L29.6707 35.1584L28.3291 37.8416Z"
        fill="#242424"
      />
      <path
        d="M28.3291 37.8416L16.3291 31.8416L17.6707 29.1584L29.6707 35.1584L28.3291 37.8416Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8911)' + ''}
      />
      <path
        d="M28.3291 37.8416L16.3291 31.8416L17.6707 29.1584L29.6707 35.1584L28.3291 37.8416Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_8911)' + ''}
      />
      <path
        d="M28.3291 37.8416L16.3291 31.8416L17.6707 29.1584L29.6707 35.1584L28.3291 37.8416Z"
        fill={'url(#' + iconId + '-paint5_radial_72095_8911)' + ''}
      />
      <circle
        cx={32}
        cy={14}
        r={10}
        fill={'url(#' + iconId + '-paint6_linear_72095_8911)' + ''}
      />
      <circle
        cx={12}
        cy={28}
        r={8}
        fill={'url(#' + iconId + '-paint7_linear_72095_8911)' + ''}
      />
      <circle cx={32} cy={38} r={6} fill="#D9D9D9" />
      <circle
        cx={32}
        cy={38}
        r={6}
        fill={'url(#' + iconId + '-paint8_linear_72095_8911)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8911'}
          x1={14.668}
          y1={16.7519}
          x2={17.6958}
          y2={28.0144}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8911'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32 14) rotate(143.13) scale(12.5 14.4743)"
        >
          <stop offset={0.688} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_8911'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 28) rotate(-32.0054) scale(9.43398 10.9241)"
        >
          <stop offset={0.737009} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8911'}
          x1={16.3291}
          y1={29.1584}
          x2={18.4925}
          y2={38.6562}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_8911'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32 38.0002) rotate(-150.255) scale(8.06226 8.04302)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint5_radial_72095_8911'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 28.0002) rotate(27.8973) scale(9.61769 10.4662)"
        >
          <stop offset={0.797635} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_8911'}
          x1={22.7143}
          y1={7.75}
          x2={36.5167}
          y2={22.0902}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BDABE" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_72095_8911'}
          x1={4.57143}
          y1={23}
          x2={15.6134}
          y2={34.4721}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC318F" />
          <stop offset={1} stopColor="#B91D6B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_72095_8911'}
          x1={27.875}
          y1={30.125}
          x2={35.75}
          y2={45.125}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCD0F" />
          <stop offset={1} stopColor="#FE8401" />
        </linearGradient>
      </defs>
    </svg>
  )
}
