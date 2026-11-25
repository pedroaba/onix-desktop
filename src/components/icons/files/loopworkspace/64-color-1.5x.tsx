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
        d="M8 27a9 9 0 0 1 9-9h53c9.941 0 18 8.059 18 18v33a9 9 0 0 1-9 9H26c-9.941 0-18-8.059-18-18V27z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M72 63a3 3 0 0 1-3 3H47.636C45.755 55.76 36.784 48 26 48c-.674 0-1.341.032-2 .09V36h48v27z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M24 33a3 3 0 0 1 3-3h42a3 3 0 0 1 3 3v6H24v-6z"
      />
      <path
        fill="#F3F3F3"
        d="M38.5 70c0 6.904-5.596 12.5-12.5 12.5S13.5 76.904 13.5 70 19.096 57.5 26 57.5 38.5 63.096 38.5 70z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillRule="evenodd"
        d="M26 50c11.046 0 20 8.954 20 20s-8.954 20-20 20H6.001L6 70c0-11.046 8.954-20 20-20zm0 12a8 8 0 0 0-8 8v8h8a8 8 0 1 0 0-16z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M46 70c0 11.046-8.955 20-20 20H6v-.103C6.057 83.317 11.408 78 18 78h8a8 8 0 0 0 8-8h12z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.56}
        d="M46 70c0 11.046-8.955 20-20 20H6v-.103C6.057 83.317 11.408 78 18 78h8a8 8 0 0 0 8-8h12z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.1}
        d="M46 70c0 11.046-8.955 20-20 20H6v-.103C6.057 83.317 11.408 78 18 78h8a8 8 0 0 0 8-8h12z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M26 50a19.938 19.938 0 0 1 14.143 5.857l-8.486 8.486A8 8 0 0 0 18 70v8c0 6.627-5.373 11.999-12 11.999V70c0-11.046 8.954-20 20-20z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M26 50a19.938 19.938 0 0 1 14.143 5.857l-8.486 8.486A8 8 0 0 0 18 70v8c0 6.627-5.373 11.999-12 11.999V70c0-11.046 8.954-20 20-20z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.833}
          x2={39.939}
          y1={18}
          y2={79.056}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={31.111}
          x2={36.368}
          y1={20}
          y2={77.071}
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
          gradientTransform="matrix(40.1111 44.3333 -60.1667 16.625 34.278 34.583)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={48}
          x2={48}
          y1={35.25}
          y2={69}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D0BEFE" />
          <stop offset={1} stopColor="#C2AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={48}
          x2={48}
          y1={30}
          y2={39}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB85FF" />
          <stop offset={1} stopColor="#9354FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={30.4}
          x2={23.8}
          y1={64.2}
          y2={91.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={19}
          x2={36.6}
          y1={87}
          y2={83}
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
          gradientTransform="matrix(7.99981 5.5 -9.66614 14.0602 13 81.5)"
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
          gradientTransform="matrix(14.7996 9.2 -16.1688 26.0113 10.6 80)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={14.188}
          x2={24.478}
          y1={71.534}
          y2={57.119}
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
          gradientTransform="matrix(26.7595 -4.62884 12.0758 70.9026 2.605 62.478)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
