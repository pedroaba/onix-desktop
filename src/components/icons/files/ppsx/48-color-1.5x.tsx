'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 9.5A3.5 3.5 0 0 1 5.5 6H27a7 7 0 0 1 7 7v13.5a3.5 3.5 0 0 1-3.5 3.5H9a7 7 0 0 1-7-7V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 9.5A2.5 2.5 0 0 1 5.5 7H27a6 6 0 0 1 6 6v13.5a2.5 2.5 0 0 1-2.5 2.5H9a6 6 0 0 1-6-6V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 9.5A2.5 2.5 0 0 1 5.5 7H27a6 6 0 0 1 6 6v13.5a2.5 2.5 0 0 1-2.5 2.5H9a6 6 0 0 1-6-6V9.5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M17.998 20.5a.5.5 0 0 1 .5.5v4H21.5a.5.5 0 0 1 0 1H17v-1h.498v-4a.5.5 0 0 1 .5-.5z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M25 20a2 2 0 0 1-2 2h-6.258a4.5 4.5 0 0 0-4.242-3H11v-7.857h14V20z"
      />
      <rect
        width={16}
        height={2}
        x={10}
        y={10}
        fill={'url(#' + iconId + '-f)' + ''}
        rx={1}
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-g)' + ''}
        rx={3.5}
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.3}
        rx={3.5}
      />
      <path
        fill="#fff"
        d="M7.505 29.069V32H5.48v-9h3.13c1.121 0 1.975.245 2.56.734.59.49.885 1.216.885 2.178 0 .992-.33 1.766-.991 2.322-.657.557-1.54.835-2.648.835h-.91zm0-4.512v2.956h.847c.502 0 .89-.132 1.161-.396.272-.263.408-.642.408-1.136 0-.456-.134-.807-.402-1.054-.263-.247-.642-.37-1.135-.37h-.879z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.333}
          x2={14.776}
          y1={6}
          y2={30.422}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.333}
          x2={13.389}
          y1={7}
          y2={29.423}
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
          gradientTransform="matrix(15.8333 17.4167 -23.75 6.53125 12.583 12.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={4.23}
          x2={6.213}
          y1={10.666}
          y2={31.603}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.508} stopColor="#FA734C" />
          <stop offset={0.725} stopColor="#E5495B" />
          <stop offset={0.873} stopColor="#AA1D2D" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={22.667}
          x2={17.709}
          y1={11.143}
          y2={26.126}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.103} stopColor="#FFA05C" />
          <stop offset={0.767} stopColor="#FDB567" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={15.714}
          x2={17.484}
          y1={6}
          y2={15.1}
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
          gradientTransform="matrix(15 15 -15 15 .998 20)"
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
          gradientTransform="matrix(0 10.5 -11.9531 0 8.498 29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
