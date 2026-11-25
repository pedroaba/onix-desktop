'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <rect
        width={8}
        height={6}
        x={20}
        y={13}
        fill={'url(#' + iconId + '-d)' + ''}
        rx={1}
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M20 22a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M17 13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6z"
      />
      <rect width={18} height={18} x={1} y={21} fill="#185ABD" rx={4} />
      <path
        fill="#fff"
        d="m14.706 25-3.45 10H8.702L5.294 25h2.402l2.116 6.723c.05.158.09.295.118.41l.098.405h.042c.037-.167.067-.306.09-.418.024-.116.061-.258.112-.425L12.374 25h2.332z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.578}
          y1={6}
          y2={34.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.444}
          x2={14.976}
          y1={7}
          y2={33.48}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(17.9444 20.5833 -26.9167 7.71875 13.861 13.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={24}
          x2={24}
          y1={13}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28A8EA" />
          <stop offset={1} stopColor="#1490DF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={24}
          x2={24}
          y1={21}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B7CD3" />
          <stop offset={1} stopColor="#1D59C1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={14}
          x2={14}
          y1={13}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#50D9FF" />
          <stop offset={1} stopColor="#28A8EA" />
        </linearGradient>
      </defs>
    </svg>
  )
}
