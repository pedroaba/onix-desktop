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
        d="M6 6a4 4 0 0 1 4-4h16a8 8 0 0 1 8 8v24a4 4 0 0 1-4 4H14a8 8 0 0 1-8-8V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v24a3 3 0 0 1-3 3H14a7 7 0 0 1-7-7V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M7 6a3 3 0 0 1 3-3h16a7 7 0 0 1 7 7v24a3 3 0 0 1-3 3H14a7 7 0 0 1-7-7V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M27 27.5a1.5 1.5 0 0 1-1.5 1.5H20v-4a5 5 0 0 0-5-5h-2.623a4.25 4.25 0 0 1 3.873-2.5H27v10z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        d="M27 27.5a1.5 1.5 0 0 1-1.5 1.5H20v-4a5 5 0 0 0-5-5h-2.623a4.25 4.25 0 0 1 3.873-2.5H27v10z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M25.363 11c.904 0 1.637.733 1.637 1.637v5.726c0 .904-.733 1.637-1.637 1.637H12v-5.982A3.018 3.018 0 0 1 15.018 11h10.345z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M25.363 11c.904 0 1.637.733 1.637 1.637v5.726c0 .904-.733 1.637-1.637 1.637H12v-5.982A3.018 3.018 0 0 1 15.018 11h10.345z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M22.5 18.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M22.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M24.1 22.5c.22 0 .4.18.4.4v3.2a.4.4 0 0 1-.4.4h-3.2a.4.4 0 0 1-.4-.4v-3.2c0-.22.18-.4.4-.4h3.2z"
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={4}
      />
      <rect
        width={18}
        height={18}
        x={1}
        y={21}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.6}
        rx={4}
      />
      <path
        fill="#fff"
        d="M12.883 26.869h-3.52v2.406h3.235v1.855H9.363V35H7.115V25h5.768v1.869z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={15.042}
          x2={21.203}
          y1={2}
          y2={37.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
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
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
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
          gradientTransform="matrix(-9.40297 -15.6071 14.2745 -7.94138 23.58 31.053)"
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
          gradientTransform="matrix(-6.14398 -5.90401 4.75725 -4.56956 16.315 19.554)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={0.992} stopColor="#06517B" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={12.338}
          x2={28.29}
          y1={20.748}
          y2={13.856}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.227} stopColor="#15B4D5" />
          <stop offset={1} stopColor="#43E5CA" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={16.133}
          x2={12}
          y1={16.608}
          y2={16.608}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#29CBDC" stopOpacity={0} />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={20.358}
          x2={24.215}
          y1={12.929}
          y2={18.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={21.429}
          x2={23.358}
          y1={14.214}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={12.787}
          x2={13.857}
          y1={22.786}
          y2={28.064}
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
          gradientTransform="rotate(45 -24.85 11.707) scale(25.4558)"
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
          gradientTransform="matrix(0 12.6 -14.3437 0 10 31.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
