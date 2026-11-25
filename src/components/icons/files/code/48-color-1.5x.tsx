'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        fillRule="evenodd"
        d="M9.5 2A3.5 3.5 0 0 0 6 5.5v21.837A3.5 3.5 0 0 0 7.5 34h19a3.5 3.5 0 0 0 3.5-3.5V9a7 7 0 0 0-7-7H9.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M26.5 33a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H9.5A2.5 2.5 0 0 0 7 5.5v21.535c.163-.023.33-.035.5-.035h19a.5.5 0 0 1 0 1 2.5 2.5 0 0 0 0 5zm-2.45-5A3.49 3.49 0 0 0 23 30.5c0 .98.402 1.865 1.05 2.5H7.5a2.5 2.5 0 0 1 0-5h16.55z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M26.5 33a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H9.5A2.5 2.5 0 0 0 7 5.5v21.535c.163-.023.33-.035.5-.035h19a.5.5 0 0 1 0 1 2.5 2.5 0 0 0 0 5zm-2.45-5A3.49 3.49 0 0 0 23 30.5c0 .98.402 1.865 1.05 2.5H7.5a2.5 2.5 0 0 1 0-5h16.55z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M20.68 8.033a.5.5 0 0 1 .287.647l-5 13a.5.5 0 0 1-.934-.36l5-13a.5.5 0 0 1 .646-.287z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12.854 11.647a.5.5 0 0 1 0 .707L10.207 15l2.647 2.647a.5.5 0 0 1-.708.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .708 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M23.146 11.647a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708-.707L25.793 15l-2.647-2.646a.5.5 0 0 1 0-.707z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.396}
          x2={17.651}
          y1={2}
          y2={34.026}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.667}
          x2={16.37}
          y1={3}
          y2={33.099}
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
          gradientTransform="matrix(12.6667 23.75 -19 8.90625 12.667 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={12.938}
          x2={19.456}
          y1={5.667}
          y2={21.84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={12.938}
          x2={19.456}
          y1={5.667}
          y2={21.84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={12.938}
          x2={19.456}
          y1={5.667}
          y2={21.84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
