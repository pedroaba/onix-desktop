'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 8a3 3 0 0 1 3-3h19a6 6 0 0 1 6 6v13a3 3 0 0 1-3 3H8a6 6 0 0 1-6-6V8z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 8a2 2 0 0 1 2-2h19a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H8a5 5 0 0 1-5-5V8z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M22 22.75c0 .69-.56 1.25-1.25 1.25H15v-3a4 4 0 0 0-4-4h-1v-3.125c0-1.036.84-1.875 1.875-1.875H22v10.75z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M22 22.75c0 .69-.56 1.25-1.25 1.25H15v-3a4 4 0 0 0-4-4h-1v-3.125c0-1.036.84-1.875 1.875-1.875H22v10.75z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M17.248 14c-.69 0-1.248.559-1.248 1.248v2a1.25 1.25 0 0 1-1.253 1.25l-.63-.003A3.991 3.991 0 0 0 11 17h-1v-1.125c0-1.036.84-1.875 1.875-1.875h5.373z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M17.248 14c-.69 0-1.248.559-1.248 1.248v2a1.25 1.25 0 0 1-1.253 1.25l-.63-.003A3.991 3.991 0 0 0 11 17h-1v-1.125c0-1.036.84-1.875 1.875-1.875h5.373z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M17.5 14h-5.156A2.344 2.344 0 0 0 10 16.344V11.5A2.5 2.5 0 0 1 12.5 9h5v5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M17.5 14h-5.156A2.344 2.344 0 0 0 10 16.344V11.5A2.5 2.5 0 0 1 12.5 9h5v5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M17.5 14h-5.156A2.344 2.344 0 0 0 10 16.344V11.5A2.5 2.5 0 0 1 12.5 9h5v5z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M22 10.25C22 9.56 21.44 9 20.75 9h-3.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-2.5z"
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-l)' + ''}
        rx={3}
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.3}
        rx={3}
      />
      <path
        fill="#fff"
        d="M10.723 28h-1.89l-1.187-2.23a6.86 6.86 0 0 1-.097-.186 6.566 6.566 0 0 1-.064-.166h-.02a1.466 1.466 0 0 1-.082.19 7.89 7.89 0 0 0-.093.18L6.06 28H4.277l2.139-3.505L4.424 21h1.865l1.055 1.992c.042.081.078.153.107.214.033.059.065.129.098.21h.02l.107-.224.117-.22L8.887 21h1.777l-2.021 3.441L10.723 28z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.042}
          x2={13.385}
          y1={5}
          y2={27.366}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={10.222}
          x2={12.181}
          y1={6}
          y2={26.367}
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
          gradientTransform="matrix(13.7222 15.8333 -20.5833 5.9375 11.306 11.208)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-d'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-11.3333 -12.3333 9.54948 -8.77158 22 25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.065} stopColor="#379539" />
          <stop offset={0.422} stopColor="#297C2D" />
          <stop offset={0.703} stopColor="#15561C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.79167 -4.79167 3.71016 -3.70864 13.667 16.333)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#073B10" />
          <stop offset={0.992} stopColor="#084A13" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.077}
          x2={15.799}
          y1={19.679}
          y2={19.679}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={0.329} stopColor="#4AA647" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={15.639}
          x2={15.639}
          y1={14}
          y2={21.89}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29852F" />
          <stop offset={0.5} stopColor="#4AA647" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={10.276}
          x2={19.21}
          y1={17.798}
          y2={12.444}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66D052" />
          <stop offset={1} stopColor="#85E972" />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-3.75784 0 0 -11.5142 17.23 13.621)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.292} stopColor="#4EB43B" />
          <stop offset={1} stopColor="#72CC61" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={13.381}
          x2={10}
          y1={14.061}
          y2={14.061}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#C0E075" stopOpacity={0} />
          <stop offset={1} stopColor="#D1EB95" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-5.96857 -5.69975 4.89508 -6.9497 21.969 14.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.44} stopColor="#79E96D" />
          <stop offset={1} stopColor="#D0EB76" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -21.228 10.207) scale(18.3848 52.3364)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20A85E" />
          <stop offset={0.944} stopColor="#09442A" />
        </radialGradient>
        <radialGradient
          id={iconId + '-m'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 9.1 -10.4813 0 7.5 25.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.58} stopColor="#33A662" stopOpacity={0} />
          <stop offset={0.974} stopColor="#98F0B0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
