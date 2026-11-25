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
        d="M2 3a2 2 0 0 1 2-2h6.5A3.5 3.5 0 0 1 14 4.5V13a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 3a1 1 0 0 1 1-1h6.5A2.5 2.5 0 0 1 13 4.5V13a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 11.5V3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        fillRule="evenodd"
        d="M8 4a4 4 0 0 1 0 8H4V8a4 4 0 0 1 4-4zm0 2.5A1.5 1.5 0 0 0 6.5 8v1.5H8a1.5 1.5 0 1 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M12 8a4 4 0 0 1-4 4H4a2.5 2.5 0 0 1 2.5-2.5H8a1.5 1.5 0 0 0 1.492-1.347L9.5 8H12z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillOpacity={0.56}
        d="M12 8a4 4 0 0 1-4 4H4a2.5 2.5 0 0 1 2.5-2.5H8a1.5 1.5 0 0 0 1.492-1.347L9.5 8H12z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.1}
        d="M12 8a4 4 0 0 1-4 4H4a2.5 2.5 0 0 1 2.5-2.5H8a1.5 1.5 0 0 0 1.492-1.347L9.5 8H12z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M8 4c1.105 0 2.104.448 2.828 1.172L9.061 6.939A1.5 1.5 0 0 0 6.5 8v1.501A2.5 2.5 0 0 1 3.999 12V8a4 4 0 0 1 4-4z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M8 4c1.105 0 2.104.448 2.828 1.172L9.061 6.939A1.5 1.5 0 0 0 6.5 8v1.501A2.5 2.5 0 0 1 3.999 12V8a4 4 0 0 1 4-4z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={5.875}
          x2={8.06}
          y1={1}
          y2={15.049}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={5.778}
          x2={7.587}
          y1={2}
          y2={14.062}
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
          gradientTransform="matrix(5.27778 9.5 -7.91667 3.5625 6.194 5.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={8.88}
          x2={7.56}
          y1={6.84}
          y2={12.24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={6.6}
          x2={10.12}
          y1={11.4}
          y2={10.6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51E6FF" />
          <stop offset={1} stopColor="#71D4FF" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(1.59998 1.1 -1.93324 2.81204 5.4 10.3)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.7} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(2.95995 1.84 -3.23379 5.20227 4.92 10)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={5.637}
          x2={7.696}
          y1={8.307}
          y2={5.424}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#AB5ADD" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(5.35159 -.9258 2.41501 14.1809 3.321 6.496)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
