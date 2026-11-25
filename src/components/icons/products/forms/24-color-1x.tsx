'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-prefix__a)' + ''}
        d="M3 14.75A5.75 5.75 0 018.75 9H21v12.167C21 22.179 20.18 23 19.167 23H6.688A3.688 3.688 0 013 19.312V14.75z"
      />
      <path
        fill={'url(#' + iconId + '-prefix__b)' + ''}
        fillOpacity={0.8}
        d="M3 14.75A5.75 5.75 0 018.75 9H21v12.167C21 22.179 20.18 23 19.167 23H6.688A3.688 3.688 0 013 19.312V14.75z"
      />
      <path
        fill={'url(#' + iconId + '-prefix__c)' + ''}
        d="M3 4.688A3.688 3.688 0 016.688 1H19a2 2 0 012 2v7a2 2 0 01-2 2H6.688A3.698 3.698 0 003 15.7V4.688z"
      />
      <path
        fill={'url(#' + iconId + '-prefix__d)' + ''}
        d="M3 4.688A3.688 3.688 0 016.688 1H19a2 2 0 012 2v7a2 2 0 01-2 2H6.688A3.698 3.698 0 003 15.7V4.688z"
      />
      <path
        fill={'url(#' + iconId + '-prefix__e)' + ''}
        d="M15.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      />
      <path
        fill={'url(#' + iconId + '-prefix__f)' + ''}
        d="M15.5 8.5a2 2 0 100-4 2 2 0 000 4z"
      />
      <path
        fill={'url(#' + iconId + '-prefix__g)' + ''}
        d="M17.5 15h-4a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"
      />
      <rect
        width={10}
        height={10}
        y={11}
        fill={'url(#' + iconId + '-prefix__h)' + ''}
        rx={2.25}
      />
      <rect
        width={10}
        height={10}
        y={11}
        fill={'url(#' + iconId + '-prefix__i)' + ''}
        fillOpacity={0.6}
        rx={2.25}
      />
      <path
        fill="#fff"
        d="M6.73 14.121H4.618v1.444h1.941v1.113H4.618V19H3.27v-6h3.46v1.121z"
      />
      <defs>
        <linearGradient
          id={iconId + '-prefix__c'}
          x1={3.405}
          x2={20.597}
          y1={9.916}
          y2={0.17}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.227} stopColor="#15B4D5" />
          <stop offset={1} stopColor="#43E5CA" />
        </linearGradient>
        <linearGradient
          id={iconId + '-prefix__d'}
          x1={7.959}
          x2={3}
          y1={6.129}
          y2={6.129}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#29CBDC" stopOpacity={0} />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-prefix__e'}
          x1={13}
          x2={17.5}
          y1={3.5}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-prefix__f'}
          x1={14.071}
          x2={16.643}
          y1={4.786}
          y2={8.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-prefix__g'}
          x1={13.714}
          x2={16.929}
          y1={15.357}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#20AC9D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-prefix__a'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-11.00014 -18.99992 16.69885 -9.66792 17 25.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.008} stopColor="#1A7F7C" />
          <stop offset={0.45} stopColor="#14717C" />
          <stop offset={0.803} stopColor="#08567B" />
        </radialGradient>
        <radialGradient
          id={iconId + '-prefix__b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.1875 -7.1875 5.56524 -5.56296 8.5 11.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={0.992} stopColor="#06517B" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-prefix__h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -13.278 5.5) scale(14.1421)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#009BBC" />
          <stop offset={0.591} stopColor="#01657D" />
          <stop offset={0.941} stopColor="#014354" />
        </radialGradient>
        <radialGradient
          id={iconId + '-prefix__i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 7 -7.96875 0 5 17)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
