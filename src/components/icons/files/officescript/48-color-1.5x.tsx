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
        fillRule="evenodd"
        d="M9.5 2A3.5 3.5 0 0 0 6 5.5v21.837A3.5 3.5 0 0 0 7.5 34h19a3.5 3.5 0 0 0 3.5-3.5V9a7 7 0 0 0-7-7H9.5z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        fillRule="evenodd"
        d="M26.5 33a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H9.5A2.5 2.5 0 0 0 7 5.5v21.535c.163-.023.33-.035.5-.035h19a.5.5 0 0 1 0 1 2.5 2.5 0 0 0 0 5zm-2.45-5A3.49 3.49 0 0 0 23 30.5c0 .98.402 1.865 1.05 2.5H7.5a2.5 2.5 0 0 1 0-5h16.55z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        fillRule="evenodd"
        d="M26.5 33a2.5 2.5 0 0 0 2.5-2.5V9a6 6 0 0 0-6-6H9.5A2.5 2.5 0 0 0 7 5.5v21.535c.163-.023.33-.035.5-.035h19a.5.5 0 0 1 0 1 2.5 2.5 0 0 0 0 5zm-2.45-5A3.49 3.49 0 0 0 23 30.5c0 .98.402 1.865 1.05 2.5H7.5a2.5 2.5 0 0 1 0-5h16.55z"
        clipRule="evenodd"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M24.5 23a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M24.5 20a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M24.5 17a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M24.5 14a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M24.5 11a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M24.5 8a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={12.396}
          x2={17.651}
          y1={2}
          y2={34.026}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={11.667}
          x2={16.37}
          y1={3}
          y2={33.099}
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
          gradientTransform="matrix(12.6667 23.75 -19 8.90625 12.667 10.813)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={5.167}
          x2={25.888}
          y1={-4.308}
          y2={26.479}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={5.167}
          x2={25.888}
          y1={-4.308}
          y2={26.479}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={5.167}
          x2={25.888}
          y1={-4.308}
          y2={26.479}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={5.167}
          x2={25.888}
          y1={-4.308}
          y2={26.479}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={5.167}
          x2={25.888}
          y1={-4.308}
          y2={26.479}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={5.167}
          x2={25.888}
          y1={-4.308}
          y2={26.479}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.371} stopColor="#E15C01" />
          <stop offset={0.762} stopColor="#DA4401" />
          <stop offset={0.944} stopColor="#D83B01" />
        </linearGradient>
      </defs>
    </svg>
  )
}
