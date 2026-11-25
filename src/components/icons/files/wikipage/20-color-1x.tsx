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
        d="M2 6a2 2 0 012-2h10a4 4 0 014 4v6a2 2 0 01-2 2H6a4 4 0 01-4-4z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M3 6a1 1 0 011-1h10a3 3 0 013 3v6a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M3 6a1 1 0 011-1h10a3 3 0 013 3v6a1 1 0 01-1 1H6a3 3 0 01-3-3z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M12.5 7A1.5 1.5 0 0114 8.5v3a1.5 1.5 0 01-1.5 1.5H11c-.365 0-.706-.1-1-.27a2 2 0 01-1 .271H7.5A1.5 1.5 0 016 11.502V8.501a1.5 1.5 0 011.5-1.5l1.497.998L9 8h.5q.104 0 .203.015.295.042.59 0c.133-.02.27-.046.39-.106z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M10 7.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H11a1 1 0 01-1-1z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M9 7h.5a.5.5 0 01.5.5V11a1 1 0 01-1 1H7.5a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z"
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
        <linearGradient
          id={iconId + '-d'}
          x1={12.5}
          x2={11.886}
          y1={7.214}
          y2={14.733}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D" />
          <stop offset={0.908} stopColor="#2052CB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={12.836}
          x2={6.15}
          y1={7.313}
          y2={8.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.123} stopColor="#9DEAFF" />
          <stop offset={0.616} stopColor="#4894FE" />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={7}
          x2={13.033}
          y1={8.25}
          y2={8.902}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6EFFF" />
          <stop offset={0.851} stopColor="#58AAFE" />
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
      </defs>
    </svg>
  )
}
