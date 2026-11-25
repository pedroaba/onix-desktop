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
      <g clipPath={'url(#' + iconId + '-clip0_353_14462)' + ''}>
        <mask
          id={iconId + '-mask0_353_14462'}
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={16}
          height={16}
        >
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask={'url(#' + iconId + '-mask0_353_14462)' + ''}>
          <path
            d="M8 10C10.7614 10 13 7.76142 13 5C13 2.23858 10.7614 0 8 0C5.23858 0 3 2.23858 3 5C3 7.76142 5.23858 10 8 10Z"
            fill={'url(#' + iconId + '-paint0_linear_353_14462)' + ''}
          />
          <path
            d="M8 10C10.7614 10 13 7.76142 13 5C13 2.23858 10.7614 0 8 0C5.23858 0 3 2.23858 3 5C3 7.76142 5.23858 10 8 10Z"
            fill={'url(#' + iconId + '-paint1_radial_353_14462)' + ''}
            fillOpacity={0.2}
          />
          <path
            d="M8 10C10.7614 10 13 7.76142 13 5C13 2.23858 10.7614 0 8 0C5.23858 0 3 2.23858 3 5C3 7.76142 5.23858 10 8 10Z"
            fill={'url(#' + iconId + '-paint2_radial_353_14462)' + ''}
            fillOpacity={0.31}
          />
          <path
            d="M8 10C10.7614 10 13 7.76142 13 5C13 2.23858 10.7614 0 8 0C5.23858 0 3 2.23858 3 5C3 7.76142 5.23858 10 8 10Z"
            fill={'url(#' + iconId + '-paint3_radial_353_14462)' + ''}
            fillOpacity={0.7}
          />
          <path
            d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
            fill={'url(#' + iconId + '-paint4_linear_353_14462)' + ''}
          />
          <path
            d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
            fill={'url(#' + iconId + '-paint5_radial_353_14462)' + ''}
            fillOpacity={0.5}
          />
          <path
            d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
            fill={'url(#' + iconId + '-paint6_radial_353_14462)' + ''}
            fillOpacity={0.7}
          />
          <path
            d="M8.625 16C10.489 16 12 14.489 12 12.625C12 10.761 10.489 9.25 8.625 9.25C6.76104 9.25 5.25 10.761 5.25 12.625C5.25 14.489 6.76104 16 8.625 16Z"
            fill={'url(#' + iconId + '-paint7_linear_353_14462)' + ''}
          />
          <path
            d="M8.625 16C10.489 16 12 14.489 12 12.625C12 10.761 10.489 9.25 8.625 9.25C6.76104 9.25 5.25 10.761 5.25 12.625C5.25 14.489 6.76104 16 8.625 16Z"
            fill={'url(#' + iconId + '-paint8_linear_353_14462)' + ''}
            fillOpacity={0.32}
          />
          <path
            d="M7 5H2C0.89543 5 0 5.89543 0 7V12C0 13.1046 0.89543 14 2 14H7C8.10457 14 9 13.1046 9 12V7C9 5.89543 8.10457 5 7 5Z"
            fill={'url(#' + iconId + '-paint9_radial_353_14462)' + ''}
          />
          <path
            d="M7 5H2C0.89543 5 0 5.89543 0 7V12C0 13.1046 0.89543 14 2 14H7C8.10457 14 9 13.1046 9 12V7C9 5.89543 8.10457 5 7 5Z"
            fill={'url(#' + iconId + '-paint10_radial_353_14462)' + ''}
            fillOpacity={0.6}
          />
          <path
            d="M2.61304 10.9676L3.56265 10.4885C3.66971 10.6977 3.80936 10.8518 3.98159 10.9507C4.15615 11.0497 4.34701 11.0992 4.55415 11.0992C4.78457 11.0992 4.9603 11.0542 5.08133 10.9642C5.20235 10.872 5.26287 10.7337 5.26287 10.5493C5.26287 10.4053 5.20468 10.2839 5.08831 10.1849C4.97193 10.0837 4.76595 10.0072 4.47036 9.95547C3.90711 9.8565 3.49748 9.68331 3.24146 9.4359C2.98776 9.18848 2.86092 8.88034 2.86092 8.51147C2.86092 8.05263 3.02849 7.68601 3.36365 7.41161C3.6988 7.1372 4.14102 7 4.69031 7C5.06038 7 5.38622 7.0731 5.66785 7.2193C5.94947 7.3655 6.17291 7.57467 6.33816 7.84683L5.4095 8.30904C5.30709 8.1561 5.19654 8.04588 5.07784 7.97841C4.95913 7.90868 4.81017 7.87382 4.63096 7.87382C4.41683 7.87382 4.25391 7.9188 4.14219 8.00877C4.0328 8.09874 3.9781 8.2157 3.9781 8.35965C3.9781 8.48336 4.03047 8.59244 4.13521 8.68691C4.24227 8.77913 4.4564 8.85448 4.77759 8.91296C5.31756 9.01192 5.72022 9.19186 5.98555 9.45277C6.25321 9.71143 6.38704 10.0387 6.38704 10.4345C6.38704 10.9159 6.2276 11.2971 5.90874 11.5783C5.58988 11.8594 5.13486 12 4.54368 12C4.11542 12 3.72906 11.91 3.3846 11.7301C3.04246 11.5479 2.78527 11.2937 2.61304 10.9676Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_353_14462'}
          x1={4.25}
          y1={1.25}
          x2={10.9167}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.410156} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_353_14462'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.52994 11.3833) rotate(-112.448) scale(7.67754 13.8038)"
        >
          <stop offset={0.28573} stopColor="#003B5D" />
          <stop offset={0.612265} stopColor="#004A6C" stopOpacity={0.688298} />
          <stop offset={0.968041} stopColor="#006F94" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_353_14462'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.70642 9.17721) rotate(-112.063) scale(6.47996 11.6363)"
        >
          <stop offset={0.259744} stopColor="#002A42" />
          <stop offset={0.612265} stopColor="#004261" stopOpacity={0.688298} />
          <stop offset={0.968041} stopColor="#006F94" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint3_radial_353_14462'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.8536 0.529455) rotate(124.447) scale(5.42114)"
        >
          <stop stopColor="#78EDFF" />
          <stop offset={1} stopColor="#2CCFCA" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_353_14462'}
          x1={9}
          y1={6}
          x2={14.3333}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E0D9" />
          <stop offset={0.476427} stopColor="#009FB8" />
          <stop offset={0.945063} stopColor="#056475" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint5_radial_353_14462'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.70833 12.3333) rotate(-70.8012) scale(4.9415 8.90349)"
        >
          <stop stopColor="#004A5D" />
          <stop offset={0.492035} stopColor="#00556C" stopOpacity={0.688298} />
          <stop offset={0.968041} stopColor="#007A86" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint6_radial_353_14462'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.2829 5.42356) rotate(124.447) scale(4.33691)"
        >
          <stop stopColor="#78EDFF" />
          <stop offset={1} stopColor="#2CCFCA" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint7_linear_353_14462'}
          x1={6.2625}
          y1={9.5875}
          x2={9.6375}
          y2={16.3375}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.0534989} stopColor="#75FFF6" />
          <stop offset={0.51144} stopColor="#00C7D1" />
          <stop offset={0.96002} stopColor="#0096AD" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint8_linear_353_14462'}
          x1={11.9845}
          y1={16.0003}
          x2={10.181}
          y2={13.4691}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.259744} stopColor="#0E5A5D" />
          <stop offset={0.535716} stopColor="#126C6B" stopOpacity={0.688298} />
          <stop offset={0.968041} stopColor="#1C948A" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint9_radial_353_14462'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 5) rotate(45) scale(12.7279)"
        >
          <stop offset={0.0625} stopColor="#00B6BD" />
          <stop offset={0.890131} stopColor="#00495C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint10_radial_353_14462'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.5 10.4) rotate(90) scale(6.3 7.17187)"
        >
          <stop offset={0.566964} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.973806} stopColor="#1ECBE6" />
        </radialGradient>
        <clipPath id={iconId + '-clip0_353_14462'}>
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
