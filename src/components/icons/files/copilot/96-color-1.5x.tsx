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
        d="M12 21a9 9 0 0 1 9-9h45c9.941 0 18 8.059 18 18v45a9 9 0 0 1-9 9H30c-9.941 0-18-8.059-18-18V21z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M14 21a7 7 0 0 1 7-7h45c8.837 0 16 7.163 16 16v45a7 7 0 0 1-7 7H30c-8.837 0-16-7.163-16-16V21z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M14 21a7 7 0 0 1 7-7h45c8.837 0 16 7.163 16 16v45a7 7 0 0 1-7 7H30c-8.837 0-16-7.163-16-16V21z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M58.142 31.325A4.63 4.63 0 0 0 53.7 28h-1.352a4.63 4.63 0 0 0-4.553 3.794L45.48 44.407l.574-1.965a4.63 4.63 0 0 1 4.444-3.33h7.854l3.294 1.282 3.175-1.283h-.927a4.63 4.63 0 0 1-4.442-3.325l-1.31-4.461z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M38.33 64.656A4.63 4.63 0 0 0 42.778 68h2.87a4.63 4.63 0 0 0 4.628-4.51l.313-12.163-.654 2.233a4.63 4.63 0 0 1-4.443 3.329h-7.92l-2.823-1.532-3.056 1.532h.911a4.63 4.63 0 0 1 4.448 3.344l1.278 4.423z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M53.5 28H37.46c-4.583 0-7.332 6.057-9.165 12.113-2.172 7.176-5.014 16.772 3.207 16.772h6.926a4.63 4.63 0 0 0 4.456-3.358 2078.617 2078.617 0 0 1 4.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C51.08 28.714 52.086 28 53.5 28z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M53.5 28H37.46c-4.583 0-7.332 6.057-9.165 12.113-2.172 7.176-5.014 16.772 3.207 16.772h6.926a4.63 4.63 0 0 0 4.456-3.358 2078.617 2078.617 0 0 1 4.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C51.08 28.714 52.086 28 53.5 28z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M42.498 68h16.039c4.583 0 7.332-6.058 9.165-12.115 2.172-7.177 5.014-16.775-3.208-16.775H57.57a4.63 4.63 0 0 0-4.456 3.358 2081.173 2081.173 0 0 1-4.971 17.16c-.843 2.843-1.545 5.285-2.621 6.805-.604.853-1.61 1.567-3.023 1.567z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M42.498 68h16.039c4.583 0 7.332-6.058 9.165-12.115 2.172-7.177 5.014-16.775-3.208-16.775H57.57a4.63 4.63 0 0 0-4.456 3.358 2081.173 2081.173 0 0 1-4.971 17.16c-.843 2.843-1.545 5.285-2.621 6.805-.604.853-1.61 1.567-3.023 1.567z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={35.25}
          x2={44.944}
          y1={12}
          y2={84.707}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={32.889}
          x2={41.491}
          y1={14}
          y2={82.814}
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
          gradientTransform="matrix(35.8889 53.8333 -53.8333 20.1875 35.722 31.708)"
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
          gradientTransform="matrix(-10.9604 -13.3893 -11.8337 11.2305 62.005 44.514)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.096} stopColor="#00AEFF" />
          <stop offset={0.773} stopColor="#2253CE" />
          <stop offset={1} stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9.88029 12.5737 11.6634 -10.2629 35.121 56.817)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB657" />
          <stop offset={0.634} stopColor="#FF5F3D" />
          <stop offset={0.923} stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-1.45314 -25.59378 143.75448 -8.16196 37.063 56.875)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.03} stopColor="#FFC800" />
          <stop offset={0.31} stopColor="#98BD42" />
          <stop offset={0.49} stopColor="#52B471" />
          <stop offset={0.844} stopColor="#0D91E1" />
        </radialGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={38.5}
          x2={39.75}
          y1={28}
          y2={56.885}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-12.6712 36.2356 -43.1249 -15.9926 65.318 36.281)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={66.585}
          x2={66.569}
          y1={37.346}
          y2={45.215}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
