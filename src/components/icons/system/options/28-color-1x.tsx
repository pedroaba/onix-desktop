'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 8.25C26 8.66421 25.6642 9 25.25 9H2.75C2.33579 9 2 8.66421 2 8.25C2 7.83579 2.33579 7.5 2.75 7.5H25.25C25.6642 7.5 26 7.83579 26 8.25Z"
        fill={'url(#' + iconId + '-paint0_linear_72095_8780)' + ''}
      />
      <path
        d="M26 8.25C26 8.66421 25.6642 9 25.25 9H2.75C2.33579 9 2 8.66421 2 8.25C2 7.83579 2.33579 7.5 2.75 7.5H25.25C25.6642 7.5 26 7.83579 26 8.25Z"
        fill={'url(#' + iconId + '-paint1_radial_72095_8780)' + ''}
      />
      <path
        d="M26 8.25C26 8.66421 25.6642 9 25.25 9H2.75C2.33579 9 2 8.66421 2 8.25C2 7.83579 2.33579 7.5 2.75 7.5H25.25C25.6642 7.5 26 7.83579 26 8.25Z"
        fill={'url(#' + iconId + '-paint2_radial_72095_8780)' + ''}
      />
      <path
        d="M2 19.75C2 20.1642 2.33579 20.5 2.75 20.5H25.25C25.6642 20.5 26 20.1642 26 19.75C26 19.3358 25.6642 19 25.25 19H2.75C2.33579 19 2 19.3358 2 19.75Z"
        fill={'url(#' + iconId + '-paint3_linear_72095_8780)' + ''}
      />
      <path
        d="M2 19.75C2 20.1642 2.33579 20.5 2.75 20.5H25.25C25.6642 20.5 26 20.1642 26 19.75C26 19.3358 25.6642 19 25.25 19H2.75C2.33579 19 2 19.3358 2 19.75Z"
        fill={'url(#' + iconId + '-paint4_radial_72095_8780)' + ''}
      />
      <path
        d="M2 19.75C2 20.1642 2.33579 20.5 2.75 20.5H25.25C25.6642 20.5 26 20.1642 26 19.75C26 19.3358 25.6642 19 25.25 19H2.75C2.33579 19 2 19.3358 2 19.75Z"
        fill={'url(#' + iconId + '-paint5_radial_72095_8780)' + ''}
      />
      <circle
        cx={10.25}
        cy={19.75}
        r={3.75}
        fill={'url(#' + iconId + '-paint6_linear_72095_8780)' + ''}
      />
      <circle
        cx={17.75}
        cy={8.25}
        r={3.75}
        fill={'url(#' + iconId + '-paint7_linear_72095_8780)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_72095_8780'}
          x1={27.5}
          y1={21.8}
          x2={17.0474}
          y2={-2.53535}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C959B" />
          <stop offset={1} stopColor="#A3ACB5" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint1_radial_72095_8780'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18 8.3125) rotate(-3.25193) scale(5.50887 3.4802)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_72095_8780'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10 20) scale(5.5 3.47459)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_72095_8780'}
          x1={27.5}
          y1={21.8}
          x2={17.0474}
          y2={-2.53535}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C959B" />
          <stop offset={1} stopColor="#A3ACB5" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint4_radial_72095_8780'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18 8.3125) rotate(-3.25193) scale(5.50887 3.4802)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint5_radial_72095_8780'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10 20) scale(5.5 3.47459)"
        >
          <stop offset={0.548597} stopColor="#70777D" />
          <stop offset={1} stopColor="#70777D" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint6_linear_72095_8780'}
          x1={7.25}
          y1={16}
          x2={13.25}
          y2={23.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29B4FB" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint7_linear_72095_8780'}
          x1={14.75}
          y1={4.5}
          x2={20.75}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29B4FB" />
          <stop offset={1} stopColor="#2764E7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
