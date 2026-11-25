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
        d="M18 17a9 9 0 019-9h33c9.941 0 18 8.059 18 18v53a9 9 0 01-9 9H27a9 9 0 01-9-9z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M76 71a7 7 0 01-7 7H27a1 1 0 100 2h42a8.98 8.98 0 007-3.346V79a7 7 0 01-7 7H27a7 7 0 110-14h42a8.98 8.98 0 007-3.343z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M76 71a7 7 0 01-7 7H27a1 1 0 100 2h42a8.98 8.98 0 007-3.346V79a7 7 0 01-7 7H27a7 7 0 110-14h42a8.98 8.98 0 007-3.343z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M60 10c8.837 0 16 7.163 16 16v37a7 7 0 01-7 7H27a8.98 8.98 0 00-7 3.345V17a7 7 0 017-7z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M60 10c8.837 0 16 7.163 16 16v37a7 7 0 01-7 7H27a8.98 8.98 0 00-7 3.345V17a7 7 0 017-7z"
      />
      <rect
        width={16}
        height={10}
        x={30}
        y={21}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={3}
      />
      <rect
        width={16}
        height={10}
        x={30}
        y={35}
        fill={'url(#' + iconId + '-g)' + ''}
        rx={3}
      />
      <rect
        width={16}
        height={10}
        x={50}
        y={21}
        fill={'url(#' + iconId + '-h)' + ''}
        rx={3}
      />
      <rect
        width={16}
        height={10}
        x={50}
        y={35}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={3}
      />
      <rect
        width={16}
        height={10}
        x={50}
        y={49}
        fill={'url(#' + iconId + '-j)' + ''}
        rx={3}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-k)' + ''}
        rx={9}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.6}
        rx={9}
      />
      <path
        fill="#fff"
        d="m16.973 77.045 4.542-2.3q.768 1.506 2.004 2.219a5.44 5.44 0 002.738.712q1.654 0 2.522-.648.868-.663.868-1.992 0-1.035-.835-1.749-.835-.728-2.955-1.1-4.041-.713-5.878-2.495-1.82-1.78-1.82-4.437-.001-3.303 2.404-5.28 2.404-1.974 6.346-1.975 2.655 0 4.676 1.053a8 8 0 013.206 3.012l-4.442 2.218q-.735-1.101-1.587-1.587-.851-.502-2.137-.502-1.536 0-2.338.648-.785.648-.785 1.684 0 .891.752 1.571.768.665 3.072 1.085 3.874.713 5.778 2.591 1.92 1.863 1.92 4.713 0 3.465-2.287 5.49Q30.449 82 26.207 82q-3.072 0-5.544-1.296-2.454-1.311-3.69-3.66"
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
        <linearGradient
          id={iconId + '-f'}
          x1={42.8}
          x2={42.8}
          y1={21}
          y2={61}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={39}
          x2={39}
          y1={21}
          y2={59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={62.8}
          x2={62.8}
          y1={21}
          y2={61}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={58.5}
          x2={58.5}
          y1={21}
          y2={59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={58}
          x2={58}
          y1={21}
          y2={59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E3DF" />
          <stop offset={0.5} stopColor="#0097A8" />
          <stop offset={1} stopColor="#007791" />
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
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(45 -57.355 32.243)scale(56.5685)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.063} stopColor="#00B6BD" />
          <stop offset={0.89} stopColor="#00495C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-l'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 28 -31.875 0 26 74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.567} stopColor="#1E8581" stopOpacity={0} />
          <stop offset={0.974} stopColor="#1ECBE6" />
        </radialGradient>
      </defs>
    </svg>
  )
}
