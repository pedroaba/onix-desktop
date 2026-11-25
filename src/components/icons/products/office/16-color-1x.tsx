'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 16 16"
      {...props}
    >
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11.301}
          y1={-0.435}
          x2={11.453}
          y2={14.468}
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
          x1={8.647}
          y1={-0.006}
          x2={0.831}
          y2={11.156}
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
          x1={8.806}
          y1={-0.235}
          x2={7.151}
          y2={2.129}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.4} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={4.63}
          y1={13.813}
          x2={15.354}
          y2={13.813}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fa2c46" />
          <stop offset={0.6} stopColor="#b0080b" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={11.921}
          y1={14.057}
          x2={7.118}
          y2={13.637}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.4} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
      </defs>
      <title>{'Union_16x'}</title>
      <path
        d="M8.808.448,10,3.045V12L8.8,15.555l4.1-1.227A1.537,1.537,0,0,0,14,12.854V3.173A1.537,1.537,0,0,0,12.911,1.7Z"
        fill={'url(#' + iconId + '-a)' + ''}
      />
      <rect width={16} height={16} fill="none" />
      <path
        d="M8.808.448A1.682,1.682,0,0,0,8.314.375h0A1.686,1.686,0,0,0,7.48.6l-4.7,2.675A1.546,1.546,0,0,0,2,4.615v6.614a.77.77,0,0,0,1.135.678l1.223-.658A1.216,1.216,0,0,0,5,10.176V5.728a1.221,1.221,0,0,1,.8-1.146L10,3.045V2.061A1.687,1.687,0,0,0,8.808.448Z"
        fill={'url(#' + iconId + '-b)' + ''}
      />
      <path
        d="M8.808.448A1.682,1.682,0,0,0,8.314.375h0A1.686,1.686,0,0,0,7.48.6l-4.7,2.675A1.546,1.546,0,0,0,2,4.615v6.614a.77.77,0,0,0,1.135.678l1.223-.658A1.216,1.216,0,0,0,5,10.176V5.728a1.221,1.221,0,0,1,.8-1.146L10,3.045V2.061A1.687,1.687,0,0,0,8.808.448Z"
        fill={'url(#' + iconId + '-c)' + ''}
      />
      <path
        d="M10,12H5.12a.957.957,0,0,0-.473,1.789l2.842,1.616a1.678,1.678,0,0,0,.83.22h0A1.678,1.678,0,0,0,10,13.945Z"
        fill={'url(#' + iconId + '-d)' + ''}
      />
      <path
        d="M10,12H5.12a.957.957,0,0,0-.473,1.789l2.842,1.616a1.678,1.678,0,0,0,.83.22h0A1.678,1.678,0,0,0,10,13.945Z"
        fill={'url(#' + iconId + '-e)' + ''}
      />
    </svg>
  )
}
