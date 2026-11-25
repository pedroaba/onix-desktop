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
        d="M13.1799 2C12.0909 2 10.5 2.00001 10.5 2.00001C8.7678 7.02279 6.82288 12.6201 6.82288 18H13.3058C13.9102 18 14.4719 17.6881 14.7913 17.175L18.7886 10.7554C19.0766 10.293 19.0766 9.70702 18.7886 9.24456L14.9815 3.13038C14.658 2.46141 13.9729 2 13.1799 2Z"
        fill={'url(#' + iconId + '-paint0_radial_73184_13219)' + ''}
      />
      <path
        d="M13.1799 2C12.0909 2 10.5 2.00001 10.5 2.00001C8.7678 7.02279 6.82288 12.6201 6.82288 18H13.3058C13.9102 18 14.4719 17.6881 14.7913 17.175L18.7886 10.7554C19.0766 10.293 19.0766 9.70702 18.7886 9.24456L14.9815 3.13038C14.658 2.46141 13.9729 2 13.1799 2Z"
        fill={'url(#' + iconId + '-paint1_radial_73184_13219)' + ''}
        fillOpacity={0.5}
      />
      <path
        d="M13.25 2.0012V2H13.1799H6.68946C6.0886 2 5.52976 2.30825 5.20924 2.81648L1.26759 9.06648C0.907875 9.63685 0.907875 10.3632 1.26759 10.9335L5.13118 17.0597C5.48499 17.6208 6.09096 17.9702 6.75 17.9982C6.77234 17.9989 6.79476 18 6.81728 18H6.82286C7.81097 17.9986 8.63114 17.2807 8.79162 16.338L8.79521 16.336L11.1805 3.95345C11.2052 2.87038 12.0909 2 13.1799 2C13.2034 2 13.2267 2.0004 13.25 2.0012Z"
        fill={'url(#' + iconId + '-paint2_radial_73184_13219)' + ''}
      />
      <path
        d="M13.25 2.0012V2H13.1799H6.68946C6.0886 2 5.52976 2.30825 5.20924 2.81648L1.26759 9.06648C0.907875 9.63685 0.907875 10.3632 1.26759 10.9335L5.13118 17.0597C5.48499 17.6208 6.09096 17.9702 6.75 17.9982C6.77234 17.9989 6.79476 18 6.81728 18H6.82286C7.81097 17.9986 8.63114 17.2807 8.79162 16.338L8.79521 16.336L11.1805 3.95345C11.2052 2.87038 12.0909 2 13.1799 2C13.2034 2 13.2267 2.0004 13.25 2.0012Z"
        fill={'url(#' + iconId + '-paint3_linear_73184_13219)' + ''}
        fillOpacity={0.4}
      />
      <defs>
        <radialGradient
          id={iconId + '-paint0_radial_73184_13219'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.211 22.3429) rotate(-87.8809) scale(23.3302 18.6978)"
        >
          <stop stopColor="#FFC470" />
          <stop offset={0.251092} stopColor="#FF835C" />
          <stop offset={0.584326} stopColor="#F24A9D" />
          <stop offset={0.871234} stopColor="#B339F0" />
          <stop offset={1} stopColor="#C354FF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint1_radial_73184_13219'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11.7774 16.1539) rotate(-135.47) scale(14.018 14.1862)"
        >
          <stop offset={0.708817} stopColor="#FFB357" stopOpacity={0} />
          <stop offset={0.941624} stopColor="#FFB357" />
        </radialGradient>
        <radialGradient
          id={iconId + '-paint2_radial_73184_13219'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.6311 16.4) rotate(-160.247) scale(22.9945 19.4416)"
        >
          <stop offset={0.221888} stopColor="#4E46E2" />
          <stop offset={0.577558} stopColor="#625DF6" />
          <stop offset={0.954926} stopColor="#E37DFF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-paint3_linear_73184_13219'}
          x1={4.82289}
          y1={8.62857}
          x2={10.2537}
          y2={9.91353}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7563F7" stopOpacity={0} />
          <stop offset={0.986042} stopColor="#4916AE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
