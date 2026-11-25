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
        d="M8 4a4 4 0 0 1 0 8.001V10.5A2.5 2.5 0 0 0 5.5 8H4a4 4 0 0 1 4-4z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8 4a4 4 0 0 1 0 8.001V10.5A2.5 2.5 0 0 0 5.5 8H4a4 4 0 0 1 4-4z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.5}
        d="M8 4a4 4 0 0 1 0 8.001V10.5A2.5 2.5 0 0 0 5.5 8H4a4 4 0 0 1 4-4z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M8 4a4 4 0 0 1 3.457 6.009l.063-.139a1.328 1.328 0 0 0-1.21-1.873H8.713a.717.717 0 0 1-.717-.717l.002-1.59c0-.964-.996-1.608-1.875-1.21l-.12.054A3.981 3.981 0 0 1 8 4z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M8 4a4 4 0 0 1 3.457 6.009l.063-.139a1.328 1.328 0 0 0-1.21-1.873H8.713a.717.717 0 0 1-.717-.717l.002-1.59c0-.964-.996-1.608-1.875-1.21l-.12.054A3.981 3.981 0 0 1 8 4z"
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={1.5}
      />
      <rect
        width={7}
        height={7}
        y={9}
        fill={'url(#' + iconId + '-j)' + ''}
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
          x1={7.524}
          x2={2.62}
          y1={3.745}
          y2={8.512}
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
          gradientTransform="matrix(-5.77015 5.67929 -9.71193 -9.55899 9.542 6.321)"
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
          gradientTransform="matrix(6.99448 -3.25174 5.98526 12.472 2.453 11.252)"
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
          gradientTransform="matrix(3.65362 -4.18262 3.89947 3.24575 7.557 8.546)"
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
          gradientTransform="matrix(-.4127 2.79632 -6.3265 -.8897 7.194 4.528)"
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
          gradientTransform="matrix(7 7 -7 7 0 9)"
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
