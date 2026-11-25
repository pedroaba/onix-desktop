'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M10 10a6 6 0 0 1 6-6h26c6.627 0 12 5.373 12 12v38a6 6 0 0 1-6 6H22c-6.627 0-12-5.373-12-12V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M11 10a5 5 0 0 1 5-5h26c6.075 0 11 4.925 11 11v38a5 5 0 0 1-5 5H22c-6.075 0-11-4.925-11-11V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M11 10a5 5 0 0 1 5-5h26c6.075 0 11 4.925 11 11v38a5 5 0 0 1-5 5H22c-6.075 0-11-4.925-11-11V10z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M26.923 16.615a1 1 0 0 0-1.846 0l-5 12a1 1 0 1 0 1.846.77L23.333 26h5.334l1.41 3.385a1 1 0 0 0 1.846-.77l-5-12zM26 19.6l1.834 4.4h-3.667L26 19.6z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M35 22a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M35 28a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M21 34a1 1 0 1 0 0 2h22a1 1 0 0 0 0-2H21z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M21 40a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M21 46a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M34 40a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-8z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={24.208}
          x2={33.702}
          y1={4}
          y2={59.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={22.667}
          x2={31.362}
          y1={5}
          y2={59.103}
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
          gradientTransform="matrix(22.1667 42.75 -33.25 16.0312 24.417 19.063)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={20}
          x2={43}
          y1={4}
          y2={56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={20}
          x2={43}
          y1={4}
          y2={56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={20}
          x2={43}
          y1={4}
          y2={56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={20}
          x2={43}
          y1={4}
          y2={56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={20}
          x2={43}
          y1={4}
          y2={56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={20}
          x2={43}
          y1={4}
          y2={56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={20}
          x2={43}
          y1={4}
          y2={56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
