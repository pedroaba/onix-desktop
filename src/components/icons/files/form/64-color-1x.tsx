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
        d="M5 5a3 3 0 0 1 3-3h13a6 6 0 0 1 6 6v19a3 3 0 0 1-3 3H11a6 6 0 0 1-6-6V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M6 5a2 2 0 0 1 2-2h13a5 5 0 0 1 5 5v19a2 2 0 0 1-2 2H11a5 5 0 0 1-5-5V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M6 5a2 2 0 0 1 2-2h13a5 5 0 0 1 5 5v19a2 2 0 0 1-2 2H11a5 5 0 0 1-5-5V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M22 22.667c0 .736-.597 1.333-1.333 1.333H15v-3a4 4 0 0 0-4-4h-.771A5.003 5.003 0 0 1 15 13.5h7v9.167z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.8}
        d="M22 22.667c0 .736-.597 1.333-1.333 1.333H15v-3a4 4 0 0 0-4-4h-.771A5.003 5.003 0 0 1 15 13.5h7v9.167z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M20.546 8C21.349 8 22 8.652 22 9.455v5.09C22 15.35 21.349 16 20.546 16h-7.863c-.842 0-1.593.391-2.084 1H10v-6.317A2.683 2.683 0 0 1 12.683 8h7.863z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M20.546 8C21.349 8 22 8.652 22 9.455v5.09C22 15.35 21.349 16 20.546 16h-7.863c-.842 0-1.593.391-2.084 1H10v-6.317A2.683 2.683 0 0 1 12.683 8h7.863z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M18.5 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M18.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M20.637 18c.2 0 .363.163.363.363v3.274c0 .2-.163.363-.363.363h-3.274a.364.364 0 0 1-.363-.363v-3.274c0-.2.163-.363.363-.363h3.274z"
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={3}
      />
      <rect
        width={13}
        height={13}
        x={1}
        y={18}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.6}
        rx={3}
      />
      <path
        fill="#fff"
        d="M9.52 22.308H7.054v1.684h2.264v1.299H7.055V28H5.48v-7h4.04v1.308z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.104}
          x2={16.851}
          y1={2}
          y2={29.972}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.556}
          x2={15.786}
          y1={3}
          y2={29.035}
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
          gradientTransform="matrix(10.5556 20.5833 -15.8333 7.71875 12.389 9.77)"
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
          gradientTransform="matrix(-8.0998 -14.2501 12.2962 -7.2509 19.067 25.875)"
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
          gradientTransform="matrix(-5.29248 -5.39067 4.09794 -4.17225 12.808 15.375)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={0.992} stopColor="#06517B" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={9.293}
          x2={22.689}
          y1={15.702}
          y2={9.353}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.227} stopColor="#15B4D5" />
          <stop offset={1} stopColor="#43E5CA" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={12.582}
          x2={9}
          y1={12.431}
          y2={12.431}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#29CBDC" stopOpacity={0} />
          <stop offset={1} stopColor="#36DFF1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={16.714}
          x2={19.929}
          y1={9.357}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#119FC5" />
          <stop offset={1} stopColor="#22918B" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={17.429}
          x2={19.357}
          y1={10.214}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06517B" />
          <stop offset={1} stopColor="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={17.571}
          x2={20.143}
          y1={18.286}
          y2={22}
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
          gradientTransform="rotate(45 -21.228 10.207) scale(18.3848)"
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
          gradientTransform="matrix(0 9.1 -10.3594 0 7.5 25.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
