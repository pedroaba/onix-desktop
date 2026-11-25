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
        d="M8 14a6 6 0 0 1 6-6h30c6.627 0 12 5.373 12 12v30a6 6 0 0 1-6 6H20c-6.627 0-12-5.373-12-12V14z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M9 14a5 5 0 0 1 5-5h30c6.075 0 11 4.925 11 11v30a5 5 0 0 1-5 5H20c-6.075 0-11-4.925-11-11V14z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M9 14a5 5 0 0 1 5-5h30c6.075 0 11 4.925 11 11v30a5 5 0 0 1-5 5H20c-6.075 0-11-4.925-11-11V14z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12 20a1 1 0 1 0 0 2h40a1 1 0 1 0 0-2H12z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M21 34a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M24 41a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M32 34a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M35 41a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M43 34a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={23.5}
          x2={29.963}
          y1={8}
          y2={56.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={21.778}
          x2={27.597}
          y1={9}
          y2={55.55}
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
          gradientTransform="matrix(24.2778 36.4167 -36.4167 13.6562 23.694 20.98)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={20.45}
          x2={33.312}
          y1={8}
          y2={44.409}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={20.45}
          x2={33.312}
          y1={8}
          y2={44.409}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={20.45}
          x2={33.312}
          y1={8}
          y2={44.409}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={20.45}
          x2={33.312}
          y1={8}
          y2={44.409}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={20.45}
          x2={33.312}
          y1={8}
          y2={44.409}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={20.45}
          x2={33.312}
          y1={8}
          y2={44.409}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
