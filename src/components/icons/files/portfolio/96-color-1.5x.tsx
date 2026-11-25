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
        d="M77.614 77.614A9 9 0 0169 84H36c-13.255 0-24-10.745-24-24V27a9 9 0 016.386-8.614A9 9 0 0127 12h39c9.941 0 18 8.059 18 18v39a9 9 0 01-6.386 8.614"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M27 14a7 7 0 00-7 7v39c0 8.837 7.163 16 16 16h39a7 7 0 007-7V30c0-8.837-7.163-16-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M27 14a7 7 0 00-7 7v39c0 8.837 7.163 16 16 16h39a7 7 0 007-7V30c0-8.837-7.163-16-16-16z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M18 21q0-.165.006-.33A7 7 0 0014 27v33c0 12.15 9.85 22 22 22h33a7 7 0 006.33-4.006A9 9 0 0175 78H36c-9.941 0-18-8.059-18-18z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M18 21q0-.165.006-.33A7 7 0 0014 27v33c0 12.15 9.85 22 22 22h33a7 7 0 006.33-4.006A9 9 0 0175 78H36c-9.941 0-18-8.059-18-18z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M44.076 50.924a4.19 4.19 0 01-5.925 0l-5.924-5.925a4.19 4.19 0 010-5.924l5.924-5.924a4.19 4.19 0 015.925 0L50 39.075a4.19 4.19 0 010 5.924z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M44.076 50.924a4.19 4.19 0 01-5.925 0l-5.924-5.925a4.19 4.19 0 010-5.924l5.924-5.924a4.19 4.19 0 015.925 0L50 39.075a4.19 4.19 0 010 5.924z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M32.227 45a4.19 4.19 0 005.924 0l17.774-17.773a4.19 4.19 0 015.924 0l5.924 5.924a4.19 4.19 0 010 5.925L50 56.849a4.19 4.19 0 01-5.925 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M32.227 45a4.19 4.19 0 005.924 0l17.774-17.773a4.19 4.19 0 015.924 0l5.924 5.924a4.19 4.19 0 010 5.925L50 56.849a4.19 4.19 0 01-5.925 0z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M38.152 50.924a4.19 4.19 0 005.925 0l11.849-11.848a4.19 4.19 0 015.924 0L67.775 45a4.19 4.19 0 010 5.924l-11.85 11.85a4.19 4.19 0 01-5.924 0z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M38.152 50.924a4.19 4.19 0 005.925 0l11.849-11.848a4.19 4.19 0 015.924 0L67.775 45a4.19 4.19 0 010 5.924l-11.85 11.85a4.19 4.19 0 01-5.924 0z"
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
          id={iconId + '-f'}
          x1={41.113}
          x2={34.417}
          y1={31.924}
          y2={46.23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={44.269}
          x2={38.823}
          y1={43.527}
          y2={38.179}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={60.086}
          x2={46.607}
          y1={26}
          y2={58.331}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={60.086}
          x2={46.607}
          y1={26}
          y2={58.331}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={59.502}
          x2={53.169}
          y1={37.875}
          y2={63.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={59.844}
          x2={47.664}
          y1={38.55}
          y2={62.317}
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
        <radialGradient
          id={iconId + '-e'}
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
