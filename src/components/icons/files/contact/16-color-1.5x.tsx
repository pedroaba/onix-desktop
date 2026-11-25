'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M2 6a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M9.75 9.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10.1 12.5c.495 0 .897.426.9.954C10.992 14.71 9.877 16 8 16c-1.88 0-2.994-1.291-3-2.55.005-.526.406-.95.9-.95h4.2z"
      />
      <path fill={'url(#' + iconId + '-f)' + ''} d="M5 13.45v.007-.017.01z" />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M11 13.454v-.009.015-.006z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M13.5 9a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M13.5 11.5a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5z"
      />
      <path
        fill={'url(#' + iconId + '-j)' + ''}
        d="M13.5 14a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.458}
          x2={10.193}
          y1={4}
          y2={20.259}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8}
          x2={9.386}
          y1={5}
          y2={19.254}
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
          gradientTransform="matrix(9.5 11.0833 -14.25 4.15625 8.75 8.646)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={9.295}
          x2={10.706}
          y1={9}
          y2={16.404}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={9.295}
          x2={10.706}
          y1={9}
          y2={16.404}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={9.295}
          x2={10.706}
          y1={9}
          y2={16.404}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={9.295}
          x2={10.706}
          y1={9}
          y2={16.404}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={9.295}
          x2={10.706}
          y1={9}
          y2={16.404}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={9.295}
          x2={10.706}
          y1={9}
          y2={16.404}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
        <linearGradient
          id={iconId + '-j'}
          x1={9.295}
          x2={10.706}
          y1={9}
          y2={16.404}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#597493" />
          <stop offset={1} stopColor="#0F2F56" />
        </linearGradient>
      </defs>
    </svg>
  )
}
