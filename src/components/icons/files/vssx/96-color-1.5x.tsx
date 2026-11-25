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
        d="M8 27a9 9 0 0 1 9-9h53c9.941 0 18 8.059 18 18v33a9 9 0 0 1-9 9H26c-9.941 0-18-8.059-18-18V27z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 27a7 7 0 0 1 7-7h53c8.837 0 16 7.163 16 16v33a7 7 0 0 1-7 7H26c-8.837 0-16-7.163-16-16V27z"
      />
      <rect
        width={22}
        height={16}
        x={50}
        y={30}
        fill={'url(#' + iconId + '-d)' + ''}
        rx={3}
      />
      <rect
        width={22}
        height={16}
        x={50}
        y={50}
        fill={'url(#' + iconId + '-e)' + ''}
        rx={3}
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M43 30a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H27a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3h16z"
      />
      <rect width={40} height={40} x={6} y={50} fill="#185ABD" rx={9} />
      <path
        fill="#fff"
        d="m37.256 58-8.25 24h-6.112l-8.149-24h5.745l5.06 16.134c.122.38.217.708.283.987.067.268.145.592.234.971h.1c.09-.402.162-.736.217-1.004.056-.28.145-.62.268-1.021L31.678 58h5.578z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={33.833}
          x2={39.939}
          y1={18}
          y2={79.056}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={31.111}
          x2={36.368}
          y1={20}
          y2={77.071}
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
          gradientTransform="matrix(40.1111 44.3333 -60.1667 16.625 34.278 34.583)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={61}
          x2={61}
          y1={30}
          y2={46}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28A8EA" />
          <stop offset={1} stopColor="#1490DF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={61}
          x2={61}
          y1={50}
          y2={66}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B7CD3" />
          <stop offset={1} stopColor="#1D59C1" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={35}
          x2={35}
          y1={30}
          y2={42.679}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#50D9FF" />
          <stop offset={1} stopColor="#28A8EA" />
        </linearGradient>
      </defs>
    </svg>
  )
}
