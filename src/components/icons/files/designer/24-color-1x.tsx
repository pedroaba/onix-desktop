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
        d="M3 5a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4v12a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4V5z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M4 5a1 1 0 0 1 1-1h12a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M4 5a1 1 0 0 1 1-1h12a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M15.875 15.118A5.187 5.187 0 0 1 11.857 17H8.643a.64.64 0 0 1-.63-.499L8 16.375v-.625c0-2.006 1.62-3.644 3.658-3.745l.2-.005v-.156h4.017v3.274z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        fillOpacity={0.5}
        d="M15.875 15.118A5.187 5.187 0 0 1 11.857 17H8.643a.64.64 0 0 1-.63-.499L8 16.375v-.625c0-2.006 1.62-3.644 3.658-3.745l.2-.005v-.156h4.017v3.274z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="m11.857 7 .265.007C14.84 7.14 17 9.325 17 12a4.9 4.9 0 0 1-1.248 3.263c.08-.24.123-.497.123-.763 0-1.294-1.012-2.36-2.309-2.487L13.304 12h-1.447l-.199-.005c-1.974-.097-3.556-1.638-3.653-3.558L8 8.25v-.625C8 7.28 8.288 7 8.643 7h3.214z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        fillOpacity={0.5}
        d="m11.857 7 .265.007C14.84 7.14 17 9.325 17 12a4.9 4.9 0 0 1-1.248 3.263c.08-.24.123-.497.123-.763 0-1.294-1.012-2.36-2.309-2.487L13.304 12h-1.447l-.199-.005c-1.974-.097-3.556-1.638-3.653-3.558L8 8.25v-.625C8 7.28 8.288 7 8.643 7h3.214z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={8.813}
          x2={11.236}
          y1={3}
          y2={21.177}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={8.444}
          x2={10.468}
          y1={4}
          y2={20.192}
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
          gradientTransform="matrix(8.44444 12.6667 -12.6667 4.75 9.111 8.167)"
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
          gradientTransform="matrix(6.50908 -5.15619 6.50268 7.75862 8 17.365)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.045} stopColor="#AD7DFF" />
          <stop offset={0.328} stopColor="#6864F6" />
          <stop offset={0.571} stopColor="#5750E2" />
          <stop offset={0.809} stopColor="#3E36B1" />
          <stop offset={1} stopColor="#261D82" />
        </radialGradient>
        <radialGradient
          id={iconId + '-e'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-9.11494 -3.17219 3.26294 -8.86145 16.604 16.818)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.706} stopColor="#AC80FF" stopOpacity={0} />
          <stop offset={0.921} stopColor="#BD96FF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-f'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(9 6.88443 -5.85298 7.2288 8 7.301)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC470" />
          <stop offset={0.251} stopColor="#FF835C" />
          <stop offset={0.584} stopColor="#F24A9D" />
          <stop offset={0.871} stopColor="#B339F0" />
          <stop offset={1} stopColor="#C354FF" />
        </radialGradient>
        <radialGradient
          id={iconId + '-g'}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-7.33929 -4.97272 4.85836 -6.7743 11.692 14.16)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.709} stopColor="#FFB357" stopOpacity={0} />
          <stop offset={0.942} stopColor="#FFB357" />
        </radialGradient>
      </defs>
    </svg>
  )
}
