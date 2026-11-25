'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.8862 14.7106L16.3862 11.2106L17.6141 12.7893L13.1141 16.2893L11.8862 14.7106Z"
        fill="#212121"
      />
      <path
        d="M11.8862 14.7106L16.3862 11.2106L17.6141 12.7893L13.1141 16.2893L11.8862 14.7106Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8917)' + ''}
      />
      <path
        d="M11.8862 14.7106L16.3862 11.2106L17.6141 12.7893L13.1141 16.2893L11.8862 14.7106Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8917)' + ''}
      />
      <path
        d="M11.8862 14.7106L16.3862 11.2106L17.6141 12.7893L13.1141 16.2893L11.8862 14.7106Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_8917)' + ''}
      />
      <path
        d="M18.0098 24.3716L10.0098 19.8716L10.9903 18.1284L18.9903 22.6284L18.0098 24.3716Z"
        fill="#242424"
      />
      <path
        d="M18.0098 24.3716L10.0098 19.8716L10.9903 18.1284L18.9903 22.6284L18.0098 24.3716Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8917)' + ''}
      />
      <path
        d="M18.0098 24.3716L10.0098 19.8716L10.9903 18.1284L18.9903 22.6284L18.0098 24.3716Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_8917)' + ''}
      />
      <path
        d="M18.0098 24.3716L10.0098 19.8716L10.9903 18.1284L18.9903 22.6284L18.0098 24.3716Z"
        fill={'url(#' + iconId + '-paint5_radial_72095_8917)' + ''}
      />
      <circle
        cx={22}
        cy={9}
        r={7}
        fill={'url(#' + iconId + '-paint6_linear_72095_8917)' + ''}
      />
      <circle
        cx={8.5}
        cy={17.5}
        r={5.5}
        fill={'url(#' + iconId + '-paint7_linear_72095_8917)' + ''}
      />
      <circle cx={21.5} cy={25.5} r={4.5} fill="#D9D9D9" />
      <circle
        cx={21.5}
        cy={25.5}
        r={4.5}
        fill={'url(#' + iconId + '-paint8_linear_72095_8917)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8917'}
          x1={11.8862}
          y1={11.2106}
          x2={13.5402}
          y2={16.5407}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8917'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(22.0002 8.99994) rotate(147.265) scale(8.32166 10.1513)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_8917'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.50024 17.4999) rotate(-32.4712) scale(6.5192 7.95258)"
        >
          <stop offset={0.720956} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8917'}
          x1={10.0098}
          y1={18.1284}
          x2={11.6598}
          y2={24.9101}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9C0C7" />
          <stop offset={1} stopColor="#70777D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_8917'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21.5 25.5) rotate(-145.008) scale(6.10328 5.70048)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint5_radial_72095_8917'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.5 17.5) rotate(36.8699) scale(7.5 8.71778)"
        >
          <stop offset={0.5625} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_8917'}
          x1={15.5}
          y1={4.625}
          x2={25.1617}
          y2={14.6631}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BDABE" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_72095_8917'}
          x1={3.39286}
          y1={14.0625}
          x2={10.9842}
          y2={21.9496}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC318F" />
          <stop offset={1} stopColor="#B91D6B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_72095_8917'}
          x1={18.4063}
          y1={19.5937}
          x2={24.3125}
          y2={30.8438}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCD0F" />
          <stop offset={1} stopColor="#FE8401" />
        </linearGradient>
      </defs>
    </svg>
  )
}
