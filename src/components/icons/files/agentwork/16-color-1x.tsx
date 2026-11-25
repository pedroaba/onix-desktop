'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M4 1a2 2 0 00-2 2v10.5A1.5 1.5 0 003.5 15H12a2 2 0 002-2V4.5A3.5 3.5 0 0010.5 1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M13 4.5A2.5 2.5 0 0010.5 2H4a1 1 0 00-1 1v9.085q.236-.084.5-.085H12a1 1 0 001-1zm0 8.232A2 2 0 0112 13H3.5a.5.5 0 000 1H12a1 1 0 001-1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M13 4.5A2.5 2.5 0 0010.5 2H4a1 1 0 00-1 1v9.085q.236-.084.5-.085H12a1 1 0 001-1zm0 8.232A2 2 0 0112 13H3.5a.5.5 0 000 1H12a1 1 0 001-1z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M9.605 4.424A.64.64 0 009 4h-.393a.634.634 0 00-.627.51l-.408 2.118.203-.679a.64.64 0 01.612-.449h1.26l.544.698.485-.698h-.242a.64.64 0 01-.604-.424z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M6.47 9.573a.64.64 0 00.606.427h.641a.63.63 0 00.638-.614l.032-1.9-.169.565a.64.64 0 01-.612.449H6.342l-.539-.465-.397.465h.24c.274 0 .518.172.605.427z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M8.875 4H6.323c-.729 0-1.166.944-1.458 1.888-.345 1.118-.798 2.614.51 2.614h1.177a.64.64 0 00.614-.454c.187-.642.538-1.84.811-2.743.134-.443.246-.824.417-1.06A.58.58 0 018.875 4"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M8.875 4H6.323c-.729 0-1.166.944-1.458 1.888-.345 1.118-.798 2.614.51 2.614h1.177a.64.64 0 00.614-.454c.187-.642.538-1.84.811-2.743.134-.443.246-.824.417-1.06A.58.58 0 018.875 4"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M7.125 10h2.552c.729 0 1.167-.944 1.458-1.887.346-1.119.798-2.614-.51-2.614H9.448a.64.64 0 00-.614.453c-.187.642-.538 1.84-.811 2.744-.134.443-.246.823-.417 1.06a.58.58 0 01-.481.244"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M7.125 10h2.552c.729 0 1.167-.944 1.458-1.887.346-1.119.798-2.614-.51-2.614H9.448a.64.64 0 00-.614.453c-.187.642-.538 1.84-.811 2.744-.134.443-.246.823-.417 1.06a.58.58 0 01-.481.244"
      />
      <defs>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.27778 9.5 -7.91667 3.5625 6.194 5.125)"
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
          gradientTransform="matrix(-1.75872 -2.1449 -1.89885 1.79907 10.224 6.646)"
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
          gradientTransform="matrix(1.55847 1.89566 1.83974 -1.54728 5.947 8.314)"
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
          gradientTransform="matrix(-.2312 -3.98856 22.8716 -1.27195 6.26 8.5)"
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
          gradientTransform="matrix(-2.01601 5.64541 -6.86124 -2.4916 10.756 5.058)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={8.06}
          y1={1}
          y2={15.049}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.587}
          y1={2}
          y2={14.062}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={6.489}
          x2={6.68}
          y1={4}
          y2={8.502}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={10.957}
          x2={10.955}
          y1={5.224}
          y2={6.45}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
