'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 96"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M12 21a9 9 0 019-9h45c9.941 0 18 8.059 18 18v45a9 9 0 01-9 9H30c-9.941 0-18-8.059-18-18z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M14 21a7 7 0 017-7h45c8.837 0 16 7.163 16 16v45a7 7 0 01-7 7H30c-8.837 0-16-7.163-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M14 21a7 7 0 017-7h45c8.837 0 16 7.163 16 16v45a7 7 0 01-7 7H30c-8.837 0-16-7.163-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M40.452 54.547a4.63 4.63 0 01-6.548 0L27.356 48a4.63 4.63 0 010-6.548l6.548-6.548a4.63 4.63 0 016.548 0L47 41.452A4.63 4.63 0 0147 48z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M40.452 54.547a4.63 4.63 0 01-6.548 0L27.356 48a4.63 4.63 0 010-6.548l6.548-6.548a4.63 4.63 0 016.548 0L47 41.452A4.63 4.63 0 0147 48z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M27.356 48a4.63 4.63 0 006.548 0l19.644-19.644a4.63 4.63 0 016.548 0l6.548 6.548a4.63 4.63 0 010 6.548L47 61.096a4.63 4.63 0 01-6.548 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M27.356 48a4.63 4.63 0 006.548 0l19.644-19.644a4.63 4.63 0 016.548 0l6.548 6.548a4.63 4.63 0 010 6.548L47 61.096a4.63 4.63 0 01-6.548 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M33.904 54.548a4.63 4.63 0 006.548 0L53.55 41.452a4.63 4.63 0 016.548 0L66.645 48a4.63 4.63 0 010 6.548L53.549 67.644a4.63 4.63 0 01-6.548 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M33.904 54.548a4.63 4.63 0 006.548 0L53.55 41.452a4.63 4.63 0 016.548 0L66.645 48a4.63 4.63 0 010 6.548L53.549 67.644a4.63 4.63 0 01-6.548 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={35.25}
          x2={44.944}
          y1={12}
          y2={84.707}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={32.889}
          x2={41.491}
          y1={14}
          y2={82.814}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={37.178}
          x2={29.776}
          y1={33.548}
          y2={49.36}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={40.666}
          x2={34.646}
          y1={46.372}
          y2={40.462}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={58.148}
          x2={43.25}
          y1={27}
          y2={62.734}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={58.148}
          x2={43.25}
          y1={27}
          y2={62.734}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={57.501}
          x2={50.502}
          y1={40.124}
          y2={68.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={57.88}
          x2={44.417}
          y1={40.871}
          y2={67.139}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#4A40D4" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(35.8889 53.8333 -53.8333 20.1875 35.722 31.708)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
