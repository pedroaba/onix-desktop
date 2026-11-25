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
        d="M2 9.5A3.5 3.5 0 0 1 5.5 6H27a7 7 0 0 1 7 7v13.5a3.5 3.5 0 0 1-3.5 3.5H9a7 7 0 0 1-7-7V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 9.5A2.5 2.5 0 0 1 5.5 7H27a6 6 0 0 1 6 6v13.5a2.5 2.5 0 0 1-2.5 2.5H9a6 6 0 0 1-6-6V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 9.5A2.5 2.5 0 0 1 5.5 7H27a6 6 0 0 1 6 6v13.5a2.5 2.5 0 0 1-2.5 2.5H9a6 6 0 0 1-6-6V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16.933 11.25a.5.5 0 0 0-.933.25v5a.5.5 0 1 0 1 0v-3.127l.504.876a.5.5 0 0 0 .862.008l.572-.952V16.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.93-.257l-1.061 1.77-1.014-1.762z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M9.5 21a.5.5 0 1 0 0 1h17a.5.5 0 0 0 0-1h-17z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M9.5 24a.5.5 0 1 0 0 1h17a.5.5 0 0 0 0-1h-17z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M21.438 11a.5.5 0 0 1 .5.5V16h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M11.929 11.243a.5.5 0 1 0-.858.514L12.417 14l-1.346 2.243a.5.5 0 0 0 .858.514L13 14.972l1.071 1.785a.5.5 0 1 0 .858-.514L13.583 14l1.346-2.243a.5.5 0 0 0-.858-.514L13 13.028l-1.071-1.785z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.333}
          x2={14.776}
          y1={6}
          y2={30.422}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.333}
          x2={13.389}
          y1={7}
          y2={29.423}
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
          gradientTransform="matrix(15.8333 17.4167 -23.75 6.53125 12.583 12.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={10.688}
          x2={19.582}
          y1={5.167}
          y2={24.762}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={10.688}
          x2={19.582}
          y1={5.167}
          y2={24.762}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={10.688}
          x2={19.582}
          y1={5.167}
          y2={24.762}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={10.688}
          x2={19.582}
          y1={5.167}
          y2={24.762}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={10.688}
          x2={19.582}
          y1={5.167}
          y2={24.762}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
