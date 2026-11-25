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
        d="M12.3671 9.80431L15.663 8.12071C16.4993 7.69347 17.0257 6.83353 17.0257 5.89435V4.5C17.0257 3.67157 16.3541 3 15.5257 3H12.3889L12 6.5L12.3671 9.80431Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_9491)' + ''}
      />
      <path
        d="M7.61068 3.00049H4.5C3.67157 3.00049 3 3.67206 3 4.50049V5.89484L3.00695 6.08152C3.07156 6.94675 3.58213 7.72244 4.36274 8.1212L7.63372 9.7921L7.99951 6.5L7.61068 3.00049Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_9491)' + ''}
      />
      <path
        d="M7.5 9.72355V3.00049H12.5V9.73718L11.4748 10.2609L10 11L7.5 9.72355Z"
        fill={'url(#' + iconId + '-paint2_linear_378174_9491)' + ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 13.5C6.5 11.567 8.067 10 10 10C11.933 10 13.5 11.567 13.5 13.5C13.5 15.433 11.933 17 10 17C8.067 17 6.5 15.433 6.5 13.5Z"
        fill={'url(#' + iconId + '-paint3_radial_378174_9491)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_9491'}
          x1={17.0257}
          y1={3.60502}
          x2={12.0721}
          y2={8.94815}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_9491'}
          x1={3}
          y1={4.82974}
          x2={7.99951}
          y2={8.18786}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint2_linear_378174_9491'}
          x1={10}
          y1={2}
          x2={12.7508}
          y2={10.0613}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#76EB95" />
          <stop offset={1} stopColor="#1EC8B0" />
        </linearGradient>
        <radialGradient
          id={iconId + '-paint3_radial_378174_9491'}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-8.625 -14.5) rotate(56.615) scale(39.0722 33.4636)"
        >
          <stop offset={0.771547} stopColor="#FFCD0F" />
          <stop offset={0.990707} stopColor="#E67505" />
        </radialGradient>
      </defs>
    </svg>
  )
}
