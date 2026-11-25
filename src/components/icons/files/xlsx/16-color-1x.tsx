'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M1 4a2 2 0 0 1 2-2h8.5A3.5 3.5 0 0 1 15 5.5V12a2 2 0 0 1-2 2H4.5A3.5 3.5 0 0 1 1 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M2 4a1 1 0 0 1 1-1h8.5A2.5 2.5 0 0 1 14 5.5V12a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 10.5V4z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M11 11.333a.667.667 0 0 1-.667.667H8v-1.5A2.5 2.5 0 0 0 5.5 8H5V6.5a1 1 0 0 1 1-1h5v5.833z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.7}
        d="M11 11.333a.667.667 0 0 1-.667.667H8v-1.5A2.5 2.5 0 0 0 5.5 8H5V6.5a1 1 0 0 1 1-1h5v5.833z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M8.665 7A.665.665 0 0 0 8 7.665v1.168c0 .22-.109.414-.273.535A2.497 2.497 0 0 0 5.5 8H5a1 1 0 0 1 1-1h2.665z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.3}
        d="M8.665 7A.665.665 0 0 0 8 7.665v1.168c0 .22-.109.414-.273.535A2.497 2.497 0 0 0 5.5 8H5a1 1 0 0 1 1-1h2.665z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M9 7H6.25a1.25 1.25 0 0 0-1.225 1H5V5.333C5 4.597 5.597 4 6.333 4H9v3z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M9 7H6.25a1.25 1.25 0 0 0-1.225 1H5V5.333C5 4.597 5.597 4 6.333 4H9v3z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M9 7H6.25a1.25 1.25 0 0 0-1.225 1H5V5.333C5 4.597 5.597 4 6.333 4H9v3z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M11 4.667A.667.667 0 0 0 10.333 4H8.667A.667.667 0 0 0 8 4.667v1.666c0 .369.298.667.667.667h1.666A.667.667 0 0 0 11 6.333V4.667z"
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-l)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.3}
        rx={1.5}
      />
      <path
        fill="#fff"
        d="M5.804 15h-1.35l-.85-1.593-.07-.133a4.67 4.67 0 0 1-.044-.118h-.014c-.021.055-.041.1-.06.135l-.066.13L2.47 15H1.196l1.529-2.504L1.301 10h1.333l.754 1.423a4.645 4.645 0 0 1 .147.303h.014l.077-.16c.02-.04.049-.092.083-.157L4.492 10h1.27l-1.445 2.458L5.804 15z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.521}
          x2={6.912}
          y1={2}
          y2={14.174}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.333}
          x2={6.392}
          y1={3}
          y2={13.168}
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
          gradientTransform="matrix(6.33333 7.91667 -9.5 2.96875 5.833 5.604)"
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
          gradientTransform="matrix(-6.13889 -6.68056 5.17263 -4.75127 11.5 12.542)"
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
          gradientTransform="matrix(-2.59549 -2.59549 2.00967 -2.00885 6.986 7.847)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#073B10" />
          <stop offset={0.992} stopColor="#084A13" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={3.974}
          x2={8.14}
          y1={10.611}
          y2={10.611}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52D17C" />
          <stop offset={0.329} stopColor="#4AA647" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={8.054}
          x2={8.054}
          y1={7}
          y2={12.016}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29852F" />
          <stop offset={0.5} stopColor="#4AA647" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={5.147}
          x2={9.824}
          y1={8.532}
          y2={5.631}
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
          gradientTransform="matrix(-2.00418 0 0 -5.9319 8.856 6.38)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.292} stopColor="#4EB43B" />
          <stop offset={1} stopColor="#72CC61" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={6.803}
          x2={5}
          y1={6.607}
          y2={6.607}
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
          gradientTransform="matrix(-3.38219 -3.13486 2.77388 -3.82234 11.382 7.135)"
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
          gradientTransform="matrix(7 7 -19.92712 19.92712 0 9)"
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
          gradientTransform="matrix(0 4.9 -5.64375 0 3.5 13.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.58} stopColor="#33A662" stopOpacity={0} />
          <stop offset={0.974} stopColor="#98F0B0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
