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
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M48 53a1.5 1.5 0 0 1 1.5 1.5V65h6a1.5 1.5 0 0 1 0 3h-7.501v-9c0-1.89-.477-3.666-1.316-5.22A1.5 1.5 0 0 1 48 53z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M65 54a2 2 0 0 1-2 2H47.583c-1.306-4.617-5.547-8-10.582-8H31V31h34v23z"
      />
      <rect
        width={40}
        height={6}
        x={28}
        y={28}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={3}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-g)' + ''}
        rx={9}
      />
      <rect
        width={40}
        height={40}
        x={6}
        y={50}
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.3}
        rx={9}
      />
      <path
        fill="#fff"
        d="M23.273 74.184V82h-5.394V58h8.333c2.983 0 5.255.653 6.813 1.958 1.57 1.306 2.355 3.241 2.355 5.808 0 2.644-.88 4.708-2.639 6.192-1.748 1.484-4.097 2.226-7.047 2.226h-2.421zm0-12.033v7.883h2.254c1.336 0 2.366-.352 3.09-1.055.723-.703 1.085-1.713 1.085-3.03 0-1.215-.356-2.153-1.069-2.81-.701-.66-1.709-.988-3.022-.988h-2.338z"
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
          x1={32.009}
          x2={42.241}
          y1={26.18}
          y2={81.913}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.508} stopColor="#FA734C" />
          <stop offset={0.725} stopColor="#E5495B" />
          <stop offset={0.873} stopColor="#AA1D2D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={59.333}
          x2={48.401}
          y1={31}
          y2={65.848}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.103} stopColor="#FFA05C" />
          <stop offset={0.767} stopColor="#FDB567" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={42.286}
          x2={48.556}
          y1={16}
          y2={42.87}
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
          gradientTransform="rotate(45 -57.358 32.237) scale(56.5685)"
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
          gradientTransform="matrix(0 28 -31.875 0 25.995 74)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
