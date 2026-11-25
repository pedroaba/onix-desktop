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
        d="M8 8a.5.5 0 0 1 .5.5V11h1a.5.5 0 0 1 0 1H8v-1.5c0-.561-.188-1.078-.5-1.495V8.5A.5.5 0 0 1 8 8z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M11 8a2 2 0 0 1-2 2H7.95A2.501 2.501 0 0 0 5.5 8H5V4.5h6V8z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M4 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-g)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.3}
        rx={1.5}
      />
      <path
        fill="#fff"
        d="M2.952 13.372V15H1.824v-5h1.742c.624 0 1.099.136 1.425.408.328.272.492.675.492 1.21 0 .55-.184.98-.552 1.29-.365.31-.856.464-1.473.464h-.506zm0-2.507v1.642h.471c.28 0 .495-.073.646-.22.151-.146.227-.357.227-.63 0-.254-.074-.45-.223-.587-.147-.137-.358-.205-.632-.205h-.49z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={1.115}
          x2={3.191}
          y1={0.848}
          y2={15.925}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.508} stopColor="#FA734C" />
          <stop offset={0.725} stopColor="#E5495B" />
          <stop offset={0.873} stopColor="#AA1D2D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={10}
          x2={7.143}
          y1={4.5}
          y2={11.804}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.103} stopColor="#FFA05C" />
          <stop offset={0.767} stopColor="#FDB567" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={6.857}
          x2={7.742}
          y1={2}
          y2={6.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.298} stopColor="#FF7F48" />
          <stop offset={0.579} stopColor="#E5495B" />
          <stop offset={0.89} stopColor="#AA1D2D" />
        </linearGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7 7 -7 7 0 9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8193E" />
          <stop offset={0.939} stopColor="#920616" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 4.9 -5.57813 0 3.5 13.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
