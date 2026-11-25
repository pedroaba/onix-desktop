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
        d="M2 6a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M4 5a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-1 0V6a2 2 0 0 1 2-2h1.25a.5.5 0 0 1 0 1H4zm3.25-.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5H14a3.99 3.99 0 0 1 1.531.304.5.5 0 1 1-.383.923A2.99 2.99 0 0 0 14 5h-1.25a.5.5 0 0 1-.5-.5zm4.793 1.698a.5.5 0 0 1 .653.27c.196.473.304.99.304 1.532v1.5a.5.5 0 0 1-1 0V8a2.99 2.99 0 0 0-.227-1.148.5.5 0 0 1 .27-.654zM2.5 10a.5.5 0 0 1 .5.5V12c0 .408.081.795.227 1.148a.5.5 0 0 1-.923.383A3.99 3.99 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5zm15 2a.5.5 0 0 1 .5.5V14a2 2 0 0 1-2 2h-1.25a.5.5 0 0 1 0-1H16a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .5-.5zM4.198 15.043a.5.5 0 0 1 .654-.27c.353.146.74.227 1.148.227h1.25a.5.5 0 0 1 0 1H6a3.99 3.99 0 0 1-1.531-.304.5.5 0 0 1-.27-.653zm5.052.457a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M9.999 6a4 4 0 0 1 1 7.875V11.5a2.5 2.5 0 0 0-2.5-2.5H6.125c.444-1.725 2.01-3 3.874-3z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M9.999 6a4 4 0 0 1 1 7.875V11.5a2.5 2.5 0 0 0-2.5-2.5H6.125c.444-1.725 2.01-3 3.874-3z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.5}
        d="M9.999 6a4 4 0 0 1 1 7.875V11.5a2.5 2.5 0 0 0-2.5-2.5H6.125c.444-1.725 2.01-3 3.874-3z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M10 6a4 4 0 0 1 3.457 6.009l.063-.139a1.328 1.328 0 0 0-1.21-1.873h-1.597a.712.712 0 0 1-.257-.05 2.513 2.513 0 0 0-.41-.409.711.711 0 0 1-.05-.258l.002-1.59c0-.964-.996-1.608-1.875-1.21l-.12.054A3.981 3.981 0 0 1 10 6z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M10 6a4 4 0 0 1 3.457 6.009l.063-.139a1.328 1.328 0 0 0-1.21-1.873h-1.597a.712.712 0 0 1-.257-.05 2.513 2.513 0 0 0-.41-.409.711.711 0 0 1-.05-.258l.002-1.59c0-.964-.996-1.608-1.875-1.21l-.12.054A3.981 3.981 0 0 1 10 6z"
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-i)' + ''}
        rx={2}
      />
      <rect
        width={9}
        height={9}
        x={1}
        y={10}
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.3}
        rx={2}
      />
      <path
        fill="#fff"
        d="M4.8 15.372V17H3.672v-5h1.742c.624 0 1.099.136 1.424.408.329.272.493.675.493 1.21 0 .55-.184.98-.552 1.29-.365.31-.856.464-1.473.464H4.8zm0-2.507v1.642h.47c.28 0 .495-.073.647-.22.151-.146.227-.357.227-.63 0-.254-.075-.45-.224-.587-.146-.137-.357-.205-.632-.205H4.8z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={6.444}
          x2={7.591}
          y1={4}
          y2={16.226}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(8.44444 9.5 -12.6667 3.5625 7.111 7.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-c'}
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
          id={iconId + '-d'}
          x1={8.694}
          x2={3.749}
          y1={5.741}
          y2={11.348}
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
          gradientTransform="matrix(-6.83785 5.77014 -11.509 -9.71191 11.087 8.359)"
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
          gradientTransform="matrix(8.28873 -3.30376 7.09277 12.6715 2.686 13.368)"
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
          gradientTransform="matrix(3.65362 -4.18262 3.89947 3.24575 9.557 10.546)"
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
          gradientTransform="matrix(-.4127 2.79632 -6.3265 -.8897 9.194 6.528)"
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
          gradientTransform="rotate(45 -11.572 6.206) scale(12.7279)"
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
          gradientTransform="matrix(0 6.3 -7.17188 0 5.499 15.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.576} stopColor="#FFB055" stopOpacity={0} />
          <stop offset={0.974} stopColor="#FFF2BE" />
        </radialGradient>
      </defs>
    </svg>
  )
}
