'use client'
import { type SVGProps, useId } from 'react'
export default function SvgIcon(props: SVGProps<SVGSVGElement>) {
  const iconId = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#035499"
        d="M11.525 5.025A3.5 3.5 0 009.05 4H5.5A3.5 3.5 0 002 7.5v16A3.5 3.5 0 005.5 27h21a3.5 3.5 0 003.5-3.5v-13A3.5 3.5 0 0026.5 7H14.121a1.5 1.5 0 01-1.06-.44z"
      />
      <path
        fill={'url(#' + iconId + '-a)' + ''}
        d="M3 12.5A2.5 2.5 0 015.5 10h5.25a2.5 2.5 0 002-1 2.5 2.5 0 012-1H26.5a2.5 2.5 0 012.5 2.5v13a2.5 2.5 0 01-2.5 2.5h-21A2.5 2.5 0 013 23.5z"
      />
      <g filter={'url(#' + iconId + '-b)' + ''}>
        <path
          fill="#FAFAFA"
          d="M13.5 12a1.5 1.5 0 00-1.5 1.5v10a.5.5 0 00.5.5H14v-2.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V24h1.5a.5.5 0 00.5-.5v-5a1.5 1.5 0 00-1.5-1.5H19v-3.5a1.5 1.5 0 00-1.5-1.5zm1.5 2.5a.5.5 0 11-1 0 .5.5 0 011 0m0 2.5a.5.5 0 11-1 0 .5.5 0 011 0m0 2.5a.5.5 0 11-1 0 .5.5 0 011 0m2-5a.5.5 0 11-1 0 .5.5 0 011 0m0 2.5a.5.5 0 11-1 0 .5.5 0 011 0m0 2.5a.5.5 0 11-1 0 .5.5 0 011 0m2 0a.5.5 0 11-1 0 .5.5 0 011 0M18 24v-2h-.997v2zm-1.997 0v-2H15v2z"
        />
      </g>
      <defs>
        <linearGradient
          id={iconId + '-a'}
          x1={11}
          x2={15}
          y1={8}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#319EE4" />
          <stop offset={1} stopColor="#1176CA" />
        </linearGradient>
        <filter
          id={iconId + '-b'}
          width={11}
          height={15}
          x={11}
          y={10.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_11146_3175"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-0.5} />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend
            in2="effect1_dropShadow_11146_3175"
            result="effect2_dropShadow_11146_3175"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_11146_3175"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
