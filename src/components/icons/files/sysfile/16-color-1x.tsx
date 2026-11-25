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
        d="M2 3a2 2 0 0 1 2-2h6.5A3.5 3.5 0 0 1 14 4.5V13a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M7.145 11.908a.463.463 0 0 1-.355-.432l-.03-.492a.5.5 0 0 0-.722-.416l-.441.22a.463.463 0 0 1-.552-.092 4.012 4.012 0 0 1-.856-1.484.463.463 0 0 1 .196-.523l.41-.272a.5.5 0 0 0 0-.834l-.41-.272a.463.463 0 0 1-.197-.523 4.016 4.016 0 0 1 .857-1.484.463.463 0 0 1 .552-.091l.44.22a.5.5 0 0 0 .722-.417l.031-.492a.463.463 0 0 1 .355-.432 4.015 4.015 0 0 1 1.713 0 .463.463 0 0 1 .355.432l.03.492a.5.5 0 0 0 .722.416l.441-.22a.463.463 0 0 1 .551.092 4.012 4.012 0 0 1 .857 1.484.463.463 0 0 1-.197.523l-.41.272a.5.5 0 0 0 0 .834l.41.272c.173.115.26.325.197.523a4.015 4.015 0 0 1-.857 1.484.463.463 0 0 1-.55.091l-.442-.22a.5.5 0 0 0-.722.417l-.03.492a.463.463 0 0 1-.355.432 4.011 4.011 0 0 1-1.713 0zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        clipRule="evenodd"
      />
      <defs>
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
        <linearGradient
          id={iconId + '-d'}
          x1={6.52}
          x2={8.902}
          y1={5}
          y2={11.844}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
