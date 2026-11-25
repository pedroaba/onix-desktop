'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={16.224}
          y1={0.766}
          x2={16.425}
          y2={20.607}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffce00" />
          <stop offset={0.05} stopColor="#fabb00" />
          <stop offset={0.201} stopColor="#eb8401" />
          <stop offset={0.333} stopColor="#e15c01" />
          <stop offset={0.436} stopColor="#da4401" />
          <stop offset={0.5} stopColor="#d83b01" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.889}
          y1={1.623}
          x2={2.277}
          y2={16.779}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#8c0700" />
          <stop offset={0.6} stopColor="#c72127" />
          <stop offset={0.645} stopColor="#ca2b3d" />
          <stop offset={0.765} stopColor="#d04374" />
          <stop offset={0.868} stopColor="#d5559c" />
          <stop offset={0.95} stopColor="#d860b4" />
          <stop offset={1} stopColor="#d964bd" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={7.478}
          y1={20.063}
          x2={20.502}
          y2={20.063}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fa2c46" />
          <stop offset={0.6} stopColor="#b0080b" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={16.35}
          y1={20.349}
          x2={10.5}
          y2={19.838}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.4} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={13.106}
          y1={1.313}
          x2={10.859}
          y2={4.523}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.4} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
      </defs>
      <title>{'Union_24x'}</title>
      <path
        d="M12.712,1.944,14,5.625V18l-1.286,4.056,5.68-1.637A2.219,2.219,0,0,0,20,18.286V5.714a2.219,2.219,0,0,0-1.606-2.133Z"
        fill={'url(#' + iconId + '-a)' + ''}
      />
      <path
        d="M5.5,17.87l1.782-1A1.417,1.417,0,0,0,8,15.631V8.752a1.418,1.418,0,0,1,.945-1.337L14,5.625V3.657a1.779,1.779,0,0,0-1.782-1.782h0a1.782,1.782,0,0,0-.876.23L5.129,5.613A2.219,2.219,0,0,0,4,7.546V17A1,1,0,0,0,5.5,17.87Z"
        fill={'url(#' + iconId + '-b)' + ''}
      />
      <path
        d="M14,18v2.346a1.776,1.776,0,0,1-1.779,1.779h0a1.774,1.774,0,0,1-.88-.233L7.349,19.621A.867.867,0,0,1,7.778,18Z"
        fill={'url(#' + iconId + '-c)' + ''}
      />
      <path
        d="M14,18v2.346a1.776,1.776,0,0,1-1.779,1.779h0a1.774,1.774,0,0,1-.88-.233L7.349,19.621A.867.867,0,0,1,7.778,18Z"
        fill={'url(#' + iconId + '-d)' + ''}
      />
      <path
        d="M5.5,17.87l1.782-1A1.417,1.417,0,0,0,8,15.631V8.752a1.418,1.418,0,0,1,.945-1.337L14,5.625V3.657a1.779,1.779,0,0,0-1.782-1.782h0a1.782,1.782,0,0,0-.876.23L5.129,5.613A2.219,2.219,0,0,0,4,7.546V17A1,1,0,0,0,5.5,17.87Z"
        fill={'url(#' + iconId + '-e)' + ''}
      />
      <rect width={24} height={24} fill="none" />
    </svg>
  )
}
