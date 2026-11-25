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
        d="M18 10.25A7.75 7.75 0 0 1 25.749 18 7.75 7.75 0 0 1 17 25.684V23.5a4.5 4.5 0 0 0-4.5-4.5h-2.184A7.75 7.75 0 0 1 18 10.25z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M18 10.25A7.75 7.75 0 0 1 25.749 18 7.75 7.75 0 0 1 17 25.684V23.5a4.5 4.5 0 0 0-4.5-4.5h-2.184A7.75 7.75 0 0 1 18 10.25z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.5}
        d="M18 10.25A7.75 7.75 0 0 1 25.749 18 7.75 7.75 0 0 1 17 25.684V23.5a4.5 4.5 0 0 0-4.5-4.5h-2.184A7.75 7.75 0 0 1 18 10.25z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M17.999 10.25a7.75 7.75 0 0 1 6.7 11.642l.122-.27c.767-1.702-.479-3.628-2.345-3.628H19.38a1.388 1.388 0 0 1-1.388-1.39l.003-3.079c.002-1.869-1.928-3.116-3.632-2.346l-.225.102a7.711 7.711 0 0 1 3.86-1.031z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M17.999 10.25a7.75 7.75 0 0 1 6.7 11.642l.122-.27c.767-1.702-.479-3.628-2.345-3.628H19.38a1.388 1.388 0 0 1-1.388-1.39l.003-3.079c.002-1.869-1.928-3.116-3.632-2.346l-.225.102a7.711 7.711 0 0 1 3.86-1.031z"
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={3.5}
      />
      <rect
        width={15}
        height={15}
        x={1}
        y={20}
        fill={'url(#' + iconId + '-j)' + ''}
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
          x1={16.868}
          x2={7.364}
          y1={9.757}
          y2={19.217}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#FF7F48" />
          <stop offset={1} stopColor="#E5495B" />
        </linearGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-11.4477 11.0026 -19.268 -18.5189 20.873 14.747)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.152} stopColor="#AA1D2D" />
          <stop offset={0.381} stopColor="#D12B18" stopOpacity={0.44} />
          <stop offset={0.602} stopColor="#FF3C00" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(13.8767 -6.29969 11.8744 24.1623 6.81 24.3)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.407} stopColor="#FF66FB" />
          <stop offset={1} stopColor="#EA3D01" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7.07457 -8.10354 7.55063 6.28842 17.147 19.058)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD6EF9" />
          <stop offset={0.637} stopColor="#F94" />
          <stop offset={0.852} stopColor="#FCC479" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.79912 5.41766 -12.2501 -1.72374 16.443 11.273)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.144} stopColor="#FF8D13" />
          <stop offset={0.537} stopColor="#FF7F29" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
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
          id={iconId + '-j'}
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
