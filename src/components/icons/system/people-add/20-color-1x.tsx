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
        d="M1.5 12C1.5 10.8954 2.39543 10 3.5 10H10C11.1046 10 12 10.8954 12 12C12 12 12 16 6.75 16C1.5 16 1.5 12 1.5 12Z"
        fill={'url(#' + iconId + '-paint0_linear_74358_6457)' + ''}
      />
      <path
        d="M1.5 12C1.5 10.8954 2.39543 10 3.5 10H10C11.1046 10 12 10.8954 12 12C12 12 12 16 6.75 16C1.5 16 1.5 12 1.5 12Z"
        fill={'url(#' + iconId + '-paint1_linear_74358_6457)' + ''}
      />
      <path
        d="M1.5 12C1.5 10.8954 2.39543 10 3.5 10H10C11.1046 10 12 10.8954 12 12C12 12 12 16 6.75 16C1.5 16 1.5 12 1.5 12Z"
        fill={'url(#' + iconId + '-paint2_radial_74358_6457)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M14.5 9C15.8807 9 17 7.88071 17 6.5C17 5.11929 15.8807 4 14.5 4C13.1193 4 12 5.11929 12 6.5C12 7.88071 13.1193 9 14.5 9Z"
        fill={'url(#' + iconId + '-paint3_linear_74358_6457)' + ''}
      />
      <path
        d="M6.75 9C8.54493 9 10 7.54493 10 5.75C10 3.95507 8.54493 2.5 6.75 2.5C4.95507 2.5 3.5 3.95507 3.5 5.75C3.5 7.54493 4.95507 9 6.75 9Z"
        fill={'url(#' + iconId + '-paint4_linear_74358_6457)' + ''}
      />
      <path
        d="M19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19C16.9853 19 19 16.9853 19 14.5Z"
        fill={'url(#' + iconId + '-paint5_linear_74358_6457)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 12C14.7761 12 15 12.2239 15 12.5V14H16.5C16.7761 14 17 14.2239 17 14.5C17 14.7761 16.7761 15 16.5 15H15V16.5C15 16.7761 14.7761 17 14.5 17C14.2239 17 14 16.7761 14 16.5V15H12.5C12.2239 15 12 14.7761 12 14.5C12 14.2239 12.2239 14 12.5 14H14V12.5C14 12.2239 14.2239 12 14.5 12Z"
        fill={'url(#' + iconId + '-paint6_linear_74358_6457)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_74358_6457'}
          x1={3.99694}
          y1={10.7976}
          x2={6.15341}
          y2={16.8235}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_74358_6457'}
          x1={6.75}
          y1={9.28571}
          x2={9.78985}
          y2={19.2252}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#885EDB" stopOpacity={0} />
          <stop offset={1} stopColor="#E362F8" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint2_radial_74358_6457'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.5 14.5) rotate(66.0375) scale(4.92443)"
        >
          <stop stopColor="#30116E" />
          <stop offset={0.330734} stopColor="#30116E" stopOpacity={0.811643} />
          <stop offset={1} stopColor="#30116E" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_74358_6457'}
          x1={13.189}
          y1={4.66468}
          x2={15.7372}
          y2={8.73356}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#7A41DC" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint4_linear_74358_6457'}
          x1={5.04572}
          y1={3.36408}
          x2={8.35837}
          y2={8.65362}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.125321} stopColor="#BD96FF" />
          <stop offset={1} stopColor="#9C6CFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint5_linear_74358_6457'}
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
          id={iconId + '-paint6_linear_74358_6457'}
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
