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
        d="M18 17a9 9 0 0 1 9-9h33c9.941 0 18 8.059 18 18v53a9 9 0 0 1-9 9H27a9 9 0 0 1-9-9V17z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M76 71a7 7 0 0 1-7 7H27a1 1 0 1 0 0 2h42a8.981 8.981 0 0 0 7-3.346V79a7 7 0 0 1-7 7H27a7 7 0 1 1 0-14h42a8.983 8.983 0 0 0 7-3.343V71z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M76 71a7 7 0 0 1-7 7H27a1 1 0 1 0 0 2h42a8.981 8.981 0 0 0 7-3.346V79a7 7 0 0 1-7 7H27a7 7 0 1 1 0-14h42a8.983 8.983 0 0 0 7-3.343V71z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M60 10c8.837 0 16 7.163 16 16v37a7 7 0 0 1-7 7H27a8.981 8.981 0 0 0-7 3.345V17a7 7 0 0 1 7-7h33z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M60 10c8.837 0 16 7.163 16 16v37a7 7 0 0 1-7 7H27a8.981 8.981 0 0 0-7 3.345V17a7 7 0 0 1 7-7h33z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M65 57.18A3.82 3.82 0 0 1 61.18 61L48 60.995V59c0-6.075-4.925-11-11-11h-5.58a7.638 7.638 0 0 1 7.217-5.137H65v14.318z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M48.944 27.59H65v15.092a3.818 3.818 0 0 1-3.818 3.818H48.944V27.59z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M61.182 19A3.818 3.818 0 0 1 65 22.818v6.864a3.818 3.818 0 0 1-3.817 3.818H57.32a3.818 3.818 0 0 0-3.817 3.82l.003 5.36a3.818 3.818 0 0 1-3.819 3.82h-11.52c-1.652 0-3.172.56-4.383 1.5h-2.776V26.16A7.16 7.16 0 0 1 38.167 19h23.015z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.8}
        d="M61.182 19A3.818 3.818 0 0 1 65 22.818v6.864a3.818 3.818 0 0 1-3.817 3.818H57.32a3.818 3.818 0 0 0-3.817 3.82l.003 5.36a3.818 3.818 0 0 1-3.819 3.82h-11.52c-1.652 0-3.172.56-4.383 1.5h-2.776V26.16A7.16 7.16 0 0 1 38.167 19h23.015z"
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={9}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.8}
        rx={9}
      />
      <path
        fill="#fff"
        d="M36.773 82h-5.445L21.46 67.188a49.048 49.048 0 0 1-.701-1.154c-.19-.335-.334-.614-.434-.837h-.067c.022.424.039.96.05 1.606.011.648.017 1.406.017 2.276V82H15.23V58h5.812l9.502 14.343c.2.324.395.653.584.987.2.324.384.648.551.971h.067a22.664 22.664 0 0 1-.05-1.238c-.011-.558-.017-1.244-.017-2.059V58h5.094v24z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={37.375}
          x2={51.544}
          y1={8}
          y2={87.703}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
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
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={35.556}
          x2={48.436}
          y1={10}
          y2={85.926}
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
          gradientTransform="matrix(29.5556 60.1667 -44.3333 22.5625 37.889 29.792)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(54.5923 0 0 24.2399 63.995 61)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.159} stopColor="#A931D8" />
          <stop offset={0.566} stopColor="#6E1996" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={72.207}
          x2={52.088}
          y1={38.033}
          y2={28.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.217} stopColor="#CA59F7" />
          <stop offset={0.888} stopColor="#691A90" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={65.714}
          x2={31.008}
          y1={29.826}
          y2={29.826}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DE68F2" />
          <stop offset={0.775} stopColor="#DE66FF" />
          <stop offset={1} stopColor="#FF84F7" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-17.3533 23.864 -19.7845 -20.9915 65.714 19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC5D0" />
          <stop offset={1} stopColor="#EBC5FF" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -57.355 32.243) scale(56.5685)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.072} stopColor="#AC13EB" />
          <stop offset={0.879} stopColor="#580087" />
        </radialGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 28 -32.25 0 26 74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.585} stopColor="#841FB0" stopOpacity={0} />
          <stop offset={0.969} stopColor="#D373FC" />
        </radialGradient>
      </defs>
    </svg>
  )
}
