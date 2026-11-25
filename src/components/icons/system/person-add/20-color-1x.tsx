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
        d="M4.00873 11C2.90315 11 2 11.8869 2 13C2 14.6912 2.83281 15.9663 4.13499 16.7966C5.41697 17.614 7.14526 18 9 18C10.8547 18 12.583 17.614 13.865 16.7966C15.1672 15.9663 16 14.6912 16 13C16 11.8956 15.1045 11 14 11L4.00873 11Z"
        fill={'url(#' + iconId + '-paint0_linear_73867_11012)' + ''}
      />
      <path
        d="M4.00873 11C2.90315 11 2 11.8869 2 13C2 14.6912 2.83281 15.9663 4.13499 16.7966C5.41697 17.614 7.14526 18 9 18C10.8547 18 12.583 17.614 13.865 16.7966C15.1672 15.9663 16 14.6912 16 13C16 11.8956 15.1045 11 14 11L4.00873 11Z"
        fill={'url(#' + iconId + '-paint1_linear_73867_11012)' + ''}
      />
      <path
        d="M4.00873 11C2.90315 11 2 11.8869 2 13C2 14.6912 2.83281 15.9663 4.13499 16.7966C5.41697 17.614 7.14526 18 9 18C10.8547 18 12.583 17.614 13.865 16.7966C15.1672 15.9663 16 14.6912 16 13C16 11.8956 15.1045 11 14 11L4.00873 11Z"
        fill={'url(#' + iconId + '-paint2_radial_73867_11012)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2Z"
        fill={'url(#' + iconId + '-paint3_linear_73867_11012)' + ''}
      />
      <path
        d="M19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19C16.9853 19 19 16.9853 19 14.5Z"
        fill={'url(#' + iconId + '-paint4_linear_73867_11012)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 12C14.7761 12 15 12.2239 15 12.5V14H16.5C16.7761 14 17 14.2239 17 14.5C17 14.7761 16.7761 15 16.5 15H15V16.5C15 16.7761 14.7761 17 14.5 17C14.2239 17 14 16.7761 14 16.5V15H12.5C12.2239 15 12 14.7761 12 14.5C12 14.2239 12.2239 14 12.5 14H14V12.5C14 12.2239 14.2239 12 14.5 12Z"
        fill={'url(#' + iconId + '-paint5_linear_73867_11012)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_73867_11012'}
          x1={5.32925}
          y1={11.9306}
          x2={7.59082}
          y2={19.153}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_73867_11012'}
          x1={9}
          y1={10.1667}
          x2={12.1667}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_73867_11012'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.5 14.5) rotate(90) scale(7.5)"
        >
          <stop offset={0.423077} stopColor="#30116E" />
          <stop offset={1} stopColor="#30116E" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_73867_11012'}
          x1={6.90243}
          y1={3.06349}
          x2={10.9795}
          y2={9.57369}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_73867_11012'}
          x1={10.3214}
          y1={11.6875}
          x2={16.5325}
          y2={18.1406}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_73867_11012'}
          x1={12.9375}
          y1={12.51}
          x2={14.4717}
          y2={17.9258}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#E3FFD9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
