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
        d="M3 5a2 2 0 012-2h8a4 4 0 014 4v8a2 2 0 01-2 2H7a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 5a2 2 0 012-2h8a4 4 0 014 4v8a2 2 0 01-2 2H7a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5.067 15.96a.5.5 0 01.665-.24c.385.18.814.28 1.268.28h1.111a.5.5 0 010 1H7a4 4 0 01-1.691-.374.5.5 0 01-.242-.665m7.044.04a.5.5 0 010 1H9.89a.5.5 0 010-1zM16 15v-1.111a.5.5 0 011 0V15a2 2 0 01-2 2h-1.111a.5.5 0 010-1H15a1 1 0 001-1M3 13v-1.111a.5.5 0 011 0V13c0 .454.1.883.28 1.268a.5.5 0 01-.906.423A4 4 0 013 13m13-.889V9.89a.5.5 0 011 0v2.222a.5.5 0 01-1 0m-13-2V7.89a.5.5 0 011 0v2.222a.5.5 0 01-1 0m13-2V7c0-.454-.1-.883-.28-1.268a.5.5 0 01.906-.423A4 4 0 0117 7v1.111a.5.5 0 01-1 0m-13-2V5a2 2 0 012-2h1.111a.5.5 0 010 1H5a1 1 0 00-1 1v1.111a.5.5 0 01-1 0M13 3a4 4 0 011.691.374.5.5 0 01-.423.906A3 3 0 0013 4h-1.111a.5.5 0 010-1zm-2.889 0a.5.5 0 010 1H7.89a.5.5 0 010-1z"
      />
      <path
        fill="#7611F0"
        d="M6.086 8.525c.086.424.5.703.924.624L13.208 8a.84.84 0 00.673-.996l-.057-.281a.874.874 0 00-1.013-.684L6.687 7.174a.84.84 0 00-.673.996z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillOpacity={0.9}
        d="M6.086 8.525c.086.424.5.703.924.624L13.208 8a.84.84 0 00.673-.996l-.057-.281a.874.874 0 00-1.013-.684L6.687 7.174a.84.84 0 00-.673.996z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.6}
        d="M6.086 8.525c.086.424.5.703.924.624L13.208 8a.84.84 0 00.673-.996l-.057-.281a.874.874 0 00-1.013-.684L6.687 7.174a.84.84 0 00-.673.996z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.4}
        d="M6.086 8.525c.086.424.5.703.924.624L13.208 8a.84.84 0 00.673-.996l-.057-.281a.874.874 0 00-1.013-.684L6.687 7.174a.84.84 0 00-.673.996z"
      />
      <path
        fill="#BC7FFF"
        d="M5.998 9.89c0 .482.392.874.875.874h6.082c.579 0 1.047.47 1.047 1.048v.404-2.403a.95.95 0 00-.952-.952h-6.1a.95.95 0 01-.952-.952v-.384z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M5.998 9.89c0 .482.392.874.875.874h6.082c.579 0 1.047.47 1.047 1.048v.404-2.403a.95.95 0 00-.952-.952h-6.1a.95.95 0 01-.952-.952v-.384z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.8}
        d="M5.998 9.89c0 .482.392.874.875.874h6.082c.579 0 1.047.47 1.047 1.048v.404-2.403a.95.95 0 00-.952-.952h-6.1a.95.95 0 01-.952-.952v-.384z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M5.998 9.89c0 .482.392.874.875.874h6.082c.579 0 1.047.47 1.047 1.048v.404-2.403a.95.95 0 00-.952-.952h-6.1a.95.95 0 01-.952-.952v-.384z"
      />
      <path
        fill="#7611F0"
        d="M5.998 12.86c0 .63.512 1.142 1.143 1.142h5.91a.95.95 0 00.951-.952v-.022a.95.95 0 00-.952-.952H7.408a1.41 1.41 0 01-1.41-1.41z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.2}
        d="M5.998 12.86c0 .63.512 1.142 1.143 1.142h5.91a.95.95 0 00.951-.952v-.022a.95.95 0 00-.952-.952H7.408a1.41 1.41 0 01-1.41-1.41z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        fillOpacity={0.4}
        d="M5.998 12.86c0 .63.512 1.142 1.143 1.142h5.91a.95.95 0 00.951-.952v-.022a.95.95 0 00-.952-.952H7.408a1.41 1.41 0 01-1.41-1.41z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        fillOpacity={0.15}
        d="M5.998 12.86c0 .63.512 1.142 1.143 1.142h5.91a.95.95 0 00.951-.952v-.022a.95.95 0 00-.952-.952H7.408a1.41 1.41 0 01-1.41-1.41z"
      />
      <path
        fill={'url(#' + iconId + '-l)' + ''}
        fillOpacity={0.3}
        d="M5.998 12.86c0 .63.512 1.142 1.143 1.142h5.91a.95.95 0 00.951-.952v-.022a.95.95 0 00-.952-.952H7.408a1.41 1.41 0 01-1.41-1.41z"
      />
      <path
        fill={'url(#' + iconId + '-m)' + ''}
        fillOpacity={0.2}
        d="M5.998 12.86c0 .63.512 1.142 1.143 1.142h5.91a.95.95 0 00.951-.952v-.022a.95.95 0 00-.952-.952H7.408a1.41 1.41 0 01-1.41-1.41z"
      />
      <path
        fill="#974CFF"
        d="M5.998 11.224c0 .578.47 1.047 1.048 1.047h6.004c.526 0 .952.427.952.953v.12-1.831a.95.95 0 00-.952-.952H7.046a1.05 1.05 0 01-1.048-1.047v-.558z"
      />
      <path
        fill="#A966FF"
        fillOpacity={0.35}
        d="M5.998 11.224c0 .578.47 1.047 1.048 1.047h6.004c.526 0 .952.427.952.953v.12-1.831a.95.95 0 00-.952-.952H7.046a1.05 1.05 0 01-1.048-1.047v-.558z"
      />
      <path
        fill={'url(#' + iconId + '-n)' + ''}
        fillOpacity={0.4}
        d="M5.998 11.224c0 .578.47 1.047 1.048 1.047h6.004c.526 0 .952.427.952.953v.12-1.831a.95.95 0 00-.952-.952H7.046a1.05 1.05 0 01-1.048-1.047v-.558z"
      />
      <path
        fill={'url(#' + iconId + '-o)' + ''}
        fillOpacity={0.4}
        d="M5.998 11.224c0 .578.47 1.047 1.048 1.047h6.004c.526 0 .952.427.952.953v.12-1.831a.95.95 0 00-.952-.952H7.046a1.05 1.05 0 01-1.048-1.047v-.558z"
      />
      <path
        fill={'url(#' + iconId + '-p)' + ''}
        fillOpacity={0.6}
        d="M5.998 11.224c0 .578.47 1.047 1.048 1.047h6.004c.526 0 .952.427.952.953v.12-1.831a.95.95 0 00-.952-.952H7.046a1.05 1.05 0 01-1.048-1.047v-.558z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={6.889}
          x2={8.66}
          y1={3}
          y2={17.168}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={7.521}
          x2={9.406}
          y1={3}
          y2={17.138}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={8.181}
          x2={5.998}
          y1={9.727}
          y2={9.727}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC80FF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={11.351}
          x2={14.002}
          y1={9.727}
          y2={9.727}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC7FFF" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={11.134}
          x2={10.864}
          y1={12.621}
          y2={14.096}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#330072" />
          <stop offset={1} stopColor="#7611F0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={7.794}
          x2={7.794}
          y1={12.624}
          y2={14.814}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-l'}
          x1={8.181}
          x2={5.998}
          y1={12.481}
          y2={12.499}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-m'}
          x1={11.592}
          x2={15.077}
          y1={12.501}
          y2={15.158}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9136F2" stopOpacity={0} />
          <stop offset={0.836} stopColor="#B76AFF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-n'}
          x1={10.757}
          x2={10.637}
          y1={8.956}
          y2={11.627}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6200D5" />
          <stop offset={1} stopColor="#3E008D" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-o'}
          x1={11.82}
          x2={14.003}
          y1={11.101}
          y2={11.101}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B54FD" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-p'}
          x1={8.181}
          x2={5.998}
          y1={11.101}
          y2={11.101}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#944EF6" stopOpacity={0} />
          <stop offset={0.836} stopColor="#ECB4FF" />
        </linearGradient>
        <radialGradient
          id={iconId + '-b'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(7.38889 11.0833 -11.0833 4.15625 7.472 6.646)"
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
          gradientTransform="matrix(-6.52863 3.4824 4.35695 7.5725 10.046 2.405)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.625} stopColor="#974CFF" />
          <stop offset={1} stopColor="#5000B0" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-5.95089 2.67684 6.46523 13.1202 14.114 5.393)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.147} stopColor="#DE91FF" />
          <stop offset={0.678} stopColor="#D373FC" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-2.45383 3.34832 9.96375 4.2049 10.735 4.192)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-2.61209 4.38971 5.27375 10.368 12.612 4.12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7A3" />
          <stop offset={0.831} stopColor="#DE67FD" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
