'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
      {...props}
    >
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.694}
          y1={0.296}
          x2={13.868}
          y2={17.434}
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
          x1={6.084}
          y1={16.875}
          x2={17.898}
          y2={16.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fa2c46" />
          <stop offset={0.6} stopColor="#b0080b" />
        </linearGradient>
        <linearGradient
          id={iconId + '-c'}
          x1={14.1}
          y1={17.144}
          x2={8.818}
          y2={16.682}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.4} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={10.784}
          y1={1.018}
          x2={1.665}
          y2={14.041}
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
          id={iconId + '-e'}
          x1={10.971}
          y1={0.751}
          x2={9.04}
          y2={3.509}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.4} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
      </defs>
      <title>{'Union_20x'}</title>
      <path
        d="M10.616,18.686l5.038-1.36A1.821,1.821,0,0,0,17,15.569V4.432a1.82,1.82,0,0,0-1.346-1.757l-5.043-1.36L12,4.375V15Z"
        fill={'url(#' + iconId + '-a)' + ''}
      />
      <path
        d="M12,15H6.463a.894.894,0,0,0-.447,1.668L9.19,18.5a1.869,1.869,0,0,0,.937.251h0A1.869,1.869,0,0,0,12,16.877Z"
        fill={'url(#' + iconId + '-b)' + ''}
      />
      <path
        d="M12,15H6.463a.894.894,0,0,0-.447,1.668L9.19,18.5a1.869,1.869,0,0,0,.937.251h0A1.869,1.869,0,0,0,12,16.877Z"
        fill={'url(#' + iconId + '-c)' + ''}
      />
      <rect width={20} height={20} fill="none" />
      <path
        d="M4.324,14.885l2.09-1.176a1.15,1.15,0,0,0,.586-1V7.154a1.148,1.148,0,0,1,.723-1.068L12,4.375V3.13a1.88,1.88,0,0,0-1.88-1.88h0a1.882,1.882,0,0,0-.926.244L3.923,4.477A1.821,1.821,0,0,0,3,6.061v8.05A.889.889,0,0,0,4.324,14.885Z"
        fill={'url(#' + iconId + '-d)' + ''}
      />
      <path
        d="M4.324,14.885l2.09-1.176a1.15,1.15,0,0,0,.586-1V7.154a1.148,1.148,0,0,1,.723-1.068L12,4.375V3.13a1.88,1.88,0,0,0-1.88-1.88h0a1.882,1.882,0,0,0-.926.244L3.923,4.477A1.821,1.821,0,0,0,3,6.061v8.05A.889.889,0,0,0,4.324,14.885Z"
        fill={'url(#' + iconId + '-e)' + ''}
      />
    </svg>
  )
}
