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
        d="M6 5.5A3.5 3.5 0 0 1 9.5 2H23a7 7 0 0 1 7 7v21.5a3.5 3.5 0 0 1-3.5 3.5h-17A3.5 3.5 0 0 1 6 30.5v-25z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M9.5 3A2.5 2.5 0 0 0 7 5.5v22.55A3.49 3.49 0 0 1 9.5 27h17a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H9.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M9.5 3A2.5 2.5 0 0 0 7 5.5v22.55A3.49 3.49 0 0 1 9.5 27h17a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H9.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M29 26.95A3.49 3.49 0 0 1 26.5 28h-17a2.5 2.5 0 0 0 0 5h17a2.5 2.5 0 0 0 2.5-2.5v-.55A3.49 3.49 0 0 1 26.5 31h-17a.5.5 0 0 1 0-1h17a2.5 2.5 0 0 0 2.5-2.5v-.55z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M29 26.95A3.49 3.49 0 0 1 26.5 28h-17a2.5 2.5 0 0 0 0 5h17a2.5 2.5 0 0 0 2.5-2.5v-.55A3.49 3.49 0 0 1 26.5 31h-17a.5.5 0 0 1 0-1h17a2.5 2.5 0 0 0 2.5-2.5v-.55z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M20.68 8.033a.5.5 0 0 1 .287.647l-5 13a.5.5 0 0 1-.934-.36l5-13a.5.5 0 0 1 .646-.287z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M12.854 11.647a.5.5 0 0 1 0 .707L10.207 15l2.647 2.647a.5.5 0 0 1-.708.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .708 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M23.146 11.647a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708-.707L25.793 15l-2.647-2.646a.5.5 0 0 1 0-.707z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.75}
          x2={19.418}
          y1={2}
          y2={33.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
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
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.111}
          x2={18.218}
          y1={3}
          y2={32.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(11.6111 23.75 -17.4167 8.90625 14.028 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
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
        <linearGradient
          id={iconId + '-g'}
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
          id={iconId + '-h'}
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
