'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M5 5a3 3 0 0 1 3-3h13a6 6 0 0 1 6 6v19a3 3 0 0 1-3 3H11a6 6 0 0 1-6-6V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 5a2 2 0 0 1 2-2h13a5 5 0 0 1 5 5v19a2 2 0 0 1-2 2H11a5 5 0 0 1-5-5V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M6 5a2 2 0 0 1 2-2h13a5 5 0 0 1 5 5v19a2 2 0 0 1-2 2H11a5 5 0 0 1-5-5V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M16.46 9.305a.5.5 0 0 0-.92 0L10.168 22H9.5a.5.5 0 0 0 0 1h.988a.43.43 0 0 0 .023 0H12a.5.5 0 0 0 0-1h-.746l1.27-3h5.544l1.227 3H18.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-.669l-5.37-12.695zM17.66 18l-2.318-5.663L12.947 18h4.712z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.104}
          x2={16.851}
          y1={2}
          y2={29.972}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.556}
          x2={15.786}
          y1={3}
          y2={29.035}
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
          gradientTransform="matrix(10.5556 20.5833 -15.8333 7.71875 12.389 9.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.296}
          x2={17.325}
          y1={10.75}
          y2={22.833}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
