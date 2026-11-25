'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M12 21a9 9 0 0 1 9-9h45c9.941 0 18 8.059 18 18v45a9 9 0 0 1-9 9H30c-9.941 0-18-8.059-18-18V21z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M14 21a7 7 0 0 1 7-7h45c8.837 0 16 7.163 16 16v45a7 7 0 0 1-7 7H30c-8.837 0-16-7.163-16-16V21z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M14 21a7 7 0 0 1 7-7h45c8.837 0 16 7.163 16 16v45a7 7 0 0 1-7 7H30c-8.837 0-16-7.163-16-16V21z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M45.171 45.114 29.116 61.172C26.596 63.692 28.38 68 31.945 68h32.114c3.564 0 5.349-4.309 2.829-6.829l-16.06-16.057a4 4 0 0 0-5.657 0z"
      />
      <circle
        cx={62.5}
        cy={33.5}
        r={5.5}
        fill={'url(#' + iconId + '-e)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={35.25}
          x2={44.944}
          y1={12}
          y2={84.707}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={32.889}
          x2={41.491}
          y1={14}
          y2={82.814}
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
          gradientTransform="matrix(35.8889 53.8333 -53.8333 20.1875 35.722 31.708)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={27.589}
          x2={46.138}
          y1={34.98}
          y2={87.163}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={57}
          x2={68.95}
          y1={21.125}
          y2={44.004}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
