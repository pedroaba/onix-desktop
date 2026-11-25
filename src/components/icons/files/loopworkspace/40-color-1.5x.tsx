'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 10a4 4 0 0 1 4-4h24a8 8 0 0 1 8 8v16a4 4 0 0 1-4 4H10a8 8 0 0 1-8-8V10z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 10a3 3 0 0 1 3-3h24a7 7 0 0 1 7 7v16a3 3 0 0 1-3 3H10a7 7 0 0 1-7-7V10z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M30 25a2 2 0 0 1-2 2h-8.458c-1.274-4.057-5.064-7-9.542-7v-5h20v10z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M28 13a2 2 0 0 1 2 2v2H10v-2a2 2 0 0 1 2-2h16z"
      />
      <path
        fill="#F3F3F3"
        d="M15.625 30a5.625 5.625 0 1 1-11.25 0 5.625 5.625 0 0 1 11.25 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillRule="evenodd"
        d="M10 21a9 9 0 1 1 0 18H1v-9a9 9 0 0 1 9-9zm0 6a3 3 0 0 0-3 3v3h3a3 3 0 1 0 0-6z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M19 30a9 9 0 0 1-9 9H1.024A5.5 5.5 0 0 1 7 33.023V33h3a3 3 0 0 0 2.995-2.846L13 30h6z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.56}
        d="M19 30a9 9 0 0 1-9 9H1.024A5.5 5.5 0 0 1 7 33.023V33h3a3 3 0 0 0 2.995-2.846L13 30h6z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.1}
        d="M19 30a9 9 0 0 1-9 9H1.024A5.5 5.5 0 0 1 7 33.023V33h3a3 3 0 0 0 2.995-2.846L13 30h6z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M10 21a8.973 8.973 0 0 1 6.364 2.636l-4.243 4.243A3 3 0 0 0 7 30v3a6 6 0 0 1-6 6v-9a9 9 0 0 1 9-9z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M10 21a8.973 8.973 0 0 1 6.364 2.636l-4.243 4.243A3 3 0 0 0 7 30v3a6 6 0 0 1-6 6v-9a9 9 0 0 1 9-9z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.625}
          x2={16.578}
          y1={6}
          y2={34.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.444}
          x2={14.976}
          y1={7}
          y2={33.48}
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
          gradientTransform="matrix(17.9444 20.5833 -26.9167 7.71875 13.861 13.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={20}
          x2={20}
          y1={14.7}
          y2={28.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D0BEFE" />
          <stop offset={1} stopColor="#C2AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={20}
          x2={20}
          y1={13}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB85FF" />
          <stop offset={1} stopColor="#9354FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={11.98}
          x2={9.01}
          y1={27.39}
          y2={39.54}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={6.85}
          x2={14.77}
          y1={37.65}
          y2={35.85}
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
          gradientTransform="matrix(3.6 2.475 -4.34987 6.32709 4.15 35.175)"
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
          gradientTransform="matrix(6.66 4.14 -7.27615 11.7051 3.07 34.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={4.684}
          x2={9.315}
          y1={30.691}
          y2={24.204}
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
          gradientTransform="matrix(12.0418 -2.08303 5.43413 31.9069 -.528 26.615)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
