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
        d="M4 5a1 1 0 011-1h8a3 3 0 013 3v8a1 1 0 01-1 1H7a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 5a1 1 0 011-1h8a3 3 0 013 3v8a1 1 0 01-1 1H7a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M8.636 11.364a.965.965 0 01-1.364 0L5.908 10a.965.965 0 010-1.364l1.364-1.364a.965.965 0 011.364 0L10 8.636A.964.964 0 0110 10z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M8.636 11.364a.965.965 0 01-1.364 0L5.908 10a.965.965 0 010-1.364l1.364-1.364a.965.965 0 011.364 0L10 8.636A.964.964 0 0110 10z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M5.908 10a.965.965 0 001.364 0l4.093-4.092a.965.965 0 011.364 0l1.364 1.364a.965.965 0 010 1.364l-4.092 4.092a.965.965 0 01-1.364 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M5.908 10a.965.965 0 001.364 0l4.093-4.092a.965.965 0 011.364 0l1.364 1.364a.965.965 0 010 1.364l-4.092 4.092a.965.965 0 01-1.364 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M7.271 11.364a.965.965 0 001.365 0l2.728-2.728a.965.965 0 011.364 0L14.092 10a.965.965 0 010 1.364l-2.728 2.729a.965.965 0 01-1.364 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M7.271 11.364a.965.965 0 001.365 0l2.728-2.728a.965.965 0 011.364 0L14.092 10a.965.965 0 010 1.364l-2.728 2.729a.965.965 0 01-1.364 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
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
          id={iconId + '-b'}
          x1={7.333}
          x2={8.851}
          y1={4}
          y2={16.144}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={7.954}
          x2={6.412}
          y1={6.989}
          y2={10.284}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={8.68}
          x2={7.426}
          y1={9.661}
          y2={8.43}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={12.323}
          x2={9.22}
          y1={5.625}
          y2={13.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={12.323}
          x2={9.22}
          y1={5.625}
          y2={13.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={12.188}
          x2={10.729}
          y1={8.36}
          y2={14.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={12.266}
          x2={9.462}
          y1={8.515}
          y2={13.988}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#4A40D4" />
        </linearGradient>
        <radialGradient
          id={iconId + '-c'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(6.33333 9.5 -9.5 3.5625 7.833 7.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
