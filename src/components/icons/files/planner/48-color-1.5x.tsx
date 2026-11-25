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
        d="M4 7.5A3.5 3.5 0 017.5 4H25a7 7 0 017 7v17.5a3.5 3.5 0 01-3.5 3.5H11a7 7 0 01-7-7z"
      />
      <path
        fill={'url(#' + iconId + '-b)' + ''}
        d="M5 7.5A2.5 2.5 0 017.5 5H25a6 6 0 016 6v17.5a2.5 2.5 0 01-2.5 2.5H11a6 6 0 01-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-c)' + ''}
        d="M5 7.5A2.5 2.5 0 017.5 5H25a6 6 0 016 6v17.5a2.5 2.5 0 01-2.5 2.5H11a6 6 0 01-6-6z"
      />
      <path
        fill={'url(#' + iconId + '-d)' + ''}
        d="M14.506 20.495a1.764 1.764 0 01-2.495 0l-2.494-2.494a1.764 1.764 0 010-2.495l2.494-2.494a1.764 1.764 0 012.495 0L17 15.506a1.764 1.764 0 010 2.495z"
      />
      <path
        fill={'url(#' + iconId + '-e)' + ''}
        d="M14.506 20.495a1.764 1.764 0 01-2.495 0l-2.494-2.494a1.764 1.764 0 010-2.495l2.494-2.494a1.764 1.764 0 012.495 0L17 15.506a1.764 1.764 0 010 2.495z"
      />
      <path
        fill={'url(#' + iconId + '-f)' + ''}
        d="M9.518 18a1.764 1.764 0 002.494 0l7.484-7.483a1.764 1.764 0 012.494 0l2.495 2.494a1.764 1.764 0 010 2.495L17 22.989a1.764 1.764 0 01-2.494 0z"
      />
      <path
        fill={'url(#' + iconId + '-g)' + ''}
        d="M9.518 18a1.764 1.764 0 002.494 0l7.484-7.483a1.764 1.764 0 012.494 0l2.495 2.494a1.764 1.764 0 010 2.495L17 22.989a1.764 1.764 0 01-2.494 0z"
      />
      <path
        fill={'url(#' + iconId + '-h)' + ''}
        d="M12.01 20.494a1.764 1.764 0 002.494 0l4.99-4.99a1.764 1.764 0 012.494 0L24.482 18a1.764 1.764 0 010 2.495l-4.989 4.989a1.764 1.764 0 01-2.494 0z"
      />
      <path
        fill={'url(#' + iconId + '-i)' + ''}
        d="M12.01 20.494a1.764 1.764 0 002.494 0l4.99-4.99a1.764 1.764 0 012.494 0L24.482 18a1.764 1.764 0 010 2.495l-4.989 4.989a1.764 1.764 0 01-2.494 0z"
      />
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={13.042}
          x2={16.812}
          y1={4}
          y2={32.275}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBB" />
          <stop offset={1} stopColor="#888" />
        </linearGradient>
        <linearGradient
          id={iconId + '-b'}
          x1={12.222}
          x2={15.511}
          y1={5}
          y2={31.311}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EBEBEB" />
        </linearGradient>
        <linearGradient
          id={iconId + '-d'}
          x1={13.258}
          x2={10.439}
          y1={12.495}
          y2={18.519}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8752E0" />
          <stop offset={1} stopColor="#541278" />
        </linearGradient>
        <linearGradient
          id={iconId + '-e'}
          x1={14.587}
          x2={12.294}
          y1={17.381}
          y2={15.129}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.122} stopColor="#3D0D59" />
          <stop offset={1} stopColor="#7034B0" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={iconId + '-f'}
          x1={21.248}
          x2={15.573}
          y1={10}
          y2={23.613}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={1} stopColor="#6C0F71" />
        </linearGradient>
        <linearGradient
          id={iconId + '-g'}
          x1={21.248}
          x2={15.573}
          y1={10}
          y2={23.613}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB45E0" />
          <stop offset={0.677} stopColor="#A829AE" />
          <stop offset={1} stopColor="#8F28B3" />
        </linearGradient>
        <linearGradient
          id={iconId + '-h'}
          x1={20.999}
          x2={18.333}
          y1={14.999}
          y2={25.999}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DCBFF" />
          <stop offset={1} stopColor="#00479E" />
        </linearGradient>
        <linearGradient
          id={iconId + '-i'}
          x1={21.143}
          x2={16.015}
          y1={15.284}
          y2={25.291}
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
          gradientTransform="matrix(13.7222 20.5833 -20.5833 7.71875 13.306 11.77)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.177} stopColor="#fff" />
          <stop offset={1} stopColor="#EFEFEF" />
        </radialGradient>
      </defs>
    </svg>
  )
}
