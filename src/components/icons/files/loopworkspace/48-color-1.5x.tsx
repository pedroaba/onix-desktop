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
        d="M27 23a2 2 0 0 1-2 2h-8.374A8.505 8.505 0 0 0 9 19.015v-5.681h18V23z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M9 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1H9v-1z"
      />
      <path
        fill="#F3F3F3"
        d="M13.188 27.5a4.688 4.688 0 1 1-9.376 0 4.688 4.688 0 0 1 9.376 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillRule="evenodd"
        d="M8.5 20a7.5 7.5 0 0 1 0 15H1v-7.5A7.5 7.5 0 0 1 8.5 20zm0 5A2.5 2.5 0 0 0 6 27.5V30h2.5a2.5 2.5 0 0 0 0-5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M15.982 28A7.499 7.499 0 0 1 8.5 35H1a5 5 0 0 1 5-5h2.5a2.5 2.5 0 0 0 2.45-2h5.032z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.56}
        d="M15.982 28A7.499 7.499 0 0 1 8.5 35H1a5 5 0 0 1 5-5h2.5a2.5 2.5 0 0 0 2.45-2h5.032z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.1}
        d="M15.982 28A7.499 7.499 0 0 1 8.5 35H1a5 5 0 0 1 5-5h2.5a2.5 2.5 0 0 0 2.45-2h5.032z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M8.5 20c2.071 0 3.947.84 5.304 2.196l-3.536 3.536A2.5 2.5 0 0 0 6 27.5V30a5 5 0 0 1-5 5v-7.5A7.5 7.5 0 0 1 8.5 20z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M8.5 20c2.071 0 3.947.84 5.304 2.196l-3.536 3.536A2.5 2.5 0 0 0 6 27.5V30a5 5 0 0 1-5 5v-7.5A7.5 7.5 0 0 1 8.5 20z"
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
          x1={18}
          x2={18}
          y1={13.042}
          y2={26.167}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D0BEFE" />
          <stop offset={1} stopColor="#C2AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={18}
          x2={18}
          y1={11}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB85FF" />
          <stop offset={1} stopColor="#9354FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={10.15}
          x2={7.675}
          y1={25.325}
          y2={35.45}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5.875}
          x2={12.474}
          y1={33.875}
          y2={32.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51E6FF" />
          <stop offset={1} stopColor="#71D4FF" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(2.99957 2.0625 -3.62437 5.27257 3.625 31.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.7} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.5492 3.45 -6.06258 9.75425 2.725 31.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={4.07}
          x2={7.929}
          y1={28.076}
          y2={22.67}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#AB5ADD" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(10.035 -1.73586 4.5285 26.5891 -.273 24.68)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
