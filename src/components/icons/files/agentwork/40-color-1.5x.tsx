'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M6 6a4 4 0 014-4h16a8 8 0 018 8v24a4 4 0 01-4 4H10.5A4.5 4.5 0 016 33.5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M10 3a3 3 0 00-3 3v24.671A4.5 4.5 0 0110.5 29H30a3 3 0 003-3V10a7 7 0 00-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M10 3a3 3 0 00-3 3v24.671A4.5 4.5 0 0110.5 29H30a3 3 0 003-3V10a7 7 0 00-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M33 28.646A4 4 0 0130 30H10.5a3.5 3.5 0 100 7H30a3 3 0 003-3v-1.354A4 4 0 0130 34H10.5a.5.5 0 010-1H30a3 3 0 003-3z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M33 28.646A4 4 0 0130 30H10.5a3.5 3.5 0 100 7H30a3 3 0 003-3v-1.354A4 4 0 0130 34H10.5a.5.5 0 010-1H30a3 3 0 003-3z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M24.144 9.35a1.875 1.875 0 00-1.8-1.35h-.601c-.896 0-1.667.634-1.84 1.513l-1.05 5.337.298-.959c.243-.785.97-1.32 1.79-1.32h3.294l1.4 1.172 1.247-1.172h-.392c-.833 0-1.566-.55-1.8-1.349z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M16.05 22.643A1.875 1.875 0 0017.85 24h1.224c1.01 0 1.838-.8 1.874-1.808l.18-5.05-.287.953a1.875 1.875 0 01-1.795 1.333h-3.313l-1.384-.885-1.022.885h.385c.836 0 1.571.554 1.802 1.357z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M22.25 8h-6.563c-1.875 0-3 2.398-3.75 4.795-.889 2.84-2.051 6.64 1.312 6.64h2.861c.832 0 1.564-.547 1.8-1.345.494-1.67 1.354-4.568 2.03-6.776.345-1.126.632-2.092 1.072-2.694.247-.337.66-.62 1.237-.62"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M22.25 8h-6.563c-1.875 0-3 2.398-3.75 4.795-.889 2.84-2.051 6.64 1.312 6.64h2.861c.832 0 1.564-.547 1.8-1.345.494-1.67 1.354-4.568 2.03-6.776.345-1.126.632-2.092 1.072-2.694.247-.337.66-.62 1.237-.62"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M17.748 24h6.563c1.875 0 3-2.397 3.75-4.794.888-2.84 2.05-6.637-1.313-6.637h-2.861c-.832 0-1.564.547-1.8 1.345a799 799 0 01-2.03 6.773c-.344 1.125-.631 2.091-1.072 2.693-.247.337-.659.62-1.237.62"
      />
      <path
        fill={'url(#' + iconId + '-k)' + ''}
        d="M17.748 24h6.563c1.875 0 3-2.397 3.75-4.794.888-2.84 2.05-6.637-1.313-6.637h-2.861c-.832 0-1.564.547-1.8 1.345a799 799 0 01-2.03 6.773c-.344 1.125-.631 2.091-1.072 2.693-.247.337-.659.62-1.237.62"
      />
      <defs>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(13.7222 26.9167 -20.5833 10.0937 15.306 11.854)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-4.54964 -5.59008 -4.91213 4.68878 25.713 14.895)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.096} stopColor="#00AEFF" />
          <stop offset={0.773} stopColor="#2253CE" />
          <stop offset={1} stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(4.0792 5.17125 4.81539 -4.22088 14.743 19.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB657" />
          <stop offset={0.634} stopColor="#FF5F3D" />
          <stop offset={0.923} stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          id={iconId + '-h'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-.59454 -10.1312 58.8167 -3.23085 15.524 19.43)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.03} stopColor="#FFC800" />
          <stop offset={0.31} stopColor="#98BD42" />
          <stop offset={0.49} stopColor="#52B471" />
          <stop offset={0.844} stopColor="#0D91E1" />
        </radialGradient>
        <radialGradient
          id={iconId + '-j'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-5.18438 14.3365 -17.6444 -6.32742 27.085 11.45)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.066} stopColor="#8C48FF" />
          <stop offset={0.5} stopColor="#F2598A" />
          <stop offset={0.896} stopColor="#FFB152" />
        </radialGradient>
        <linearGradient
          id={iconId + '-a'}
          x1={15.042}
          x2={21.203}
          y1={2}
          y2={37.944}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={14.222}
          x2={19.786}
          y1={3}
          y2={37.035}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={16.112}
          x2={16.591}
          y1={8}
          y2={19.436}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-k'}
          x1={27.604}
          x2={27.597}
          y1={11.871}
          y2={14.985}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.058} stopColor="#F8ADFA" />
          <stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
