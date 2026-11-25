'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M14.5 11a.5.5 0 0 1 .5.5c0 .806-.136 1.37-.287 1.748a2.335 2.335 0 0 1-.22.428 1.487 1.487 0 0 1-.087.117l-.03.037-.013.014-.01.008A24.447 24.447 0 0 1 14 13.5l.354.354a.5.5 0 0 1-.772-.63l.06-.074a1.332 1.332 0 0 0 .143-.273c.1-.247.215-.683.215-1.377a.5.5 0 0 1 .5-.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10.5 7c.542 0 1.159.132 1.652.502.516.386.847.995.847 1.823V12.5a.5.5 0 0 1-1 0v-.025a4.409 4.409 0 0 1-.999.416v-1.05c.173-.064.345-.145.505-.236.194-.11.35-.223.45-.312.019-.018.032-.035.044-.048v-1.174a2.58 2.58 0 0 1-.366.011c-.192-.007-.413-.029-.622-.047a9.51 9.51 0 0 0-.51-.03 2.5 2.5 0 0 0-1.14-.85c.278-.1.592-.155.932-.155.304 0 .572.019.802.038.239.02.415.04.575.045.143.005.239-.003.309-.02-.054-.374-.222-.607-.426-.76C11.283 8.1 10.899 8 10.499 8c-.436 0-.845.052-1.146.354a.5.5 0 0 1-.707-.708C9.25 7.041 10.028 7 10.499 7z"
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={2}
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        rx={2}
      />
      <path
        fill="#fff"
        d="M7.804 17h-1.35l-.85-1.593-.07-.133a4.67 4.67 0 0 1-.044-.118h-.014c-.021.055-.041.1-.06.135l-.066.13L4.47 17H3.196l1.529-2.504L3.301 12h1.333l.754 1.423a4.645 4.645 0 0 1 .147.303h.014l.077-.16c.02-.04.049-.092.083-.157L6.492 12h1.27l-1.445 2.458L7.804 17z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={7.167}
          x2={8.388}
          y1={4}
          y2={16.211}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={6.889}
          x2={7.799}
          y1={5}
          y2={15.197}
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
          gradientTransform="matrix(7.38889 7.91667 -11.0833 2.96875 7.472 7.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={17.783}
          x2={9.435}
          y1={17.436}
          y2={4.397}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.168} stopColor="#15561C" />
          <stop offset={0.541} stopColor="#15561C" />
          <stop offset={1} stopColor="#297C2D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={17.783}
          x2={9.435}
          y1={17.436}
          y2={4.397}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.168} stopColor="#15561C" />
          <stop offset={0.541} stopColor="#15561C" />
          <stop offset={1} stopColor="#297C2D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(8.99998 8.99998 -25.62053 25.62053 1 10)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20A85E" />
          <stop offset={0.944} stopColor="#09442A" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 6.3 -7.25625 0 5.5 15.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.58} stopColor="#33A662" stopOpacity={0} />
          <stop offset={0.974} stopColor="#98F0B0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
