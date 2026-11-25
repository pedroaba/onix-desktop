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
        fill={'url(#' + iconId + '-a)' + ''}
        d="M4 4a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 4a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 4a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M16 15.667c0 .736-.597 1.333-1.333 1.333H12v-2a3 3 0 0 0-3-3h-.95A2 2 0 0 1 10 10.437h6v5.23z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        d="M16 15.667c0 .736-.597 1.333-1.333 1.333H12v-2a3 3 0 0 0-3-3h-.95A2 2 0 0 1 10 10.437h6v5.23z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M14.548 7.012A1.455 1.455 0 0 1 16 8.467v2.09c0 .805-.653 1.456-1.457 1.455l-4.861-.01a1.7 1.7 0 0 0-.278.025A3.03 3.03 0 0 0 9 12H8V9.687a2.683 2.683 0 0 1 2.688-2.682l3.86.007z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M14.548 7.012A1.455 1.455 0 0 1 16 8.467v2.09c0 .805-.653 1.456-1.457 1.455l-4.861-.01a1.7 1.7 0 0 0-.278.025A3.03 3.03 0 0 0 9 12H8V9.687a2.683 2.683 0 0 1 2.688-2.682l3.86.007z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M13.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M13.5 10.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M14.637 13c.2 0 .363.163.363.363v1.774c0 .2-.163.363-.363.363h-1.774a.364.364 0 0 1-.363-.363v-1.774c0-.2.163-.363.363-.363h1.774z"
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={2}
      />
      <rect
        width={10}
        height={10}
        x={1}
        y={13}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.6}
        rx={2}
      />
      <path
        fill="#fff"
        d="M7.46 16.121H5.349v1.444H7.29v1.113H5.348V21H4v-6h3.46v1.121z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={9.167}
          x2={12.5}
          y1={2}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.889}
          x2={11.787}
          y1={3}
          y2={21.034}
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
          gradientTransform="matrix(7.38889 14.25 -11.0833 5.34375 9.472 7.688)"
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
          gradientTransform="matrix(-4.92679 -8.90628 7.47928 -4.53179 14.22 18.172)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.008} stopColor="#1A7F7C" />
          <stop offset={0.45} stopColor="#14717C" />
          <stop offset={0.803} stopColor="#08567B" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-3.21921 -3.36915 2.49262 -2.60764 10.413 11.61)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={0.992} stopColor="#06517B" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={8.18}
          x2={16.792}
          y1={12.416}
          y2={8.841}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.227} stopColor="#15B4D5" />
          <stop offset={1} stopColor="#43E5CA" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={10.204}
          x2={8}
          y1={10.118}
          y2={10.118}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#29CBDC" stopOpacity={0} />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={12.429}
          x2={14.357}
          y1={8.214}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={12.964}
          x2={13.929}
          y1={8.857}
          y2={10.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={11.971}
          x2={13.327}
          y1={13.179}
          y2={15.948}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#20AC9D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -15.192 7.707) scale(14.1421)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#009BBC" />
          <stop offset={0.591} stopColor="#01657D" />
          <stop offset={0.941} stopColor="#014354" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 7 -7.96875 0 6 19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
