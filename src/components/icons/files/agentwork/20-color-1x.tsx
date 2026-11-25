'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 4a2 2 0 012-2h6a4 4 0 014 4v10a2 2 0 01-2 2H6a2 2 0 01-2-2z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M6 3h6a3 3 0 013 3v7a1 1 0 01-1 1H6a2 2 0 00-1 .268V4a1 1 0 011-1M5 16a1 1 0 001 1h8a1 1 0 001-1v-1.268A2 2 0 0114 15H6a1 1 0 00-1 1"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M6 3h6a3 3 0 013 3v7a1 1 0 01-1 1H6a2 2 0 00-1 .268V4a1 1 0 011-1M5 16a1 1 0 001 1h8a1 1 0 001-1v-1.268A2 2 0 0114 15H6a1 1 0 00-1 1"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M11.605 6.424A.64.64 0 0011 6h-.394a.635.635 0 00-.627.51l-.408 2.118.203-.679a.64.64 0 01.612-.449h1.26l.544.698.485-.698h-.242a.64.64 0 01-.604-.424z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8.47 11.573a.64.64 0 00.606.427h.641a.63.63 0 00.638-.614l.032-1.9-.169.565a.64.64 0 01-.612.449H8.342l-.539-.465-.397.465h.24c.274 0 .518.172.605.427z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M10.875 6H8.323c-.729 0-1.166.944-1.458 1.888-.345 1.118-.798 2.614.51 2.614h1.177a.64.64 0 00.614-.454c.187-.642.538-1.84.811-2.743.134-.443.246-.824.417-1.06A.58.58 0 0110.875 6"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M10.875 6H8.323c-.729 0-1.166.944-1.458 1.888-.345 1.118-.798 2.614.51 2.614h1.177a.64.64 0 00.614-.454c.187-.642.538-1.84.811-2.743.134-.443.246-.824.417-1.06A.58.58 0 0110.875 6"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M9.125 12h2.552c.729 0 1.167-.944 1.458-1.887.346-1.119.798-2.614-.51-2.614h-1.177a.64.64 0 00-.614.453c-.187.642-.538 1.84-.811 2.744-.134.443-.246.823-.417 1.06a.58.58 0 01-.481.244"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M9.125 12h2.552c.729 0 1.167-.944 1.458-1.887.346-1.119.798-2.614-.51-2.614h-1.177a.64.64 0 00-.614.453c-.187.642-.538 1.84-.811 2.744-.134.443-.246.823-.417 1.06a.58.58 0 01-.481.244"
      />
      <defs>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.27778 11.0833 -7.91667 4.15625 8.194 6.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-1.75872 -2.1449 -1.89885 1.79907 12.224 8.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.096} stopColor="#00AEFF" />
          <stop offset={0.773} stopColor="#2253CE" />
          <stop offset={1} stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(1.55847 1.89566 1.83974 -1.54728 7.947 10.314)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB657" />
          <stop offset={0.634} stopColor="#FF5F3D" />
          <stop offset={0.923} stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.2312 -3.98856 22.8716 -1.27195 8.26 10.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.03} stopColor="#FFC800" />
          <stop offset={0.31} stopColor="#98BD42" />
          <stop offset={0.49} stopColor="#52B471" />
          <stop offset={0.844} stopColor="#0D91E1" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-2.01601 5.64541 -6.86124 -2.4916 12.756 7.058)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
        <linearGradient
          id={iconId + '-a'}
          x1={7.875}
          x2={10.709}
          y1={2}
          y2={17.941}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={7.778}
          x2={10.221}
          y1={3}
          y2={16.961}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={8.489}
          x2={8.68}
          y1={6}
          y2={10.502}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={12.957}
          x2={12.955}
          y1={7.224}
          y2={8.45}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
