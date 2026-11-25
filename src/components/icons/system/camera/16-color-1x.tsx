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
        d="M5.27639 2.82918C5.53048 2.321 6.04988 2 6.61803 2H9.38197C9.95012 2 10.4695 2.321 10.7236 2.82918L11.309 4H12C13.1046 4 14 4.89543 14 6V11C14 12.1046 13.1046 13 12 13H4C2.89543 13 2 12.1046 2 11V6C2 4.89543 2.89543 4 4 4H4.69098L5.27639 2.82918Z"
        fill={'url(#' + iconId + '-paint0_radial_378174_9939)' + ''}
      />
      <path
        d="M5.27639 2.82918C5.53048 2.321 6.04988 2 6.61803 2H9.38197C9.95012 2 10.4695 2.321 10.7236 2.82918L11.309 4H12C13.1046 4 14 4.89543 14 6V11C14 12.1046 13.1046 13 12 13H4C2.89543 13 2 12.1046 2 11V6C2 4.89543 2.89543 4 4 4H4.69098L5.27639 2.82918Z"
        fill={'url(#' + iconId + '-paint1_radial_378174_9939)' + ''}
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9939)' + ''}
      />
      <path
        d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
        fill={'url(#' + iconId + '-paint3_radial_378174_9939)' + ''}
      />
      <path
        d="M12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z"
        fill={'url(#' + iconId + '-paint4_linear_378174_9939)' + ''}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_378174_9939'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.125 2.73333) rotate(40.0965) scale(17.648 36.5145)"
        >
          <stop stopColor="#F08AF4" />
          <stop offset={0.535356} stopColor="#9C6CFE" />
          <stop offset={1} stopColor="#4E44DB" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_378174_9939'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.5 9) rotate(82.875) scale(4.03113 4.34949)"
        >
          <stop stopColor="#312A9A" />
          <stop offset={1} stopColor="#312A9A" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9939'}
          x1={6.12866}
          y1={5}
          x2={9.12866}
          y2={12.125}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#DECBFF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_378174_9939'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.33333 5) rotate(49.7636) scale(5.67646)"
        >
          <stop offset={0.242576} stopColor="#3BD5FF" />
          <stop offset={1} stopColor="#2052CB" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint4_linear_378174_9939'}
          x1={11}
          y1={5.5}
          x2={13}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F08AF4" />
          <stop offset={1} stopColor="#F462AB" />
        </linearGradient>
      </defs>
    </svg>
  )
}
