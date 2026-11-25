'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14Z"
        fill={'url(#' + iconId + '-paint0_linear_378174_8703)' + ''}
      />
      <path
        d="M18.2803 9.71967C18.5732 10.0126 18.5732 10.4874 18.2803 10.7803L15.0607 14L18.2803 17.2197C18.5732 17.5126 18.5732 17.9874 18.2803 18.2803C17.9874 18.5732 17.5126 18.5732 17.2197 18.2803L14 15.0607L10.7803 18.2803C10.4874 18.5732 10.0126 18.5732 9.71967 18.2803C9.42678 17.9874 9.42678 17.5126 9.71967 17.2197L12.9393 14L9.71967 10.7803C9.42678 10.4874 9.42678 10.0126 9.71967 9.71967C10.0126 9.42678 10.4874 9.42678 10.7803 9.71967L14 12.9393L17.2197 9.71967C17.5126 9.42678 17.9874 9.42678 18.2803 9.71967Z"
        fill={'url(#' + iconId + '-paint1_linear_378174_8703)' + ''}
      />
      <defs>
        <linearGradient
          id={iconId + '-paint0_linear_378174_8703'}
          x1={5.75}
          y1={3.5}
          x2={21.5}
          y2={26.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F83F54" />
          <stop offset={1} stopColor="#CA2134" />
        </linearGradient>
        <linearGradient
          id={iconId + '-paint1_linear_378174_8703'}
          x1={10.0225}
          y1={14.3977}
          x2={14.7088}
          y2={19.2708}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#FECBE6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
