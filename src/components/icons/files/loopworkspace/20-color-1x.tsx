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
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M14 12a1 1 0 0 1-1 1h-2.209a5.503 5.503 0 0 0-4.79-3.977V8h8v4z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M13 7a1 1 0 0 1 1 1v1H6V8a1 1 0 0 1 1-1h6z"
      />
      <path
        fill="#F3F3F3"
        d="M8.313 14.5a2.813 2.813 0 1 1-5.626 0 2.813 2.813 0 0 1 5.626 0z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        fillRule="evenodd"
        d="M5.5 10a4.5 4.5 0 1 1 0 9H1v-4.5A4.5 4.5 0 0 1 5.5 10zm0 3A1.5 1.5 0 0 0 4 14.5V16h1.5a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M10 14.5A4.5 4.5 0 0 1 5.5 19H1a3 3 0 0 1 3-3h1.5a1.5 1.5 0 0 0 1.492-1.347L7 14.5h3z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        fillOpacity={0.56}
        d="M10 14.5A4.5 4.5 0 0 1 5.5 19H1a3 3 0 0 1 3-3h1.5a1.5 1.5 0 0 0 1.492-1.347L7 14.5h3z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        fillOpacity={0.1}
        d="M10 14.5A4.5 4.5 0 0 1 5.5 19H1a3 3 0 0 1 3-3h1.5a1.5 1.5 0 0 0 1.492-1.347L7 14.5h3z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M5.5 10c1.243 0 2.367.504 3.182 1.318L6.56 13.44A1.5 1.5 0 0 0 4 14.5V16a3 3 0 0 1-3.001 3v-4.5A4.5 4.5 0 0 1 5.5 10z"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M5.5 10c1.243 0 2.367.504 3.182 1.318L6.56 13.44A1.5 1.5 0 0 0 4 14.5V16a3 3 0 0 1-3.001 3v-4.5A4.5 4.5 0 0 1 5.5 10z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
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
          id={iconId + '-b'}
          x1={6.889}
          x2={7.799}
          y1={5}
          y2={15.197}
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
          gradientTransform="matrix(7.38889 7.91667 -11.0833 2.96875 7.472 7.604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={9.998}
          x2={9.998}
          y1={8}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D0BEFE" />
          <stop offset={1} stopColor="#C2AAFE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={10.28}
          x2={10.28}
          y1={7}
          y2={9}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AB85FF" />
          <stop offset={1} stopColor="#9354FF" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={6.49}
          x2={5.005}
          y1={13.195}
          y2={19.27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9237E3" />
          <stop offset={1} stopColor="#48E6F3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={3.925}
          x2={7.885}
          y1={18.325}
          y2={17.425}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51E6FF" />
          <stop offset={1} stopColor="#71D4FF" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(1.79997 1.2375 -2.1749 3.16354 2.575 17.087)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.7} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id={iconId + '-i'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(3.32995 2.07 -3.63801 5.85255 2.035 16.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.328} />
          <stop offset={0.604} stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={2.842}
          x2={5.157}
          y1={14.845}
          y2={11.602}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#AB5ADD" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-k'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(6.02054 -1.04151 2.71689 15.9535 .236 12.808)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D05E8" />
          <stop offset={1} stopColor="#6D05E8" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}
